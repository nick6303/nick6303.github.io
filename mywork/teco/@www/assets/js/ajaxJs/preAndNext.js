(function(){
    var preAndNextAjax =  function(){
        var _this = this;
        _this.base = $("base").attr('href');
        
        _this.href = location.href;
       
        preAndNextAjax.prototype.init = function() {
            _this.eleInit();
            _this.close();
            _this.press();
            
        };
        this.eleInit = function(){
            _this.button = $('.changeDetail a');
            _this.closeButton = $('.swpmodal-close');
            _this.slick = $(".new_slick");

        }
        this.press = function(){
            _this.button.click(function() {
                console.log( $(this).data("info") );
                _this.new_id  = $(this).data("info");
                _this.closeButton.click();
                $.swpmodal({
                    type: 'ajax',
                    url: _this.base + '/News/detail/' + _this.new_id,
                    afterLoadingOnShow: function(data, el) {
                        $(".new_slick").slick({
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            dots: true,
                            prevArrow: '<div class="prev-button icon-arrow-left"></div>',
                            nextArrow: '<div class="next-button icon-arrow-right"></div>',
                            responsive: [{
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                }
                            }]
                        });
                        
                        $.getScript( "assets/js/ajaxJs/share.js" )
                          .done(function( script, textStatus ) {
                          })
                        .fail(function( jqxhr, settings, exception ) {
                          $( "div.log" ).text( "Triggered ajaxError handler." );
                        });

                        $.getScript( "assets/js/ajaxJs/preAndNext.js" )
                          .done(function( script, textStatus ) {

                          })
                        .fail(function( jqxhr, settings, exception ) {
                          $( "div.log" ).text( "Triggered ajaxError handler." );
                        });

                       
                    },
                    beforeClose: function(data, el) {
                        $(".new_slick").slick('unslick');
                        
                    }
                });
                _this.href = location.href;
                
                setTimeout(function() {
                    
                    changeCategory( _this.href, _this.new_id );

                    if( !location.href.match('Products') ){
                        var allNewsPath = location.href.replace("Products/share","Products/" + $(".news_Category_id").val()+ "/share");
                        
                        window.history.replaceState(null, null,  allNewsPath);
                    }
                }, 1500);

            });

        }
        if( location.href.match('Products/share') ){
            var allNewsPath = location.href.replace("Products/share","Products/" + $(".news_Category_id").val()+ "/share");
            
            window.history.replaceState(null, null,  allNewsPath);
        }
        this.close = function(){
            _this.closeButton.click(function(){
                _this.href = location.href;
                var nowNews = _this.href.split("/");
                var Category_id = nowNews.pop();
                var newPath =  _this.href.split('/share/detail/');
                var now_news = newPath[0].substr(-1);
                [].slice.call( $(".new_chosen li a") ).forEach(function(input){
                    if( parseInt($(input).data("info")) == parseInt(now_news) ){
                        $(input).click();
                    }
                })
                window.history.replaceState(null, null,  newPath[0]);
            })
        }

        function changeCategory( href, new_id ){
            var hrefArray = href.split("/").pop();
            if( hrefArray != $(".news_Category_id").val() ){
                var href = href.replace(hrefArray, $(".news_Category_id").val());
            }

            window.history.replaceState(null, null,  href + "/share/detail/" +  new_id);

        } 

    }

    var handlpreAndNext = new preAndNextAjax();
    handlpreAndNext.init();
    
})();
Ajax

