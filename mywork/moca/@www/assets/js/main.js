// 檢查是否為移動裝置
function mobile() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS

    return device;
}

/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {

    homeW: function () {
        // 展覽動態
        _waypoint.singleWaypoint(".exhibition ._title", "80%");
        _waypoint.eachWaypoiny(".exhibition .masonry ul li", "70%");
        _waypoint.singleWaypoint(".exhibition .buttons a", "80%");

        // 最新消息
        _waypoint.singleWaypoint(".news ._title", "80%");
        _waypoint.eachWaypoiny(".news .masonry ul li", "80%");
        _waypoint.singleWaypoint(".news .buttons a", "80%");

        // about
        _waypoint.eachWaypoiny(".about ._text", "70%");
        $(".about .bigImg,.about .smallImg").each(function (index, element) {
            var i = Math.floor(Math.random() * 4)
            switch (i) {
                case 0:
                    $(this).addClass("Down");
                    break;

                case 1:
                    $(this).addClass("Up");
                    break;

                case 2:
                    $(this).addClass("Left");
                    break;

                case 3:
                    $(this).addClass("Right");
                    break;
            }
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: "70%"
            });
        });



        // ad
        _waypoint.singleWaypoint(".advertisement", "70%");
    },

    newsW: function () {
        _waypoint.eachWaypoiny(".index .masonry ul li", "80%");
        _waypoint.singleWaypoint(".recommend", "60%");
        _waypoint.singleWaypoint(".newsContent .content ._text", "80%");
        $(".newsContent .content figure").each(function (index, element) {
            var i = Math.floor(Math.random() * 4)
            switch (i) {
                case 0:
                    $(this).addClass("Down");
                    break;
                case 1:
                    $(this).addClass("Up");
                    break;
                case 2:
                    $(this).addClass("Left");
                    break;
                case 3:
                    $(this).addClass("Right");
                    break;
            }
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: "70%"
            });
        });
    },

    eachWaypoiny: function (target, offsetValue) {
        $(target).each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                    $(element).addClass('in');
                },
                offset: offsetValue
            });
        });
    },

    singleWaypoint: function (target, offsetValue) {
        $(target).waypoint({
            handler: function () {
                $(target).addClass('show');
                $(target).addClass('in');
            },
            offset: offsetValue
        });
    },


}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////

var _Blazy = {

    singleWaypoint: function () {
        $('.masonry').waypoint(function(){
            console.log($(this))
            $(this).find("li").addClass("in");
            $(this).find(".smallImg").addClass("in");
            $(this).find(".bigImg").addClass("in");
            $(this).find(".advertisement").addClass("in");
            $(this).find(".noticeLibox").addClass("in");
            $('.exhibition .masonry ul').masonry('layout');
            $('.news .masonry ul').masonry('layout');
            console.log('1111111')

            },{offset: "70%",
        });


    },

    homeW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest("li").addClass("in");
                $(ele).closest(".smallImg").addClass("in");
                $(ele).closest(".bigImg").addClass("in");
                $(ele).closest(".advertisement").addClass("in");
                $(ele).closest(".noticeLibox").addClass("in");
                // $('.exhibition .masonry ul').masonry('layout');
                // $('.news .masonry ul').masonry('layout');
            }
        });
        

        
    },

    newsW: function () {
        var bLazy = new Blazy({
            selector: 'img',
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $('.masonry ul').masonry('layout');
                Waypoint.refreshAll();
            }
        });
    },

}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////

var _Slick = {
    newsW: function () {
        $('.recommend .slick ul').slick({
            slidesToShow: 2,
            prevArrow: ".recommend .slick .arrows .icon-3",
            nextArrow: ".recommend .slick .arrows .icon-2",
            speed: 800,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    },
}



/***************************************************************************************************************************/

/*---------------------------------------------------------------------------------------------------*/
/* header ＆ footer*/
var load = {
    /*header*/
    hd: function () {
        if ($("body").attr("id") !== "home") {
            headerFixed()
        }
        exhibitLibox.all()
    },
    /*footer*/
    ft: function () {
        goTop();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            headerFixed            //
///////////////////////////////////////

function headerFixed() {
    var lastscrollY = 0;
    $(window).scroll(function () {
        _Blazy.homeW();
        var nowscrollY = $(window).scrollTop()
        // 判斷是否為向上
        var isUp = nowscrollY < lastscrollY
        if (nowscrollY > 0) {
            $("body header .hdContent").addClass("fixed up")
        } else {
            $("body header .hdContent").removeClass("fixed")
        }

        if (isUp) {
            // $("body header .hdContent").addClass("up")
        } else {
            // $("body header .hdContent").removeClass("up")
        }

        setTimeout(function () {
            lastscrollY = nowscrollY;
        }, 100);
    })
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            goTop                  //
///////////////////////////////////////

function goTop() {
    $("footer .goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500, 'easeOutCubic');
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           開啟展覽資訊             //
///////////////////////////////////////

var exhibitLibox = {
    open_click: function () {
        $(".openExhibit p").click(function () {
            if ( !$(this).closest('.openExhibit').hasClass('close') ) {
                exhibitLibox.open();
            }
        })
    },
    open: function () {
        $(".exhibitLibox").addClass("open")
        $("header .hdContent .buttons").addClass("open")
        if (!mobile()) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            })
            $("header .hdContent .buttons").css("right", "17px")
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $("header .hdContent .buttons .openExhibit .closeBTn").click(function () {
            exhibitLibox.close()
        })

        $(".exhibitLibox").click(function (e) {
            if ($(e.target).hasClass("exhibitLibox")) {
                exhibitLibox.close()
            }
        })
    },

    close: function () {
        $(".exhibitLibox").removeClass("open")
        $(".exhibitLibox").addClass("close")
        $("header .hdContent .buttons").addClass("close")
        
        setTimeout(function () {
            $("header .hdContent .buttons").removeClass("open")
            $("header .hdContent .buttons").removeClass("close")
            $(".exhibitLibox").removeClass("close")
            if (!mobile()) {
                $("body").css({
                    "overflow-y": "visible",
                    "padding-right": "0rem"
                })
                $("header .hdContent .buttons").css("right", "")
            } else {
                $("body").css("overflow-y", "visible")
            }
        }, 1000)
    },

    scroll: function () {
        $(".exhibitLibox").scroll(function () {
            var scrollTop = $(this).scrollTop()
            var paddingTop = parseInt($(".exhibitLibox .open").css("padding-top")) || parseInt($(".exhibitLibox .close").css("padding-top"))
            if (scrollTop >= paddingTop) {
                $("header .hdContent .exhibitLibox .open .date").addClass("fixed")
            } else {
                $("header .hdContent .exhibitLibox .open .date").removeClass("fixed")
            }
        });
    },

    // 加上時間
    addTime: function () {
        var time = new Date

        // 月
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var month = months[time.getMonth()]
        $("header .hdContent .exhibitLibox .open .date .dotay .month").text(month)

        // 日
        var day = time.getDate();
        $("header .hdContent .exhibitLibox .open .date .dotay .day").text(day)

        // 年
        var year = time.getFullYear();
        $("header .hdContent .exhibitLibox .open .date .dotay .year").text(year)

        // 星期
        var week = time.getDay();
        // console.log("星期"+week)
    },

    all: function () {
        exhibitLibox.open_click();
        exhibitLibox.close_click();
        exhibitLibox.scroll();
        exhibitLibox.addTime();
    }
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
//            限制字數               //
///////////////////////////////////////

function wordlatest(len, target) {

    $(target).each(function () {
        if ($(this).text().length > len) {
            var text = $(this).text().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            文字動畫               //
///////////////////////////////////////

function wordAnimation(target, delayStartTime, delaySpace) {
    var word = $(target).text()
    $(target).text("")
    var html = word.replace(/([^\x00-\x80]|\w|\s)/g, ("<span>$&</span>"))
    $(target).html(html);

    $(target).find("span").each(function () {
        var i = $(this).index()
        var delayTime = i * delaySpace + delayStartTime + "s"
        $(this).css("animation-delay", delayTime);
    });

}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           dropDown             //
////////////////////////////////////

function dropDown() {
    $(".dropDown").each(function () {
        $this = $(this)
        $this.find(".selectMenu").off().click(function () {
            $(this).toggleClass("open")
            if ($(this).closest(".dropDown").find("ul").css("display") == "none") {
                $(this).closest(".dropDown").find("ul").slideDown(500);
            } else {
                $(this).closest(".dropDown").find("ul").slideUp(500);
            }
        });

        $this.find("li").click(function () {
            $this.addClass("active").siblings().removeClass("active")
            $this.find("ul").slideUp(500);
            $this.find(".selectMenu").removeClass("open").find("p").text($(this).text());
        });

        $(document).click(function (e) {
            if ($(".dropDown").has(e.target).length === 0) {
                $(".dropDown").find("ul").slideUp(500);
                $(".dropDown").find(".selectMenu").removeClass("open")
            }
        })

        $this.find("ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
            },
        });
    });
}




/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               首頁                //
///////////////////////////////////////
var home = {

    masonry: function () {
        $('.exhibition .masonry ul').masonry({
            itemSelector: '.exhibition .masonry ul li',
            columnWidth: ".exhibition .grid-sizer",
            gutter: 20
        });

        $('.news .masonry ul').masonry({
            itemSelector: '.news .masonry ul li',
            columnWidth: ".news .grid-sizer",
            gutter: 20
        })
        $('.news .masonry ul').on('layoutComplete', function () {
            $(".news .masonry ul li.big,.news .masonry ul li.small").each(function () {
                var left = parseInt($(this).css("left"))
                if (left !== 0) {
                    $(this).addClass("right")
                }
            });
        })

        var device = mobile()
        if(device == true){
            $('.exhibition .masonry ul').masonry('destroy')
            $('.news .masonry ul').masonry('destroy')
        }
    },

    headerFixed: function () {
        var lastscrollY = 0;
        var logoTarget = 65
        var linkTarget = 210
        var windowWidth = $(window).width()
        $(window).scroll(function () {
            var nowscrollY = $(window).scrollTop()
            // 判斷是否為向上
            var isUp = nowscrollY < lastscrollY

            if (nowscrollY > 0) {
                $(".hdContent .buttons").addClass("fixed")
            } else {
                $(".hdContent .buttons").removeClass("fixed")
            }


            if (nowscrollY > logoTarget && windowWidth > 1160) {
                $(".hdContent .logo").addClass("fixed")
            } else if (nowscrollY > 0 && windowWidth < 1161) {
                $(".hdContent .logo").addClass("fixed")
            } else {
                $(".hdContent .logo").removeClass("fixed")
            }


            if (nowscrollY > linkTarget) {
                $(".hdContent .linkList").addClass("fixed")
            } else {
                $(".hdContent .linkList").removeClass("fixed")
            }

            if (nowscrollY > (linkTarget + 50) && windowWidth > 1160) {
                $(".hdContent").addClass("show up")
            } else if (nowscrollY > 50 && windowWidth < 1161) {
                $(".hdContent").addClass("show up")
            } else {
                $(".hdContent").removeClass("show up")
            }


            // if (isUp && nowscrollY > (linkTarget + 50) && windowWidth > 1160) {
            //     $(".hdContent").addClass("up")
            // } else if (isUp && nowscrollY > 50 && windowWidth < 1161) {
            //     $(".hdContent").addClass("up")
            // } else {
            //     $(".hdContent").removeClass("up")
            // }

            setTimeout(function () {
                lastscrollY = nowscrollY;
            }, 100);
        });
    },

    // 字數限制
    wordlimit: function () {
        wordlatest(65, ".exhibition .masonry ul li .hoverBox ._text .words p")
        wordlatest(40, ".about .lines .line ._text > p")
    },

    aboutVideo: function () {
        $(".about .bigImg").each(function () {
            var videoId = $(this).attr("data-videoId")
            if (videoId !== "") {
                $(this).addClass("hasVideo")
                openLibox(this, videoId);
            }
        })

        function openLibox(target, id) {
            $(target).click(function () {
                var src = "https://www.youtube.com/embed/" + id + "?rel=0;autoplay=1"
                if (!mobile()) {
                    $("body").css({
                        "overflow-y": "hidden",
                        "padding-right": "1rem"
                    })
                } else {
                    $("body").css("overflow-y", "hidden")
                }
                $("body").append('<artilce class="videoLibox"><div class="liboxClose"><span></span></div><iframe src="' + src + '" frameborder="0" allowfullscreen></iframe></article>');

                $(".videoLibox .liboxClose").click(function () {
                    closeLibox()
                })

                $(".videoLibox").click(function (e) {
                    if ($(e.target).hasClass("videoLibox")) {
                        closeLibox()
                    }
                })
            })
        }


        function closeLibox() {
            $(".videoLibox").addClass("close")
            setTimeout(function () {
                $(".videoLibox").remove()
                if (!mobile()) {
                    $("body").css({
                        "overflow-y": "visible",
                        "padding-right": "0rem"
                    })
                } else {
                    $("body").css("overflow-y", "visible")
                }
            }, 400)
        }
    },

    noticeLibox: function () {
        $("#home .noticeLibox section ._text .box").niceScroll({
            zindex: 0,
            cursorborder: "none",
            cursorwidth: "4px",
            railpadding: {
                top: 0,
                right: 1,
                left: 0,
                bottom: 0
            },
            nativeparentscrolling: false,
        });

        $("#home .noticeLibox .liboxClose").click(function () {
            close();
        });

        $("#home .noticeLibox").click(function (e) {
            if ($(e.target).hasClass("noticeLibox")) {
                close();
            }
        });

        function close() {
            $("#home .noticeLibox").addClass("close")
            setTimeout(function () {
                $("#home .noticeLibox").remove()
            }, 400)
        }

        // 如果沒有圖片的話
        if (!mobile()) {
            var noImg = $("#home .noticeLibox section picture img").attr("src") == undefined || $("#home .noticeLibox section picture img").attr("src") == ""
        } else {
            var noImg = ($("#home .noticeLibox section picture img").attr("src") == undefined || $("#home .noticeLibox section picture source").attr("srcset") == "") || $("#home .noticeLibox section picture img").attr("src") == ""
        }
        if (noImg) {
            $("#home .noticeLibox section ._text").addClass("noImg")
        }
    },

    checkDate: function (){
        $(".exhibition li").each(function() {
            if($(this).find('.start').html() === $(this).find('.end').html()){
                $(this).find('.end').css({
                    'opacity': '0'
                })
            }
        })
    },

    all: function () {
        home.masonry();
        home.headerFixed();
        home.wordlimit();
        home.aboutVideo();
        home.noticeLibox();
        home.checkDate();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               最新消息             //
///////////////////////////////////////
var news = {

    masonry: function () {
        var small = $(".ajaxContent .masonry ul li.small")

        for (var i = 0; i < small.length; i++) {
            if (i % 2 == 1) {
                $(small[i]).insertAfter(small[(i - 1)])
            }
        }
        if ($(window).width() > 1024) {
            $(".masonry ul").masonry({
                itemSelector: '.masonry ul li',
                columnWidth: '.grid-size',
                gutter: 30,
            });
        } else {
            $(".masonry ul").masonry({
                itemSelector: '.masonry ul li',
                columnWidth: '.grid-size',
                gutter: 15,
            });
        }
    },

    // 文字限制
    wordlimit: function () {
        wordlatest(35, ".index .masonry ul li.small h6")
        if ($(window).width() > 1024) {
            wordlatest(65, ".index .masonry ul li.textOnly .words p")
        } else {
            wordlatest(50, ".index .masonry ul li.textOnly .words p")
        }
    },

    socialMedia: function () {
        $(window).scroll(function () {
            var scrollBottom = $(window).scrollTop() + $(window).height()
            var socialMediaBottom = parseInt($(".newsContent").css("padding-top")) + 10 + $(".socialMedia").innerHeight();
            var point = $(".recommend").offset().top + ($(window).height() - socialMediaBottom)
            if (scrollBottom >= point) {
                $(".socialMedia").addClass("bottom")
            } else {
                $(".socialMedia").removeClass("bottom")
            }
        });
    },

    goTop: function () {
        $(".goTop").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1500, 'easeOutCubic');
        });
    },

    animatieDelay: function () {
        $(".newsContent .socialMedia ul li").each(function () {
            var i = $(this).index()
            var delay = i * 0.2 + 0.5 + "s"
            $(this).css("animation-delay", delay)
        });
    },

    all: function () {
        news.masonry();
        news.wordlimit();
        if ($("body").hasClass("detail")) {
            news.socialMedia();
            news.goTop();
            news.animatieDelay();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

$(document).ready(function () {
    // 蘋果回上頁debug
    appleDebug();

    /*ajax header*/
    load.hd();

    /*ajax footer*/
    load.ft();

    // 截取頁面id
    var page = $('body').attr('id');

    /*首頁home 啟動的JS*/
    if (page == "home") {

        /*waypoint*/
        _waypoint.homeW();

        /* b-lazy */
        _Blazy.homeW();

        // _Blazy.singleWaypoint();

        home.all();

        $(window).resize(function() {
            home.masonry()
        })

    }


    if (page == "news") {
        /* b-lazy */
        _Blazy.newsW();

        /*waypoint*/
        _waypoint.newsW();

        /*slick*/
        _Slick.newsW();

        dropDown()

        news.all();
    }
});