$(document).ready(function() {

	 // 點選scrolldown會往下捲動到content
    $('.scrolldown').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.banner').offset().top + $('.banner').height(),
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    // 點選banner_slide會往下捲動到content
    $('.banner_slide').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.banner').offset().top + $('.banner').height(),
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    // // // // menu_list在rwd時自動隱藏成Scrollbar
     // $(".menu_list").perfectScrollbar();


	////////////////////////////////////
    //      row waypoiny              //
    ////////////////////////////////////
    
    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '60%' });
    });



    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////
    $('.selectMenu').click(function() {
        $(this).toggleClass("open");
        $('.menu_list ul').fadeToggle(300);
        $('.menu_list_bg').css("overflow","visible");
    });

    function aClick() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    }

    $('.menu_list ul li a').click(function() {
        var selectMenu = $('.selectMenu');
        selectMenu.text($(this).text());
        aClick();
    });

});









///////////////////detail的js////////////////////////////////////          

$.ajax({
        url: '../../view/layout/news/news_detail.html',
    })
    .done(function(data) {
        $(".news").html(data);
        detailJs();
    })


function detailJs(){

	// 點擊READ MORE開啟內頁
	$('.read_me').click(function(){
		$('.news').addClass('load');
		$('body').css('overflow','hidden');
		$('.detail').css('overflowY','auto');
		setTimeout(function(){
			$('.news').removeClass('load');
			$('.news').addClass('open');
		},1000);
	});


	// 點擊detail_close關閉內頁
	$('.detail_close').click(function(){
		$('.news').removeClass('open');
		$('.news').addClass('close');
        $('.news .show').removeClass("show");
		setTimeout(function(){
			$('.news').removeClass('close');
			$('body').css('overflowY','auto');
            $(".detail").animate({
                    // scrollTop定位
                    scrollTop: 0,
                },
                // 動作時間
                0, 'easeOutCirc'
            );
		},1000);
	});


	// 點擊back箭頭反回頂端
    var gogoArea = function() {

        $(".detail").animate({ scrollTop: 0 }, { duration: 1000, easing: 'easeOutQuad' });
    };

    $('.detail_slideup').on('click', gogoArea);



	////////////////////////////////////
    //      detail_slick              //
    ////////////////////////////////////
	$('.deatil_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
    });

	$(".deatil_slick .icon-arrow-left").click(function() {
        $('.deatil_slick ul').slick("getSlick").slickPrev();
    });

    $(".deatil_slick .icon-arrow-right").click(function() {
        $('.deatil_slick ul').slick("getSlick").slickNext();
    });

	////////////////////////////////////
    //      detail的waypoint          //
    ////////////////////////////////////



    var lboxW = $('.detail');

    lboxW.scroll(function() {

        news_waypoint(lboxW);

    });
}

function news_waypoint(data_o){

    var contentMarginTop = parseInt($('.detail_content').css('margin-top')); 
    var windowHeight = $(window).height()

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_content').each(function(index) {


        if (this.getBoundingClientRect().top + contentMarginTop + windowHeight*0.01< 0) 
            {$(".detail_close").addClass("hide");
            }
        else  
            {$(".detail_close").removeClass("hide");}

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.detail_content').each(function(index) {

            if (this.getBoundingClientRect().top + contentMarginTop + windowHeight*0.2 < 0) 
                {$(".detail").addClass("fixed");}
            else 
                {$(".detail").removeClass("fixed");}
        
    });


    // detail_content內容的waypoint
    $(data_o).find('.detail_row>*').each(function(index) {

        var thisOffset = $(this).position().top

        if ($(this).position().top + $(this).parent().position().top + $(this).parent().parent().position().top 
            - $(".detail").scrollTop() - thisOffset*.5 < 0) {

            $(this).addClass("show");
        }

    });


    // detail_ft內容的waypoint
    $(data_o).find('.detail_ft>*').each(function(index) {
    
        var thisOffset = $(this).position().top //模仿waypoint的offset功能

        var content_marginTop = parseInt($(".detail_content").css("margin-top")) 

        var content_paddingBottom = parseInt($(".detail_content").css("padding-bottom"))

        var content_height = $(".detail_content").height()

        var detail_marginTop = parseInt($(".detail_ft").css("margin-top")) 

        console.log($(window).width());

        if (content_height + content_marginTop + content_paddingBottom + detail_marginTop
            - $(window).width()/2 - $(".detail").scrollTop() < 0) {

            $(this).addClass("show");
        }

    });


}