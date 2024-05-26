$(document).ready(function() {


    // 內容waypoint
    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, { offset: '80%' });

    // menu_list
    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, { offset: '70%' });


    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '80%' });
    });




    // perfectScrollbar
    $(".menu_list").perfectScrollbar();



    // menu_list選單滑動事件
    menu_listScroll();



    // nav浮動出現(每個頁面nav出現觸發點不一樣)
    var windowW = $(window)
    windowW.scroll(function() {

        navfixed();


    });


});

function navfixed() {

    // 在進入浮動前先加入class"hide"
    var windowTop = $(window).scrollTop()

    if (windowTop - 100 > 0) {
        $(".hd_fixed").addClass('hide');
    } else {
        $(".hd_fixed").removeClass("hide");
    }

    // nav浮動的waypoint
    var trigger = $('.hd_slideup').offset().top

    var trigger_margin = parseInt($('.hd_slideup').css("margin-top"))

    if (trigger - trigger_margin < windowTop) {
        $(".hd_fixed").addClass("fixed");
    } else {
        $(".hd_fixed").removeClass("fixed");
    }


}




// menu_list選單滑動事件

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

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓business內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓business內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓business內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓business內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓business內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓


$.ajax({
        url: '../../view/layout/meeting/detail_business.html',
    })
    .done(function(data) {
        $(".business").html(data);
        businessjs();
    });


function businessjs() {

    // 點選learn more開啟內頁
    $("#business").click(function() {
        $(".business").removeClass("off");
        $(".business").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".business").removeClass("load");
            $(".business").addClass("on");
        }, 1000);
    });


    // 點選back關閉內頁
    $(".back_button").click(function() {
        $(".business").addClass("off");
        $(".business").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.business .show').removeClass('show');

        setTimeout(function() {
            $(".business .detail").animate({
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
            $(".business").addClass("open");

            setTimeout(function() {
                $(".business").removeClass("open");
            }, 1000);
        }
    });


    $(".icom_box").click(function() {
        $(".detail").removeClass("fixed")
    });



    // .banner_slideup點擊按鈕效果
    var gogoArea = function() {
        var x = $('.detail_banner').height();
        var y = parseInt($('.banner_slideup').css('margin-top'));
        $('.detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeInOutCirc' });

    };

    $('.banner_slideup').on('click', gogoArea);


    // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function() {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
    });




    var lboxW = $('.business .detail');

    lboxW.scroll(function() {

        business_waypoint(lboxW);

    });
}


function business_waypoint(data_o) {


    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        if (this.getBoundingClientRect().top - 200 < 0) { $(".business .detail_nav").addClass("hide"); } else { $(".detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {


        if (this.getBoundingClientRect().top + 30 < 0) { $(".business .detail").addClass("fixed"); } else { $(".detail").removeClass("fixed"); }

    });







    // detail_content內容的waypoint

    $(data_o).find('.detail_title').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });



    $(data_o).find('.precautions').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });


    $(data_o).find('.detail_row').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });


    $(data_o).find('.make_a_reservation').each(function(index) {

        if (this.getBoundingClientRect().top + this.getBoundingClientRect().height - $(window).height() <= 0) {

            $(this).addClass("show");
        }

    });


}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑business內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑business內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑business內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑business內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓other內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓other內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓other內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓other內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓other內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$.ajax({
        url: '../../view/layout/meeting/detail_other.html',
    })
    .done(function(data) {
        $(".other").html(data);
        otherjs();
    });


function otherjs() {

    // 點選learn more開啟內頁
    $("#other").click(function() {
        $(".other").removeClass("off");
        $(".other").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".other").removeClass("load");
            $(".other").addClass("on");
        }, 1000);
    });


    // 點選back關閉內頁
    $(".back_button").click(function() {
        $(".other").addClass("off");
        $(".other").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.other .show').removeClass('show');

        setTimeout(function() {
            $(".other .detail").animate({
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
            $(".other").addClass("open");

            setTimeout(function() {
                $(".other").removeClass("open");
            }, 1000);
        }
    });


    $(".icom_box").click(function() {
        $(".detail").removeClass("fixed")
    });



    // .banner_slideup點擊按鈕效果
    var gogoArea = function() {
        var x = $('.detail_banner').height();
        var y = parseInt($('.banner_slideup').css('margin-top'));
        $('.detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeInOutCirc' });

    };

    $('.banner_slideup').on('click', gogoArea);



    // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function() {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
    });




    var lboxW = $('.other .detail');

    lboxW.scroll(function() {

        other_waypoint(lboxW);

    });




}

function other_waypoint(data_o) {


    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        if (this.getBoundingClientRect().top - 200 < 0) { $(".other .detail_nav").addClass("hide"); } else { $(".detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {


        if (this.getBoundingClientRect().top + 30 < 0) { $(".other .detail").addClass("fixed"); } else { $(".detail").removeClass("fixed"); }

    });




    // detail_content內容的waypoint

    $(data_o).find('.detail_title').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });



    $(data_o).find('.detail_row').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });






    $(data_o).find('.precautions').each(function(index) {
        var x = ($(window).height()) * 2 / 3

        if (this.getBoundingClientRect().top - x < 0) {

            $(this).addClass("show");
        }

    });



    $(data_o).find('.make_a_reservation').each(function(index) {

        if (this.getBoundingClientRect().top + this.getBoundingClientRect().height - $(window).height() <= 0) {

            $(this).addClass("show");
        }

    });
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑other內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑other內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑other內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑other內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓events內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓events內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓events內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓events內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓events內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$.ajax({
        url: '../../view/layout/meeting/detail_events.html',
    })
    .done(function(data) {
        $(".events").html(data);
        eventsjs();
    });

function eventsjs() {

    // 點選.room開啟events_libox
    $('.room').click(function() {
        $('.events').removeClass('off')
        $('.events').addClass('load');
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $(".events").removeClass("load");
            $(".events").addClass("on");
        }, 1000);


        // libox_slick
        $('.events .room_slick ul').slick({
            lazyLoad: 'ondemand',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".events .slick_prev",
            nextArrow: ".events .slick_next",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }],
        });
    });

    // 點選.libox_close關閉events_libox
    $('.libox_close').click(function() {
        $('.events').removeClass('on');
        $('.events').addClass('off');
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".events").removeClass("off");
            $('.events .room_slick ul').slick('unslick');
        }, 1600);
    });





}





// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑events內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑events內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑events內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑events內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑