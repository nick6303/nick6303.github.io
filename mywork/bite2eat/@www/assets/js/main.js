/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {
    homeW: function () {
        $(".activity_nav").waypoint({
            handler: function () {
                $(".activity_nav").addClass('show');
            },
            offset: '90%'
        });
    },

    newsW: function () {
        $('.newsBoxs>*').each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: '50%'
            });
        });
    },

    menuW: function () {
        // 首頁專用
        if ($("body").hasClass("index")) {
            $('._imgs').each(function (index, element) {
                $(element).addClass('hide');
                $(element).waypoint({
                    handler: function () {
                        $(element).removeClass('hide');
                        $(element).addClass('show');
                    },
                    offset: '60%'
                });
            });
        }
    },

    aboutW: function () {
        // 首頁專用
        $('.top ._text>*').each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: '80%'
            });
        });
        $('.botttom .wordWithImg ._text').each(function (index, element) {
            $(element).addClass('hide');
            $(element).waypoint({
                handler: function () {
                    $(element).removeClass('hide');
                    $(element).addClass('show');
                },
                offset: '80%'
            });
        });
    },

    storeholdW: function () {
        if ($("body").hasClass("detail")) {
            $(".content").waypoint({
                handler: function () {
                    $(".content").addClass('show');
                },
                offset: '60%'
            });
        }
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////

var _Blazy = {
    homeW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
                if ($(window).width() > 1024) {
                    $("body").getNiceScroll().resize();
                }

                $(ele).closest(".smallImg").addClass("show");
                $(ele).closest("._img").addClass("show");

                if ($(ele).closest("._img").hasClass("_img")) {
                    $(ele).closest("a").find("._text").addClass("show");
                }
            }
        });
    },

    newsW: function () {
        var bLazy = new Blazy({
            offset: 300,
            success: function (ele) {
                Waypoint.refreshAll();
                if ($(window).width() > 1024) {
                    $("body").getNiceScroll().resize();
                }
            }
        });
    },

    menuW: function () {
        var bLazy = new Blazy({
            offset: 300,
            success: function (ele) {
                $(ele).parent().addClass("show");
                if ($(window).width() > 1024) {
                    $("body").getNiceScroll().resize();
                }
                Waypoint.refreshAll();
            }
        });
    },

    storeholdW: function () {
        var bLazy = new Blazy({
            offset: 10,
            success: function (ele) {
                $(ele).closest(".box").addClass("show");
                $(ele).closest("._img").addClass("in");
            }
        });
    },

    reservationW: function () {
        var bLazy = new Blazy({
            offset: 10,
            success: function (ele) {
                $(ele).closest("._img").addClass("show");
                $(ele).closest(".infBg").addClass("show");
            }
        });
    },

    contactW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("._img").addClass("show");
                $(ele).closest(".infBg").addClass("show");
            }
        });
    },

    aboutW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                if ($(window).width() > 1024) {
                    $("body").getNiceScroll().resize();
                }
                $(ele).addClass("show");
            }
        });
    },
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////
var slick = {
    homeSlick: function () {
        $(".activity_nav ul").slick({
            slidesToShow: 1,
            speed: 1200,
            centerMode: true,
            arrows: false,
            centerPadding: '33.33%',
            dots: true,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    centerPadding: '25%',
                }
            }, {
                breakpoint: 900,
                settings: {
                    centerPadding: '15%',
                }
            }, {
                breakpoint: 700,
                settings: {
                    centerPadding: '0%',
                }
            }]
        });

        $(".storeHold .mainSlick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            lazyLoad: 'ondemand',
            asNavFor: '.storeHold .sideSlick ul',
            arrows: false
        });

        $('.storeHold .icon-arrow_left').click(function () {
            $('.storeHold  .mainSlick ul').slick("getSlick").slickPrev();
        });

        $(".storeHold .sideSlick:nth-child(3)").click(function () {
            $('.storeHold  .mainSlick ul').slick("getSlick").slickPrev();
        });

        $('.storeHold .icon-arrow_right').click(function () {
            $('.storeHold  .mainSlick ul').slick("getSlick").slickNext();
        });

        $(".storeHold .sideSlick:nth-child(5)").click(function () {
            $('.storeHold  .mainSlick ul').slick("getSlick").slickNext();
        });

        $(".storeHold .sideSlick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            arrows: false,
            lazyLoad: 'ondemand',
            asNavFor: '.storeHold .mainSlick ul',
        });

    },

    storeholdSlick: function () {
        if ($("body").hasClass("detail")) {
            $('.imgSlick ul').slick({
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                centerMode: true,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            });

            $('.sideSlick ul').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1500,
                centerMode: true,
                swipe: false,
                lazyLoad: 'ondemand',
                arrows: false,
                variableWidth: true,
                asNavFor: '.slick360 .picture',
            });
        }
    },
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               ajax                //
///////////////////////////////////////

// header
function header() {
    $.ajax({
            url: '../../views/layout/header.html',
        })

        .done(function (data) {
            $("header").html(data);
            load.hd();
            openNavMenu();
        });
}

/*---------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------*/

// footer
function footer() {
    $.ajax({
            url: '../../views/layout/footer.html',
        })
        .done(function (data) {
            $("footer").html(data);
            load.ft();
        });
}


/*---------------------------------------------------------------------------------------------------*/



/*ajax 事件綁定function*/
var load = {
    /*header*/
    hd: function () {
        // header文字顏色設定  依據圖片顏色轉色
        headerWordColor();
        // header浮動出現
        headerFixed();
        // banner向下滑
        bannerScrollDown();
    },

    /*footer*/
    ft: function () {
        /*回到最上*/
        BackToTop();
        /*隱私權政策*/
        openPrivacy();
    }
}


/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//            BackToTop              //
///////////////////////////////////////

function BackToTop() {
    $(".goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500, 'easeOutCubic');
    });

    $(".ft_scrollTop").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000, 'easeOutCubic');
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//       header&banner word color    //
///////////////////////////////////////

function headerWordColor() {

    // banner是slick的情況下
    var firstLiImgData = $(".banner ._slick ul li:first-child img").data("color");
    if (firstLiImgData == "whiteBg") {
        $(".banner").addClass("whiteBg");
    }
    var slick_li = document.querySelectorAll(".banner ._slick ul li")
    $('.banner ._slick ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var nextSlickImgData = $(slick_li[nextSlide]).find("img").data("color");
        if (nextSlickImgData == "whiteBg") {
            $(".banner").addClass("whiteBg");
        } else {
            $(".banner").removeClass("whiteBg");
        }
    });

    // banner無slick的情況下
    var bannerImgData = $(".banner .banner_img img").data("color");;

    if (bannerImgData == "whiteBg") {
        $("header,.header").addClass("whiteBg");
        $(".banner").addClass("whiteBg");
    }
    hasBannerText();
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//       has banner text or not      //
///////////////////////////////////////

function hasBannerText() {
    var slick_li = document.querySelectorAll(".banner ._slick ul li")
    // 如果第一個無banner_slick_text
    var firstLihastext = $(slick_li[0]).data("hastext");
    if (!firstLihastext) {
        $(".banner_slick_text").css("display", "none");
    }

    $('.banner ._slick ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var currentLijastext = $(slick_li[nextSlide]).data("hastext");
        if (!currentLijastext) {
            $(".banner_slick_text").css("display", "none");
        } else {
            $(".banner_slick_text").css("display", "flex");
        }
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//         header fixed nav          //
///////////////////////////////////////


// header 浮動出現
function headerFixed() {
    var firstArticleHeight = $("main article:first-child").height();
    var firstArticlePaddingTop = parseInt($("main article:first-child").css("padding-top"));
    var firstArticlePaddingBottom = parseInt($("main article:first-child").css("padding-bottom"));
    var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom
    var headerHeight = $("header").height();
    var lastscrollY = 0;
    $(window).scroll(function () {
        var nowscrollY = $(this).scrollTop();
        // 判斷是否為向上
        var isUp = nowscrollY < lastscrollY
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= headerHeight) {
            $("header").addClass("prepare");
        } else if (scrollTop < headerHeight) {
            $("header").removeClass("prepare");
        }
        if (scrollTop > firstArticleTotalHeight && isUp) {
            $("header").addClass("fixed");
        } else if (scrollTop <= firstArticleHeight) {
            $("header").removeClass("fixed");
        } else if (!isUp) {
            $("header").removeClass("fixed");
        }
        setTimeout(function () {
            lastscrollY = nowscrollY;
        }, 100);
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//        banner scroll down         //
///////////////////////////////////////

function bannerScrollDown() {
    $(".banner_scrollDown").click(function () {
        $("html,body").animate({
            scrollTop: $("main article:first-child").height()
        }, 1000, "easeOutCubic");
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

// 蘋果回上頁debug
function appleDebug() {
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            scrollMove             //
///////////////////////////////////////

function scrollMove(target, multiple) {
    var targetTop = document.querySelector(target).getBoundingClientRect().top
    var transform = "translateY(" + targetTop * multiple + "px)"
    $(target).css("transform", transform);
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            小圖偏移               //
///////////////////////////////////////

(function (target) {
    $(target).each(function () {
        var translateX = $(this).attr("data-X");
        var translateY = $(this).attr("data-Y");

        var final = "translate(" + translateX + "," + translateY + ")"

        $(this).css("transform", final)
    });
})(".smallImg");

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            文字動畫               //
///////////////////////////////////////

function wordAnimation(target, delayStartTime, delaySpace) {
    var word = $(target).text()
    $(target).text("")
    var wordSplipt = word.split(" ");
    var html = ""

    for (var x = 0; x < wordSplipt.length; x++) {
        var text = wordSplipt[x].split("");
        var letter = ""

        for (i = 0; i < text.length; i++) {

            var delaytime = delayStartTime + (delaySpace * i)
            var letter = letter + "<i style='animation-delay:" + delaytime + "s'>" + text[i] + "</i>"
        }
        var html = html + "<span>" + letter + "</span>"
    }
    $(target).append(html);
}

/***************************************************************************************************************************/
///////////////////////////////////////
//               home                //
///////////////////////////////////////

var home = {

    activity_navWord: function () {
        var len = 35; // 超過35個字以"..."取代

        $(".activity_nav ._text p").each(function () {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });
    },


    scrollMove: function () {
        $(window).scroll(function () {
            scrollMove(".news ._title", 0.08);
            scrollMove(".category ._title", -0.08);
            scrollMove(".brandspirit ._title", 0.08);
            scrollMove(".storeHold ._title", -0.08);
        });
    },

    // 菜色轉換
    changCatagory: function () {
        var slick = document.querySelectorAll(".category .slick_area ._slick")
        $(".category ._nav ul li").click(function () {
            var $this = $(this)
            var i = $this.index()
            $this.addClass("active");
            $this.siblings().removeClass("active");
            $(slick[i]).addClass("active");
            $(slick[i]).siblings().removeClass("active");
            // 未啟動過slick
            if (!$this.data("clicked")) {
                home.slick();
            }
            // 已典籍標記
            $this.attr("data-clicked", "true");
        });
    },

    // 菜色選單的特殊情況slick
    slick: function () {
        $(".category ._slick.active ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            centerMode: true,
            infinite: false,
            initialSlide: 1,
            variableWidth: true,
            arrows: false,
            responsive: [{
                breakpoint: 1601,
                settings: {
                    initialSlide: 0,
                }
            }, {
                breakpoint: 700,
                settings: {
                    initialSlide: 0,
                    infinite: true,
                }
            }]
        });

        $('.category .icon-arrow_left').click(function () {
            $(".category ._slick.active ul").each(function () {
                $(this).slick("getSlick").slickPrev();
            })
        });

        $('.category .icon-arrow_right').click(function () {
            $(".category ._slick.active ul").each(function () {
                $(this).slick("getSlick").slickNext();
            });
        });
    },

    niceScroll: function () {
        var container = document.querySelector('.category ._nav ul');
        var ps = new PerfectScrollbar(container, {
            suppressScrollY: true,
            maxScrollbarLength: 1
        });
    },

    all: function () {
        home.activity_navWord();
        home.scrollMove();
        home.changCatagory();
        home.slick();
        home.niceScroll();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               news                //
///////////////////////////////////////
var news = {
    selectNews: function () {
        $(".topNav ._title ul li").click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            news.smallImg();
            _waypoint.newsW();
            news.newsBoxs();
            _Blazy.newsW();
        });
    },

    newsBoxs: function () {
        if ($(window).width() > 1260) {
            $(".newsBoxs>div").each(function () {
                var numb = $(this).index()
                var n = numb % 3
                switch (n) {
                    case 0:
                        // margin-top
                        $(this).addClass("item1");
                        break;
                    case 1:
                        // margin-top
                        $(this).addClass("item2");
                        // 動畫延遲
                        $(this).css("transition-delay", ".3s")
                        break;
                    case 2:
                        // margin-top
                        $(this).addClass("item3");
                        // 動畫延遲
                        $(this).css("transition-delay", ".6s")
                        break;
                }
            });
        } else {
            $(".newsBoxs>div").each(function () {
                $(this).removeClass("item1");
                $(this).removeClass("item2");
                $(this).removeClass("item3");
            })
        }
    },

    niceScroll: function () {
        var container = document.querySelector('.content .topNav ._title ul');
        var ps = new PerfectScrollbar(container, {
            suppressScrollY: true,
            maxScrollbarLength: 1
        });
    },

    //限制字數
    indexWordlatest: function () {
        var len = 45; // 超過45個字以"..."取代
        $(".newsBoxs ._text p").each(function () {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });
    },

    smallImg: function () {
        $(".smallImg_area .smallImg").each(function () {
            var numb = $(this).index()
            var windowWidth = $(window).width()
            if (windowWidth > 1499) {
                var y = 150 + numb * 650
                var top = y + "px"
            } else if (windowWidth < 1500 && windowWidth > 1024) {
                var y = 10 + numb * 45
                var top = y + "vw"
            } else if (windowWidth < 1025 && windowWidth > 650) {
                var y = 10 + numb * 95
                var top = y + "vh"
            } else {
                var y = numb * 300 + 300
                var top = y + "vw"
            }
            $(this).css("top", top);
        });
    },

    imgReset: function () {
        $(".cross").click(function () {
            news.smallImg();
            _waypoint.newsW();
            news.newsBoxs();
            _Blazy.newsW();
        });
        $(window).resize(function () {
            news.smallImg();
        });
    },

    scrollMove: function () {
        $(window).scroll(function () {
            scrollMove(".smallImg_area .smallImg:nth-child(odd)", 0.1);
            scrollMove(".smallImg_area .smallImg:nth-child(even)", -0.1);
            scrollMove(".smallImg.first", -0.04);
        });
    },
    wordAnimation: function () {
        wordAnimation(".topNav ._title h2", 0.6, 0.1);
        wordAnimation(".topNav ._title h3", 0.6, 0.1);
    },
    //限制字數
    detailWordlatest: function () {
        var len = 50; // 超過50個字以"..."取代
        $(".next ._text h2").each(function () {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });
    },

    // 填入影片網址
    video: function () {
        var videoId = $(".onlyVideo iframe").attr("data-videoId");
        // 重組網址
        var src = "https://www.youtube.com/embed/" + videoId + "?rel=0"
        $(".onlyVideo iframe").attr("src", src)
    },

    scrollChangPage: function () {
        // 電腦版
        $(window).bind('mousewheel', function (event) {
            var bodyHeight = $("body").height();
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 1
            var x = $(window).scrollTop();
            var y = event.originalEvent.wheelDelta
            // 滾動到底部且為向下
            if (x >= bottom && y < 0) {
                changToNextPage();
            }
        });

        // 手機板
        document.body.addEventListener('touchend', function (event) {
            var bodyHeight = $("body").height()
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 100;
            var x = $(window).scrollTop();
            if (x >= bottom) {
                changToNextPage();
            }
        });

        function changToNextPage() {
            $("main").animate({
                opacity: 0
            }, 500);

            setTimeout(function () {
                // 後端請注意: 此處放下一頁網址
                location.href = "../../views/news/detail.html"
            }, 1000);
        }
    },
    topNav: function () {

        $(".topNav .selectList").click(function () {
            var $ele = $(this)
            $ele.closest(".list").find("ul").slideToggle(700);
            $ele.toggleClass("open");

            // 點選其他物件 關閉選單
            $(document).click(function (e) {
                if ($ele.closest(".list").has(e.target).length === 0) {
                    $ele.closest(".list").find("ul").slideUp(700);
                    $ele.removeClass("open");
                }
            });

        });

        $(".topNav .list ul li").click(function () {
            $(this).closest("ul").slideUp(700);
            $(this).closest(".list").find(".selectList").removeClass("open");
            $(this).closest(".list").find(".selectList p").text($(this).text());
        });

        $(".topNav .list ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 800
            }
        });
    },
    all: function () {
        // 主頁
        if ($("body").hasClass("index")) {
            news.selectNews();
            news.newsBoxs();
            news.niceScroll();
            news.indexWordlatest();
            news.imgReset();
            news.smallImg();
            news.scrollMove();
            news.wordAnimation();
            news.topNav();
        }
        // 分頁
        if ($("body").hasClass("detail")) {
            news.detailWordlatest();
            news.video();
            news.scrollChangPage();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               menu                //
///////////////////////////////////////
var menu = {
    scrollMove: function () {
        scrollMove(".banner .banner_text", -0.2);
        $(window).scroll(function () {
            scrollMove(".banner .banner_text", -0.2);
        });
    },
    indexScrollMove: function () {
        $(window).scroll(function () {
            scrollMove(".type:nth-child(odd) ._imgs", 0.08);
            scrollMove(".type:nth-child(even) ._imgs", 0.1);
        });
    },
    menuNavShow: function () {
        var windowTop = ($(window).height()) / 2 - 170 //要扣除menu_nav本身的高
        var windowBottom = ($(window).height()) / 2 + 170 //要扣除menu_nav本身的高
        var menuType = document.querySelector(".menuType")
        $(window).scroll(function () {
            var menuTypeTop = menuType.getBoundingClientRect().top
            var menuTypebottom = menuType.getBoundingClientRect().bottom
            if (menuTypeTop < windowTop && menuTypebottom > windowBottom) {
                $(".menu_nav").addClass("open");
            } else if (menuTypebottom < windowBottom) {
                $(".menu_nav").removeClass("open");
            } else {
                $(".menu_nav").removeClass("open");
            }
        });
    },

    menuNavClick: function () {
        $(".scroll-next").click(function (e) {
            var box = document.querySelectorAll(".menuType .type")
            var scrollTop = $(window).scrollTop();
            var x
            for (var index = 0; index < box.length; index++) {
                var dots = $(box[index]).offset().top + $(box[index]).height() / 2
                if (dots > scrollTop) {
                    var x = index
                    break
                }
            }
            var y = x + 1
            if (y < box.length) {
                $('html,body').animate({
                    scrollTop: $(box[y]).offset().top - $(window).height() / 2 + $(box[y]).height() / 2
                }, 800);
            } else {
                $('html,body').animate({
                    scrollTop: $(box[0]).offset().top - $(window).height() / 2 + $(box[0]).height() / 2
                }, 800);
            }
        });
    },

    header: function () {
        var firstArticleHeight = $("main article:nth-child(2)").height();
        var firstArticlePaddingTop = parseInt($("main article:nth-child(2)").css("padding-top"));
        var firstArticlePaddingBottom = parseInt($("main article:nth-child(2)").css("padding-bottom"));
        var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom
        var headerHeight = $(".header").height();
        var lastscrollY = 0;
        $(window).scroll(function () {
            var nowscrollY = $(this).scrollTop();
            // 判斷是否為向上
            var isUp = nowscrollY < lastscrollY
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= headerHeight) {
                $(".header").addClass("prepare");
            } else if (scrollTop < headerHeight) {
                $(".header").removeClass("prepare");
            }
            if (scrollTop >= firstArticleTotalHeight && isUp) {
                $(".header").addClass("fixed");
            } else if (scrollTop < firstArticleHeight) {
                $(".header").removeClass("fixed");
            } else if (!isUp) {
                $(".header").removeClass("fixed");
            }
            setTimeout(function () {
                lastscrollY = nowscrollY;
            }, 100);
        });
    },
    overflow: function () {
        if ($(window).width() > 1024) {
            $(".dish_menu ul").niceScroll({
                cursorcolor: "#ccc",
                cursorborder: "none",
                cursorwidth: "4px",
                railpadding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: -10
                },
            });
        } else {
            var container = document.querySelector('.dish_menu ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
            });
        }
    },

    scrollChangPage: function () {
        // 電腦版 向下捲動到底換內容
        $(window).bind('mousewheel', function (event) {
            var bodyHeight = $("body ").height();
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 1
            var x = $(window).scrollTop();
            var y = event.originalEvent.wheelDelta
            // 滾動到底部且為向下
            if (x >= bottom && y < 0) {
                // 換內容function
                changToNextPage();
            }
        });
        // 手機板 手指向下滑動到底換內容
        document.body.addEventListener('touchend', function (event) {
            var bodyHeight = $("body").height()
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 100;
            var x = $(window).scrollTop();
            if (x >= bottom) {
                changToNextPage();
            }
        });

        // 換內容function
        function changToNextPage() {
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, {
                duration: 1000,
                complete: function () {
                    setTimeout(function () {
                        $("body").getNiceScroll().resize();
                        $(".header").removeClass("fixed");
                        _Blazy.menuW();
                    }, 100);
                }
            });
        }
    },

    // 點選分類
    dishTypeSelect: function () {
        $(".dish_menu ul li,.header .dish_nav ul li").click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            // 換內容function
        });
    },

    all: function () {
        menu.scrollMove();
        if ($("body").hasClass("index")) {
            menu.indexScrollMove();
            menu.menuNavShow();
            menu.menuNavClick();
        }
        if ($("body").hasClass("detail")) {
            menu.header();
            menu.overflow();
            dish_detail.all();
            dish_detail.scrollChangPage();
            dish_detail.dishTypeSelect();
        }
    }
}
/***************************************************************************************************************************/
///////////////////////////////////////
//             storehold             //
///////////////////////////////////////

var storehold = {
    indexScrollMove: function () {
        scrollMove(".banner .banner_text", -0.2);
        $(window).scroll(function () {
            scrollMove(".banner .banner_text", -0.2);
            scrollMove(".box:nth-child(odd) .smallImg img", -0.1);
            scrollMove(".box:nth-child(even) .smallImg img", 0.1);
        });
    },

    storeholdNavFixed: function () {
        $(window).scroll(function () {

            var storesTop = $(".stores").offset().top + ($(".storeNav").height() / 2)

            var storesBottom = $(".stores").offset().top + $(".stores").height()

            var scrollTop = $(window).scrollTop() + ($(window).height() / 2)

            if (scrollTop > storesTop && scrollTop < storesBottom) {
                $(".storeNav").addClass("fixed")
                $(".storeNav").removeClass("bottom");
            } else if (scrollTop > storesBottom) {
                $(".storeNav").removeClass("fixed");
                $(".storeNav").addClass("bottom");
            } else if (scrollTop <= storesTop) {
                $(".storeNav").removeClass("fixed");
                $(".storeNav").removeClass("bottom");
            }
        });
    },

    storeholdNavClick: function () {
        $(".stores .storeNav span").click(function () {
            var box = document.querySelectorAll(".stores .box")

            var scrollTop = $(window).scrollTop() + ($(window).height()) / 2

            var x

            for (var i = 0; i < box.length; i++) {
                var dots = $(box[i]).offset().top + $(box[i]).height() / 2
                if (dots > scrollTop) {
                    var x = i
                    break
                }
            }

            var y = x + 1

            if (y < box.length) {
                $('html,body').animate({
                    scrollTop: $(box[y]).offset().top - $(window).height() / 2 + $(box[y]).height() / 2
                }, 800);
            } else {
                $('html,body').animate({
                    scrollTop: $(box[0]).offset().top - $(window).height() / 2 + $(box[0]).height() / 2
                }, 800);
            }
        });
    },

    wordAnimation: function () {
        $(".stores .box ._text h2").each(function () {
            $this = $(this)
            wordAnimation($this, .6, 0.1);
        });
        $(".stores .box ._text p").each(function () {
            $this = $(this)
            wordAnimation($this, .8, 0.1);
        });
    },

    pointNavScroll: function () {
        if ($(window).width() < 650) {
            var container = document.querySelector('.pointNav ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
            });
        }
    },

    pointNavClick: function () {
        $(".pointNav ul li").click(function () {
            var id = $(this).attr("id");
            var scrollTarget = document.getElementsByClassName(id)
            $("html,body").animate({
                scrollTop: $(scrollTarget).offset().top
            }, 1500, 'easeOutCubic');
        });
    },

    detailScrollMove: function () {
        scrollMove(".banner .banner_text", -0.1);
        $(window).scroll(function () {
            scrollMove(".banner .banner_text", -0.1);
        });
    },

    pictureSlick: function () {
        $('.slick360 .picture').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            centerMode: true,
            variableWidth: true,
            swipe: false,
            lazyLoad: 'ondemand',
            arrows: false,
            asNavFor: '.sideSlick ul',
            responsive: [{
                breakpoint: 1300,
                settings: {
                    speed: 1000,
                    swipe: true,
                }
            }]
        });
        $(".slick360 .isImg .icon-arrow_left").click(function () {
            $('.slick360 .picture').slick("getSlick").slickPrev();
        });
        $(".slick360 .isImg .icon-arrow_right").click(function () {
            $('.slick360 .picture').slick("getSlick").slickNext();
        });
    },

    deg360: function () {
        $('.slick360 .deg360').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            centerMode: true,
            variableWidth: true,
            swipe: false,
            infinite: false,
            arrows: false,
            responsive: [{
                breakpoint: 1300,
                settings: {
                    speed: 1000,
                }
            }]
        });
    },

    changImg: function () {
        $(".turn360").click(function () {
            $(this).removeClass("active");
            $(".turnImg").addClass("active");
            $('.slick360 .picture').removeClass("active");
            $('.slick360 .deg360').addClass("active");
            $('.slick360 .arrow').addClass("is360");
            $('.slick360 .arrow').removeClass("isImg");

            $(".slick360 .is360 .icon-arrow_left").click(function () {
                $('.slick360 .deg360').slick("getSlick").slickPrev();
            });
            $(".slick360 .is360 .icon-arrow_right").click(function () {
                $('.slick360 .deg360').slick("getSlick").slickNext();
            });
            if ($(window).width() > 1300) {
                $(".sideSlick:first-child").addClass("_prev");
                $(".sideSlick:last-child").addClass("_next");
            }
        });

        $(".turnImg").click(function () {
            $(this).removeClass("active");
            $(".turn360").addClass("active");
            $('.slick360 .deg360').removeClass("active");
            $('.slick360 .picture').addClass("active");
            $('.slick360 .arrow').addClass("isImg");
            $('.slick360 .arrow').removeClass("is360");
            if ($(window).width() > 1300) {
                $(".sideSlick:first-child").removeClass("_prev");
                $(".sideSlick:last-child").removeClass("_next");
            }
        });
        storehold.Img360();
    },

    header: function () {
        var firstArticleHeight = $("main article:nth-child(2)").height();
        var firstArticlePaddingTop = parseInt($("main article:nth-child(2)").css("padding-top"));
        var firstArticlePaddingBottom = parseInt($("main article:nth-child(2)").css("padding-bottom"));
        var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom
        var headerHeight = $(".header").height();
        var lastscrollY = 0;
        $(window).scroll(function () {
            var nowscrollY = $(this).scrollTop();
            // 判斷是否為向上
            var isUp = nowscrollY < lastscrollY
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= headerHeight) {
                $(".header").addClass("prepare");
            } else if (scrollTop < headerHeight) {
                $(".header").removeClass("prepare");
            }
            if (scrollTop >= firstArticleTotalHeight && isUp) {
                $(".header").addClass("fixed");
            } else if (scrollTop < firstArticleHeight) {
                $(".header").removeClass("fixed");
            } else if (!isUp) {
                $(".header").removeClass("fixed");
            }
            setTimeout(function () {
                lastscrollY = nowscrollY;
            }, 100);
        });
    },

    scrollChangPage: function () {
        // 電腦版
        $(window).bind('mousewheel', function (event) {
            var bodyHeight = $("body").height();
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 1
            var x = $(window).scrollTop();
            var y = event.originalEvent.wheelDelta
            // 滾動到底部且為向下
            if (x >= bottom && y < 0) {
                changToNextPage();
            }
        });

        // 手機板
        document.body.addEventListener('touchend', function (event) {
            var bodyHeight = $("body").height()
            var windowHeight = $(window).height();
            var bottom = bodyHeight - windowHeight - 60;
            var x = $(window).scrollTop();
            if (x >= bottom) {
                changToNextPage();
            }
        });

        function changToNextPage() {
            $("main").animate({
                opacity: 0
            }, 500);
            setTimeout(function () {
                location.href = "../reservation/index.html"
            }, 1000);
        }
    },

    Img360: function () {
        // setTimeout(function() {
        $('.deg360 li').each(function () {
            var $this = $(this)
            var src = $this.find('.img360').attr('src')
            var container = $this.find('.img360').attr('id')
            if ($this.find('.img360').length > 0) {
                var PSV = PhotoSphereViewer({
                    panorama: src,
                    container: container,
                    navbar: false,
                    fisheye: false,
                    anim_speed: '1rpm',
                    mousewheel: false,
                    mousewheel_factor: 0,
                    loading_img: '../../assets/img/photosphere-logo.gif',
                });
            }
        });
        // }, 1500);
    },

    dropDown: function () {
        $(".content ._title .dropDown .list .selectList").click(function () {
            var $ele = $(this)
            $ele.closest(".list").find("ul").slideToggle(700);
            $ele.toggleClass("open");
            // 點選其他物件 關閉選單
            $(document).click(function (e) {
                if ($ele.closest(".list").has(e.target).length === 0) {
                    $ele.closest(".list").find("ul").slideUp(700);
                    $ele.removeClass("open");
                }
            });
        });

        $(".dropDown .list ul li").click(function () {
            $(this).closest("ul").slideUp(700);
            $(this).closest(".list").find(".selectList").removeClass("open");
            $(this).closest(".list").find(".selectList p").text($(this).text());
        });

        $(".dropDown .list ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 800
            }
        });
    },

    all: function () {
        if ($("body").hasClass("index")) {
            storehold.indexScrollMove();
            storehold.storeholdNavFixed();
            storehold.storeholdNavClick();
            storehold.wordAnimation();
            storehold.dropDown();
        }
        if ($("body").hasClass("detail")) {
            storehold.pointNavScroll();
            storehold.pointNavClick();
            storehold.detailScrollMove();
            storehold.header();
            storehold.pictureSlick();
            storehold.deg360();
            storehold.changImg();
            storehold.scrollChangPage();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            reservation            //
///////////////////////////////////////
var reservation = {
    changWords: function () {
        if ($(window).width() < 450) {
            $(".childrenSeat h5").text("需要兒童座椅");
        }
        if ($(window).width() < 380) {
            $(".tableContent .code input").attr("placeholder", "點擊圖片獲得新驗證碼")
            $(".tableContent .tel h5").text("聯繫電話 Tel");
        }
        if ($(window).width() < 351) {
            $(".tableContent .birthday p").text("是否有當月壽星");
        }
    },

    dateDropper: function () {
        // 年份最多只到明年
        var monthsNumber
        // 手機板
        if ($(window).width() < 700) {
            var monthsNumber = 1
        }
        // 電腦版
        else {
            var monthsNumber = 2
        }

        // 是否超過21:00預約
        var time = new Date().getHours()
        var startDay = +1
        if (time > 20) {
            var startDay = +2
        }

        $("#sel_date").datepicker({
            minDate: startDay,
            maxDate: +61,
            numberOfMonths: monthsNumber
        });
        $("#sel_date").datepicker("option", "showAnim", "slideDown");
        $("#sel_date").datepicker("option", "dateFormat", "yy-mm-dd");
        $("#sel_date").datepicker("option", $.datepicker.regional["zh-TW"]);
    },

    wordAnimation: function () {
        wordAnimation(".topNav ._text h3", 0.6, 0.1);
        wordAnimation(".topNav ._text h2", 0.6, 0.1);
    },

    dropDown: function () {
        // ↓↓↓↓↓↓↓下拉式選單的js↓↓↓↓↓↓↓↓↓
        $(".dropdown .selectList").click(function () {
            var $ele = $(this)
            $ele.closest(".dropdown").find("ul").slideToggle(600);
            $ele.toggleClass("open");
            // 點選其他物件 關閉選單
            $(document).click(function (e) {
                if ($ele.closest(".dropdown").has(e.target).length === 0) {
                    $ele.closest(".dropdown").find("ul").slideUp(600);
                    $ele.removeClass("open");
                }
            });
        });
        $(".dropdown ul li").click(function () {
            $(this).closest("ul").slideUp(600);
            $(this).closest(".dropdown").find(".selectList").removeClass("open");
            $(this).closest(".dropdown").find(".selectList p").text($(this).text());
        });

        $(".dropdown ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 800
            }
        });
        // ↑↑↑↑↑↑↑↑↑↑↑下拉式選單的js↑↑↑↑↑↑↑↑↑↑

        // ↓↓↓↓↓↓↓reset button的js↓↓↓↓↓↓↓↓↓
        $(".dropdown .selectList p").each(function () {
            var $this = $(this)
            var resetWords = $this.text();
            $("._btn button[type='reset']").click(function () {
                $this.text(resetWords);
            })
        });
        // ↑↑↑↑↑↑↑↑↑↑↑reset button的js↑↑↑↑↑↑↑
    },

    changStore: function () {
        if ($(window).width() > 1023) {
            // 點擊不同的分店選項
            $(".tableContent .store ul li:first-child").click(function () {
                // ↓↓↓↓ 重點 ↓↓↓↓
                $(".storeinf").removeClass("type2");
                $(".storeinf").addClass("type1");
                // ↑↑↑↑ 重點 ↑↑↑↑
                title();
                type1();
            });
            $(".tableContent .store ul li:last-child").click(function () {
                // ↓↓↓↓ 重點 ↓↓↓↓
                $(".storeinf").removeClass("type1");
                $(".storeinf").addClass("type2");
                // ↑↑↑↑ 重點 ↑↑↑↑
                title();
                type2();
            });
        }

        // 改變標題
        function title() {
            $(".inf ._title h2").remove();
            $(".inf ._title p").remove();
            $(".inf ._title").append('<h2>Taichung</h2><p>台中公益店</p>')
            $(".storeinf .tel").remove();
            $(".storeinf .address").remove();
            $(".storeinf .openTime").remove();
        }

        // 引入店鋪資料1
        function type1() {
            $.ajax({
                    url: '../../views/layout/test1.html',
                })
                .done(function (data) {
                    $(".storeinf").html(data);
                });
        }

        // 引入店鋪資料2
        function type2() {
            $.ajax({
                    url: '../../views/layout/test2.html',
                })
                .done(function (data) {
                    $(".storeinf").html(data);
                });
        }
    },

    all: function () {
        reservation.changWords();
        reservation.wordAnimation();
        reservation.dateDropper();
        reservation.dropDown();
        reservation.changStore();
        $(window).resize(function () {
            reservation.dateDropper();
        });
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            contact                //
///////////////////////////////////////

var contact = {
    changWords: function () {
        if ($(window).width() < 380) {
            $(".tableContent .code input").attr("placeholder", "點擊圖片獲得新驗證碼")
            $(".tableContent .tel h5").text("聯繫電話 Tel");
        }
    },

    wordAnimation: function () {
        wordAnimation(".topNav ._text h3", 0.6, 0.1);
        wordAnimation(".topNav ._text h2", 0.6, 0.1);
    },

    dropDown: function () {
        $(".dropdown .selectList").click(function () {
            var $ele = $(this)
            $ele.closest(".dropdown").find("ul").slideToggle(600);
            $ele.toggleClass("open");
            // 點選其他物件 關閉選單
            $(document).click(function (e) {
                if ($ele.closest(".dropdown").has(e.target).length === 0) {
                    $ele.closest(".dropdown").find("ul").slideUp(600);
                    $ele.removeClass("open");
                }
            });
        });
        $(".dropdown ul li").click(function () {
            $(this).closest("ul").slideUp(600);
            $(this).closest(".dropdown").find(".selectList").removeClass("open");
            $(this).closest(".dropdown").find(".selectList p").text($(this).text());
        });

        $(".dropdown ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 800
            }
        });

        $(".dropdown .selectList p").each(function () {
            var $this = $(this)
            var resetWords = $this.text();
            $("._btn ul li button[type='reset']").click(function () {
                $this.text(resetWords);
            })
        });
    },

    all: function () {
        contact.changWords();
        contact.wordAnimation();
        if ($("body").hasClass("index")) {
            contact.dropDown()
        }
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              about                //
///////////////////////////////////////

var about = {
    scrollMove: function () {
        scrollMove(".banner .banner_text", -0.2);
        $(window).scroll(function () {
            scrollMove(".banner .banner_text", -0.2);
        });
    },

    wordAnimation: function () {
        wordAnimation(".top ._text h2", 0.6, 0.1);
    },

    all: function () {
        about.scrollMove();
        about.wordAnimation();
    }
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            漢堡選單               //
///////////////////////////////////////

function openNavMenu() {
    $(".burger").click(function () {
        ajaxNavMenu();
    });
}

function ajaxNavMenu() {
    $("body").append("<article class='navMenu'></article>")
    $.ajax({
            url: '../../views/layout/navMenu.html',
        })
        .done(function (data) {
            $(".navMenu").html(data);
            $(".navMenu").addClass("open");
            navMenu.all();
        });
}

var navMenu = {
    open: function () {
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
        }
        $("body").css("overflow-y", "hidden");
    },
    close_click: function () {
        $(".navMenu .liboxClose").click(function () {
            navMenu.close();
        });
    },
    close: function () {
        $(".navMenu").removeClass("open");
        $(".navMenu").addClass("close");
        $("body").css("overflow-y", "visible");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        }
        setTimeout(function () {
            $(".navMenu").remove();
        }, 1100);
    },
    scrollbar: function () {
        if ($(window).width() > 1023) {
            $(".navMenu").niceScroll({
                nativeparentscrolling: false,
                cursorborder: "none",
                cursorwidth: "4px",
                railpadding: {
                    top: 0,
                    right: 2,
                    left: 0,
                    bottom: 0
                },
            });
        }
    },
    all: function () {
        navMenu.open();
        navMenu.close_click();
        navMenu.scrollbar();
    }

}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            隱私權政策             //
///////////////////////////////////////

function openPrivacy() {
    $(".openPrivacy").click(function () {
        ajaxPrivacy();
    });
}

function ajaxPrivacy() {
    $("body").append("<article class='privacy'></article>")
    $.ajax({
            url: '../../views/layout/privacy.html',
        })
        .done(function (data) {
            $(".privacy").html(data);
            $(".privacy").addClass("open");
            privacy.all();
        });
}

var privacy = {
    open: function () {
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
        }
        $("body").css("overflow-y", "hidden");
    },

    close_click: function () {
        $(".privacy .close").click(function () {
            privacy.close();
        });
    },

    close: function () {
        $(".privacy").removeClass("open");
        $(".privacy").addClass("close");
        $("body").css("overflow-y", "visible");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        }
        setTimeout(function () {
            $(".privacy").remove();
        }, 800);
    },

    scrollbar: function () {
        $(".privacy").niceScroll({
            nativeparentscrolling: false,
            cursorborder: "none",
            cursorwidth: "4px",
            railpadding: {
                top: 0,
                right: 2,
                left: 0,
                bottom: 0
            },
        });
    },

    goTop: function () {
        $(".toTop").click(function () {
            $(".privacy").animate({
                scrollTop: 0,
            }, 1500, 'easeOutCubic');
        });
    },

    all: function () {
        privacy.open();
        privacy.close_click();
        privacy.scrollbar();
        privacy.goTop();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//          body scrollbar           //
///////////////////////////////////////
function bodyscrollbar() {
    if ($(window).width() > 1024) {
        $("body").niceScroll({
            zindex: "3",
            scrollspeed: 40,
            cursorborder: "none",
            cursorwidth: "4px",
            preventmultitouchscrolling: false,
            railpadding: {
                top: 0,
                right: 2,
                left: 0,
                bottom: 0
            },
        });
    }
}

/***************************************************************************************************************************/


// 防copy補丁
function nocopy(){
    // 右鍵
    document.addEventListener("contextmenu", function(e){
        disabledEvent(e)
    }, false);

    document.addEventListener("keydown", function(e) {
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e)
        }
    })

    function disabledEvent(e){
        e.preventDefault();
        alert("想copy我的寫法? 這樣母湯喔!!")
    }
};

/***************************************************************************************************************************/

$(document).ready(function () {
    // nocopy()

    // openNavMenu();

    // 蘋果回上頁debug
    appleDebug();

    // 截取頁面id
    var page = $('body').attr('id');

    /*首頁home 啟動的JS*/
    if (page == "home") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.homeW();
        /* b-lazy */
        _Blazy.homeW();
        /*slick*/
        slick.homeSlick();
        home.all();
    }

    /*最新消息news 啟動的JS*/
    if (page == "news") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.newsW();
        /* b-lazy */
        _Blazy.newsW();
        news.all();

        $(window).resize(function () {
            news.newsBoxs();
        });
    }

    /*最新消息news 啟動的JS*/
    if (page == "menu") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.menuW();
        /* b-lazy */
        _Blazy.menuW();
        /*slick*/
        menu.all();
    }

    /*據點storehold 啟動的JS*/
    if (page == "storehold") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.storeholdW();
        /* b-lazy */
        _Blazy.storeholdW();
        /*slick*/
        slick.storeholdSlick();
        storehold.all();
    }

    /*訂位reservation 啟動的JS*/
    if (page == "reservation") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /* b-lazy */
        _Blazy.reservationW();
        reservation.all();
    }


    /*聯絡我們contact 啟動的JS*/
    if (page == "contact") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /* b-lazy */
        _Blazy.contactW();
        contact.all();
    }


    /*品牌故事about  啟動的JS*/
    if (page == "about") {
        bodyscrollbar();
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.aboutW();
        /* b-lazy */
        _Blazy.aboutW();
        about.all();
    }

});