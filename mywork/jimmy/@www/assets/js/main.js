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
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
    var isChrome = userAgent.indexOf("Chrome") > -1;
    var isIE5 = isIE55 = isIE6 = isIE7 = isIE8 = false;
    this.x = (isFF) ? "Firefox" :
        (isOpera) ? "Opera" :
        (isSafari) ? "Safari" :
        (isChrome) ? "Chrome" :
        (isIE) ? "IE" : "unknow"
    return this.x
}


(function () {
    "use strict";
    function uaMatch(ua) {
        if (ua === undefined) {ua = window.navigator.userAgent;}
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
}());



/***************************************************************************************************************************/

////////////////////////////////////

//             waypoint           //

////////////////////////////////////

var _waypoint = {



    homeW: function () {

        _waypoint.eachWaypoint("main section._title", "80%");

    },



    eachWaypoint: function (target, offsetValue) {

        $(target).each(function (index, element) {

            $(element).waypoint({

                handler: function () {

                    $(element).addClass('show');

                },

                offset: offsetValue

            });

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

        var els = document.querySelectorAll(".b-lazy")

        range = []



        for (var i = 0; i < els.length; i++) {

            var data = els[i].dataset

            for (var key in data) {

                range.push(Number(key.split("-")[1]))

            }

        }





        var bLazy = new Blazy({

            offset: 100,

            breakpoints: [{

                    width: 1024, // max-width

                    src: 'data-src-1024'

                },

                {

                    width: 768, // max-width

                    src: 'data-src-768'

                }
            ],

            success: function (ele) {

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



var _slick = {
    homeW: function () {

        $(".news .mainslick ul").slick({
            prevArrow: ".news .mainslick .icon-keyboard_arrow_left,.news .content .sideSlick ul.one",
            nextArrow: ".news .mainslick .icon-keyboard_arrow_right",
            asNavFor: '.news .sideSlick ul',
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: "0",
            responsive: [{
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }]
        });

        $(".news .sideSlick ul").slick({
            arrows: false,
            asNavFor: '.news .mainslick ul',
            speed: 1000,
            centerMode: true,
            centerPadding: "0",
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false
        })

        $(".about .aboutJimmy ._slick ul").slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: "0",
        })

        $(".works ._slicks .wordsSlick ul").slick({
            asNavFor: '.works ._slicks .mainSlick ul,.works ._slicks .sideSlick ul',
            prevArrow: ".works ._slicks  .icon-keyboard_arrow_left",
            nextArrow: ".works ._slicks  .icon-keyboard_arrow_right",
            speed: 800,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    asNavFor: '.works ._slicks .mainSlick ul',
                }
            }]
        })

        $(".works ._slicks .mainSlick ul").slick({
            variableWidth: true,
            asNavFor: '.works ._slicks .wordsSlick ul,.works ._slicks .sideSlick ul',
            arrows: false,
            speed: 800,
            lazyLoad: 'progressive',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    centerMode: true,
                    centerPadding: 0,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    asNavFor: '.works ._slicks .wordsSlick ul',
                }
            }]
        })

        $(".works ._slicks .sideSlick ul").slick({
            arrows: false,
            variableWidth: true,
            asNavFor: '.works ._slicks .wordsSlick ul,.works ._slicks .mainSlick ul',
            speed: 800,
            lazyLoad: 'progressive',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    asNavFor: null,
                }
            }]
        })

        $(".explore ._slicks .imgSlick ul").slick({
            asNavFor: ".explore ._slicks .wordSlick ul",
            prevArrow: ".explore ._slicks  .icon-keyboard_arrow_left",
            nextArrow: ".explore ._slicks  .icon-keyboard_arrow_right",
        })

        $(".explore ._slicks .wordSlick ul").slick({
            arrows: false,
            asNavFor: ".explore ._slicks .imgSlick ul"
        });

        var alreadyLoader = false

        $('.explore ._slicks .imgSlick ul').on('lazyLoaded',function(){
            if(!alreadyLoader){
                newsBg();
            }
        })

        // 背景重整
        function newsBg() {
            if ($(window).width() < 1025) {
                var height = $("#home.index .explore ._slicks").innerHeight();
                var top = $("#home.index .explore ._slicks").position().top
                $(".explore .bgImg .catAndWall").css({
                    "height": height,
                    "top": top
                })
            } else {
                $(".explore .bgImg .catAndWall").css({
                    "height": "auto",
                    "top": "auto"
                })
            }
            alreadyLoader = true
        };
        $(window).resize(function () {
            setTimeout(function(){
                newsBg();
            },100)
        });

        $(".authorization ._slicks .imgSlick ul").slick({
            asNavFor: ".authorization  ._slicks .wordSlick ul",
            prevArrow: ".authorization  ._slicks .icon-keyboard_arrow_left",
            nextArrow: ".authorization  ._slicks .icon-keyboard_arrow_right",
        })

        $(".authorization  ._slicks .wordSlick ul").slick({
            arrows: false,
            asNavFor: ".authorization  ._slicks .imgSlick ul"
        })
    },
}



/***************************************************************************************************************************/



/*---------------------------------------------------------------------------------------------------*/

/* header ＆ footer*/

var load = {
    /*header*/
    hd: function () {
        menu.all();
    },
    /*footer*/
    ft: function () {
        goTop();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/

///////////////////////////////////////
//               menu                //
///////////////////////////////////////

var menu = {

    open_click: function () {
        $(".openMenu").click(function () {
            $(".hdContent").toggleClass("menuopen")
            if (!$("header .menuLibox").hasClass("open")) {
                menu.open();
            } else {
                menu.close();
            }
        });
    },
    open: function () {
        $("header .menuLibox").addClass("open")
        if (!mobile() && !$("body").attr("id") == "home") {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            })
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $("header .menuLibox").click(function (e) {
            if ($(e.target).hasClass("menuLibox")) {
                menu.close();
            }
        })
    },

    close: function () {
        $(".hdContent").removeClass("menuopen")
        $("header .menuLibox").addClass("close").removeClass("open");
        if (!mobile() && !$("body").attr("id") == "home") {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0rem"
            });
        } else if (!mobile() && $("body").attr("id") == "home") {

        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .menuLibox").removeClass("close");
        }, 1000)
    },

    niceScroll: function () {
        $("header .menuLibox .content .floorIntro ul").niceScroll({
            horizrailenabled: false,
            nativeparentscrolling: false,
            cursorborder: "none",
            cursorwidth: "3px",
            cursorcolor: "#fff",
            railpadding: {
                top: 0,
                right: 1,
                left: 0,
                bottom: 0
            },
        })
    },

    circleHover:function(){
        $("header .menuLibox .container nav .left div ul li,header .menuLibox .container nav .right ul li").mouseover(function (event) { 
            var top = $(this).offset().top - $("header .menuLibox .container").offset().top
            var left = $(this).offset().left - $("header .menuLibox .container").offset().left
            console.log(top,left)

            $("header .menuLibox .container .circle").css({
                "top": top,
                "left": left,
            })
        });
    },

    all: function () {
        menu.open_click();
        menu.close_click();
        menu.niceScroll();
        menu.circleHover();
    }
}


/***************************************************************************************************************************/



/***************************************************************************************************************************/

///////////////////////////////////////

//            goTop                  //

///////////////////////////////////////



function goTop() {

    $(".ftGotop").click(function () {

        var time = $(window).scrollTop() / $("body").innerHeight() * 1500 + 500

        if ($("body").attr("id") !== "home") {
            $("html,body").animate({

                scrollTop: 0

            }, time, 'easeOutCubic');
        }

    });

}



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
//            自訂換背景              //
///////////////////////////////////////

var BannerPicture = function (els, successFunction,offset,container) {
    this.successFunction = successFunction 
    this.els = els
    // this.offsetTop = $(els).offset().top - $(window).height() - 100
    // this.offsetTop = (this.offsetTop < 0)? 0: this.offsetTop
    // this.offsetBottom =  $(els).offset().top + $(els).innerHeight() + 100
    this.offset = offset
    this.container = container
    this.data = this.els.dataset
    this.range = []
    this.url = []
    for (var key in this.data) {
        this.range.push(Number(key.split("-")[1]))
        this.url.push(this.data[key])
    }
    this.changePicture()
}

BannerPicture.prototype.resizeHandler = function () {
    var nowWidth
    nowWidth = window.innerWidth
    for (var i = 0; i < this.range.length; i++) {
        if (nowWidth > this.range[i + 1]) {
            if (this.els.nodeName == "IMG") {
                if (this.els.src !== this.url[i]) {
                    this.els.src = this.url[i]
                }
            } else {
                if (this.els.style.backgroundImage !== "url('" + this.url[i] + "')") {
                    this.els.style.backgroundImage = "url('" + this.url[i] + "')"
                }
            }
            if (this.successFunction !== undefined) {
                this.successFunction(this.els)
            }
            break;
        } else if (nowWidth < this.range[i + 1] && nowWidth > this.range[i]) {
            if (this.els.nodeName == "IMG") {
                if (this.els.src !== this.url[i]) {
                    this.els.src = this.url[i]
                }
            } else {
                if (this.els.style.backgroundImage !== "url('" + this.url[i + 1] + "')") {
                    this.els.style.backgroundImage = "url('" + this.url[i + 1] + "')"
                }
            }
            if (this.successFunction !== undefined) {
                this.successFunction(this.els)
            }
            break;
            // last one
        } else if (this.range[i + 1] == undefined) {
            if (this.els.nodeName == "IMG") {
                if (this.els.src !== this.url[i]) {
                    this.els.src = this.url[i]
                }
            } else {
                if (this.els.style.backgroundImage !== "url('" + this.url[i] + "')") {
                    this.els.style.backgroundImage = "url('" + this.url[i] + "')"
                }
            }
            if (this.successFunction !== undefined) {
                this.successFunction(this.els)
            }
            break;
        }
    }
}

BannerPicture.prototype.changePicture = function () {
    var vm = this
    window.addEventListener('resize', function () {
        vm.offset = $(vm.els).offset().top;
        vm.scrollTop();
    })
    this.scrollTop();
    $(this.container).scroll(function () {
        vm.scrollTop();
    });
}

BannerPicture.prototype.scrollTop = function () {
    this.offsetTop = this.els.getBoundingClientRect().top - this.offset
    this.offsetTop = (this.offsetTop < 0) ? 0 : this.offsetTop
    this.offsetBottom = this.els.getBoundingClientRect().top - $(window).height() - this.offset
    // var scrollTop= $(window).scrollTop()
    // if(scrollTop>=this.offsetTop && scrollTop< this.offsetBottom){
    if (this.offsetTop >= 0 && this.offsetBottom < 0) {
        this.resizeHandler();
    }
}


var Nlazy = function (value) {
    this.target = value.el || ".n-lazy"
    this.successFunction = value.successFunction || undefined
    this.offset = value.offset || 100
    this.container = value.container || window
    this.eles = document.querySelectorAll(this.target)
    this.BannerPictureArray = []
    for (var i = 0; i < this.eles.length; i++) {
        this.BannerPictureArray[i] = new BannerPicture(this.eles[i], this.successFunction,this.offset,this.container)
    }
}

Nlazy.prototype.refreshAll = function () {
    for (var i = 0; i < this.eles.length; i++) {
        this.BannerPictureArray[i].scrollTop();
    }
}

var nlazy = new Nlazy({
    el:".n-lazy",
    offset:150,
    container: window,
    successFunction:function(ele){
        // console.log(ele)
    }
});


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

function dropDown(parentNode) {
    var dropDown
    if (parentNode !== undefined) {
        dropDown = parentNode + " .dropDown"
    } else {
        dropDown = ".dropDown"
    }



    $(dropDown).each(function () {
        var $this = $(this)
        // 預設文字
        var defaultText = $this.find(".selectMenu p").text()
        // 清除選項
        $this.closest("form").find("button[type='reset']").click(function () {
            $this.removeClass("active").find(".selectMenu p").text(defaultText)
        })

        if (!mobile()) {
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
            $this.find("li").click(function () {
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
                scrollInertia: 60
            });
        } else {
            // 新增select
            // get options
            var options = [""]
            $this.find("ul li").each(function () {
                options.push($(this).text())
            })
            // creata select
            var select = document.createElement("select");
            select.setAttribute("class", "mobileSelect")
            // add css
            select.setAttribute("style", "position:absolute; bottom:0; left:0; width:100%; height:100%; opacity:0");
            var textnode = options.map(function (item, index) {
                var addoption = document.createElement("option");
                addoption.text = item;
                addoption.value = [index, item];
                if (index == 0) {
                    addoption.style.display = "none"
                }
                select.add(addoption);
            })
            // remove old select
            $this.find(".mobileSelect").remove()
            // add new select in dropDown
            $this.append(select)
            // clickfunction
            $this.find(".mobileSelect").click(function () {
                $this.find(".selectMenu").toggleClass("open");
            })
            // 點擊select等於點擊li
            $this.find(".mobileSelect").change(function () {
                var value = $(this).val()
                var index = value.split(",")[0] - 1
                var text = value.split(",")[1]
                $(this).closest(".dropDown").addClass("active").removeClass("open").siblings().removeClass("active");
                $(this).closest(".dropDown").find(".selectMenu").removeClass("open").find("p").text(text);
                $(this).closest(".dropDown").find("ul li").eq(index).click()
            })
        }
    });
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/

///////////////////////////////////////
//           bannerScrollDown        //
///////////////////////////////////////
function bannerScrollDown() {
    $(".bannerScrollDown").click(function () {
        $("html,body").animate({
            scrollTop: $(".banner").innerHeight()
        }, 800, 'easeOutCubic');
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               home                //
///////////////////////////////////////

var home = {

    newsSideSlick: function () {
        var slickArray = []
        var mainSlickLi = document.querySelectorAll(".news .content .mainslick ul li")
        for (var i = 0; i < mainSlickLi.length; i++) {
            var ele = {}
            ele.img = $(mainSlickLi[i]).find("img").attr("data-lazy")
            ele.day = $(mainSlickLi[i]).find(".date p:first-child").text()
            ele.year = $(mainSlickLi[i]).find(".date p:last-child").text()
            slickArray.push(ele)
        }
        if (mainSlickLi.length > 1) {
            var lis1 = ""
            for (var i = -1; i < slickArray.length - 1; i++) {
                var x = (i < 0) ? slickArray.length + i : i
                lis1 += "<li><div class='date'><p>" + slickArray[x].day + "</p><p>" + slickArray[x].year + "</p></div><figure><img data-lazy='" + slickArray[x].img + "'></figure></li>"
            }
            $(".news .sideSlick ul").eq(0).html(lis1)
        }
        if (mainSlickLi.length > 2) {
            var lis2 = ""
            for (var i = -2; i < slickArray.length - 2; i++) {
                var x = (i < 0) ? slickArray.length + i : i
                lis2 += "<li><div class='date'><p>" + slickArray[x].day + "</p><p>" + slickArray[x].year + "</p></div><figure><img data-lazy='" + slickArray[x].img + "'></figure></li>"
            }
            $(".news .sideSlick ul").eq(1).html(lis2)
        }
    },

    worksSlcik: function () {
        var mainSlickLi = document.querySelectorAll(".works .mainSlick ul li")
        var lis = ""
        for (var i = -1; i < mainSlickLi.length - 1; i++) {
            var x = (i < 0) ? mainSlickLi.length + i : i
            var img = $(mainSlickLi[x]).find("img").attr("data-lazy")
            lis += "<li><figure><img data-lazy='" + img + "'></figure></li>"
        }
        $(".works .sideSlick ul").html(lis)
    },

    fullpage: function () {
        $('#fullpage').fullpage({
            sectionSelector: 'article',
            verticalCentered: false,
            dragAndMove: true,
            fixedElements: '.alertLibox',
            lazyLoading: false,
            recordHistory:false,
            anchors:['1', '2','3','4','5','6','7'],
            animateAnchor: false,
            touchSensitivity: 15 ,
            afterLoad: function (anchorLink, index) {
                nlazy.refreshAll();
                var i = index - 1
                $("main article").eq(i).addClass("show");
            },
            onLeave: function (anchorLink, index) {
                if (index !== 1) {
                    $("header .hdContent").addClass("in")
                } else {
                    $("header .hdContent").removeClass("in")
                }
                var i = index - 1
                $("main article").eq(i).addClass("in")
            },
        });

        // scrollToTop
        $(".ftGotop").click(function () {
            $.fn.fullpage.moveTo(1);
        })

        $(window).resize(function(){
            $.fn.fullpage.reBuild();
        })

        // bannerScrollDwon
        $(".banner .seemore a").click(function () {
            $.fn.fullpage.moveTo(2);
        });

        $(window).on("deviceorientation resize", function( event ) {
            // 直版
            if (window.matchMedia("(orientation: portrait)").matches && mobile()) {
                $('.alertLibox').removeClass('active');
                setTimeout(function(){  
                    $(window).scrollTop(0)
                },100)
            }
            // 橫版
            if (window.matchMedia("(orientation: landscape)").matches && mobile()) {
                $('.alertLibox').addClass('active');
            }
        });

    },

    perfectScroll: function () {
        if ($(".explore ._title .anchor ul li").length > 0 && mobile()) {
            const container = document.querySelector('.explore ._title .anchor ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: null
            });
        }

        if ($(".authorization .container ._title .anchor ul li").length > 0 && mobile()) {
            const container = document.querySelector('.authorization .container ._title .anchor ul ');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: null
            });
        }
    },

    anchorClick: function () {
        $(".explore ._title .anchor ul li,.authorization .container ._title ul li").click(function () {
            $(this).addClass("active").siblings().removeClass("active")
        })
    },

    tobeContinueTrain:function(){
        if(Browser.name =="safari" && mobile()){
            $(".tobeContinue .container .trainAndBook .train").addClass("safari")
        }
    },

    all: function () {
        if (!mobile()) {
            home.newsSideSlick();
            home.worksSlcik();
        }
        home.fullpage();
        home.perfectScroll();
        home.anchorClick();
        home.tobeContinueTrain();
    }

}


/***************************************************************************************************************************/


/***************************************************************************************************************************/

$(document).ready(function () {

    // 蘋果回上頁debug
    appleDebug();
    // 截取頁面id
    var page = $('body').attr('id');
    /*ajax header*/
    load.hd();
    /*ajax footer*/
    load.ft();
    bannerScrollDown();
    dropDown();
    youtubeSlick();

    /*首頁home 啟動的JS*/
    if (page == "home") {
        /*waypoint*/
        _waypoint.homeW();
        /* b-lazy */
        _Blazy.homeW();
        home.all();
        /*slick*/
        _slick.homeW();
    }
});