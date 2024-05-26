$(document).ready(function() {


    // 內容waypoint
    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, { offset: '80%' });


    // menu_list
    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, { offset: '80%' });


    // 內容的waypoint
    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '80%' });
    });

    $(".reservation").waypoint(function() {
        $(".reservation").addClass('show');
    }, { offset: '60%' });



    // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function() {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
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

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓treatment內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓treatment內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓treatment內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓treatment內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓treatment內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/spa/detail_treatment.html',
    })
    .done(function(data) {
        $(".treatment").html(data);
        treatmentjs();
    })


function treatmentjs() {


    // 點選learn more開啟內頁
    $("#treatment").click(function() {
        $(".treatment").removeClass("off");
        $(".treatment").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".treatment").removeClass("load");
            $(".treatment").addClass("on");
        }, 1000);
    });




    // 點選back關閉內頁
    $(".back_button").click(function() {
        $(".treatment").addClass("off");
        $(".treatment").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.treatment .show').removeClass('show');

        setTimeout(function() {
            $(".treatment .detail").animate({
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
            $(".treatment").addClass("open");

            setTimeout(function() {
                $(".treatment").removeClass("open");
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


    var lboxW = $('.treatment .detail');

    lboxW.scroll(function() {

        treatment_waypoint(lboxW);

    });

    // ↓↓↓↓新加的那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    $(".moreLibox .whiteBox").mCustomScrollbar();

    $(".more").click(function() {
        $(this).closest(".detail_row").find(".moreLibox").addClass("open");
    });

    $(".moreLibox .liboxClose").click(function() {
        var $this = $(this)
        $this.closest(".moreLibox").removeClass("open");
        $this.closest(".moreLibox").addClass("close");
        setTimeout(function() {
            $this.closest(".moreLibox").removeClass("close");
        }, 600);
    });

    //↑↑↑↑↑↑↑ 新加的那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


}



function treatment_waypoint(data_o) {
    // console.log(data_o)
    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        if (this.getBoundingClientRect().top - 200 < 0) { $(".treatment .detail_nav").addClass("hide"); } else { $(".detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {


        if (this.getBoundingClientRect().top + 30 < 0) { $(".treatment .detail").addClass("fixed"); } else { $(".detail").removeClass("fixed"); }

    });



    // detail_content內容的waypoint
    // menu_list

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


    $(data_o).find('.make_a_reservation').each(function(index) {

        if (this.getBoundingClientRect().top + this.getBoundingClientRect().height - $(window).height() <= 0) {

            $(this).addClass("show");
        }

    });

}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑treatment內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑treatment內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑treatment內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑treatment內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑




















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓aromatherapist內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓aromatherapist內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓aromatherapist內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓aromatherapist內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓aromatherapist內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/spa/detail_aromatherapist.html',
    })
    .done(function(data) {
        $(".aromatherapist").html(data);
        aromatherapistjs();
    })


function aromatherapistjs() {


    // 點選learn more開啟內頁
    $("#aromatherapist").click(function() {
        $(".aromatherapist").removeClass("off");
        $(".aromatherapist").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".aromatherapist").removeClass("load");
            $(".aromatherapist").addClass("on");
        }, 1000);
    });



    // 點選back關閉內頁
    $(".back_button").click(function() {
        $(".aromatherapist").addClass("off");
        $(".aromatherapist").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.aromatherapist .show').removeClass('show');
        setTimeout(function() {
            $(".aromatherapist .detail").animate({
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
            $(".aromatherapist").addClass("open");

            setTimeout(function() {
                $(".aromatherapist").removeClass("open");
            }, 1000);
        }
    });

    $(".icom_box").click(function() {
        $(".detail").removeClass("fixed")
    });










    // 內頁共同使用
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

    var lboxW = $('.aromatherapist .detail');

    lboxW.scroll(function() {

        aromatherapist_waypoint(lboxW);

    });




}


function aromatherapist_waypoint(data_o) {

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        if (this.getBoundingClientRect().top - 200 < 0) { $(".aromatherapist .detail_nav").addClass("hide"); } else { $(".aromatherapist .detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

        if (this.getBoundingClientRect().top + 30 < 0) { $(".aromatherapist .detail").addClass("fixed"); } else { $(".aromatherapist .detail").removeClass("fixed"); }

    });



    // detail_content內容的waypoint
    // menu_list

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


    $(data_o).find('.make_a_reservation').each(function(index) {

        if (this.getBoundingClientRect().top + this.getBoundingClientRect().height - $(window).height() <= 0) {

            $(this).addClass("show");
        }

    });

}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑aromatherapist內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑aromatherapist內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑aromatherapist內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑aromatherapist內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑







// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓products內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓products內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓products內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓products內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓products內頁的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/spa/detail_products.html',
    })
    .done(function(data) {
        $(".products").html(data);
        productsjs();
        detailjs();
    })


function productsjs() {


    // 點選learn more開啟內頁
    $("#products").click(function() {
        $(".products").removeClass("off");
        $(".products").addClass("load");
        $("body").css("overflow-y", "hidden");


        setTimeout(function() {
            $(".products").removeClass("load");
            $(".products").addClass("on");
        }, 1000);
    });





    // 點選back關閉內頁
    $(".back_button").click(function() {
        $(".products").addClass("off");
        $(".products").removeClass("on");
        $("body").css("overflow-y", "auto");
        $('.products .show').removeClass('show');
        setTimeout(function() {
            $(".products .detail").animate({
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
            $(".products").addClass("open");

            setTimeout(function() {
                $(".products").removeClass("open");
            }, 1000);
        }
    });

    $(".icom_box").click(function() {
        $(".detail").removeClass("fixed")
    });



    // 內頁共同使用
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




    var lboxW = $('.products .detail');

    lboxW.scroll(function() {

        products_waypoint(lboxW);

    });




}


function products_waypoint(data_o) {

    // 在進入浮動前先加入class"hide"
    $(data_o).find('.detail_slogan').each(function(index) {

        if (this.getBoundingClientRect().top - 200 < 0) { $(".products .detail_nav").addClass("hide"); } else { $(".products .detail_nav").removeClass("hide"); }

    });


    // detail_nav浮動的waypoint
    $(data_o).find('.banner_slideup').each(function(index) {

        if (this.getBoundingClientRect().top + 30 < 0) { $(".products .detail").addClass("fixed"); } else { $(".products .detail").removeClass("fixed"); }

    });





    // detail_content內容的waypoint
    // menu_list

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


    $(data_o).find('.make_a_reservation').each(function(index) {

        if (this.getBoundingClientRect().top + this.getBoundingClientRect().height - $(window).height() <= 0) {

            $(this).addClass("show");
        }

    });

}




// dermalogica內頁的內頁的js
function detailjs() {
    $('.learn').click(function() {
        $('.dermalogica').addClass('load');
        $('.dermalogica').removeClass('close');
        setTimeout(function() {
            $('.dermalogica').removeClass('load');
            $('.dermalogica').addClass('open');
        }, 1000);
    });


    $(".close_icom").click(function() {
        $('.dermalogica').removeClass('open');
        $('.dermalogica').addClass('close');
    });


    // slick---------------------------
    $('.detail_slick ul').slick({
        arrows: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".slick_prev").click(function() {
        $('.detail_slick ul').slick("getSlick").slickPrev();
    });


    $(".slick_next").click(function() {
        $('.detail_slick ul').slick("getSlick").slickNext();
    });

    // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function() {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
    });

}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑products內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑products內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑products內頁的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑