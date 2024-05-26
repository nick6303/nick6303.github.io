(function(){
    var getDiffType = function(){
        var _this = this;
        _this.base = $('base').attr('href');
        _this.baseSplit = $('base').attr('href').split("/");
        _this.lang =  _this.baseSplit.pop();
        _this.location = "";
        _this.type_id = "";
        _this.refer_id = "";
        _this.div = $('.product_move');
        _this.series_Click = $('.series_field div li');
        _this.series_bar = $('.series_field div li');
        getDiffType.prototype.init = function() {
            _this.ajax();
            _this.choseType();
        };

        this.ajax = function(){
            _this.series_Click.click(function(){
                _this.type_id = $(this).children().data("type");
                _this.refer_id = $(this).children().data("items");

                $.ajax({
                    url: _this.base + '/ajax/getItem/diffType',
                    data:{refer_id:_this.refer_id,type_id:_this.type_id},
                    type: 'get',
                    error: function (xhr) {
                      result = false;
                    },
                    success: function (response) {
                        _this.div.empty();
                        _this.div.append(response);
                        url(_this.refer_id,_this.type_id);
                        var bLazy = new Blazy();
                            $("a").click(function(a) {
                                a.preventDefault();
                                var aHref = $(this).attr("href"); //抓連結裡面的href
                                var aTarget = $(this).attr("target"); //抓連結裡面的target(開啟網頁的方式)
                                var aArr = aHref.split("/"); //把aHref裡面的網址切成陣列(判斷用 / 分隔)
                                var aFilePath = aArr.pop(); //抓取上個陣列最後一個字串(陣列會少一個)
                                var aFilePrevPath = aArr.pop();
                                var aTargetPath = aFilePath.substr(0, 1); //抓取字串第一字元一個字元

                                var locHref = location.href; //抓目前網址
                                var locArr = locHref.split("/"); //把網址切成陣列(判斷用 / 分隔)
                                var locFilePath = locArr.pop(); //抓取上個陣列最後一個字串(陣列會少一個)
                                var locFilePrevPath = locArr.pop();
                                var locTargetPath = aFilePath.substr(0, 1); //抓"連結"裡面的最後一個字串第一字元一個字元

                                if (aFilePath == "") { aFilePath = "index.html"; }
                                if (locFilePath == "") { locFilePath = "index.html"; }
                                if (aArr == "") { aFilePrevPath = locFilePrevPath; }

                                if (aTarget == "_blank") {
                                    window.open(aHref); //傳遞另開視窗路徑至 window.open(aHref)
                                    aTarget = "";

                                } else if (aHref.indexOf("mailto:") >= 0 || aHref.indexOf("tel:") >= 0) {
                                    window.location.assign(aHref);
                                    aTarget = "";

                                } else if (aHref.indexOf("javascript") >= 0) {} else if (aHref.indexOf("mp4") >= 0) {} else if (aHref.indexOf("youtube") >= 0) {} else if (aFilePrevPath != locFilePrevPath) {
                                    pagechange(aHref); //傳遞路徑至 pagechange(aHref)
                                    aHref = "";

                                } else if (aFilePath != locFilePath && aTargetPath != "#" && locTargetPath != "#" && aHref != "") {
                                    if (aArr.pop() == locArr.pop() && aFilePath == locFilePath) {} else {
                                        pagechange(aHref); //傳遞路徑至 pagechange(aHref)
                                        aHref = "";
                                    }
                                } else {
                                    var target = $(this.hash); //抓當前網址的#id
                                    // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                    if (target.length) {
                                        $('html, body').animate({ scrollTop: target.offset().top }, { duration: 500, easing: 'easeInOutCirc' });
                                    } //end if
                                } //end else
                            }) //end click function
                            $('._youtube').click(function(event) {
                                event.preventDefault();
                                var c = $('<div class="box-modal" id="exampleModal" />');
                                var thevideo = $(this).attr('href');
                                c.html('<iframe  src="' + thevideo + '" frameborder="0" allowfullscreen><');
                                c.prepend('<div class="box-modal_close swpmodal-close">&times;</div>');
                                $.swpmodal({
                                    content: c,
                                    closeOnEsc: false,
                                    closeOnOverlayClick: false,
                                    overlay: {
                                        css: {
                                            backgroundColor: '#000',
                                            opacity: .75
                                        }
                                    }
                                });
                            });
                    }
                });
            });
        }

        this.choseType = function(){
            $(document).ready(function(){
                _this.location = location.href;
                var hrefArray = _this.location.split("/");
                var type_id = hrefArray.pop();
                var refer_id = hrefArray.pop();
                $('.series_field div li a' + "." + type_id ).click()
                console.log( $('.series_field div li a' + "." + type_id ).click() );
            })
        };

        function url(refer_id, type_id){
            window.history.replaceState(null, null, _this.lang +"/Products/Items/"+ refer_id + "/" + type_id );
        }
    }

    var handleGetDiffType = new getDiffType();
    handleGetDiffType.init();

})();