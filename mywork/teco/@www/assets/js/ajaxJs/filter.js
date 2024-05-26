(function(){
	var FilterAjax = function(){
		var _this = this;
		_this.base = $('base').attr('href');
		_this.url = "";
		_this.urlArray = "";
		_this.filterchange = $(".product_nav li a");
		_this.referContent = $(".item_title ul");
		_this.referChecked = "";
		_this.featureContent = $(".feature_item ul");
		_this.featureChecked = "";
		_this.tooltipSlider = document.getElementById('slider-tooltips');
		_this.sendButtom = $(".bottom_send");
		_this.priceData = "";
		FilterAjax.prototype.init = function() {
			_this.Filter();
			_this.getInit();
			_this.send();
		};

		this.getInit = function(){
			$(document).ready(function(){
				var productId = getId();
				initPrice();
				getFilter(productId.category,productId.series);
			})
		};

		//點選系列改變時
		this.Filter = function(){
			_this.filterchange.click(function(){
				var productId = getId();
				getFilter(productId.category, productId.series);
			});
		};

		//抓 篩選器中項目id
		this.send = function(){
			_this.sendButtom.click(function(){
				_this.referChecked = $(".item_title ul a.check");
				_this.featureChecked = $(".feature_item ul a.check");
				var series = $(".product_nav li a.pick").data("series");
				var category = $(".product_nav li a.pick").data("class");
				var refer = getCheckItem( _this.referChecked );
				var feature = getCheckItem( _this.featureChecked );
				var price = changePrice();
				getDataBySend(refer, feature, category, series, price );
			});
		}

		//取得目前的分類及系列id
		function getId(){
			_this.url = location.href;
			_this.urlArray = _this.url.split("/");
			var productId = new Object();
			productId['series'] = _this.urlArray.pop();
			productId['category'] = _this.urlArray.pop();

			if( isNaN( productId['category'] ) ){
				productId['category'] = productId['series'];
				productId['series'] = "";
			}
			return productId;
		};

		function initPrice(){
			noUiSlider.create(_this.tooltipSlider, {
			    start: [0, 5000],
			    tooltips: [true, true],
			    connect: true,
			    step: 1000,
			    range: {
			        'min': 0,
			        'max': 1000,
			    },
			    format: wNumb({
		            decimals: 0,
		            prefix: '$ ',
		        })
			});
		}

		function getPrice(response){

			var priceData = response;
			//後台找不到這個系列產品
			if(!priceData[0]['maxPrice']){
				priceData[0]['maxPrice'] = 20000;
			}
			if(!priceData[0]['priceRank']){
				priceData[0]['priceRank'] = 1000;
			}

			_this.tooltipSlider.noUiSlider.updateOptions({
			    start: [0, 5000],
			    tooltips: [true, true],
			    connect: true,
			    step: priceData[0]['priceRank'],
			    range: {
			        'min': 0,
			        'max': priceData[0]['maxPrice'],
			    },
			    format: wNumb({
		            decimals: 0,
		            prefix: '$ ',
		        })

			});
		}

		function changePrice(){
			_this.tooltipSlider = document.getElementById('slider-tooltips');
			return _this.tooltipSlider.noUiSlider.get();
		}

		//ajax 載入後從新定義
		function afterAjax(){
			_this.filter_click = $('.search_box_right li a');
			//篩選選項
			_this.referContent = $(".item_title ul");
			_this.featureContent = $(".feature_item ul");
			_this.freeStyle = $(".free-style");
		}

		//取得篩選內容
		function getFilter(category_id,series_id){
			$.ajax({
      		  	url: _this.base + '/Products/filter',
      		  	data:{ 
      		  			category:category_id,
      		  			series:series_id
      		  		},
      		  	type: 'get',
      		  	error: function (xhr) {
      		  	 	result = false;
      		  	},
      		  	success: function (response) {
  		  			_this.referContent.empty();
	  		  	    _this.referContent.append(response.referHtml);
	  		  	    _this.featureContent.empty();
	  		  	    _this.featureContent.append(response.featureHtml);
	  		  	    getPrice(response.price);
	  		  	    afterAjax();
	  		  	    _this.filter_click.click(function(event) {
					    $(event.target).parent("a").toggleClass('check');
					});
      		  	}
          	});
		};

		//傳入勾選項目 refer feature 回傳陣列資料
		function getCheckItem(element){
			var array = [];
			[].slice.call( element ).forEach(function(input, key){
				$(input).children().data("info");
				array.push( $(input).children().data("info") );
			});
			return array;
		}

		//篩選後 送出條件
		function getDataBySend(refer = [], feature = [], category_id, series_id, price ){
			console.log(refer, feature, category_id, series_id, price);
			$.ajax({
      		  	url: _this.base + '/Products/filter/send',
      		  	data:{ 
      		  			refer_id:refer,
      		  			feature_id:feature,
      		  			series_id:series_id,
      		  			category_id:category_id,
      		  			price:price,
      		  	},
      		  	type: 'get',
      		  	error: function (xhr) {
      		  	 	result = false;
      		  	},
      		  	success: function (response) {
      		  		
  		  			afterAjax();
  		  			_this.freeStyle.empty();
  		  			_this.freeStyle.append(response);
  		  			reloadBlazy();
      		  	}
          	});
		}

		function reloadBlazy(){
			var bLazy = new Blazy({
                success: function(ele) {
                	//執行waypoint
                	$.getScript( "assets/js/ajaxJs/reloadwaypoint.js" )
	                     .done(function( script, textStatus ) {
	                     })

	                .fail(function( jqxhr, settings, exception ) {
	                    $( "div.log" ).text( "Triggered ajaxError handler." );
	                });
                },
                error: function (ele) {
                	//執行兩次
                	console.log( "error" );
                	//reloadBlazy();
      		  	},
        	});
		}

	}

	var handleGetFilter = new FilterAjax();
	handleGetFilter.init();

})();