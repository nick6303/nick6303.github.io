$(document).ready(function() {
    product_detail.banner_slideup();


    // click事件
    product_detail.click();


    // waypoint事件
    product_detail_waypoint.introduction();
    product_detail_waypoint.row_title();
    product_detail_waypoint.row_li();

    // ajax事件
    ajax.product_detail_inf();
    ajax.product_detail_intro();
});


// 功能
var product_detail = {
    banner_slideup: function() {
        $("._title>span").click(function() {
            $("html,body").animate({
                    // scrollTop定位
                    scrollTop: $(".introduction").offset().top - parseInt($(".introduction").css("margin-top"))
                },
                // 動作時間
                1000, 'easeOutCubic');

        });
    },

    click: function() {
        product_detail_click.row_li_click();
    }


}

// click事件
var product_detail_click = {

    row_li_click: function() {
        $(".row_text").click(function() {
            $(this).parent().toggleClass("checked");
        });
    },

}


// waypoint事件
var product_detail_waypoint = {


    introduction: function() {
        $(".introduction").waypoint(function() {
            $(".introduction").addClass("show");
        }, { offset: '90%' });
    },

    row_title: function() {
        $(".row>h2").each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '60%' });
        });
    },

    row_li: function() {
        $(".row ul li").each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '70%' });
        });
    },
}



// 內頁的ajax
var ajax = {

    product_detail_inf: function() {
        $.ajax({
                url: '../../view/layout/product/product_detail_inf.html',
            })
            .done(function(data) {
                $(".product_detail_inf").html(data);


                product_detail_inf.all();
            });

    },

    product_detail_intro: function() {
        $.ajax({
                url: '../../view/layout/product/product_detail_intro.html',
            })
            .done(function(data) {
                $(".product_detail_intro").html(data);
                product_detail_intro.open();
                product_detail_intro.close();
                product_detail_intro.slick();
                product_detail_intro.menu_list();
                product_detail_intro.standard_click();
            });
    },
}



var product_detail_intro = {

    open: function() {
        $(".seeIntro").click(function() {
            $(".product_detail_intro").addClass("load");
            $("body").css("overflow", "hidden");
            setTimeout(function() {
                $(".product_detail_intro").removeClass("load");
                $(".product_detail_intro").addClass("open");
            }, 1000);

            // 手機板時
        });
    },

    close: function() {
        $(".detail_close").click(function() {
            $(".product_detail_intro").addClass("close");
            $(".product_detail_intro").removeClass("open");

            setTimeout(function() {
                $(".product_detail_intro").removeClass("close");
                $("body").css("overflow", "auto");
                $(".product_detail_intro .show").removeClass("show");
            }, 1200);

            // 在最後一刻捲動到上方 確保每次開啟內頁時均由最上方開始
            setTimeout(function() {
                $(".product_detail_intro .detail").animate({
                    scrollTop: 0
                }, 0);
                $(".product_detail_intro .intro_content").animate({
                    scrollTop: 0,
                }, 0);
            }, 1199);
        });
    },

    slick: function() {
        $(".intro_slick ul").slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    dots: false,
                }
            }]
        });

        $(".intro_slick_arrow .icon-arrow-left").click(function() {
            $('.intro_slick ul').slick("getSlick").slickPrev();
        });

        $(".intro_slick_arrow .icon-arrow-right").click(function() {
            $('.intro_slick ul').slick("getSlick").slickNext();
        });
    },

    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////
    menu_list: function() {
        $('.selectMenu').click(function() {
            $(this).toggleClass("open");
            $('.menu_list ul').fadeToggle(300);
            $('.menu_list_bg').css("overflow", "visible");
        });

        $('.menu_list ul li').click(function() {
            product_detail_intro.aClick();
        });

        // 引入menu_list選單滑動事件
        product_detail_intro.menu_listScroll();
    },

    aClick: function() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    },

    ////////////////////////////////////
    //      menu_list選單滑動事件     //
    ////////////////////////////////////

    menu_listScroll: function() {
        var row = document.querySelectorAll('.intro_content>div')

        var slick = $(".intro_slick")

        $('.menu_list ul li').click(function() {

            var i = $(this).prevAll().length + 2;

            var y = $(row[i]).prevAll()



            // 總高度
            var ytotalHeight = 0;

            for (var a = 0; a < y.length; a++) {

                var yHeight = y[a].offsetHeight;

                var ytotalHeight = ytotalHeight + yHeight;
            }

            // 總margin-top值
            var yTotalMarginTop = 0

            for (var b = 0; b < y.length; b++) {

                var yMarginTop = parseInt($(y[b]).css("margin-top"))

                var yTotalMarginTop = yTotalMarginTop + yMarginTop
            }




            $(".product_detail_intro .detail").animate({
                    // scrollTop定位
                    scrollTop: slick.height() + ytotalHeight + yTotalMarginTop
                },
                // 動作時間
                1000, 'easeOutCubic');
        });
    },

    // standard表單click事件
    standard_click: function() {
        $(".hidden_span").click(function() {

            var type = document.querySelectorAll('.table1_type')

            var i = $(this).parent().prevAll().length;

            $(type[i]).find(".hidden_table").slideToggle(500);

            $(this).toggleClass("on");

            $(this).parent().find("ul").slideToggle(500);
        })
    }

}