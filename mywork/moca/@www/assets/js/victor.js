var Chapcha={};
var Shop={}
var baseUrl=$("base").attr('href');
var All_v={};
var VisitFunction={};
var ExploreFunction={};
var About={};
var SuooprtFunction=
{
	SuppoutDetailOpen:function()
	{
		$(".support_detail_open").on('click',function(){
			ifIsNogoThanStop('no');
			var thisClickTitle=$(this).attr("data_title");
			var url=baseUrl+"/Support/SupportDetail";
			var _token=$("#the_token").val();
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					title:thisClickTitle
				}
			})
			.done(function(data) {
				//寫在原本js裡面的東西
				var dist = $(window).scrollTop();
				var lbox_id = 'support';
				$("body").append("<article class='hide_lightbox " + lbox_id + "' data-dist='" + dist + "'></article>");
				$(".hide_lightbox").html(data);
				$('.a-media-list--100').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<div class="a-btn-prev"><p>Previous</p><span></span></div>',
					nextArrow: '<div class="a-btn-next"><span></span><p>Next</p></div>',
				})
				/*給燈箱一個 open 讓動畫作動*/
				if ($(".hide_lightbox").length > 0) {

					setTimeout(function() {

						$(".hide_lightbox").addClass('open');

					}, 100);

				}
				a_lock_bScroll();
				//關燈箱事件
				var ajaxCloseBtn = $('.hide_lightbox .ajax_close');
				ajaxCloseBtn.on('click', function() {
					ifIsNogoThanStop('go');
					if($("body").hasClass("Fclick"))
					{
						$("body").removeClass("Fclick")
					}
					else
					{
						window.history.pushState("", "", baseUrl+"/Support/");
					}
					unlock_bScroll();
					var dist = $(this).closest('.hide_lightbox').attr('data-dist');
					$('.hide_lightbox').addClass('close');
					setTimeout(function() {
						$('.hide_lightbox').remove();
						unlock_bScroll();
						window.scrollTo(1, dist);
					}, 500);
					mocaSNav.navBar();
					headerFixed();
					console.log(123);
					
				});

				/*extra js*/
				window.history.pushState("", "", baseUrl+"/Support/"+thisClickTitle);
				$(window).on('popstate', function() 
				{
					$("body").addClass("Fclick");
					$(".close.ajax_close").click();
					return 0;
				});
			})
		})
	},
	AutoOpenSupportDetailSoFast:function()
	{
		if( $("#autoOpen").length > 0 ) 
		{
			
			ifIsNogoThanStop('no');
			var thisClickTitle=$("#autoOpen").attr("data_title");
			var url=baseUrl+"/Support/SupportDetail";
			var _token=$("#the_token").val();
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					title:thisClickTitle
				}
			})
			.done(function(data) {
				//寫在原本js裡面的東西
				var dist = $(window).scrollTop();
				var lbox_id = 'support';
				$("body").append("<article class='hide_lightbox " + lbox_id + "' data-dist='" + dist + "'></article>");
				$(".hide_lightbox").html(data);
				$('.a-media-list--100').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<div class="a-btn-prev"><p>Previous</p><span></span></div>',
					nextArrow: '<div class="a-btn-next"><span></span><p>Next</p></div>',
				})
				/*給燈箱一個 open 讓動畫作動*/
				if ($(".hide_lightbox").length > 0) {

					setTimeout(function() {

						$(".hide_lightbox").addClass('open');

					}, 100);

				}
				a_lock_bScroll();
				//關燈箱事件
				var ajaxCloseBtn = $('.hide_lightbox .ajax_close');
				ajaxCloseBtn.on('click', function() {
					ifIsNogoThanStop('go');
					if($("body").hasClass("Fclick"))
					{
						$("body").removeClass("Fclick")
					}
					else
					{
						window.history.pushState("", "", baseUrl+"/Support");
					}
					unlock_bScroll();
					var dist = $(this).closest('.hide_lightbox').attr('data-dist');
					$('.hide_lightbox').addClass('close');
					setTimeout(function() {
						$('.hide_lightbox').remove();
						unlock_bScroll();
						window.scrollTo(1, dist);
					}, 500);
					mocaSNav.navBar();
					headerFixed();
				});

				/*extra js*/
				window.history.pushState("", "", baseUrl+"/Support/"+thisClickTitle);
				$(window).on('popstate', function() 
				{
					$("body").addClass("Fclick");
					$(".close.ajax_close").click();
					return 0;
				});
			})
		}
	},
	SupportFormSubmit:function()
	{
		

		Chapcha.ActiveChangeCap();

		$('#submit').on('click',function(){
			//這個方訊可以讓他不會一直連點]
			$('#submit').attr('disabled','disabled');
			var Myform = $("form")[0];
			var formData = new FormData(Myform);
			var _token=$("#the_token").val();
			$.ajax({
				url:baseUrl+"/Support/LetUsSubmitSupportForm",
				type:"POST",
				enctype: 'multipart/form-data',
				processData: false,
				contentType: false,
				data:formData
				

			})
			.done(function(data){
					// 沒過
					
					if(data.pass != 1)
					{
						$(".changeCap").click()

						alert(data.err_msg);

					}
					//通過發信
					else
					{	
						$("#reset").click();
						alert(data.success_msg);
					}

					$('#submit').removeAttr('disabled','');
				});

		});


	},
	ResetSupportForm:function()
	{
		$("#reset").click(function(){
			$('form input').each(function(){
				if($(this).attr("name")!=="_token")
				{
					$(this).val("");
				}
			})
		});
	}
}


function ifIsNogoThanStop (go)
{
	$("body").attr('is_go',go);
	if($("body").attr('is_go') =="no" )
	{
		
		return 0;
	}
	else
	{

	}
}

Chapcha=
{
	ActiveChangeCap:function(){

		if($("body").attr("ActiveChangeCap")/1 !==1)
		{
			$("body").attr("ActiveChangeCap",1);

			$("body").on("click", ".changeCap", function() {
				
				var d = new Date();

				$(this).html($(this).html().replace("{{ $locale }}/", ""));

				img = $(this).find("img");

				img.attr("src", img.attr("src").split('?')[0] + '?t=' + d.getMilliseconds());

			});

		}

		


	}
}

News=
{
	NewsSelectYearCategory:function()
	{
		$("body").on("click",".the_year_select",function(){
			$("#select_year").val($(this).attr('year'));
			is_year=1;
			target=$(this);
			if(!$(target).hasClass("active"))
			{

				//加上標示已啟動的class
				$(target).addClass("active").siblings().removeClass("active").find("ul li").removeClass("active")
		        // ajax內容位置
		        // ajax內容放置的地方
		        var box = "." + $(target).attr("data-ajaxTarget")

	            // 計算移動時間
	            var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
	            $("html,body").animate({
	            	scrollTop: 0
	            }, time, 'easeOutCubic');

	            // 滑動同時加入移除動畫

	            $(box + ">*").addClass("out")

	            setTimeout(function () 
	            {

	            	if(is_year !=1)
	            	{
	            		is_year=0;
	            	}

	            	var postYear=$("#select_year").val();
	            	var postCate=$("#select_cate").val();

	            	var _token=$("#the_token").val();
	            	url=baseUrl+"/News/NewsContentChange";
	            	var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
	            	$("html,body").animate({
	            		scrollTop: 0
	            	}, time, 'easeOutCubic');
	            	$.ajax({
	            		url: url,
	            		type: 'post',
	            		data:
	            		{
	            			_token:_token,
	            			year:postYear,
	            			category:postCate,
	            			is_year:is_year
	            		}
	            	})
	            	.done(function (data) 
	            	{
	          		// 移除原本的內容
	          		$(box + ">*").remove()
	                // 將資料塞入結構
	                $(box).html(data.toReturnNewsList);
	                // 重新啟動入場動畫
	                _Blazy.newsW();
	                _waypoint.newsW();
	                news.all();
	                // 重啟下拉選單
	                dropDown();
	            });

	            }, 1000);
	        }
	    });

		$("body").on("click",".the_select_category",function()
		{
			$("#select_cate").val($(this).attr('category'));
			is_year=0;
			target=$(this);
			if(!$(target).hasClass("active"))
			{

				//加上標示已啟動的class
				$(target).addClass("active").siblings().removeClass("active").find("ul li").removeClass("active")
	            // ajax內容位置

	            // ajax內容放置的地方
	            var box = "." + $(target).attr("data-ajaxTarget")

	            // 計算移動時間
	            var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
	            $("html,body").animate({
	            	scrollTop: 0
	            }, time, 'easeOutCubic');

	            // 滑動同時加入移除動畫
	            $(box + ">*").addClass("out")

	            setTimeout(function () 
	            {
	            	if(is_year !=1)
	            	{
	            		is_year=0;
	            	}

	            	var postYear=$("#select_year").val();
	            	var postCate=$("#select_cate").val();

	            	var _token=$("#the_token").val();
	            	url=baseUrl+"/News/NewsContentChange";
	            	var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
	            	$("html,body").animate({
	            		scrollTop: 0
	            	}, time, 'easeOutCubic');
	            	$.ajax({
	            		url: url,
	            		type: 'post',
	            		data:
	            		{
	            			_token:_token,
	            			year:postYear,
	            			category:postCate,
	            			is_year:is_year
	            		}
	            	})
	            	.done(function (data) {
		          		// 移除原本的內容
		          		$(box + ">*").remove()
		                // 將資料塞入結構
		                $(box).html(data.toReturnNewsList);

		                // 重新啟動入場動畫
		                _Blazy.newsW();
		                _waypoint.newsW();
		                news.all();
		                // 重啟下拉選單
		                dropDown();
		            });
	            }, 1000);
	        }
	    });
	},
	
}

function BackBtnClickFunc()
{
	if($("body").attr("id").indexOf("News") != -1 && $("body").attr("class").indexOf("detail") != -1 )
	{

		$(".close").click(function(){
			if(document.referrer =="")
			{
				location.href=$('base').attr("href")+"/News"

			}
			else
			{
				window.history.back();
			}
		});
	}
}

VisitFunction=
{
	unitChange:function()
	{

		$(".theVisitTitle").click(function(){
			var _this = $(this);
			var unitTitle = _this.find('p').text();
			var unitPage = _this.attr('data-page');
			var _token=$("#the_token").val();
			var url=baseUrl+"/Visit/unitChange";
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					title:unitTitle
				}
			})
			.done(function(data) {
				window.history.pushState("", "", baseUrl+"/Visit/"+unitTitle);
				ajaxContent.active('.mocaSNav', '.mocaPageBody');

				var pageBody = $(".mocaPageBody");

				pageBody[0].innerHTML = "";

				pageBody
				.attr('style', '')
				.attr('data-page', unitPage);

				pageBody
				.removeClass('show')
				.html(data);


				setTimeout(function(){
					ajaxBody.detect();
				}, 100);

				setTimeout(function(){
					pageBody.addClass('show')
				}, 500);

			});
		});
	},
	openExhibitionDetail:function()
	{
		$("body").on('click',".exhibitionOpen",function(){

			if($("body").hasClass("exhibitionIsOpen"))
			{
				return 0;
			}
			$("body").addClass("exhibitionIsOpen");
			var _token=$("#the_token").val();
			var title=$(this).attr("data_title");
			var url=baseUrl+"/Visit/ExhibitionDetail";
			var lastUlr=$('base').attr('page');

			ajaxLBox.wddBoolean = true;

			var dist = $(window).scrollTop();

			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					title:title
				}
			})
			.done(function(data) {

				$("body").append("<article class='hide_lightbox ajaxVisitDetail' data-dist='" + dist + "'></article>");

				$(".hide_lightbox").html(data);

				/*給燈箱一個 open 讓動畫作動*/
				if ( $(".hide_lightbox").length > 0 ) {

					setTimeout(function(){

						$(".hide_lightbox").addClass('open');

					}, 100);

				}

				ajaxLBox.func();

				lock_bScroll();

				window.history.pushState("", "", location.href+"/"+title);

				var ajaxCloseBtn = $('.hide_lightbox .ajax_close');
				
				ajaxCloseBtn.on('click', function() {
					
					headerFixed();
					mocaSNav.active();
					$("body").removeClass("exhibitionIsOpen");
					if($("body").hasClass("Fclick"))
					{
						$("body").removeClass("Fclick")
					}
					else
					{
						link = location.href;
						linkarr=link.split("/");
						link=link.replace("/"+linkarr[linkarr.length-1],"");
						window.history.pushState("", "", link);
					}
					$(".grid-item").addClass("show");
					mocaSNav.navBar();
					return 0;

				});

				$(window).on('popstate', function() 
				{
					
					$("body").addClass("Fclick");
					$('.ajax_close').eq(0).click();
					return 0;
				});

				
			});

		});

		if($("#autoOpen").length > 0)
		{
			
			link = location.href;
			linkarr=link.split("/");
			link=link.replace("/"+linkarr[linkarr.length-1],"");
			window.history.pushState("", "", link);
			$("#autoOpen").click();
		}
	},
	updateCapchaWhileSwitchPages:function()
	{
		$('.menuBox .name').click(function(){

			
			setTimeout(function() {

				$('.static .verifi img').click();

			}, 100);
		})
	},
	reservationFormSend:function()
	{
		
		var input={};
		var token=$("#the_token").val();
		input['isconfirm']=0;

		$('body').on('click','.static .send',function(){
			
			if( $("body").attr('canSubmit')+"" != "0")
			{
				$("body").attr('canSubmit',0);
			}
			else
			{
				return 0;
			}
			

			$('.static .form_input').each(function(){
				
				input[$(this).attr('name')]=$(this).val();
			})
			input['year']=$(".static .chrisSelect.tourYear .dropShow .character").text();
			input['month']=$(".static .chrisSelect.tourMonth .dropShow .character").text();
			input['day']=$(".static .chrisSelect.tourDay .dropShow .character").text();
			input['time']=$(".static .chrisSelect.tourTime .dropShow .character").text();
			input['groupType']=$(".static .chrisSelect.groupType .dropShow .character").text();
			input['visitorNumber']=$(".static .chrisSelect.visitorNumber .dropShow .character").text();
			input['isconfirm']=$(".static .confirm").length;
			
			$.ajax({
				url:baseUrl+"/Visit/FormSubmit",
				type:"POST",
				data:
				{
					_token:token,
					input:input,
				}
				

			})
			.done(function(data){
				if(data.pass != 1)
				{
					$(".static .changeCap").click()

					alert(data.err_msg);

				}
					//通過發信
					else
					{	
						$(".resetFormBtn").click();
						alert(data.success_msg);
					}
					$("body").attr('canSubmit',1);

				})
			
		})
		
	}
}

ExploreFunction=
{
	OpenDetail:function()
	{

		$("body").on('click','.openExploreDetail',function(){

			var lbox_checked = true;

			if (lbox_checked == false) {
				return 0;
			}

			var _this = $(this);
			var dist = $(window).scrollTop();
			
			var _token=$("#the_token").val();
			var url=_this.attr('href');
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
				}
			})
			.done(function(data) {
				$("body").append("<article class='hide_lightbox ajaxVisitDetail' data-dist='" + $(window).scrollTop() + "'></article>");

				$(".hide_lightbox").html(data);

				a_lock_bScroll();
				ajaxLBox.wddBoolean = true;
				mocaSNav.active();
				ajaxLBox.func();

				window.history.pushState("", "", url);

				var ajaxCloseBtn = $('.hide_lightbox .ajax_close');
				ajaxCloseBtn.on('click', function() {
					if($("body").hasClass("Fclick"))
					{
						$("body").removeClass("Fclick")
					}
					else
					{
						link = location.href;
						linkarr=link.split("/");
						link=link.replace("/"+linkarr[linkarr.length-1],"");
						window.history.pushState("", "", link);
					}

				});


				/*給燈箱一個 open 讓動畫作動*/
				if ( $(".hide_lightbox").length > 0 ) {

					setTimeout(function(){

						$(".hide_lightbox").addClass('open');

					}, 100);

				}

				$(window).on('popstate', function() 
				{
					$("body").addClass("Fclick");
					$('.hide_lightbox .ajax_close').click();
					return 0;
				});
				headerFixed();
				mocaSNav.active();

			});
		});

	},
	AutoOpenDetail:function()
	{
		if($("#AutoOpen").length > 0)
		{
			$("#AutoOpen").click();
		}
	},
	unitChange:function()
	{

		$("body").on('click','.unitChange',function(){

			event.preventDefault();
			var _this = $(this);
			var dist = $(window).scrollTop();
			var _token=$("#the_token").val();
			var url=_this.attr('href');
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					unitChange:1,
				}
			})
			.done(function(data) {
				var pageBody = $('.mocaPageBody');
				window.history.pushState("", "", url);
				$('main').html(data);
				pageBody
				.attr('style', '')
				.attr('data-page', data);

				pageBody
				.removeClass('show')
				.html(data);

				mocaSNav.active();
				setTimeout(function(){
					ajaxBody.detect();
				}, 100);

				setTimeout(function(){
					pageBody.addClass('show')
				}, 500);

			});
		});

	},
};

About=
{
	curetorSwitch:function()
	{

		$('.doraPageBody_curator .switchSec').on('click', 'li', function() {
            var sec = '.' + $(this).attr('data-open');
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parents('.doraPageBody_curator').find(sec).addClass('back active').siblings().removeClass('back active');

            about.blazy();
        })
	},
	unitChange:function()
	{
		$("body").on('click','.theAboutTitle',function(){
			event.preventDefault();
			var _this = $(this);
			var unitTitle = _this.find('p').text();
			var unitPage = _this.attr('data-page');
			var _token=$("#the_token").val();
			var url=baseUrl+"/About/unitChange";

			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					title:unitTitle
				}
			})
			.done(function(data) {
				window.history.pushState("", "", baseUrl+"/About/"+unitTitle);
				ajaxContent.active('.mocaSNav', '.mocaPageBody');

				var pageBody = $(".mocaPageBody");

				pageBody[0].innerHTML = "";

				pageBody
				.attr('style', '')
				.attr('data-page', unitPage);

				pageBody
				.removeClass('show')
				.html(data);


				setTimeout(function(){
					ajaxBody.detect();
				}, 100);

				setTimeout(function(){
					pageBody.addClass('show')
				}, 500);

			});
		});
	},
	selectYearChange:function()
	{
		$("body").on('click','.selectYear li',function(){
			var _this = $(this);
			var year = _this.attr('year');
			var _token=$("#the_token").val();
			var url=baseUrl+"/About/yearChange";

			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					year:year
				}
			})
			.done(function(data) {
				$(".editSec").html(data);
				about.blazy();
				about.waypoint();
			});
		});
		
	},
	arrowClick:function()
	{	
		$('body').on('click','.arrowPre,.arrowNext',function(){
			setTimeout(function(){
				
				$(".slick-center.slick-active").click();
			}, 500);
		});
	}

	

}

Shop=
{
	shopCategorySwitch:function()
	{
		$(".subCategoryClick").on('click',function(){
			event.preventDefault();
			var category_title=$(this).attr('category_title');
			var sub_category_title=$(this).attr('sub_category_title');
			var url=baseUrl+"/Shop/categoryClick";
			var _token=$("#the_token").val();
			$.ajax({
				url: url,
				type: 'post',
				data:
				{
					_token:_token,
					category_title:category_title,
					sub_category_title:sub_category_title,
				}
			})
			.done(function(data) {

				$('.shopListFrame').html(data);
				 mocaShop.blazy(); 
				 mocaWaypoint.shop();
				 window.history.pushState("", "", baseUrl+"/Shop/"+category_title+"/"+sub_category_title);
				 console.log('ok');

				 
			});
		});
	}
}


$(document).ready(function(){

	

	if($("body").hasClass("support"))
	{
		SuooprtFunction.SuppoutDetailOpen();
		SuooprtFunction.AutoOpenSupportDetailSoFast();
		SuooprtFunction.SupportFormSubmit();
		SuooprtFunction.ResetSupportForm();

	}
	if($("body").hasClass("news"))
	{
		News.NewsSelectYearCategory();
	}

	if($("body").hasClass("visit"))
	{
		VisitFunction.unitChange();
		VisitFunction.openExhibitionDetail();
		VisitFunction.updateCapchaWhileSwitchPages();
		VisitFunction.reservationFormSend();
		Chapcha.ActiveChangeCap();
	}
	if($("body").hasClass("discover"))
	{
		ExploreFunction.OpenDetail();
		ExploreFunction.AutoOpenDetail();
		ExploreFunction.unitChange();
		mocaSNav.active();
	}
	if($("body").hasClass("about"))
	{
		About.curetorSwitch();
		About.unitChange();
		About.selectYearChange();
		About.arrowClick();
		about_history.all();
	}

	if($("body").hasClass("shop"))
	{
		Shop.shopCategorySwitch();
	}
	BackBtnClickFunc();
})