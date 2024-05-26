// 是否不是正在滾動
var notscrolling = true

// 檢查是否為移動裝置
function mobile() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS
    return device;
}


function browser() {
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("Trident") > 0
    var isFF = userAgent.indexOf("Firefox") > -1;
    var isSafari = userAgent.indexOf("Safari") > 0 && userAgent.indexOf("Chrome") < 1;
    var isChrome = userAgent.indexOf("Chrome") > -1;
    var isIE5 = isIE55 = isIE6 = isIE7 = isIE8 = false;

    this.x = (isFF) ? "Firefox" :
        (isOpera) ? "Opera" :
        (isSafari) ? "Safari" :
        (isChrome) ? "Chrome" :
        (isIE) ? "IE" : "unknow"
}

browser.prototype.check = function () {
    return this.x
}

var xxx = function () {
    "use strict";
    function uaMatch(ua) {
    if (ua === undefined) {
        ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();
    var match = /(edge)\/([\w.]+)/.exec(ua) ||
        /(opr)[\/]([\w.]+)/.exec(ua) ||
        /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(iemobile)[\/]([\w.]+)/.exec(ua) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("trident") >= 0 && /(rv)(?: )([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];
    var platform_match = /(ipad)/.exec(ua) ||
        /(ipod)/.exec(ua) ||
        /(windows phone)/.exec(ua) ||
        /(iphone)/.exec(ua) ||
        /(kindle)/.exec(ua) ||
        /(silk)/.exec(ua) ||
        /(android)/.exec(ua) ||
        /(win)/.exec(ua) ||
        /(mac)/.exec(ua) ||
        /(linux)/.exec(ua) ||
        /(cros)/.exec(ua) ||
        /(playbook)/.exec(ua) ||
        /(bb)/.exec(ua) ||
        /(blackberry)/.exec(ua) ||
        [];
    var browser = {},
        matched = {
            browser: match[5] || match[3] || match[1] || "",
            version: match[2] || match[4] || "0",
            versionNumber: match[4] || match[2] || "0",
            platform: platform_match[0] || ""
        };
    
    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.versionNumber, 10);
    }
    
    if (matched.platform) {
        browser[matched.platform] = true;
    }
    if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
        browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"]) {
        browser.mobile = true;
    }
    if (browser.cros || browser.mac || browser.linux || browser.win) {
        browser.desktop = true;
    }
    if (browser.chrome || browser.opr || browser.safari) {
        browser.webkit = true;
    }

    if (browser.chrome) {
        var chrome = "Chrome"

        matched.browser = chrome
        browser[chrome] = true;
    }
    if (browser.msie) {
        var ie = "IE";

        matched.browser = ie;
        browser[ie] = true;
    }

    if (browser.rv || browser.iemobile) {
        var ie = "IE";

        matched.browser = ie;
        browser[ie] = true;
    }
    if (browser.edge) {
        delete browser.edge;
        var msedge = "Edge";
    
        matched.browser = msedge;
        browser[msedge] = true;
    }
    if (browser.safari && browser.blackberry) {
        var blackberry = "blackberry";

        matched.browser = blackberry;
        browser[blackberry] = true;
    }

    if (browser.safari && browser.playbook) {
        var playbook = "playbook";

        matched.browser = playbook;
        browser[playbook] = true;
    }

    if (browser.bb) {
        var bb = "blackberry";

        matched.browser = bb;
        browser[bb] = true;
    }

    if (browser.opr) {
        var opera = "Opera";

        matched.browser = opera;
        browser[opera] = true;
    }
    if (browser.safari && browser.android) {
        var android = "Android";

        matched.browser = android;
        browser[android] = true;
    }
    if (browser.safari && browser.kindle) {
        var kindle = "kindle";

        matched.browser = kindle;
        browser[kindle] = true;
    }
    if (browser.safari && browser.silk) {
        var silk = "silk";

        matched.browser = silk;
        browser[silk] = true;
    }
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
    }
    window.Browser = uaMatch(window.navigator.userAgent);

    return window.Browser;
}();


/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {

    homeW: function () {
        if ($("body").hasClass("index")) {
            _waypoint.singleWaypoint(".product .content", '80%')
            _waypoint.singleWaypoint(".about", '60%')
            _waypoint.singleWaypoint(".brands", '40%')
        }
    },

    QAW: function () {
        _waypoint.eachWaypoiny(".QAContent .tableContent .type", "70%");
    },

    newsW: function () {
        $(".index .masonryBox ul li").each(function (index, element) {
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
                offset: "80%"
            });
        });
        _waypoint.eachWaypoiny(".detail .box .hasImg", "80%");
        _waypoint.eachWaypoiny(".detail .box .textOnly", "80%");
    },

    branchW: function () {
        _waypoint.eachWaypoiny(".index .links .content", "60%");
        _waypoint.eachWaypoiny(".index .place ._title", "70%");
        _waypoint.eachWaypoiny(".index .place ._slick", "70%");
        _waypoint.eachWaypoiny(".index .about .content", "80%");

        _waypoint.eachWaypoiny(".about .introduction ._title", "80%");
        _waypoint.eachWaypoiny(".about .introduction .row figure", "70%");
        _waypoint.eachWaypoiny(".about .introduction .row ._text", "80%");
        $(".about main .award").waypoint({
            handler: function () {
                $(".about main .award").addClass('show');
            },
            offset: "80%"
        });
        _waypoint.eachWaypoiny(".about main .assurance", "80%");

        _waypoint.eachWaypoiny("#branch.overview main .content .rows .row", "80%");
    },

    productW: function () {
        $(".sort main .content ul li").each(function (index, element) {
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
                offset: "80%"
            });
        });

        _waypoint.eachWaypoiny(".series .collection .box", "70%");
        _waypoint.eachWaypoiny(".series .introduction ._title", "80%");
        _waypoint.eachWaypoiny(".series .introduction .content>*", "80%");

        _waypoint.eachWaypoiny(".series .supportTool", "80%");
        _waypoint.eachWaypoiny(".series .recommend", "60%");

        _waypoint.eachWaypoiny(".detail .introduction ._title", "80%");
        _waypoint.eachWaypoiny(".detail .introduction  .collection", "70%");
        _waypoint.eachWaypoiny(".detail .introduction .Specification", "70%");
        _waypoint.eachWaypoiny(".detail .introduction .texture", "70%");
        _waypoint.eachWaypoiny(".detail .photographs ._title", "80%");
        var onlyOne = ($(".detail .photographs .masonry").length !== 0 && $(".detail .photographs .masonry .box").length == 1)
        $(".photographs .masonry .box").each(function (index, element) {
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
                    if (onlyOne) {
                        $(".detail .photographs .masonry").masonry('layout');
                    }
                },
                offset: "80%"
            });
        });
        _waypoint.eachWaypoiny(".detail .collage", "60%");
        _waypoint.eachWaypoiny(".detail .space ._title", "70%");
        _waypoint.eachWaypoiny(".detail .space ._slick", "70%");
        _waypoint.eachWaypoiny(".detail .recommend", "70%");
    },

    spaceW: function () {
        _waypoint.eachWaypoiny(".detail main article.content ._title", "70%");
        _waypoint.eachWaypoiny(".detail .collection .box", "70%");
        _waypoint.eachWaypoiny(".detail .space", "70%");

        $(".detail main article.content ul li").each(function (index, element) {
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
                offset: "80%"
            });
        });
    },

    styleW: function () {
        _waypoint.eachWaypoiny(".index main .content ul li figure", "80%");
        _waypoint.eachWaypoiny(".index main .content ul li ._text", "80%");
        _waypoint.eachWaypoiny(".detail main article.content ._title", "70%");
        _waypoint.eachWaypoiny(".detail .collection .box", "70%");
        _waypoint.eachWaypoiny(".detail .recommend", "70%");
        $(".detail main article.content ul li").each(function (index, element) {
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
                offset: "80%"
            });
        });
    },

    joinW: function () {
        _waypoint.eachWaypoiny("main .content .boxs .box figure", "70%");
        _waypoint.eachWaypoiny("main .content .boxs .box ._text", "70%");
    },

    catalogueW: function () {
        _waypoint.eachWaypoiny("main article:not(.category) .content ul li figure", "80%");
        _waypoint.eachWaypoiny("main article:not(.category) .content ul li ._text", "80%");
    },

    contactW: function () {
        _waypoint.eachWaypoiny("main .contactInf", "70%");
        _waypoint.eachWaypoiny("main .table", "70%");
    },

    staffW: function () {
        _waypoint.eachWaypoiny(".detail .reult .type", "80%");
        _waypoint.eachWaypoiny(".detail .reult .type ul li", "80%");
    },

    favoriteW: function () {
        _waypoint.eachWaypoiny("main .list ul li", "80%");
    },

    searchW: function () {
        _waypoint.eachWaypoiny("main .list ul li", "80%");
    },

    whitehorsebabyW: function () {
        _waypoint.eachWaypoiny("main .introduction", "85%");
        _waypoint.eachWaypoiny("main .product ._title", "80%");
        _waypoint.eachWaypoiny("main .product .productContent ul li", "80%");
        _waypoint.eachWaypoiny("main .product .buttons", "80%");
    },

    projectW: function () {
        _waypoint.eachWaypoiny(".index main article.content .list .box", "80%");
        _waypoint.eachWaypoiny(".detail main article.content ._slick .about", "80%");
    },

    eachWaypoiny: function (target, offsetValue) {
        $(target).each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: offsetValue
            });
        });
    },

    singleWaypoint: function (target, offsetValue) {
        $(target).waypoint({
            handler: function () {
                $(target).addClass('show');
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

    homeW: function () {
        var bLazy = new Blazy({
            offset: 300,
            success: function (ele) {
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    newsW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in")
                $(ele).closest(".textOnly").addClass("in")
                $(ele).closest(".hasImg").addClass("in");
                if ($('.masonryBox ul').length !== 0) {
                    $('.masonryBox ul').masonry('layout');
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    branchW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".box").addClass("in");
                $(ele).closest(".logo").addClass("in");
                $(ele).closest(".content").addClass("in");
                $(ele).closest(".row").addClass("in");
                if ($("body").hasClass("about")) {
                    $(ele).closest("figure").addClass("in");
                    $(ele).closest("article.award").addClass("in");
                    $(ele).closest("li").addClass("in");
                    if (anchorClickTarget !== undefined  && $(window).width()>960) {
                        // 重新存找定位點
                        var point = $("main article").eq(anchorClickTarget).offset().top - $("header .content").innerHeight()
                        var scrollTop = $(window).scrollTop()
                        // animate時間
                        var time = (point - scrollTop) / point * 500 + 500
                        // 停止原animate
                        $("html,body").stop()
                        // 開始新的animate
                        $("html,body").animate({
                            scrollTop: point,
                        }, {
                            duration: time,
                            easing: 'easeOutCubic',
                            complete: function () {
                                anchorClickTarget = undefined
                            }
                        });
                    }
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    productW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".box").addClass("in");
                $(ele).closest("li").addClass("in");
                if ($('.series  .collection .content').length !== 0) {
                    $('.series  .collection .content').masonry('layout');
                }

                if ($('.detail .photographs .masonry').length !== 0) {
                    $('.detail .photographs .masonry').masonry('layout');
                }

                if ($("body").hasClass("series")) {
                    if (anchorClickTarget !== undefined) {
                        // 重新存找定位點
                        var point = $("main article").eq(anchorClickTarget).offset().top - $("header .content").innerHeight()
                        var scrollTop = $(window).scrollTop()
                        // animate時間
                        var time = (point - scrollTop) / point * 500 + 500
                        // 停止原animate
                        $("html,body").stop()
                        // 開始新的animate
                        $("html,body").animate({
                            scrollTop: point,
                        }, {
                            duration: time,
                            easing: 'easeOutCubic',
                            complete: function () {
                                anchorClickTarget = undefined
                            }
                        });
                    }
                }

                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
                product.masonryAutoFit();
            }
        });
    },

    spaceW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".box").addClass("in");
                $(ele).closest("li").addClass("in");
                if ($('.detail  .collection .content').length !== 0) {
                    $('.detail  .collection .content').masonry('layout');
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    styleW: function () {
        var bLazy = new Blazy({
            offset: 1000,
            success: function (ele) {
                $(ele).closest(".box").addClass("in");
                $(ele).closest("li").addClass("in");
                $(ele).closest("figure").addClass("in");
                if ($('.detail  .collection .content').length !== 0) {
                    $('.detail  .collection .content').masonry('layout');
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    joinW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("figure").addClass("in");
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    catalogueW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("figure").addClass("in")
                if (anchorClickTarget !== undefined) {
                    // 重新存找定位點
                    var point = $("main article").eq(anchorClickTarget).offset().top - $("header .content").innerHeight() - 50
                    var scrollTop = $(window).scrollTop()
                    // animate時間
                    var time = (point - scrollTop) / point * 500 + 500
                    // 停止原animate
                    $("html,body").stop()
                    // 開始新的animate
                    $("html,body").animate({
                        scrollTop: point,
                    }, {
                        duration: time,
                        easing: 'easeOutCubic',
                        complete: function () {
                            anchorClickTarget = undefined
                            notscrolling = true
                            catalogue.inWhere();
                        }
                    });
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    aboutW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".openAboutDetail").addClass("in");
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    staffW: function () {
        var bLazy = new Blazy({
            offset: 100,
            breakpoints: [{
                width: 1024,
                src: "data-src-small"
            }],
            success: function (ele) {
                if ($("body").hasClass("detail")) {
                    $(ele).closest("li").addClass("in")
                }
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    favoriteW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    searchW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    whitehorsebabyW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest("figure").addClass("in");
                $("body").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    projectW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".box").addClass("in");
            }
        });
    },
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////

var _slick = {
    homeW: function () {

        $(".banner ._slick ul").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            fade: true,
            arrows: false,
        });

        $(".about .imgSlick .picture").slick({
            asNavFor: '.about ._textSlick ul,.about .imgSlick .logos',
            prevArrow: ".about .arrows .icon-triangle_left",
            nextArrow: ".about .arrows .icon-triangle_right",
            speed: 800,
            // centerMode: true,
            // centerPadding: "0px",
            autoplay: true,
            autoplaySpeed: 6000,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }]
        });

        $(".about .imgSlick .logos").slick({
            asNavFor: '.about ._textSlick ul,.about .imgSlick .picture',
            arrows: false,
            speed: 800,
            // centerMode: true,
            // centerPadding: "0px",
            lazyLoad: 'ondemand',
        });

        $(".about ._textSlick ul").slick({
            asNavFor: '.about .imgSlick .picture,.about .imgSlick .logos',
            arrows: false,
            speed: 800,
        });

        // 只有行動裝置才啟動
        if (mobile()) {
            $(".brands .content ul").slick({
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 800,
                dots: true,
            });

            $(".brands .content ul").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var i = currentSlide + 1
                $(".brands .imgs ._img").eq(i).addClass("active").siblings().removeClass("active");
            });
        }
    },

    branchW: function () {
        $(".index .place .content ._slick ul ").slick({
            prevArrow: ".place ._slick .icon-triangle_left",
            nextArrow: ".place ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }, {
                breakpoint: 701,
                settings: {
                    centerPadding: "12%",
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }]
        });

        $(".index .place .content ._slick ul ").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".index .place .content ._slick ul li").length === 1){
                $('.index .place .content ._slick ul').slick('slickSetOption','centerMode', false);
                $('.index .place .content ._slick ul').slick('setPosition');
            }
        });

        if ($(window).width() < 901) {
            $(".about main .assurance>.content ul").slick({
                slidesToShow: 5,
                centerMode: true,
                centerPadding: "0",
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
                speed: 1000,
                arrows: false,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                }]
            });

            $(".about main .assurance>.content ul").on('lazyLoaded', function(){
                $("body").getNiceScroll().resize();
                if($(".about main .assurance>.content ul li").length === 1){
                    $('.about main .assurance>.content ul').slick('slickSetOption','centerMode', false);
                    $('.about main .assurance>.content ul').slick('setPosition');
                }
            });
        }
    },

    productW: function () {
        $(".series .recommend ._slick ul").slick({
            infinite: false,
            variableWidth: true,
            speed: 1000,
            lazyLoad: 'progressive',
            prevArrow: ".series .recommend ._slick .icon-triangle_left",
            nextArrow: ".series .recommend ._slick .icon-triangle_right",
            responsive: [{
                breakpoint: 1351,
                settings: {
                    centerMode: true,
                    centerPadding: "0"
                }
            }, {
                breakpoint: 700,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    centerMode: true,
                    centerPadding: "30px",
                    variableWidth: false,
                    infinite: true,
                    dots: true
                }
            }]
        });

        $(".series .recommend ._slick ul").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".series .recommend ._slick ul li").length === 1){
                $('.series .recommend ._slick ul').slick('slickSetOption','centerMode', false);
                $('.series .recommend ._slick ul').slick('setPosition');
            }
        });

        $(".detail .space ._slick ul ").slick({
            prevArrow: ".detail .space ._slick .icon-triangle_left",
            nextArrow: ".detail .space ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true
                }
            }, {
                breakpoint: 701,
                settings: {
                    centerPadding: "12%",
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                }
            }]
        });

        $(".detail .space ._slick ul ").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".detail .space ._slick ul li").length === 1){
                // $('.detail .space ._slick ul').slick('unslick');
                $('.detail .space ._slick ul').slick('slickSetOption','centerMode', false);
                $('.detail .space ._slick ul').slick('setPosition');
            }
        });

        $(".detail .recommend ._slick ul ").slick({
            prevArrow: ".detail .recommend ._slick .icon-triangle_left",
            nextArrow: ".detail .recommend ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true
                }
            }, {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true
                }
            }]
        });

        $(".detail .recommend ._slick ul").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".detail .recommend ._slick ul li").length === 1){
                // $('.detail .recommend ._slick ul').slick('unslick');
                $('.detail .recommend ._slick ul').slick('slickSetOption','centerMode', false);
                $('.detail .recommend ._slick ul').slick('setPosition');
            }
        });

        if (mobile()) {
            $(".detail .collage ._text ul").slick({
                slidesToShow: 2,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000,
                dots: true,
                responsive: [{
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }
    },

    spaceW: function () {
        $(".detail .banner ._slick ul").slick({
            prevArrow: ".detail .banner ._slick .arrows .left",
            nextArrow: ".detail .banner ._slick .arrows .right",
            fade: true,
            autoplay: true,
            autoplaySpeed: 12000,
            pauseOnHover: false,
            speed: 1000,
            cssEase: 'linear',
            dots:true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 10000,
                    speed: 800,
                    arrows: false,
                    dots:false,
                }
            }]
        });

        $('.detail .banner ._slick ul').on('beforeChange', function (event, slick, direction) {
            $('.detail .banner ._slick ul li.slick-current').addClass("out");
            $('.detail .banner ._slick ul li:not(.slick-current) ._text,.detail .banner ._slick ul li:not(.slick-current) .anchorPoint').css("display", "none")
        });

        $('.detail .banner ._slick ul').on('afterChange', function (event, slick, direction) {
            $('.detail .banner ._slick ul li').removeClass("out")
            $('.detail .banner ._slick ul li').find("._text").css("display", "block")
            $('.detail .banner ._slick ul li').find(".anchorPoint").css("display", "flex")
            $('.detail .banner ._slick ul li').find("._text>*, .anchorPoint div").css("animation-delay", "0s")
        });

        $(".detail .space ._slick ul").slick({
            prevArrow: ".detail .space ._slick .icon-triangle_left",
            nextArrow: ".detail .space ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 901,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true
                }
            }, {
                breakpoint: 701,
                settings: {
                    centerPadding: "12%",
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true
                }
            }]
        });

        $(".detail .space ._slick ul").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".detail .space ._slick ul li").length === 1){
                $('.detail .space ._slick ul').slick('slickSetOption','centerMode', false);
                $('.detail .space ._slick ul').slick('setPosition');
            }
        });
    },

    styleW: function () {
        $(".detail .banner ._slick ul").slick({
            prevArrow: ".detail .banner ._slick .arrows .left",
            nextArrow: ".detail .banner ._slick .arrows .right",
            fade: true,
            // autoplay: true,
            // autoplaySpeed: 12000,
            // pauseOnHover: false,
            speed: 1000,
            cssEase: 'linear',
            dots:true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 10000,
                    speed: 800,
                    arrows: false,
                    dots:false,
                }
            }]
        });

        $('.detail .banner ._slick ul').on('beforeChange', function (event, slick, direction) {
            $('.detail .banner ._slick ul li.slick-current').addClass("out");
            $('.detail .banner ._slick ul li:not(.slick-current) ._text,.detail .banner ._slick ul li:not(.slick-current) .anchorPoint').css("display", "none")
        });

        $('.detail .banner ._slick ul').on('afterChange', function (event, slick, direction) {
            $('.detail .banner ._slick ul li').removeClass("out")
            $('.detail .banner ._slick ul li').find("._text").css("display", "block")
            $('.detail .banner ._slick ul li').find(".anchorPoint").css("display", "flex")
            $('.detail .banner ._slick ul li').find("._text>*, .anchorPoint div").css("animation-delay", "0s")
        });


        $(".detail .recommend ._slick ul").slick({
            prevArrow: ".detail .recommend ._slick .icon-triangle_left",
            nextArrow: ".detail .recommend ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }, {
                breakpoint: 901,
                settings: {
                    centerPadding: "12%",
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 701,
                settings: {
                    centerPadding: "5%",
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    dots: true
                }
            }]
        });

        $(".detail .recommend ._slick ul").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".detail .recommend ._slick ul li").length === 1){
                $('.detail .recommend ._slick ul').slick('slickSetOption','centerMode', false);
                $('.detail .recommend ._slick ul').slick('setPosition');
            }
        });
    },

    storeHoldW: function () {
        $(".detail .recommend ._slick ul").slick({
            prevArrow: ".detail .recommend ._slick .icon-triangle_left",
            nextArrow: ".detail .recommend ._slick .icon-triangle_right",
            slidesToShow: 2,
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }, {
                breakpoint: 901,
                settings: {
                    centerPadding: "12%",
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 701,
                settings: {
                    centerPadding: "5%",
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    dots: true
                }
            }]
        })

        $(".detail .recommend ._slick ul").on('lazyLoaded', function(){
            $("body").getNiceScroll().resize();
            if($(".detail .recommend ._slick ul li").length === 1){
                $('.detail .recommend ._slick ul').slick('slickSetOption','centerMode', false);
                $('.detail .recommend ._slick ul').slick('setPosition');
            }
        });
    },

    projectW:function(){
        $(".detail main .content ._slick ul").slick({
            prevArrow: ".detail main .content ._slick .icon-triangle_left",
            nextArrow: ".detail main .content ._slick .icon-triangle_right",
            speed: 1000,
            dots: true,
            autoplay:true,
            centerMode: true,
            centerPadding: "0",
            autoplaySpeed:5000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false
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
        $(".branchToHome").click(function () {
            var i = true
            localStorage.setItem("fromBranch", i);
        });
        searchLibox.all();
        menu.all();
    },
    /*footer*/
    ft: function () {
        $(".branchToHome").click(function () {
            var i = true
            localStorage.setItem("fromBranch", i);
        })
        goTop();
        privacy.open_click();
        staffLibox.all();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           員工帳號檢查             //
///////////////////////////////////////
function StaffCheck() {
    var languagelocale = $(".languagelocale").val();
    var url = $(".base-url-p").val();
    var src = url + "/overview/" + languagelocale + "/Staff/Login"
    $.ajax({
        url: src,
        type: 'post',
        data: $('#staffform').serialize(),
        success: function (resultData) {
            if (resultData == "true") {
                location.href = url + "/overview/" + languagelocale + "/Staff";
            } else {
                alert("Incorrect");
                ResetStaff();
            }

        }
    });
}

function ResetStaff() {
    $("#account").val("");
    $("#password").val("");
}

function StaffLogOut() {
    var languagelocale = $(".languagelocale").val();
    var url = $(".base-url-p").val();
    location.href = url + "/overview/" + languagelocale + "/Staff/Logout";
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            goTop                  //
///////////////////////////////////////

function goTop() {
    scrollTop0()
    if($("footer").length > 0){
        $(window).scroll(function () {
            scrollTop0()
            var targetPoint = $("footer").offset().top + 100
            if ($(window).width() < 901) {
                var targetPoint = $("footer").offset().top + 80
            }
            var scrollBottom = $(window).scrollTop() + $(window).height()
        });
    }

    // 在頂部
    function scrollTop0() {
        if ($(window).scrollTop() <= 50) {
            $("footer .goTop").css("opacity", "");
        } else {
            $("footer .goTop").css("opacity", "1");
        }
    }

    $("footer .goTop").click(function () {
        var time = $(window).scrollTop() / $("body").innerHeight() * 1500 + 500
        $("html,body").animate({
            scrollTop: 0
        }, time, 'easeOutCubic');
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               menu                //
///////////////////////////////////////

function MenuChangeBrand(obj) {
    $("header .hd_menu .left .logos").children().removeClass("active");
    $(obj).addClass("active");
    var branch = $(obj).attr("data-brand");
    $("div.productLink").children().removeClass("active");
    $("#" + branch).addClass("active");
}



var menu = {

    open_click: function () {
        $(".openMenu").click(function () {
            menu.open()
        });
    },

    open: function () {
        $("header .hd_menu").addClass("open")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $("header .hd_menu .liboxClose").click(function () {
            menu.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("hd_menu")) {
                menu.close();
            }
        });
    },

    close: function () {
        $("header .hd_menu").addClass("close").removeClass("open");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .hd_menu").removeClass("close");
            $("header .hd_menu .left .logos a").removeClass("noAnimation")
        }, 1200)
    },

    product: function () {
        if ($(window).width() < 601) {
            $("header .hd_menu .left .productLink .classify .index").each(function () {
                $(this).click(function () {
                    $(this).closest(".classify").find("ul li").slideToggle(500)
                    $(this).closest(".classify").siblings().find("ul li").slideUp(500)
                })
            })
        }
    },

    logos: function () {
        $("header .hd_menu .left .logos a").each(function(){
            $(this).off().click(function(){
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active")
                $("header .hd_menu .left .logos a").addClass("noAnimation")
                $("header .hd_menu .left .productLink .box.active").slideUp(400)
                $("header .hd_menu .left .productLink .box").eq(i).slideDown(400)
                setTimeout(function(){
                    $("header .hd_menu .left .productLink .box").eq(i).addClass("active").siblings().removeClass("active")
                },400)
            })
        })
    },

    all: function () {
        menu.open_click();
        menu.close_click();
        menu.product();
        menu.logos();
    }

}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              privacy              //
///////////////////////////////////////

var privacy = {

    open_click: function () {
        $(".openPrivicy").click(function () {
            var src = $(this).attr("data-src")
            privacy.open(src)
        });
    },

    open: function (src) {
        $("body").append("<article class='privacyLibox'></article")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }

        $.ajax({
                // 載入資料
                url: src,
            })
            .done(function (data) {
                // 將資料塞入結構
                $(".privacyLibox").html(data);
                $(".privacyLibox").addClass("open")
                privacy.all();
            });
    },

    close_click: function () {
        $(".privacyLibox .liboxClose").click(function () {
            privacy.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("privacyLibox")) {
                privacy.close();
            }
        });
    },

    close: function () {
        $(".privacyLibox").removeClass("open").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".privacyLibox").remove()
        }, 1000)
    },

    scrollbar: function () {
        var color = ($(window).width() > 1580) ? "#fff" : "#424242"
        $(".privacyLibox").niceScroll({
            zindex: "3",
            scrollspeed: 40,
            cursorborder: "none",
            cursorcolor: color,
            zindex: "11",
            cursorwidth: "4px",
            nativeparentscrolling: false,
            horizrailenabled: false,
            railpadding: {
                top: 0,
                right: 1,
                left: 0,
                bottom: 0
            },
        });
    },

    all: function () {
        privacy.close_click();
        privacy.scrollbar();
    }

}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//          body scrollbar           //
///////////////////////////////////////
function bodyscrollbar() {
    
    if (!mobile() && !$("body").hasClass("print")) {
        $("body").niceScroll({
            zindex: "11",
            scrollspeed: 40,
            cursorborder: "none",
            cursorwidth: "10px",
            nativeparentscrolling: false,
            horizrailenabled: false,
            autohidemode: false,
            railpadding: {
                top: 0,
                right: 1,
                left: 0,
                bottom: 0
            },
        });

        setTimeout(function(){
            if($("body>.nicescroll-rails").length ===0){
                bodyscrollbar()
            }
        },500)
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
    $(target).each(function () {
        var word = $(this).text()
        $(this).text("")
        var html = word.replace(/([^\x00-\x80]|\w|\s)/g, ("<span>$&</span>"))
        $(this).html(html);
        $(this).find("span").each(function () {
            var i = $(this).index()
            var delayTime = i * delaySpace + delayStartTime + "s"
            $(this).css("animation-delay", delayTime);
        });
    });
}

// 保守版
function wordAnimation2(target, delayStartTime, delaySpace) {
    $(target).each(function () {
        var word = $(this).text()
        $(this).text("")
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
        $(this).append(html);
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           dropDown             //
////////////////////////////////////

function dropDown() {

    $(".dropDown").each(function () {
        var $this = $(this)
        $($this).find(".selectMenu").off().click(function () {
            $(this).toggleClass("open");
            if ($(this).closest(".dropDown").find("ul").css("display") == "none") {
                $(this).closest(".dropDown").find("ul").slideDown(500);
                $(this).closest(".dropDown").addClass("open")
            } else {
                $(this).closest(".dropDown").find("ul").slideUp(500);
                $(this).closest(".dropDown").removeClass("open")
            }
        });

        $this.find("li").off().click(function () {
            $(this).closest(".dropDown").addClass("active").removeClass("open").siblings().removeClass("active");
            $(this).closest(".dropDown").find("ul").slideUp(500);
            $(this).closest(".dropDown").find(".selectMenu").removeClass("open").find("p").text($(this).text());
        });

        $(document).click(function (e) {
            if ($this.has(e.target).length === 0) {
                $this.find("ul").slideUp(500);
                $this.find(".selectMenu").removeClass("open")
            }
        });

        $this.find("ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true
            },
            
            scrollInertia: 60,
        });
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            更換背景                //
///////////////////////////////////////

function changBg() {
    $(window).scroll(function () {
        var scrolTop = $(window).scrollTop();
        var articles = document.querySelectorAll("main article");
        var x
        for (var i = articles.length - 1; i >= 0; i--) {
            var dots = $(articles[i]).offset().top - $(window).height() / 2
            if (scrolTop > dots) {
                var x = i
                break
            }
        }
        $(articles[x]).find(".background").css("opacity", "1")
        $(articles[x]).siblings().find(".background").css("opacity", "0");
    });
}

/***************************************************************************************************************************/
/***************************************************************************************************************************/
///////////////////////////////////////
//            branchColor            //
///////////////////////////////////////
function branchColor() {
    var branchColor = $("body").attr("data-themeColor")

    // 背景顏色更換
    $(".bgColor").each(function () {
        $(this).css("background-color", branchColor)
    });

    // 文字顏色更換
    $(".textColor,.banner .breadcrumb .bgColor,.liboxBanner .breadcrumb .bgColor").each(function () {
        $(this).css("color", branchColor)
    });
    
    // 邊線顏色更換
    $(".borderColor").each(function () {
        $(this).css("border-color", branchColor)
    });

    $(".newOne").each(function () {
        $(this).append("<p class='tag' style='background:" + branchColor + "'>NEW</p>")
    });

    $(".hoverColor_P").each(function () {
        $(this).mouseover(function () {
            $(this).find(".hoverColor_C").css("background-color", branchColor)
        });
        $(this).mouseout(function () {
            $(this).find(".hoverColor_C").css("background-color", "")
        })
    })
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//          bannerSCrollDown         //
///////////////////////////////////////
function bannerSCrollDown() {
    $(".banner ._title,.banner ._text").each(function(){
        if($(this).css("color")=="#000"){
            $(".banner .scrollDown").addClass("whiteBanner")
        }
    })
    $(".banner .scrollDown").click(function () {
        $("html,body").animate({
            scrollTop: $(".banner .scrollDown").offset().top + $(".banner .scrollDown").innerHeight()
        }, 1000, 'easeOutCubic')
    });
}
/***************************************************************************************************************************/
///////////////////////////////////////
//      企業首頁與分館首頁共同js       //
///////////////////////////////////////

var index = {

    headerFixed: function () {
        $(window).scroll(function () {
            var preparePoint = $("header .content").innerHeight()
            var fixedPoint = $(".banner").innerHeight()
            var scrollTop = $(window).scrollTop()
            if (scrollTop >= preparePoint) {
                $("header .content").addClass("prepare");
            } else {
                $("header .content").removeClass("prepare");
            }
            if (scrollTop >= fixedPoint) {
                $("header .content").addClass("fixed");
            } else {
                $("header .content").removeClass("fixed");
            }
        });
    },

    all: function () {
        index.headerFixed();
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            splitInTwo             //
///////////////////////////////////////

function splitInTwo(screenWidth, area1Height, area2Height, targets, targetParent) {
    if ($(window).width() > screenWidth) {
        var area1 = ""
        var area2 = ""
        var area1Height = area1Height
        var area2Height = area2Height
        var whitchShort = (area1Height <= area2Height) ? whitchShort = "one" : whitchShort = "two"
        var ele = document.querySelectorAll(targets)
        for (var i = 0; i < ele.length; i++) {
            var x = $(ele[i]).index()
            var html = ele[i].outerHTML
            if (whitchShort == "one" && $(ele[i]).innerHeight() !== 0) {
                area1 += html
                area1Height += $(ele[i]).innerHeight()
            } else if (whitchShort == "two" && $(ele[i]).innerHeight() !== 0) {
                area2 += html
                area2Height += $(ele[i]).innerHeight()
            }
            // 看誰比較矮
            var whitchShort = (area1Height <= area2Height) ? whitchShort = "one" : whitchShort = "two"
        }
        $(targetParent + ">*").remove()
        $(targetParent).append("<div class='area'>" + area1 + "</div>")
        $(targetParent).append("<div class='area'>" + area2 + "</div>")
        // 重新加入waypoint
        _waypoint.eachWaypoiny(targets, "80%");
    } else {
        // 加入waypoint
        _waypoint.eachWaypoiny(targets, "80%");
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               首頁                //
///////////////////////////////////////
var home = {

    brandsHover: function () {
        $(".brands .content ul li").hover(function () {
            var i = $(this).index() + 1
            $(".brands .imgs ._img").eq(i).addClass("active").siblings().removeClass("active");
            $(".brands .content h6 span").css("transform", "translateY(100%)");
            $(this).addClass("active");
            $(this).siblings().addClass("notActive");
        }, function () {
            $(".brands .imgs ._img").eq(0).addClass("active").siblings().removeClass("active");
            $(".brands .content h6 span").css("transform", "translateY(0%)")
            $(this).removeClass("active");
            $(this).siblings().removeClass("notActive");
        });
    },

    // 字數限制
    wordsLimit: function () {
        wordlatest(50, ".brands .content ul li .slogan p");
        wordlatest(120, ".about ._textSlick ul li p");
    },

    wordAnimation: function () {
        // wordAnimation(".banner ._text .slogan h6", 0.2, 0.05);
    },

    goTopChangColor: function () {
        $(window).scroll(function () {
            var scrollBottom = $(window).scrollTop() + $(window).height() - 40
            if ($(window).width() < 901) {
                scrollBottom = $(window).scrollTop() + $(window).height() - 20
            }
            var brandsTop = $("article.brands").offset().top
            var brandsBottom = brandsTop + $("article.brands").innerHeight() + ($("footer .goTop").innerHeight() / 2)
            if (scrollBottom >= brandsTop && scrollBottom < brandsBottom) {
                $("footer .goTop").addClass("white");
            } else if (scrollBottom >= brandsBottom) {
                $("footer .goTop").removeClass("white");
            } else {
                $("footer .goTop").removeClass("white");
            }
        });
    },

    fromBranch: function () {
        var fromBranch = localStorage.getItem("fromBranch");
        var point = $("#home .brands").offset().top + 1
        if (fromBranch) {
            localStorage.removeItem("fromBranch");
            $("html,body").animate({
                scrollTop: point
            }, 0);
        }

        $(".branchToHome").click(function () {
            localStorage.removeItem("fromBranch");
            $("html,body").animate({
                scrollTop: point
            }, 1000, 'easeOutCubic');
        })
    },

    all: function () {
        home.wordsLimit();
        if (!mobile()) {
            home.brandsHover();
        }
        home.goTopChangColor();
        home.wordAnimation();
        home.fromBranch();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               常見問題             //
///////////////////////////////////////

var QA = {
    countUp: function () {
        $(".QAContent .tableContent .type ul li").each(function () {
            var i = $(this).index() + 1
            if (i < 10) {
                var i = "0" + i
            }
            $(this).find(".question .numb").text(i)
        })
    },

    // 點開問題
    clickQA: function () {
        $(".QAContent .tableContent .type ul li .question button").each(function () {
            $(this).click(function () {
                $this = $(this)
                $this.closest("li").toggleClass("open").find(".answer").slideToggle(500)
                $this.closest("li").siblings().removeClass("open").find(".answer").slideUp(500)
                setTimeout(function () {
                    $("body").getNiceScroll().resize();
                    if (mobile()) {
                        $("html,body").animate({
                            scrollTop: $this.offset().top - $(".QAContent .category .box").innerHeight() - $("header .content").innerHeight() - parseInt($this.closest("li").css("padding-top"))
                        }, 600, 'easeOutCubic');
                    }
                }, 500)
            });
        })
    },

    categoryFixed: function () {
        var top = $(".QAContent").offset().top + $(".QAContent .category").height() - $("header .content").innerHeight()
        var bottom = $(".QAContent").offset().top + $(".QAContent").innerHeight() - $(".QAContent .category").innerHeight()

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop()
            if (scrollTop >= bottom) {
                $(".QAContent .category").addClass("bottom")
            } else {
                $(".QAContent .category").removeClass("bottom")
            }
            if (scrollTop >= top) {
                $(".QAContent .category").addClass("fixed")
            } else {
                $(".QAContent .category").removeClass("fixed")
            }

            QA.inWhere();
        })
    },

    inWhere: function () {
        var windowHeight = $(window).height();
        var anchors = document.querySelectorAll(".QAContent .category ul li");

        $(".QAContent .tableContent .type").each(function () {
            var offsetTop = this.getBoundingClientRect().top
            var offsetBottom = this.getBoundingClientRect().top + $(this).innerHeight()
            var i = $(this).index()
            var range = windowHeight * 1 / 2
            if($(window).scrollTop()<100){
                $(anchors[0]).addClass("active").siblings().removeClass("active");
                if ($(window).width() < 701) {
                    $(".QAContent .category ul").slick('slickGoTo', 0);
                }
            }
            else if (offsetTop < range && offsetBottom > range && notscrolling) {
                $(anchors[i]).addClass("active").siblings().removeClass("active");
                if ($(window).width() < 701) {
                    $(".QAContent .category ul").slick('slickGoTo', i);
                }
            }
        })
    },

    categoryLi: function () {
        var targets = document.querySelectorAll(".QAContent .tableContent .type");
        $(".QAContent .category ul li").each(function () {
            var i = $(this).index()
            var delay = i * 0.2 + 0.4 + "s"
            $(this).css("animation-delay", delay)
            $(this).click(function () {
                var i = $(this).index()
                var point = $(targets[i]).offset().top - $("header .content").innerHeight() - 50
                notscrolling = false
                $("html,body").animate({
                    scrollTop: point
                }, {
                    duration: 1500,
                    easing: "easeOutCubic",
                    complete: function () {
                        notscrolling = true
                        QA.inWhere();
                    }
                });
            });
        })
    },

    categoryOverfloat: function () {
        if ($(".QAContent .category ul li").length > 0 && $(window).width() > 700) {
            var container = document.querySelector('.QAContent .category ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        } else if ($(window).width() < 701) {
            $(".QAContent .category ul").slick({
                speed: 600,
                infinite: false,
                centerMode: true,
                variableWidth: true
            });
        }
    },

    all: function () {
        QA.countUp();
        QA.clickQA();
        QA.categoryFixed();
        QA.categoryLi();
        QA.categoryOverfloat();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               最新消息             //
///////////////////////////////////////
var news = {
    masonry: function () {
        var small = $(".masonryBox ul li.small")

        for (var i = 0; i < small.length; i++) {
            if (i % 2 == 1 && i !== 0 && $(window).width() < 961) {
                $(small[i]).insertAfter(small[(i - 1)])
            }
        }

        $('.masonryBox ul').masonry({
            itemSelector: '.masonryBox ul li',
            // use element for option
            columnWidth: '.grid-sizer',
            percentPosition: true,
        });
    },

    wordAnimation: function () {
        wordAnimation(".index ._title p", 0.2, 0.05);
    },

    categoryFixed: function () {
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop()
            var top = $(".newsContent").offset().top + $(".newsContent .category").height() - $("header .content").innerHeight()
            var bottom = $(".newsContent").offset().top + $(".newsContent").innerHeight() - $(".newsContent .category").innerHeight()
            if (scrollTop >= bottom) {
                $(".newsContent .category").addClass("bottom")
            } else {
                $(".newsContent .category").removeClass("bottom")
            }
            if (scrollTop >= top) {
                $(".newsContent .category").addClass("fixed")
            } else {
                $(".newsContent .category").removeClass("fixed")
            }
        });
    },

    categoryLi: function () {
        $(".newsContent .category ul li").each(function () {
            var i = $(this).index()
            var delay = i * 0.2 + 0.4 + "s"
            $(this).css("animation-delay", delay)
        });
    },

    // 字數限制
    wordsLimit: function () {
        wordlatest(90, ".type1 .textOnly ._text p,.type1 .hasImg ._text p");
        wordlatest(65, ".type2 .hasImg ._text p");
        wordlatest(75, ".type2 .textOnly ._text p");
    },

    ajaxClick:function() {
        $(".category select").change(function () {
            ajax($(this).val())
        });
        $(".category ul li").each(function () {
            $(this).click(function () {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active").siblings().removeClass("active")
                    ajax($(this).attr("data-src"))
                }
            });
        });


        function ajax(dataSrc){
            var src =  dataSrc
            // 滑動到頁面最上方

            var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
            $("html,body").animate({
                scrollTop: 0
            }, time, 'easeOutCubic');

            // 滑動同時加入移除動畫
            $(".ajaxBox .box").addClass("out")


            setTimeout(function () {
                $.ajax({
                    // 載入資料
                        url: src,
                    })
                    .done(function (data) {
                        // 移除原本的內容
                        $(".ajaxBox .box").remove()
                        // 將資料塞入結構
                        $(".ajaxBox").html(data);
                        // 重新啟動入場動畫
                        _Blazy.newsW();
                        _waypoint.newsW();
                        news.wordsLimit();
                        // 啟動內頁燈箱
                        detailLibox.open_click();
                        setTimeout(function(){
                            _Blazy.newsW();
                        },100)
                    });
            }, 1000)
        }
    },

    all: function () {
        news.masonry();
        news.wordAnimation();
        if ($("body").hasClass("detail")) {
            news.categoryFixed();
            news.categoryLi();
            news.wordsLimit();
            news.ajaxClick();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             branch                //
///////////////////////////////////////
var anchorClickTarget

var branch = {
    goTopChangColor: function () {
        $(window).scroll(function () {
            var scrollBottom = $(window).scrollTop() + $(window).height() - 40
            if ($(window).width() < 901) {
                scrollBottom = $(window).scrollTop() + $(window).height() - 20
            }
            var brandsTop = $("article.about").offset().top
            var brandsBottom = brandsTop + $("article.about").innerHeight() + ($("footer .goTop").innerHeight() / 2)
            if (scrollBottom >= brandsTop && scrollBottom < brandsBottom) {
                $("footer .goTop").addClass("white");
            } else if (scrollBottom >= brandsBottom) {
                $("footer .goTop").removeClass("white");
            } else {
                $("footer .goTop").removeClass("white");
            }
        });
    },

    changLazyType: function () {
        if ($(window).width() > 900) {
            $(".about .assurance .content ul li figure img").each(function () {
                var src = $(this).attr("data-lazy")
                $(this).addClass("b-lazy").attr({
                    "data-src": src,
                    "src": "../../assets/img/blazy_blank.svg"
                });
            })
        }
    },

    anchorClick: function () {

        $("main .banner ._text .anchor ul li").click(function () {
            var i = $(this).index() + 1
            var point = $("main article").eq(i).offset().top - $("header .content").innerHeight()
            anchorClickTarget = i
            $("html,body").animate({
                scrollTop: point
            }, 1000, 'easeOutCubic');
        });
    },

    slickLibox: function () {
        $("main .assurance .content ul li.zoom img").each(function () {
            $(this).click(function () {
                // 被點選的物件
                var element = $(this)
                var ele = this
                // 圖片路徑
                var src = $(ele).attr("src")
                // 結構
                $("body").append('<artcile class="zoomLibox"><img src="' + src + '"></article>');

                // scrollbar固定
                if ($(window).width() > 1024) {
                    $("body").getNiceScroll().remove();
                    $("body").css("overflow-y", "hidden")
                } else {
                    $("body").css("overflow-y", "hidden")
                }

                $(".zoomLibox").click(function () {
                    $(this).addClass("close");
                    setTimeout(function () {
                        // scrollbar釋放
                        if ($(window).width() > 1024) {
                            bodyscrollbar();
                        } else {
                            $("body").css("overflow-y", "visible");
                        }
                        $(".zoomLibox").remove()
                    }, 400);
                });
            });
        });
    },

    wordlatest:function(){
        wordlatest(115,"#branch.overview main .content .rows .row ._text p")
    },

    all: function () {
        if ($("body").hasClass("index")) {
            branch.goTopChangColor();
            splitInTwo(850, 0, 40, ".product .content .box", ".product .content");
        }
        if ($("body").hasClass("locationDetail")) {
            storeHold.all();
        }
        if ($("body").hasClass("about")) {
            branch.anchorClick();
            branch.slickLibox();
            branch.changLazyType();
        }
        if ($("body").hasClass("overview")) {
            branch.wordlatest()
        }
    }
}

/***************************************************************************************************************************/
///////////////////////////////////////
//            storeHold              //
///////////////////////////////////////

var storeHold = {
    locationResult: function () {
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop()
            if (scrollTop >= 10) {
                $(".locationDetail .banner,.detail .banner").addClass("Up")

            } else {
                $(".locationDetail .banner,.detail .banner").removeClass("Up")
            }
        });
    },

    slickLibox: function () {
        $(".result .list ul li .buttons button").each(function () {
            $(this).click(function () {
                var src = $(this).attr("data-src");
                $("body").append("<article class='slickLibox'></article>")
                $.ajax({
                        // 載入資料
                        url: src,
                    })
                    .done(function (data) {
                        // 將資料塞入結構
                        $(".slickLibox").html(data)
                        $(".slickLibox").addClass("open")
                        $(".slickLibox .liboxClose").click(function () {
                            $(".slickLibox").removeClass("open").addClass("close")
                            setTimeout(function () {
                                $(".slickLibox").remove();
                            }, 1000)
                        });

                        $(".slickLibox ._slick ul").slick({
                            speed: 800,
                            prevArrow: ".slickLibox ._slick .icon-triangle_left",
                            nextArrow: ".slickLibox ._slick .icon-triangle_right",
                            responsive: [{
                                breakpoint: 1025,
                                settings: {
                                    arrows: false,
                                    autoplay: true,
                                    autoplaySpeed: 5000,
                                    dots: true
                                }
                            }]
                        });
                    });
            });
        });
    },
    all: function () {
        storeHold.locationResult();
        storeHold.slickLibox();
        _waypoint.eachWaypoiny(".result .list ul li", "80%");
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             product               //
///////////////////////////////////////

var product = {

    indexInput: function () {
        $("main input[type='text']").each(function () {
            $(this).on("keypress", function () {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    $(this).closest("form").find("button").click()
                }
            })
            if (mobile()) {
                var RWDplaceholder = $(this).attr("data-RWDplaceholder")
                $(this).attr("placeholder", RWDplaceholder)
            }
        });
    },

    masonry: function () {
        if ($(".series .collection .content").length !== 0) {
            $('.series .collection .content').masonry({
                itemSelector: '.collection .content .box',
                columnWidth: '.collection .content .grid-sizer',
                transitionDuration: 0
            });
        }

        if ($(".detail .photographs .masonry").length !== 0) {
            $('.detail .photographs .masonry').masonry({
                itemSelector: '.detail .photographs .masonry .box',
                columnWidth: '.detail .photographs .masonry .grid-sizer',
                fitWidth: true,
            });
        }
    },

    masonryAutoFit: function () {
        $('.photographs .masonry .box figure').each(function () {
            var imgWidth = $(this).find("img").width();
            var imgHeight = $(this).find("img").height();
            var figureWidth = $(this).width();
            var figureHeight = $(this).height();
            if (imgWidth < figureWidth) {
                $(this).closest(".box").addClass("widthNot")
            } else if (imgHeight < figureHeight) {
                $(this).closest(".box").addClass("heightNot")
            }
        })
    },

    perfectScrollbar: function () {
        if ($(".banner .breadcrumb ul li").length > 0 && mobile()) {
            var container = document.querySelector('.banner .breadcrumb ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }

        if ($(".series .banner .anchor ul li").length > 0 && mobile()) {
            var container = document.querySelector('.series .banner .anchor ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }

        if ($(".detail .banner .anchor ul li").length > 0 && mobile()) {
            var container = document.querySelector('.detail .banner .anchor ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    wordAnimation: function () {
        // wordAnimation(".series .banner ._title h2", 0.2, 0.05);
        wordAnimation(".series .introduction ._title h5", 0, 0.05);
        wordAnimation(".series .introduction h6", 0.2, 0.02);
        // wordAnimation(".detail .banner ._img ._text .inf h2", 0.2, 0.05);

        wordAnimation(".detail article:not(.space,.recommend) section._title h5", 0, 0.05);
        wordAnimation(".detail article:not(.space,.recommend) section._title h6", 0.2, 0.02);

        wordAnimation(".detail .introduction h6", 0.2, 0.02);
    },

    anchorClick: function () {
        $(".banner .anchor ul li").click(function () {
            var i = $(this).index() + 1
            var top = $("main article").eq(i).offset().top
            // 移動距離佔總體的%
            var lengthPercent = ($("main article").eq(i).offset().top - $(window).scrollTop()) / $("body").height()
            var time = lengthPercent.toFixed(2) * 1500 + 500
            anchorClickTarget = i
            $("html,body").animate({
                scrollTop: top
            }, time, 'easeOutCubic')
        });
    },

    wordsLimit:function(){
        wordlatest(70, ".sort main .content ul li ._text p");
    },

    borderBox: function () {
        $(window).resize(function () {
            product.borderBox();
        });

        $(".banner .borderBox").each(function () {
            // 容器寬度
            var boxWidth = $(this).width()
            // 寬參數
            var widthValue = parseInt($(this).attr("data-width"))
            // 高參數
            var heightValue = parseInt($(this).attr("data-height"))

            // 計算寬 (1cm=1%)
            var width = Math.ceil((widthValue / 100) * boxWidth)

            // 計算高
            var height = (width * heightValue / widthValue)
            $(this).find(".borderSpan").css({
                "width": width + "px",
                "height": height + "px"
            })
        });
    },

    collageHover: function () {
        var firstSrc = $(".collage .content ._text ul li").eq(0).find("._img img").attr("src")
        var firstDataLargeImg = $(".collage .content ._text ul li").eq(0).find("._img img").attr("data-largeimg")
        $(".collage .content figure img").attr("src", firstSrc);
        $(".collage .content figure img").attr("data-largeimg", firstDataLargeImg);
        $(".collage .content ._text ul li").each(function () {
            $(this).mouseover(function () {
                $(this).addClass("active").siblings().removeClass("active");
                var src = $(this).find("._img img").attr("src");
                var dataLargeImg = $(this).find("._img img").attr("data-largeimg");
                if (src !== $(".collage .content figure img").attr("src")) {
                    $(".collage .content figure").append("<img src='" + src + "'data-largeimg='" + dataLargeImg + "'  onclick='zoomUp(this)' />")
                    $(".collage .content figure img").eq(0).addClass("fadeOut");
                    setTimeout(function () {
                        $(".collage .content figure img").eq(0).remove()
                    }, 400)

                }
            });
        });
    },

    specificationFixed: function () {
        var windowHeight = $(window).height()
        var height = $("main .introduction .content .Specification .box").innerHeight()
        var width = $("main .introduction .content .Specification").width()
        $("main .introduction .content .Specification").css("min-height",(height+"px"))
        $("main .introduction .content .Specification .box").css("max-width",( width+"px"))
        var pointTop = $(".detail main .introduction .content").offset().top - parseInt($(".detail main .introduction .content").css("margin-top")) - $("header .content").innerHeight()
        var top = parseInt($(".detail main .introduction .content").css("margin-top")) + $("header .content").innerHeight()
        var left = $("main .introduction .content .Specification").offset().left

        $(window).resize(function(){
            windowHeight = $(window).height()
            height = $("main .introduction .content .Specification .box").innerHeight()
            $("main .introduction .content .Specification").css("min-height",(height+"px"))
            pointTop = $(".detail main .introduction .content").offset().top - parseInt($(".detail main .introduction .content").css("margin-top")) - $("header .content").innerHeight()
            top = parseInt($(".detail main .introduction .content").css("margin-top")) + $("header .content").innerHeight()
            left = $("main .introduction .content .Specification").offset().left
        })

        $(window).scroll(function () {
            
            var pointBottom = $(".detail main .introduction .content").offset().top + $(".detail main .introduction .content").innerHeight() + windowHeight - top - height 
            var scrolTop = $(window).scrollTop()

            if (scrolTop > pointTop) {
                $("main .introduction .content .Specification .box").addClass("fixed").css({
                    "left": left,
                    "top": top
                })
            } else {
                $("main .introduction .content .Specification .box").removeClass("fixed").css({
                    "left": "0px",
                    "top": "0px"
                })
            }

            if ((scrolTop + windowHeight) > pointBottom) {
                $("main .introduction .content .Specification .box").addClass("bottom")
            }else{
                $("main .introduction .content .Specification .box").removeClass("bottom")
            }
        })
    },

    zoomUp:function (ele){
        // 被點選的物件
        var element = $(ele)
        // 點選物件與螢幕上方的距離
        var top = ele.parentNode.getBoundingClientRect().top
        // 點選物件與螢幕左邊的距離
        var left = ele.parentNode.getBoundingClientRect().left
        // 被點選物件的寬
        var width = $(ele).parent().width() + "px"
        // 被點選物件的高
        var height = $(ele).parent().height() + "px"
        // 圖片路徑
        var src = $(ele).attr("src")
        // 結構
        $("body").append('<artcile class="zoomLibox"><div class="liboxClose"><span></span></div><section><img src="'+ src+'"></section></article>');
        
        var scrollTop = $(window).scrollTop()
        
        // 電腦版
        if(!mobile()){
            // scrollbar固定
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden");

            // 加入相對位置參數
            $(".zoomLibox section").css({ 
                "top": top, 
                "left": left ,
                "width": width,
                "height": height
            });

            setTimeout(function() {
                // 將原物件變透明
                element.css({
                    "opacity":"0",
                    "animation":"none",
                })
                // 將新增的物件移到中間
                $(".zoomLibox").addClass("center");
            }, 200)

            // 放大套件
            setTimeout(function() {
                $(".zoomLibox img").ezPlus({
                    scrollZoom: true,
                    zoomWindowOffsetX: 15,
                    minZoomLevel: 2,
                    zoomWindowHeight: $(window).width()*0.2,
                    zoomWindowWidth: $(window).width()*0.2,
                });
            },700)

            $(".zoomLibox").click(function(){
                close()
            })
        }
        // 行動裝置
        else{
            
            // scrollbar固定
            $("body").css({
                "overflow-y":"hidden",
                "position":"fixed",
                "width":"100vw",
                "top": "0",
                "left":"0"
            })

            $(".zoomLibox").addClass("center");
            
            // 放大套件
            if(Browser.name !== "safari"){
                var oldPositionX = 0
                var oldPositionY = 0
                var translateX = 0
                var translateY = 0
                var scale = 1
                var tracks = []

                $(".zoomLibox img").on('touchstart', function(e) {
                    oldPositionX = e.originalEvent.touches[0].clientX
                    oldPositionY = e.originalEvent.touches[0].clientY
                    translateX = parseInt($(this).closest("section").css("left"))
                    translateY = parseInt($(this).closest("section").css("top"))
                });

                $(".zoomLibox img").on('touchmove', function(e) {
                    var $this = this

                    var touch1x = e.originalEvent.touches[0].clientX,
                        touch1y = e.originalEvent.touches[0].clientY

                    if (e.originalEvent.touches.length === 1){
                        var left = touch1x - oldPositionX + translateX
                        var top = touch1y - oldPositionY + translateY
                        $(this).closest("section").css({
                            "top":(top+"px"),
                            "left":(left+"px")
                        })
                    }
                    else if (e.originalEvent.touches.length === 2){
                        touch2x = e.originalEvent.touches[1].clientX
                        touch2y = e.originalEvent.touches[1].clientY
                        //計算兩者之間的距離
                        var x = touch1x - touch2x
                        var y = touch1y - touch2y
                        var z = Math.sqrt((x * x) + (y * y))
                        var z0 = tracks.pop()
                        tracks.push(z)
                        if (z > z0 ) {
                            scale = scale*1.02
                        } else if (z < z0 ) {
                            scale = scale*0.98
                        }
                        $(this).css("transform",("scale("+scale+")"))
                    }
                    return 
                })
            }
            $(".zoomLibox .liboxClose").click(function(){
                close();
            })
        }

        function close(){
            if(!mobile()){
                $(".zoomLibox").addClass("close").removeClass("center");
                $(".ZoomContainer").remove()
                // scrollbar釋放
                bodyscrollbar();
            }else{
                $(".zoomLibox").addClass("close");
                // scrollbar釋放
                $("body").css({
                    "overflow-y":"visible",
                    "position":"static",
                    "width":"auto",
                    "top": "auto",
                    "left":"auto"
                });

                $("html,body").animate({
                    scrollTop:  scrollTop
                },0);

                element.css({
                    "opacity":"1",
                });
            }
        
            setTimeout(function(){
                // 將原物件顯示
                element.css({
                    "opacity":"1",
                });
                $(".zoomLibox").remove()
            },400)
        }
    },

    classification:function (target){
        $("body").append("<article class='classification'></article>")
        
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }

        var src= $(target).attr("data-src")

        $.ajax({
            // 載入資料
            url: src,
        })
        .done(function (data) {
            // 將資料塞入結構
            $(".classification").html(data);
            $(".classification .liboxClose").click(function(){
                close();
            });
            sectionHeigth();
        });
        
        var sectionHeigth = function(){
            var liboxHeight = parseInt($(".classification .box").css("padding-top"))+parseInt($(".classification .box").css("padding-bottom"))
            $(".classification .box>*:not(.liboxClose)").each(function(){
                var height = $(this).outerHeight(true)
                liboxHeight += height
            })

            if($(window).innerHeight()<liboxHeight ){
                $(".classification .box .liboxClose").addClass("fixed")
            }else{
                $(".classification .box .liboxClose").removeClass("fixed")
            }

            $(window).resize(function(){
                sectionHeigth();
            });
        };

        $(document).click(function(e){
            if($(e.target).hasClass("classification")){
                close();
            }
        })

        function close(){
            $(".classification").addClass("close");
            if ($(window).width() > 1024) {
                bodyscrollbar();
            } else {
                $("body").css("overflow-y", "visible");
            }
            setTimeout(function () {
                $(".classification").remove()
            }, 400)
        }
    },

    liboxajax:function (target){
        var src = $(target).attr("data-src");
        $("body").append("<article class='libox'></article>");
        $.ajax({
                // 載入資料
                url: src,
            })
            .done(function (data) {
                $(".libox").html(data);
                    libox.all()
            });
    },

    anchor:function (target){
        $(target).addClass("active").siblings().removeClass("active")
        _Blazy.projectW();
        _waypoint.projectW();
    },

    all: function () {
        product.perfectScrollbar();
        product.masonry();
        product.wordAnimation();
        product.anchorClick();
        product.wordsLimit();
        if ($("body").hasClass("index")) {
            product.indexInput();
        }
        if ($("body").hasClass("collection")) {
            splitInTwo(850, 70, 0, ".boxs .box", ".boxs")
        }
        if ($("body").hasClass("detail")) {
            product.borderBox();
            product.collageHover();
            photoLibox.open_click();
            product.specificationFixed();
            product.liboxajax();
        }
    }
}

var photoLibox = {

    open_click: function () {
        $(".detail .photographs .masonry .box").click(function () {
            var src = $(this).attr("data-src")
            var i = $(this).index() - 1
            photoLibox.open(src, i);
        });
    },

    open: function (src, i) {
        $("body").append("<article class='photoLibox'></article>")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        $.ajax({
                // 載入資料
                url: src,
            })
            .done(function (data) {
                // 將資料塞入結構
                $(".photoLibox").html(data);
                $(".photoLibox").addClass("open");
                photoLibox.all(i);
            });
    },

    close_click: function () {
        $(".photoLibox .liboxClose").click(function () {
            photoLibox.close();
        });
    },

    close: function () {
        $(".photoLibox").removeClass("open").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".photoLibox").remove()
        }, 1000)
    },

    slick: function (i) {
        $(".photoLibox .photoSlick ul").slick({
            prevArrow: ".photoLibox .photoSlick .icon-triangle_left",
            nextArrow: ".photoLibox .photoSlick .icon-triangle_right",
            speed: 600,
            asNavFor: ".photoLibox .infSlick ul",
        });

        $(".photoLibox .infSlick ul").slick({
            speed: 600,
            asNavFor: '.photoLibox .photoSlick ul',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    swipe: false
                }
            }]
        });

        $('.photoLibox .photoSlick ul').slick('slickGoTo', i);
    },

    all: function (i) {
        photoLibox.close_click();
        photoLibox.slick(i);
    }
}

var libox={
    open:function(){
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden");
        }else{
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click:function(){
        $(".liboxClose").click(function(){
            libox.close();
        });

        $(document).click(function(e){
            if($(e.target).hasClass("libox")){
                libox.close();
            }
        });
    },

    close:function(){
        $(".libox").addClass("close")
        if ($(window).width() > 1024) {
            bodyscrollbar();
        }
        else{
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function(){
            $(".libox").remove()
        },900)
    },

    sectionHeigth:function(){
        var liboxHeight = parseInt($(".libox section").css("padding-top"))+parseInt($(".libox section").css("padding-bottom"))
        $(".libox section>*:not(.liboxClose)").each(function(){
            var height = $(this).outerHeight(true)
            liboxHeight += height
        })

        if($(window).innerHeight()<liboxHeight ){
            $(".libox section .liboxClose").addClass("fixed")
        }else{
            $(".libox section .liboxClose").removeClass("fixed")
        }

        $(window).resize(function(){
            libox.sectionHeigth();
        });
    },

    all:function(){
        libox.open();
        libox.close_click();
        libox.sectionHeigth();
    }
}



/***************************************************************************************************************************/
/***************************************************************************************************************************/
///////////////////////////////////////
//              space                //
///////////////////////////////////////

var space = {
    perfectScrollbar: function () {
        if ($(".index .banner .anchor ul li").length > 0 && mobile()) {
            var container = document.querySelector('.index .banner .anchor ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    anchorClick: function () {
        $(".index .banner .anchor ul li").each(function () {
            $(this).off().click(function () {
                $(".box").removeClass("active");
                var title = $(this).find("p").text()
                var targets = document.querySelectorAll(".index .content .box .name")
                for (var i = 0; i < targets.length; i++) {
                    if ($(targets[i]).text() == title) {
                        var top = $(targets[i]).closest(".box").offset().top - $("header .content").innerHeight() - 10
                        // 移動距離佔總體的%
                        var lengthPercent = (top - $(window).scrollTop()) / $("body").height()
                        var time = lengthPercent.toFixed(2) * 1500 + 500
                        $("html,body").animate({
                            scrollTop: top
                        }, {
                            duration: time,
                            easing: 'easeOutCubic',
                            start: function () {
                                $(".boxs").removeClass("active");
                                $(".boxs").addClass("active");
                            },
                            complete: function () {
                                if (!mobile()) {
                                    $(".boxs").addClass("active");
                                    $(targets[i]).closest(".box").addClass("active");
                                }
                                $(targets[i]).closest(".box").mouseover(function () {
                                    if ($(this).hasClass("active")) {
                                        $(this).removeClass("active")
                                        $(this).closest(".boxs").removeClass("active")
                                    }
                                });
                            }
                        })
                        break;
                    }
                }
            });
        });
    },

    masonry: function () {
        if ($(".detail .collection .content").length !== 0) {
            $('.detail .collection .content').masonry({
                itemSelector: '.collection .content .box',
                columnWidth: '.collection .content .grid-sizer',
                transitionDuration: 0
            });
        }
    },

    // 自訂位置
    slickAnchorPonit: function () {
        //總寬
        var totalWidth = parseInt($(".detail main .banner ._slick ul li").innerWidth())
        //總高
        var totalHeight = parseInt($(".detail main .banner ._slick ul li").innerHeight())

        if (!mobile()) {
            $(".detail main .banner ._slick ul li .anchorPoint").each(function () {

                // 寬切割成幾分
                var dataWidth = parseInt($(this).closest("li").attr("data-width"))
                // 寬
                var width = totalWidth / dataWidth

                // 高切割成幾分
                var dataHeight = parseInt($(this).closest("li").attr("data-height"))
                // 高
                var height = totalHeight / dataHeight

                // 選擇位置
                var className = $(this).attr("class")
                var number = parseInt(className.replace(/anchorPoint/, "").replace(/ /, ""))

                // X軸
                var x = (number % dataWidth) - 1
                x = (x < 0) ? (dataWidth - 1) : x
                var left = width * x

                // Y軸
                var y = number / dataWidth
                y = (y % 1 === 0) ? (y - 1) : Math.floor(y)
                var top = height * y

                $(this).css({
                    "top": top,
                    "left": left,
                    "width": width,
                    "height": height
                })

            });
        }
    },

    slickAnchorClick: function () {
        var targets = document.querySelectorAll(".collection .content .box:not(._title)")
        $(".banner ._slick ul li .anchorPoint div").each(function () {
            $(this).closest(".anchorPoint").mouseover(function () {
                $(this).css("color", "#fff");
                $(this).siblings().css("opacity", ".3")
            });
            $(this).closest(".anchorPoint").mouseout(function () {
                $(this).css("color", "");
                $(this).siblings().css("opacity", "1")
            });
            $(this).off().click(function () {
                var number = $(this).find(".numb").text()
                for (var i = 0; i < targets.length; i++) {
                    if (number == $(targets[i]).find(".number").text()) {
                        var point = $(targets[i]).offset().top + $(targets[i]).innerHeight() / 2 - $(window).height() / 2
                        // 移動距離佔總體的%
                        var lengthPercent = (point - $(window).scrollTop()) / $("body").height()
                        var time = lengthPercent.toFixed(2) * 1000 + 1000

                        $("html,body").animate({
                            scrollTop: point
                        }, time, 'easeOutCubic');
                        break;
                    }
                }
            })
        });
    },

    all: function () {
        space.perfectScrollbar();
        space.anchorClick();
        if ($("body").hasClass("index")) {
            splitInTwo(700, 110, 0, "main .boxs .box", "main .boxs")
        }
        if ($("body").hasClass("detail")) {
            // space.slickAnchorPonit();
            // space.slickAnchorClick();
            space.masonry();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              style                //
///////////////////////////////////////

var style = {
    perfectScrollbar: function () {
        if ($(".index .banner .anchor ul li").length > 0 && mobile()) {
            var container = document.querySelector('.index .banner .anchor ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    masonry: function () {
        if ($(".detail .collection .content").length !== 0) {
            $('.detail .collection .content').masonry({
                itemSelector: '.collection .content .box',
                columnWidth: '.collection .content .grid-sizer',
                transitionDuration: 0
            });
        }
    },

    anchorClick: function () {
        var windowHeight = $(window).height()
        var headerHeight = $("header .content").innerHeight()
        $(".banner .anchor ul li").each(function () {
            $(this).click(function () {
                var i = $(this).index();
                var top = $("main .content ul li").eq(i).offset().top - (windowHeight - headerHeight) / 2 + ($("main .content ul li").eq(i).innerHeight() / 2) - headerHeight
                if ($("main .content ul li").eq(i).innerHeight() > windowHeight) {
                    top = $("main .content ul li").eq(i).offset().top
                }
                $("html,body").animate({
                    scrollTop: top
                }, 1000, 'easeOutCubic');
            });
        });
    },

    all: function () {
        style.perfectScrollbar();
        style.masonry();
        style.anchorClick();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              join                 //
///////////////////////////////////////

var join = {

    anchorClick: function () {
        $(".banner .overview ul li").each(function () {
            $(this).click(function () {
                var i = $(this).index();
                var top = $("main .content .boxs .box").eq(i).offset().top - $("header .content").innerHeight() - 20
                $("html,body").animate({
                    scrollTop: top
                }, 1000, 'easeOutCubic');
            });
        });
    },

    all: function () {
        joinDetail.open_click();
        join.anchorClick();
    }
}

var joinDetail = {
    open_click: function () {
        $(".openDetail").click(function () {
            var src = $(this).attr("data-src")
            var datapush = $(this).attr("data-push"); //
            joinDetail.open(src, datapush)
        });
    },

    open: function (src, datapush) {
        $("body").append("<article class='joinDetail'></article")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        $.ajax({
                // 載入資料
                url: src,
            })
            .done(function (data) {
                // 將資料塞入結構
                $(".joinDetail").html(data);
                $(".joinDetail").addClass("open");
                joinDetail.all();
                if (!datapush) {
                    return
                } else {
                    var temp = $('.base-url').val(); //                
                    history.replaceState(null, "", temp + "/Join/" + datapush); //
                }
            });
    },

    close_click: function () {
        $(".joinDetail .liboxClose").click(function () {
            joinDetail.close();
        });
        $(document).click(function (e) {
            if ($(e.target).hasClass("joinDetail")) {
                joinDetail.close();
            }
        });
    },

    close: function () {
        var check = $('.share').attr("data-push"); //
        $(".joinDetail").removeClass("open").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".joinDetail").remove();
            if (!check) {} else {
                var temp = $('.base-url').val(); //                
                history.replaceState(null, "", temp + "/Join"); //                
            }
        }, 1000)
    },

    scrollToTop: function () {
        $(".joinDetail .toTop").click(function () {
            $(".joinDetail").animate({
                scrollTop: 0
            }, 800)
        });
    },

    scrollbar: function () {
        var color = ($(window).width() > 1600) ? "#fff" : "#424242"
        $(".joinDetail").niceScroll({
            zindex: "3",
            scrollspeed: 40,
            cursorborder: "none",
            cursorcolor: color,
            zindex: "11",
            cursorwidth: "4px",
            nativeparentscrolling: false,
            horizrailenabled: false,
            railpadding: {
                top: 0,
                right: 1,
                left: 0,
                bottom: 0
            },
        });
    },

    all: function () {
        joinDetail.close_click();
        joinDetail.scrollbar();
        joinDetail.scrollToTop();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           catalogue 型錄          //
///////////////////////////////////////

var catalogue = {

    categoryFixed: function () {
        $(window).scroll(function () {
            var top = parseInt($(".index main").css("padding-top")) + $(".index main .category").height() - $("header .content").innerHeight()
            var bottom = $(".index main").offset().top + $(".index main").innerHeight() - $(".index main .category").innerHeight()
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= bottom) {
                $(".index main .category").addClass("bottom")
            } else {
                $(".index main .category").removeClass("bottom")
            }
            if (scrollTop >= top) {
                $(".index main .category").addClass("fixed")
            } else {
                $(".index main .category").removeClass("fixed")
            }
            catalogue.inWhere()
        });
    },

    inWhere: function () {
        var anchors = document.querySelectorAll(".index main .category ul li");
        var windowHeight = $(window).height();
        $(".index main article:not(.category)").each(function () {
            var offsetTop = this.getBoundingClientRect().top
            var offsetBottom = this.getBoundingClientRect().top + $(this).innerHeight()
            var i = $(this).index() - 2
            
            var range = windowHeight * 3 / 5
            if (offsetTop < range && offsetBottom > range && notscrolling) {
                $(anchors[i]).addClass("active").siblings().removeClass("active");
                if ($(window).width() < 701) {
                    $(".index main .category ul").slick('slickGoTo', i);
                }
            }
        })
    },

    categoryOverfloat: function () {
        if ($(".index main .category ul li").length > 0 && $(window).width() > 700) {
            var container = document.querySelector('.index main .category ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        } else if ($(window).width() < 701) {
            $(".index main .category ul").slick({
                speed: 600,
                infinite: false,
                centerMode: true,
                variableWidth: true
            });
        }
    },

    categoryLi: function () {
        var targets = document.querySelectorAll(".index main article:not(.category)")

        $(".index main .category ul li").each(function () {
            var i = $(this).index()
            var delay = i * 0.2 + 0.4 + "s"
            $(this).css("animation-delay", delay);

            $(this).click(function () {
                var i = $(this).index()
                var point = $(targets[i]).offset().top - $("header .content").innerHeight() - 50
                notscrolling = false
                anchorClickTarget = i + 1

                $("section.background").css("transition-delay", '1s');
                $("html,body").animate({
                    scrollTop: point,
                }, {
                    duration: 1500,
                    easing: 'easeOutCubic',
                    complete: function () {
                        notscrolling = true
                        catalogue.inWhere();
                        $("section.background").css("transition-delay", '0s');
                    }
                });
            });
        });
    },

    all: function () {
        catalogue.categoryFixed();
        catalogue.categoryLi();
        catalogue.categoryOverfloat();
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              contact              //
///////////////////////////////////////

var contact = {

    tableReset: function () {
        $(".dropDown").each(function () {
            var $this = $(this)
            var resetWords = $(this).find(".selectMenu p").text()
            $(this).closest("form").find("button[type='reset']").click(function () {
                $this.find(".selectMenu p").text(resetWords);
            });
        });
    },

    autoFocus: function () {
        $("input,textarea").each(function () {
            $(this).closest(".box").click(function () {
                $(this).find("input,textarea").focus()
            });
        });
    },

    all: function () {
        contact.tableReset();
        contact.autoFocus();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              about                //
///////////////////////////////////////
var about = {

    random: function () {
        $(".index .openAboutDetail").each(function (index, element) {
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
        });
    },

    all: function () {
        about.random();
    }
}

var aboutDetail = {

    open_click: function () {
        $("main .openAboutDetail").each(function () {
            $(this).off().click(function () {
                var src = $(this).attr("data-src");
                var milestonesAndAwards = parseInt($(this).attr("data-area"))
                var datapush = $(this).attr("data-push"); //
                var branch = $('.branch').val(); //
                aboutDetail.open(src, milestonesAndAwards, datapush, branch); //
            });
        });
    },

    open: function (src, milestonesAndAwards, datapush) {
        $("body").append("<article class='aboutDetail'></article>");

        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        $.ajax({
            url: src
        }).done(function (data) {
            $(".aboutDetail").html(data);
            $(".aboutDetail").addClass("open")
            if (milestonesAndAwards !== "") {
                $(".aboutDetail .showBox").eq(milestonesAndAwards).addClass("active")
                $(".aboutDetail .liboxBanner .units ul li").eq(milestonesAndAwards).addClass("active");
                $(".liboxBanner .breadcrumb ul li").eq((milestonesAndAwards + 1)).siblings().css("display", "none");
            }
            if (!datapush) {} else {
                var temp = $('.base-url').val(); //
                var branch = $('.branch').val(); //
                if (branch == "overview") {
                    history.replaceState(null, "", temp + "/AboutUs/" + datapush); //
                } else {
                    history.replaceState(null, "", temp + "/About/" + datapush);
                }
            }
            aboutDetail.all();
        })
    },

    close_click: function () {

        $(".aboutDetail .liboxClose").click(function () {
            aboutDetail.close();
        });

        $(".aboutDetail").click(function (e) {
            if ($(e.target).hasClass("aboutDetail")) {
                aboutDetail.close();
            }
        })
    },

    close: function () {
        var check = $('.share').attr("data-push"); //
        var branch = $('.branch').val(); //
        $(".aboutDetail").addClass("close");
        $(".aboutDetail .boxs .box").removeClass("up");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".aboutDetail").remove();
            if (!check) {} else {
                var temp = $('.base-url').val(); //
                if (branch == "overview") {
                    history.replaceState(null, "", temp + "/AboutUs"); //
                } else {
                    history.replaceState(null, "", temp + "/About");
                }
            }
        }, 800)
    },

    scrollBar: function () {
        if (!mobile()) {
            $(".aboutDetail").niceScroll({
                zindex: "3",
                scrollspeed: 100,
                cursorborder: "none",
                cursorwidth: "4px",
                cursorcolor: "#fff",
                zindex: "12",
                preventmultitouchscrolling: false,
                railpadding: {
                    top: 0,
                    right: 1,
                    left: 0,
                    bottom: 0
                },
            });
        }
    },

    waypoint: function () {
        var height = ($(window).width() > 900) ? $(window).height() * .7 : $(window).height() * .75
        if (mobile()) {
            top();
        }

        $(".aboutDetail").scroll(function () {
            top();
        });

        function top() {
            $(".aboutDetail  .boxs .box").each(function () {
                if ((this.getBoundingClientRect().top - height) < 0) {
                    $(this).addClass("up");
                } else {
                    $(this).removeClass("up");
                }
            })
        }

        $(".aboutDetail .row figure,.aboutDetail .row picture").each(function (index, element) {
            $(element).waypoint({
                context: ".aboutDetail",
                handler: function () {
                    $(element).addClass('show');
                    aboutDetail.Blazy();
                    $(".aboutDetail").getNiceScroll().resize();
                },
                offset: "80%",
            });
        });

        $(".aboutDetail .row ._text").each(function (index, element) {
            $(element).waypoint({
                context: ".aboutDetail",
                handler: function () {
                    aboutDetail.Blazy();
                    $(element).addClass('show');
                },
                offset: "80%",
            });
        });
    },

    Blazy: function () {
        var bLazy = new Blazy({
            container: ".aboutDetail",
            offset: 100,
            success: function (ele) {
                $(ele).closest("figure").addClass("in");
                $(ele).closest("picture").addClass("in")
                $(".aboutDetail").getNiceScroll().resize();
                Waypoint.refreshAll();
            }
        });
    },

    unit_click: function () {
        $(".aboutDetail .liboxBanner .units ul li").each(function () {
            $(this).off().click(function () {
                var i = $(this).index()
                var keytitle = $(this).attr("data-key"); //
                if (!$(this).hasClass("active")) {
                    $(".aboutDetail .boxs .box").removeClass("up");
                    $(this).addClass("active").siblings().removeClass("active");
                    $(".aboutDetail").addClass("out");
                    $(".aboutDetail .breadcrumb ul li").eq(i + 1).animate({
                        width: 'toggle'
                    }, 400, 'easeOutCubic');

                    $(".aboutDetail .breadcrumb ul li").eq(i + 1).siblings().each(function () {
                        if ($(this).css("display") == "flex" && $(this).index() !== 0) {
                            $(this).animate({
                                width: 'toggle'
                            }, 400, 'easeOutCubic');
                        }
                    });
                    setTimeout(function () {
                        $(".aboutDetail .showBox").eq(i).addClass("active").siblings().removeClass("active");
                        $(".aboutDetail").removeClass("out");
                        aboutDetail.splitInTwo();
                        if (!keytitle) {} else {
                            $(".share").attr("data-push", keytitle); //
                            var temp = $('.base-url').val(); //
                            history.replaceState(null, "", temp + "/AboutUs/" + keytitle); //
                        }
                    }, 800)
                }
            })
        });
    },

    splitInTwo: function () {
        $(".aboutDetail .showBox.active").each(function () {
            var targets = $(this).find(".boxs .box")
            if ($(window).width() > 900) {
                var area1 = ""
                var area2 = ""
                var area1Height = 0
                var area2Height = 70
                var whitchShort = (area1Height <= area2Height) ? whitchShort = "one" : whitchShort = "two"
                var ele = targets
                for (var i = 0; i < ele.length; i++) {
                    var x = $(ele[i]).index()
                    
                    var html = ele[i].outerHTML
                    if (whitchShort == "one" && $(ele[i]).innerHeight() !== 0) {
                        area1 += html
                        area1Height += $(ele[i]).innerHeight()
                    } else if (whitchShort == "two" && $(ele[i]).innerHeight() !== 0) {
                        area2 += html
                        area2Height += $(ele[i]).innerHeight()
                    }
                    // 看誰比較矮
                    var whitchShort = (area1Height <= area2Height) ? whitchShort = "one" : whitchShort = "two"
                }
                $(this).find(".boxs").find("*").remove()
                $(this).find(".boxs").append("<div class='area'>" + area1 + "</div>")
                $(this).find(".boxs").append("<div class='area'>" + area2 + "</div>")
                // 重新加入waypoint
                _waypoint.eachWaypoiny(targets, "80%");
                
            } else {
                // 加入waypoint
                _waypoint.eachWaypoiny(targets, "80%");
            }
        });
    },

    all: function () {
        branchColor();
        splitInTwo(900, 0, 70, ".aboutDetail .content .boxs .box", ".aboutDetail .content .boxs");
        aboutDetail.splitInTwo();
        aboutDetail.close_click();
        aboutDetail.scrollBar();
        aboutDetail.unit_click();
        aboutDetail.Blazy();
        aboutDetail.waypoint();
    }
}

/***************************************************************************************************************************/
///////////////////////////////////////
//              staff                //
///////////////////////////////////////

var staffLibox = {
    open_click: function () {
        $(".openStaff").each(function () {
            $(this).click(function () {
                staffLibox.open();
            });
        });
    },

    open: function () {
        $(".staffLibox").addClass("open")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        // yuan
        $('.staffLibox').on("keydown",function(event){
            var keyCode = event.keyCode || event.which;
            if(keyCode == "13"){
                event.preventDefault();
                StaffCheck();
            }
        });
        // yuan
    },

    close_click: function () {
        $(".staffLibox section .liboxClose").click(function () {
            staffLibox.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("staffLibox")) {
                staffLibox.close();
            }
        });
    },

    close: function () {
        $(".staffLibox").addClass("close").removeClass("open")
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".staffLibox").removeClass("close")
        }, 400);
    },

    all: function () {
        staffLibox.open_click();
        staffLibox.close_click();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            favorite               //
///////////////////////////////////////
var favorite = {

    count: function () {
        $("main .banner ._title .words b").text($("main .list ul li").length);
    },

    nothing: function () {
        if ($("main .list ul li").length == 0) {
            $(".banner .buttons>.leanbutton,.banner ._title .words").hide()
            $(".banner h5,.banner .buttons .branch").css("display", "flex")
        }

        var height = $(window).height() - $("footer").innerHeight() - $("header .content").innerHeight()
        $(".banner").css("min-height", (height + "px"));

        $(window).resize(function () {
            var height = $(window).height() - $("footer").innerHeight() - $("header .content").innerHeight()
            $(".banner").css("min-height", (height + "px"));
        });
    },

    emailFormOpen_click: function () {
        $(".banner .buttons button.leanbutton").each(function () {
            $(this).click(function () {
                favorite.emailFormOpen();
            });
        });
    },

    emailFormOpen: function () {
        $(".emailForm").addClass("open")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    emailFormClose_click: function () {
        $(".emailForm section .liboxClose").click(function () {
            favorite.emailFormClose();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("emailForm")) {
                favorite.emailFormClose();
            }
        });
    },

    emailFormClose: function () {
        $(".emailForm").addClass("close").removeClass("open")
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".emailForm").removeClass("close")
        }, 800);
    },

    emailFormFocus: function () {
        $(".emailForm form ul li").each(function () {
            $(this).click(function () {
                $(this).find("input").focus()
            })
        });
    },

    printTitle:function(){
        if(Browser.name == "safari"){
            $("#favorite.print").addClass("safari");
        }

        // javascript:window.print();
        // 結構重組
        var ele = document.querySelectorAll("main article>div")
        var recrop = ""
        for(var i =0 ;i < (ele.length/3);i++){
            var a = Number(3*i)
            var b = Number(3*i+1)
            var c = Number(3*i+2)
            var box1 = ele[a].outerHTML
            if(b<ele.length){
                var box2 = ele[b].outerHTML
            }else{
                var box2 =""
            }
            if(c<ele.length){
                var box3 = ele[c].outerHTML
            }else{
                var box3 = ""
            }
            var bigBox = "<div class='bigBox'>"+box1+box2+box3+"</div>"
            recrop += bigBox
        }
        $("main article").html(recrop)

        // 產生canvas
        var bigBox = document.querySelectorAll(".bigBox");
        // 設定pdf
        var doc = new jsPDF("p", "mm", "a4");   
        var imgArray =0
        for(var i=0;i<bigBox.length;i++){
            html2canvas(bigBox[i]).then(function(canvas){
                
                var imgwidth = doc.internal.pageSize.getWidth();
                var imgheight = imgwidth*canvas.height/canvas.width

                var image = canvas.toDataURL();
                doc.addImage(image, 'JPEG', 0, 12.7 ,imgwidth,imgheight);
                imgArray++
                if(imgArray != bigBox.length){
                    // 新增頁面
                    doc.addPage();
                }else{
                    // 下載pdf
                    doc.save('test.pdf');
                }
            })
            
        }

        $("body").css("overflow-y","auto")
    },

    delet:function(target){
        var activateDelet = true
        if (activateDelet) {
            $this = $(target)
            if($(window).width()> 600){
                $this.closest("li").addClass("disappear");
            }else{
                $this.closest("li").slideUp(500)
            }
            activateDelet = false
            if ($("main .list ul li").length == 1) {
                $(".list").slideUp(800)
                $(".banner .buttons>.leanbutton,.banner ._title .words").slideUp(800)
                $(".banner h5,.banner .buttons .branch").slideDown({
                    duration:800,
                    start: function () {
                        $(this).css({
                            display: "flex"
                        })
                    }
                });
                setTimeout(function () {
                    $this.closest("li").remove()
                    favorite.count();
                    $("body").getNiceScroll().resize();
                }, 800)
            } else {
                
                setTimeout(function () {
                    $this.closest("li").remove()
                    Waypoint.refreshAll();
                    favorite.count();
                    $("body").getNiceScroll().resize();
                    $("html,body").animate({
                        scrollTop: ($(window).scrollTop() + 1)
                    }, 0)
                    activateDelet = true
                }, 800);
            }
        }
    },

    all: function () {
        if($("body").hasClass("index")){
            favorite.count();
            favorite.nothing();
            favorite.emailFormOpen_click();
            favorite.emailFormClose_click();
            favorite.emailFormFocus();
        }
        if($("body").hasClass("print")){
            favorite.printTitle();
        }
    }
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              search               //
///////////////////////////////////////

var search = {
    nothing: function () {

        if ($("main .list ul li").length == 0) {
            $(".banner ._title .noMatch").show();
        } else {
            $(".banner ._title .noMatch").hide();
        }

        var height = $(window).height() - $("footer").innerHeight() - $("header .content").innerHeight()
        $(".banner").css("min-height", (height + "px"));

        $(window).resize(function () {
            var height = $(window).height() - $("footer").innerHeight() - $("header .content").innerHeight()
            $(".banner").css("min-height", (height + "px"));
        });
    },

    count: function () {
        $(".banner ._title .count b").text($("main .list ul li").length);
    },

    toomuch: function () {
        if ($("main .list ul li").length >= $(".banner ._title").attr("data-tooMuch")) {
            $(".banner ._title .tooMuch").show()
        } else {
            $(".banner ._title .tooMuch").hide()
        }
    },

    reset: function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        _Blazy.searchW();
        _waypoint.searchW();
        search.all();
        $("body").getNiceScroll().resize();
    },

    all: function () {
        search.nothing();
        search.count();
        search.toomuch();
    }
}

var searchLibox = {

    open_click: function () {
        $(".openSearch").click(function () {
            searchLibox.open();
        });
    },

    open: function () {
        $("header .searchLibox ").addClass("open")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        // yuan
        // $('.searchLibox').on("keydown",function(event){
        //     var keyCode = event.keyCode || event.which;
        //     if(keyCode == "13"){
        //         event.preventDefault();
        //         SearchPage();
        //     }
        // });
        // yuan
    },

    close_click: function () {
        $("header .searchLibox .liboxClose").click(function () {
            searchLibox.close();
        });

        $("header .searchLibox").click(function (e) {
            if ($(e.target).hasClass("searchLibox")) {
                searchLibox.close();
            }
        })
    },

    close: function () {
        $("header .searchLibox").addClass("close").removeClass("open");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .searchLibox").removeClass("close")
        }, 800)
    },

    perfectScrollbar: function () {
        if ($("header .searchLibox section .right .keyword ul li").length > 0) {
            var container = document.querySelector("header .searchLibox section .right .keyword ul");
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    inputText: function () {
        // RWDPlaceholder
        var $target = $("header .searchLibox section .right form input")
        if ($(window).width() < 501) {
            $target.attr("placeholder", $target.attr("data-RWDPlaceholder"))
        }

        $target.keydown(function(event){
            var keyCode = event.keyCode || event.which;
            if(keyCode == "13"){
                event.preventDefault();
                // SearchPage();
                $(this).closest("form").find("button[type='button']").click();
            }
        })

    },

    keywordRecommend: function () {
        $("header .searchLibox section .right .keyword ul li").each(function () {
            $(this).off().click(function () {
                var keywords = $(this).text()
                var $input = $("header .searchLibox section .right form input")
                var val = $input.val()

                // 避免重複按
                if(val.split(',').indexOf(keywords)<0){
                    if(val !== ""){
                        val += (","+keywords)
                    }else {
                        val += keywords
                    }
                    $input.val(val)
                }
            })
        })
    },
    
    chceckbox: function () {
        if ($(window).width() < 501) {
            $("header .hd_menu .left .productLink .classify .index").each(function () {
                $(this).click(function () {
                    $(this).closest(".classify").find("ul li").slideToggle(500)
                    $(this).closest(".classify").siblings().find("ul li").slideUp(500)
                })
            })
        }
    },

    niceScroll:function(){
        $("header .searchLibox section .left form .type ul").each(function(){
            $(this).niceScroll({
                cursorborder: "none",
                cursorcolor: "#000",
                cursorwidth: "4px",
                nativeparentscrolling: false,
                railpadding: {
                    top: 0,
                    right: 15,
                    left: 0,
                    bottom: 0
                },
            });
        })
    },

    all: function () {
        searchLibox.open_click();
        searchLibox.close_click()
        searchLibox.perfectScrollbar();
        searchLibox.inputText();
        searchLibox.keywordRecommend();
        searchLibox.niceScroll();
        // searchLibox.scrolling();
        // searchLibox.chceckbox();
    }
}


function SearchChangeSize(obj) {
    var Size = $(obj).attr("data-src");
    $("#SearchSize").attr("data-src", Size);
}

function SearchChangeBrand(obj) {
    var Brand = $(obj).attr("data-src");
    $("#SearchBrand").attr("data-src", Brand);
}

function SearchChangeMaterial(obj) {
    var Brand = $(obj).attr("data-brand");
    var BrandUrlTitle = $(obj).attr("data-brand-urltitle");
    var Material = $(obj).attr("data-src");
    $("#SearchMaterial").attr("data-src", Material);
    $("#SearchBrand").attr("data-src", BrandUrlTitle);
    $("#SearchBrand").html(Brand);
}

function SearchChangeSeries(obj) {
    var MaterialUrlTitle = $(obj).attr("data-material-urltitle");
    var MaterialTitle = $(obj).attr("data-material-title");
    var Brand = $(obj).attr("data-brand");
    var BrandUrlTitle = $(obj).attr("data-brand-urltitle");
    var Series = $(obj).attr("data-src");
    $("#SearchSeries").attr("data-src", Series);
    $("#SearchBrand").attr("data-src", BrandUrlTitle);
    $("#SearchBrand").html(Brand);
    $("#SearchMaterial").attr("data-src", MaterialUrlTitle);
    $("#SearchMaterial").html(MaterialTitle);
}

function SearchPage() {
    var url = $(".base-url-p").val();
    var locale = $(".languagelocale").val();
    var Size = $("#SearchSize").attr("data-src");
    var Brand = $("#SearchBrand").attr("data-src");
    var Material = $("#SearchMaterial").attr("data-src");
    var Series = $("#SearchSeries").attr("data-src");
    var Keyword = $("#SearchKeyword").val();
    url = url + "/overview/" + locale + "/Search/" + Brand + "/" + Material + "/" + Series + "/" + Size + "/" + Keyword;
    location.href = url;
}





/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             sitemap              //
///////////////////////////////////////

var sitemap = {

    title: function () {
        $("main article .LinkContent .logos a").each(function () {
            $(this).off().click(function () {
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active");
                $("main .LinkContent .productLink .box").eq(i).addClass("active").siblings().removeClass("active")
                $("body").getNiceScroll().resize();
            });
        });
    },

    scroll:function(){
        $(".LinkContent .productLink .classify ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true
            },
            autoHideScrollbar: true
        })
    },

    all: function () {
        sitemap.title();
        sitemap.scroll();
    }
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           whitehorsebaby          //
///////////////////////////////////////


var whitehorsebaby = {

    scrollMove: function () {
        $(window).scroll(function () {
            scrollMove("main .product .smallImg .right", 0.08);
            scrollMove("main .product .smallImg .left", -0.08);
        });
    },

    smallImg: function () {

        var liLength = $("main .product .productContent ul li").length

        var html = ""
        for (var i = 0; i < (Math.floor(liLength / 4)); i++) {
            html += "<div class='right'></div><div class='left'></div>"
        }

        if ((liLength % 4) > 2 && (liLength % 4) !== 0) {
            html += "<div class='right'></div><div class='left'></div>"
        } else if ((liLength % 4) !== 0) {
            html += "<div class='right'></div>"
        }
        // 加入裝飾圖片
        $("main .product .smallImg").append(html)

        var liHeight = $("main .product .productContent ul li").innerHeight() + parseInt($("main .product .productContent ul li").css("margin-bottom"))

        $("main .product .smallImg>div").each(function () {
            var i = $(this).index()
            var windowWidth = $(window).width()
            if (windowWidth > 650) {
                var y = (liHeight / 2) + i * liHeight
                var top = y + "px"
            } else {
                var y = (liHeight / 2) + (i * liHeight * 2)
                var top = y + "px"
            }
            $(this).css("top", top);
        });
    },

    anchorClick: function () {
        $("main .banner .overview ul li").each(function () {
            $(this).click(function () {
                var i = $(this).index() + 1
                var $article = $("main article").eq(i)
                $("html,body").animate({
                    scrollTop: $article.offset().top - parseInt($article.css("margin-top")) - $("header .content").innerHeight()
                }, 1000, 'easeOutCubic');
            })
        })
    },

    all: function () {
        whitehorsebaby.scrollMove();
        whitehorsebaby.smallImg();
        whitehorsebaby.anchorClick();
        babyLibox.open_click();
    }
}

function scrollMove(target, multiple) {
    var targetTop = document.querySelector(target).getBoundingClientRect().top
    var transform = "translateY(" + targetTop * multiple + "px)"
    $(target).css("transform", transform);
}

var babyLibox = {
    open_click: function () {
        $("main .product .productContent ul li ._img").click(function () {
            var src = $(this).closest("li").attr("data-src")
            babyLibox.open(src)
        });
    },

    open: function (src) {
        $("body").append("<article class='detailLibox'></article")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
        $.ajax({
                url: src,
            })
            .done(function (data) {
                $(".detailLibox").html(data);
                $(".detailLibox").addClass("open")
                babyLibox.all();

                var temp = ($('.base-url').val() !== undefined) ? $('.base-url').val() : ""

                var urltitle = ($("#babycontent").attr("data-key") !== undefined) ? $("#babycontent").attr("data-key") : ""

                if (temp !== "" && urltitle !== "") {
                    history.replaceState(null, "", temp + "/Whitehorsebaby/" + urltitle);
                }
            });
    },

    close_click: function () {
        $(".detailLibox .liboxClose").click(function () {
            babyLibox.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("detailLibox")) {
                babyLibox.close();
            }
        });
    },

    close: function () {
        $(".detailLibox").removeClass("open").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            var temp = ($('.base-url').val() !== undefined) ? $('.base-url').val() : ""

            if (temp !== "") {
                history.replaceState(null, "", temp + "/Whitehorsebaby");
            }

            $(".detailLibox").remove()
        }, 800)
    },

    slick: function () {
        $(".detailLibox .slick ul").slick({
            prevArrow: ".detailLibox .slick .icon-triangle_left",
            nextArrow: ".detailLibox .slick .icon-triangle_right",
            responsive: [{
                breakpoint: 900,
                settings: {
                    dots: true,
                    arrows: false
                }
            }, ]
        })
    },

    scrollBar: function () {
        if (!mobile()) {
            $(".detailLibox section").niceScroll({
                zindex: "3",
                scrollspeed: 100,
                cursorborder: "none",
                cursorwidth: "4px",
                cursorcolor: "#fff",
                zindex: "12",
                preventmultitouchscrolling: false,
                railpadding: {
                    top: 0,
                    right: 1,
                    left: 0,
                    bottom: 0
                },
            });
        }
    },

    all: function () {
        babyLibox.close_click();
        babyLibox.slick();
        babyLibox.scrollBar();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              project              //
///////////////////////////////////////

var project = {

    scrollbar: function () {
        if ($(".index main .content ._title .anchor ul li").length > 0 && mobile()) {
            var container = document.querySelector('.index main .content ._title .anchor ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }

        $(".detail main article.content ._slick .about .Pbox").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true
            },
            scrollInertia: 100
        });
    },

    openabout:function(){
        $(".detail main article.content ._slick .about button").click(function(){
            $(".detail main article.content ._slick .about").toggleClass("open")
        })
    },

    all:function(){
        project.scrollbar();
        if($("body").hasClass("detail")){
            project.openabout();
        }
    }
}


/***************************************************************************************************************************/
// 手機橫版提示
function mobileHorizrail(){
    $(window).on("deviceorientation resize", function( event ) {
        // 直版
        if (window.matchMedia("(orientation: portrait)").matches && mobile()) {
            $('.mobileAlert').removeClass('active');
        }
        // 橫版
        if (window.matchMedia("(orientation: landscape)").matches && mobile()) {
            $('.mobileAlert').addClass('active');
        }
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

// 廣告第一次載入
function firstIn(){
    
    var baseURL = $('.base-url-p').val();
    
    var tempURL = document.referrer;    
    var checkURL = tempURL.match(baseURL);
    var notFirstTime = localStorage.getItem("notFirstTime") || false;
    
    if(!notFirstTime){
        commercial.all();
    }

    else if(!tempURL){
        commercial.all();
    }

    else if(!checkURL){
        commercial.all();
    }
    
    localStorage.setItem("notFirstTime",true);
}


var commercial = {
    open:function(){
        $("footer .commercial").addClass("open")
        if ($(window).width() > 1024 ) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },
    close_click:function(){
        $(".commercial .liboxClose").click(function () {
            commercial.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("commercial")) {
                commercial.close();
            }
        });
    },
    close:function(){
        $(".commercial").removeClass("open");
        $(".commercial").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        } else {
            $("body").css("overflow-y", "visible");
        }

        setTimeout(function () {
            $(".commercial").remove()
        }, 400)
    },

    scrollBar:function(){
        if (!mobile()) {
            $("footer .commercial section .content").niceScroll({
                zindex: "3",
                scrollspeed: 40,
                cursorborder: "none",
                cursorwidth: "4px",
                nativeparentscrolling: false,
                horizrailenabled: false,
                railpadding: {
                    top: 0,
                    right: 1,
                    left: 0,
                    bottom: 0
                },
            });
        }
        
        $("footer .commercial section .content").click(function(){
            $(this).closest("section").find("a").click()
        })
    },

    all:function(){
        commercial.open();
        commercial.close_click();
        commercial.scrollBar();
    }
}


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

    // 蘋果回上頁debug
    appleDebug();
    // 截取頁面id
    var page = $('body').attr('id');
    // 浮動背景更換
    changBg();
    // 分館主題色
    branchColor();
    /*ajax header*/
    load.hd();
    /*ajax footer*/
    load.ft();
    // 下拉選單設定
    dropDown();

    bodyscrollbar();

    bannerSCrollDown();
    // 廣告第一次載入
    firstIn();
    // 手機橫版提示視窗
    mobileHorizrail();

    /*首頁home 啟動的JS*/
    if (page == "home") {
        /*waypoint*/
        _waypoint.homeW();
        /* b-lazy */
        _Blazy.homeW();
        /*slick*/
        _slick.homeW();

        index.all()

        home.all();
    }

    if (page == "QA") {
        /*waypoint*/
        _waypoint.QAW();

        QA.all();
    }

    if (page == "news") {
        /* b-lazy */
        _Blazy.newsW();
        /*waypoint*/
        _waypoint.newsW();

        news.all();
    }

    if (page == "branch") {
        branch.all();

        /* b-lazy */
        _Blazy.branchW();
        /*waypoint*/
        _waypoint.branchW();
        /*slick*/
        _slick.branchW();

        index.all();

        aboutDetail.open_click();
    }

    if (page == "product") {
        /* b-lazy */
        _Blazy.productW();
        /*waypoint*/
        _waypoint.productW();
        /*slick*/
        _slick.productW();

        product.all();
    }

    if (page == "space") {
        /* b-lazy */
        _Blazy.spaceW();
        /*waypoint*/
        _waypoint.spaceW();
        /*slick*/
        _slick.spaceW();

        space.all();
    }

    if (page == "style") {
        /* b-lazy */
        _Blazy.styleW();
        /*waypoint*/
        _waypoint.styleW();
        /*slick*/
        _slick.styleW();

        style.all();
    }

    if (page == "storeHold") {
        /* b-lazy */
        _Blazy.branchW();
        /*slick*/
        _slick.storeHoldW();

        storeHold.all();
    }

    if (page == "join") {
        /* b-lazy */
        _Blazy.joinW();
        /*waypoint*/
        _waypoint.joinW();

        join.all();
    }
    if (page == "catalogue") {
        /* b-lazy */
        _Blazy.catalogueW();
        /*waypoint*/
        _waypoint.catalogueW();

        catalogue.all();
    }

    if (page == "contact") {
        /*waypoint*/
        _waypoint.contactW();

        contact.all();
    }

    if (page == "about") {
        /* b-lazy */
        _Blazy.aboutW();

        about.all();

        aboutDetail.open_click();
    }

    if (page == "staff") {
        /* b-lazy */
        _Blazy.staffW();
        /*waypoint*/
        _waypoint.staffW();
    }

    if (page == "favorite") {
        /* b-lazy */
        _Blazy.favoriteW();
        /*waypoint*/
        _waypoint.favoriteW();

        favorite.all();
    }

    if (page == "search") {
        /* b-lazy */
        _Blazy.searchW();
        /*waypoint*/
        _waypoint.searchW();

        search.all();
    }

    if (page == "sitemap") {
        sitemap.all();
    }

    if (page == "whitehorsebaby") {
        /* b-lazy */
        _Blazy.whitehorsebabyW();
        /*waypoint*/
        _waypoint.whitehorsebabyW();

        whitehorsebaby.all();
    }

    if (page == "project") {
        /* b-lazy */
        _Blazy.projectW();
        /*waypoint*/
        _waypoint.projectW();
        /*slick*/
        _slick.projectW();

        project.all();
    }

});