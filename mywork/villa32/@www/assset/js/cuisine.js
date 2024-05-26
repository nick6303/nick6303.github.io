$(document).ready(function() {


    // 內容waypoint
    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, { offset: '80%' });

    // menu_list
    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, { offset: '80%' });

    // $('.row>*').each(function(index, element) {
    //     $(element).waypoint(function() {
    //         $(element).addClass('show');
    //     }, { offset: '100%' });
    // });

    // 讓文字在圖片載入後才出現
    cuisineblazy();


    // perfectScrollbar
    $(".menu_list").perfectScrollbar();




    // 點選learn more開啟內頁
    $("#restaurant").click(function() {
        $(".restaurant").removeClass("off");
        $(".restaurant").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".restaurant").removeClass("load");
            $(".restaurant").addClass("on");
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


function cuisineblazy() {

    bLazy = new Blazy({
        // offset: 200, // Loads images 100px before they're visible
        success: function(ele) {
            //for index
            $(ele).parent().addClass("show");
            $(ele).parent().parent().find(".row_text_bg").addClass("show");
        }
    });
}


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


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓restaurant內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓restaurant內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓restaurant內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓restaurant內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓restaurant內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$.ajax({
        url: '../../view/layout/cuisine/detail_restaurant.html',
    })
    .done(function(data) {
        $(".restaurant").html(data);
        restaurantjs();
    })

function restaurantjs(data_o) {


    $("#back").click(function() {
        $(".restaurant").addClass("off");
        $(".restaurant").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.restaurant .show').removeClass('show');
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
            $(".restaurant").addClass("open");

            setTimeout(function() {
                $(".restaurant").removeClass("open");
            }, 1000);
        }
    });

    $(".icom_box").click(function() {
        $(".restaurant .detail").removeClass("fixed")
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






    // 燈箱內的waypoint

    var lboxW = $('.detail');

    lboxW.scroll(function() {

        lbox_waypoint(lboxW);

    });


}








function lbox_waypoint(data_o) {

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值




        if (this.getBoundingClientRect().top - 200 < 0) { $(".restaurant .detail_nav").addClass("hide"); } else { $(".restaurant .detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

        // var ftMarginTop = parseInt($('footer').css('margin-top')); //footer的margin-top的數值  註解:parseInt()可將字串數值
        // var ftHeight = $("footer").height(); //footer的height數值

        // console.log($(".restaurant .detail").scrollTop())



        if (this.getBoundingClientRect().top + 30 < 0) { $(".detail").addClass("fixed"); } else { $(".detail").removeClass("fixed"); }

    });



    // detail_content內容的waypoint
    $(data_o).find('.detail_content>*').each(function(index) {

        if ($(this).position().top + $(this).parent().position().top - $(".restaurant .detail").scrollTop() < 0) {

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




    // photo_libox的js--------------
    $.ajax({
            url: '../../view/layout/cuisine/libox.html',
        })
        .done(function(data) {
            $(".restaurant .photo_libox").html(data);
            liboxjsload();
        });


}





function liboxjsload() {


    // 點選.photo開啟photo_libox
    $('.photo').click(function() {
        $('.restaurant .photo_libox').removeClass('close')
        $('.restaurant .photo_libox').addClass('load');
        setTimeout(function() {
            $(".photo_libox").removeClass("load");
            $(".photo_libox").addClass("open");
        }, 1000);


        // libox_slick
        $('.restaurant .libox_slick ul').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            speed: 1000,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // slick按鈕事件
        $(".restaurant .slick_prev").click(function() {
            $('.photo_libox .libox_slick ul').slick("getSlick").slickPrev();
        });
        $(".restaurant .slick_next").click(function() {
            $('.photo_libox .libox_slick ul').slick("getSlick").slickNext();
        });





    });

    // 點選.libox_close關閉photo_libox
    $('.libox_close').click(function() {
        $('.photo_libox').removeClass('open');
        $('.photo_libox').addClass('close');
        setTimeout(function() {
            $(".photo_libox").removeClass("close");
        }, 1600);
    });







}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑restaurant內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑restaurant內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑restaurant內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑restaurant內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑









// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓viproom內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓viproom內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓viproom內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓viproom內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓viproom內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/cuisine/detail_room.html',
    })
    .done(function(data) {
        $(".vip_room").html(data);
        viproomjs();
    });

function viproomjs() {

    // 點選.photo開啟photo_libox
    $('.room').click(function() {
        $('.vip_room').removeClass('off')
        $('.vip_room').addClass('load');
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $(".vip_room").removeClass("load");
            $(".vip_room").addClass("on");
        }, 1000);


        // room_slick 
        $('.vip_room .room_slick ul').slick({
            lazyLoad: 'ondemand',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".vip_room .slick_prev",
            nextArrow: ".vip_room .slick_next",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }]
        });

    });

    // 點選.libox_close關閉photo_libox
    $('.libox_close').click(function() {
        $('.vip_room').removeClass('on');
        $('.vip_room').addClass('off');
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".vip_room").removeClass("off");
            $('.vip_room .room_slick ul').slick('unslick');
        }, 1600);
    });

}



// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑viproom內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑viproom內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑viproom內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑viproom內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑





// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓team內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓team內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓team內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓team內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓team內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// 主廚頁面
$.ajax({
        url: '../../view/layout/cuisine/detail_chef.html',
    })
    .done(function(data) {
        $(".chef").html(data);
        chefjs();
    });

function chefjs() {

    $('#chef').click(function() {
        $('.chef').addClass('load');
        $('.chef').removeClass('off');
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $('.chef').removeClass('load');
            $('.chef').addClass('on')
        }, 1000);

        // _slick
        $('.chef .team_slick ul').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            speed: 1000,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // slick按鈕事件
        $(".chef .slick_prev").click(function() {
            $('.chef .team_slick ul').slick("getSlick").slickPrev();
        });
        $(".chef .slick_next").click(function() {
            $('.chef .team_slick ul').slick("getSlick").slickNext();
        });

    });





    // 點選.libox_close關閉photo_libox
    $('.chef .team_close').click(function() {
        $('.chef').removeClass('on');
        $('.chef').addClass('off');
        $("body").css("overflow-y", "auto");
        setTimeout(function() {
            $(".chef").removeClass("off");
        }, 1600);
    });
}


// 品酒師頁面

$.ajax({
        url: '../../view/layout/cuisine/detail_sommelier.html',
    })
    .done(function(data) {
        $(".sommelier").html(data);
        sommelierjs();
    });

function sommelierjs() {

    $('#sommelier').click(function() {
        $('.sommelier').addClass('load');
        $('.sommelier').removeClass('off');
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $('.sommelier').removeClass('load');
            $('.sommelier').addClass('on')
        }, 1000);

        // _slick
        $('.sommelier .team_slick ul').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            speed: 1000,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // slick按鈕事件
        $(".sommelier .slick_prev").click(function() {
            $('.sommelier .team_slick ul').slick("getSlick").slickPrev();
        });
        $(".sommelier .slick_next").click(function() {
            $('.sommelier .team_slick ul').slick("getSlick").slickNext();
        });

    });





    // 點選.libox_close關閉photo_libox
    $('.sommelier .team_close').click(function() {
        $('.sommelier').removeClass('on');
        $('.sommelier').addClass('off');
        $("body").css("overflow-y", "auto");
        setTimeout(function() {
            $(".sommelier").removeClass("off");
        }, 1600);
    });
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑team內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑team內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑team內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑team內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑