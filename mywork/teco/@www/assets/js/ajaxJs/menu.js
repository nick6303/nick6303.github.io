// (function(){
// 	var getMenu = function(){
// 		var _this = this;
// 		_this.base = $('base').attr('href');
// 		_this.menuBar = $(".navbox.navboxFixed li a");
// 		_this.menuSubBar = $(".navbox.navboxFixed div.inner");
// 		getMenu.prototype.init = function() {
// 			_this.getMenuajax();
// 		};

// 		this.getMenuajax = function(){
// 			_this.menuBar.hover( function( ){
// 				var number = $(this).data("class");
// 	      		// [].slice.call( _this.menuSubBar ).forEach(function(input){
// 	      		// 	if( $(input).hasClass( "inner" + number ) ) {
// 	      		// 		console.log(123);
// 	      		// 		$(input).show();
// 	      		// 	}else{
// 	      		// 		$(input).hide();
// 	      		// 	}
// 	      		// });
// 			});
// 		}
// 	}

// 	var handleGetMenu = new getMenu();
// 	handleGetMenu.init();

// })();