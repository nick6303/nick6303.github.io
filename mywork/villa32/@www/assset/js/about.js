/***************************************************************************************************************************/
/////////////////////////////////////
//               waypoint          //
/////////////////////////////////////


function waypoint() {
    // .title
    $('.title').waypoint(function () {
        $(".title").addClass('show');
    }, {
        offset: '50%'
    });

    $('.menu_list').waypoint(function () {
        $(".menu_list").addClass('show');
    }, {
        offset: '80%'
    });

    $(".mainContent .box>*").each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('show');
        }, {
            offset: '80%'
        });
    })
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
/////////////////////////////////////
//               b-lazy            //
/////////////////////////////////////

function _blazy() {
    var bLazy = new Blazy({
        offset: 100,
        success: function (ele) {
            Waypoint.refreshAll();
            $(ele).closest("._img").addClass("in");
        }
    });
}
/***************************************************************************************************************************/

///////////////////////////////
//          about            //
//////////////////////////////

var about = {
    navFixed: function () {
        // nav浮動出現(每個頁面nav出現觸發點不一樣)
        $(window).scroll(function () {
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
        });
    },

    anchorClick: function () {
        var boxs = document.querySelectorAll(".mainContent .box")
        $(".menu_list ul li").each(function () {
            $(this).click(function () {
                var i = $(this).index()
                var center = $(window).height() / 2 - $(boxs[i]).innerHeight() / 2
                if (center < 0) {
                    var center = $(".hd_fixed").innerHeight()
                }
                var point = $(boxs[i]).offset().top - center
                $("html,body").animate({
                        // scrollTop定位
                        scrollTop: point,
                    },
                    // 動作時間
                    1000, 'easeOutCirc'
                );
            })
        });
    },

    all: function () {
        about.navFixed();
        about.anchorClick();
    }
}




/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////
//          燈箱內頁         //
//////////////////////////////


function ajax() {
    $(".liboxContent").each(function () {
        var target = $(this)
        var src = $(this).attr("data-src")
        ajaxin(src, target)
    });
}

function ajaxin(src, target) {
    $.ajax({
            // 載入資料
            url: src,
        })
        .done(function (data) {

            // 將資料塞入結構
            $(target).html(data);
            libox.all();
        });
}



var libox = {
    open_click: function () {
        $(".mainContent .box ._text button").off().click(function () {
            var target = $(this).attr("data-target")
            libox.open(target)
        });
    },

    open: function (target) {
        $("." + target).addClass("load")
        $("body").css("overflow-y", "hidden");
        setTimeout(function () {
            // 重新建立waypoint
            libox.waypoint();
            $("." + target).removeClass("load").addClass("on")
        }, 1000)
    },

    close_click: function () {
        $(".back1").each(function () {
            $(this).off().click(function () {
                $(".liboxContent.on").addClass("off");
                $(".liboxContent.on").removeClass("on");
                $("body").css("overflow-y", "visible");
                // 摧毀waypoint
                Waypoint.destroyAll();
                waypoint();
                setTimeout(function () {
                    $(".liboxContent .detail").animate({
                            // scrollTop定位
                            scrollTop: 0,
                        },
                        // 動作時間
                        0, 'easeOutCirc'
                    );
                    $(".liboxContent").removeClass("off");
                    $('.liboxContent .show').removeClass('show');
                }, 2000);
            });
        })
    },

    scrollMove: function () {
        $('.detail').scroll(function () {
            $this = $(this)
            var scrollTop = $(this).scrollTop()
            var bannerHeight = $(this).find(".detail_banner").innerHeight()

            // 在進入浮動前先加入class"hide"
            if (scrollTop > (bannerHeight / 2 - 200)) {
                $('.detail').find(".detail_nav").addClass("hide");
            } else {
                $('.detail').find(".detail_nav").removeClass("hide");
            }

            // detail_nav浮動的waypoint
            if (scrollTop > bannerHeight) {
                $('.detail').addClass("fixed");
            } else {
                $('.detail').removeClass("fixed");
            }
        });
    },

    menu: function () {
        $(".icom_box").click(function () {

            if (!$("header").hasClass("open")) {
                $("header").removeClass("close");
                $("header").addClass("open");

                // 將.icom_box加入class"open"並在指定時間內移除
                $("main").addClass("open");

                setTimeout(function () {
                    $("main").removeClass("open");
                }, 1000);
            }
        });

        $(".icom_box").click(function () {
            $(".hot_spring .detail").removeClass("fixed")
        });
    },

    waypoint: function () {
        eachWaypoiny(".detail_content ._title", "80%")
        eachWaypoiny(".row ._img", "80%")
        eachWaypoiny(".row ._text", "80%")
        eachWaypoiny(".ft_room", "120%")

        function eachWaypoiny(target, offsetValue) {
            $(target).each(function (index, element) {
                $(element).waypoint({
                    context: $(this).closest(".detail"),
                    handler: function () {
                        $(element).addClass('show');
                    },
                    offset: offsetValue
                });
            });
        }
    },

    blazy: function () {
        var bLazy = new Blazy({
            container: ".detail",
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest("._img").addClass("in")
                $(ele).closest("a").addClass("in")
            }
        });
    },


    slideup: function () {
        $('.banner_slideup').click(function () {
            var x = $('.detail_banner').height();
            var y = parseInt($('.banner_slideup').css('margin-top'));
            $('.detail').animate({
                scrollTop: x + y
            }, {
                duration: 1000,
                easing: 'easeOutQuad'
            });
        })
    },

    all: function () {
        libox.open_click();
        libox.close_click();
        libox.scrollMove();
        libox.menu();
        libox.waypoint();
        libox.blazy();
        libox.slideup();
    }
}
/***************************************************************************************************************************/

$(document).ready(function () {

    waypoint();

    _blazy();

    ajax();

    about.all();



});