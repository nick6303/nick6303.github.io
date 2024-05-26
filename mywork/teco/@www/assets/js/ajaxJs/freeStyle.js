(function(){
	var getFreeStyle = function(){
		var _this = this;
		_this.base = $('base').attr('href');
		_this.baseSplit = $('base').attr('href').split("/");
		_this.lang =  _this.baseSplit.pop();

		_this.seriesBanner = $(".product_nav ul li a,.product_nav ul a");
		_this.getinit = $(".product_nav ul li a.pick");
		_this.FreeStyleSection = $(".free-style");
		_this.product_more_bottom = $(".product_more_bottom");
		_this.itemId = $(".free-style img");
		
		getFreeStyle.prototype.init = function() {
			_this.FreeStyle();
			_this.initpage();
			_this.loadMore();

		};

		//一開始登入時
		this.initpage = function(){
			var classId = _this.getinit.data("class");
			var seriesId = _this.getinit.data("series");

			//從漢堡menu進入時
			if( !Number(seriesId) ){
				var href = location.href;
				var hrefArray = href.split("/");
				var hrefSeries = hrefArray.pop();
				var hrefClass = hrefArray.pop();
				if( !isNaN(hrefClass) ){
					$(".pick").removeClass("pick");
					$(".product_nav a[data-series='"+ hrefSeries +"']").addClass('pick');
					seriesId = hrefSeries;
					classId = hrefClass;
				}
			}

			getHtml(classId, seriesId);
			getUrl(classId, seriesId);
		}

		this.FreeStyle = function(){
			_this.seriesBanner.click(function(){
				_this.getinit = $(".product_nav ul li a.pick");
				var classId = $(this).data("class");
				var seriesId = $(this).data("series");

				getHtml(classId, seriesId);
				getUrl(classId, seriesId);
			});
		}

		this.loadMore = function(){
			_this.product_more_bottom.click(function(){
				_this.getinit = $(".product_nav ul li a.pick");
				var classId = _this.getinit.data("class");
				var seriesId = _this.getinit.data("series");
				getMoreData(classId, seriesId)
			});
		}

		function getUrl(classId, seriesId){
			$(document).ready(function(){
				if( seriesId > 0 ){

					window.history.replaceState(null, null, _this.lang +"/Products/Category/"+ classId+ "/"+  seriesId  );
				}

				if( seriesId <= 0 ){
					
					window.history.replaceState(null, null, _this.lang +"/Products/Category/"+ classId);
				}
			})
		}

		function getHtml(classId, seriesId){
			var streamUrl = '/ajax/Category/' + classId;

			$(".load_more").hide();
			//判斷系列 隱藏loadmore
			if( seriesId > 1 ){
				streamUrl = streamUrl +'/' + seriesId;
				$(".load_more").show();
			}

			$.ajax({
          		  	url: _this.base + streamUrl,
          		  	type: 'get',
          		  	error: function (xhr) {
          		  	  result = false;
          		  	},
          		  	success: function (response) {
          		  		_this.FreeStyleSection.empty();
          		  		_this.FreeStyleSection.append(response);
          		  		reloadBlazy();
          		  	}
          	});
		}

		function getMoreData(classId, seriesId){
			_this.itemId = $(".free-style img");
			_this.itemIdArray = [];
			[].slice.call( _this.itemId ).forEach( function(input,key){
				_this.itemIdArray.push( $(input).data('id') ) ;
				
			});

			$.ajax({
          		  	url: _this.base + "/ajax/getMoreData",
          		  	data:{ class_id:classId, series_id:seriesId, id_array:_this.itemIdArray },
          		  	type: 'get',
          		  	error: function (xhr) {
          		  	  result = false;
          		  	},
          		  	success: function (response) {
          		  		_this.FreeStyleSection = $(".free-style");
          		  		_this.FreeStyleSection.append(response);
          		  		reloadBlazy();
          		  	}
          	});
		}

		function reloadBlazy(){
			var bLazy = new Blazy({
                success: function(ele) {
                	//執行waypoint
                	
                },
                error: function (ele) {
                	
                	//執行兩次
                	//time(reloadBlazy(),2);
      		  	},
        	});

        	$.getScript( "assets/js/ajaxJs/reloadwaypoint.js" )
                      	.done(function( script, textStatus ) {
                      	})
	                .fail(function( jqxhr, settings, exception ) {
	                    $( "div.log" ).text( "Triggered ajaxError handler." );

	                });
		}

	}

	var handleGetFreeStyle = new getFreeStyle();
	handleGetFreeStyle.init();

})();