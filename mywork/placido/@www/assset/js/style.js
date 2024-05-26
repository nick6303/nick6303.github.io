$(document).ready(function() {




    // 點選top:after會往下捲動到content
    $('.top>span').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('._text').offset().top - parseInt($('._text').css("margin-top"))
            },
            // 動作時間
            1000, 'easeOutCubic');
    });

    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////
    $('.selectMenu').click(function() {
        $(this).toggleClass("open");
        $('.menu_list ul').fadeToggle(300);
        $('.menu_list_bg').css("overflow", "visible");
    });

    function aClick() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    }

    $('.menu_list ul li').click(function() {
        aClick();
    });






    // 滑動到row:first-child menu_list的第一個li底線
    var windowW = $(window)
    windowW.scroll(function() {

        menu_listWaypoint();


    });




    ////////////////////////////////////
    //     內容的waypoint事件         //
    ////////////////////////////////////

    if ($(window).width() > 1024) {


        $('.rows>*').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '80%' });
        });

    } else {
        $('.row>*').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '60%' });
        });
    }


    ////////////////////////////////////
    //     menu_list的click事件       //
    ////////////////////////////////////





    // 引入menu_list選單滑動事件

    menu_listScroll();




});



////////////////////////////////////
//      menu_list選單滑動事件     //
////////////////////////////////////

function menu_listScroll() {

    var row = document.querySelectorAll('.row')

    $('.menu_list ul li').click(function() {

        var i = $(this).prevAll().length;

        $("html,body").animate({
                // scrollTop定位
                scrollTop: $(row[i]).offset().top - $(window).height() / 2 + $(row[i]).height() / 2
            },
            // 動作時間
            1000, 'easeOutCubic');
    });

}



////////////////////////////////////
//       MENU_LIST的waypoint      //
////////////////////////////////////

function menu_listWaypoint() {

    var windowTop = $(window).scrollTop()

    var windowHeight = $(window).height()

    // 啟動元素(PS:就是碰到它會啟動)
    var trigger = $('.row:first-child')

    var triggerOffsetTop = trigger.offset().top
    var trigger_margin = parseInt(trigger.css("margin-top"))
    var offset = trigger.height()

    if (triggerOffsetTop - windowHeight / 2 < windowTop) {
        $(".menu_list ul li:first-child").addClass("active");
        
    } else {
        $(".menu_list ul li:first-child").removeClass("active");
    }



}

////////////////////////////////////
//     menu_list的hover事件       //
////////////////////////////////////




var menu_listHover = {


    mouseover: function() {

        $(".menu_list ul li").mouseover(function() {

            $(".menu_list ul li:first-child").removeClass("active");

        });
    },
    mouseout: function() {


        $(".menu_list ul li").mouseout(function() {

            $(".menu_list ul li:first-child").delay(200).addClass("active");

        });
    }

}