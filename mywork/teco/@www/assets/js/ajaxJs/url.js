(function(){
	var geturl = function(){
		var _this = this;
		_this.base = $('base').attr('href');
		_this.baseSplit = $('base').attr('href').split("/");
		_this.news_area = $('.new_grid');
		_this.news_area_clear = $('.new div.grid-item');
		//_this.news_area_clear_second = $('section div.grid-item');
		_this.getNewsId = location.href.split("/");
		_this.click = $(".new_chosen li a");
		_this.lang =  _this.baseSplit.pop();
		_this.news_category = 0;
		_this.tag_click = "";
		geturl.prototype.init = function() {
			_this.url();
			_this.clickTag();
			_this.refleshByF5();
			// _this.grid();
			// _this.tag();
		};

		this.url = function(){
			$(document).ready(function(){
				var news_id =  _this.getNewsId.pop();
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
	                    _this.grid();
	                    _this.news_area.masonry('reloadItems')
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

        this.grid = function(){
            if ($('.new_grid').size() > 0) {
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
                        }
                    });
                });
            }
        }

        this.tag = function(){
            $('a.tag_click').click(function(){
            	_this.tag_click = $(event.target).data('info');
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
                        _this.grid();
                        _this.news_area.masonry('reloadItems')
                        _this.tag();
                        console.log( _this.tag_click );
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

        

	}

	var handleUrl = new geturl();
	handleUrl.init();

})();