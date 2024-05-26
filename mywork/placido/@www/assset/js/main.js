// 引入各類js


$(document).ready(function() {


    // header
    layoutajax.headerajax();

    // footer
    layoutajax.footerajax();


    // Blazy
    blazyfunction.common();

    aHrefChangePageEffect('main a');

});


// header及footer
var layoutajax = {

    headerajax: function() {
        $.ajax({
                url: '../../view/layout/header.html',
            })
            .done(function(data) {
                $("header").html(data);

                headerjs();
                aHrefChangePageEffect('header a');

            });

    },



    footerajax: function() {
        $.ajax({
                url: '../../view/layout/footer.html',
            })
            .done(function(data) {
                $("footer").html(data);
                footerjs();
                aHrefChangePageEffect('footer a');
            });
    }

}



// header頁首-------------

function headerjs() {



    // 浮動的nav
    var windowW = $(window)
    windowW.scroll(function() {

        navfixed();

    });

    // 隱藏選單的js
    hidemenu.open();
    hidemenu.close();





}




////////////////////////////////////
//         浮動的nav的js          //
////////////////////////////////////

function navfixed() {

    // 浮動加入class"fixed"
    var windowTop = $(window).scrollTop()

    if (windowTop - $('.nav_left').height() > 0) {
        $(".navfloat").addClass('fixed');

    } else {
        $(".navfloat").removeClass("fixed");
    }

}



// footer頁尾--------------- 


function footerjs() {

    // 點選MORE INFORMATION會往下捲動到頂端
    $('.ft_slideup').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: 0
            },
            // 動作時間
            2000, 'easeOutCubic');
    });


    if ($(window).width() < 1025) { $(".dropdown .selectClick").text("選擇展示中心"); }




    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////

    $('.ft_dropdown .selectClick').click(function() {
        $(this).toggleClass("open");
        $('.dropdown ul').slideToggle(400);
        $('.ft_dropdown').css("overflow", "visible");
    });

    $('.dropdown ul li').click(function() {
        var selectClick = $('.ft_dropdown .selectClick');
        selectClick.text($(this).find("a").text());
        aClick();
    });

    // 隱私權政策內頁的js
    privacy.open();
    privacy.close();


}


function aClick() {
    var selectClick = $('.ft_dropdown .selectClick');
    if (selectClick.hasClass('open')) {
        selectClick.removeClass('open');
        $('.dropdown ul').fadeToggle(1);
    }
}





////////////////////////////////////
//        隱藏選單的js            //
////////////////////////////////////

var hidemenu = {

    open: function() {
        // 點選menu開啟隱藏選單
        $(".hiden_open").click(function() {
            $(".hiden_menu").addClass("open");
            $("body").css("overflow", "hidden");

            $(".navfloat").removeClass("fixed");
        });
    },

    close: function() {
        // 點選bar_close關閉隱藏選單
        $(".bar_close").click(function() {
            $(".hiden_menu").addClass("close");
            $(".hiden_menu").removeClass("open");
            $("body").css("overflow-y", "auto");
            setTimeout(function() {
                $(".hiden_menu").removeClass("close");
            }, 1200);
        });

    },

    hover: function() {
        $(".bar_list ul li").mouseover(function() {
            $(this).find("p").delay(500).css("display", "none")
        });

        $(".bar_list ul li").mouseout(function() {
            $(this).find("p").delay(500).css("display", "block")
        });
    }
}






////////////////////////////////////
//      隱私權政策內頁的js        //
////////////////////////////////////


var privacy = {


    open: function() {
        $(".privacy_bt").click(function() {
            $(".privacy").addClass("open");
            $("body").css("overflow-y", "hidden");
            $(".privacy").css("overflow-y", "auto")
        });
    },
    close: function() {
        $(".privacy_close").click(function() {
            $(".privacy").removeClass("open");
            $(".privacy").addClass("close");
            $("body").css("overflow-y", "auto");
            $(".privacy").css("overflow-y", "hidden")
            setTimeout(function() {
                $(".privacy").removeClass("close");
                $(".privacy").animate({
                    scrollTop: 0
                }, 0)
            }, 1800);
        });
    }

}


////////////////////////////////////
//    product_detail內頁的js      //
////////////////////////////////////

var product_detail_inf = {
    open: function() {
        $(".seeProduct_inf").click(function() {
            $(".product_detail_inf").addClass("load");
            $("body").css("overflow", "hidden");
            $(".product_detail_inf").css("overflow", "auto");
            $(".product_detail_inf .detail").css("display", "block");
            setTimeout(function() {
                $(".product_detail_inf").removeClass("load");
                $(".product_detail_inf").addClass("open");
            }, 1000);
        });
    },

    close: function() {
        $(".product_detail_inf .detail_close").click(function() {
            $(".product_detail_inf").addClass("close");
            $(".product_detail_inf").removeClass("open");
            $(".product_detail_inf").css("overflow", "hidden");
            setTimeout(function() {
                $(".product_detail_inf").removeClass("close");

                // 剔除產品搜尋結果已開啟時
                if (!$(".result").hasClass("open")) {

                    $("body").css("overflow", "auto");
                }

                $(".product_detail_inf .show").removeClass("show");
                $(".product_detail_inf").animate({
                    scrollTop: 0
                }, 0)
            }, 1800);
        });
    },

    slick: function() {

        $(".detail_slick ul").slick({
            lazyLoad: 'ondemand',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });

        $(".product_detail_inf .icon-arrow-left").click(function() {
            $('.detail_slick ul').slick("getSlick").slickPrev();
        });

        $(".product_detail_inf .icon-arrow-right").click(function() {
            $('.detail_slick ul').slick("getSlick").slickNext();
        });

    },

    waypoint: function() {
        var lboxW = $('.product_detail_inf');

        lboxW.scroll(function() {

            product_detail_inf_waypoint(lboxW);

        });
    },

    like: function() {
        $(".wishlist span").click(function() {
            $(this).toggleClass("_like");
        });
    },

    all: function() {
        product_detail_inf.open();
        product_detail_inf.close();
        product_detail_inf.slick();
        product_detail_inf.waypoint();
        product_detail_inf.like();
    }

}


// product_detail_inf的waypoint
function product_detail_inf_waypoint(data_o) {

    var windowHeight = $(window).height()

    $(data_o).find('.detail_slick_bg').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });



    $(data_o).find('.size>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });

}
















// 通用內容 開始----------------------------------------------------
document.createElement("picture");

// Blazy

var blazyfunction = {
    common: function() {
        // Initialize
        var bLazy = new Blazy({
            offset: 500,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    }

}