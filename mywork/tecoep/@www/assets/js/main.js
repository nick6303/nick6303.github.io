/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////


var _waypoint = {
    homeW: function() {
        // 產品
        $(".product ._title").addClass("hide");
        $(".product ._slick").addClass("hide");
        $(".product").waypoint(function() {
            $(".product ._title").removeClass("hide");
            $(".product ._slick").removeClass("hide");
            $(".product").addClass("show");
        }, { offset: '50%' });
        $('.companyIntro .row .row_img').each(function(index, element) {
            $(element).addClass("hide");
            $(element).waypoint({
                handler: function() {
                    $(element).removeClass("hide");
                    $(element).addClass('show');
                },
                offset: '70%'
            });
        });
        $('.companyIntro .row .row_text').each(function(index, element) {
            $(element).addClass("hide");
            $(element).waypoint({
                handler: function() {
                    $(element).removeClass("hide");
                    $(element).addClass('show');
                },
                offset: '70%'
            });
        });
        $(".news").addClass("hide");
        $(".news").waypoint(function() {
            $(".news").removeClass("hide");
            $(".news").addClass("show");
        }, { offset: '50%' });
    },
    productW: function() {
        // top_nav
        $(".content .top_nav").waypoint(function() {
            $(".content .top_nav").addClass('show');
        }, { offset: '80%' });
        // 標題
        $(".content ._title").waypoint(function() {
            $(".content ._title").addClass('show');
        }, { offset: '80%' });
        // 主頁
        if ($("body").hasClass("index")) {
            // 內容
            if ($(window).width() > 900) {
                $('.row').each(function(index, element) {
                    $(element).waypoint({
                        handler: function() {
                            $(element).addClass('show');
                        },
                        offset: '50%'
                    });
                });
            }
            if ($(window).width() < 901) {
                // 圖片內容
                $('.row_img').each(function(index, element) {
                    $(element).waypoint({
                        handler: function() {
                            $(element).addClass('show');
                        },
                        offset: '70%'
                    });
                });
                // 文字內容
                $('.row_text').each(function(index, element) {
                    $(element).waypoint({
                        handler: function() {
                            $(element).addClass('show');
                        },
                        offset: '70%'
                    });
                });
            }
        }
        // type
        if ($("body").hasClass("type")) {
            $('.product_box_bg').each(function(index, element) {
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                    },
                    offset: '50%'
                });
            });
        }
        // series
        if ($("body").hasClass("series")) {
            $('.product_box').each(function(index, element) {
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                    },
                    offset: '50%'
                });
            });
        }
    },
    newsW: function() {
        $('.news_box').each(function(index, element) {
            $(element).waypoint({
                handler: function() {
                    $(element).addClass('show');
                },
                offset: '70%'
            });
        });
    },
    serviceW: function() {
        // 主頁
        if ($("body").hasClass("index")) {
            $('.linkBox ul li').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '70%'
                });
            });
        }
        // QA
        if ($("body").hasClass("QA")) {
            $('.question').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '70%'
                });
            });
        }
    },
    applicationsW: function() {
        if ($("body").hasClass("index")) {
            $(".content ._title").waypoint(function() {
                $(".content ._title").addClass('show');
            }, { offset: '80%' });
            $('.applicationBoxs ul li').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '50%'
                });
            });
        }
        if ($("body").hasClass("detail")) {
            // type1:圖文相存
            $('.withImg>*').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            // type3:純文字
            $('.onlyWord').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            // type4:純圖片
            $('.onlyImg>*').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            // type5:一半圖一半字
            $('.half>*').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            $('.productSlick>*').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
        }
    },

    aboutW: function() {
        // 主頁
        if ($("body").hasClass("index")) {
            $(".productSlick").waypoint(function() {
                $(".productSlick").addClass('show');
            }, { offset: '80%' });
        }
        // 核心能力內頁
        if ($("body").hasClass("capability")) {
            // 標題
            $(".content ._title").waypoint(function() {
                $(".content ._title").addClass('show');
            }, { offset: '80%' });
            $('.row ._img').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            $('.row ._text').each(function(index, element) {
                $(element).addClass("hide");
                $(element).waypoint({
                    handler: function() {
                        $(element).addClass('show');
                        $(element).removeClass("hide");
                    },
                    offset: '60%'
                });
            });
            $(".quality").addClass('hide');
            $(".quality").waypoint(function() {
                $(".quality").removeClass('hide');
                $(".quality").addClass('show');
            }, { offset: '70%' });
        }
    },
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////

var _Blazy = {
    homeW: function() {
        var bLazy = new Blazy({
            offset: 300,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    productW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    newsW: function() {
        var bLazy = new Blazy({
            offset: 100,
            loadInvisible: true,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    serviceW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    applicationsW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    aboutW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////
var _slick = {
    homeSlick: function() {
        $(".banner ._slick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            fade: true,
            cssEase: "cubic-bezier(0.39, 0.575, 0.565, 1)",
        });

        $(".product ._slick ul").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            dots: true,
            lazyLoad: "ondemand",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }, {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }]
        });

        $(".product ._slick .icon-home-slick-arrow-left").click(function() {
            $('.product ._slick ul').slick("getSlick").slickPrev();
        });

        $(".product ._slick .icon-home-slick-arrow-right").click(function() {
            $('.product ._slick ul').slick("getSlick").slickNext();
        });

        $(".news ._slick ul").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 600,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            lazyLoad: "ondemand",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,

                }
            }, {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 451,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    },

    productSlick: function() {

        $(".content ._slick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            dots: true,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 701,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }]
        });

        $(".content ._slick .icon-slick-arrow-left").click(function() {
            $('.content ._slick ul').slick("getSlick").slickPrev();
        });

        $(".content ._slick .icon-slick-arrow-right").click(function() {
            $('.content ._slick ul').slick("getSlick").slickNext();
        });
    },

    newsSlick: function() {
        $("._slick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            dots: true,
            swipe: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 901,
                settings: {
                    swipe: true,
                }
            }]
        });

        $("._slick .icon-slick-arrow-left").click(function() {
            $('._slick ul').slick("getSlick").slickPrev();
        });

        $("._slick .icon-slick-arrow-right").click(function() {
            $('._slick ul').slick("getSlick").slickNext();
        });
    },

    applicationsSlick: function() {
        $(".content ._slick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            lazyLoad: 'ondemand',
        });

        $(".productSlick ._slick ul").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }]
        });

        $(".productSlick .icon-home-slick-arrow-left").click(function() {
            $('.productSlick ul').slick("getSlick").slickPrev();
        });

        $(".productSlick .icon-home-slick-arrow-right").click(function() {
            $('.productSlick ul').slick("getSlick").slickNext();
        });
    },

    aboutSlick: function() {
        $(".productSlick ._slick ul").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 1421,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }]
        });

        $(".productSlick .icon-home-slick-arrow-left").click(function() {
            $('.productSlick ul').slick("getSlick").slickPrev();
        });

        $(".productSlick .icon-home-slick-arrow-right").click(function() {
            $('.productSlick ul').slick("getSlick").slickNext();
        });
    }
}



/***************************************************************************************************************************/


/***************************************************************************************************************************/


///////////////////////////////////////
//            BackToTop              //
///////////////////////////////////////


function BackToTop() {

    $(".goTop").click(function() {
        $("html,body").animate({
            scrollTop: 0,
        }, 1500, 'easeOutCubic');
    });
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
            // url: $("base").attr("href") + '/header',
        })

        .done(function(data) {
            $("header").html(data);
            load.hd();
        })

}

/*---------------------------------------------------------------------------------------------------*/


// footer
function footer() {

    $.ajax({
            url: '../../views/layout/footer.html',
            // url: $("base").attr("href") + '/footer',
        })

        .done(function(data) {
            $("footer").html(data);
            load.ft();
        })

}


/*---------------------------------------------------------------------------------------------------*/



/*ajax 事件綁定function*/
var load = {

    /*header*/
    hd: function() {


        /*menu*/
        menu.all();
        headerHover.all();

        // header文字顏色設定  依據圖片顏色轉色
        // headerWordColor();

        // header linkList underline
        // hdLinkLine();

        // header浮動出現
        headerFixed();

        bannerScrollDown();

        // 產品搜尋
        openSearch();
    },

    /*footer*/
    ft: function() {

        /*回到最上*/
        BackToTop();

        /* 下拉式選單*/
        ft_dropdown_list();

        // 隱私權政策
        openPrivacyLibox();

    }

}


/***************************************************************************************************************************/

// 蘋果回上頁debug
function appleDebug() {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
}
/***************************************************************************************************************************/
///////////////////////////////////////
//           product search          //
///////////////////////////////////////

function openSearch() {
    $(".openSearch").click(function() {
        searchLibox();
    });
}

function searchLibox() {

    $.ajax({
            url: '../../views/layout/searchLibox.html',
            // url : $("base").attr("href")+'/searchLibox'
        })

        .done(function(data) {

            $("body").append("<article class='searchLibox'></article>");

            searchLiboxJs.open();

            $(".searchLibox").html(data);

            searchLiboxJs.all();
        });
}


var searchLiboxJs = {

    open: function() {
        $("body").css("overflow-y", "hidden");
        $(".searchLibox").addClass("open");
    },

    close_click: function() {
        $(".close").click(function() {
            searchLiboxJs.close();

        });
    },

    close: function() {
        $(".searchLibox").removeClass("open");
        $(".searchLibox").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".searchLibox").remove();
        }, 1400);
    },

    // 點其他地方會關閉
    clickOtherClose: function() {
        $('.searchLibox').click(function(e) {
            if (e.target == this) {
                searchLiboxJs.close();
            }
        });
    },

    // 標格編號
    number: function() {
        // 產品及規格的標格編號
        $(".listContent .list .itemName span").each(function() {
            var i = $(this).parent().parent().index() + 1
            if (i < 10) {
                var number = "0" + i
            } else {
                var number = i
            }
            $(this).text(number);
        });

        // 詳細規格標格編號
        $(".listContent .productList .infName span").each(function() {
            var i = $(this).parent().parent().index() + 1
            if (i < 10) {
                var number = "0" + i
            } else {
                var number = i
            }
            $(this).text(number);
        });

        // 羅馬數字編號
        $(".listContent .productList .productName span").each(function() {
            var num = $(this).parent().parent().index() + 1

            var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

            var romanStr = "";

            for (var i in lookup) {
                while (num >= lookup[i]) {
                    romanStr += i;
                    num -= lookup[i];
                }
            }

            var romanStr = romanStr + "."


            $(this).text(romanStr);

        });
    },

    scrollBar: function() {
        $(".searchLibox .searchBox").mCustomScrollbar({
            scrollInertia: 500,
            scrollEasing: "easeOut",
        });

    },

    // 點選選擇條件
    selectCondition: function() {
        $(".searchLibox .searchNav ul li:first-child").click(function() {

            $(".searchLibox .searchNav ul li").removeClass("active");

            $(this).prevAll().addClass("active");
            $(this).addClass("active")

            var i = $(this).index();

            var condition = document.querySelectorAll(".searchContent>div");

            $(condition[i]).addClass("active");
            $(condition[i]).siblings().removeClass("active");
        });
    },

    // 手機板:回到選擇產品
    backToProduct: function() {
        $(".searchLibox .searchBox .searchNav ul li:nth-child(2) span").click(function() {
            $(".searchLibox .searchBox .searchNav ul li:nth-child(2)").removeClass("active");
            $(".searchLibox .searchBox .searchNav ul li:nth-child(1)").addClass("active");

            $(".selectScale").removeClass("active");
            $(".selectProduct").addClass("active");
        });
    },

    all: function() {
        searchLiboxJs.close_click();
        searchLiboxJs.clickOtherClose();
        searchLiboxJs.number();
        searchLiboxJs.scrollBar();
        searchLiboxJs.backToProduct();
        // 按鈕功能
        button.all();
        //點選選擇條件
        if ($(window).width() > 700) {
            searchLiboxJs.selectCondition();
        }
    }
}




// 內容按鈕功能
var button = {

    // 下拉式選單
    dropdownList_click: function() {
        $(".searchLibox .list .selectList .selectMenu").click(function() {
            var ele = $(this)

            var ele_list = $(this).closest(".list")

            if ($(ele_list).prev().find(".selectMenu").hasClass("checked") || $(ele_list).index() === 0 || $(ele_list).parent().parent().hasClass("selectScale")) {

                $(ele).toggleClass("open");
                // 開啟選單
                $(ele).closest(".selectList").find("ul").slideToggle(500);
            } else {
                $(ele).find(".hiddenText").show(300);
                $(ele).find("p").hide(0);
            }

            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(500);
                    $(ele).removeClass("open");
                    $(ele).find("p").show(300);
                    $(ele).find(".hiddenText").hide(0);
                }
            });
            button.listScrollBar();
        });
    },

    listScrollBar: function() {
        $(".searchLibox .list .selectList ul").niceScroll({
            cursorborder: 'none',
            cursorcolor: 'transparent',
            mousescrollstep: 20,
            scrollspeed: 30,
        });
    },

    dropdownList_select: function() {
        // 選擇li後關閉選單
        $(".searchLibox .list .selectList ul li").click(function() {

            $(this).closest(".selectList").find(".selectMenu").removeClass("open");

            $(this).addClass("checked");

            $(this).siblings().removeClass("checked");

            $(this).closest("ul").slideUp(500);

            $(this).closest(".selectList").find(".selectMenu").addClass("checked");

            $(this).closest(".selectList").find(".selectMenu p").text($(this).find("p").text())

        });
    },

    clearProduct_click: function() {
        // 點選清除已點選的產品
        $(".clearProduct").click(function() {
            button.clearProduct();
        });
    },

    // 清除已點選的產品 
    clearProduct: function() {
        $(".selectProduct .list:nth-child(1) .selectMenu p").text("請選擇您的產品").parent().removeClass("checked");
        $(".selectProduct .list:nth-child(2) .selectMenu p").text("請選擇您的系列").parent().removeClass("checked");
        $(".selectProduct .list:nth-child(3) .selectMenu p").text("請選擇您的型號").parent().removeClass("checked");
    },

    // 點選清除已點選的規格
    clearScale_click: function() {
        $(".clearScale").click(function() {
            button.clearScale();
        });
    },

    // 到選擇規格
    toScale: function() {
        $(".toScale").click(function() {
            if ($(".selectProduct .list:nth-child(3) .selectMenu").hasClass("checked")) {
                $(".selectScale").addClass("active");
                $(".selectScale").siblings().removeClass("active");
                searchLiboxJs.number();
                button.getTypeInf();
                $(".searchLibox .searchNav li:nth-child(2)").addClass("active");
                if ($(window).width() < 701) {
                    $(".searchLibox .searchNav li:nth-child(1)").removeClass("active");
                }
            } else {
                alert("尚未選取完選項");
            }
        });
    },

    // 擷取型號種類資訊
    getTypeInf: function() {

        var TypeInf = $(".selectProduct .list:nth-child(3) .selectMenu p").text();

        $(".selectScale .selectedType p").text(TypeInf);
    },

    // 清除以點選的規格
    clearScale: function() {
        $(".selectScale .list .selectMenu p").each(function() {
            $(this).text("請選擇您的規格").parent().removeClass("checked")
        });
    },

    // 到搜尋結果
    toResult: function() {
        $(".toResult").click(function() {
            // 至少點選一項條件
            if ($(".selectScale .list .selectMenu.checked").length >= 1) {
                $(".searchResult").addClass("active");
                $(".searchResult").siblings().removeClass("active");
                searchLiboxJs.number();
                $(".searchLibox .searchNav li:nth-child(3)").addClass("active");
                if ($(window).width() < 701) {
                    $(".searchLibox .searchNav li:nth-child(2)").removeClass("active");
                }
            } else {
                alert("尚未選取規格");
            }
        });
    },

    // 點選詳細規格
    seeDetailInf: function() {
        $(".seeDetailInf").click(function() {
            $(this).parent().parent().parent().find(".detailInf").slideToggle(800);
            $(this).parent().parent().parent().siblings().find(".detailInf").slideUp(800);
            $(this).parent().parent().parent().toggleClass("openInf");
            $(this).parent().parent().parent().siblings().removeClass("openInf");
        });
    },

    // 重新搜尋產品
    researchProduct: function() {
        $(".researchProduct").click(function() {
            button.clearProduct();
            button.clearScale();
            $(".selectProduct").addClass("active");
            $(".selectProduct").siblings().removeClass("active");
            $(".searchLibox .searchNav li:nth-child(3)").removeClass("active");
            // 電腦版
            if ($(window).width() > 700) {
                $(".searchLibox .searchNav li:nth-child(2)").removeClass("active");
            }
            // 手機板
            if ($(window).width() < 701) {
                $(".searchLibox .searchNav li:nth-child(1)").addClass("active");
            }
        });
    },

    // 重新搜尋規格
    researchScale: function() {
        $(".researchScale").click(function() {
            button.clearScale();
            $(".selectScale").addClass("active");
            $(".selectScale").siblings().removeClass("active");
            $(".searchLibox .searchNav li:nth-child(3)").removeClass("active");
            // 手機板
            if ($(window).width() < 701) {
                $(".searchLibox .searchNav li:nth-child(2)").addClass("active");
            }
        });
    },

    all: function() {
        button.dropdownList_click();
        button.dropdownList_select();
        button.toScale();
        button.clearProduct_click();
        button.clearScale_click();
        button.toResult();
        button.seeDetailInf();
        button.researchProduct();
        button.researchScale();

    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//           fakeLibox back          //
///////////////////////////////////////

var fakeLibox = {

    // 檢查是否上一頁是偽燈箱
    checkIsfromFakeLibox: function() {
        var check = localStorage.getItem("IsItFromFakeLibox");

        if (check == "yes") {
            fakeLibox.fakeLibox();
        } else {
            return
        }
    },

    fakeLibox: function() {
        $("body").append("<div class='fakeLiboxClose'></div>");

        $("body").addClass("fakeLibox");

        fakeLibox.selectUnit();

        setTimeout(function() {
            $("body").remove(".fakeLiboxClose");
        }, 800);

        setTimeout(function() {
            // 將localStorage的暫存參數刪除
            var str = ""
            localStorage.setItem("IsItFromFakeLibox", str);

            $("body").removeClass("fakeLibox");

        }, 1200);
    },

    // 回到先前選取的單元
    selectUnit: function() {
        var i = localStorage.getItem("unit");

        var menuList = document.querySelectorAll(".content ._title .menulist ul li");

        var content = document.querySelectorAll(".content .news_content .news_boxs");

        $(menuList[i]).addClass("active");
        $(menuList[i]).siblings().removeClass("active");

        $(content[i]).addClass("active");
        $(content[i]).siblings().removeClass("active");

        // 將localStorage的暫存參數刪除
        var str = ""
        localStorage.setItem("unit", str);
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//       header&banner word color    //
///////////////////////////////////////
headerWordColor();

function headerWordColor() {

    // banner是slick的情況下
    var slickImgData = $(".banner ._slick ul li:nth-child(2) img").data("color");

    if (slickImgData == "darkBg") {
        $("header").addClass("darkBg");
    }


    var slick_li = document.querySelectorAll(".banner ._slick ul li")

    $('.banner ._slick ul').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        var i = nextSlide

        var nextSlickImgData = $(slick_li[i]).find("img").data("color");

        if (nextSlickImgData == "darkBg") {
            $("header").addClass("darkBg");
            $(".banner").addClass("darkBg");

        } else {
            $("header").removeClass("darkBg");
            $(".banner").removeClass("darkBg");
        }
    });


    // banner無slick的情況下
    var bannerImgData = $(".banner .banner_img img").data("color");;

    if (bannerImgData == "darkBg") {
        $("header").addClass("darkBg");
        $(".banner").addClass("darkBg");
    }



}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//       footer dropdown list        //
///////////////////////////////////////


function ft_dropdown_list() {

    $(".footer .selectList").click(function() {
        var ele = $(this)

        $(ele).toggleClass("open");

        // 開啟選單

        $(ele).parent().find("ul").slideToggle(500);

        // 點選其他物件 關閉選單
        $(document).click(function(e) {
            if ($(ele).parent().has(e.target).length === 0) {
                $(ele).parent().find("ul").slideUp(500);
                $(ele).removeClass("open");
            }
        });

    });

    // 選擇li後關閉選單
    $(".footer .storeHold ul li").click(function() {
        $(".footer .selectMenu").removeClass("open");

        $(this).addClass("checked");

        $(this).siblings().removeClass("checked");

        $(this).parent().slideUp(500);

        $(this).parent().parent().find(".footer .selectList p").text($(this).find("p").text())


    });


    $(".footer .storeHold ul").mCustomScrollbar({
        scrollInertia: 400,
        scrollEasing: "easeOut",
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

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= headerHeight) {
            $(".header").addClass("prepare");
        } else if (scrollTop < headerHeight) {
            $(".header").removeClass("prepare");
        }

        if (scrollTop >= firstArticleTotalHeight) {
            $(".header").addClass("fixed");
        } else if (scrollTop < firstArticleHeight) {
            $(".header").removeClass("fixed");
        }
    });
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//        banner scroll down         //
///////////////////////////////////////


function bannerScrollDown() {
    $(".banner_scrollDown").click(function() {
        $("html,body").animate({
            scrollTop: $("main article:first-child").height()
        }, 1000, "easeOutCubic");
    });
}




/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//        隱私權政策燈箱             //
///////////////////////////////////////

function openPrivacyLibox() {
    $(".openPrivacy").click(function() {
        privacyLibox();
    });
}


function privacyLibox() {

    $.ajax({
            url: '../../views/layout/privacyLibox.html',
        })

        .done(function(data) {

            $("body").append("<article class='privacyLibox'></article>");

            PrivacyLiboxJs.open();

            $(".privacyLibox").html(data);

            PrivacyLiboxJs.all();
        });

}


var PrivacyLiboxJs = {

    open: function() {
        $("body").css("overflow-y", "hidden");
        $(".privacyLibox").addClass("open");
    },

    close_click: function() {
        $(".liboxClose").click(function() {
            PrivacyLiboxJs.close();
        });
    },

    close: function() {
        $(".privacyLibox").removeClass("open");
        $(".privacyLibox").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".privacyLibox").remove();
        }, 1500);
    },

    goTop: function() {
        $(".privacyGoTop").click(function() {
            $(".privacyLibox").animate({
                scrollTop: 0
            }, 800, 'easeOutCubic');
        });
    },

    all: function() {
        PrivacyLiboxJs.close_click();
        PrivacyLiboxJs.goTop();
    }
}



/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//            videoLibox             //
///////////////////////////////////////

// 影片燈箱

function videoLibox(link) {
    $.ajax({
            url: "../../views/layout/videoLibox.html",
        })

        .done(function(data) {

            $("body").append("<article class='videoLibox'></article>");
            videoLiboxJs.open();

            $(".videoLibox").html(data);

            videoLiboxJs.all(link);
        });
}



var videoLiboxJs = {

    open: function() {
        $("body").css("overflow-y", "hidden");
        $(".videoLibox").addClass("open");
    },

    close_click: function() {
        $(".liboxClose").click(function() {
            videoLiboxJs.close();
        });
    },

    close: function() {
        $(".videoLibox").removeClass("open");
        $(".videoLibox").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".videoLibox").remove();
        }, 1200);
    },

    // 點其他地方會關閉
    clickOtherClose: function() {
        $('.videoLibox').click(function(e) {
            if (e.target == this) {
                videoLiboxJs.close();
            }
        });
    },

    videoAutoPlay: function(link) {
        // 偵查網址
        var targetHref = link
        var targetArr = targetHref.split("/");
        // 選取影片id
        var targetVideoId = targetArr.pop();
        // 重組網址
        var plusAutoPlayCode = "https://www.youtube.com/embed/" + targetVideoId + "?rel=0;autoplay=1"
        $("._video iframe").attr("src", plusAutoPlayCode);
    },

    all: function(link) {
        videoLiboxJs.clickOtherClose();
        videoLiboxJs.close_click();
        videoLiboxJs.videoAutoPlay(link);
    }
}


/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//         title dropdownList        //
///////////////////////////////////////

// 下拉式選單
function titleDropdownList() {


    if ($(window).width() < 901) {
        $(".content ._title .menulist .selectMenu").click(function() {
            var ele = $(this)

            if ($(ele).hasClass("open")) {
                $(".nicescroll-cursors").addClass("hide");
            } else {
                $(".nicescroll-cursors").removeClass("hide");
            }

            $(ele).toggleClass("open");

            // 開啟選單

            $(ele).parent().find("ul").slideToggle(500);



            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(500);
                    $(ele).removeClass("open");
                    $(".nicescroll-cursors").addClass("hide");
                    setTimeout(function() {
                        $(".nicescroll-cursors").removeClass("hide");
                    }, 500);
                }
            });

        });


        $(".content ._title .menulist ul").niceScroll({
            // autohidemode: false,
            cursorborder: 'none',
            cursorcolor: '#ccc',
            cursorwidth: 4,
            mousescrollstep: 20,
            scrollspeed: 30,
            railpadding: { top: 0, right: 1, left: 0, bottom: 0 },
        });
    }

    // 選擇li後關閉選單
    $(".content ._title .menulist ul li").click(function() {
        $(this).addClass("checked");
        $(this).siblings().removeClass("checked");

        // 螢幕尺寸小於900以下啟動
        if ($(window).width() < 901) {

            $(this).parent().parent().find(".selectMenu").removeClass("open");

            $(this).parent().slideUp(500);

            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())

            $(".nicescroll-cursors").addClass("hide");

            setTimeout(function() {
                $(".nicescroll-cursors").removeClass("hide");
            }, 500);
        }
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               product             //
///////////////////////////////////////


var product = {
    // 首頁限制字數
    indexWordlatest: function() {

        var len = 70; // 超過70個字以"..."取代

        $(".content .row .row_text h4").each(function() {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });

    },

    seriesLiboxOpen: function() {
        $(".seriesLiboxOpen").click(function() {
            $.ajax({
                url: '../../views/product/serisIntroLibox.html',
            })
            .done(function(data) {
                $("body").append("<article class='seriesIntro'><div class='workBox'></div></article>");
                $(".seriesIntro .workBox").html(data);
                seriesIntroLiboxJs.all();
            })
        });
    },

    // 系列限制字數
    seriesWordlatest: function() {
        // 電腦版
        var len = 35; // 超過70個字以"..."取代
        $(".content .product_boxs .product_box ._text p").each(function() {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });
    },

    bannerScrollDown: function() {
        $(".seeProduct").click(function() {
            $("html,body").animate({
                scrollTop: $(".banner").height()
            }, 1000, 'easeOutCubic');
        });
    },

    // 產品資訊內頁
    productNavSelect: function() {
        $(".product_nav ul li").click(function() {

            $(this).addClass("active");
            $(this).siblings().removeClass("active");

            var i = $(this).index();

            var productDetailelement = document.querySelectorAll(".product_detail section")

            $(productDetailelement[i]).addClass("active");
            $(productDetailelement[i]).siblings().removeClass("active");
            if (i = 1) {
                _Blazy.productW();
            }
        });
    },

    // 產品資訊下拉式選單
    dropdownList: function() {
        if ($(window).width() < 901) {
            $(".product_nav .selectInf").click(function() {
                var ele = $(this)
                $(ele).toggleClass("open");
                // 開啟選單
                $(ele).parent().find("ul").slideToggle(500);
                // 點選其他物件 關閉選單
                $(document).click(function(e) {
                    if ($(ele).parent().has(e.target).length === 0) {
                        $(ele).parent().find("ul").slideUp(500);
                        $(ele).removeClass("open");
                    }
                });
            });

            // 選擇li後關閉選單
            $(".product_nav ul li").click(function() {
                $(this).parent().parent().find(".selectInf").removeClass("open");
                $(this).parent().slideUp(0);
                $(this).parent().parent().find(".selectInf p").text($(this).find("p").text());
                $(this).parent().parent().find(".selectInf b").text($(this).find("b").text());
            });
        }
    },

    // 數字編碼
    number: function() {
        // 產品規格編碼
        $(".scaleContent ul li span").each(function() {
            var i = $(this).parent().index() + 1
            if (i < 10) {
                var num = "0" + i
            } else {
                var num = i
            }
            $(this).text(num);
        });
        // 檔案下載編碼
        $(".downloadContent ul li span").each(function() {
            var i = $(this).parent().index() + 1
            if (i < 10) {
                var num = "0" + i
            } else {
                var num = i
            }
            $(this).text(num);
        });
    },

    // 檔案下載選擇單元
    selectDownloadUnit: function() {
        $(".download ._title .selectMenu").click(function() {
            var ele = $(this)
            $(ele).toggleClass("open");
            // 開啟選單
            $(ele).parent().find("ul").slideToggle(500);
            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(500);
                    $(ele).removeClass("open");
                }
            });
        });

        $(".download ._title .menulist ul li").click(function() {
            $(this).addClass("checked");
            $(this).siblings().removeClass("checked");
            // 手機板才會出現
            // 選擇li後關閉選單
            if ($(window).width() < 701) {
                $(this).parent().parent().find(".selectMenu").removeClass("open");

                $(this).parent().slideUp(500);

                $(this).parent().parent().find(".selectMenu p").text($(this).text());
            }
        });
    },

    all: function() {
        // 主頁
        if ($("body").hasClass("index")) {
            product.indexWordlatest();
        }
        // 系列頁面
        if ($("body").hasClass("series")) {
            product.seriesWordlatest();
            product.bannerScrollDown();
        }
        // 產品資訊頁
        if ($("body").hasClass("detail")) {
            product.productNavSelect();
            product.number();
            product.dropdownList();
            product.selectDownloadUnit();
        }
        product.seriesLiboxOpen();
    }
}


var seriesIntroLiboxJs = {
    open: function() {
        $("body").css("overflow", "hidden");
    },

    close_click: function() {
        $(".liboxClose").click(function() {
            seriesIntroLiboxJs.close();
        });
    },

    close: function() {
        $(".seriesIntro").addClass("close");
        $("body").css("overflow-y", "visible");
        $(".nicescroll-cursors").remove();
        setTimeout(function() {
            $(".seriesIntro").remove();
        }, 1200);
    },

    /*點選其他地方也會關閉*/
    clickOtherClose: function() {
        $('.seriesIntro').click(function(e) {
            if (e.target == this) {
                seriesIntroLiboxJs.close();
            }
        });
    },

    slick: function() {
        $(".liboxSlick ul").slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            responsive: [{
                breakpoint: 701,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }]
        });
        $(".liboxSlick .icon-slick-arrow-left").click(function() {
            $('.liboxSlick ul').slick("getSlick").slickPrev();
        });
        $(".liboxSlick .icon-slick-arrow-right").click(function() {
            $('.liboxSlick ul').slick("getSlick").slickNext();
        });
        var ele = document.querySelectorAll(".liboxSlick ul li");
        if (ele.length == 1) {
            $(".liboxSlick .arrow").css("display", "none");
        }
    },

    niceScroll: function() {
        setTimeout(function() {
            $(".seriesIntro .workBox").niceScroll({
                cursorborder: 'none',
                cursorcolor: "rgba(0,0,0,.5)",
                cursorwidth: "4px"
            });
        }, 800);
        $(".seriesIntro .workBox").getNiceScroll().resize();
    },
    liNumb: function() {
        $(".liboxContent .with_ul ul li").each(function() {
            var eleNumb = $(this).index() + 1;
            var total = eleNumb
            if (eleNumb < 10) {
                var total = "0" + eleNumb
            }
            $(this).find("span").text(total);
        });
    },
    all: function() {
        seriesIntroLiboxJs.open();
        seriesIntroLiboxJs.close_click();
        seriesIntroLiboxJs.clickOtherClose();
        seriesIntroLiboxJs.slick();
        seriesIntroLiboxJs.niceScroll();
        seriesIntroLiboxJs.liNumb();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               news                //
///////////////////////////////////////

var news = {
    // 首頁限制字數
    indexWordlatest: function() {

        ////////////////////////////
        //      文字方塊內文      //
        ////////////////////////////
        // 電腦版
        var p_len = 50; // 超過70個字以"..."取代

        // 手機板
        // if ($(window).width() < 701) {
        //     var len = 45; // 超過45個字以"..."取代
        // }

        $(".news_box p").each(function() {
            if ($(this).text().length > p_len) {
                var text = $(this).text().substring(0, p_len - 1) + "...";
                $(this).text(text);
            }
        });

    },

    // 不同新聞點選
    selectNews: function() {
        $(".content ._title .menulist ul li").click(function() {

            var element = document.querySelectorAll(".news_content .news_boxs")

            var i = $(this).index();

            $(element[i]).addClass("active");
            $(element[i]).siblings().removeClass("active");

            // _Blazy.newsW();
        });
    },

    videoLiboxOpen: function() {
        $(".openVideoLibox").click(function() {
            videoLibox($(this).data("info"));
        });
    },

    fakeLiboxClose: function() {
        $(".close").click(function() {
            $("body").addClass("liboxClose");
            var str = "yes"
            localStorage.setItem("IsItFromFakeLibox", str);
            setTimeout(function() {
                news.backHref();
            }, 1000);
        });
    },

    // 汲取上一頁的網址
    backHref: function() {
        var backHerf = document.referrer
        if (backHerf === "") {
            location.href = "http://localhost/tecoep/@www/views/news/index.html"
        } else {
            window.history.back();
        }
    },

    // 擷取所屬單元
    getUnit: function() {
        $(".news_content ul li a").click(function() {
            var i = $(this).parent().parent().index()

            localStorage.setItem("unit", i);
        });
    },

    all: function() {
        if ($("body").hasClass("index")) {
            news.indexWordlatest();
            news.selectNews();
            news.getUnit();
        }
        if ($("body").hasClass("detail")) {
            news.videoLiboxOpen();
            news.fakeLiboxClose();
        }
    }
}


/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//            applications           //
///////////////////////////////////////

var applications = {

    // 插入虛構的LI
    appendSixLi: function() {
        $(".six").insertAfter(".content ._title .menulist ul li:nth-child(6)");

        // 在平板尺寸900以下刪除six
        if ($(window).width() < 901) {
            $(".six").remove();
        }
    },

    // 內容以行為單位延遲動畫
    delay: function() {
        var element = document.querySelectorAll(".applicationBoxs ul li");
        var imgTime = 0

        var textTime = 0

        // 電腦版螢幕尺寸大於1024
        for (var i = 0; i < element.length; i++) {

            var x = i % 4

            var imgTime = x * .15 + "s"
            var textTime = x * .15 + .2 + "s"
            $(element[i]).find("._img").css("animation-delay", imgTime);
            $(element[i]).find("._text").css("animation-delay", textTime);
        }


        // 平板螢幕尺寸小於1025
        if ($(window).width() < 1025) {
            for (var i = 0; i < element.length; i++) {

                var x = i % 3

                var imgTime = x * .15 + "s"
                var textTime = x * .15 + .2 + "s"
                $(element[i]).find("._img").css("animation-delay", imgTime);
                $(element[i]).find("._text").css("animation-delay", textTime);
            }
        }

        // 螢幕尺寸小於700以下啟動
        if ($(window).width() < 701) {
            for (var i = 0; i < element.length; i++) {

                var x = i % 2

                var imgTime = x * .15 + "s"
                var textTime = x * .15 + .2 + "s"
                $(element[i]).find("._img").css("animation-delay", imgTime);
                $(element[i]).find("._text").css("animation-delay", textTime);
            }
        }

        // 螢幕尺寸小於450以下啟動
        if ($(window).width() < 451) {
            for (var i = 0; i < element.length; i++) {
                var x = i % 1
            }
        }

    },

    // 產品資訊下拉式選單
    dropdownList: function() {
        if ($(window).width() < 901) {
            $(".product_nav .selectInf").click(function() {
                var ele = $(this)

                $(ele).toggleClass("open");

                // 開啟選單

                $(ele).parent().find("ul").slideToggle(500);

                // 點選其他物件 關閉選單
                $(document).click(function(e) {
                    if ($(ele).parent().has(e.target).length === 0) {
                        $(ele).parent().find("ul").slideUp(500);
                        $(ele).removeClass("open");
                    }
                });
            });

            // 選擇li後關閉選單
            $(".product_nav ul li").click(function() {
                $(this).parent().parent().find(".selectInf").removeClass("open");
                $(this).parent().slideUp(800);
            });
        }
    },

    // 點擊相關應用產品
    productClick: function() {
        $(".product_nav ul li:last-child").click(function() {
            $("html,body").animate({
                scrollTop: $(".productSlick").offset().top
            }, 1500, 'easeOutCubic');
        });
    },

    //限制字數
    Wordlatest: function() {

        var len = 40; // 超過40個字以"..."取代

        $(".productSlick ul li a p").each(function() {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });

    },

    slickArrowHide: function() {
        // li數量
        var i = document.querySelectorAll(".productSlick ._slick ul li").length
        if (i < 4 && $(window).width() > 900) {
            $(".productSlick ._slick .arrow").addClass("hide");
        } else if (i < 3 && $(window).width() < 901 && $(window).width() > 700) {
            $(".productSlick ._slick .arrow").addClass("hide");
        } else if (i < 2 && $(window).width() < 701) {
            $(".productSlick ._slick .arrow").addClass("hide");
        } else {
            $(".productSlick ._slick .arrow").removeClass("hide");
        }
    },

    all: function() {
        if ($("body").hasClass("index")) {
            applications.appendSixLi();
            applications.delay();
        }
        if ($("body").hasClass("detail")) {
            applications.dropdownList();
            applications.productClick();
            applications.Wordlatest();
            applications.slickArrowHide();
        }
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//             service               //
///////////////////////////////////////

var service = {

    // 點選問題開啟答案
    seeAnswer: function() {
        $(".questionContent .Q").click(function() {
            var ele = $(this)

            $(ele).toggleClass("open");
            $(ele).parent().find(".A").slideToggle(500);

            $(ele).parent().siblings().find(".Q").removeClass("open");
            $(ele).parent().siblings().find(".A").slideUp(500);

            // 點選其他物件 關閉答案
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).removeClass("open");
                    $(ele).parent().find(".A").slideUp(500);
                }
            });
        });
    },

    // 問題動畫延遲進入
    delay: function() {
        $(".questionContent ul li").each(function() {
            var i = $(this).index();
            var x = i * 0.2 + 0.4 + "s"
            $(this).css("animation-delay", x);
        })
    },

    number: function() {
        // 產品規格編碼
        $(".downloadContent ul li span").each(function() {

            var i = $(this).parent().index() + 1

            if (i < 10) {
                var num = "0" + i
            } else {
                var num = i
            }

            $(this).text(num);
        });
    },

    // 篩選下載內容
    selectDown: function() {
        $(".dropList .selectMenu").click(function() {
            var ele = $(this)

            if ($(ele).hasClass("open")) {

                $(".nicescroll-cursors").addClass("hide");
            } else {
                $(".nicescroll-cursors").removeClass("hide");
            }

            $(ele).toggleClass("open");

            $(ele).parent().find("ul").slideToggle(500);
            // 點選其他物件 關閉答案
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).removeClass("open");
                    $(ele).parent().find("ul").slideUp(500);
                    $(".nicescroll-cursors").addClass("hide");
                    setTimeout(function() {
                        $(".nicescroll-cursors").removeClass("hide");
                    }, 500);
                }
            });
            service.selectLi();
        });
    },

    // 點選下載內容
    selectLi: function() {
        $(".dropList ul li").click(function() {
            $(this).addClass("checked");
            $(this).siblings().removeClass("checked");
            $(this).closest("ul").slideUp(500);
            $(this).closest(".dropList").find(".selectMenu").removeClass("open").addClass("active");
            $(this).closest(".dropList").find(".selectMenu p").text($(this).text());
            $(".nicescroll-cursors").addClass("hide");
            setTimeout(function() {
                $(".nicescroll-cursors").removeClass("hide");
            }, 500);
        });
    },

    // 檔案下載選單的scrollbar
    menuScrollBar: function() {
        $(".dropLists .dropList ul").niceScroll({
            cursorborder: 'none',
            cursorcolor: '#ccc',
            mousescrollstep: 20,
            scrollspeed: 30,
            cursorwidth: "4px",
            railpadding: { top: 0, right: 1, left: 0, bottom: 0 },
        });
    },


    // 聯絡表單選單的scrollbar
    formScrollBar: function() {
        $(".form .dropList ul").mCustomScrollbar({
            scrollInertia: 500,
            scrollEasing: "easeOut",
        });
    },

    // 聯絡表單清空
    reset: function() {
        $(".reset").click(function() {
            $(".form .dropList .selectMenu").removeClass("active");
            $(".form .dropList .selectMenu p").text("選擇產品");
            $(".form .dropList ul li").removeClass("checked");
        });
    },

    all: function() {
        // 共用內容
        service.selectDown();
        // 相關問題內頁
        if ($("body").hasClass("QA")) {
            service.seeAnswer();
            service.delay();
        }
        // 檔案下載內頁
        if ($("body").hasClass("download")) {
            service.number();
            service.menuScrollBar();
        }
        // 聯絡表單內頁
        if ($("body").hasClass("contact")) {
            service.reset();
            service.formScrollBar();
        }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//               home                //
///////////////////////////////////////

var home = {
    videoLiboxOpen: function() {
        $(".openVideoLibox div").click(function() {
            videoLibox();
        });
        $(".openVideoLibox div").attr("title", "點擊開啟影片");
    },
    all: function() {
        home.videoLiboxOpen();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           employee             //
////////////////////////////////////

var employee = {
    showPassWord: function() {
        // type="password"
        var $password = '<input id="password" type="password" placeholder="請輸入您的密碼">'
        // type="text"
        var $text = '<input id="password" type="text" placeholder="請輸入您的密碼" >'
        // 點選眼睛按鈕時 
        $(".showPassWord").find('input').click(function() {
            $(this).closest(".showPassWord").toggleClass("show");
            // 擷取目前的值
            var value = $("#password").val()
            if (this.checked) {
                // 換成type="text"
                $("#password").replaceWith($text);
            } else {
                // 換成type="password"
                $("#password").replaceWith($password);
            }
            // 輸入暫存的值
            $("#password").val(value)
        });
    },

    pcslick: function() {
        $(".pc .tableContent ul").slick({
            slidesToShow: 7,
            rows: 1,
            slidesPerRow: 7,
            slidesToScroll: 7,
            speed: 1000,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    slidesPerRow: 4,
                }
            }]
        });
        $(".pc .table_nav .prev").click(function() {
            $('.pc .tableContent ul').slick("getSlick").slickPrev();
        });
        $(".pc .table_nav  .next").click(function() {
            $('.pc .tableContent ul').slick("getSlick").slickNext();
        });
        $('.pc .tableContent ul').on('edge', function(event, slick, currentSlide, nextSlide) {});
    },

    mobileslick: function() {
        $(".moblie .tableContent ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            arrows: false,
            infinite: false,
            asNavFor: '.moblie .table_nav ul'
        });
        $(".moblie .table_nav .prev").click(function() {
            $('.moblie .tableContent ul').slick("getSlick").slickPrev();
        });
        $(".moblie .table_nav  .next").click(function() {
            $('.moblie .tableContent ul').slick("getSlick").slickNext();
        });
        $(".moblie .table_nav ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            arrows: false,
            infinite: false,
            swipe:false,
            asNavFor: '.moblie .tableContent ul'
        });
    },
    // 下拉式選單
    dropdownList: function() {
        $(".nav .menuList .selectMenu").click(function() {
            var ele = $(this)
            $(ele).toggleClass("open");
            // 開啟選單
            $(ele).closest(".menuList").find("ul").slideToggle(500);
            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(500);
                    $(ele).removeClass("open");
                }
            });
        });
        $(".nav .menuList ul li").click(function() {
            $(this).addClass("checked");
            $(this).siblings().removeClass("checked");
            $(this).closest(".menuList").find(".selectMenu").removeClass("open");
            $(this).closest("ul").slideUp(500);
            $(this).closest(".menuList").find(".selectMenu p").html($(this).find("p").html())
        });
    },

    openinf:function() {
        $(".other").click(function() {
            $(".infLibox").remove();
            employee.infLibox();
        });
    
        $(".mine").click(function() {
            $(".infLibox").remove();
            employee.infLibox();
        });
    },
    
    
    infLibox:function() {
        $.ajax({
            url: '../../views/employee/reservation_inf.html',
        })
        .done(function(data) {
            $("body").append("<article class='infLibox'></article>");
            inf.open();
            $(".infLibox").html(data);
            inf.all();
        });
    },

    openform:function() {
        $(".booking").click(function() {
            employee.formLibox();
        });
    },

    formLibox:function () {
        $.ajax({
            url: '../../views/employee/reservation_form.html',
        })
        .done(function(data) {
            $("body").append("<article class='formLibox'></article>");
    
            form.open();
    
            $(".formLibox").html(data);
    
            form.all();
        });
    },

    openrecord:function () {
        $(".record").click(function() {
            recordLibox();
        });
        function recordLibox() {
            $.ajax({
                url: '../../views/employee/reservation_record.html',
            })
            .done(function(data) {
                $("body").append("<article class='recordLibox'></article>");
                record.open();
                $(".recordLibox").html(data);
                record.all();
                cancelLibox.all();
            });
        }
    },

    all: function() {
        if ($("body").hasClass("index")) {
            employee.showPassWord();
        }
        if ($("body").hasClass("reservation")) {
            employee.pcslick();
            employee.mobileslick();
            employee.dropdownList();
            employee.openinf(); //資訊燈箱
            employee.openform(); //預約燈箱
            employee.openrecord(); //預約記錄燈箱
        }
    }
}

var record = {
    open: function() {
        $(".recordLibox").addClass("open");
        $("body").css("overflow-y", "hidden");
    },

    close_click: function() {
        $(".recordLibox .liboxBg .liboxClose").click(function() {
            record.close();
        });

        $('.recordLibox').click(function(e) {
            if (e.target == this) {
                record.close();
            }
        });
    },

    close: function() {
        $(".recordLibox").removeClass("open");
        $(".recordLibox").addClass("close");
        setTimeout(function() {
            $("body").css("overflow-y", "visible");

        }, 1100);
        setTimeout(function() {
            $(".recordLibox").remove();
        }, 1200);
    },

    // 過去紀錄設定
    setPass: function() {

        // 取得今天日期
        var today = new Date();
        // 取得年
        var year = today.getFullYear();
        // 取得月
        var mounth = today.getMonth() + 1;
        if (mounth < 10) {
            var mounth = "0" + mounth
        }
        // 取得日
        var date = today.getDate();
        if (date < 10) {
            var date = "0" + date
        }

        // 將已過紀錄的li加上calss pass
        $(".recordLibox .table_content li").each(function() {
            var $this = $(this)

            var eleDate = $this.find(".date p").text();
            var eleDateSplite = eleDate.split("-")
            // 年
            var eleYear = eleDateSplite[0]
            // 月
            var eleMounth = eleDateSplite[1]
            // 日
            var eleDate = eleDateSplite[2]

            // 比較年分
            if (eleYear < year) {
                $this.addClass("pass");
            } else if (eleMounth < mounth) {
                $this.addClass("pass");
            } else if (eleDate < date) {
                $this.addClass("pass");
            } else {
                // 不做任何事
            }
        });
    },

    scrollBar: function() {
        $(".recordLibox .liboxBg").mCustomScrollbar({
            scrollInertia: 500,
            scrollEasing: "easeOut",
        });
    },

    all: function() {
        record.close_click();
        record.setPass();
        record.scrollBar();
    }
}


var cancelLibox = {
    open_click: function() {
        $(".cancel").click(function() {
            cancelLibox.open();
            // 移除點選的項目
            $(this).closest("li").addClass("target");
        });
    },

    open: function() {
        $(".cancelLibox_bg").addClass("open");
    },

    close_click: function() {
        // 點選藍色X
        $(".cancelLibox .liboxClose").click(function() {
            cancelLibox.close();
            $(".recordLibox .table_content li.target").removeClass("target");
        });

        // 點選黑色背景部分關閉燈箱
        $('.cancelLibox_bg').click(function(e) {
            if (e.target == this) {
                cancelLibox.close();
                $(".recordLibox .table_content li.target").removeClass("target");
            }
        });

        // 確認刪除
        $(".cancelLibox ._btn button:first-child").click(function() {
            cancelLibox.close();
            $(".recordLibox .table_content li.target").remove();
        });

        // 我再想想
        $(".cancelLibox ._btn button:last-child").click(function() {
            cancelLibox.close();
            $(".recordLibox .table_content li.target").removeClass("target");
        });
    },

    close: function() {
        $(".cancelLibox_bg").removeClass("open");
        $(".cancelLibox_bg").addClass("close");
        setTimeout(function() {
            $(".cancelLibox_bg").removeClass("close");
        }, 1200);
    },

    all: function() {
        cancelLibox.open_click();
        cancelLibox.close_click();
    }
}

var form = {
    open: function() {
        $(".formLibox").addClass("open");
        $("body").css("overflow-y", "hidden");
    },
    close_click: function() {
        $(".formLibox .liboxClose").click(function() {
            form.close();
        });
        $('.formLibox').click(function(e) {
            if (e.target == this) {
                form.close();
            }
        });
        $(".formLibox ._btn button:first-child").click(function() {
            form.close();
        });
    },

    close: function() {
        $(".formLibox").removeClass("open");
        $(".formLibox").addClass("close");
        setTimeout(function() {
            $("body").css("overflow-y", "visible");

        }, 1100);
        setTimeout(function() {
            $(".formLibox").remove();
        }, 1200);
    },

    roomDropdownList: function() {
        $(".formLibox .room .menuList .selectMenu").click(function() {
            var ele = $(this)
            $(ele).toggleClass("open");
            // 開啟選單
            $(ele).closest(".menuList").find("ul").slideToggle(500);
            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(500);
                    $(ele).removeClass("open");
                }
            });
        });

        $(".formLibox .room .menuList ul li").click(function() {
            var $thisLi = $(this)
            // 點選會議室
            $thisLi.addClass("checked");
            $thisLi.closest("ul").slideUp(500);
            $thisLi.siblings().removeClass("checked");
            $thisLi.closest(".menuList").find(".selectMenu").removeClass("open");
            $thisLi.closest(".menuList").find(".selectMenu p").html($thisLi.html());
        });
    },

    // 時間選單
    timeDropdownList: function() {
        $(".formLibox .time .menuList .selectMenu").click(function() {
            var ele = $(this)
            var date = $(".formLibox .date input").val()
            // 還沒選日期
            if (date === "") {
                alert("尚未選取日期");
            }
            // 以選日期
            else {
                $(ele).toggleClass("open");
                // 開啟選單
                $(ele).closest(".menuList").find("ul").slideToggle(500);

                // 點選其他物件 關閉選單
                $(document).click(function(e) {
                    if ($(ele).parent().has(e.target).length === 0) {
                        $(ele).parent().find("ul").slideUp(500);
                        $(ele).removeClass("open");
                    }
                });
            }
        });

        $(".formLibox .time .menuList ul li").click(function() {
            var $thisLi = $(this)
            $thisLi.toggleClass("checked");
            var LiAll = document.querySelectorAll(".formLibox .time .menuList ul li")
            if ($thisLi.closest("ul").find(".checked").length === 1) {
                //選擇數目1個 甚麼都不做
            }
            // 以選擇數目超過一個
            else {
                // 將開始到結束之間的li的字轉呈橘色   
                if ($thisLi.prevAll().hasClass("checked")) {
                    $thisLi.prevUntil(".checked").addClass("checked");
                }
                // 將之後的字變白
                $thisLi.nextAll().removeClass("checked");
            }

            // 填入選擇的時間
            var selectLi = document.querySelectorAll(".formLibox .time .menuList ul li.checked")

            // 預約開始時間
            var startTime = $(selectLi[0]).find("i").text()
            $thisLi.closest(".menuList").find(".selectMenu p i").text(startTime);

            // 預約結束時間
            var i = selectLi.length - 1
            var endTime = $(selectLi[i]).find("span").text()
            $thisLi.closest(".menuList").find(".selectMenu p span").text(endTime);

            // 歸零時間
            if (selectLi.length === 0) {
                $thisLi.closest(".menuList").find(".selectMenu p span").text("00 : 00");
                $thisLi.closest(".menuList").find(".selectMenu p i").text("00 : 00");
            }
        });
    },

    dateDropper: function() {
        if ($(window).width() < 701) {
            $('.formLibox .date input').attr("data-modal", "true");
        }
        $('.formLibox .date input').dateDropper();
    },

    resetBtn: function() {
        $(".formLibox ._btn button[type='reset']").click(function() {
            $(".formLibox .time .selectMenu p span").text("00 : 00");
            $(".formLibox .time .selectMenu p i").text("00 : 00");
            $(".formLibox .time .menuList ul li").removeClass("checked");
        });
    },

    // 自動擷取目前的會議室名子
    getRoomName: function() {
        var i = $(".nav .menuList .selectMenu p b").text()
        var span = $(".nav .menuList .selectMenu p span").text()

        $(".formLibox .room .menuList .selectMenu p i").text(i);
        $(".formLibox .room .menuList .selectMenu p span").text(span);

    },

    all: function() {
        form.close_click();
        form.timeDropdownList();
        form.roomDropdownList();
        form.dateDropper();
        form.resetBtn();
        form.getRoomName();
    }
}


var inf = {
    open: function() {
        $(".infLibox").addClass("open");
    },
    close_click: function() {
        $(".infLibox .liboxClose").click(function() {
            inf.close();
        });
    },
    close: function() {
        $(".infLibox").removeClass("open");
        $(".infLibox").addClass("close");
        setTimeout(function() {
            $(".infLibox").remove();
        }, 1000);
    },
    all: function() {
        inf.close_click();
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
$(document).ready(function() {
    // nocopy()

    // 蘋果回上頁debug
    appleDebug();
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
        _slick.homeSlick();
        home.all();
    }

    /*產品product 啟動的JS*/
    if (page == "product") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.productW();
        /* b-lazy */
        _Blazy.productW();
        /*slick*/
        _slick.productSlick();
        // 啟動的JS
        product.all();
        // 在手機板會變下拉式選單的menulsit
        titleDropdownList();
    }

    /*新聞news 啟動的JS*/
    if (page == "news") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.newsW();
        /* b-lazy */
        _Blazy.newsW();
        /*slick*/
        _slick.newsSlick();
        // 啟動的JS
        news.all();
        // 在手機板會變下拉式選單的menulsit
        titleDropdownList();
        // 偽燈箱
        fakeLibox.checkIsfromFakeLibox();
    }

    /*服務據點storehold 啟動的JS*/
    if (page == "storehold") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        // _waypoint.storeholdW();
        /* b-lazy */
        // _Blazy.storeholdW();
        /*slick*/
        // _slick.storeholdSlick();
        // 啟動的JS
        storehold.all();
        // 在手機板會變下拉式選單的menulsit
        titleDropdownList();
    }

    /*客戶服務service 啟動的JS*/
    if (page == "service") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.serviceW();
        /* b-lazy */
        _Blazy.serviceW();
        /*slick*/
        // _slick.serviceSlick();
        // 在手機板會變下拉式選單的menulsit
        titleDropdownList();
        // 啟動的JS
        service.all();
    }

    /*客戶服務applications 啟動的JS*/
    if (page == "applications") {
        /*ajax header*/
        header();
        /*ajax footer*/
        footer();
        /*waypoint*/
        _waypoint.applicationsW();
        /* b-lazy */
        _Blazy.applicationsW();
        /*slick*/
        _slick.applicationsSlick();
        // 啟動的JS
        applications.all();
        // 在手機板會變下拉式選單的menulsit
        titleDropdownList();
        $(window).resize(function() {
            applications.slickArrowHide();
        });
    }

    /*關於東元about 啟動的JS*/
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
        _slick.aboutSlick();
        // 啟動的JS
        about.all();
    }

    /*員工專區employee 啟動的JS*/
    if (page == "employee") {
        /*waypoint*/
        // _waypoint.aboutW();
        /* b-lazy */
        // _Blazy.aboutW();
        /*slick*/
        // slick('aboutSlick');
        // 啟動的JS
        employee.all();
    }
});


// 新增

/***************************************************************************************************************************/
/***************************************************************************************************************************/
///////////////////////////////////////
//             storehold             //
///////////////////////////////////////

var storehold = {
    areaClick: function() {
        $(".worldMap .box .link").click(function() {
            var mapHeight = $("main article:first-child").height()
            var mapPadding = parseInt($("main article:first-child").css("padding-top"))
            var total = mapHeight + mapPadding + 1
            $("html,body").animate({
                scrollTop: total
            }, 1000, "easeOutCubic");
            $(this).closest(".box").addClass("checked");
            $(this).closest(".box").siblings().removeClass("checked");
            var i = $(this).closest(".box").index()
            var listLi = document.querySelectorAll(".content ._title .menulist ul li")
            $(listLi[i]).addClass("checked");
            $(listLi[i]).siblings().removeClass("checked");
        });
    },

    delay: function() {
        $(".worldMap .box").each(function() {
            var i = $(this).index() - 1
            var spanDelay = i * 0.15 + .5 + "s"
            var pDelay = i * 0.15 + 1 + "s"
            $(this).find("._img .link span").css("animation-delay", spanDelay);
            $(this).find("._img .link p").css("animation-delay", pDelay);
        });
    },

    Blazy: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },

    menulistClcik: function() {
        $(".content ._title .menulist ul li").click(function() {
            var i = $(this).index() - 1
            var area = document.querySelectorAll(".worldMap .box")
            $(area[i]).addClass("checked");
            $(area[i]).siblings().removeClass("checked");
        });
    },

    all: function() {
        storehold.areaClick();
        storehold.delay();
        storehold.Blazy();
        storehold.menulistClcik();
    }
}


/***************************************************************************************************************************/

/*2018/2/2 新增*/

/***************************************************************************************************************************/
///////////////////////////////////////
//             about                 //
///////////////////////////////////////

var about = {

    qualityClick: function() {
        $(".quality ul li").click(function() {
            $(this).find("._text p").slideToggle(800);
            $(this).siblings().find("._text p").slideUp(800);

            $(this).find("._text h3").toggleClass("open");
            $(this).siblings().find("._text h3").removeClass("open");
        });
    },

    // 品質認證延遲動畫
    dealy: function() {
        $(".quality ul li").each(function() {
            var i = $(this).index()
            var time = i * .25 + .3 + "s"
            $(this).css("animation-delay", time);
        });
        $(".row ._text ul li").each(function() {
            var i = $(this).index()
            var time = i * .2 + .6 + "s"
            if ($(window).width() < 901) {
                var time = i * .2 + .4 + "s"
            }
            $(this).css("animation-delay", time);
        });
    },

    selectUnit: function() {
        $(".select_nav ul li").click(function() {
            var $this = $(this)
            $this.addClass("active");
            $this.siblings().removeClass("active");
            var contentArea = document.querySelectorAll(".content section")
            var i = $this.index();
            $(contentArea[i]).addClass("active");
            $(contentArea[i]).siblings().removeClass("active");
            if ($(window).width() < 901) {
                $this.parent().parent().find(".selectInf").removeClass("open");
                $this.parent().slideUp(0);
                $this.parent().parent().find(".selectInf p").text($this.find("p").text());
                $this.parent().parent().find(".selectInf b").text($this.find("b").text());
            }
            // 啟動blazy
            about.newBlazy();
        });

        if ($(window).width() < 901) {
            $(".select_nav .selectInf").click(function() {
                var ele = $(this)
                $(ele).toggleClass("open");
                // 開啟選單
                $(ele).parent().find("ul").slideToggle(500);
                // 點選其他物件 關閉選單
                $(document).click(function(e) {
                    if ($(ele).parent().has(e.target).length === 0) {
                        $(ele).parent().find("ul").slideUp(500);
                        $(ele).removeClass("open");
                    }
                });
            });
        }
    },

    selectHistory: function() {
        $(".history_nav div").click(function() {
            $(this).addClass("checked");
            $(this).siblings().removeClass("checked");

            var years = document.querySelectorAll(".history_content .years")
            var i = $(this).index();

            $(years[i]).addClass("active");
            $(years[i]).siblings().removeClass("active");
        });
    },

    historyDelay: function() {
        $(".history_content .year ul li").each(function() {
            var i = $(this).index()

            var delayTime = i * .2 + .2 + "s"

            $(this).css("animation-delay", delayTime)
        });
    },

    newBlazy: function() {
        var bLazy = new Blazy({
            offset: 50,
            success: function(ele) {
                $(ele).closest("li").addClass("show");
                $(ele).closest(".left").addClass("show");
                $(ele).closest(".right").addClass("show");
                $(ele).closest(".center").addClass("show");
                Waypoint.refreshAll();
            }
        });
    },

    waypoint: function() {

        $('.introduction ._text').each(function(index, element) {
            $(element).addClass("hide");
            $(element).waypoint({
                handler: function() {
                    $(element).addClass('show');
                    $(element).removeClass("hide");
                },
                offset: '60%'
            });
        });

        $('.introduction_content .threeS ._img ul li').each(function(index, element) {
            $(element).addClass("hide");
            $(element).waypoint({
                handler: function() {
                    $(element).addClass('show');
                    $(element).removeClass("hide");
                },
                offset: '50%'
            });
        });

        $(".introduction ._title").addClass("hide");
        $('.introduction ._title').waypoint(function() {
            $(".introduction ._title").removeClass("hide");
            $(".introduction ._title").addClass("show");
        }, { offset: '90%' });
    },

    openAwardsLibox:function () {
        $(".awards_content ul li").click(function() {
            $.ajax({
                url: '../../views/about/awardsLibox.html',
            })
            .done(function(data) {
                $("body").append("<article class='awardsLibox'></article>");
                awardsLiboxJs.open();
                $(".awardsLibox").html(data);
                awardsLiboxJs.all();
            });
        });
    },

    all: function() {
        if ($("body").hasClass("index")) {
            about.selectUnit();
            about.selectHistory();
            about.historyDelay();
            about.waypoint();
            about.newBlazy();
            // 我們的榮耀燈箱
            about.openAwardsLibox();
        }
        if ($("body").hasClass("capability")) {
            about.qualityClick();
            about.dealy();
        }
    }
}



var awardsLiboxJs = {
    open: function() {
        $("body").css("overflow-y", "hidden");
        $(".awardsLibox").addClass("open");
    },
    close_click: function() {
        $(".liboxClose").click(function() {
            awardsLiboxJs.close();
        });
    },
    close: function() {
        $(".awardsLibox").removeClass("open");
        $(".awardsLibox").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".awardsLibox").remove();
        }, 1200);
    },
    // 點其他地方會關閉
    clickOtherClose: function() {
        $('.awardsLibox').click(function(e) {
            if (e.target == this) {
                awardsLiboxJs.close();
            }
        });
    },
    scrollbar: function() {
        if ($(window).width() < 1261) {
            $(".awardsLibox .liboxContent").mCustomScrollbar({
                scrollInertia: 500,
                scrollEasing: "easeOut",
            });
        }
    },
    all: function() {
        awardsLiboxJs.close_click();
        awardsLiboxJs.clickOtherClose();
        awardsLiboxJs.scrollbar();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

// 2018/3/1 新增

var menu = {
    open_click: function() {
        $(".openMenu").click(function() {
            menu.open();
        });
    },
    open: function() {
        $(".menu_box").addClass("open");
        $("body").css("overflow-y", "hidden");
        $(".openMenu").addClass("close");
    },
    close_click: function() {
        $(".menuClose").click(function() {
            menu.close();
        });
    },
    close: function() {
        $(".openMenu").removeClass("close");
        $(".menu_box").removeClass("open");
        $(".menu_box").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".menu_box").removeClass("close");
        }, 1200)
    },
    scroll: function() {
        $(".menu_box").niceScroll({
            cursorborder: 'none',
            mousescrollstep: 20,
            scrollspeed: 30,
            cursorcolor: '#ccc',
        });
    },
    delay: function() {
        $(".menu_unit ul li").each(function() {
            var i = $(this).index()
            var x = i * 0.1 + 0.6
            var delayTime = x + "s"
            $(this).css("animation-delay", delayTime);
        });
    },
    all: function() {
        menu.open_click();
        menu.close_click();
        menu.scroll();
        menu.delay();
    }
}

var headerHover = {
    hover: function() {
        var hover_area = document.querySelectorAll(".hover_content>div")
        $(".hdLinkList ul li").each(function() {
            $this = $(this)
            var i = $this.index()
            $this.mouseover(function() {
                $(hover_area[i]).addClass("active");
                $(hover_area[i]).siblings().removeClass("active");
                $(".header").addClass("white");
            });
            $("main,footer").mouseover(function(x) {
                if ($(hover_area[i]).hasClass("active")) {
                    $(hover_area[i]).removeClass("active");
                    $(".header").removeClass("white");
                    $(hover_area[i]).addClass("out");
                    setTimeout(function() {
                        $(hover_area[i]).removeClass("out");
                    }, 300);
                }
            });
            $(document).click(function() {
                if ($(hover_area[i]).hasClass("active")) {
                    $(hover_area[i]).removeClass("active");
                    $(hover_area[i]).addClass("out");
                    setTimeout(function() {
                        $(hover_area[i]).removeClass("out");
                    }, 300);
                }
            });

        });
    },
    scroll: function() {
        $(".productList_bg").mCustomScrollbar({
            axis: "y",
            scrollInertia: 400,
            autoHideScrollbar: true,
            mouseWheel: { preventDefault: true },
        });
    },
    all: function() {
        headerHover.hover();
        headerHover.scroll();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////////////////
//               鎖定ios scroll              ///
///////////////////////////////////////////////
// Use in combination with:
// html, body {overflow: hidden;}
//
// and: -webkit-overflow-scrolling: touch; for the element that should scroll.
//
// disableBodyScroll(true, '.i-can-scroll');
var disableBodyScroll = (function() {
    /**
     * Private variables
     */
    var _selector = false,
        _element = false,
        _clientY;
    /**
     * Polyfills for Element.matches and Element.closest
     */
    if (!Element.prototype.matches)
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    if (!Element.prototype.closest)
        Element.prototype.closest = function(s) {
            var ancestor = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (ancestor.matches(s)) return ancestor;
                ancestor = ancestor.parentElement;
            } while (ancestor !== null);
            return el;
        };
    /**
     * Prevent default unless within _selector
     * 
     * @param  event object event
     * @return void
     */
    var preventBodyScroll = function(event) {
        if (false === _element || !event.target.closest(_selector)) {
            event.preventDefault();
        }
    };
    /**
     * Cache the clientY co-ordinates for
     * comparison
     * 
     * @param  event object event
     * @return void
     */
    var captureClientY = function(event) {
        // only respond to a single touch
        if (event.targetTouches.length === 1) {
            _clientY = event.targetTouches[0].clientY;
        }
    };
    /**
     * Detect whether the element is at the top
     * or the bottom of their scroll and prevent
     * the user from scrolling beyond
     * 
     * @param  event object event
     * @return void
     */
    var preventOverscroll = function(event) {
        // only respond to a single touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _clientY;
        // The element at the top of its scroll,
        // and the user scrolls down
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // The element at the bottom of its scroll,
        // and the user scrolls up
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        if ((_element.scrollHeight - _element.scrollTop <= _element.clientHeight) && clientY < 0) {
            event.preventDefault();
        }
    };

    /**
     * Disable body scroll. Scrolling with the selector is
     * allowed if a selector is porvided.
     * 
     * @param  boolean allow
     * @param  string selector Selector to element to change scroll permission
     * @return void
     */
    return function(allow, selector) {
        if (typeof selector !== "undefined") {
            _selector = selector;
            _element = document.querySelector(selector);
        }
        if (true === allow) {
            if (false !== _element) {
                _element.addEventListener('touchstart', captureClientY, false);
                _element.addEventListener('touchmove', preventOverscroll, false);
            }
            document.body.addEventListener("touchmove", preventBodyScroll, false);
        } else {
            if (false !== _element) {
                _element.removeEventListener('touchstart', captureClientY, false);
                _element.removeEventListener('touchmove', preventOverscroll, false);
            }
            document.body.removeEventListener("touchmove", preventBodyScroll, false);
        }
    };
}());
/***************************************************************************************************************************/