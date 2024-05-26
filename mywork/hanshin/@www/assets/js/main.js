
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
}

browser.prototype.check = function () {
    return this.x
}

/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {

    homeW: function () {
        _waypoint.eachWaypoint("main section._title", "80%");
        _waypoint.eachWaypoint(".news ._slick>ul", "80%");

        $(".living .content ul li").each(function (index, element) {
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
        _waypoint.eachWaypoint(".living .content", "80%");

        _waypoint.eachWaypoint(".dishes section", "60%");
        _waypoint.eachWaypoint(".explore .masonry .big,.explore .masonry .middle,.explore .masonry .small", "80%");
        _waypoint.eachWaypoint(".member .content .row figure", "60%");
        _waypoint.eachWaypoint(".member .content .row ._text", "80%");
    },

    indexW: function () {
        _waypoint.eachWaypoint("#index.index ._title", "80%");
        _waypoint.eachWaypoint(".news ._slick>ul", "80%");
        _waypoint.eachWaypoint(".content .substation .rows .row", "60%");
    },

    newsW: function () {
        _waypoint.eachWaypoint(".index .content .newsContent ul li", "80%");
        _waypoint.eachWaypoint(".detail .rows .row>div", "80%");
        _waypoint.eachWaypoint(".detail .more ._title", "80%");
        _waypoint.eachWaypoint(".detail .more .links a", "80%");
    },

    floorW: function () {
        _waypoint.eachWaypoint(".index .block .sort ._title", "90%");
        _waypoint.eachWaypoint(".index .block .sort .grid-box", "80%");
        _waypoint.eachWaypoint(".index .floorContent .ps", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .listHeader", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor .sort", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor .sort ul li", "80%");

        _waypoint.eachWaypoint(".detail main section._title", "80%")
        _waypoint.eachWaypoint(".detail .story ._slick", "80%")
        _waypoint.eachWaypoint(".detail .story ._text", "80%")
        _waypoint.eachWaypoint(".detail .environment .row", "80%")
        _waypoint.eachWaypoint(".detail .recommended", "60%")
        _waypoint.eachWaypoint(".detail .lastNews ._slick", "80%")
    },

    serviceW: function () {
        _waypoint.eachWaypoint(".index .linkContent .ps", "80%");

        var windowWidth = $(window).width()
        $(window).resize(function () {
            windowWidth = $(window).width()
        })
        $("#service.index .linkContent .masonry .grid-box").each(function (index, element) {
            if (windowWidth > 500) {
                var i = Math.floor(Math.random() * 4)
                var delay = i * 0.2 + "s"
                $(element).find("a").css("animation-delay", delay);
            }
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: "90%"
            });
        });

        _waypoint.eachWaypoint(".moreService ._title", "90%");
        _waypoint.eachWaypoint(".moreService .link", "80%");

        _waypoint.eachWaypoint(".tax .content .table ul li", "80%");

        _waypoint.eachWaypoint(".facility .content .table .type ", "80%");
        _waypoint.eachWaypoint(".facility .content .table .type ul li", "80%");

        _waypoint.eachWaypoint(".lost main .content .topTitle button", "80%");
        _waypoint.eachWaypoint(".lost main .content .table ._search", "80%");
        _waypoint.eachWaypoint(".lost main .content .list ", "80%");

        _waypoint.eachWaypoint(".contact main .content .formContent", "80%");

        _waypoint.eachWaypoint(".FQ .content .QAtable .type", "80%");

        _waypoint.eachWaypoint(".other .content .row>*", "80%");
        _waypoint.eachWaypoint(".other .content .callme", "80%");
    },

    otherW: function () {
        _waypoint.eachWaypoint(".join main .content .topTitle button", "80%");
        _waypoint.eachWaypoint(".join .tableContent .list .listHeader", "80%");
        _waypoint.eachWaypoint(".join .tableContent .list .listBody .job", "80%");

        _waypoint.eachWaypoint(".privacy .rules>*:not(:first-child)", "70%");

        _waypoint.eachWaypoint(".related .content .row>*", "70%");

        _waypoint.eachWaypoint(".cooperation main .content .formContent", "80%");
        _waypoint.eachWaypoint(".cooperation .content .links ul li", "80%");
    },

    dmW: function () {
        _waypoint.eachWaypoint(".index main .content .catalogList ul li", "80%");
        _waypoint.eachWaypoint(".index main .content .catalogList ul li ._text", "90%");

        _waypoint.eachWaypoint("main .content .commercial .box", "80%");
        _waypoint.eachWaypoint("main .content .product ul li", "80%");
        _waypoint.eachWaypoint("main .content .product ul .typeName", "90%");

        _waypoint.eachWaypoint(".detail .rows .row>div", "80%");
        _waypoint.eachWaypoint(".detail section._title", "80%");
        _waypoint.eachWaypoint(".detail .moreProduct ._slick", "80%");
    },

    cardW: function () {
        _waypoint.eachWaypoint(".index .news .content ul li", "80%");
        _waypoint.eachWaypoint(".index .introduction .row", "80%");

        _waypoint.eachWaypoint(".detail .qa .QAtable .type", "80%");
        _waypoint.eachWaypoint(".detail section._title", "80%");
        _waypoint.eachWaypoint(".detail .offer .rows .row>*", "80%");
        _waypoint.eachWaypoint(".detail .treatment .content ul li", "80%");
        _waypoint.eachWaypoint(".detail .application .content ul li", "80%");
        
    },

    aboutW: function () {
        _waypoint.eachWaypoint(".index .explore .topSlick", "80%");
        _waypoint.eachWaypoint(".index .explore .rows .row>*", "80%");

        _waypoint.eachWaypoint(".index .space .rows .row>*", "80%");

        _waypoint.eachWaypoint(".index .traffic .QAtable .type", "80%");
    },

    brandW: function () {
        _waypoint.eachWaypoint(".index .block .sort .grid-box", "80%");
        _waypoint.eachWaypoint(".index .brandContent .ps", "80%");
    },
    
    searchW:function(){
        _waypoint.eachWaypoint(".index .newsContent ul li", "80%");

        _waypoint.eachWaypoint(".index .floorContent .List .listHeader", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor .sort", "80%");
        _waypoint.eachWaypoint(".index .floorContent .List .floor .sort ul li", "80%");
    
        _waypoint.eachWaypoint(".index .notFound .ps", "80%");
    },

    guideW:function(){
        var windowWidth = $(window).width()
        $(window).resize(function () {
            windowWidth = $(window).width()
        })
        $("#guide.index .content ul li").each(function (index, element) {
            if (windowWidth > 500) {
                var i = Math.floor(Math.random() * 4)
                var delay = i * 0.2 + "s" 
                $(element).find("div").css("animation-delay", delay);
            }
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                context: "#guide.index .content",
                offset: "90%"
            });
        });
    },

    foodW:function(){
        _waypoint.eachWaypoint(".index .content .food ul li", "80%");
        _waypoint.eachWaypoint(".detail .rows .row>div", "80%");
    },

    memberW:function(){
        _waypoint.eachWaypoint(".member .overview .rows .row ._img", "80%");
        _waypoint.eachWaypoint(".member .overview .infAndPassword>*", "80%");
        _waypoint.eachWaypoint(".precautions", "80%");
        _waypoint.eachWaypoint("main article.content section.buttons button", "80%");
        _waypoint.eachWaypoint(".usablePoints,.remainingGames", "80%");
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
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest(".masonry").find(".big,.middle,.small").addClass("in");
                $(ele).closest(".row").find("figure").addClass("in");
                if ($('.explore .masonry').length !== 0) {
                    $('.explore .masonry').masonry('layout');
                }
                Waypoint.refreshAll();
            }
        });
    },

    indexW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("figure").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    newsW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest("._img").addClass("in");
                $(ele).closest("figure").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    floorW: function () {
        var bLazy = new Blazy({
            offset: 10,
            success: function (ele) {
                $(ele).closest(".grid-box").addClass("in");
                $(ele).closest("li").addClass("in");
                $(ele).closest("figure").addClass("in");
                if ($('.index .block .sort .masonry').length !== 0) {
                    $('.index .block .sort .masonry').masonry('layout');
                }
                if ($("body").hasClass("detail")) {
                    if (anchorClickTarget !== undefined) {
                        var hdHeight = $("header .hdContent").innerHeight()
                        var windowHeight = (!mobile()) ? ($(window).height()) : ($(window).height() - hdHeight)
                        var $target = $(".detail main article").eq(anchorClickTarget)
                        var targetHeight = $target.innerHeight()
                        var targetOffset = (!mobile()) ? ($target.offset().top) : ($target.offset().top - hdHeight + 1)
                        var scrollTop = $(window).scrollTop()
                        var point = (targetHeight > windowHeight) ? targetOffset : (targetOffset - windowHeight / 2 + targetHeight / 2)
                        var time = (point - scrollTop) / point * 500 + 500
                        // 停止原animate
                        $("html,body").stop()
                        // 開始新的animate
                        $("html,body").animate({
                            scrollTop: point
                        }, {
                            duration: time,
                            easing: 'easeOutCubic',
                            complete: function () {
                                anchorClickTarget = undefined
                            }
                        });
                    }
                }
                Waypoint.refreshAll();
            }
        });
    },

    serviceW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("._img").addClass("in");
                Waypoint.refreshAll();
            }
        })
    },

    otherW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest("._img").addClass("in");
                Waypoint.refreshAll();
            }
        })
    },
    
    dmW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest(".box").addClass("in");
                $(ele).closest("._img").addClass("in");
                Waypoint.refreshAll();
            }
        })
    },

    cardW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest("figure").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    aboutW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("._img").addClass("in");
                Waypoint.refreshAll();
            }
        })
        $(window).resize(function(){
            _Blazy.aboutW()
        })
    },

    brandW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest(".grid-box").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    searchW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    guideW:function(){
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    foodW:function(){
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("li").addClass("in");
                $(ele).closest("._img").addClass("in");
                $(ele).closest("figure").addClass("in");
                Waypoint.refreshAll();
            }
        });
    },

    memberW:function(){
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                $(ele).closest("._img").addClass("in");
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

        if ($(".banner ._slick ul li").eq(0).find("picture").attr("data-imgColor") == "dark") {
            $(".banner").addClass("white")
        }
        
        var bannerDots = ($(".banner ._slick>ul>li").length >1)?true:false
        $(".banner ._slick ul").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            fade: true,
            arrows: false,
            dots: bannerDots,
            speed: 800,
            zIndex: 1
        });

        $(".banner ._slick ul").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var color = $(slick.$slides[nextSlide]).find("picture").attr("data-imgColor")
            if (color == "dark") {
                $(".banner").addClass("white")
            } else {
                $(".banner").removeClass("white")
            }
            $(slick.$slides).addClass("up").removeClass("down")
            $(slick.$slides[nextSlide]).find(".slogan").css("display", "none")
        });

        $(".banner ._slick ul").on('afterChange', function (event, slick, currentSlide) {
            $(slick.$slides[currentSlide]).find(".slogan").css("display", "flex")
            $(slick.$slides).addClass("down").removeClass("up")
        });

        newSlick();

        function newSlick() {
            var newsDots = false
            if($(".news ._slick>ul>li").length>3){
                newsDots = true
            }else if ($(".news ._slick>ul>li").length>2 && $(window).width()<1263){
                newsDots = true
            }else if ($(".news ._slick>ul>li").length>1 && $(window).width()<451){
                newsDots = true
            }
            $(".news ._slick ul").slick({
                slidesToShow: 3,
                dots: newsDots,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                slickRemove:true,
                responsive: [{
                        breakpoint: 1279,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });

            $('.news ._slick ul').on('lazyLoaded', function(event, slick, image, imageSource){
                $(image).closest("li").addClass("in")
                $(image).closest("ul").addClass("in")
                $(".news ._slick>ul").css("min-height",($(this).innerHeight() + "px"))
            });

            
        }

        // var slides = $(".news ._slick>ul").slick("getSlick").$slides.length
        // for(var i = 0; i<slides;i++){
        //     $(".news ._slick>ul").slick("slickRemove",true)
        // }

        $(".news ._slick ul").on('destroy', function (event, slick) {
            newSlick();
        });

        $(".living .content ul").slick({
            slidesToShow:4,
            slidesToScroll:4,
            infinite: false,
            speed: 800,
            prevArrow:'<button type="button" class="icon-arrowLeft slick-prev"></button>',
            nextArrow:'<button type="button" class="icon-arrowRight slick-next"></button>',
            autoplay:true,
            autoplaySpeed: 10000,
            responsive: [
            {
                breakpoint: 1381,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },{
                breakpoint: 1025,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                    arrows: false,
                    dots: true
                }
            },{
                breakpoint: 701,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    arrows: false,
                    dots: true
                }
            },{
                breakpoint: 331,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false,
                    dots: true
                }
            }]
        });

        $('.living .content ul').on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in")
        });
    },

    newsW: function () {
        var detailDots = ($(".detail main ._slick>ul>li").length >1)?true:false
        $(".detail main ._slick ul").slick({
            prevArrow: ".detail ._slick .arrows span.icon-arrowLeft",
            nextArrow: ".detail ._slick .arrows span.icon-arrowRight",
            dots: detailDots,
            centerMode: true,
            centerPadding:"0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }]
        });

        $('.detail main ._slick ul').on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in")
        });
    },

    floorW: function () {
        var storyDots = ($(".detail .story ._slick>ul>li").length >1)?true:false
        $(".detail .story ._slick ul").slick({
            prevArrow: ".detail .story ._slick .icon-arrowLeft",
            nextArrow: ".detail .story ._slick .icon-arrowRight",
            dots: storyDots,
            centerMode: true,
            centerPadding:"0",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }]
        });

        $('.detail .story ._slick ul').on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in")
        });

        var guideSlidesToShow = ($("body").hasClass("guide"))?3:2

        var recommendedDots = false
        if($(".detail .recommended ._slick>ul>li").length > 4 ){
            recommendedDots = true
        }else if ($(".detail .recommended ._slick>ul>li").length>3 && $(window).width()<1583 || $(".detail .recommended ._slick>ul>li").length>3 && $("body").hasClass("guide") || $(".detail .recommended ._slick>ul>li").length>3 && $(window).width()<1025){
            recommendedDots = true
        }else if ($(".detail .recommended ._slick>ul>li").length>2 && $(window).width()< 1263 &&　$(window).width()>1024　){
            recommendedDots = true
        }else if ($(".detail .recommended ._slick>ul>li").length>2 && $(window).width()< 900){
            recommendedDots = true
        }else if ($(".detail .recommended ._slick>ul>li").length>2 && $(window).width()< 550){
            recommendedDots = true
        }
        $(".detail .recommended ._slick ul").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: recommendedDots,
            responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: guideSlidesToShow,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "0"
                    }
                }
            ]
        });

        var lastNewsDots = ($(".detail .lastNews ._slick>ul>li").length > 1)?true: false
        $(".detail .lastNews ._slick ul").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: ".detail .lastNews ._slick .icon-arrowLeft",
            nextArrow: ".detail .lastNews ._slick .icon-arrowRight",
            speed: 800,
            responsive: [{
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: lastNewsDots,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000
                    }
                }
            ]
        });
    },

    serviceW: function () {
        var moreServiceDots = ($(".moreService ._slick>ul>li").length >1)?true:false
        $("main article.moreService ._slick ul").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "main article.moreService ._slick .icon-arrowLeft",
            nextArrow: "main article.moreService ._slick .icon-arrowRight",
            centerMode: true,
            centerPadding: "0",
            speed: 700,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                }
            }, {
                breakpoint: 351,
                settings: {
                    slidesToShow: 1,
                    dots: moreServiceDots,
                    arrows: false,
                    centerMode: false,
                }
            }]
        });

        var otherDots = ($(".other main article.content ._slick>ul>li").length >1)?true:false
        $(".other main article.content ._slick ul").slick({
            prevArrow: ".other main article.content ._slick .icon-arrowLeft",
            nextArrow: ".other main article.content ._slick .icon-arrowRight",
            dots: otherDots,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }]
        });
        
        $('.other main article.content ._slick ul').on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in")
        });
    },

    dmW: function () {
        var bannerDots = ($(".detail .banner ._slick>ul>li").length >1)?true:false
        $(".detail .banner ._slick ul").slick({
            prevArrow: ".detail .banner ._slick .icon-arrowLeft",
            nextArrow: ".detail .banner ._slick .icon-arrowRight",
            dots: bannerDots,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }]
        });

        $(".detail .banner ._slick ul").on('lazyLoaded', function(){
            $(this).closest(".banner").addClass("show")
        });

        var moreProductDots = false
        if($(".moreProduct ._slick>ul>li").length > 3 ){
            moreProductDots = true
        }else if ($(".moreProduct ._slick>ul>li").length > 2 && $(window).width() < 900){
            moreProductDots = true
        }else if ($(".moreProduct ._slick>ul>li").length > 1 && $(window).width() < 350 ){
            moreProductDots = true
        }
        console.log(moreProductDots)
        $(".detail .moreProduct ._slick ul").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: ".detail .moreProduct ._slick .icon-arrowLeft",
            nextArrow: ".detail .moreProduct ._slick .icon-arrowRight",
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: moreProductDots,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: moreProductDots,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },{
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots:moreProductDots,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }],
        });

        $(".detail .moreProduct ._slick ul").on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in")
        });
    },

    aboutW: function () {
        var topSlickDots = ($(".explore .topSlick>ul>li").length >1)?true:false
        $(".explore .topSlick ul").slick({
            prevArrow: ".explore .topSlick .arrows span.icon-arrowLeft",
            nextArrow: ".explore .topSlick .arrows span.icon-arrowRight",
            dots: topSlickDots,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }]
        });

        $(".explore .topSlick ul").on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in");
            Waypoint.refreshAll();
        });

        $(".explore .rows .row ._img ul").slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed:1000,
            fade: true
        });

        $(".explore .rows .row ._img ul").on('lazyLoaded', function(event, slick, image, imageSource){
            $(image).closest("li").addClass("in");
            Waypoint.refreshAll();
        });
    },

    guideW: function () {
        $(".explore .topSlick ul").slick({

        });

        $("#guide.index .banner ._slick ul").slick({
            centerMode:true,
            centerPadding:"0",
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            speed: 800,
        });
    },

    winformW: function () {
        $(".banner ._slick ul").slick({

        })
    }
}

/***************************************************************************************************************************/

/*---------------------------------------------------------------------------------------------------*/
/* header ＆ footer*/
var load = {
    /*header*/
    hd: function () {
        hdList()
        goTop();
        selectStore.open_click();
        searchLibox.all();
        menu.open_click();
    },
    /*footer*/
    ft: function () {
        footerTopNav();
        _waypoint.eachWaypoint("footer .topNav section", "90%");
        guideFooterSlcik();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

function guideFooterSlcik(){
    $(".guide footer .guideFooter ul").slick({
        centerMode:true,
        centerPadding:"0",
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

function hdList() {
    $("header .hdContent .list ul").niceScroll({
        cursorcolor: "#fff",
        cursorborder: "none",
        cursorwidth: "4px",
        railpadding: {
            top: 0,
            right: 0,
            left: -4,
            bottom: 0
        },
        nativeparentscrolling: false,
        railalign: "left",
    });

    $("header .hdContent .list ul li").each(function () {
        var i = $(this).index()
        var delay = (i * 0.1 + 1) + "s"
        $(this).find("a").css("animation-delay", delay);
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
// targetWidth可自訂

function navXscroll(target, targetWidth) {
    //手機板 導覽機
    if (mobile() || $("body").hasClass("guide")) {
        if ($(target).find("*").length > 0) {
            const container = document.querySelector(target).parentNode;
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    }
    //電腦版
    else {
        var action, width, overflow, resetLeft

        function reset(target, resetLeft) {
            $(target).css({
                "left": ("-" + Math.abs(resetLeft) + "px"),
                "transition": "left 0.5s ease"
            })
        }
        var returnValue = function () {
            // 是否有特殊情形
            if (targetWidth == undefined) {
                targetWidth = 0
                for (var i = 0; i < $(target).find(">*").length; i++) {
                    targetWidth += $(target).find(">*").eq(i).innerWidth()
                }
            }
            // 是否啟動: 子元素寬度是否超過父元素容器寬度
            action = (targetWidth > $(target).parent().innerWidth()) ? true : false
            // 父元素容器寬度
            width = $(target).parent().innerWidth()
            // 超過寬度
            overflow = targetWidth - $(target).parent().innerWidth() + 10;
            //已啟動的物件位置
            resetLeft = ($(target).find(".active").index() == 0) ? 0 : -($(target).find(".active").innerWidth())
            for (var i = 0; i < $(target).find(".active").prevAll().length; i++) {
                resetLeft += $(target).find(".active").prevAll().eq(i).innerWidth()
            }
            resetLeft = (!action) ? 0 : (resetLeft > overflow) ? overflow : resetLeft

            reset(target, resetLeft)
            // 回傳偵測的參數
            return action, width, overflow, resetLeft
        }();

        // resize重新偵測
        $(window).resize(function () {
            returnValue;
        });

        // 是否為ie
        var ie = new browser()
        // var transition = (ie.check() !== "IE") ? "left 0s ease" : "left 0s ease"

        $(target).parent().mousemove(function () {
            if (action) {
                var offsetX = event.clientX - $(this).offset().left
                var widthPercent = (offsetX / width)
                var left = "-" + overflow * widthPercent.toFixed(3) + "px"
                $(target).css({
                    "left": left,
                    "transition": "left 0s ease"
                })
            }
        });

        $(target).parent().mouseout(function () {
            reset(target, resetLeft)
        });
    }
}

/***************************************************************************************************************************/
function footerTopNav() {

    if (!mobile()) {
        var titleWidth = $("footer .topNav section ._title").innerWidth() + parseInt($("footer .topNav section ._title").css("margin-right"))
        var ulWidth = 0
        for (var i = 0; i < $("footer .topNav section ul li").length; i++) {
            ulWidth += $("footer .topNav section ul li").eq(i).innerWidth()
        }
        var sectionWidth = titleWidth + ulWidth
        var action = (sectionWidth > $("footer .topNav").innerWidth()) ? true : false
        var width = $("footer .topNav").innerWidth()
        var overflow = sectionWidth - $("footer .topNav").innerWidth() + 10;

        $(window).resize(function () {

            titleWidth = $("footer .topNav section ._title").innerWidth() + parseInt($("footer .topNav section ._title").css("margin-right"))
            ulWidth = 0
            for (var i = 0; i < $("footer .topNav section ul li").length; i++) {
                ulWidth += $("footer .topNav section ul li").eq(i).innerWidth()
            }
            sectionWidth = titleWidth + ulWidth

            width = $("footer .topNav").innerWidth()
            overflow = sectionWidth - $("footer .topNav").innerWidth() + 10;
            action = (sectionWidth > $("footer .topNav").innerWidth()) ? true : false
        });

        var ie = new browser()
        // var transition = (ie.check() !== "IE") ? "0s" : "0s"

        $("footer .topNav").mousemove(function () {
            if (action) {
                var offsetX = event.clientX - $("header .hdContent").innerWidth()
                var widthPercent = (offsetX / width)
                var left = "-" + overflow * widthPercent.toFixed(3) + "px"
                $(this).find("section").css({
                    "left": left,
                    "transition": "0s"
                })
            }
        });

        $("footer .topNav").mouseout(function () {
            $(this).find("section").css({
                "left": 0,
                "transition": "0.5s"
            })
        });
    } else {
        if ($("footer .topNav ul li").length > 0 && mobile()) {
            const container = document.querySelector('footer .topNav ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    }
}

/***************************************************************************************************************************/

// 廣告第一次載入
function firstIn(){
    
    // var baseURL = $('.base-url-p').val();
    
    // var tempURL = document.referrer;    
    // var checkURL = tempURL.match(baseURL);
    var notFirstTime = sessionStorage.getItem("notFirstTime") || false;
    
    if(!notFirstTime && $("footer .commercial ._slick .single-item .item").length >0){
        commercial.all();
    }
    // else if(!tempURL){
    //     commercial.all();
    // }
    // else if(!checkURL){
    //     commercial.all();
    // }
    
    sessionStorage.setItem("notFirstTime",true);
}


var commercial ={

    open:function(){
        $("footer .commercial").addClass("open")
    },

    close_click:function(){
        $("footer .commercial .liboxClose").click(function(){
            commercial.close()
        })

        $("footer .commercial").click(function(e){
            if($(e.target).hasClass("commercial")){
                commercial.close()
            }
        })
    },

    close:function(){
        $("footer .commercial").addClass("close").removeClass("open");
        setTimeout(function(){
            $("footer .commercial").remove()
        },400)
    },

    all:function(){
        commercial.open();
        commercial.close_click()
    }
}


/***************************************************************************************************************************/
///////////////////////////////////////
//               menu                //
///////////////////////////////////////

var menu = {

    open_click: function () {
        $(".openMenu").click(function () {
            menu.all();
        });
    },

    open: function () {
        $("header .hdMenu").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $("header .hdMenu .liboxClose").click(function () {
            menu.close();
        });

        $("header .hdMenu").click(function(e){
            if($(e.target).hasClass("hdMenu")){
                menu.close();
            }
        })
    },

    close: function () {
        $("header .hdMenu").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .hdMenu").removeClass("close");
        }, 1000)
    },

    niceScroll:function(){
        $("header .hdMenu .content .floorIntro ul").niceScroll({
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

    all:function(){
        menu.open();
        menu.close_click();
        menu.niceScroll();
    }
}


var subscribe={
    open:function(){
        $("header .subscribe").addClass("open")
        subscribe.close_click()
    },
    close_click:function(){
        $("header .subscribe .liboxClose").click(function () {
            subscribe.close();
        });

        $("header .subscribe").click(function(e){
            if($(e.target).hasClass("subscribe")){
                subscribe.close();
            }
        })
    },
    close:function(){
        $("header .subscribe").addClass("close").removeClass("open");
        setTimeout(function () {
            $("header .subscribe").removeClass("close");
        }, 400)
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//          selectStore              //
///////////////////////////////////////

var selectStore = {

    open_click: function () {
        $(".openSelectStore").click(function () {
            selectStore.all()
        });
    },

    open: function () {
        $("header .selectStore").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $("header .selectStore .liboxClose").click(function () {
            selectStore.close();
        });
    },

    close: function () {
        $("header .selectStore").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .selectStore").removeClass("close");
            $("header .selectStore ._slick ul").slick('unslick');
        }, 1000)
    },

    slick: function () {
        if ($("header .selectStore ._slick ul li").length < 3) {
            $("header .selectStore ._slick ul li").eq(0).addClass("down")
        }

        $("header .selectStore ._slick ul").slick({
            centerMode: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: "800",
            prevArrow: "header .selectStore ._slick .icon-arrowLeft",
            nextArrow: "header .selectStore ._slick .icon-arrowRight",
            responsive: [{
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000
                    }
                }
            ]
        });
    },

    unitSelect: function () {
        $("header .selectStore ._title ul li").each(function () {
            $(this).click(function () {
                $(this).addClass("active").siblings().removeClass("active")
            })
        })
    },

    PerfectScrollbar: function () {
        if ($("header .selectStore ._title ul li").length > 0 && mobile()) {
            const container = document.querySelector('header .selectStore ._title ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    all: function () {
        selectStore.open();
        selectStore.close_click()
        selectStore.slick();
        selectStore.unitSelect();
        selectStore.PerfectScrollbar();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            goTop                  //
///////////////////////////////////////

function goTop() {
    scrollTop0()
    $(window).scroll(function () {
        scrollTop0()
    });
    // 在頂部
    function scrollTop0() {
        if ($(window).scrollTop() <= 200) {
            $("header .sideButton").addClass("out").removeClass("in");
        } else {
            $("header .sideButton").addClass("in").removeClass("out");
        }
    }
    $("header .goTop").click(function () {
        var time = $(window).scrollTop() / $("body").innerHeight() * 1500 + 500
        $("html,body").animate({
            scrollTop: 0
        }, time, 'easeOutCubic');
    });
}
// 向上滑
function scrollUp(){
    var scrollTop = $(window).scrollTop()
    $("html,body,#guide.index .content").animate({
        scrollTop: (scrollTop - 350)
    },400,'easeOutCubic')
}
// 向下滑
function scrollDown(){
    var scrollTop = $(window).scrollTop()
    $("html,body,#guide.index .content").animate({
        scrollTop: (scrollTop + 350)
    },400,'easeOutCubic')
}
// 返回上一頁
function back(){
    $("html").delay(100).animate({ opacity: "0" }, {
        queue: true,
        duration: 800,
        easing: "easeOutQuad",
        complete: function() {
            window.history.back()
        }
    });
}


function noMovement(second,href) { 
    if($("body").hasClass("guide") && !$("body").hasClass("commercial") && $("body").attr("id") !== "winform"){
        ifvisible.setIdleDuration(second)
        ifvisible.on("idle", function(){
            $("html").delay(100).animate({ opacity: "0" }, {
                queue: true,
                duration: 800,
                easing: "easeOutQuad",
                complete: function() {
                    window.location.assign(href);
                }
            });
        })
    }
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
////////////////////////////////////
//           驗證碼填寫            //
////////////////////////////////////

function vcode(target) {
    //cache dom
    var $inputs = $(target).find("input")
    //bind events
    $inputs.on('keyup', processInput);
    //define methods
    function processInput(e) {
        // 紀錄按的按鍵
        var value = e.originalEvent.key
        if(!mobile()){
            e.currentTarget.value = value
        }
        var x = e.charCode || e.keyCode;

        if ((x == 8 || x == 46) && e.currentTarget.value.length == 0) {
            var indexNum = $inputs.index(this);
            if (indexNum != 0) {
                $inputs.eq($inputs.index(this) - 1).focus();
            }
        }

        if (ignoreChar(e)) {
            return false;
        } else if (e.currentTarget.value.length == e.originalEvent.target.maxLength) {
            $(this).closest('li').addClass("checked").next().find('input').focus();
        } else if (e.currentTarget.value.length < e.originalEvent.target.maxLength) {
            $(this).closest('li').removeClass("checked");
        }
    }

    function ignoreChar(e) {
        var x = e.charCode || e.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
            return true;
        } else {
            return false
        }
    }
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


// banner的title的共同設定
function banerTitleWordAnimation(){
    wordAnimation(".index .banner ._title .ch", .1, 0)
    wordAnimation2(".index .banner ._title .en", .4, 0)
} 


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           dropDown             //
////////////////////////////////////

function dropDown(parentNode) {
    var dropDown
    if(parentNode !== undefined){
        dropDown = parentNode + " .dropDown"
    }else{
        dropDown = ".dropDown"
    }

    $(dropDown).each(function () {
        var $this = $(this)
        // 預設文字
        var defaultText = $this.find(".selectMenu p").text()
        // 清除選項
        $this.closest("form").find("button[type='reset']").click(function(){
            $this.removeClass("active").find(".selectMenu p").text(defaultText)
        })

        if(!mobile()){
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
        }
        else{
            // 新增select
            // get options
            var options = [""]
            $this.find("ul li").each(function(){
                options.push($(this).text())
            })

            // creata select
            var select = document.createElement("select");
            select.setAttribute("class", "mobileSelect")
            // add css
            select.setAttribute("style","position:absolute; bottom:0; left:0; width:100%; height:100%; opacity:0");
            
            var textnode = options.map(function(item,index){
                var addoption = document.createElement("option");
                addoption.text = item;
                addoption.value= [index,item];
                if(index == 0){
                    addoption.style.display = "none"
                }
                select.add(addoption);
            })

            // remove old select
            $this.find(".mobileSelect").remove()

            // add new select in dropDown
            $this.append(select)

            // clickfunction
            $this.find(".mobileSelect").click(function(){
                $this.find(".selectMenu").toggleClass("open");
            })
            
            // 點擊select等於點擊li
            $this.find(".mobileSelect").change(function(){
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
//           openVideoLibox        //
///////////////////////////////////////
let alreadyHidden

function openVideoLibox(target) {

    $(target).each(function () {
        var videoId = $(this).attr("data-videoId")
        if (videoId !== "") {
            $(this).addClass("hasVideo");
            $(this).find("figure").append("<button></button>");
            $(this).find("figure").click(function () {
                if (!mobile() && !$("body").hasClass("guide")) {
                    $("body").css({
                        "overflow-y": "hidden",
                        "padding-right": "1rem"
                    })
                } else {
                    $("body").css("overflow-y", "hidden");
                }
                var iframe = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                
                $("body").append("<article class='videoLibox'><div class='liboxClose'><span></span></div>" + iframe + "</article>")
                close()
            });
        }
    });
    function close() {
        $(".videoLibox .liboxClose").click(function () {
            $(".videoLibox").addClass("close");
            var action = (alreadyHidden !== undefined) ? (!alreadyHidden) : true
            if (!mobile() && action) {
                $("body").css({
                    "overflow-y": "visible",
                    "padding-right": "0rem"
                })
            } else if (mobile() && action) {
                $("body").css("overflow-y", "visible");
            }
            setTimeout(function () {
                $(".videoLibox").remove()
            }, 400)
        })
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           listHeaderFixed         //
///////////////////////////////////////

function listHeader(listHeader, listContent) {
    if ($(listHeader).css("display") !== "none") {
        var hdHeight = $(listHeader).innerHeight()
        var offsetLeft = $(listContent).offset().left
        var offsetTop = $(listContent).offset().top
        var offsetBottom = $(listContent).offset().top + $(listContent).innerHeight() - hdHeight
        var paddingLeft = $(listHeader).parent().css("padding-left")
        var width = $(listContent).innerWidth()

        $(window).resize(function () {
            hdHeight = $(listHeader).innerHeight()
            offsetLeft = $(listContent).offset().left
            offsetTop = $(listContent).offset().top
            offsetBottom = $(listContent).offset().top + $(listContent).innerHeight() - hdHeight
            paddingLeft = $(listHeader).parent().css("padding-left")
            width = $(listContent).width()
            detection($(window).scrollTop())
        })

        detection($(window).scrollTop())

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            detection(scrollTop)
        })

        function detection(scrollTop) {
            offsetBottom = $(listContent).offset().top + $(listContent).innerHeight() - hdHeight
            if (scrollTop > (offsetTop - hdHeight)) {
                $(listHeader).addClass("fixed")
                $(listHeader).css({
                    "width": (width + "px"),
                    "left": (offsetLeft + "px")
                })
            } else {
                $(listHeader).removeClass("fixed")
                $(listHeader).css({
                    "width": (width + "px"),
                    "left": paddingLeft
                })
            }

            if (scrollTop > offsetBottom) {
                $(listHeader).addClass("bottom")
            } else {
                $(listHeader).removeClass("bottom")
            }
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           listHeaderFixed         //
///////////////////////////////////////

function QAClick(target){
    var headerHeight = $("header .hdContent").innerHeight()
    $(target).each(function(){
        var $list = $(this)
        $(this).find(".question").click(function(){
            $(this).closest(".list").toggleClass("active").siblings().removeClass("active")
            $(this).closest(".list").find(".answer").slideToggle(500)
            $(this).closest(".list").siblings().find(".answer").slideUp(500)
            $this = $(this)
            if (mobile() && $list.hasClass("active")) {
                setTimeout(function () {
                    $("html,body").animate({
                        scrollTop: $this.offset().top - headerHeight
                    }, 800, 'easeOutCubic');
                }, 500)
            }
        })
    })
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           listHeaderFixed         //
///////////////////////////////////////
function rowHalf(target){
    $(target).each(function () {
        var thisClassNmae = $(this).attr("class")
        var nextClassName = $(this).next().attr("class")
        var targetClassName = (nextClassName == "table") ? thisClassNmae : (nextClassName == undefined) ? thisClassNmae : nextClassName
        if (thisClassNmae !== targetClassName) {
            $(this).addClass("half");
            $(this).next().addClass("half");
        }
    })
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//              index                //
///////////////////////////////////////

var index = {

    scroll: function () {
        if ($(window).scrollTop() > 10) {
            $("main .header").addClass("fixed noTransition");
        }
        $(window).scroll(function () {
            $("main .header").removeClass("noTransition")
            if ($(window).scrollTop() > 10) {
                $("main .header").addClass("fixed");
            } else {
                $("main .header").removeClass("fixed")
            }
        })
    },

    PerfectScrollbar: function () {
        $("main ._title ul li").each(function () {
            $(this).click(function () {
                $(this).addClass("active").siblings().removeClass("active")
            });
            
        });

        if ($("main ._title ul li").length > 0 && mobile()) {
            const container = document.querySelector('main ._title ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }

        if ($(".header .links ul li").length > 0 && mobile()) {
            const container = document.querySelector(".header .links ul ");
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }

        $('.footer .right ul').each(function () {
            if ($(this).find("li").length > 0 && mobile()) {
                const container = this
                const ps = new PerfectScrollbar(container, {
                    suppressScrollY: true,
                    maxScrollbarLength: 1
                });
            }
        });
    },

    scrollMove: function () {
        var x = ($(window).width() > 900) ? 0.2 : 0.1

        $(window).scroll(function () {
            scrollMove(".content .substation .row ._text", x);
        });

        var Safari = new browser

        if (Safari.check() == "Safari") {
            $(".content .substation .rows").addClass("safari")
        }
    },

    anchorClick: function () {
        var totalLength = $("#index.index article.header .links ul li").length
        var middle1 = Math.ceil(totalLength / 2)
        var middle2 = ((totalLength / 2) % 1 == 0) ? (middle1 + 1) : middle1

        $("#index.index article.header .links ul li").each(function () {
            var i = $(this).index()
            var numb = i + 1
            // 起始延遲時間
            var startDelayTime = .2
            // 間隔參數
            var gap = .3

            if (numb == middle1 || numb == middle2) {
                var delayTime = startDelayTime + "s"
            } else {
                var middle = (numb > middle2) ? middle2 : middle1
                var delayTime = Math.abs(numb - middle) * gap + startDelayTime + "s"
            }

            $(this).css("animation-delay", delayTime)

            $(this).off().click(function () {
                var x = (!mobile()) ? 50 : 0
                if (i == 0) {
                    var point = $(".content .news").offset().top - x
                } else {
                    var y = i - 1
                    var point = $(".content .substation .rows .row").eq(y).offset().top - $(window).height() / 2 + $(".content .substation .rows .row").eq(y).innerHeight() / 2 - x
                }

                var time = Math.abs(point - $(window).scrollTop()) / $("body").height() * 1500 + 500

                $("html,body").animate({
                    scrollTop: point
                }, time, 'easeOutCubic');
            })
        });
    },

    wordlatest: function () {
        wordlatest(40, "main .content .news ._slick ul li ._text .words")
    },

    all: function () {
        index.PerfectScrollbar();
        index.scroll();
        index.scrollMove();
        index.anchorClick();
        index.wordlatest();
    }
}

function scrollMove(target, multiple) {
    $(target).each(function () {
        var targetTop = this.getBoundingClientRect().top - $(window).height() / 2 + $(this).innerHeight() / 2 - 50
        var transform = "translateY(" + targetTop * multiple + "px)"
        $(this).css("transform", transform);
    })
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               home                //
///////////////////////////////////////
var home = {
    wordlatest: function () {
        wordlatest("55", ".news ._slick ul li .words");
    },

    dishesHover: function () {
        if ($(window).width() > 840) {
            $(".dishes section").each(function () {
                var src = $(this).find("ul li:first-child").attr("data-src")
                $(this).find(".big").append("<img src='" + src + "'/>")
                $(this).find("ul li:first-child").addClass("active")
            })

            $(".dishes section ._title ul li").each(function () {
                var src = $(this).attr("data-src")
                if (!mobile()) {
                    $(this).mouseover(function () {
                        $this = $(this)
                        $this.addClass("active").siblings().removeClass("active")
                        if (src !== $(".collage .content figure img").attr("src")) {
                            $(this).closest("section").find(".big").append("<img src='" + src + "'/>")
                            $targat = $(this).closest("section").find(".big img").eq(0)
                            $(this).closest("section").find(".big img").eq(0).addClass("fadeOut");
                            setTimeout(function () {
                                if ($($this).closest("section").find(".big img").length > 1) {
                                    $($this).closest("section").find(".big img").eq(0).remove()
                                }
                            }, 400)
                        }
                    });
                } else {
                    $(this).click(function () {
                        $this = $(this)
                        $this.addClass("active").siblings().removeClass("active")
                        if (src !== $(".collage .content figure img").attr("src")) {
                            $(this).closest("section").find(".big").append("<img src='" + src + "'/>")
                            $targat = $(this).closest("section").find(".big img").eq(0)
                            $(this).closest("section").find(".big img").eq(0).addClass("fadeOut");
                            setTimeout(function () {
                                if ($($this).closest("section").find(".big img").length > 1) {
                                    $($this).closest("section").find(".big img").eq(0).remove()
                                }
                            }, 400)
                        }
                    });
                }
            });

            if (!mobile()) {
                $(".dishes section ._title div").niceScroll({
                    horizrailenabled: false,
                    nativeparentscrolling: false,
                    cursorborder: "none",
                    cursorwidth: "3px",
                    cursorcolor: "#fff",
                    railpadding: {
                        top: 5,
                        right: 0,
                        left: 1,
                        bottom: 5
                    },
                })
            } else {
                $(".dishes section ._title div").css("overflow-y", "auto")
            }

        } else {
            $(".dishes section ._title ul li").each(function () {
                var src = $(this).attr("data-src")
                var href = $(this).find("a").attr("href")
                $(this).closest("section").find(".big").append("<a href='"+href+"'><img src='" + src + "'/></a>")
            });

            $(".dishes section .big").each(function () {
                var nav = $(this).closest("section").find("._title ul")
                $(this).slick({
                    asNavFor: nav,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: true
                })
            });

            $(".dishes section ._title ul").each(function () {
                var nav = $(this).closest("section").find(".big")
                $(this).slick({
                    asNavFor: nav,
                    centerMode: true,
                    centerPadding: '33.33%',
                    focusOnSelect: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false
                })
            })
        }
    },

    dishesArrow: function () {
        $(".dishes ._title").each(function () {
            var bgColor = $(this).css("background-color")
            if ($(window).width() > 840) {
                $(this).append("<b style='border-color: transparent transparent transparent " + bgColor + "'></b>")
            } else {
                $(this).append("<b style='border-color:" + bgColor + " transparent transparent transparent '></b>")
            }
        })
    },

    masonry: function () {
        $('.explore .masonry').masonry({
            itemSelector: '.explore .masonry>div',
            columnWidth: '.explore .masonry .grid-sizer',
        })
    },

    member: function () {
        if (!mobile()) {
            $(".member .content .row ._text ul").niceScroll({
                cursorborder: "none",
                cursorwidth: "5px",
                cursorcolor: "#ccc",
                nativeparentscrolling: false,
                railpadding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
            })
        } else {
            $(".member .content .row ._text ul").each(function () {
                if ($(this).find("li").length > 0 && mobile()) {
                    const container = this;
                    const ps = new PerfectScrollbar(container, {
                        suppressScrollY: true,
                        maxScrollbarLength: 1
                    });
                }
            })
        }
    },

    PerfectScrollbar: function () {
        $("main section._title ul li").each(function () {
            $(this).click(function () {
                $(this).addClass("active").siblings().removeClass("active")

                // var slides = $(".news ._slick>ul").slick("getSlick").$slides.length
                // for(var i = 0; i<slides;i++){
                //     $(".news ._slick>ul").slick("slickRemove",true)
                // }

                // $(".news ._slick>ul").html(`
                //     <li>
                //         <a href="javascript:void(0)">
                //             <div class="slogan" style="background-color:#a13838">HOT !</div>
                //                 <figure>
                //                     <img data-lazy="../../upload/fa2/home/newsImg_420_390.jpg" alt="">
                //                 </figure>
                //             <div class="_text">
                //                 <p class="type">BRANDS</p>
                //                 <p class="title">MaxMara 時尚冬裝新上市</p>
                //                 <p class="words">購買新品滿3000折300元，再送高級質感圍巾</p>
                //             </div>
                //         </a>
                //     </li>
                //     <li>
                //         <a href="javascript:void(0)">
                //             <div class="slogan" style="background-color:#a13838">HOT !</div>
                //                 <figure>
                //                     <img data-lazy="../../upload/fa2/home/newsImg_420_390.jpg" alt="">
                //                 </figure>
                //             <div class="_text">
                //                 <p class="type">BRANDS</p>
                //                 <p class="title">MaxMara 時尚冬裝新上市</p>
                //                 <p class="words">購買新品滿3000折300元，再送高級質感圍巾</p>
                //             </div>
                //         </a>
                //     </li>
                //     <li>
                //         <a href="javascript:void(0)">
                //             <div class="slogan" style="background-color:#a13838">HOT !</div>
                //                 <figure>
                //                     <img data-lazy="../../upload/fa2/home/newsImg_420_390.jpg" alt="">
                //                 </figure>
                //             <div class="_text">
                //                 <p class="type">BRANDS</p>
                //                 <p class="title">MaxMara 時尚冬裝新上市</p>
                //                 <p class="words">購買新品滿3000折300元，再送高級質感圍巾</p>
                //             </div>
                //         </a>
                //     </li>
                //     <li>
                //         <a href="javascript:void(0)">
                //             <div class="slogan" style="background-color:#a13838">HOT !</div>
                //                 <figure>
                //                     <img data-lazy="../../upload/fa2/home/newsImg_420_390.jpg" alt="">
                //                 </figure>
                //             <div class="_text">
                //                 <p class="type">BRANDS</p>
                //                 <p class="title">MaxMara 時尚冬裝新上市</p>
                //                 <p class="words">購買新品滿3000折300元，再送高級質感圍巾</p>
                //             </div>
                //         </a>
                //     </li>
                // `)

                // resetSlick()
            
            });
        });

        if ($("main section._title ul li").length > 0 && mobile()) {
            const container = document.querySelector('main section._title ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    autoFit: function () {
        $('.explore .masonry>div figure').each(function () {
            var imgWidth = $(this).find("img").width();
            var imgHeight = $(this).find("img").height();
            var figureWidth = $(this).width();
            var figureHeight = $(this).height();
            if (imgWidth < figureWidth) {
                $(this).addClass("widthNot")
            } else if (imgHeight < figureHeight) {
                $(this).addClass("heightNot")
            }
        });
        if ($(window).width() < 801 && $(window).width() > 400) {
            var small = $(".explore .masonry .small")
            for (var i = 0; i < small.length; i++) {
                if (i % 2 == 1) {
                    $(small[i]).insertAfter(small[(i - 1)])
                }
            }
        }
    },

    memberBg:function(){
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isiOS){
            var bgImg = $('.member ._title').attr("data-src")
            var html = "<div class='bg' style='background-image: url("+bgImg+")'></div>"
            $(".member ._title").append(html);
        }
    },

    all: function () {
        home.wordlatest();
        home.dishesHover();
        home.autoFit();
        home.masonry();
        home.member();
        home.PerfectScrollbar();
        home.dishesArrow();
        home.memberBg();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               news                //
///////////////////////////////////////

var news = {

    unitClick: function () {
        $(".index .unit ul li").click(function () {
            $(this).addClass('active').siblings().removeClass("active")
        })
    },

    seeIntro:function(){
        var headerHeight = $("header .hdContent").innerHeight()
        
        $(".detail .rows .row .eventTime .listTable .listbody .list").each(function(){
            var $this = $(this)
            $(this).find(".seeIntro button").off().click(function(){
                $(this).toggleClass("active");
                $this.toggleClass("active").siblings().removeClass("active").find("button").removeClass("active");
                $this.find(".intro").slideToggle(500).toggleClass("active");
                $this.siblings().find(".intro").slideUp(500).removeClass("active");
                if (mobile() && $this.hasClass("active")) {
                    var time = (($this.offset().top - headerHeight)/$(window).height())*200 + 200
                    setTimeout(function () {
                        $("html,body").animate({
                            scrollTop: $this.offset().top - headerHeight
                        }, time, 'easeOutCubic');
                    }, 500)
                }
            })
        });
    },

    all: function () {
        if ($("body").hasClass("index")) {
            banerTitleWordAnimation()
            navXscroll(".index .unit ul");
            news.unitClick();
        }
        if ($("body").hasClass("detail")) {
            rowHalf(".detail .rows .row>div:not(.table):nth-child(odd)")
            openVideoLibox(".detail ._slick ul li");
        }
        if ($("body").hasClass("detail")) {
            news.seeIntro();
        }
    }
}




var loginLibox ={

    open: function () {
        $(".loginLibox").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
        loginLibox.all();
    },

    close_click: function () {
        $(".loginLibox .liboxClose").click(function () {
            loginLibox.close();
        });

        $(".loginLibox").click(function(e){
            if($(e.target).hasClass("loginLibox")){
                loginLibox.close();
            }
        });
    },

    close: function () {
        $(".loginLibox").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".loginLibox").removeClass("close");
        }, 400)
    },

    niceScroll:function(){
        $(".loginLibox section").niceScroll({
            cursorborder: "none",
            cursorwidth: "5px",
            cursorcolor: "#000",
            nativeparentscrolling: false,
            railpadding: { 
                top: 0, 
                right: 1, 
                left: 0, 
                bottom: 0 
            }
        })
    },

    input:function(){
        $(".loginLibox input").each(function(){
            $(this).closest(".item").click(function(){
                $(this).find("input").focus()
            })
        })
    },

    all:function(){
        loginLibox.close_click();
        loginLibox.niceScroll();
        loginLibox.input();
    }
}


var infoLibox ={

    open: function () {
        $(".infoLibox").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
        infoLibox.all();
    },

    close_click: function () {
        $(".infoLibox .liboxClose").click(function () {
            infoLibox.close();
        });

        $(".infoLibox").click(function(e){
            if($(e.target).hasClass("infoLibox")){
                infoLibox.close();
            }
        });
    },

    close: function () {
        $(".infoLibox").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".infoLibox").removeClass("close");
        }, 400)
    },

    niceScroll:function(){
        $(".infoLibox section").niceScroll({
            cursorborder: "none",
            cursorwidth: "5px",
            cursorcolor: "#000",
            nativeparentscrolling: false,
            railpadding: { 
                top: 0, 
                right: 1, 
                left: 0, 
                bottom: 0 
            }
        })
    },

    input:function(){
        $(".infoLibox input").each(function(){
            $(this).closest(".item").click(function(){
                $(this).find("input").focus()
            })
        })
    },

    all:function(){
        infoLibox.close_click();
        infoLibox.niceScroll();
        infoLibox.input();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               floor               //
///////////////////////////////////////
let anchorClickTarget

var floor = {
    masonry: function () {
        $('.index .block .sort').each(function () {
            var small = $(this).find(".grid-box:not(.big)")
            for (var i = 1; i < small.length; i++) {
                if (i % 2 == 0) {
                    $(small[i]).insertAfter(small[(i - 1)])
                }
            }

            // var left = ($(this).index() % 2 == 1) ? false : true
            $(this).find('.masonry').masonry({
                itemSelector: '.sort .grid-box',
                columnWidth: '.sort .grid-sizer',
                // originLeft: left
            })
        })
    },

    input: function () {
        $(".index .floorContent ._search form input").keydown(function (e) {
            if (e.keyCode == 13) {
                e.preventDefault()
                $(this).closest("form").find("button").click()
            }
        })
    },

    displayWay: function () {
        $(".index .floorContent ._search .buttons button").each(function () {
            $(this).click(function () {
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active")
                $(".index .floorContent .tableContent>div").eq(i).addClass("active").siblings().removeClass("active")
                /*waypoint*/
                _waypoint.floorW();
                /* b-lazy */
                _Blazy.floorW();
                $(".index .floorContent .tableContent>div").eq(i).siblings().find(".show").removeClass("show")
                if ($('.index .block .sort .masonry').length !== 0 && i==0) {
                    $('.index .block .sort .masonry').masonry('layout');
                }
            })
        })
    },

    anchor: function () {
        $(".detail .overview .anchor ul li").each(function () {
            $(this).click(function () {
                var i = $(this).index() + 2
                var hdHeight = $("header .hdContent").innerHeight()
                var windowHeight = (!mobile()) ? ($(window).height()) : ($(window).height() - hdHeight)
                var $target = $(".detail main article").eq(i)
                var targetOffset = $target.offset().top
                var targetHeight = $target.innerHeight()
                var point = (targetHeight > windowHeight) ? targetOffset : ($("body").hasClass("guide"))?(targetOffset - windowHeight/3 + targetHeight / 2):(targetOffset - windowHeight / 2 + targetHeight / 2)
                var time = Math.abs(point - $(window).scrollTop()) / $("body").height() * 1500 + 500
                $("html,body").animate({
                    scrollTop: point
                }, time, 'easeOutCubic');
                anchorClickTarget = i
            })
        })
    },

    all: function () {
        if ($("body").hasClass("index")) {
            floor.masonry();
            banerTitleWordAnimation();
            floor.input();
            floor.displayWay();
            listHeader(".floorContent .listHeader", ".floorContent .listContent")
            navXscroll(".index .unit ul");
        }
        if ($("body").hasClass("detail")) {
            navXscroll(".detail .overview .anchor ul");
            openVideoLibox(".detail .story ._slick ul li");
            openVideoLibox(".detail .environment .row");
            floor.anchor();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             service               //
///////////////////////////////////////

var service = {
    masonry: function () {
        var small = []
        $(".index .linkContent .masonry .grid-box").each(function () {
            if (!$(this).hasClass("big")) {
                small.push($(this))
            }
            var noBg = $(this).find(">a").css("background-image")
            var src = noBg.replace('url(', '').replace(')', '').replace(/\"/gi, "").split(".")
            var isImg = noBg.split("(")[0] == "linear-gradient" || src[src.length - 1] == 'jpg' || src[src.length - 1] == 'png' || src[src.length - 1] == 'none'
            if (!isImg || src == "none") {
                $(this).addClass("noBg")
            }
        })

        for (var i = 1; i < small.length; i++) {
            if (i % 2 == 1) {
                $(small[i]).insertAfter(small[(i - 1)])
            }
        }

        $(".index .linkContent .masonry").masonry({
            itemSelector: '.grid-box',
            columnWidth: '.grid-sizer',
        })
    },

    wordAnimation: function () {
        wordAnimation(".banner ._title .ch", .1, 0);
        wordAnimation2(".banner ._title .en", .4, 0);
    },

    hasLibox: function () {
        $(".facility main .content .type ul li .place").each(function () {
            if ($(this).attr("data-src") !== "") {
                $(this).addClass("openLibox")
                $(this).click(function () {
                    facilityLibox.open($(this))
                });
            }
        })
    },

    lostLibox: function () {
        $("main .content .topTitle .buttons button").each(function () {
            $(this).click(function () {
                var i = $(this).index()
                $this = $(this)
                $(".liboxs .libox").eq(i).addClass("open")
                if (!mobile() && !$("body").hasClass("guide")) {
                    $("body").css({
                        "overflow-y": "hidden",
                        "padding-right": "1rem"
                    })
                } else {
                    $("body").css("overflow-y", "hidden")
                }
            });
        });

        $("main .libox .liboxClose").each(function () {
            $(this).click(function () {
                close(this)
            });
        });

        $("main .libox").click(function (e) {
            if ($(e.target).hasClass("libox")) {
                close(this)
            }
        })

        function close(target) {
            $this = $(target)
            $this.closest(".libox").removeClass("open").addClass("close")
            if (!mobile()) {
                $("body").css({
                    "overflow-y": "visible",
                    "padding-right": "0rem"
                })
            } else {
                $("body").css("overflow-y", "visible")
            }
            setTimeout(function () {
                $this.closest(".libox").removeClass("close")
            }, 400)
        }
    },

    form: function () {
        $(".contact main .inputArea input").each(function () {
            $(this).closest(".box").click(function () {
                $(this).find("input").focus()
            })
        })

        $(".contact main .inputArea textarea").each(function () {
            $(this).closest(".box").click(function () {
                $(this).find("textarea").focus()
            })
        })

        $(".statement").click(function(e){
            if($(e.target).hasClass("statement") ||$(e.target).context.localName == "section"){
                liboxClose();
            }
        })
    },

    all: function () {
        service.masonry();
        // 非首頁
        if (!$("body").hasClass("index")) {
            service.wordAnimation();
        }
        if ($("body").hasClass("facility")) {
            service.hasLibox();
        }
        if ($("body").hasClass("lost")) {
            service.lostLibox();
            listHeader(".lost .list .listHeader", ".lost .list .listContent")
        }
        if ($("body").hasClass("contact")) {
            service.form();
        }
        if ($("body").hasClass("FQ")) {
            QAClick(".FQ .QAtable .type .lists .list");
        }
        if ($("body").hasClass("other")) {
            openVideoLibox(".other .content ._slick ul li");
            rowHalf(".other .content .rows .row>div:nth-child(odd)")
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             other                 //
///////////////////////////////////////

var other ={
    wordAnimation: function () {
        wordAnimation(".banner ._title .ch", .1, 0);
        wordAnimation2(".banner ._title .en", .4, 0);
    },

    formChang:function(){
        $("main article.unit ul li").each(function(){
            $(this).click(function(){
                var i =$(this).index()
                var x = i + 1
                $(this).addClass("active").siblings().removeClass("active")
                $(".cooperation .content .topTitle div").eq(i).addClass("active").siblings().removeClass("active")
                $(".cooperation .content section").eq(x).addClass("active").siblings().removeClass("active")
                _waypoint.otherW();
                _Blazy.otherW();
            })
        })
    },  

    scroll:function(){
        $(".cooperation .content .formContent form .file .inputArea .fileName").each(function(){
            $(this).mCustomScrollbar({
                axis:"x",
                advanced:{ 
                    updateOnContentResize: true ,
                    updateOnImageLoad: true,
                    updateOnSelectorChange: true
                }
            })
        })
    },

    dateDropper: function() {
        var monthsNumber = 1

        var time = new Date().getHours()
        var startDay = +1

        $(".sel_date input").datepicker({ minDate: startDay, maxDate: +61, numberOfMonths: monthsNumber });
        $(".sel_date input").datepicker("option", "showAnim", "slideDown");
        $(".sel_date input").datepicker("option", "dateFormat", "yy-mm-dd");
        $(".sel_date input").datepicker("option", $.datepicker.regional["zh-TW"]);
    },

    inputFocus:function(){
        $(".cooperation .formContent form .boxs .box .inputArea input[type='text']").each(function(){
            var $this = $(this)
            $(this).closest(".box").click(function(){
                $this.focus()
            })
        });
    },

    all:function(){
        other.wordAnimation()
        
        if ($("body").hasClass("join")) {
            service.lostLibox();
            listHeader(".join .tableContent .list .listHeader", ".join .tableContent .list .listBody")
        }

        if ($("body").hasClass("cooperation")) {
            other.formChang();
            other.scroll();
            other.dateDropper();
            other.inputFocus();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//                dm                 //
///////////////////////////////////////

var dm ={

    showButton: function(){
        $("main .content .buttons button").each(function(){
            $(this).click(function(){
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active")
                $("main .content .product>div").eq(i).addClass("active").siblings().removeClass("active")
                _waypoint.dmW();
                _Blazy.dmW();
            })
        })
    },

    all:function(){
        banerTitleWordAnimation()
        navXscroll("main article.unit ul");
        dm.showButton();
        rowHalf(".detail .rows .row>div:not(.table):nth-child(odd)")
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//                card               //
///////////////////////////////////////

var card ={

    anchor:function(){
        $(".index main article.unit ul li").each(function(){
            $(this).click(function(){
                var i = $(this).index() + 2
                $(this).addClass("active").siblings().removeClass("active")
                $(".index main article").eq(i).addClass("active").siblings().removeClass("active")
                $(".index main article").eq(i).find(".show").removeClass("show")
                // /* b-lazy */
                _Blazy.cardW();
                // /*waypoint*/
                _waypoint.cardW();
            })
        });

        $(".detail .topTitle .anchor ul li").each(function(){
            $(this).click(function(){
                var i = $(this).index() + 2
                $(this).addClass("active").siblings().removeClass("active")
                var point =$(".detail main article").eq(i).offset().top

                var time = Math.abs(point - $(window).scrollTop()) / $("body").height() * 1200 + 500

                $("html,body").animate({
                    scrollTop: point
                }, time, 'easeOutCubic');
            })
        });
    },

    wordlatest:function(){
        wordlatest(40,".detail .treatment .content ul li ._text p")
    },

    perfectScrollbar:function(){
        if ($(".detail .topTitle .anchor ul li").length > 0 && mobile()) {
            const container = document.querySelector('.detail .topTitle .anchor');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    all:function(){
        banerTitleWordAnimation()
        card.anchor();
        QAClick(".detail .qa .QAtable .type .lists .list")
        card.wordlatest();
        card.perfectScrollbar();
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//                about              //
///////////////////////////////////////

var about = {

    wordlatest:function(){
        wordlatest(45,".index .space .rows .row ._text p");
    },

    changePage:function(){
        $("main article.unit ul li").each(function(){
            $(this).find("a").off().click(function(){
                $(this).closest("li").addClass("active").siblings().removeClass("active")
                var i = $(this).closest("li").index()+2
                if(i==2){
                    $(".explore .rows .row ._img ul").slick("slickSetOption","autoplay",true);
                    $('.explore .rows .row ._img ul').slick('slickGoTo',0);
                }else{
                    $(".explore .rows .row ._img ul").slick("slickSetOption","autoplay",false);
                }
                $("main>article").eq(i).addClass("active").siblings().removeClass("active")
                /* b-lazy */
                _Blazy.aboutW();
                setTimeout(function(){
                    $("main>article .show").removeClass("show");
                    /*waypoint*/
                    _waypoint.aboutW();
                },100);
            })
        })
    },

    all:function(){
        banerTitleWordAnimation();
        about.wordlatest();
        QAClick(".index .QAtable .type .lists .list");
        openVideoLibox(".index .explore .topSlick ul li");
        rowHalf("#about.index .explore .rows .row>div:nth-child(odd)")
        about.changePage();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               brand               //
///////////////////////////////////////

var brand = {

    all:function(){
        banerTitleWordAnimation();
        navXscroll(".index .unit ul");
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               search              //
///////////////////////////////////////

var search = {

    count:function(){
        var listLength = $(".index .floorContent .List .sort ul li").length 
        var newsLength = $(".index .newsContent ul li").length 
        $(".index .banner ._title .words .numb").text(listLength+newsLength);

        if((listLength+newsLength)==0){
            $(".index .notFound").css("display","block");
            $(".index .floorContent").css("display","none");
            $(".index .newsContent").css("display","none");
        }else{
            $("#search.index .notFound").css("display","none");
            $(".index .floorContent").css("display","block");
            $(".index .newsContent").css("display","block");
        }
    },

    all:function(){
        banerTitleWordAnimation()
        search.count();
    }
}

var searchLibox = {
    open_click:function(){
        $(".openSearch").click(function(){
            searchLibox.open();
        })
    },

    open: function () {
        $(".searchLibox").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
    },

    close_click: function () {
        $(".searchLibox .liboxClose").click(function () {
            searchLibox.close();
        });

        $(".searchLibox").click(function(e){
            if($(e.target).hasClass("searchLibox")){
                searchLibox.close();
            }
        });
    },

    close: function () {
        $(".searchLibox").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".searchLibox").removeClass("close");
        }, 400)
    },

    changType:function(){
        $("header .searchLibox ._title .buttons button").each(function(){
            $(this).click(function(){
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active")
                $("header .searchLibox .forms form").eq(i).slideDown(500).siblings().slideUp(500)
                $("header .searchLibox .forms form").eq(i).addClass("active").siblings().removeClass("active")
            })
        })
    },

    input:function(){
        
        $("header .searchLibox section form .box .inputArea input").each(function(){
            $(this).keydown(function(e){
                if (e.keyCode == 13) {
                    e.preventDefault()
                }
            })
            // easterEggs
            $(this).off().change(function(){
                if($(this).val() =="i am nick" && $("easterEggs").length==0){
                    easterEggs()
                }
            })
        })
    },

    all:function(){
        searchLibox.open_click();
        searchLibox.close_click();
        searchLibox.changType();
        searchLibox.input();
    }
}

function easterEggs(){
    $("body").append("<article class='easterEggs'><section><div class='egg'>N</div><div class='words'><p class='word1'>Hellow Nick</p><p class='word2'>Welcome Back</p><p class='word3'>How May I Help You?</p></div></section></article>")
    $(".easterEggs .egg").click(function() {
        $(".easterEggs").addClass("close")
        setTimeout(function(){
            $(".easterEggs").remove()
        },400)
    })


    function Particle( x, y, radius ) {
        this.init( x, y, radius );
    }
    Particle.prototype = {
        init: function( x, y, radius ) {
            this.alive = true;
            this.radius = radius || 10;
            this.wander = 0.15;
            this.theta = random( TWO_PI );
            this.drag = 0.92;
            this.color = '#fff';
            this.x = x || 0.0;
            this.y = y || 0.0;
            this.vx = 0.0;
            this.vy = 0.0;
        },
        move: function() {
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= this.drag;
            this.vy *= this.drag;
            this.theta += random( -0.5, 0.5 ) * this.wander;
            this.vx += sin( this.theta ) * 0.1;
            this.vy += cos( this.theta ) * 0.1;
            this.radius *= 0.96;
            this.alive = this.radius > 0.5;
        },
        draw: function( ctx ) {
            ctx.beginPath();
            ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    // ----------------------------------------
    // Example
    // ----------------------------------------
    var MAX_PARTICLES = 280;
    var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
    var particles = [];
    var pool = [];
    var demo = Sketch.create({
        container: document.querySelector('.easterEggs'),
        eventTarget: document.querySelector('.easterEggs section'),
    });
    demo.setup = function() {
        // Set off some initial particles.
        var i, x, y;
        for ( i = 0; i < 20; i++ ) {
            x = ( demo.width * 0.5 ) + random( -100, 100 );
            y = ( demo.height * 0.5 ) + random( -100, 100 );
            demo.spawn( x, y );
        }
    };
    demo.spawn = function( x, y ) {
        if ( particles.length >= MAX_PARTICLES )
            pool.push( particles.shift() );
        particle = pool.length ? pool.pop() : new Particle();
        particle.init( x, y, random( 5, 40 ) );
        particle.wander = random( 0.5, 2.0 );
        particle.color = random( COLOURS );
        particle.drag = random( 0.9, 0.99 );
        theta = random( TWO_PI );
        force = random( 2, 8 );
        particle.vx = sin( theta ) * force;
        particle.vy = cos( theta ) * force;
        particles.push( particle );
    }
    demo.update = function() {
        var i, particle;
        for ( i = particles.length - 1; i >= 0; i-- ) {
            particle = particles[i];
            if ( particle.alive ) particle.move();
            else pool.push( particles.splice( i, 1 )[0] );
        }
    };
    demo.draw = function() {
        demo.globalCompositeOperation  = 'lighter';
        for ( var i = particles.length - 1; i >= 0; i-- ) {
            particles[i].draw( demo );
        }
    };
    demo.mousemove = function() {
        var particle, theta, force, touch, max, i, j, n;
        for ( i = 0, n = demo.touches.length; i < n; i++ ) {
            touch = demo.touches[i], max = random( 1, 4 );
            for ( j = 0; j < max; j++ ) demo.spawn( touch.x, touch.y );
        }
    };
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               food                //
///////////////////////////////////////
var food={

    all:function () { 
        banerTitleWordAnimation();
        navXscroll(".index .unit ul");
        rowHalf(".detail .rows .row>div:not(.table):nth-child(odd)")
        openVideoLibox(".detail ._slick ul li");
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             supplier              //
///////////////////////////////////////

var supplier = {
    wordAnimation:function(){
        wordAnimation("article.banner ._title .ch", .1, 0)
        wordAnimation2("article.banner ._title .en", .4, 0)
    },
    input:function(){
        $(".form form .type .inputArea input[type='text'],.form form .type .inputArea input[type='password']").each(function(){
            var $this = $(this)
            $(this).closest(".type").click(function(){
                $this.focus();
            });
        })
    },

    dateDropper: function() {
        $(".sel_date.getMonth input").datepicker({ 
            minDate: null, 
            maxDate: 0, 
            numberOfMonths: 1,
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'MM yy',
            // showAnim: "slideDown",
            beforeShow: function(input,inst){
                $("#ui-datepicker-div").addClass("out")
            },
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
                var fullData = this.value.split("/")
                var removeDate = fullData.pop()
                $(this).val(fullData.join(" / "))
                setTimeout(function(){
                    $("#ui-datepicker-div").removeClass("out")
                },500)
            }
        });
        $(".sel_date.getMonth input").datepicker("option", $.datepicker.regional["zh-TW"]);

        $(".sel_date.getDay input").datepicker({ 
            minDate: null, 
            maxDate: 0, 
            numberOfMonths: 1,
            dateFormat: 'yy-mm-dd',
            showAnim: "slideDown"
        });

        $(".sel_date.getDay input").datepicker("option", $.datepicker.regional["zh-TW"]);

    },

    selectCounter:function(){
        $(".dropDown ul li").each(function(){
            $(this).click(function(){
                // 專櫃名稱
                var counterName = $(this).attr("data-counterName")
                // 結算日期
                var settlement = $(this).attr("data-settlement")
                if(counterName !== undefined){
                    $(".counterName").addClass("active").find("p").text(counterName)
                }
                if (settlement !== undefined){
                    $(".settlement ").addClass("active").find("p").text(settlement)
                }
            })
        })
    },

    all:function(){
        supplier.wordAnimation();
        supplier.dateDropper();
        supplier.selectCounter();
        navXscroll("article.unit ul");
        supplier.input();
        if($("body").hasClass("invoice")){
            listHeader(".invoice .list .listHeader", ".invoice .list .listContent")
        }
    }
}



var forgetLibox ={

    open: function () {
        $(".forgetLibox").addClass("open")
        if (!mobile() && !$("body").hasClass("guide")) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }
        forgetLibox.all();
    },

    close_click: function () {
        $(".forgetLibox .liboxClose").click(function () {
            forgetLibox.close();
        });

        $(".forgetLibox").click(function(e){
            if($(e.target).hasClass("forgetLibox")){
                forgetLibox.close();
            }
        });
    },

    close: function () {
        $(".forgetLibox").addClass("close").removeClass("open");
        if (!mobile()) {
            $("body").css({"overflow-y": "visible","padding-right":"0rem"});
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".forgetLibox").removeClass("close");
        }, 400)
    },

    niceScroll:function(){
        $(".forgetLibox section").niceScroll({
            cursorborder: "none",
            cursorwidth: "5px",
            cursorcolor: "#000",
            nativeparentscrolling: false,
            railpadding: { 
                top: 0, 
                right: 1, 
                left: 0, 
                bottom: 0 
            }
        })
    },

    input:function(){
        $(".forgetLibox input").each(function(){
            $(this).closest(".item").click(function(){
                $(this).find("input").focus()
            })
        })
    },

    all:function(){
        forgetLibox.close_click();
        forgetLibox.niceScroll();
        forgetLibox.input();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               test                //
///////////////////////////////////////

var test ={

    click:function(tableArry){
        $(".pic figure").each(function(){
            var picwidth = $(this).innerWidth()
            var picheight = $(this).innerHeight()
            var dragging = false
            var key = ""
            var x1 ,y1
            tableArry = tableArry
            console.log(tableArry)
            $(this).off().on("mousedown",function(e){
                e.preventDefault();
                var x = (e.originalEvent.offsetX/picwidth*100).toFixed(2)
                var y = (e.originalEvent.offsetY/picheight*100).toFixed(2)
                dragging = true
                key =  (+new Date())
                tableArry.push({
                    x1:x,
                    y1:y,
                    x2:"",
                    y2:"",
                    key: key
                })

                var div = "<div id="+key+" style='top:"+y+"%;left:"+x+"%'></div>"
                $(this).append(div)
            });

            $(this).on('mousemove',function(e){
                if(dragging){
                    var x = (e.originalEvent.offsetX/picwidth*100).toFixed(2)
                    var y = (e.originalEvent.offsetY/picheight*100).toFixed(2)

                    tableArry[(tableArry.length -1)].x2 = x
                    tableArry[(tableArry.length -1)].y2 = y

                    var width = Math.abs(tableArry[(tableArry.length -1)].x1 - x).toFixed(2)
                    var height = Math.abs(tableArry[(tableArry.length -1)].y1 - y).toFixed(2)
                    var id = tableArry[(tableArry.length -1)].key
                    
                    $("#"+key).css({
                        "width": (width+"%"),
                        "height": (height+"%") 
                    })
                }
            })

            $(this).on("mouseup",function(e){
                e.preventDefault();
                var x = (e.originalEvent.offsetX/picwidth*100).toFixed(2)
                var y = (e.originalEvent.offsetY/picheight*100).toFixed(2)
                dragging = false

                tableArry[(tableArry.length -1)].x2 = x
                tableArry[(tableArry.length -1)].y2 = y

                var width = Math.abs(tableArry[(tableArry.length -1)].x1 - x).toFixed(2)
                var height = Math.abs(tableArry[(tableArry.length -1)].y1 - y).toFixed(2)
                var id = tableArry[(tableArry.length -1)].key
                
                $("#"+key).css({
                    "width": (width+"%"),
                    "height": (height+"%") 
                })

                var data = "<li data-id='"+key+"'><div>上方偏移量 <input value='"+tableArry[(tableArry.length -1)].y1+"%'></div><div>左側偏移量 <input value='"+tableArry[(tableArry.length -1)].x1+"%'></div><div>區塊寬度<input value='"+width+"%'></div><div>區塊高度<input value="+height+"></div><button type='button' onclick='test.remove(this);'>X</button></li>"
                $(".table ul").append(data)
            });

            $(this).on('touchstart',function(){
            });

            $(this).on('touchend',function(){
            });

        })
    },

    remove:function(target){
        $(target).click(function(){
            var id = $(this).closest("li").attr("data-id")
            $(this).closest("li").remove();
            $("#"+id).remove()
        })
    },

    img:function(){
        var tableArry = []
        $(" input[type='file']").change(function(event) {
            $(".book .pic figure div").remove()
            $(".book .table ul li").remove()
            tableArry = []

            // 取得檔案名子
            var fileName = $(this).val().split('/').pop().split('\\').pop();
            var filePath = $(this).val()
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                // 等待圖片上傳完成後加入到結構中
                reader.onload = function(e) {

                    var image = new Image();

                    image.src = e.target.result;

                    image.onload = function() {
                        $(".pic  img").attr("src",image.src)
                        test.click(tableArry);
                        // 將新增的圖片加到選項之一
                        // var html = '<li><div><div class="_img"><img src="' + e.target.result + '"  data-path="'+filePath+'" ><div class="hoverBox"><span class="iconN-hook"></span></div></div><p  class="name">' + fileName + '</p><p  class="price">' + price + '</p></div></li>'
                    }
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    },
    
    all:function(){
        test.img();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            winform                //
///////////////////////////////////////

var winform = {

    intro:function(){
        $(".container .content .typeBox .table .listTable  .openIntro").each(function(){
            $(this).click(function(){
                $(this).closest(".list").toggleClass("active").find(".intro").slideToggle()
                $(this).closest(".list").siblings().removeClass("active").find(".intro").slideUp()
            })
        })
    },

    select:function(){
        $(".container .content .typeBox .select p").each(function(){
            $(this).click(function(){
                var i = $(this).index()
                $(this).addClass("active").siblings().removeClass("active");
                $(".container .content .typeBox .box .table>div").eq(i).addClass("active").siblings().removeClass("active")
            })
        })
    },

    branchLink:function(){
        $(".container .branchLink a").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
        $("#winform.detail .container .type ul li").each(function(){
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active")
                dropDown();
                winform.all();
            })
        })
    },

    // 倒數計時
    countDown:function(){

    },
    
    all:function(){
        winform.intro();
        winform.select();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            member                 //
///////////////////////////////////////

var member = {

    wordAnimation:function(){
        wordAnimation(".index main .content section .topTitle .ch", .1, 0)
        wordAnimation2(".index main .content section .topTitle .en", .4, 0)
    },

    perfectScrollbar:function(){
        $("main .content .overview .row").each(function(){
            var $this = $(this)
            if ($this.find("._text ul li").length > 0 && mobile()) {
                const container = $this.find("._text ul")[0];
                const ps = new PerfectScrollbar(container, {
                    suppressScrollY: true,
                    maxScrollbarLength: 1
                });
            }
        })
    },

    dateDropper: function() {
        var monthsNumber = 1

        var time = new Date().getHours()
        var startDay = +1

        $(".sel_date input").datepicker({ maxDate: -5840,changeMonth: true,changeYear: true});
        $(".sel_date input").datepicker("option", "showAnim", "slideDown");
        $(".sel_date input").datepicker("option", "dateFormat", "yymmdd");
        $(".sel_date input").datepicker("option", "yearRange", "c-70:c+0");
        $(".sel_date input").datepicker("option", $.datepicker.regional["zh-TW"]);
        $(".sel_date input").change(function(){
            var val = $(this).val()
            var inputvalue = val.replace("/","").replace("/","")
            var text = Object.assign("",inputvalue)
            var textarray = inputvalue.split("")
            textarray.splice(4,0,"/")
            textarray.splice(7,0,"/")
            $(this).closest(".sel_date").find("label").text(textarray.join(""))
            $(this).val(inputvalue)
        })
    },

    openInterest:function(target){
        $(target).closest(".openInterest").addClass("open")
        $(target).closest(".item").next(".interest").slideDown({
            duration:500,
            complete:function(){
                $(".memberFormLibox .memberInfo section").getNiceScroll().resize();
            }
        })
    },

    closeInterest:function(target){
        $(target).closest(".interest").prev(".item").find(".openInterest").removeClass("open")
        $(target).closest(".interest").slideUp({
            duration:500,
            complete:function(){
                $(".memberFormLibox .memberInfo section").getNiceScroll().resize();
            }
        });

        var textArray = []
        $(target).closest(".interest").find("ul li").each(function(){
            var checkboxs = $(this).find("input[type='checkbox']")[0]
            if(checkboxs.checked){  
                textArray.push($(checkboxs).next("label").find("p").text())
            }
        })
        var text = (textArray.length == 0)?"請選擇(可複選)":textArray.join("｜")
        $(target).closest(".interest").prev(".item").find(".openInterest").addClass("active").find("p").text(text)
    },

    showRecord:function(item){
        if(item == "open"){
            $(event.currentTarget).toggleClass("active")
            $("main .content .table").slideToggle(800)
        }else{
            $("main article.content section.buttons button").eq(2).removeClass("active")
            $("main .content .table").slideUp(800)
        }
    },

    seeMore:function(){
        $("main .content .table .listTable .listbody .list").each(function(){
            $(this).find(".seeMore button").click(function(){
                $(this).closest(".list").toggleClass("active").find(".moreInfo").slideToggle()
                $(this).closest(".list").siblings().removeClass("active").find(".moreInfo").slideUp()
            });
        })  
    },

    barCode:function(){
        $(".codeImg ._img").html("")
        var code = $(".codeImg  .card figure").attr("data-barcode")
        $(".codeImg  ._img").barcode(code, "codabar",{
        });
    },
    
    all:function(){
        member.wordAnimation();
        navXscroll(".banner .topTitle .unit ul");
        if($("body").hasClass("member")){
            member.perfectScrollbar();
        }
        if($("body").hasClass("basicInfo")){
            member.dateDropper();
        }
        if($("body").hasClass("point")){
            member.seeMore();
        }
        if($("body").hasClass("barCode")){
            member.barCode();
        }
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
    // 導覽機 閒置幾秒之後會變廣告頁 noMovement(秒數,想要轉到哪頁)
    var second = $("body").attr("data-delaySecond")
    var href = $("body").attr("data-indexHerf")
    if(second !==undefined && href !== undefined){
        noMovement(second,href);
    }
    

    firstIn();

    youtubeSlick();

    /*入口頁 啟動的JS*/
    if (page == "index") {
        /*waypoint*/
        _waypoint.indexW();
        /* b-lazy */
        _Blazy.indexW();
        /*slick*/
        _slick.homeW();
        index.all();
    }

    /*首頁home 啟動的JS*/
    if (page == "home") {
        /*waypoint*/
        _waypoint.homeW();
        /* b-lazy */
        _Blazy.homeW();
        /*slick*/
        _slick.homeW();
        home.all();
    }

    /*最新消息*/
    if (page == "news") {
        /*waypoint*/
        _waypoint.newsW();
        /* b-lazy */
        _Blazy.newsW();
        /*slick*/
        _slick.newsW();
        news.all();
    }

    /*樓層簡介*/
    if (page == "floor") {
        /*waypoint*/
        _waypoint.floorW();
        /* b-lazy */
        _Blazy.floorW();
        /*slick*/
        _slick.floorW();
        floor.all();
    }

    /*服務中心*/
    if (page == "service") {
        /*waypoint*/
        _waypoint.serviceW();
        /* b-lazy */
        _Blazy.serviceW();
        /*slick*/
        _slick.serviceW();
        service.all();
    }

    /*其他選項*/
    if (page == "other") {
        /*waypoint*/
        _waypoint.otherW();
        /* b-lazy */
        _Blazy.otherW();
        
        other.all();
    }

    /*電子型錄*/
    if (page == "dm") {
        /*waypoint*/
        _waypoint.dmW();
        /* b-lazy */
        _Blazy.dmW();
        /*slick*/
        _slick.dmW();
        
        dm.all();
    }

    /*卡友中心*/
    if (page == "card") {
        /*waypoint*/
        _waypoint.cardW();
        /* b-lazy */
        _Blazy.cardW();
        
        card.all();
    }

    /*關於漢神*/
    if (page == "about") {
        /*waypoint*/
        _waypoint.aboutW();
        /* b-lazy */
        _Blazy.aboutW();
        /*slick*/
        _slick.aboutW();
        
        about.all();
    }

    /*關於漢神*/
    if (page == "brand") {
        /*waypoint*/
        _waypoint.brandW();
        /* b-lazy */
        _Blazy.brandW();
        
        brand.all();
    }

    /*搜尋*/
    if (page == "search") {
        /*waypoint*/
        _waypoint.searchW();
        /* b-lazy */
        _Blazy.searchW();
        
        search.all();
    }

    /*搜尋*/
    if (page == "guide") {
        /*waypoint*/
        _waypoint.guideW();
        /* b-lazy */
        _Blazy.guideW();
        /*slick*/
        _slick.guideW();
        
        // guide.all();
    }

    /*搜尋*/
    if (page == "food") {
        /*waypoint*/
        _waypoint.foodW();
        /* b-lazy */
        _Blazy.foodW();
        /*slick*/
        _slick.newsW();
        
        food.all();
    }

    /*搜尋*/
    if (page == "supplier") {
        supplier.all();
    }

    /*導覽機會員*/
    if(page == "winform"){
        //  /*slick*/
        _slick.winformW()
        winform.all();
    }

    /*dm畫框*/
    if (page == "test") {
        test.all();
    }

    /*官網會員*/
    if (page == "member") {
        /*waypoint*/
        _waypoint.memberW();
        /* b-lazy */
        _Blazy.memberW();

        member.all();
    }
});