////////////////////////////////////
//       常用function懶人包       //
////////////////////////////////////
// 開啟作品編輯燈箱
// ajaxDesignLibox()
// 關閉作品編輯燈箱
// designLibox.close();
// 作品圖片slick重制
// designLibox.reset();
// 開啟提示燈箱
// psLibox.open();
// 關閉提示燈箱
// psLibox.close();

function ajaxDesignLibox() {
    $("body").append("<article class='designLibox'></article>")
    $.ajax({
            url: '../../views/member/designLibox.html',
        })
        .done(function(data) {
            $(".designLibox").html(data);
            designLibox.all();
        });
}

var designLibox = {
    open: function() {
        $(".designLibox").addClass("open");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "hidden", "padding-right": "1rem" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function() {
        $(".designLibox section .button ul .cancel").click(function() {
            // designLibox.close();
        });
    },

    click_other: function() {
        $(document).click(function(e) {
            if ($(e.target).hasClass("designLibox")) {
                designLibox.close();
            }
        })
    },

    close: function() {
        $(".designLibox").removeClass("open");
        $(".designLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".designLibox").remove();
        }, 800);
    },

    worksImgSlick: function() {
        $(".designLibox .worksImg ._slick ul").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            speed: 800,
            infinite: false,
            swipe: false,
            prevArrow: ".designLibox .worksImg ._slick .icon-left",
            nextArrow: ".designLibox .worksImg ._slick .icon-right",
            responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    },

    // slick重制 後端請注意:如果要重啟slick 就啟動這個function
    reset: function() {
        $(".designLibox .worksImg ._slick ul").slick('unslick');
        worksImgSlick();
    },

    // 自適應選單li數量
    selectNavLiNumber: function() {
        $li = $(".designLibox .selectNav ul li")
        var numb = $li.length
        if (numb == 3) {
            $li.addClass("w_33").removeClass("w_50");
        } else if (numb == 2) {
            $li.addClass("w_50").removeClass("w_33");
        } else if (numb == 1) {
            $(".designLibox .selectNav").remove();
        }
    },

    // 選單浮動
    selectNavfixed: function() {
        $(".designLibox").scroll(function() {
            var scrollTop = $(this).scrollTop()

            $title = $(".designLibox ._title")
            var titleHeight = $title.height() + parseInt($title.css("padding-top"))

            $selectNav = $(".designLibox .selectNav")
            var selectNavMarginTop = parseInt($selectNav.css("margin-top"))

            if (scrollTop >= (selectNavMarginTop + titleHeight)) {
                $selectNav.find("ul").addClass("fixed");
            } else {
                $selectNav.find("ul").removeClass("fixed");
            }
        })
    },

    // 手機板選單拖拉效果
    perfectScrollbar: function() {
        if ($(window).width() < 600) {
            var container = document.querySelector('.designLibox .selectNav ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    // 選單主功能 新增項目!!!!!!!!!!!!!!!!!!
    // 新增項目!!!!!!!!!!!!!!!!!!
    // 新增項目!!!!!!!!!!!!!!!!!!
    // 新增項目!!!!!!!!!!!!!!!!!!
    // 新增項目!!!!!!!!!!!!!!!!!!
    // 新增項目!!!!!!!!!!!!!!!!!!
    selectNav: function() {
        $(".designLibox section .selectNav ul li").each(function() {
            $(this).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                if ($(this).hasClass("intro")) {
                    $("form.intro").show().siblings().hide();
                } else if ($(this).hasClass("coDesigner")) {
                    $("form.coDesigner").show().siblings().hide();
                } else if ($(this).hasClass("speech")) {
                    $("form.speech").show().siblings().hide();
                }
            });
        });
    },

    worksDetailFocus: function() {
        $(".content .tableContent .worksDetail .workbox").click(function() { $(this).find("input").focus() })
    },

    all: function() {
        designLibox.open();
        designLibox.close_click();
        designLibox.click_other();
        designLibox.worksImgSlick();
        designLibox.selectNavLiNumber();
        designLibox.selectNavfixed();
        designLibox.perfectScrollbar();
        designLibox.selectNav();
        // 重新啟動來自其他js的function
        service.textareaWordsLimit();
        service.signupChangWord();
        dropdownList();
        dropdownList2();
    }
}




// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此
var psLibox = {
    open: function() {
        $("body").append("<article class='psLibox'></article>")
        $.ajax({
            url: '../../views/member/psLibox.html',
        })
        .done(function(data) {
            // 使用最後一個psLibox 因為他可能會有兩個或一個的情形
            $(".psLibox:last-child").html(data);
            psLibox.close();
            $(".psLibox section").slideDown(500);
        });
    },

    close: function() {
        $(".psLibox ul li").each(function() {
            $(this).click(function() {
                $this = $(this)
                $this.closest(".psLibox").addClass("close");
                $this.closest(".psLibox").find("section").slideUp(400);
                setTimeout(function() {
                    $this.closest(".psLibox").remove();
                }, 400);
            });
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("psLibox")) {
                $(".psLibox").addClass("close");
                setTimeout(function() {
                    $(".psLibox").remove();
                }, 400);
            }
        })
    },
}
// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此
// 後端請注意:提示燈箱在此