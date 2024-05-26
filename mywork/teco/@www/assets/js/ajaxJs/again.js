(function(){
    var newslighbox =  function(){
        var _this = this;
        _this.newsClick = $('.grid-item .new_txt p,.grid-item .new_txt h4,.grid-item .new_img,.footercontent .small_slick li a');
        _this.href =  location.href;
        _this.base = $("base").attr('href');
       
        _this.pickId = "";
        _this.is_open = $('.is_open');
        var news_share_id = "";
        newslighbox.prototype.init = function() {
            // _this.newsInit();
            _this.newsLight();
            
        };

        this.newsLight = function ( ){
            _this.newsClick.click(function(){
                _this.newsId = $(this).data("info");
                getDetail( _this.newsId );
            })
        }

        function getDetail( news_id ){
            $.swpmodal({
                type: 'ajax',
                url: _this.base + '/News/detail/' + news_id,
                afterLoadingOnShow: function(data, el) {
                    $('.new_slick').slick({
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
                    if( !location.href.match('/share/detail/') ){
                        window.history.replaceState(null, null, location.href + "/share/detail/" +  news_id);
                        
                    }
                    
                    $('.gotop').click(function(event) {
                        event.preventDefault();
                        $(".swpmodal-container").animate({ scrollTop: 0 }, 600);
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
                    $('.new_slick').slick('unslick');
                }
            });

            
        }
    }

    var handleNewsLight = new newslighbox();
    handleNewsLight.init();
    
})();

