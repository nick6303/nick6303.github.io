(function(){
	var geturl = function(){
		var _this = this;
		_this.base = $('base').attr('href');
		_this.baseSplit = location.href.split("/");
		_this.news_area = $('.new_grid');
		//藏category_id
		_this.input = $('.new_category');
		_this.input.val(_this.baseSplit.pop())
		_this.loadMore = $('.new_more');
		_this.click = $('.new_chosen li a');
		_this.alllastinput = "";
		_this.tag_category = "";
		_this.all_news_id = [];
		_this.load_more_tag = false;
		geturl.prototype.init = function() {
			_this.more();
			_this.grid();
			_this.tag();
			_this.clickbanner();
			_this.afterload();
		};

		this.more = function(){
			$(_this.loadMore).click(function(){
				if( !$(this).hasClass('clicked') ){
					$(this).addClass("clicked");
				}else{
					return false;
				}
				_this.afterload();
				_this.category = _this.input.val();
				//印出葉面以載入資料
				// console.log(_this.all_news_id);
				//印出是否從load more tag
				// console.log(_this.load_more_tag)

				$.ajax({
	                url: _this.base + '/News/ajax',
	                data:{	
	                		is_loadmore:1, //是否loadmore
	                		category:_this.category, //分類id
	                		all_id:_this.all_news_id, //頁面產品id
	                		is_tag:_this.load_more_tag, //是否按tag後 loadmore
	                		tag_category:_this.tag_category, //tag 分類
	                     },
	                type: 'get',
	                error: function (xhr) {
	                  result = false;
	                },
	                success: function (response) {
	                	$('.new_more').removeClass('clicked');
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
			})
		}
		//當選擇不同類別時 藏id在 input hidde裡面
		this.clickbanner = function(){
			$(_this.click).click(function(){
				_this.input.val($(event.target).data("info"));
			})
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
	                            //載入後 抓最後一項id知道目前資料是第幾項
	                            //_this.afterload();
	                        },
	                        error: function (ele) {
			                	//bLazy.revalidate();
			                	//執行兩次
			                	console.log("error")
			                	//time(reloadBlazy(),2);
			      		  	},
                    	});
                });
            }
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

        this.afterload = function(){
        	$(document).ready(function(){
        		_this.alllastinput =  $('.new div.new_grid .grid-item div:first-child.new_img,.new div.new_grid .grid-item div:first-child.new_txt');
        		_this.load_more_tag = $(".from_tag").val();
        		_this.tag_category = $(".from_tag").data('info');
        		[].slice.call( _this.alllastinput ).forEach( function(input) {
					if( $(input).data("info") ){
						if( _this.all_news_id.indexOf($(input).data("info")) == -1 ){
							_this.all_news_id.push( $(input).data("info") );
						}
					}
                });
        	})
        }
	}

	var handleUrl = new geturl();
	handleUrl.init();

})();