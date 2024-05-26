$(document).ready(function() {

    // 內容waypoint
    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, {
        offset: '80%'
    });

    // menu_list
    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, {
        offset: '80%'
    });

    // $('.row>*').each(function(index, element) {
    //     $(element).waypoint(function() {
    //         $(element).addClass('show');
    //     }, { offset: '80%' });
    // });


    // 讓文字在圖片載入後出現
    hot_springBlazy();



    $(".menu_list").perfectScrollbar();




    // 點選learn more開啟hot_spring內頁
    $(".learn").click(function() {
        $(".hot_spring").removeClass("off");
        $(".hot_spring").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".hot_spring").removeClass("load");
            $(".hot_spring").addClass("on");
        }, 1000);
    });



    // 點選learn more開啟room內頁
    $("#room").click(function() {
        $(".room").removeClass("off");
        $(".room").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".room").removeClass("load");
            $(".room").addClass("on");
        }, 1000);
    });




    // menu_list選單滑動事件
    menu_listScroll();



    // nav浮動出現(每個頁面nav出現觸發點不一樣)
    var windowW = $(window)
    windowW.scroll(function() {

        navfixed();


    });


});


// Blazyfunction 讓文字在圖片載入後出現
function hot_springBlazy() {
    bLazy = new Blazy({
        offset: 200, // Loads images 100px before they're visible
        success: function(ele) {
            //for index
            $(ele).parent().addClass("show");
            $(ele).parent().parent().find(".row_text_bg").addClass("show");
        }
    });
}

// nav浮動事件
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
















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hot_spring_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hot_spring_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hot_spring_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hot_spring_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hot_spring_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$.ajax({
        url: '../../view/layout/hot_spring/detail_hotspring.html',
    })
    .done(function(data) {
        $(".hot_spring").html(data);
        hotSpringjs();
    })



function hotSpringjs() {


    $(".back1").click(function() {
        $(".hot_spring").addClass("off");
        $(".hot_spring").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.hot_spring .detail .show').removeClass('show');
        setTimeout(function() {
            $(".hot_spring .detail").animate({
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

    $(".icom_box").click(function() {
        $(".hot_spring .detail").removeClass("fixed")
    });




    // .banner_slideup點擊按鈕效果
    var gogoArea = function() {
        var x = $('.hot_spring .detail_banner').height();
        var y = parseInt($('.hot_spring .banner_slideup').css('margin-top'));
        $('.hot_spring .detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeInOutCirc' });

    };
    $('.banner_slideup').on('click', gogoArea);




    // .ft_slideup點擊按鈕效果
    var gogoArea2 = function() {
        var x = $('.hot_spring .detail_banner').height();
        var y = $('.hot_spring .detail_content').height();
        var contentMarginTop = parseInt($('.hot_spring .detail_content').css('margin-top'));
        var ftMarginTop = parseInt($('.hot_spring .detail_ft').css('margin-top'));
        var ft_slideup_MarginTop = parseInt($('.hot_spring .ft_slideup').css('margin-top'));

        var z = x + y + contentMarginTop + ftMarginTop + ft_slideup_MarginTop;

        $('.hot_spring .detail').animate({ scrollTop: z }, { duration: 1000, easing: 'easeInOutCirc' });
    };
    $('.ft_slideup').on('click', gogoArea2);
    $('.facilities').on('click', gogoArea2);





    // slick-------------------------
    $('.detail_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        appendArrows: $(".arrow"),
        speed: 1000,
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
        $('.hot_spring .detail_slick ul').slick("getSlick").slickPrev();
    });


    $(".slick_next").click(function() {
        $('.hot_spring .detail_slick ul').slick("getSlick").slickNext();
    });


    // detail_menu的perfectScrollbar
    $(".detail_menu").perfectScrollbar();






    var lboxW = $('.hot_spring .detail');

    lboxW.scroll(function() {

        hotSpring_waypoint(lboxW);

    });








}

// 燈箱內的waypoint

function hotSpring_waypoint(data_o) {

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值

        if (this.getBoundingClientRect().top - 200 < 0) {
            $(".hot_spring .detail_nav").addClass("hide");
        } else { $(".hot_spring .detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值


        if (this.getBoundingClientRect().top + 30 < 0) { $(".hot_spring .detail").addClass("fixed"); } else { $(".hot_spring .detail").removeClass("fixed"); }

    });



    // detail_content內容的waypoint
    $(data_o).find('.detail_content>*').each(function(index) {

        if ($(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");

        }

    });
    // detail_ft內容的waypoint
    $(data_o).find('.detail_ft>*').each(function(index) {
        // 150是測試出來後的參數
        if (150 + $(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");
        }
    });


}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑hot_spring_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑hot_spring_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑hot_spring_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑hot_spring_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓room_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓room_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓room_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓room_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓room_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$.ajax({
        url: '../../view/layout/hot_spring/detail_room.html',
    })
    .done(function(data) {
        $(".room").html(data);
        roomjs();
    })

function roomjs() {

    $(".back1").click(function() {
        $(".room").addClass("off");
        $(".room").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.room .detail .show').removeClass('show');
        setTimeout(function() {
            $(".room .detail").animate({
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

    $(".icom_box").click(function() {
        $(".room .detail").removeClass("fixed")
    });



    //////////////////////////////////
    //                              //
    // .banner_slideup點擊按鈕效果  //
    //                              //
    //////////////////////////////////

    var gogoArea = function() {
        var x = $('.room .detail_banner').height();
        var y = parseInt($('.room .banner_slideup').css('margin-top'));
        $('.room .detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeOutQuad' });

    };
    $('.banner_slideup').on('click', gogoArea);


    // perfectScrollbar
    $(".detail_menu_list").perfectScrollbar();










    //////////////////////////////////
    //                              //
    //  room內頁裡的waypoint        //
    //                              //
    //////////////////////////////////


    var lboxW = $('.room .detail');

    lboxW.scroll(function() {

        room_waypoint(lboxW);

    });



    //////////////////////////////////
    //                              //
    //      點選room_img開啟        //
    //      accmmodation內頁        //
    //                              //
    //////////////////////////////////

    $(".room_img").click(function() {
        $(".accmmodation").removeClass("off");
        $(".accmmodation").addClass("load");
        $(".room .detail").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".accmmodation").removeClass("load");
            $(".accmmodation").addClass("on");
        }, 1000);
    });




    //////////////////////////////////
    //                              //
    // 引入footer!!!!!!!!.......... //
    //                              //
    //////////////////////////////////

    $.ajax({
            url: '../../view/layout/footer2.html',
        })
        .done(function(data) {
            $(".room .detail_ft").html(data);
            footerJs();
        })


}




//////////////////////////////////
//                              //
// 引入footer的js!!!........... //
//                              //
//////////////////////////////////


function footerJs() {

    //////////////////////////////////
    //                              //
    //  點擊ft_top捲動到上方        //
    //                              //
    //////////////////////////////////

    $(".ft_top").click(function() {
        $(".room .detail").animate({
                scrollTop: 0,
            },
            1500, 'easeOutQuad'
        );
    });




    // 訂閱事件-----------
    $('.footer_button').click(function() {
        $('.detail_ft .subscription_bg').addClass('on');
        $('.detail_ft .subscription').addClass('open');
        $('.detail_ft .subscription').removeClass('close');
        $(".subscription .detail").css("overflow-y", "hidden");
    });

    $('.subscription_close').click(function() {
        $('.detail_ft .subscription_bg').removeClass('on');
        $('.detail_ft .subscription_bg').addClass('off');
        $('.detail_ft .subscription').removeClass('open');
        $('.detail_ft .subscription').addClass('close');
        setTimeout(function() {
            $('.detail_ft .subscription_bg').removeClass('off');
            $('.detail_ft .subscription').removeClass('close');
            $(".subscription .detail").css("overflow-y", "auto");
        }, 1000);
    });





    $(".sb_button").click(function() {
        $('.detail_ft .subscription').removeClass('open');
        $('.detail_ft .subscription').addClass('close');
        setTimeout(function() {
            $('.detail_ft .subscription').removeClass('close');
        }, 1000);
        $('.detail_ft .thank').addClass('open');

    });

    $('.thank input').click(function() {
        $('.detail_ft .subscription_bg').removeClass('on');
        $('.detail_ft .subscription_bg').addClass('off');
        $('.detail_ft .thank').removeClass('open');
        $('.detail_ft .thank').addClass('close');
        setTimeout(function() {
            $('.detail_ft .subscription_bg').removeClass('off');
            $('.detail_ft .thank').removeClass('close');
            $(".subscription .detail").css("overflow-y", "auto");
        }, 1000);

    });





}





//////////////////////////////////
//                              //
// room內頁的waypoint           //
//                              //
//////////////////////////////////

function room_waypoint(data_o) {

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {


        if (this.getBoundingClientRect().top - 100 < 0) { $(".room .detail_nav").addClass("hide"); } else {
            $(".room .detail_nav").removeClass("hide");
        }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {


        if (this.getBoundingClientRect().top + 30 < 0) { $(".room .detail").addClass("fixed"); } else { $(".room .detail").removeClass("fixed"); }

    });





    // .detail_title的waypoint
    $(data_o).find('.detail_title').each(function(index) {

        if ($(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");

        }

    });




    // .detail_menu_list的waypoint
    $(data_o).find('.detail_title').each(function(index) {

        if ($(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(".detail_menu_list").addClass("show");

        }

    });



    //rooms 的waypoint
    $(data_o).find('.room_img_bg').each(function(index) {

        if ($(this).position().top + $(this).parent().offset().top - $(window).scrollTop() - $(window).height() < 0) {

            $(this).addClass("show");

        }

    });


}



// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑




// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓accmmodation_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓accmmodation_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓accmmodation_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓accmmodation_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓accmmodation_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

//////////////////////////////////
//                              //
// 引入stay的內頁!!!!!!!!...... //
//                              //
//////////////////////////////////

$.ajax({
        url: '../../view/layout/hot_spring/detail_accmmodation.html',
    })
    .done(function(data) {
        $(".accmmodation").html(data);
        accmmodationJs();
    })

function accmmodationJs() {

    $("#back").click(function() {
        $(".accmmodation").addClass("off");
        $(".accmmodation").removeClass("on");
        $(".room .detail").css("overflow-y", "auto");
        $('.accmmodation .detail .show').removeClass('show');
        setTimeout(function() {
            $(".accmmodation .detail").animate({
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


    $(".icom_box").click(function() {
        $(".accmmodation .detail").removeClass("fixed")
    });



    // .banner_slideup點擊按鈕效果
    var gogoArea = function() {
        var x = $('.accmmodation .detail_banner').height();
        var y = parseInt($('.accmmodation .banner_slideup').css('margin-top'));
        $('.accmmodation .detail').animate({ scrollTop: x + y }, { duration: 1000, easing: 'easeInOutCirc' });

    };
    $('.banner_slideup').on('click', gogoArea);




    // .ft_slideup點擊按鈕效果
    var gogoArea2 = function() {
        var x = $('.accmmodation .detail_banner').height();
        var y = $('.accmmodation .detail_content').height();
        var contentMarginTop = parseInt($('.accmmodation .detail_content').css('margin-top'));
        var ftMarginTop = parseInt($('.accmmodation .detail_ft').css('margin-top'));
        var ft_slideup_MarginTop = parseInt($('.accmmodation .ft_slideup').css('margin-top'));

        var z = x + y + contentMarginTop + ftMarginTop + ft_slideup_MarginTop;

        $('.accmmodation .detail').animate({ scrollTop: z }, { duration: 1000, easing: 'easeInOutCirc' });
    };
    $('.ft_slideup').on('click', gogoArea2);
    $('.facilities').on('click', gogoArea2);





    // slick-------------------------
    $('.accmmodation .detail_slick ul').slick({
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

        $('.accmmodation .detail_slick ul').slick("getSlick").slickPrev();
    });


    $(".slick_next").click(function() {
        $('.accmmodation .detail_slick ul').slick("getSlick").slickNext();
    });


    // detail_menu的perfectScrollbar
    $(".detail_menu").perfectScrollbar();



    var lboxW = $('.accmmodation .detail');

    lboxW.scroll(function() {

        accmmodation_waypoint(lboxW);

    });




}

// 燈箱內的waypoint

function accmmodation_waypoint(data_o) {




    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {
        // $('.banner_slideup').getBoundingClientRect().top
        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值

        if (this.getBoundingClientRect().top - 200 < 0) { $(".accmmodation .detail_nav").addClass("hide"); } else { $(".accmmodation .detail_nav").removeClass("hide"); }

    });




    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值


        if (this.getBoundingClientRect().top + 30 < 0) { $(".accmmodation .detail").addClass("fixed"); } else { $(".accmmodation .detail").removeClass("fixed"); }

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


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑room_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑