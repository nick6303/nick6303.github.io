(function(){
    var getHtml = function(){
        var _this = this;
        _this.news_category = "";
        _this.news_area = $('.new_grid');
        _this.getNewsId = location.href.split("/");
        _this.news_area_clear = $('.new div.grid-item');
        _this.base = $('base').attr('href');
        _this.baseSplit = $('base').attr('href').split("/");
        _this.click = $('.new_chosen li a');
        _this.lang = _this.baseSplit.pop();
        _this.tag_click = $('a.tag_click');
        _this.news_category = 0;
        _this.tag_category = "";
        _this.is_tag = false;
        _this.input = $('.news_category');
        _this.is_open = $('.is_open');
        getHtml.prototype.init = function() {
            _this.ajax();
            _this.grid();
            _this.tag();
            _this.url();
            _this.navBar();
            _this.clickTag();
            _this.refleshByF5();
            _this.open();
        };

        this.ajax = function(){
           _this.click.click(function( event ){
                 _this.news_category = $(event.target).data('info');

                $.ajax({
                    url: _this.base + '/News/ajax',
                    data:{category:_this.news_category},
                    type: 'get',
                    error: function (xhr) {
                      result = false;
                    },
                    success: function (response) {

                        _this.news_area.empty();
                        _this.news_area.append(response);
                        _this.news_area.masonry('reloadItems')
                        _this.grid();
                        _this.tag();
                        $.getScript( "assets/js/ajaxJs/again.js" )
                          .done(function( script, textStatus ) {
                          })
                        .fail(function( jqxhr, settings, exception ) {
                          $( "div.log" ).text( "Triggered ajaxError handler." );
                        });

                    }
                });
            });
        }

        this.navBar = function(){
            var leng = _this.getNewsId.length;
            $(".new_chosen li a[data-info='"+ _this.getNewsId[ leng-1 ] +"']").parent("li").addClass('pick');
        }

        this.open = function(){
            _this.is_open = $('.is_open').val();
            _this.href = location.href;
            _this.grim = $(".grid-item div");
            if( _this.href.match('/share/detail/') && !_this.is_open){
                var getNew_Id = _this.href.split("/").pop();
                [].slice.call( _this.grim ).forEach(function(ele){
                    if( parseInt($(ele).data("info")) == parseInt(getNew_Id) ){
                        $(document).ready(function(){
                            ele.click();
                        })
                    }
                })
            }
        }

        this.grid = function(){
            var $grid = $('.new_grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true

            });

            $grid.imagesLoaded().progress(function() {
                $grid.masonry('layout');
                var bLazy = new Blazy({
                    success: function(ele) {
                        $grid.masonry('layout');
                        //載入後 抓最後一項id知道目前資料是第幾項
                    }
                });
            });
        }

        this.tag = function(){
            $('a.tag_click').click(function(){
                _this.tag_category= $(event.target).data('info');
                $.ajax({
                    url: _this.base + '/News/ajax',
                    data:{tag_id:$(event.target).data('info'),is_tag:true},
                    type: 'get',
                    error: function (xhr) {
                      result = false;
                    },
                    success: function (response) {

                        _this.news_area.empty();
                        _this.news_area_clear.empty()
                        _this.news_area.append(response);
                        _this.news_area.masonry('reloadItems')
                        _this.grid();
                        _this.tag();
                        $('.from_tag').attr('data-info', _this.tag_category);
                        
                        $.getScript( "assets/js/ajaxJs/again.js" )
                          .done(function( script, textStatus ) {
                          })
                        .fail(function( jqxhr, settings, exception ) {
                          $( "div.log" ).text( "Triggered ajaxError handler." );
                        });
                    }
                });
            });
        }

        this.url = function(){
            $(document).ready(function(){
                var news_id = _this.getNewsId.pop();
                if(!isNaN(news_id)){
                    window.history.replaceState(null, null, _this.lang +"/News/Products/"+ news_id );
                }
            })
        }

        this.clickTag = function(){
            $(_this.click).click(function(){
                var clicknews_id = $(event.target).data("info");
                if( !clicknews_id ) {
                    window.history.replaceState(null, null, _this.lang + "/News/Products" );
                }else {
                    window.history.replaceState(null, null, _this.lang + "/News/Products/"+ clicknews_id );
                }
            })
        }

        this.refleshByF5 = function(){
            if(_this.getNewsId.pop() == "Products" ){
                $.ajax({
                    url: _this.base + '/News/ajax',
                    data:{category:_this.news_category},
                    type: 'get',
                    error: function (xhr) {
                      result = false;
                    },
                    success: function (response) {
                        _this.news_area.empty();
                        _this.news_area_clear.empty()
                        //_this.news_area_clear_second.empty()
                        _this.news_area.append(response);
                        _this.news_area.masonry('reloadItems')
                        _this.grid();
                        _this.tag();
                        $.getScript( "assets/js/ajaxJs/again.js" )
                          .done(function( script, textStatus ) {
                          })
                        .fail(function( jqxhr, settings, exception ) {
                          $( "div.log" ).text( "Triggered ajaxError handler." );
                        });
                    }
                });
            }
        }
      
    }

    var handleGetHtml = new getHtml();
    handleGetHtml.init();

})();