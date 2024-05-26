// header頁首-------------
$.ajax({
        url: '../../view/layout/header.html',
    })
    .done(function (data) {
        $("header").html(data);
        headerjsLoad();
        aHrefChangePageEffect('header a');
    })

function headerjsLoad() {
    // navopen-------------------
    $(".navopen_icon").click(function () {

        // 此為在detail內頁頁面點選.navopen_icon讓浮動nav消失
        if ($('.detail').hasClass('on') || $('.detail').parent().hasClass('on')) {
            $(".detail").addClass("fixed");
            $(".detail").addClass("close");
            setTimeout(function () {
                $(".detail").removeClass("close");
            }), 1400
        }



        if (!$("header").hasClass("open")) {
            $("header").removeClass("close");
            $("header").addClass("open");

            // if (!($('.detail').hasClass('on')||$('.detail').parent().hasClass('on'))) {
            //     $("body").css("overflow-y", "hidden");
            // }

        } else {
            $("header").removeClass("open");
            $("header").addClass("close");


            // 避免在內頁開啟的情況下將body的overflow:auto加回去
            if (!($('.detail').hasClass('on') || $('.detail').parent().hasClass('on'))) {
                $("body").css("overflow-y", "auto");
            }
        }

    });

    // 點選#contact至contact內頁
    $("#contact").click(function () {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
        if (!$("main article").hasClass("on")) {
            $("body").css("overflow-y", "hidden");
        }
    });

    // 點選".contact_close"關閉contact內頁
    $('.contact_close').click(function () {
        $('.contact').removeClass('on');
        $('.contact').addClass('off');
        if (!$("main article").hasClass("on")) {
            $("body").css("overflow-y", "auto");
        }
    });

}


// footer頁尾版本一------------
// $.ajax({
//         url: '../../view/layout/footer.html',
//     })
//     .done(function(data) {
//         $("footer").html(data);
//         footerjsLoad();
//     })

// function footerjsLoad() {
//     // 點選top至上方-----------------------------
//     $(".ft_top").click(function() {
//         $("html,body").animate({
//                 // scrollTop定位
//                 scrollTop: 0,
//             },
//             // 動作時間
//             1500, 'easeOutCirc'
//         );
//     });
// }




// footer頁尾版本二------------ 

$.ajax({
        url: '../../view/layout/footer2.html',
    })
    .done(function (data) {
        $("footer").html(data);
        footerjsLoad();
    })

function footerjsLoad() {
    // 點選top至上方-----------------------------
    $(".ft_top").click(function () {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: 0,
            },
            // 動作時間
            1500, 'easeOutCirc'
        );
    });


    // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function () {
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
    });



    // 訂閱事件-----------
    $('.footer_button').click(function () {
        $('.subscription_bg').addClass('on');
        $('.subscription').addClass('open');
        $('.subscription').removeClass('close');
        $("body").css("overflow-y", "hidden");
    });

    $('.subscription_close').click(function () {
        $('.subscription_bg').removeClass('on');
        $('.subscription_bg').addClass('off');
        $('.subscription').removeClass('open');
        $('.subscription').addClass('close');
        setTimeout(function () {
            $('.subscription_bg').removeClass('off');
            $('.subscription').removeClass('close');
            $("body").css("overflow-y", "auto");
        }, 1000);
    });





    $(".sb_button").click(function () {
        $('.subscription').removeClass('open');
        $('.subscription').addClass('close');
        setTimeout(function () {
            $('.subscription').removeClass('close');
        }, 1000);
        $('.thank').addClass('open');

    });

    $('.thank input').click(function () {
        $('.subscription_bg').removeClass('on');
        $('.subscription_bg').addClass('off');
        $('.thank').removeClass('open');
        $('.thank').addClass('close');
        setTimeout(function () {
            $('.subscription_bg').removeClass('off');
            $('.thank').removeClass('close');
            $("body").css("overflow-y", "auto");
        }, 1000);

    });

}






// 通用內容 開始----------------------------------------------------
$(document).ready(function () {
    var kk = $(".hd_slideup")
    // banner隱藏至上方-----------------------------
    kk.click(function () {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.hd_slideup').offset().top,
            },
            // 動作時間
            1000, 'easeOutCubic');
    });

    // 將最後一個li後面的線隱藏
    var lastLeft = 0;
    $('li._li').each(function (index) {
        if (index != 0) {
            if (this.getBoundingClientRect().left < lastLeft) {
                $(this).prev().addClass('noline');

            }
        }
        lastLeft = this.getBoundingClientRect().left;
    });

    // banner_slick
    $('.banner_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        speed: 1500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    });

    // 引入blazy
    blazyfunction.common();


});






// 通用內容結束----------------------------------------------------

document.createElement("picture");

// bLazy

// Blazy
var blazyfunction = {
    common: function () {
        // Initialize
        var bLazy = new Blazy({
            offset: 500,
            success: function (ele) {
                Waypoint.refreshAll();

            }
        });
    }

}