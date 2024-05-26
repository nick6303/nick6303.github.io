/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {

    homeW: function () {
        if ($("body").hasClass("index")) {
            $(".awards .works .box").each(function (index, element) {
                $(element).waypoint({
                    handler: function () {
                        $(element).addClass('in');
                    },
                    offset: '50%'
                });
            });

            $(".titleWords>*").each(function (index, element) {
                $(element).waypoint({
                    handler: function () {
                        $(element).addClass("show");
                    },
                    offset: '60%'
                });
            });

            $(".gallery ._slick ul.pc").waypoint({
                handler: function () {
                    $(".gallery ._slick ul.pc").addClass('show');
                },
                offset: '60%'
            });

            $(".activety .detailLink ul li").each(function (index, element) {
                $(element).waypoint({
                    handler: function () {
                        $(element).addClass('show');
                    },
                    offset: '60%'
                });
            });

            $(".news .newsBox>*").each(function (index, element) {
                $(element).waypoint({
                    handler: function () {
                        $(element).addClass('in');
                    },
                    offset: '50%'
                });
            });
        }
    },

    newsW: function () {
        if ($("body").hasClass("index")) {
            $(".newsBox>*").each(function (index, element) {
                $(element).waypoint({
                    handler: function () {
                        $(element).addClass('in');
                    },
                    offset: '60%'
                });
            });
        }
    },

    contactW: function () {
        $(".tableContent").waypoint({
            handler: function () {
                $(".tableContent").addClass('show');
            },
            offset: '80%'
        });
    },

    competitionW: function () {
        $(".content .type2 .juryContent ul li").each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('in');
                },
                offset: '50%'
            });
        });

        $(".content .type3 .winnerContent .box").each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('in');
                },
                offset: '50%'
            });
        });
    },

    galleryW: function () {
        $(".galleryContent .works .box").each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('in');
                },
                offset: '65%'
            });
        });
    },

    aboutW: function () {

        $(".aboutContent .vision .box").each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('in');
                },
                offset: '65%'
            });
        });

        $(".content .socialMedia").waypoint({
            handler: function () {
                $(".content .socialMedia").addClass('show');
            },
            offset: '80%'
        });

        $(".sponsors").waypoint({
            handler: function () {
                $(".sponsors").addClass('show');
            },
            offset: '50%'
        });

        $(".aboutContent .archive .word").waypoint({
            handler: function () {
                $(".aboutContent .archive .word").addClass('show');
            },
            offset: '80%'
        });


        $(".aboutContent .archive .linkBox").each(function (index, element) {
            $(element).waypoint({
                handler: function (direction) {
                    if (direction == "up" && $(window).width() > 1024) {
                        $(element).removeClass("in")
                    }
                    if (direction == "down") {
                        $(element).addClass("in")
                    }
                },
                offset: '60%'
            });
        });

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
            offset: 300,
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest(".box").addClass("show");
                $(ele).closest(".big").addClass("show");
                $(ele).closest(".half").addClass("show");
            }
        });
    },

    newsW: function () {
        if ($("body").hasClass("index")) {
            var bLazy = new Blazy({
                offset: 300,
                success: function (ele) {
                    Waypoint.refreshAll();
                    $(ele).closest(".box").addClass("show");
                    $(ele).closest(".big").addClass("show");
                    $(ele).closest(".half").addClass("show");
                }
            });
        }
    },

    jugeW: function () {
        if ($("body").hasClass("selection")) {
            var bLazy = new Blazy({
                offset: 100,
                success: function (ele) {
                    Waypoint.refreshAll();
                    $(ele).closest("._img").addClass("show");
                }
            });
        }
    },

    competitionW: function () {
        if ($("body").hasClass("detail")) {
            var bLazy = new Blazy({
                offset: 100,
                success: function (ele) {
                    Waypoint.refreshAll();
                    $(ele).closest(".paragraph_objblock_list").addClass("show");
                    $(ele).closest("li").addClass("show")
                    $(ele).closest(".box").addClass("show")
                }
            });
        }
        if ($("body").hasClass("jury")) {
            var bLazy = new Blazy({
                offset: 100,
                success: function (ele) {
                    Waypoint.refreshAll();
                    $(ele).closest(".picture").addClass("show")
                }
            });
        }

        if ($("body").hasClass("winner")) {
            var bLazy = new Blazy({
                offset: 100,
                success: function (ele) {
                    $(ele).parent().addClass("show");
                }
            });
        }
    },

    galleryW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest(".box").addClass("show");
            }
        });
    },

    aboutW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest(".box").addClass("show");
                $(ele).closest(".linkBox").addClass("show");
                $(ele).closest(".paragraph_objblock_list").addClass("show");
            }
        });
    },

}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////

function slick(o) {
    var slick = {
        homeSlick: function () {
            $(".jury .mainSlick .juryImg").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 10000,
                pauseOnHover: false,
                swipe: false,
                fade: true,
                asNavFor: '.jury .sideSlick ul,.jury .mainSlick ._text',
                lazyLoad: 'ondemand',
                prevArrow: '.jury .mainSlick .icon-slickLeft',
                nextArrow: '.jury .mainSlick .icon-slickRight',
            });

            $(".jury .sideSlick ul").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                pauseOnHover: false,
                autoplay: true,
                autoplaySpeed: 10000,
                swipe: false,
                fade: true,
                asNavFor: '.jury .mainSlick .juryImg',
                lazyLoad: 'ondemand',
            });

            $(".jury .mainSlick ._text").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
                pauseOnHover: false,
                swipe: false,
                fade: true,
                lazyLoad: 'ondemand',
                asNavFor: '.jury .mainSlick .juryImg',
            });

            $(".gallery ._slick ul.pc").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                swipe: false,
                fade: true,
                arrows: false,
                lazyLoad: 'ondemand',
            });

            $(".gallery ._slick ul.mobile").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: false,
                centerMode: true,
                variableWidth: true,
                arrows: false,
                lazyLoad: 'ondemand',
            });


            $('.gallery ._slick .icon-slickLeft').click(function () {
                $('.gallery ._slick ul.pc').slick("getSlick").slickPrev();
                $('.gallery ._slick ul.mobile').slick("getSlick").slickPrev();
            });

            $('.gallery ._slick .icon-slickRight').click(function () {
                $('.gallery ._slick ul.pc').slick("getSlick").slickNext();
                $('.gallery ._slick ul.mobile').slick("getSlick").slickNext();
            });
        },

        competitionSlick: function () {
            if ($("body").hasClass("index")) {
                $("._slick ul").slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: true,
                    prevArrow: '._slick .arrow .icon-slickLeft',
                    nextArrow: '._slick .arrow .icon-slickRight',
                    responsive: [{
                            breakpoint: 1601,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: '0 0 25px 0',
                            }
                        }
                    ]
                });
            }
        },

        memberSlick: function () {
            if ($("body").hasClass("index")) {
                $(".boxContent .design .design_slick ._slick").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lazyLoad: 'ondemand',
                    speed: 800,
                    prevArrow: '.design_slick .arrow .icon-slickLeft',
                    nextArrow: '.design_slick .arrow .icon-slickRight',
                });
            }
        },

        jugeSlick: function () {
            if ($("body").hasClass("overview")) {
                $(".boxContent .selection ._slick").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    speed: 800,
                    prevArrow: '.selection_slick .arrow .icon-slickLeft',
                    nextArrow: '.selection_slick .arrow .icon-slickRight',
                    responsive: [{
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 2,
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
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
            }
        },
        aboutSlick: function () {
            if ($("body").hasClass("detail")) {
                $("._slick ul").slick({
                    speed: 1000,
                    variableWidth: true,
                    centerMode: true,
                    autoplay: true,
                    swipe: false,
                    autoplaySpeed: 5000,
                    prevArrow: '.arrow .icon-slickLeft',
                    nextArrow: '.arrow .icon-slickRight',
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            swipe: true,
                        }
                    }, {
                        breakpoint: 901,
                        settings: {
                            swipe: true,
                            variableWidth: false,
                            centerPadding: '0',
                        }
                    }]
                });
            }
        }
    }

    if (o != undefined) {
        // 如果o有帶值 執行特定個 js
        slick[o]();

    } else if ($('.slick').length > 0) {
        // 如果o沒帶值 抓body的id  執行那個switch
        var page = $('body').attr('id');

        switch (page) {
            case 'home':
                slick.homeSlick();
                break;
            case 'product':
                slick.productSlick();
                break;
            default:
                break;
        }
    }
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
        /*menu*/
        navMenu.all();
        // header文字顏色設定  依據圖片顏色轉色
        headerWordColor();
        // header浮動出現
        if ($("body").attr("id") == "home") {
            headerFixedTpye1();
        } else {
            headerFixedTpye2();
        }
        // banner向下滑
        bannerScrollDown();
        autoTo();
        $(".QA.fromMenu").click(function () {
            ajaxCompetitionQA();
            navMenu.close();
        });
    },
    /*footer*/
    ft: function () {
        /*回到最上*/
        BackToTop();
        // 隱私權政策燈箱
        privacyLibox.all();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            選單navMenu            //
///////////////////////////////////////
var navMenu = {
    open_click: function () {
        $("header .burgerMenu").click(function () {
            navMenu.open();
        });
        
        if(location.href.split("?")[1]=="menuopen"){
            navMenu.open();
        }
    },

    open: function () {
        $("header .navMenu").addClass("open");
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
            navMenu.circleBox();
        } else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".navMenu section .liboxClose,.navMenu .bg").click(function () {
            navMenu.close();
        });
    },

    close: function () {
        $("header .navMenu").removeClass("open");
        $("header .navMenu").addClass("close");

        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0rem"
            })
            $(".navMenu section .right .circleBox .circle").css({
                "top": "",
                "left": ""
            })
        }
        // 行動裝置版
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $("header .navMenu").removeClass("close");
            // 把已經開啟的圓關閉
            $(".navMenu section .right .circleBox .circle.active").removeClass("active");
            // 將圓把回原位
            if ($(window).width() > 1024) {
                $(".navMenu section .right .circle").css({
                    "top": "calc(50% - 85px)",
                    "left": "calc(50% - 85px)"
                });
            }
        }, 1100)
    },

    circleBox: function () {
        var $circle = $(".navMenu section .right .circle")
        var len = $circle.length
        // 盒子的寬
        var rightWidth = $(".navMenu section .right").width();
        // 盒子的高
        var rightHeight = $(".navMenu section .right").height();
        // 泡泡的寬
        var circleWidth = $circle.width();
        // 泡泡的高
        var circleHeight = $circle.height();

        switch (len) {
            case 1:
                oneCircle()
                break;
            case 2:
                twoCircle()
                break;
            case 3:
                threeCircle()
                break;
            case 4:
                fourCircle()
                break;
            default:
                if (len > 6) {
                    moreThanSix()
                } else {
                    normal()
                }
        }

        // 一個泡泡
        function oneCircle() {
            $circle.each(function () {
                var availableWidth = rightWidth - circleWidth
                var availableHeight = rightHeight - circleHeight
                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))

                position(this, x, y);
            })
        };

        // 兩個泡泡
        function twoCircle() {
            $circle.each(function () {
                var i = $(this).closest(".circleBox").index()

                var boxWidth = rightWidth / 2

                var availableWidth = boxWidth - circleWidth

                var availableHeight = rightHeight - circleHeight

                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))
                switch (i) {
                    case 0:
                        var x = x
                        break;
                    case 1:
                        var x = x + boxWidth
                        break;
                }

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))

                position(this, x, y)
            });
        };

        // 三個泡泡
        function threeCircle() {
            $circle.each(function () {
                var i = $(this).closest(".circleBox").index()

                var boxWidth = rightWidth / 3

                var availableWidth = boxWidth - circleWidth

                var availableHeight = rightHeight - circleHeight

                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))
                switch (i) {
                    case 0:
                        var x = x
                        break;
                    case 1:
                        var x = x + boxWidth
                        break;
                    case 2:
                        var x = x + (boxWidth * 2)
                        break;
                }

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))

                position(this, x, y)
            })
        };

        // 四個泡泡
        function fourCircle() {
            $circle.each(function () {
                var i = $(this).closest(".circleBox").index()

                var boxWidth = rightWidth / 2

                var availableWidth = boxWidth - circleWidth

                var boxHeight = rightHeight / 2

                var availableHeight = boxHeight - circleHeight

                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))
                switch (i % 2) {
                    case 0:
                        var x = x
                        break;
                    case 1:
                        var x = x + boxWidth
                        break;
                }

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))

                switch (Math.floor(i / 2)) {
                    case 0:
                        var y = y
                        break;
                    case 1:
                        var y = y + boxHeight
                        break;
                }
                position(this, x, y)
            })
        };

        // 五個或六個泡泡
        function normal() {
            $circle.each(function () {
                var i = $(this).closest(".circleBox").index()

                var boxWidth = rightWidth / 3

                var availableWidth = boxWidth - circleWidth

                var boxHeight = rightHeight / 2

                var availableHeight = boxHeight - circleHeight

                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))
                switch (i % 3) {
                    case 0:
                        var x = x
                        break;
                    case 1:
                        var x = x + boxWidth
                        break;
                    case 2:
                        var x = x + (boxWidth * 2)
                        break;
                }

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))
                switch (Math.floor(i / 3)) {
                    case 0:
                        var y = y
                        break;
                    case 1:
                        var y = y + boxHeight
                        break;
                }
                position(this, x, y)
            })
        };

        function moreThanSix() {
            $circle.each(function () {
                var i = $(this).closest(".circleBox").index()

                var boxWidth = rightWidth / 3

                var availableWidth = boxWidth - circleWidth

                var boxHeight = rightHeight / 3

                var availableHeight = boxHeight - circleHeight

                // 產生任意數X 
                var x = Math.floor(Math.random() * Math.floor(availableWidth))
                switch (i % 3) {
                    case 0:
                        var x = x
                        break;
                    case 1:
                        var x = x + boxWidth
                        break;
                    case 2:
                        var x = x + (boxWidth * 2)
                        break;
                }

                // 產生任意數y
                var y = Math.floor(Math.random() * Math.floor(availableHeight))
                switch (Math.floor(i / 3)) {
                    case 0:
                        var y = y
                        break;
                    case 1:
                        var y = y + boxHeight
                        break;
                    case 2:
                        var y = y + (boxHeight * 2)
                        break;
                }
                position(this, x, y)
            })
        };

        // 加上位置
        function position(target, x, y) {
            $this = $(target)
            var z = Math.floor(Math.random() * Math.floor($(".circleBox").length))
            var timing = (8 - (z * 1)) + "s"
            var animate = "orbit" + Math.floor(Math.random() * 2)
            $this.css({
                "top": y,
                "left": x,
                "animation-duration": timing,
                "animation-name": animate
            })
        }
    },

    circleClick: function () {
        if ($(window).width() > 1024) {
            $(".navMenu section .right .circleBox .circle .first .text").click(function () {
                $(this).closest(".circle").addClass("active");
                // 把其他的圓關閉
                $(this).closest(".circleBox").siblings().find(".circle").removeClass("active");
            });

            $(".navMenu section .right .circleBox .circle .circleClose").click(function () {
                $(this).closest(".circle").removeClass("active");
            });
        } else {
            $(".navMenu section .right .circleBox .circle .first").click(function () {
                $(this).closest(".circle").addClass("active");
                // 把其他的圓關閉
                $(this).closest(".circleBox").siblings().find(".circle").removeClass("active");
            });

            $(".navMenu section .right .circleBox .circle .circleClose").click(function () {
                $(this).closest(".circle").removeClass("active");
            });
        }
    },

    hover: function () {
        if ($(window).width() > 1024) {
            $(".navMenu .circle .first .text").mouseover(function () {
                $(this).closest(".first").addClass("hover");
                $(this).closest(".circle").addClass("pause")
            });
            $(".navMenu .circle .first .text").mouseout(function () {
                $(this).closest(".first").removeClass("hover");
                $(this).closest(".circle").removeClass("pause")
            });
        }
    },

    rwdSignUp: function () {
        $(".rwdChangeButton").click(function () {
            $(".navMenu section").toggleClass("active");
        });

        $(".navMenu section .back").click(function () {
            $(".navMenu section").removeClass("active");
        });
    },

    all: function () {
        navMenu.open_click();
        navMenu.close_click();
        navMenu.circleClick();
        navMenu.hover();
        navMenu.rwdSignUp();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            隱私權政策             //
///////////////////////////////////////

var privacyLibox = {
    open_click: function () {
        $(".openPrivacy").click(function () {
            privacyLibox.open();
        });
    },

    open: function () {
        $(".privacyLibox").addClass("open");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".privacyLibox .liboxClose").click(function () {
            privacyLibox.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("privacyLibox")) {
                privacyLibox.close();
            }
        });
    },

    close: function () {
        $(".privacyLibox").removeClass("open");
        $(".privacyLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".privacyLibox").removeClass("close");
        }, 1100);
    },

    scrollBar: function () {
        $(".privacyLibox .ruleContent").mCustomScrollbar({

        });
    },

    all: function () {
        privacyLibox.open_click();
        privacyLibox.close_click();
        privacyLibox.scrollBar();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            autoTo                 //
///////////////////////////////////////

function autoTo() {

    $("header .hdLink ul li a").each(function () {
        $(this).click(function () {
            var i = $(this).attr("data-toDownload");

            localStorage.setItem("toDownload", i);

        });
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            BackToTop              //
///////////////////////////////////////

function BackToTop() {

    $(".goTop,.ftGoTop").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500, 'easeOutCubic');
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//       header&banner word color    //
///////////////////////////////////////

function headerWordColor() {

    // banner是slick的情況下
    var slickImgData = $(".banner .slickImg ul li:nth-child(2) img").data("color");

    if (slickImgData == "darkBg") {
        $(".header").addClass("darkBg");
        $(".banner").addClass("darkBg");
    }

    if ($(".banner .slickImg ul li").length == 1) {
        if ($(".banner .slickImg ul li img").data("color") == "darkBg") {
            $(".header").addClass("darkBg");
            $(".banner").addClass("darkBg");
        }
    }

    var slick_li = document.querySelectorAll(".banner .slickImg ul li")

    $('.banner .slickImg ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var i = nextSlide

        var nextSlickImgData = $(slick_li[i]).find("img").data("color");

        if (nextSlickImgData == "darkBg") {
            $(".header").addClass("darkBg");
            $(".banner").addClass("darkBg");

        } else {
            $(".header").removeClass("darkBg");
            $(".banner").removeClass("darkBg");
        }
    });

    // banner無slick的情況下
    var bannerImgData = $(".banner .banner_img img").data("color");;

    if (bannerImgData == "darkBg") {
        $(".header").addClass("darkBg");
        $(".banner").addClass("darkBg");
    }

}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//     header fixed nav 版本一       //
///////////////////////////////////////


// header 浮動出現
function headerFixedTpye1() {
    var nobanner = $("header").attr("data-nobanner")
    var firstArticleHeight = $("main article:first-child").height();
    var firstArticlePaddingTop = parseInt($("main article:first-child").css("padding-top"));
    var firstArticlePaddingBottom = parseInt($("main article:first-child").css("padding-bottom"));
    var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom
    var headerHeight = $("header").height();

    var lastscrollY = 0;
    var windowHeight = $(window).height();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
        var footerHeight = $("footer").height() + parseInt($("footer").css("padding-top")) + parseInt($("footer").css("padding-bottom"))
        // 首頁日程區塊高度
        var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))

        var bodyHeight = $("body").height() + parseInt($("body").css("padding-bottom"))
        var x = bodyHeight - windowHeight - 100
        var nowscrollY = $(this).scrollTop();
        // 判斷是否為向上
        var isUp = nowscrollY < lastscrollY

        // pc版
        if ($(window).width() > 1024) {
            // 加入浮動
            if (scrollTop >= firstArticleTotalHeight) {
                $("header").addClass("fixed");
            } else if (scrollTop < firstArticleHeight) {
                $("header").removeClass("fixed");
            }
            // 到底部
            var targetHeight = mainHeight
            if ($("main").has(".timeline").length > 0) {
                var targetHeight = mainHeight - timelineHeight
            }
            var outTrigerPoint = targetHeight - $(window).height();
            if (scrollTop >= outTrigerPoint) {

                $("header").removeClass("fixed");
                $("header").addClass("bottom");
                var y = footerHeight + timelineHeight
                // 如果沒有timeline的時候
                var x = "translateY(-" + footerHeight + "px"
                // 如果有timeline的時候
                if ($("main").has(".timeline").length > 0) {
                    var x = "translateY(-" + y + "px"
                }
                // 將header的高度往上提
                $("header .burgerMenu,header .hdLogo,header .hdLink").css("transform", x)
            } else if (scrollTop < outTrigerPoint && scrollTop >= firstArticleTotalHeight) {
                $("header").removeClass("bottom");
                $("header").addClass("fixed");
                // 將header的高度恢復
                $("header .burgerMenu,header .hdLogo,header .hdLink").css("transform", "none")
            }
        }
        // 行動裝置板
        else {

            if (scrollTop >= headerHeight) {
                $("header").addClass("prepare");
            } else if (scrollTop < headerHeight) {
                $("header").removeClass("prepare");
            }

            if (scrollTop > firstArticleTotalHeight && isUp && scrollTop < x) {
                $("header").addClass("fixed");
            } else if (scrollTop <= firstArticleHeight && !isUp) {
                $("header").removeClass("fixed");
            } else if (!isUp) {
                $("header").removeClass("fixed");
            } else if (scrollTop <= headerHeight) {
                $("header").removeClass("fixed");
            }
            setTimeout(function () {
                lastscrollY = nowscrollY;
            }, 100);
        }
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//     header fixed nav 版本二       //
///////////////////////////////////////

// header 浮動出現
function headerFixedTpye2() {
    var nobanner = $("header").attr("data-nobanner")
    var firstArticleHeight = $("main article:first-child").height();
    var firstArticlePaddingTop = parseInt($("main article:first-child").css("padding-top"));
    var firstArticlePaddingBottom = parseInt($("main article:first-child").css("padding-bottom"));
    var firstArticleTotalHeight = 0

    var headerHeight = $("header").height()
    if ($(window).width() < 1025) {
        var headerHeight = headerHeight + 170
    } else if ($(window).width() < 501) {
        var headerHeight = headerHeight + 180
    }

    var lastscrollY = 0;
    var windowHeight = $(window).height();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
        var footerHeight = $("footer").height() + parseInt($("footer").css("padding-top")) + parseInt($("footer").css("padding-bottom"))
        // 日程區塊高度
        var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))

        var bodyHeight = $("body").height() + parseInt($("body").css("padding-bottom"))
        var x = bodyHeight - windowHeight - 100
        var nowscrollY = $(this).scrollTop();
        // 判斷是否為向上
        var isUp = nowscrollY < lastscrollY

        // pc版
        if ($(window).width() > 1024) {
            // 加入浮動
            if (scrollTop >= firstArticleTotalHeight) {
                $("header").addClass("fixed");
            } else if (scrollTop < firstArticleHeight) {
                $("header").removeClass("fixed");
            }
            // 到底部
            var targetHeight = mainHeight
            if ($("main").has(".timeline").length > 0) {
                var targetHeight = mainHeight - timelineHeight
            }
            var outTrigerPoint = targetHeight - $(window).height();
            if (scrollTop >= outTrigerPoint) {

                $("header").removeClass("fixed");
                $("header").addClass("bottom");
                var y = footerHeight + timelineHeight
                // 如果沒有timeline的時候
                var x = "translateY(-" + footerHeight + "px"
                // 如果有timeline的時候
                if ($("main").has(".timeline").length > 0) {
                    var x = "translateY(-" + y + "px"
                }
                // 將header的高度往上提
                $("header .burgerMenu,header .hdLogo,header .hdLink").css("transform", x)
            } else if (scrollTop < outTrigerPoint && scrollTop >= firstArticleTotalHeight) {
                $("header").removeClass("bottom");
                $("header").addClass("fixed");
                // 將header的高度恢復
                $("header .burgerMenu,header .hdLogo,header .hdLink").css("transform", "none")
            }
        }
        // 行動裝置板
        else {

            if (scrollTop >= (headerHeight)) {
                $("header").addClass("prepare");
            } else if (scrollTop < (headerHeight)) {
                $("header").removeClass("prepare");
            }

            if (scrollTop > firstArticleTotalHeight && isUp && scrollTop < x && scrollTop > headerHeight) {
                $("header").addClass("fixed");
            } else if (scrollTop <= firstArticleHeight && !isUp) {
                $("header").removeClass("fixed");
                $("header").removeClass("top");
            } else if (!isUp) {
                $("header").removeClass("fixed");
                $("header").removeClass("top");
            } else if (scrollTop <= headerHeight) {
                $("header").removeClass("fixed");
                $("header").addClass("top");
            }
            setTimeout(function () {
                lastscrollY = nowscrollY;
            }, 100);
        }
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
//             下拉式選單            //
///////////////////////////////////////

// 下拉式選單
function dropdownList() {
    $(".dropList .selectMenu").click(function () {
        var ele = $(this)

        if ($(ele).hasClass("open")) {
            $(".nicescroll-cursors").addClass("hide");
        } else {
            $(".nicescroll-cursors").removeClass("hide");
        }

        $(ele).toggleClass("open");

        // 開啟選單

        $(ele).parent().find("ul").slideToggle(400);

        // 點選其他物件 關閉選單
        $(document).click(function (e) {
            if ($(ele).parent().has(e.target).length === 0) {
                $(ele).parent().find("ul").slideUp(400);
                $(ele).removeClass("open");
                $(".nicescroll-cursors").addClass("hide");
                setTimeout(function () {
                    $(".nicescroll-cursors").removeClass("hide");
                }, 500);
            }
        });
    });

    $(".dropList ul").niceScroll({
        cursorborder: 'none',
        cursorcolor: 'transparent',
        cursorwidth: 4,
        mousescrollstep: 20,
        scrollspeed: 30,
        railpadding: {
            top: 0,
            right: 1,
            left: 0,
            bottom: 0
        },
        nativeparentscrolling: false,
    });

    // 選擇li後關閉選單
    $(".dropList ul li").click(function () {
        $this = $(this)

        $this.addClass("checked");
        $this.siblings().removeClass("checked");

        // 螢幕尺寸小於900以下啟動

        $this.closest(".dropList").find(".selectMenu").removeClass("open");

        $this.closest("ul").slideUp(400);

        $this.closest(".dropList").find(".selectMenu p").text($this.text())

        $(".nicescroll-cursors").addClass("hide");
        setTimeout(function () {
            $(".nicescroll-cursors").removeClass("hide");
        }, 500);

        var isOther = $this.attr("data-isOther")
        if (isOther) {
            $("#service .step1 .method .workbox.other").slideDown(400);
        } else {
            $("#service .step1 .method .workbox.other").slideUp(300);
            $("#service .step1 .method .workbox.other").find("input").val("");
        }

    });
}

function dropdownList2() {
    // 第一層開始
    $(".dropList2 .selectMenu").click(function () {
        var ele = $(this)

        if ($(ele).hasClass("open")) {
            $(".nicescroll-cursors").addClass("hide");
        } else {
            $(".nicescroll-cursors").removeClass("hide");
        }

        $(ele).toggleClass("open");

        // 開啟選單

        $(ele).closest(".dropList2").find(".box").slideToggle(400);

        // 點選其他物件 關閉選單
        $(document).click(function (e) {
            if ($(ele).parent().has(e.target).length === 0) {
                $(ele).parent().find(".box").slideUp(400);
                $(ele).removeClass("open");
                $(".nicescroll-cursors").addClass("hide");
                setTimeout(function () {
                    $(".nicescroll-cursors").removeClass("hide");
                }, 500);
            }
        });
    });

    $(".dropList2 .box").niceScroll({
        cursorborder: 'none',
        cursorcolor: 'transparent',
        cursorwidth: 4,
        mousescrollstep: 20,
        scrollspeed: 30,
        railpadding: {
            top: 0,
            right: 1,
            left: 0,
            bottom: 0
        },
        nativeparentscrolling: false,
    });
    // 第一層結束

    // 第二層開始
    $(".dropList2 .box>div p").click(function () {
        var ele = $(this)
        $(ele).toggleClass("open");
        // 開啟選單
        if ($(ele).hasClass("open")) {
            $(ele).closest("div").find("ul").slideDown(500);
            $(ele).closest("div").siblings().find("ul").slideUp(500);
        } else {
            $(ele).closest("div").find("ul").slideUp(500);
        }
        setTimeout(function () {
            $(".dropList2 .box").getNiceScroll().resize();
        }, 500);
        // 點選其他物件 關閉選單
        $(document).click(function (e) {
            if ($(ele).parent().has(e.target).length === 0) {
                $(ele).closest("div").find("ul").slideUp(500);
                $(ele).removeClass("open");
                $(".nicescroll-cursors").addClass("hide");
                setTimeout(function () {
                    $(".nicescroll-cursors").removeClass("hide");
                }, 600);
            }
        });
    });

    // 選擇li後關閉選單
    $(".dropList2 ul li").click(function () {
        $this = $(this)
        $this.addClass("checked");
        $this.siblings().removeClass("checked");
        $this.closest(".dropList2").find(".selectMenu").removeClass("open");
        $this.closest(".box").slideUp(500);
        $this.closest("div").find("ul").slideUp(500);
        $this.closest(".dropList2").find(".selectMenu p").text($this.text())
        $(".nicescroll-cursors").addClass("hide");
        setTimeout(function () {
            $(".nicescroll-cursors").removeClass("hide");
        }, 600);
    });
    // 第二層結束
}


/***************************************************************************************************************************/
/***************************************************************************************************************************/
///////////////////////////////////////
//         改變表格提示文字          //
///////////////////////////////////////

function changPlaceholder(target, trigerWidth) {
    if ($(window).width() < trigerWidth) {
        $(target).each(function () {
            var rwdPlaceholder = $(this).attr("data-rwdPlaceholder");
            $(this).attr("placeholder", rwdPlaceholder)
        });
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
//               home                //
///////////////////////////////////////

var home = {
    changBg: function () {
        $(window).scroll(function () {
            var scrolTop = $(window).scrollTop();
            var articles = document.querySelectorAll("main article:not(.timeline)");
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
    },

    newsScrollbar: function () {
        if ($(window).width() < 900 && $(".news ._title ul li").length > 0) {
            var container = document.querySelector('.news ._title ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    galleryScrollbar: function () {
        if ($(window).width() < 900 && $(".gallery ._title ul li").length > 0) {
            var container = document.querySelector('.gallery ._title ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    unitSelect: function () {
        $(".gallery ._title ul li,.news ._title ul li").click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
    },

    slickAnimation: function () {
        var element = document.querySelectorAll(".gallery ._slick ul.pc .slick-slide")
        $('.gallery ._slick ul.pc').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $(element[currentSlide]).addClass("out")
            setTimeout(function () {
                $(element[currentSlide]).removeClass("out")
            }, 1000)
        });
        $('.gallery ._slick ul.pc').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $(element[currentSlide]).addClass("in")
            setTimeout(function () {
                $(element[currentSlide]).removeClass("in")
            }, 1000)
        });
    },

    wordsAnimation: function () {
        $(".banner .anchorPoint a p").each(function () {
            $this = $(this)
            wordAnimation($this, 0.5, 0.15);
        });
    },
    discover: function () {
        $(".banner .anchorPoint a.discover").click(function () {
            $("html,body").animate({
                scrollTop: $(".banner").height()
            }, 800, "easeOutCubic");
        });
    },

    wordlatest: function () {
        wordlatest(100, ".news .newsBox .words p");
        wordlatest(150, "article.jury .mainSlick ._text li .juryWords h2");
    },

    newsBox: function () {
        if ($(".news .newsBox>div").length < 3) {
            $(".news .newsBox>div").each(function () {
                $(this).addClass("big");
                var p = $this.find(".words p");
                if ($(window).width() > 900) {
                    wordlatest(100, p);
                } else {
                    wordlatest(50, p);
                }
            });
        } else {
            $(".news .newsBox>div").each(function () {
                $this = $(this)
                var p = $this.find(".words p")
                if ($this.index() == 0) {
                    $this.addClass("big");
                    if ($(window).width() > 900) {
                        wordlatest(100, p);
                    } else {
                        wordlatest(50, p);
                    }
                } else {
                    wordlatest(50, p);
                    if ($this.hasClass("hasImg")) {
                        $this.addClass("half");
                    } else if ($this.hasClass("bgOnly")) {
                        $this.addClass("fullImg");
                    }
                }
            });
        }
    },

    selectNewsUnit: function () {
        $(".news ._title ul li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");

            var i = $(this).index()
            var showArea = document.querySelectorAll(".news .newsBox .newsUnit")
            $(showArea[i]).addClass("active").siblings().removeClass("active");
            //         // 重新啟動waypoint         
            _waypoint.homeW();
            //         // 重新啟動Blazy    
            _Blazy.homeW();
            home.newsBox();
        });
    },

    reminderbutton: function () {
        $(".reminderLibox").addClass("fadeOut");
        setTimeout(function () {
            $(".reminderLibox").remove();
        }, 800)
    },

    reminderClose: function (e) {
        if ($(e.target).hasClass("reminderLibox")) {
            $(".reminderLibox").addClass("fadeOut");
            setTimeout(function () {
                $(".reminderLibox").remove();
            }, 800);
        }
    },

    all: function () {
        home.changBg();
        home.newsScrollbar();
        home.galleryScrollbar();
        home.slickAnimation();
        home.wordsAnimation();
        home.discover();
        home.wordlatest();
        home.newsBox();
        // home.selectNewsUnit();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             service               //
///////////////////////////////////////

var service = {
    focusColor: function () {
        $("input").focusin(function () {
            $(this).closest("li").addClass("active");
        });

        $("input").focusout(function () {
            $(this).closest("li").removeClass("active");
        });
    },

    logOrSign: function () {
        // 電腦版
        $(".logIn").click(function () {
            $this = $(this)
            var i = $(this).index();
            var buttons = document.querySelectorAll("main .formTable .button ul li")

            if (!$(this).hasClass("active")) {
                $this.addClass("active");
                $(".signUp").removeClass("active");
                $(".signUp").addClass("out");
                $(".signUp").find("form").css("overflow", "hidden");
                $(".logIn").find("form").css("overflow", "hidden");
                setTimeout(function () {
                    $(".signUp").removeClass("out");
                    $(".signUp").find("form").css("overflow", "visible");
                    $(".logIn").find("form").css("overflow", "visible");
                }, 1500);
                setTimeout(function () {
                    $(buttons).animate({
                        width: 'toggle',
                        opacity: "toggle"
                    }, 500);
                }, 400);
            }
        });

        $(".signUp").off().click(function () {
            $this = $(this)
            var i = $(this).index();
            var buttons = document.querySelectorAll("main .formTable .button ul li")

            if (!$(this).hasClass("active")) {
                $this.addClass("active");
                $(".logIn").removeClass("active");
                $(".logIn").addClass("out");
                $(".signUp").find("form").css("overflow", "hidden");
                $(".logIn").find("form").css("overflow", "hidden");
                setTimeout(function () {
                    $(".logIn").removeClass("out");
                    $(".signUp").find("form").css("overflow", "visible");
                    $(".logIn").find("form").css("overflow", "visible");
                }, 1500);
                setTimeout(function () {
                    $(buttons).animate({
                        width: 'toggle',
                        opacity: "toggle"
                    }, 500);
                }, 400);
            }
        });

        // 手機板
        $(".formTable .tableNav ul li").off().click(function () {
            $this = $(this)
            var i = $(this).index();
            var area = document.querySelectorAll(".formTable section")
            var buttons = document.querySelectorAll("main .formTable .button ul li")

            if (!$(this).hasClass("active")) {
                $this.addClass("active");
                $this.siblings().removeClass("active");

                $(area[i + 1]).addClass("active");
                $(area[i + 1]).siblings().removeClass("active");
                $(area[i + 1]).siblings().addClass("out");
                $(".signUp").find("form").css("overflow", "visible");
                $(".logIn").find("form").css("overflow", "visible");
                setTimeout(function () {
                    $(area[i + 1]).siblings().removeClass("out");
                    $(".signUp").find("form").css("overflow", "visible");
                    $(".logIn").find("form").css("overflow", "visible");
                }, 1000);

                $(buttons).animate({
                    width: 'toggle',
                    opacity: "toggle"
                }, 800);
            }
        });
    },

    indexChangWord: function () {
        if ($(window).width() < 1025) {
            $(".account").attr("placeholder", "abcd1234");
            $(".password").attr("placeholder", "........");
        }


    },

    navscroll: function () {
        if ($(window).width() < 701) {
            var container = document.querySelector('.content .stepNav ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    registeredChangWord: function () {
        changPlaceholder(".password input,.confirm input", 1025);
    },

    signupChangWord: function () {
        changPlaceholder(".schoolCode input", 500);
        changPlaceholder(".studyInf input,.bankInf input,.accountInf input,.icloud input,.videoId input", 651);
        changPlaceholder(".worksDetail input", 801);
    },

    navfixed: function () {
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop()
            var headerHeight = $(".header").height() + parseInt($(".header").css("padding-top")) + parseInt($(".header").css("padding-bottom"))
            if (scrollTop >= headerHeight) {
                $(".stepNav").addClass("fixed");
            } else {
                $(".stepNav").removeClass("fixed");
            }
        });
    },

    textareaWordsLimit: function () {
        $("textarea").each(function () {
            // 客戶輸入的最多字數
            var maxWords = $(this).attr("data-maxWords");

            $(this).closest(".textarea").find(".wordCount p:last-child").text(maxWords);

            $(this).keyup(function () {
                // 輸入的字數
                var words = $(this).val().length

                $(this).closest(".textarea").find(".wordCount p:first-child").text(words);
                // 字數大於最多字數時，字數統計變藍色
                if (words > maxWords) {
                    $(this).closest(".textarea").find(".wordCount").addClass("tooMuch");
                }
                // 字數小於等於最多字數時，字數統計變原色
                else {
                    $(this).closest(".textarea").find(".wordCount").removeClass("tooMuch");
                }
            });

            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

            // 自訂的scrollbar
            if ($(window).width() > 1024 && !isChrome) {
                $(this).niceScroll({
                    autohidemode: false,
                    cursorcolor: "transparent",
                    cursorborder: "none",
                    background: "transparent",
                });
            }
        });
    },

    clickStepNav: function () {
        $(".stepNav ul li.checked").off().click(function () {
            $this = $(this)
            var form = document.querySelectorAll(".tableContent form")
            var navLi = document.querySelectorAll(".content .stepNav ul li")

            var i = $this.index() - 1 /*因為有span在前面*/
            // 目前啟動的區塊的排序
            var x = $(".tableContent form.active").index()
            if (x != i) {
                // 原啟動區塊關閉
                $(".tableContent form.active").slideUp(500);
                $(".tableContent form.active").removeClass("active");
                // 點選的區塊
                $(form[i]).slideDown(500);
                $(form[i]).addClass("active");

                $this.addClass("active");
                $this.siblings().removeClass("active");

                // 藍色線條設定
                var top = 100 * i + "px"
                $(".stepNav ul .blueLine").css("top", top);
            }
            // 滾動到上方
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, 500, 'easeOutCubic');
        });
    },

    scrollMove: function () {
        var navLi = document.querySelectorAll(".stepNav ul li")
        $(window).scroll(function () {

            var scrolTop = $(window).scrollTop();

            var form = document.querySelectorAll(".tableContent form.active");

            var x

            for (var i = form.length - 1; i >= 0; i--) {

                var dots = $(form[i]).offset().top - $(window).height() / 2

                if (scrolTop > dots) {

                    var x = i
                    break

                }
            }

            $(navLi[x]).addClass("active").siblings().removeClass("active");
            var top = 100 * x + "px"
            $(".stepNav ul .blueLine").css("top", top);
        });
    },

    animationDelay: function () {
        $(".stepNav ul li").each(function () {
            var i = $(this).index()

            var delay = i * .2 + "s"

            $(this).css("animation-delay", delay);
        });
    },

    toDownload: function () {
        $("#service .content .tableContent .type .workbox.download").each(function () {
            $(this).click(function () {
                var i = $(this).attr("data-toDownload");

                localStorage.setItem("toDownload", i);

            });
        });
    },

    all: function () {
        if ($("body").hasClass("index")) {
            service.focusColor();
            service.logOrSign();
            service.indexChangWord();
        }

        if ($("body").hasClass("registered")) {
            service.focusColor();
            service.registeredChangWord();
            service.navscroll();
            service.navfixed();
            service.animationDelay();
        }
        if ($("body").hasClass("signup")) {
            service.navscroll();
            service.navfixed();
            service.signupChangWord();
            service.textareaWordsLimit();
            service.animationDelay();
            service.toDownload();
        }

        if ($("body").hasClass("forgetPassword")) {}
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             competition           //
///////////////////////////////////////

var competition = {

    // 往下滾動
    scrollDown: function () {
        $(".topTitle .infWords ul li.discover").click(function () {
            $("html,body").animate({
                scrollTop: $(".topTitle").height() + $(".topTitle").offset().top
            }, 800, "easeOutCubic");
        });
    },

    // 加上數字
    addNumb: function () {
        $("._slick ul li").each(function () {
            var i = $(this).index() + 1
            var numb = "0" + i
            if (i > 9) {
                var numb = i
            }
            $(this).find(".numb").text(numb);
        });
    },

    // 字數限制
    indexWordlatest: function () {
        wordlatest(50, "._slick ul li .inf .hoverBox");
    },

    // 圖片數量設定
    imgCount: function () {
        var numb = document.querySelectorAll("._slick ul li").length
        if (numb == 4) {
            $("._slick").addClass("onlyFour");
        } else if (numb == 3) {
            $("._slick").addClass("onlyThree");
        } else if (numb == 2) {
            $("._slick").addClass("onlyTwo");
        }
    },

    buttonFixed: function () {
        var firstArticleHeight = $("main article:first-child").height();
        var firstArticlePaddingTop = parseInt($("main article:first-child").css("padding-top"));
        var firstArticlePaddingBottom = parseInt($("main article:first-child").css("padding-bottom"));
        var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom

        var buttonlastscrollY = 0;
        var windowHeight = $(window).height();

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
            var footerHeight = $("footer").height() + parseInt($("footer").css("padding-top")) + parseInt($("footer").css("padding-bottom"))
            // 首頁日程區塊高度
            var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))

            var bodyHeight = $("body").height() + parseInt($("body").css("padding-bottom"))
            var x = bodyHeight - windowHeight - 100
            var nowscrollY = $(this).scrollTop();
            // 判斷是否為向上
            var isUp = nowscrollY < buttonlastscrollY

            if ($(window).width() < 1025) {
                if (scrollTop >= firstArticleTotalHeight) {
                    $(".banner .button").addClass("prepare");
                } else if (scrollTop < firstArticleTotalHeight) {
                    $(".banner .button").removeClass("prepare");
                }

                if (scrollTop > firstArticleTotalHeight && isUp && scrollTop < x) {
                    $(".banner .button").addClass("fixed");
                } else if (scrollTop <= firstArticleHeight && !isUp) {
                    $(".banner .button").removeClass("fixed");
                } else if (!isUp) {
                    $(".banner .button").removeClass("fixed");
                } else if (scrollTop <= firstArticleHeight) {
                    $(".banner .button").removeClass("fixed");
                }
                setTimeout(function () {
                    buttonlastscrollY = nowscrollY;
                }, 100);
            }
        });
    },

    niceScroll: function () {
        if ($(window).width() < 1025) {
            var container = document.querySelector('.banner .button');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    showArea: function (target) {
        $(".content section.type1").addClass("active").siblings().removeClass("active")

        // 目前已啟動的area的排序位置
        var x = $(".content .type1 .anchorContent ul li.active").index();
        // 取得內容區塊
        var area = $(".content .type1 .anchorContent ul").find(target)
        // 取得側邊欄位區塊
        var nav = $(".content .type1 .anchorNav ul").find(target)

        // 取得已經開啟物件的高度
        var activeAreaHeight = $(".content .type1 .anchorContent ul li.active").height()

        var titleHeight = $(area).find("._title").height() + parseInt($(area).find("._title").css("padding-top")) + parseInt($(area).find("._title").css("padding-bottom"))

        var offsetTop = $(area).offset().top

        var i = $(area).index()

        var anchor = i + 1

        // 改變數字
        competition.changNumber(anchor);

        // 重新啟動Blazy
        _Blazy.competitionW();

        // 對應的物件
        $(area).find(".imgAndWord").slideDown(600);
        $(area).addClass("active");
        $(nav).addClass("active");

        // 其他的物件
        $(area).siblings().find(".imgAndWord").slideUp(600);
        $(area).siblings().removeClass("active");
        $(nav).siblings().removeClass("active");

        // 電腦版
        if ($(window).width() > 1024) {
            $(area).find("._title").slideUp(600);
            $(area).siblings().find("._title").slideDown(600);
        }

        // 行動裝置
        if ($(window).width() < 1025) {
            setTimeout(function () {
                $("header").removeClass("fixed");
                $(".banner .button").removeClass("fixed");
            }, 1000);
        }

        if (x >= i) {
            $("html,body").animate({
                scrollTop: offsetTop
            }, 800);
            setTimeout(function () {
                if ($(area).height() <= $(window).height()) {
                    var offsetTop3 = offsetTop - 340
                    // 手機板
                    if ($(window).width() < 1025) {
                        var offsetTop3 = offsetTop
                    }
                    $("html,body").animate({
                        scrollTop: offsetTop3
                    }, 600, 'easeOutCubic');
                }
            }, 800);

        } else if (x < i) {
            var offsetTop2 = offsetTop - activeAreaHeight + titleHeight
            if (i == 0) {
                var offsetTop2 = offsetTop
            }
            $("html,body").animate({
                scrollTop: offsetTop2
            }, 1000, 'easeOutCubic');
            setTimeout(function () {
                if ($(area).height() <= $(window).height()) {
                    var offsetTop3 = offsetTop2 - 340
                    // 手機板
                    if ($(window).width() < 1025) {
                        var offsetTop3 = offsetTop2
                    }
                    $("html,body").animate({
                        scrollTop: offsetTop3
                    }, 600, 'easeOutCubic');
                }
            }, 1000);
        }
    },

    buttonClick: function () {
        $(".banner .button .anchor,.bottomBtn .button .anchor").off().click(function () {
            var target = "." + $(this).attr("data-class")
            competition.showArea(target)
        });
    },

    anchorNumb: function () {
        $(".content .type1 .anchorContent ul li").each(function () {
            var i = $(this).index() + 1
            var numb = "0" + i
            if (i > 10) {
                var numb = i
            }
            $(this).find("._title .countNumb").text(numb);
        });
    },

    anchorContentClick: function () {
        // 點選十字
        $(".content .type1 .anchorContent ul li ._title .cross").off().click(function () {
            var thisClassName = $(this).closest("li").attr("class")
            var targetClassName = thisClassName.replace(/active/, "").replace(/download/, "").replace(/ /, "").replace(/show/, "")
            var target = "." + targetClassName
            competition.showArea(target)
        });
    },

    anchorNavClick: function () {
        // 點選側邊選單
        $(".content .type1 .anchorNav ul li").off().click(function () {
            $this = $(this)
            // 取得排序
            var i = $this.index()
            // 轉換成第幾個
            var y = i + 1
            // 目前已啟動的area排序
            var x = $(".content .type1 .anchorContent ul li.active").index();
            // 改變數字
            competition.changNumber(y)
            // 取得內容區塊
            var area = document.querySelectorAll(".content .type1 .anchorContent ul li")

            if (!$this.hasClass("active")) {
                // 取得已經開啟物件的高度
                var activeAreaHeight = $(".content .type1 .anchorContent ul li.active").height()

                var titleHeight = $(area[i]).find("._title").height() + parseInt($(area[i]).find("._title").css("padding-top")) + parseInt($(area[i]).find("._title").css("padding-bottom"))

                var offsetTop = $(area[i]).offset().top

                // 對應的物件
                $(area[i]).find(".imgAndWord").slideDown(600);
                $this.addClass("active");
                $(area[i]).addClass("active")

                // 其他的物件
                $(area[i]).siblings().find(".imgAndWord").slideUp(600);
                $this.siblings().removeClass("active");
                $(area[i]).siblings().removeClass("active");

                // 重新啟動Blazy
                _Blazy.competitionW();

                // 只有在電腦版才啟動的
                if ($(window).width() > 1024) {
                    $(area[i]).find("._title").slideUp(400);
                    $(area[i]).siblings().find("._title").slideDown(400);
                }

                if (x > i) {
                    $("html,body").animate({
                        scrollTop: offsetTop
                    }, 600);
                } else if (x <= i) {
                    var offsetTop2 = offsetTop - activeAreaHeight + titleHeight

                    $("html,body").animate({
                        scrollTop: offsetTop2
                    }, 600);
                    setTimeout(function () {
                        if ($(area[i]).height() <= $(window).height()) {
                            var offsetTop3 = offsetTop2 - 340
                            $("html,body").animate({
                                scrollTop: offsetTop3
                            }, 600);
                        }
                    }, 600);
                }
            }
        });
    },

    changNumber: function (i) {
        var numb = "0" + i
        if (i > 10) {
            var numb = i
        }
        $(".content .type1 .anchorNav .numb p").text(numb);
    },

    anchorNavFixed: function () {
        if ($(window).width() > 1024) {
            $(window).scroll(function () {
                var type1Top = $(".content section.active").offset().top
                var type1Bottom = type1Top + $(".content section.active").height();
                var scrollTop = $(window).scrollTop()
                var scrollBottom = scrollTop + $(window).height()
                if (scrollTop >= type1Top && scrollBottom < type1Bottom) {
                    $("section.active .anchorNav").addClass("fixed");
                    $("section.active .anchorNav").removeClass("bottom");
                } else if (scrollBottom >= type1Bottom) {
                    $("section.active .anchorNav").addClass("bottom");
                } else {
                    $("section.active .anchorNav").removeClass("bottom");
                    $("section.active .anchorNav").removeClass("fixed");
                }
            });
        }
    },

    autoTo: function () {
        var toDownload = localStorage.getItem("toDownload");
        localStorage.setItem("toDownload", "");
        if (toDownload == "true") {
            var target = ".classdown"
            competition.showArea(target);
        }
    },

    perfectScrollbar: function () {
        if ($(window).width() < 1025) {
            var container = document.querySelector('.anchors');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    // 填入影片
    videoFrame: function () {
        $(".content .photoAndVideo .video").each(function () {
            // 取得 youtube Id
            var youtubeId = $(this).attr("data-youtubeId")
            // 取得 vimeo Id
            var vimeoId = $(this).attr("data-vimeoId")
            if (!youtubeId.length == 0) {
                var src = "https://www.youtube-nocookie.com/embed/" + youtubeId + "?rel=0&amp;showinfo=0"
                $(this).find("iframe").attr("src", src);
            }
            if (!vimeoId.length == 0) {
                var src = "https://player.vimeo.com/video/" + vimeoId + "?color=ffffff&title=0&byline=0&portrait=0"
                $(this).find("iframe").attr("src", src);
            }
        });
    },

    winner: function () {
        var windowHeight = $(window).height();
        var anchors = document.querySelectorAll(".anchors ul li");
        var sections = document.querySelectorAll(".content section");
        // 滾動錨點
        $(window).scroll(function () {
            $(".content section").each(function () {
                var offset = this.getBoundingClientRect().top
                var i = $(this).index()
                if (offset <= (windowHeight * 2 / 5)) {
                    $(anchors[i]).addClass("active").siblings().removeClass("active");
                }
            })
        });
        // 點擊錨點
        $(".anchors ul li").click(function () {
            if (!$(this).hasClass("active")) {
                var i = $(this).index()
                var anchorPoint = $(sections[i]).offset().top

                $("html,body").animate({
                    scrollTop: anchorPoint
                }, {
                    duration: 1000,
                    easing: "easeOutCubic",
                });
            }
        });
    },

    mouseOver: function (ele) {
        $(ele).siblings().find("img").css("opacity", ".2");
    },

    mouseOut: function (ele) {
        $(ele).siblings().find("img").css("opacity", "1");
    },

    seletArea_click: function () {

        $(".banner .button .item.area,.bottomBtn .button .item.area").click(function () {
            seletArea(this)
        });

        function seletArea(ele) {
            $this = $(ele)
            var scrollTop = $("article.content").offset().top
            if ($this.hasClass("introduction")) {
                $(".content section.type1").addClass("active").siblings().removeClass("active")
                // 重新啟動的function
                _Blazy.competitionW();
                // 滾動到顯示物件的頂端
                $("html,body").animate({
                    scrollTop: scrollTop
                }, 1000, "easeOutCubic")

            } else if ($this.hasClass("jury")) {
                $(".content section.type2").addClass("active").siblings().removeClass("active");
                // 重新啟動的function
                _Blazy.competitionW();
                _waypoint.competitionW();
                // 滾動到顯示物件的頂端
                $("html,body").animate({
                    scrollTop: scrollTop
                }, 1000, "easeOutCubic");
            } else if ($this.hasClass("winner")) {
                $(".content section.type3").addClass("active").siblings().removeClass("active");
                // 重新啟動的function
                _Blazy.competitionW();
                _waypoint.competitionW();
                // 滾動到顯示物件的頂端
                $("html,body").animate({
                    scrollTop: scrollTop
                }, 1000, "easeOutCubic")
                // 啟動winner專屬function
                award.all();
            }
        }
    },

    checkFormCompetition: function () {
        var check = localStorage.getItem("formCompetition");
        localStorage.setItem("formCompetition", "");
        if (check == "yes") {} else {
            document.querySelector("body").classList.add('fadeIn')
        }
    },

    all: function () {
        if ($("body").hasClass("index")) {
            competition.scrollDown();
            competition.addNumb();
            competition.indexWordlatest();
            competition.imgCount();
        }
        if ($("body").hasClass("detail")) {
            competition.buttonFixed();
            competition.niceScroll();
            competition.anchorNumb();
            competition.anchorNavFixed();
            competition.anchorContentClick();
            competition.anchorNavClick();
            competition.buttonClick();
            competition.autoTo();
            competition.seletArea_click();
            competition.checkFormCompetition();
        }
        if ($("body").hasClass("winner")) {
            competition.perfectScrollbar();
            competition.videoFrame();
            competition.winner();
        }
    }
}



var award = {
    perfectScrollbar: function () {
        var container = document.querySelector('.content .type3 .anchorNav .anchors');
        var ps = new PerfectScrollbar(container, {
            suppressScrollY: true,
            maxScrollbarLength: 1
        });
    },

    // 錨點連結
    anchorPoint: function () {

        $(".content section .anchorNav ul li").click(function () {
            $this = $(this)
            if (!$this.hasClass("active")) {
                var className = ".content .type3 .winnerContent .box" + "." + $this.attr("class")

                // 取得第一個
                var target = $(className).eq(0)

                // 第一個的OffsetTop
                var targetOffsetTop = $(target).offset().top

                // 取得點座標
                var dot = targetOffsetTop - $(window).height() / 2 + $(target).height() / 2

                // 滾動到點座標
                award.scroll(dot)
            }
        });
    },

    // 滾動到點座標
    scroll: function (dot) {
        $("html,body").animate({
            scrollTop: dot
        }, {
            duration: 1500,
            easing: "easeOutCubic",
        });
    },

    // 滾動錨點
    anchorScroll: function () {
        $(window).scroll(function () {
            $(".content .type3 .winnerContent .box").each(function () {
                var eletop = Math.floor(this.getBoundingClientRect().top)

                // 取得到位置的class名子-將名子去除box-將名子去除in-將名子去除空格
                var className = $(this).attr("class").replace(/box/, "").replace(/in/, "").replace(/show/, "").replace(/ /, "")

                // 最終取得的目標物件名子
                var targetName = ".content section .anchorNav ul li." + className

                var windowHeight = Math.floor($(window).height() / 3)

                var targetMax = windowHeight - ($(this).height() / 2)

                var targetMin = windowHeight + ($(this).height() / 2)

                if (eletop >= targetMax && eletop <= targetMin) {
                    $(targetName).addClass("active").siblings().removeClass("active")
                }
            });
        });
    },

    all: function () {
        award.perfectScrollbar();
        award.anchorPoint();
        award.anchorScroll();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//                news               //
///////////////////////////////////////

var news = {

    whitch: function () {
        $(".newsBox>div").each(function () {
            var p = $(this).find(".words p")
            if ($(this).index() == 0 || $(this).index() == 1) {
                $(this).addClass("big");
                if ($(window).width() > 900) {
                    wordlatest(100, p);
                } else {
                    wordlatest(50, p);
                }
            } else {
                if ($(this).hasClass("hasImg")) {
                    $(this).addClass("half");
                    wordlatest(50, p);
                } else if ($(this).hasClass("bgOnly")) {
                    $(this).addClass("fullImg");
                    wordlatest(50, p);
                }
            }
        });
    },

    perfectScrollbar: function () {
        if ($(window).width() < 900 && $(".topTitle ul").length > 0) {
            var container = document.querySelector('.topTitle ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    all: function () {
        news.whitch();
        news.perfectScrollbar();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             contact               //
///////////////////////////////////////

var contact = {
    changPlaceholder: function () {
        changPlaceholder(".code input", 620);
        changPlaceholder(".moblie input", 401);
    },

    all: function () {
        contact.changPlaceholder();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             member                //
///////////////////////////////////////

var member = {
    indexPerfectScrollbar: function () {
        if ($(window).width() < 571) {
            var container = document.querySelector('.boxContent .information .hideBox');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    navscroll: function () {
        if ($(window).width() < 701) {
            var container = document.querySelector('.content .stepNav ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    changWord: function () {
        changPlaceholder(".smallCode input", 550);
        changPlaceholder(".newPs input", 500);
    },

    focusColor: function () {
        $("input").focusin(function () {
            $(this).closest("li").addClass("active");
        });

        $("input").focusout(function () {
            $(this).closest("li").removeClass("active");
        });
    },

    leftNavScroll: function () {
        // 檢查是否為移動裝置
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var device = isAndroid || isiOS
        var mobile = device

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();

            var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
            // 日程區塊高度
            var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))

            // if (!mobile) {
            // 到底部
            var targetHeight = mainHeight
            if ($("main").has(".timeline").length > 0) {
                var targetHeight = mainHeight - timelineHeight
            }
            var outTrigerPoint = targetHeight - $(window).height();
            if (scrollTop >= outTrigerPoint) {
                $(".leftNav").addClass("bottom");
            } else if (scrollTop < outTrigerPoint && scrollTop >= 0) {
                $(".leftNav").removeClass("bottom");
            }
        });
    },

    RWDLeftNav: function () {
        $(".open").click(function () {
            $(".leftNav").addClass("active");
            $("body").css("overflow-y", "hidden")
        });
        $(".back").click(function () {
            $(".leftNav").removeClass("active");
            $("body").css("overflow-y", "visible")
        });
    },

    inputFocus: function () {
        $("input").focusin(function () {
            $(this).closest(".workbox").addClass("active");
        });

        $("input").focusout(function () {
            $(this).closest(".workbox").removeClass("active");
        });
    },

    nomessage: function () {
        if ($(".messages ul li").length == 0) {
            $(".nomessage").css("display", "flex");
        }
    },

    newsletter: function () {
        $(".newsletter .workbox span").each(function () {
            if ($(this).hasClass("checked")) {
                $(this).closest(".workbox").addClass("active");
            } else {
                $(this).closest(".workbox").removeClass("active");
            }
        });
    },

    activeStepClick:function () {
        $(".next").click(function (e) {
            var form = document.querySelectorAll(".tableContent .step")
            var current = $(e.target).closest(".step").index()
            var next = $(e.target).closest(".step").index() + 1

            $(form[current]).slideUp(800);

            $(form[next]).slideDown(800);
            $(form[next]).addClass("active");
            $(form[next]).siblings().removeClass("active");

            var navLi = document.querySelectorAll(".content .stepNav ul li")

            $(navLi[next]).addClass("checked");
            $(navLi[next]).addClass("active");
            $(navLi[next]).siblings().removeClass("active");
            var top = 100 * next + "px"
            $(".stepNav ul .blueLine").css("top", top);

            // 滾動到上方
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, 800, 'easeOutCubic');
        });
    },

    backStepClick:function () {
        $(".prev").click(function (e) {
            var form = document.querySelectorAll(".tableContent .step")
            var current = $(e.target).closest(".step").index()
            var prev = $(e.target).closest(".step").index() - 1

            $(form[current]).slideUp(800);

            $(form[prev]).slideDown(800);
            $(form[prev]).addClass("active");
            $(form[prev]).siblings().removeClass("active");
            reset();

            var navLi = document.querySelectorAll(".content .stepNav ul li")

            $(navLi[prev]).addClass("checked");
            $(navLi[prev]).addClass("active");
            $(navLi[prev]).siblings().removeClass("active");
            var top = 100 * prev + "px"
            $(".stepNav ul .blueLine").css("top", top);

            // 滾動到上方
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, 800, 'easeOutCubic');
        });
    },

    selectArea:function () {
        $(".information,.design,.QA").click(function () {
            $this = $(this)
            if (!$this.hasClass("active")) {
                // 設計作品管理專屬function
                if ($this.hasClass("design")) {
                    nodesign();
                }
                // 客服訊息問答專屬function
                else if ($this.hasClass("QA")) {
                    nomessage();
                }

                // 將未選定隱藏
                $this.removeClass("out");
                $this.siblings().addClass("out");

                // 將點選的顯示
                $this.addClass("active");
                $other = $this.siblings(".active");
                $other.find(".hideBox").slideUp(400);
                $other.removeClass("active");

                // 將點選的顯示
                if ($(window).width() > 1024) {
                    $this.find(".hideBox").delay(1000).slideDown(400);

                    // 設計作品管理專屬function
                    if ($this.hasClass("design")) {
                        setTimeout(function () {
                            resetSlick();
                        }, 1400);
                    }

                } else {
                    $this.find(".hideBox").slideDown(400);
                    setTimeout(function () {
                        // 設計作品管理專屬function
                        if ($this.hasClass("design")) {
                            resetSlick();
                        }

                        $("html,body").animate({
                            scrollTop: $this.offset().top - $("header").height()
                        }, 800, 'easeOutCubic');
                    }, 400);
                }
            }
        });


        // 後端請注意:重製slick
        function resetSlick() {
            $('.boxContent .design .design_slick ._slick').slick('unslick');
            slick('memberSlick');
        }

        // 後端請注意:如果沒有訊息請啟動此function ps:他是偵測圓圈裡的數字
        function nomessage() {
            if ($(".boxContent .QA .message a .cicle").text() == 0) {
                $(".boxContent .QA .message a .cicle").addClass("nomessage");
                $(".boxContent .QA .button ul li.blue").css("display", "none");
            } else {
                $(".boxContent .QA .message a .cicle").removeClass("nomessage");
                $(".boxContent .QA .button ul li.blue").css("display", "block")
            }
        }

        // 後端請注意:如果沒有作品請啟動此function ps:他是偵測ul._slick的li數量
        function nodesign() {
            if ($(".design .design_slick ._slick li").length == 0) {
                $(".design .design_slick .nodesign").css("display", "block");
                $(".boxContent .design .button ul li.blue").css("display", "none");
            } else {
                $(".design .design_slick .nodesign").css("display", "none");
                $(".boxContent .design .button ul li.blue").css("display", "block")
            }
        }
    },

    zoom:function (ele) {
        var src = $(ele).closest(".workbox").find("a img").attr("src")
        $("body").append("<article class='imgLibox'><div class='liboxClose'><span></span></div><img src='"+src+"'></article");

        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        } else {
            $("body").css("overflow-y", "hidden");
        }


        $(".imgLibox").click(function () {
            $(this).addClass("close");

            if ($(window).width() > 1024) {
                $("body").css({
                    "overflow-y": "visible",
                    "padding-right": "0"
                });
            } else {
                $("body").css("overflow-y", "visible");
            }

            setTimeout(function () {
                $(".imgLibox").remove();
            }, 400)
        });
    },

    taiwanNo1:function () {
        $(".region .dropList ul li").click(function() {
            if ($(this).hasClass("taiwanNo1")) {
                $(".domestic,.foreign").css("transition", "0s");
                $(".domestic").slideDown(400);
                $(".foreign").slideUp(400);
                setTimeout(function() {
                    $(".domestic,.foreign").css("transition", "all .4s ease");
                }, 400);
            } else {
                $(".domestic,.foreign").css("transition", "0s");
                $(".foreign").slideDown(400);
                $(".domestic").slideUp(400);
                setTimeout(function() {
                    $(".domestic,.foreign").css("transition", "all .4s ease");
                }, 400)
            }
        });
    },

    all: function () {
        if ($("body").hasClass("index")) {
            member.indexPerfectScrollbar();
            member.selectArea();
        }
        if ($("body").hasClass("forgetPassword") || $("body").hasClass("changeAccount") || $("body").hasClass("changePassword")) {
            member.focusColor();
            member.navscroll();
            member.changWord();
            member.activeStepClick();
            member.backStepClick()
        }

        if ($("body").hasClass("information") || $("body").hasClass("academic") || $("body").hasClass("beneficiary") || $("body").hasClass("design") || $("body").hasClass("message")) {
            member.leftNavScroll();
            member.inputFocus();
            member.RWDLeftNav();
        }

        if ($("body").hasClass("information")) {
            member.newsletter();
            $(".newsletter .workbox").click(function () {
                member.newsletter();
            });
        }

        if ($("body").hasClass("message")) {
            member.nomessage();
        }

        if ($("body").hasClass("beneficiary")) {
            member.taiwanNo1()
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             juge                  //
///////////////////////////////////////
var juge = {

    focusColor: function () {
        $("input").focusin(function () {
            $(this).closest("li").addClass("active");
        });

        $("input").focusout(function () {
            $(this).closest("li").removeClass("active");
        });
    },

    indexChangWord: function () {
        if ($(window).width() < 1025) {
            $(".account").attr("placeholder", "abcd1234");
            $(".password").attr("placeholder", "........");
        }

        $(".logInBox .formtable form .table ul li").click(function () {
            $(this).find("input").focus();
        });
    },

    changWord: function () {
        changPlaceholder(".smallCode input", 550);
        changPlaceholder(".newPs input", 500);
    },

    navscroll: function () {
        if ($(window).width() < 701) {
            var container = document.querySelector('.content .stepNav ul');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
            var prevli = $("article.content .stepNav ul li.active").prevAll("li")
            var prevLiTotalWidth = 0
            for (i = 0; i < prevli.length; i++) {
                var width = $(prevli[i]).width();
                var padding = parseInt($(prevli[i]).css("padding-left")) + parseInt($(prevli[i]).css("padding-right"))
                var prevLiTotalWidth = prevLiTotalWidth + width + padding
            }
            container.scrollLeft = prevLiTotalWidth
        }
    },

    nojuge: function () {
        $(".toJuge").each(function () {
            var title = $(this).attr("data-title");
            if ($(this).hasClass("nojoin")) {
                $(this).attr("title", title)
            }
        });
    },

    leftNavScroll: function () {
        // 檢查是否為移動裝置
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var device = isAndroid || isiOS
        var mobile = device
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
            // 日程區塊高度
            var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))
            // 到底部
            var targetHeight = mainHeight
            if ($("main").has(".timeline").length > 0) {
                var targetHeight = mainHeight - timelineHeight
            }
            var outTrigerPoint = targetHeight - $(window).height();
            if (scrollTop >= outTrigerPoint) {
                $(".leftNav").addClass("bottom");
            } else if (scrollTop < outTrigerPoint && scrollTop >= 0) {
                $(".leftNav").removeClass("bottom");
            }
        });
    },

    RWDLeftNav: function () {
        $(".open").click(function () {
            $(".leftNav").addClass("active");
            $("body").css("overflow-y", "hidden")
        });
        $(".back").click(function () {
            $(".leftNav").removeClass("active");
            $("body").css("overflow-y", "visible")
        });
    },

    // 列表排列數字
    lineNumber: function () {
        $(".lineArray ul li").each(function () {
            var i = $(this).index() + 1
            if (i < 10) {
                var numb = "0" + i
            } else {
                var numb = i
            }
            $(this).find(".numb").text(numb);
        });
    },

    changGridOrLine: function () {
        $(".grid,.line").click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).hasClass("grid")) {
                $(".gridArray").slideDown(600);
                $(".lineArray").slideUp(600);
                _Blazy.jugeW();
            } else if ($(this).hasClass("line")) {
                $(".lineArray").slideDown(600);
                $(".gridArray").slideUp(600);
                _Blazy.jugeW();
            }
        });
    },

    pages: function () {
        // 檢查是否為移動裝置
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var device = isAndroid || isiOS
        if (device) {} else {
            $(".pages div").niceScroll({
                cursorcolor: "transparent",
                cursorborder: "none",
            })
        }
    },

    selectionNav_click: function () {
        // 開啟
        $(".selectionNav").click(function () {
            $(".categories").addClass("open");
        });

        // 點選灰色部分關閉
        $(".categories .bgBox,.categories .blueClose").click(function () {
            juge.categoriesColse();
        });

        // 點選左側灰色部分關閉
        $(document).click(function (e) {
            if ($(e.target).hasClass("leftNav") && $(".categories").hasClass("open")) {
                juge.categoriesColse();
            }
        })

    },

    categoriesColse: function () {
        $(".categories").removeClass("open");
        $(".categories").addClass("close");
        setTimeout(function () {
            $(".categories").removeClass("close");
        }, 800)
    },

    ulscroll: function () {
        $("#juge .leftNav .categories ul").mCustomScrollbar();
    },

    // 將公告內容文字限制
    postWords: function () {
        $(".postBox ._text p:first-child").each(function () {
            var text = $(this).text()
            if ($(this).text().length > 85) {
                var text = $(this).text().substring(0, 84) + "...";
            }
            var x = "<p>" + text + "</p>"
            $(this).closest(".postBox").find(".title").append(x)
        })
    },

    seeMorePost: function () {
        $(".postBox .more").click(function () {
            $(this).closest(".postBox").addClass("active");
            // 出現的物件
            $(this).closest(".postBox").find("._text").slideDown(500);
            // 消失的物件
            $(this).slideUp(500);
            $(this).closest(".postBox").find(".title p").slideUp(500);
        });

        $(".postBox .close").click(function () {
            $(this).closest(".postBox").removeClass("active")
            // 消失的物件
            $(this).closest(".postBox").find("._text").slideUp(500);
            // 出現的物件
            $(this).closest(".postBox").find(".more").slideDown(500);
            $(this).closest(".postBox").find(".title p").slideDown(500);
        });
    },

    scoreScroll: function () {
        $(".pictures").niceScroll({
            cursorborder: "none",
            railpadding: {
                top: 0,
                right: 0,
                left: 2,
                bottom: 0
            },
            cursorwidth: "2px",
            cursorcolor: "#fff",
        });

        $(".designInf .content .tableContent").mCustomScrollbar({
            scrollInertia: 800,
            autoHideScrollbar: true,
            callbacks: {
                whileScrolling: function () {
                    if (this.mcs.topPct >= 90) {
                        $(".designInf .content .downArrow").fadeOut(500);
                    } else {
                        $(".designInf .content .downArrow").fadeIn(500);
                    }
                }
            }
        });

        $("textarea").niceScroll({
            autohidemode: false,
            cursorwidth: "2px",
            cursorcolor: "#c2c2c2",
            cursorborder: "none",
            background: "#ffffff33",
            railpadding: {
                top: 0,
                right: 0,
                left: -10,
                bottom: 0
            },
        });

        $(".jugement .areas").mCustomScrollbar({
            scrollInertia: 800,
            autoHideScrollbar: true,
            callbacks: {
                whileScrolling: function () {
                    if (this.mcs.topPct >= 90) {
                        $(".jugement .downArrow").fadeOut(500);
                    } else {
                        $(".jugement .downArrow").fadeIn(500);
                    }
                },
            }
        });
    },

    point: function () {
        $(".jugement .area .selectScore ul li").each(function () {
            var $li = $(this)
            var i = $li.index() + 1
            // 填入value
            $li.find("input").attr("value", i)

            var x = $li.closest(".area").index() + 1
            var groud = "groud" + x
            $li.find("input").attr("name", groud)

            $li.find("input").change(function () {
                var value = $(this).attr("value")
                $li.closest(".area").find(".getScore .numb").text(value);

                var scoreGroup = document.querySelectorAll(".jugement .area .getScore .numb")
                var totalScore = 0
                for (i = 0; i < scoreGroup.length; i++) {
                    var y = parseInt($(scoreGroup[i]).text())

                    var totalScore = totalScore + y
                }

                $(".jugement .totalScore .numb").text(totalScore)

            });
        });
    },

    // 填入影片
    videoFrame: function () {
        $(".pictures ._img.video").each(function () {
            // 取得 youtube Id
            var youtubeId = $(this).attr("data-youtubeId")
            // 取得 vimeo Id
            var vimeoId = $(this).attr("data-vimeoId")
            if (!youtubeId.length == 0) {
                var src = "https://www.youtube-nocookie.com/embed/" + youtubeId + "?rel=0&amp;showinfo=0"
                $(this).find("iframe").attr("src", src);
            }
            if (!vimeoId.length == 0) {
                var src = "https://player.vimeo.com/video/" + vimeoId + "?color=ffffff&title=0&byline=0&portrait=0"
                $(this).find("iframe").attr("src", src);
            }
        });
    },

    nomessage: function () {
        if ($(".messages ul li").length == 0) {
            $(".nomessage").css("display", "flex");
        }
    },

    mouseOver: function (ele) {
        $(ele).siblings().find("img").css("opacity", ".2");
    },

    mouseOut: function (ele) {
        $(ele).siblings().find("img").css("opacity", "1");
    },

    getScore: function () {
        var score = $(".jugement .totalScore .numb").text()
        $('.designInf .topWords .point .numb').text(score)
    },

    ajaxRuleLibox: function (target) {
        var src = $(target).attr("data-src")
        $("body").append("<article class='ruleLibox'></article>")
        $.ajax({
                url: src,
            })
            .done(function (data) {
                $(".ruleLibox").html(data);
                ruleLibox.all();
            });
    },

    activeStepClick: function () {
        $(".next").off().click(function (e) {
            var form = document.querySelectorAll(".tableContent .step")
            var current = $(e.target).closest(".step").index()
            var next = $(e.target).closest(".step").index() + 1

            $(form[current]).slideUp(800);

            $(form[next]).slideDown(800);
            $(form[next]).addClass("active");
            $(form[next]).siblings().removeClass("active");


            var navLi = document.querySelectorAll(".content .stepNav ul li")

            $(navLi[next]).addClass("checked");
            $(navLi[next]).addClass("active");
            $(navLi[next]).siblings().removeClass("active");
            var top = 100 * next + "px"
            $(".stepNav ul .blueLine").css("top", top);

            // 滾動到上方
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, 800, 'easeOutCubic');

            // 重新啟動的function
            juge.navscroll();
        });
    },

    backStepClick:function() {
        $(".prev").click(function (e) {
            var form = document.querySelectorAll(".tableContent .step")
            var current = $(e.target).closest(".step").index()
            var prev = $(e.target).closest(".step").index() - 1

            $(form[current]).slideUp(800);

            $(form[prev]).slideDown(800);
            $(form[prev]).addClass("active");
            $(form[prev]).siblings().removeClass("active");

            var navLi = document.querySelectorAll(".content .stepNav ul li")

            $(navLi[prev]).addClass("checked");
            $(navLi[prev]).addClass("active");
            $(navLi[prev]).siblings().removeClass("active");
            var top = 100 * prev + "px"
            $(".stepNav ul .blueLine").css("top", top);

            // 滾動到上方
            $("html,body").animate({
                scrollTop: $(".content").offset().top
            }, 800, 'easeOutCubic');

            juge.navscroll();
        });
    },

    getCheck:function () {
        if ($(".jugement .checkBox input").prop("checked")) {
            $(".advanced").addClass("checked");
        } else {
            $(".advanced").removeClass("checked");
        }
    },

    all: function () {
        if ($("body").hasClass("index") || $("body").hasClass("forgetPassword")) {
            juge.focusColor();
        }
        if ($("body").hasClass("index")) {
            juge.indexChangWord();
        }
        if ($("body").hasClass("forgetPassword")) {
            juge.changWord();
            juge.navscroll();
            juge.activeStepClick();
            juge.backStepClick();
        }
        if ($("body").hasClass("overview")) {
            juge.nojuge();
        }
        if ($("body").hasClass("message") || $("body").hasClass("selection") || $("body").hasClass("information") || $("body").hasClass("accouncement")) {
            juge.leftNavScroll();
            juge.RWDLeftNav();
            juge.selectionNav_click();
            juge.ulscroll();
        }
        if ($("body").hasClass("information")) {
            $("textarea").niceScroll({
                autohidemode: false,
                cursorwidth: "2px",
                cursorcolor: "#c2c2c2",
                cursorborder: "none",
                background: "#ffffff33",
                railpadding: {
                    top: 0,
                    right: 0,
                    left: -10,
                    bottom: 0
                },
            });
        }
        if ($("body").hasClass("selection")) {
            juge.lineNumber();
            juge.changGridOrLine();
            juge.pages();
            juge.ajaxRuleLibox();
        }
        if ($("body").hasClass("accouncement")) {
            juge.postWords();
            juge.seeMorePost();
        }
        if ($("body").hasClass("score")) {
            juge.scoreScroll();
            juge.point();
            juge.videoFrame();
        }
        if ($("body").hasClass("message")) {
            juge.nomessage();
        }
    }
}


var timelineLobox = {
    open: function () {
        $(".timelineLobox").addClass("open");
        $(".timelineLobox section").slideDown(500);
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".timelineLobox .liboxClose").click(function () {
            timelineLobox.close();
        });

        $(document).click(function (e) {
            if ($(e.target).hasClass("timelineLobox")) {
                timelineLobox.close();
            }
        })
    },

    close: function () {
        $(".timelineLobox").removeClass("open");
        $(".timelineLobox").addClass("close");
        $(".timelineLobox section").slideUp(400);
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".timelineLobox").remove();
        }, 600);
    },

    liAnimationDelay: function () {
        $(".timelineLobox ._table ul li").each(function () {
            var i = $(this).index()
            var time = 0.5 + i * 0.1 + "s"
            $(this).css("animation-delay", time);
        });
    },

    all: function () {
        timelineLobox.open();
        timelineLobox.close_click();
        timelineLobox.liAnimationDelay();
    }
}


var ruleLibox = {
    open: function () {
        $(".ruleLibox").addClass("open");
        $(".ruleLibox section").slideDown(500);
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".ruleLibox .liboxClose").click(function () {
            ruleLibox.close();
        });
    },

    click_other: function () {
        $(document).click(function (e) {
            if ($(e.target).hasClass("ruleLibox")) {
                ruleLibox.close();
            }
        })
    },

    close: function () {
        $(".ruleLibox").removeClass("open");
        $(".ruleLibox").addClass("close");
        $(".ruleLibox section").slideUp(400);
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".ruleLibox").remove();
        }, 800);
    },

    scroll: function () {
        $(".ruleLibox section .liboxContent").mCustomScrollbar({
            autoHideScrollbar: true
        });
    },

    // 圖表
    chart: function () {
        var dataArray = new Array();
        var colorArray = new Array();
        var titleArray = new Array();
        $(".ruleLibox section .liboxContent .chart ul li").each(function () {
            // 所占百分比
            var percentage = parseInt($(this).find("span").data("chart"));
            dataArray.push(percentage)

            // 區塊顏色
            var color = $(this).find("span").css("background-color");
            colorArray.push(color)

            // 資料標題
            var x = this.querySelector("p").innerText.split(" ")
            // 移除最後面的數字
            var y = x.pop()
            // 重新編寫文字
            var title = ""
            for (var i = 0; i < x.length; i++) {
                var title = title + " " + x[i]
            }
            // 將產生的文字加入資料矩陣中
            titleArray.push(title)
        });

        var data = {
            datasets: [{
                backgroundColor: colorArray,
                data: dataArray,
            }],
        }

        var options = {
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
            animation: {
                duration: 1000,
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }

        var ctx = document.getElementById("myChart").getContext('2d');

        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options,
        });
    },

    all: function () {
        ruleLibox.open();
        ruleLibox.close_click();
        ruleLibox.click_other();
        ruleLibox.scroll();
        if ($("body").hasClass("point")) {
            setTimeout(function () {
                ruleLibox.chart();
            }, 600);
        }
    }
}

var saveSuccess = {
    open: function() {
        $(".saveSuccess").addClass("open");
        setTimeout(function() {
            $(".saveSuccess section").slideDown(500);
        }, 300);
    },

    close_click: function() {
        $(".saveSuccess").click(function() {
            saveSuccess.close();
        });
    },

    close: function() {
        $(".saveSuccess").removeClass("open");
        $(".saveSuccess").addClass("close");
        $(".saveSuccess section").slideUp(400);
        setTimeout(function() {
            $(".saveSuccess").removeClass("close");
        }, 800);
    },

    all: function() {
        saveSuccess.open()
        saveSuccess.close_click()
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             gallery               //
///////////////////////////////////////

var gallery = {

    perfectScrollbar: function () {
        var container = document.querySelector('.topTitle .selectUnit ul');
        var ps = new PerfectScrollbar(container, {
            suppressScrollY: true,
            maxScrollbarLength: 1
        });
    },

    // 類型選單浮動
    selectUnitFixed: function () {
        var firstArticleHeight = $("main article:first-child").height();
        var firstArticlePaddingTop = parseInt($("main article:first-child").css("padding-top"));
        var firstArticlePaddingBottom = parseInt($("main article:first-child").css("padding-bottom"));
        var firstArticleTotalHeight = firstArticleHeight + firstArticlePaddingTop + firstArticlePaddingBottom

        var buttonlastscrollY = 0;
        var windowHeight = $(window).height();


        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var mainHeight = $("main").height() + parseInt($("main").css("padding-top")) + parseInt($("main").css("padding-bottom"))
            var footerHeight = $("footer").height() + parseInt($("footer").css("padding-top")) + parseInt($("footer").css("padding-bottom"))
            // 首頁日程區塊高度
            var timelineHeight = $(".timeline").height() + parseInt($(".timeline").css("padding-top")) + parseInt($(".timeline").css("padding-bottom"))

            var bodyHeight = $("body").height() + parseInt($("body").css("padding-bottom"))
            var x = bodyHeight - windowHeight - 100
            var nowscrollY = $(this).scrollTop();
            // 判斷是否為向上
            var isUp = nowscrollY < buttonlastscrollY

            // 行動裝置上啟動
            if ($(window).width() < 1025) {
                if (scrollTop >= firstArticleTotalHeight) {
                    $(".topTitle .selectUnit").addClass("prepare");
                } else if (scrollTop < firstArticleTotalHeight) {
                    $(".topTitle .selectUnit").removeClass("prepare");
                }

                if (scrollTop > firstArticleTotalHeight && isUp && scrollTop < x) {
                    $(".topTitle .selectUnit").addClass("fixed");
                } else if (scrollTop <= firstArticleHeight && !isUp) {
                    $(".topTitle .selectUnit").removeClass("fixed");
                } else if (!isUp) {
                    $(".topTitle .selectUnit").removeClass("fixed");
                } else if (scrollTop <= firstArticleHeight) {
                    $(".topTitle .selectUnit").removeClass("fixed");
                }
                setTimeout(function () {
                    buttonlastscrollY = nowscrollY;
                }, 100);
            }
        });
    },

    selectUnit: function (ele) {
        $(ele).addClass("active ").siblings().removeClass("active ");
        /*waypoint*/
        _waypoint.galleryW();
        /* b-lazy */
        _Blazy.galleryW();
    },

    openSearch_click: function () {
        $(".openSearch").click(function () {
            filterLibox.all();
        });
    },

    all: function () {
        gallery.perfectScrollbar();
        gallery.selectUnitFixed();
        gallery.openSearch_click();
    }
}


var filterLibox = {
    open: function () {
        $(".filterLibox").addClass("open");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".filterLibox .liboxClose").click(function () {
            filterLibox.close();
        });
    },

    close: function () {
        $(".filterLibox").removeClass("open");
        $(".filterLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0"
            });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".filterLibox").removeClass("close");
        }, 400);
    },

    scroll: function () {
        $(".filterLibox .left .years").niceScroll({
            cursorcolor: "transparent",
            cursorborder: "none",
        })

        $(".filterLibox .right .projects").niceScroll({
            railpadding: {
                top: 0,
                right: -36,
                left: 0,
                bottom: 0
            },
            cursorwidth: "3px",
            cursorborder: "none",
            cursorcolor: "rgba(255,255,255,.5)",
        })
    },

    yearSelect: function () {
        var ele = document.querySelectorAll(".projectYear")
        $(".filterLibox .left .years ul li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            var i = $(this).index()
            $(ele[i]).addClass("active").siblings().removeClass("active");
            if ($(window).width() < 1025) {
                $(".filterLibox .right").addClass("active");
                $(".filterLibox .back").addClass("active");
            }
        });

        $(".filterLibox .back").click(function () {
            $(".filterLibox .right").removeClass("active");
            $(".filterLibox .back").removeClass("active");
        });

    },

    all: function () {
        filterLibox.open();
        filterLibox.close_click();
        filterLibox.scroll();
        filterLibox.yearSelect();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               about               //
///////////////////////////////////////
var about = {
    perfectScrollbar: function () {
        var container = document.querySelector('.banner .anchors');
        var ps = new PerfectScrollbar(container, {
            suppressScrollY: true,
            maxScrollbarLength: 1
        });
    },

    socialMediaColor: function () {
        var backgroundColor = $("main").css("background-color")
        $(".socialMedia").css("color", backgroundColor);
    },

    letterAnimation: function () {
        $('.inf p').each(function () {
            $(this).html($(this).text().replace(/([/\S/\w* ]|\w)/g, "<span class='letter'>$&</span>"));
            $('.inf p span').each(function () {
                var i = $(this).index()
                var delayTime = 0.5 + i * 0.1 + "s"
                $(this).css("animation-delay", delayTime)
            });
        });

        $('.sponsors p').each(function () {
            $(this).html($(this).text().replace(/([/\S/\w* ]|\w)/g, "<span class='letter'>$&</span>"));
            $('.sponsors p span').each(function () {
                var i = $(this).index()
                var delayTime = i * 0.06 + "s"
                $(this).css("animation-delay", delayTime)
            });
        });
    },

    numAnimation: function () {
        // 建立矩陣
        var years = new Array

        // 將數值塞入矩陣
        var boxs = document.querySelectorAll(".aboutContent .archive .linkBox")
        for (i = 0; i < boxs.length; i++) {
            var year = $(boxs[i]).attr("data-year");
            years.push(year)
        }

        // 去除重複的數值
        var result = years.filter(function (element, index, arr) {
            return arr.indexOf(element) === index;
        });

        // 依據矩陣建立相對應的內容
        for (y = 0; y < result.length; y++) {
            var span = ""
            for (z = 0; z < result[y].length; z++) {
                var structure = "<span style='transition-delay:" + z * 0.1 + "s'>" + result[y][z] + "</span>"
                var span = span + structure
            }
            var html = "<div class='" + result[y] + "'><p>" + span + "</p></div>"
            // 塞入結構
            $(".numAnimation").append(html)
        }

        $(window).scroll(function () {
            $(".aboutContent .archive .linkBox").each(function () {
                var color = $(this).attr("data-color");
                var eletop = Math.floor(this.getBoundingClientRect().top)
                // 最終取得的目標物件名子
                var year = ".numAnimation ." + $(this).attr("data-year");

                var windowHeight = Math.floor($(window).height() / 3)

                var targetMax = windowHeight - ($(this).height() / 2)

                var targetMin = windowHeight + ($(this).height() / 2)

                if (eletop >= targetMax && eletop <= targetMin) {
                    $(".aboutContent .archive .numAnimation").css("color", color);
                    $(".aboutContent .archive .numAnimation .go").removeClass("go");
                    $(year).addClass("go");
                }
            })
        });
    },

    archiveFixed: function () {
        $(window).scroll(function () {
            var archiveTop = $(".aboutContent .archive").offset().top
            var archiveBottom = archiveTop + $(".aboutContent .archive").height();
            var scrollTop = $(window).scrollTop()
            var scrollBottom = scrollTop + $(window).height()
            if (scrollTop >= archiveTop && scrollBottom < archiveBottom) {
                $(".aboutContent .archive .numAnimation").addClass("fixed");
                $(".aboutContent .archive .numAnimation").removeClass("bottom");
            } else if (scrollBottom >= archiveBottom) {
                $(".aboutContent .archive .numAnimation").addClass("bottom");
            } else {
                $(".aboutContent .archive .numAnimation").removeClass("bottom");
                $(".aboutContent .archive .numAnimation").removeClass("fixed");
            }
        });
    },

    areaSelect: function () {
        $(".banner .anchors ul li").click(function () {
            var i = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".aboutContent section").eq(i).addClass("active").siblings().removeClass("active");
            _Blazy.aboutW();
            _waypoint.aboutW();
        });
    },

    zoom: function (ele) {
        // 被點選的物件
        var element = $(ele)
        // 點選物件與螢幕上方的距離
        var top = ele.getBoundingClientRect().top
        // 點選物件與螢幕左邊的距離
        var left = ele.getBoundingClientRect().left
        // 被點選物件的寬
        var width = $(ele).width()
        // 被點選物件的高
        var height = $(ele).height()
        // 圖片路徑
        var src = $(ele).find("img").attr("src")

        // 電腦版結構
        var html =
            "<article class='imgLibox'><div class='liboxClose'><span></span></div><section class='_img' style='height:" +
            height + "px;width:" + width + "px'><img src='" + src + "'></section></article"

        // 手機板結構
        if ($(window).width() < 1025) {
            var html = "<article class='imgLibox'><div class='liboxClose'><span></span></div><img src='" + src +
                "'></article"
        }

        // 插入結構
        $("body").append(html);

        if ($(window).width() > 1024) {
            // 加入相對位置參數
            $(".imgLibox ._img").css({
                "top": top,
                "left": left
            });
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
            setTimeout(function () {
                // 將原物件變透明
                element.css("opacity", "0")
                // 將新增的物件移到中間
                $(".imgLibox").addClass("center");
            }, 200)
        } else {
            $("body").css("overflow-y", "hidden");
        }

        liboxClose(top, left, element);

        function liboxClose(top, left, element) {
            $(".imgLibox").click(function () {

                $(this).addClass("close");

                if ($(window).width() > 1024) {
                    // 將新增物件移回原位置
                    $(".imgLibox").removeClass("center");
                    $("body").css({
                        "overflow-y": "visible",
                        "padding-right": "0"
                    });
                } else {
                    $("body").css("overflow-y", "visible");
                }

                setTimeout(function () {
                    // 將原物件顯示
                    element.css("opacity", "1");
                    $(".imgLibox").remove();
                }, 400)
            });
        }
    },

    all: function () {
        if ($("body").hasClass("index")) {
            about.perfectScrollbar();
            about.numAnimation();
            about.archiveFixed();
            about.areaSelect();
        }
        if ($("body").hasClass("detail")) {
            about.socialMediaColor();
            about.letterAnimation();
        }
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
    // nocopy();


    // 蘋果回上頁debug
    appleDebug();
    // 截取頁面id
    var page = $('body').attr('id');

    /*首頁home 啟動的JS*/
    if (page == "home") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.homeW();
        /* b-lazy */
        _Blazy.homeW();
        /*slick*/
        slick('homeSlick');
        home.all();
    }

    /*參賽者服務service 啟動的JS*/
    if (page == "service") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        service.all();
        dropdownList();
        dropdownList2();
    }

    /*競賽介紹competition 啟動的JS*/
    if (page == "competition") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.competitionW();
        /* b-lazy */
        _Blazy.competitionW();
        /*slick*/
        slick('competitionSlick');
        competition.all();
    }

    /*新訊news 啟動的JS*/
    if (page == "news") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.newsW();
        /* b-lazy */
        _Blazy.newsW();
        news.all();
    }

    /*競賽介紹contact 啟動的JS*/
    if (page == "contact") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.contactW();
        contact.all();
        dropdownList();
    }

    /*會員中心 啟動的JS*/
    if (page == "member") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*slick*/
        slick('memberSlick');
        member.all();
        dropdownList();
        dropdownList2();

        // logOut();
    }

    /*評審 啟動的JS*/
    if (page == "juge") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /* b-lazy */
        _Blazy.jugeW();
        /*slick*/
        slick('jugeSlick');
        juge.all();
        dropdownList();
        dropdownList2();
    }

    /* 光點藝廊gallery啟動的JS*/
    if (page == "gallery") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.galleryW();
        /* b-lazy */
        _Blazy.galleryW();
        gallery.all();
    }

    /* 關於光點計畫about啟動的JS*/
    if (page == "about") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.aboutW();
        /* b-lazy */
        _Blazy.aboutW();
        /*slick*/
        slick('aboutSlick');
        about.all();
    }
});