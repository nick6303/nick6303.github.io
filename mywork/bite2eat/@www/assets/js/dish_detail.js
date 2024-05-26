var dish_detail = {
    overflow: function() {
        if ($(window).width() > 1024) {
            $(".dish_detail ._title ul").niceScroll({
                cursorcolor: "transparent",
                cursorborder: "none",
                cursorwidth: "4px",
                railpadding: { top: 0, right: 0, left: 0, bottom: -10 },
            });
        } else {
            var container = document.querySelector('.dish_detail ._title ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
            });
        }
    },

    backgrounColor: function() {
        $(window).scroll(function() {
            dish_detail.backgrounColorChang();
        });
    },

    backgrounColorChang: function() {
        var scrolTop = $(window).scrollTop();
        var dishes = document.querySelectorAll(".dishes");
        var x
        for (var i = dishes.length - 1; i >= 0; i--) {
            var dots = $(dishes[i]).offset().top - $(window).height() / 2
            if (scrolTop > dots) {
                var x = i
                break
            }
        }
        var bgcolor = $(dishes[x]).data("bgcolor")
        $(".dish_detail").css("background-color", bgcolor);
    },
    dishesSelect: function() {
        var dishes = document.querySelectorAll(".dishes");
        $(".dish_detail ._title ul li").click(function() {
            var i = $(this).index()
            var scroll = $(dishes[i]).offset().top
            $("html,body").animate({
                scrollTop: scroll
            }, 1000, 'easeOutCubic');
        });
    },

    mobileCrossClick: function() {
        $(".mobileCross").click(function() {
            $(this).closest(".dishes").find("ul").slideDown(1000);
            $(this).hide();
            $(this).closest(".dishes").siblings().find("ul").slideUp(1000);
            $(this).closest(".dishes").siblings().find(".mobileCross").show();
            setTimeout(function() {
                $("body").getNiceScroll().resize();
            }, 1000);
        });
    },

    all: function() {
        dish_detail.overflow();
        dish_detail.backgrounColor();
        dish_detail.dishesSelect();
        dish_detail.mobileCrossClick();
    }

}


