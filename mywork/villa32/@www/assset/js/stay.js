$(document).ready(function() {

// stay頁面-----------------------------------------------

    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, {
        offset: '80%'
    });



    $('.rooms>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '100%' });
    });



    $(".room_img").click(function() {
        $("main article:last-child").removeClass("off");
        $("main article:last-child").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $("main article:last-child").removeClass("load");
            $("main article:last-child").addClass("on");
        }, 1000);
    });



    $(".menu_list").perfectScrollbar();

    // menu_list選單滑動事件
    menu_listScroll();





    // nav浮動出現(每個頁面nav出現觸發點不一樣)
    var windowW = $(window)
    windowW.scroll(function() {

       navfixed();
       

    });

});





// nav浮動事件
function navfixed() {

    // 在進入浮動前先加入class"hide"
    var windowTop = $(window).scrollTop()
       
    if(windowTop - 100 > 0){
        $(".hd_fixed").addClass('hide');
    }
    else{ 
        $(".hd_fixed").removeClass("hide"); 
    }

    // nav浮動的waypoint
    var trigger = $('.hd_slideup').offset().top

    var trigger_margin =  parseInt($('.hd_slideup').css("margin-top"))

    if(trigger - trigger_margin < windowTop){
        $(".hd_fixed").addClass("fixed"); 
    }
    else{ 
        $(".hd_fixed").removeClass("fixed"); 
    }

    
}





// menu_list選單滑動事件

function menu_listScroll() {

    var room = document.querySelectorAll('.room_img_bg')

    $('.menu_list ul li').click(function(){

        var i =  $(this).prevAll().length;

        $("html,body").animate({
                // scrollTop定位
            scrollTop: $(room[i]).offset().top - $(window).height()/2 + $(room[i]).height()/2 
        },
        // 動作時間
        1000, 'easeOutCubic');
    });
 
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓stay_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓stay_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓stay_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓stay_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$(document).ready(function() {

    
    $("#back").click(function() {
        $("main article:last-child").addClass("off");
        $("main article:last-child").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.detail .show').removeClass('show');
        setTimeout(function() {
        $(".detail").animate({
                // scrollTop定位
                scrollTop: 0,
            },
            // 動作時間
            0, 'easeOutCirc'
            );
        }, 2000); 
    });

    // icom_box點選呼叫navopen出現------

    $(".icom_box").click(function() {

        if (!$("header").hasClass("open")) {
            $("header").removeClass("close");
            $("header").addClass("open");

            // 將.icom_box加入class"open"並在指定時間內移除
            $("main").addClass("open");

            setTimeout(function() {
                $("main").removeClass("open");

            }, 1000);

        }

    });


    $(".icom_box").click(function(){
    $(".detail").removeClass("fixed")
    });









    // .banner_slideup點擊按鈕效果
    var gogoArea = function() {
        var x = $('.detail_banner').height();
        var y = parseInt($('.banner_slideup').css('margin-top'));
        $('.detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeInOutCirc' });

    };
    $('.banner_slideup').on('click', gogoArea);




    // .ft_slideup點擊按鈕效果
    var gogoArea2 = function() {
        var x = $('.detail_banner').height();
        var y = $('.detail_content').height();
        var contentMarginTop = parseInt($('.detail_content').css('margin-top'));
        var ftMarginTop = parseInt($('.detail_ft').css('margin-top'));
        var ft_slideup_MarginTop = parseInt($('.ft_slideup').css('margin-top'));

        var z = x + y + contentMarginTop + ftMarginTop + ft_slideup_MarginTop;
        
        $('.detail').animate({ scrollTop: z }, { duration: 1000, easing: 'easeInOutCirc' });
    };
    $('.ft_slideup').on('click', gogoArea2);
    $('#facilities').on('click', gogoArea2);





    // slick-------------------------
    $('.detail_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        appendArrows: $(".arrow"),
        speed: 1500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
            }
        }]
    });

    $(".slick_prev").click(function() {

        $('.detail_slick ul').slick("getSlick").slickPrev();
    });


    $(".slick_next").click(function() {
        $('.detail_slick ul').slick("getSlick").slickNext();
    });


    // detail_menu的perfectScrollbar
    $(".detail_menu").perfectScrollbar();



    var lboxW = $('.detail');

    lboxW.scroll(function() {

        lbox_waypoint(lboxW);

    });



    
});

// 燈箱內的waypoint

function lbox_waypoint(data_o) {




    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {
     // $('.banner_slideup').getBoundingClientRect().top
            // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
            // var ftHeight = $("footer").height(); //footer的height數值

            if (this.getBoundingClientRect().top - 200 < 0) 
                {$(".detail_nav").addClass("hide");}
            else  
                {$(".detail_nav").removeClass("hide");}

    });




    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

            // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
            // var ftHeight = $("footer").height(); //footer的height數值

            
            if (this.getBoundingClientRect().top + 30 < 0) 
                {$(".detail").addClass("fixed");}
            else
                {$(".detail").removeClass("fixed");}
        
    });




    // detail_content內容的waypoint
    $(data_o).find('.detail_content>*').each(function(index) {

        if ($(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");

        }

    });
    // detail_ft內容的waypoint
    $(data_o).find('.detail_ft>*').each(function(index) {
       // 150為測試出來的數值
        if (150 + $(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");



        }

    });

}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑stay_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑