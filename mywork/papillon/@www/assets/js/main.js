/**********************************************************************************************************************/

var jqbody = $('body');

var rwd = window.screen.width == $(window).width();

var body = {

    scroll: function() {

        if (rwd == false) {

            jqbody.css({ 'overflow': '', 'padding-right': '' });

            // jqbody.find('header').css({ 'overflow': '', 'padding-right': '', })

        } else { jqbody.css({ 'overflow': '', 'padding-right': '' }); }

    },

    hidden: function() {

        if (rwd == false) {

            jqbody.css({ 'overflow': 'hidden', 'padding-right': '17px', });

            // jqbody.find('header').css({ 'overflow': 'hidden', 'padding-right': '17px', })

        } else { jqbody.css({ 'overflow': 'hidden', }); }

    },

    half: function() {

        if (rwd == false) { setTimeout(function timeout() { jqbody.css({ 'overflow': 'hidden' }); }, 1000); }

    }

}

/***************************************************************************************************************************/


/***************************************************************************************************************************/
/////////////////////////////////////////////////
//        背景     小裝置小圖  大裝置大圖        //
/////////////////////////////////////////////////
/*首頁 */
function xsBGLoad() {

    var winWidth = $(window).width();

    if (winWidth < 641) {

        $('.xsBGshow').each(function() {
            var smallsrc = $(this).data('small');
            $(this).css('background-image', 'url("' + smallsrc + '")');
        });

    } else {

        $('.xsBGshow').each(function() {
            var largesrc = $(this).data('large');
            $(this).css('background-image', 'url("' + largesrc + '")');
        });

    }

}
/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////////////////
//           首頁 banner 文字顏色變換         ///
///////////////////////////////////////////////

// 判斷banner文字要黑要白
/*首頁*/

function judgeColor() {

    darkorlight();

    $('.homeTopBannerSlickFrame .slick').on('afterChange', function(slick, currentSlide) {
        darkorlight();
    });

}


function darkorlight() {

    if ($('.dark.slick-active').length > 0) {

        $('.homeTopBannerSlickFrame .content').removeClass('white');
        $('.homeTopBannerSlickFrame .content').addClass('black');

    } else {

        $('.homeTopBannerSlickFrame .content').removeClass('black');
        $('.homeTopBannerSlickFrame .content').addClass('white');

    }

}
/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//        Back to Top             //
////////////////////////////////////

/*回到最上*/
/*footer*/

function BackToTop() {

    $('.goTop').click(function(event) {

        event.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, 1000);

    });

}
/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//           Menu Sticky          //
////////////////////////////////////

/*nav.stick 黏在上*/
/*每個單元*/

function navSticky() {

    var navSticky_height = $('header .jq-header').height(),
        navSticky = $('.jq-header'),
        scroll = $(window).scrollTop();

    if (jqbody.hasClass('home') == false) {

        normal_sticky(navSticky_height, navSticky, scroll);

    } else {

        home_sticky(navSticky_height, navSticky, scroll);

    }

}

/*一般單元header scroll方式*/
function normal_sticky(navSticky_height, navSticky, scroll) {

    var lastScrollTop = 0;

    $(window).scroll(function(event) {

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            // downscroll code

            navSticky.removeClass('fixed getIn');

        } else {
            // upscroll code

            if (st < 100) {

                navSticky.removeClass('fixed getIn');

            } else {

                navSticky.addClass('fixed');

                setTimeout(function() {

                    navSticky.addClass('getIn');

                }, 200);

            }

        }

        lastScrollTop = st;

    });

}

/*首頁單元header scroll方式*/
function home_sticky(navSticky_height, navSticky, scroll) {

    var home_banner_height = $('.homeTopBannerSlickFrame').outerHeight() + 100;

    var screen_height = $(window).height();

    var lastScrollTop = 0;

    $(window).scroll(function(event) {

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            // downscroll code

            navSticky.removeClass('fixed getIn');

        } else {
            // upscroll code

            if (st + screen_height > home_banner_height) {

                navSticky.addClass('fixed');

                setTimeout(function() {

                    navSticky.addClass('getIn');

                }, 200);

            } else {

                navSticky.removeClass('fixed getIn');

            }



        }

        lastScrollTop = st;

    });

}

/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//           hidden_menu          //
////////////////////////////////////
/*打開隱藏選單*/
/*(ALL)*/
function hidden_menu_func() {
    var open_menu_btn = $('.hamburgerFrame'),
        hidden_menu = $('.hidden_menu'),
        close_menu_btn = $('.hidden_menu .moreClose a'),
        hidden_slick = $('.hidden_menu_img ul');


    /*打開隱藏選單*/
    open_menu_btn.on('click', function() {

        /*鎖定scroll bar*/
        body.hidden();

        /** */
        if ($(window).height() <= 768) {

            $('.hidden_menu_nav').niceScroll();

        }

        /*顯示隱藏選單*/
        hidden_menu.addClass('show');

        /*執行隱藏選單動畫*/
        if (hidden_menu.hasClass('show') == true) {

            hidden_menu.addClass('animate');

        }

    });

    /*關閉隱藏選單*/
    close_menu_btn.on('click', function() {

        /*移除隱藏選單動畫*/
        hidden_menu.removeClass('animate');

        /*關閉隱藏選單*/
        if (hidden_menu.hasClass('show') == true) {

            hidden_menu.removeClass('show');

            /*解鎖scroll bar*/
            body.scroll();

        }

    });
}



/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//          logInYet              //
////////////////////////////////////

function logInYet() {


    $.ajax({
            url: '../../views/layout/logInYet.html',
        })

        .done(function(data) {

            $("body").append("<article class='logInYet'><div class='logInYetBox'></div></article>");

            $(".logInYetBox").html(data);
            logInYetJs.all();
        })

}

var logInYetJs = {

    open: function() {
        $("body").css("overflow-y", "hidden");
    },

    close_click: function() {
        $(".logInYet .close").click(function() {
            logInYetJs.close();
        });
    },

    close: function() {
        $(".logInYet").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $(".logInYet").remove();
        }, 1400);
    },

    /*點選其他地方也會關閉*/
    clickOtherClose: function() {

        $('.logInYet').click(function(e) {
            if (e.target == this) {
                logInYetJs.close();
            }
        });
    },

    all: function() {
        logInYetJs.open();
        logInYetJs.close_click();
        logInYetJs.clickOtherClose();
    }
}



/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//              cart              //
////////////////////////////////////
function cart() {

    var open_btn = $('.header .gift_switch'),
        close_btn = $('header .close_btn'),
        delete_btn = $('.cart .delete_btn'),
        cart_frame = $('.cart'),
        list_frame = $('.cart .frame');

    var rwd = window.screen.width == $(window).width();
    var body = $('body'),
        header = $('header');

    //打開
    open_btn.on('click', function() {

        if (cart_frame.hasClass('open') == false) {

            cart_frame.addClass('open');

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.cart');


            if (rwd == false) {

                body.css({
                    'overflow': 'hidden',
                });

                header.css({
                    'padding-right': '17px',
                });

            } else {

                body.css({
                    'overflow': 'hidden',
                });

            }

        }

        if ($('#home').length > 0) {

            body.getNiceScroll().remove();

            if (rwd == false) {

                body.css({
                    'overflow': 'hidden',
                });

            } else {

                body.css({
                    'overflow': 'hidden',
                });

            }

        }

    });

    //關閉
    close_btn.on('click', function() {

        if (cart_frame.hasClass('open') == true) {

            cart_frame.removeClass('open').addClass('close');

            //解開 ios body scrollbar
            disableBodyScroll(false, '.cart');

            setTimeout(function() {

                cart_frame.removeClass('close');

                body.css({
                    'overflow': '',
                    'padding-right': '',
                });

                header.css({
                    'padding-right': '0px',
                });


            }, 1000);

        }

        if ($('#home').length > 0) {

            setTimeout(function() {

                body.niceScroll({ horizrailenabled: false });

            }, 1000);

        }

    });

    //點旁邊關閉
    cart_frame.on('click', function(e) {

        if (e.target !== this) {

            return;

        } else {

            if (cart_frame.hasClass('open') == true) {

                cart_frame.removeClass('open').addClass('close');

                //鎖住 ios body scrollbar
                disableBodyScroll(false, '.cart');

                setTimeout(function() {

                    cart_frame.removeClass('close');

                    body.css({
                        'overflow': '',
                        'padding-right': '',
                    });

                    header.css({
                        'padding-right': '0px',
                    });

                }, 1000);

            }

            if ($('#home').length > 0) {

                setTimeout(function() {

                    body.niceScroll({ horizrailenabled: false });

                }, 1000);

            }

        }

    });

    //scroll bar
    // $('.cart').niceScroll({ horizrailenabled: false });


    //刪除
    delete_btn.on('click', function() {

        var a = $(this).closest('.list');

        a.addClass('delete_item');

        setTimeout(function() {

            a.remove();

        }, 1500);

    });

}
/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//            waypoint            //
////////////////////////////////////

var _waypoint = {

    homeW: function() {

        if ($('body').hasClass('home') == true) {

            //COLLECTION
            $('.collection > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '90%' });

            });

            //Featured
            $('.featured > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '90%' });

            });
            $('.featured_frame > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '80%' });

            });

            //news
            $('.news > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '90%' });

            });

            //life
            $('.life ._top').waypoint(function() {

                $('.life ._top').addClass('show');

            }, { offset: '80%' });

            $('.life .box_1').waypoint(function() {

                $('.life .box_1').addClass('show');

            }, { offset: '80%' });

            //WITNESS
            var countup_check = false;
            $('.witness > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                    if ($('.witness .watch_number').hasClass('show') == true && countup_check == false) {

                        home.countup();

                        countup_check = true;

                    }

                }, { offset: '80%' });

            });

            //story
            $('.story > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '80%' });

            });


            //papillon_video(寫在youtube載入後執行動畫)

            //slogan_section
            $('.slogan_section > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '80%' });

            });



        }

    },

    productW: function() {

        // 產品資訊內頁
        if ($("body").hasClass("productInf")) {
            $(".productInf ._text_bg").waypoint(function() {
                $(".productInf ._text_bg").addClass("show");
            }, { offset: "50%" });


            // 手機板才啟動
            if ($(window).width() < 901) {
                $('.type1_box>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '80%' });
                });

                $('.type2_box>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '60%' });
                });
            }

            if ($(window).width() < 701) {
                $('.product_intro .imgs>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '60%' });
                });
            }


            $('.mayLike>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '60%' });
            });


            $('.praise>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '60%' });
            });
        }


        // 產品系列內頁
        if ($("body").hasClass("productSeries")) {
            $('.prducts ul>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '40%' });
            });
            if ($(window).width() < 1025) {
                $('.prducts ul>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '50%' });
                });
            }

            if ($(window).width() < 701) {
                $('.prducts ul>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '40%' });
                });
            }
        }

    },

    newsW: function() {

        // 主頁
        if ($("body").hasClass("index")) {
            $('.grid>*').each(function(index, element) {
                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '60%' });
            });
        }

        // 最新消息內頁
        if ($("body").hasClass("detail")) {

            // 電腦板才顯示
            if ($(window).width() > 1025) {
                $(".content>p").waypoint(function() {
                    $(".content>p").addClass("show");
                }, { offset: "80%" });
            }


            $(".type1 ._text").waypoint(function() {
                $(".type1 ._text").addClass("show");
            }, { offset: "80%" });

            $(".type2 ._text").waypoint(function() {
                $(".type2 ._text").addClass("show");
            }, { offset: "80%" });

            $(".type3 ._text").waypoint(function() {
                $(".type3 ._text").addClass("show");
            }, { offset: "80%" });

            $(".type4 ._text").waypoint(function() {
                $(".type4 ._text").addClass("show");
            }, { offset: "80%" });

            $(".type5 ._text").waypoint(function() {
                $(".type5 ._text").addClass("show");
            }, { offset: "80%" });
        }
    },

    witnessW: function() {
        // 幸福好評主頁
        if ($("body").hasClass("index")) {
            $('.couples ul>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });
        }

        // 幸福好評內頁
        if ($("body").hasClass("detail")) {

            $("._text").waypoint(function() {
                $("._text").addClass("show");
            }, { offset: "80%" });

            $(".location").waypoint(function() {
                $(".location").addClass("show");
            }, { offset: "80%" });

            $(".product").waypoint(function() {
                $(".product").addClass("show");
            }, { offset: "80%" });
        }
    },

    reservationW: function() {

        if ($(window).width() < 1025) {
            $("._input").waypoint(function() {
                $("._input").addClass("show");
            }, { offset: "39%" });


            $("._button").waypoint(function() {
                $("._button").addClass("show");
            }, { offset: "90%" });
        }
    },

    aboutW: function() {

        // 主頁
        if ($("body").hasClass("index")) {

            if ($(window).width() < 701) {
                $('.row>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });
            }
        }

        // story內頁
        if ($("body").hasClass("story")) {
            $('.origin>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            $('.protector>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            $('._sotry>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            $('.bookNow .logo').waypoint(function() {
                $('.bookNow .logo').addClass('show');
            }, { offset: '70%' });

            $('.bookNow .countup').waypoint(function() {
                $('.bookNow .countup').addClass('show');
                about.countup();
            }, { offset: '70%' });

            $('.bookNow ._btn').waypoint(function() {
                $('.bookNow ._btn').addClass('show');
            }, { offset: '80%' });
        }

        // design內頁
        if ($("body").hasClass("design")) {

            if ($(window).width() > 900) {
                $('.content_boxs>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '50%' });
                });
            }

            if ($(window).width() < 901) {
                $('.content_box:nth-child(1)>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });

                $('.content_box:nth-child(2)>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });

                $('.content_box:nth-child(3)>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });
            }

            $('.designer').waypoint(function() {
                $('.designer').addClass('show');
            }, { offset: '80%' });

            $('.design ._slick').waypoint(function() {
                $('.design ._slick').addClass('show');

            }, { offset: '90%' });
        }

        // service內頁
        if ($("body").hasClass("service")) {

            if ($(window).width() > 700) {
                $('.service_content>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });
            }

            if ($(window).width() < 701) {
                $('.content_box>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });
            }
        }


        // charity內頁
        if ($("body").hasClass("quality")) {

            // 4c
            $('.fourCs>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            // 克拉carat
            if ($(window).width() > 900) {
                $('.carat>*').each(function(index, element) {
                    $(element).waypoint(function() {
                        $(element).addClass('show');
                    }, { offset: '70%' });
                });
            }
            if ($(window).width() < 901) {
                $('.carat ._text').waypoint(function() {
                    $('.carat ._text').addClass('show');
                }, { offset: '70%' });
            }

            // 顏色color
            $('.color>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            // 淨度 CLARITY
            $('.clarityAndCut .box:nth-child(2)>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '70%' });
            });

            // 車工 CUT
            $('.clarityAndCut .box:nth-child(3) ._text').waypoint(function() {
                $('.clarityAndCut .box:nth-child(3) ._text').addClass('show');
            }, { offset: '70%' });


            // 完美車工 Perfect Cut
            $('.clarityAndCut .box:nth-child(4)>*').each(function(index, element) {
                $(element).waypoint(function() {
                    $(element).addClass('show');
                }, { offset: '80%' });
            });

            // 國際證書
            $('.certificate ._text').waypoint(function() {
                $('.certificate ._text').addClass('show');
            }, { offset: '70%' });

        }




        // charity內頁
        if ($("body").hasClass("charity")) {

            $('.box1').waypoint(function() {
                $('.box1').addClass('show');
            }, { offset: '60%' });

            $('.box2 img').waypoint(function() {
                $('.box2 img').addClass('show');
            }, { offset: '60%' });

            $('.box2 p').waypoint(function() {
                $('.box2 p').addClass('show');
            }, { offset: '80%' });
        }
    }
}





/***************************************************************************************************************************/
/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////

var _Blazy = {

    homeW: function() {

        // 產品主頁
        if ($("body").hasClass("home")) {

            var body = $("body");

            var bLazy = new Blazy({
                offset: 100,
                success: function(ele) {
                    // $(ele).addClass("show");

                    body.getNiceScroll().resize();
                }
            });

        }

    },

    productW: function() {

        // 產品主頁
        if ($("body").hasClass("index")) {
            var bLazy = new Blazy({
                offset: 1,
                success: function(ele) {
                    $(ele).parent().parent().parent().addClass("show");
                }
            });
        }

        // 產品系列內頁
        if ($("body").hasClass("productSeries")) {
            var bLazy = new Blazy({
                offset: 100,
            });
        }

        // 產品資訊內頁
        if ($("body").hasClass("productInf")) {
            // 電腦版才啟動
            if ($(window).width() > 900) {
                var bLazy = new Blazy({
                    offset: 300,
                    success: function(ele) {
                        $(ele).parent().parent().find("div").addClass("show");
                        $(ele).parent().parent().parent().find("div").addClass("show");
                    }
                });
            }

            // 手機板才啟動
            if ($(window).width() < 901) {
                var bLazy = new Blazy({
                    offset: 800,
                });
            }
        }
    },

    newsW: function() {

        // 最新消息內頁
        if ($("body").hasClass("detail")) {
            var bLazy = new Blazy({
                offset: 1,
                success: function(ele) {
                    $(ele).parent().parent().addClass("show");
                    Waypoint.refreshAll();
                }
            });
        }
    },

    witnessW: function() {
        // 幸福好評主頁
        if ($("body").hasClass("index")) {
            var bLazy = new Blazy({
                offset: 100,
                success: function(ele) {
                    Waypoint.refreshAll();
                }
            });
        }

        // 幸福好評內頁
        if ($("body").hasClass("detail")) {
            var bLazy = new Blazy({
                offset: 1,
                success: function(ele) {
                    $(ele).parent().addClass("show");
                }

            });
        }
    },

    reservationW: function() {
        var bLazy = new Blazy({
            offset: 1,
            success: function(ele) {
                $(ele).parent().addClass("show");
                Waypoint.refreshAll();
            }

        });
    },

    aboutW: function() {

        // 主頁
        if ($("body").hasClass("index")) {

            var bLazy = new Blazy({
                offset: 1,
                success: function(ele) {
                    $(ele).parent().parent().find(".row_img").addClass("show");
                    Waypoint.refreshAll();
                    // 螢幕寬度700px以上
                    if ($(window).width() > 700) {
                        $(ele).parent().parent().find(".row_text").addClass("show");
                    }
                }
            });
        }


        // story內頁的
        if ($("body").hasClass("story")) {

            var bLazy = new Blazy({
                offset: 100,
                success: function(ele) {
                    Waypoint.refreshAll();
                }
            });
        }


        // quality內頁的
        if ($("body").hasClass("quality")) {

            var bLazy = new Blazy({
                offset: 1,
                success: function(ele) {
                    $(ele).parent().addClass("show");
                    Waypoint.refreshAll();
                }
            });
        }
    }
}

/***************************************************************************************************************************/


/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////

function slick(o) {
    var slick = {
        homeSlick: function() {

            var collection_slick = $('.collection .slick'),
                news_slick = $('.news .slick'),
                witness_slick = $('.witness .slick');

            if (collection_slick.length > 0) {

                collection_slick.slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 500,
                    // arrows: true,
                    appendArrows: $('.collection .home_ar'),
                    prevArrow: $('.collection .home_arL'),
                    nextArrow: $('.collection .home_arR'),
                    responsive: [{
                            breakpoint: 1355,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 1023,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                    ]
                });

            }

            if (news_slick.length > 0) {

                news_slick.slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true,
                    // arrows: true,
                    appendArrows: $('.news .home_ar'),
                    prevArrow: $('.news .home_arL'),
                    nextArrow: $('.news .home_arR'),
                    responsive: [{
                        breakpoint: 1355,
                        settings: {
                            slidesToShow: 1,
                            fade: true,
                            cssEase: 'linear'
                        }
                    }, ]
                });

            }

            if (witness_slick.length > 0) {

                witness_slick.slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500,
                    centerMode: true,
                    centerPadding: '0px',
                    // arrows: true,
                    appendArrows: $('.witness .home_ar'),
                    prevArrow: $('.witness .home_arL'),
                    nextArrow: $('.witness .home_arR'),
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }, ]
                });

            }

        },

        productSlick: function() {


            // 產品資訊內頁
            if ($("body").hasClass("productInf")) {
                // 產品簡略資訊slick
                $('.product_inf ._slick ul').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    lazyLoad: 'ondemand',
                });

                $(".product_inf .icon-slick-arrow-left").click(function() {
                    $('.product_inf ._slick ul').slick("getSlick").slickPrev();
                });

                $(".product_inf .icon-slick-arrow-right").click(function() {
                    $('.product_inf ._slick ul').slick("getSlick").slickNext();
                });

                // 顯示頁數
                $('.product_inf ._slick ul').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                    var i = $(".product_inf ._slick ul .slick-active").prevAll().length;
                    $(".slick_page span:first-child").text(i);
                });




                // 推薦商品 slick
                $('.mayLike ._slick ul').slick({
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    speed: 500,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    responsive: [{
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }

                        }
                    ]
                });

                $(".mayLike .icon-slick-arrow-left").click(function() {
                    $('.mayLike ._slick ul').slick("getSlick").slickPrev();
                });

                $(".mayLike .icon-slick-arrow-right").click(function() {
                    $('.mayLike ._slick ul').slick("getSlick").slickNext();
                });


                // 幸福好評slick
                $('.praise ._slick ul').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    speed: 500,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    responsive: [{
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }

                        }
                    ]
                });

                $(".praise .icon-slick-arrow-left").click(function() {
                    $('.praise ._slick ul').slick("getSlick").slickPrev();
                });

                $(".praise .icon-slick-arrow-right").click(function() {
                    $('.praise ._slick ul').slick("getSlick").slickNext();
                });
            }
        },

        newsSlick: function() {

            // 分頁
            if ($("body").hasClass("detail")) {

                $('.detail_slick ul').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: false,
                    lazyLoad: 'ondemand',
                    dots: true,
                });

                $(".detail_slick .icon-slick-arrow-left").click(function() {
                    $('.detail_slick ul').slick("getSlick").slickPrev();
                });

                $(".detail_slick .icon-slick-arrow-right").click(function() {
                    $('.detail_slick ul').slick("getSlick").slickNext();
                });
            }
        },

        aboutSlick: function() {
            if ($("body").hasClass("design")) {
                $('.design ._slick ul').slick({
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    speed: 600,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [{
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 901,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 701,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                autoplaySpeed: 4000,
                                speed: 800,
                            }
                        }
                    ]
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

// slick();
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

        .done(function(data) {

            $("header").html(data);

            load.hd();


            active_lbox();
        })

}


/*---------------------------------------------------------------------------------------------------*/


// footer
function footer() {

    $.ajax({
            url: '../../views/layout/footer.html',
        })

        .done(function(data) {

            $("footer").html(data);

            load.ft();


            active_lbox();
        })

}


/*---------------------------------------------------------------------------------------------------*/
/*lightbox啟動按鈕綁定*/
var lbox_checked = false;

function active_lbox() {

    var lbox_switch = $('.lbox_switch');


    lbox_switch.on('click', function() {

        if (lbox_checked == false) {

            //燈箱開關被按下時 抓取data-lbox做為目前要開啟的燈箱html名稱
            //例：隱私權(privacy)，html的開關按鈕上就必須有 data-blox="privacy" 用以辨別欲開啟的燈箱
            var a = $(this).attr('data-lbox');

            lbox(a);

            lbox_checked = true;

        }

    });

}

/*啟動lightbox*/
function lbox(lbox_page) {

    $.ajax({
            url: '../../views/layout/' + lbox_page + '.html',
        })

        .done(function(data) {

            $("body").append("<article id= " + lbox_page + " class='lightBoxFrame'><div class='lbox lbox1'></div></article>");

            $(".lbox").html(data);


            load.lbox(lbox_page);

        })

}
/*---------------------------------------------------------------------------------------------------*/



/*ajax 事件綁定function*/
var load = {

    /*header*/
    hd: function() {

        /*cart*/
        cart();

        /*menu*/
        menu.all();

        /*搜尋視窗search_frame*/
        search_frame();

        /*header_nav 產品NAV*/
        header_nav();

    },

    /*footer*/
    ft: function() {

        /*回到最上*/
        BackToTop();

        /*小紅旗*/
        red_tag();

    },

    /*lbox*/
    lbox: function(lbox_page) {

        var loaded_page = $('.' + lbox_page + '');

        //privacy JS
        if (loaded_page.length > 0 && lbox_page == 'privacy') {

            //
            $(".privacy_workbox").scroll();


            var page_id = $('#' + lbox_page);

            var window_width = window.screen.width; //載入螢幕寬度


            //lock body scroll_bar
            if (rwd == false) {

                $('body').css({
                    'overflow': 'hidden',
                    'padding-right': '',
                });
                $('header').css({
                    'padding-right': '17px',
                });

            } else {

                $('body').css({
                    'overflow': 'hidden',
                });

            }

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.privacy_frame');

            // //綁custom scroll_bar
            // $('.privacy_workbox').niceScroll({ horizrailenabled: false });


            // //resize 重置scroll_bar 因為動畫影響高度關係，所以等一秒動畫結束才重綁scroll_bar
            // $(window).resize(function() {

            //     var resize_window_width = window.screen.width;

            //     if (resize_window_width != window_width) {

            //         $('.privacy_workbox').getNiceScroll().remove();

            //         setTimeout(function() {

            //             $('.privacy_workbox').niceScroll({ horizrailenabled: false });

            //         }, 1000);

            //     }

            // });


            //close_btn，並關閉custom scroll_bar
            var close_btn = $('.close_lbox');

            close_btn.on('click', function() {

                page_id.removeClass('open').addClass('close');

                //解鎖 ios body scrollbar
                disableBodyScroll(false, '.privacy_frame');

                setTimeout(function() {

                    page_id.remove();

                    lbox_checked = false;

                    //unlock body scroll_bar
                    $('body').css({
                        'overflow': '',
                        'padding-right': '',
                    });
                    $('header').css({
                        'padding-right': '',
                    });

                }, 1000);

            });


            //點擊旁邊關閉，並關閉custom scroll_bar
            var frame = $('.privacy_frame');

            frame.on('click', function(e) {

                if (e.target !== this) {

                    return;

                } else {

                    if (page_id.hasClass('open') == true) {

                        page_id.removeClass('open').addClass('close');

                        //解鎖 ios body scrollbar
                        disableBodyScroll(false, '.privacy_frame');

                        setTimeout(function() {

                            page_id.remove();

                            lbox_checked = false;

                            //unlock body scroll_bar
                            $('body').css({
                                'overflow': '',
                                'padding-right': '',
                            });
                            $('header').css({
                                'padding-right': '',
                            });

                        }, 1000);

                    }

                }

            });


            //animate
            setTimeout(function() {

                page_id.addClass('open');

            }, 100);

        }
        //product JS
        if (loaded_page.length > 0 && lbox_page == 'product') {

            // console.log('test');

        }

    }

}




/***************************************************************************************************************************/

///////////////////////////////////////
//               _menu               //
///////////////////////////////////////

var menu = {

    open_click: function() {
        $(".menu_switch").click(function() {
            menu.open();
            menu.mCustomScrollbar();
            // 電腦版才啟動
            if ($(window).width() > 1024) {
                menu.slick();
                menu.slickPageCount();
            }
        });
    },

    open: function() {

        $("._menu").addClass("open");
        $("body").css("overflow-y", "hidden");
    },

    close_click: function() {
        $(".menu_close").click(function() {
            menu.close();
        });
    },

    close: function() {
        $("._menu").removeClass("open");
        $("._menu").addClass("close");
        $("body").css("overflow-y", "visible");
        setTimeout(function() {
            $("._menu").removeClass("close");
            // 關閉已開啟的子選單
            $("._menu .menu_content").removeClass("on");
            // $("._menu .child_list").removeClass("on");

            // 選單關閉時同時停止slick避免有bug
            if ($(window).width() > 1024) {
                $('._menu ._slick ul').slick('unslick');
            }
        }, 400);
    },

    mCustomScrollbar: function() {
        $(".main_list").mCustomScrollbar({
            scrollInertia: 300,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true }
        });

        $(".child_list_box").mCustomScrollbar({
            scrollInertia: 300,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true }
        });
    },

    slick: function() {
        $("._menu ._slick ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            // infinite: false,
            autoplaySpeed: 5000,
            lazyLoad: 'ondemand',
            swipe: false,

        });

        // 顯示頁數
        $('._menu ._slick ul').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            var i = $("._menu ._slick ul .slick-active").prevAll().length;
            $("._menu ._slick ._pageCount span:first-child").text(i);
        });

    },

    slickPageCount: function() {
        var ele = document.querySelectorAll("._menu ._slick ul li")

        var eletotalnumb = ele.length - 2

        $("._menu ._slick ._pageCount span:last-child").text(eletotalnumb);

    },

    // 子選單開啟
    childListOpen: function() {
        $("._menu ._product ul li").click(function() {
            if (!$(this).hasClass("alreadyClick")) {
                $("._menu .menu_content").removeClass("chang");
                menu.childListChang();
                $("._menu .menu_content").addClass("on");
                $(this).addClass("alreadyClick");
                $(this).siblings().removeClass("alreadyClick");
                // $("._menu .child_list").addClass("on");
                setTimeout(function() {
                    $("._menu .child_list").css("overflow", "auto");
                }, 800);
            }
        });
    },

    // 子選單關閉
    childListClose: function() {
        $("._menu ._back_main_list").click(function() {
            $("._menu .menu_content").removeClass("on");
        });
    },

    // 選擇其他子選單
    childListChang: function() {
        if ($(window).width() > 1024) {
            if ($(".menu_content").hasClass("on")) {
                $("._menu .menu_content").addClass("chang");
            }
        }
    },

    all: function() {
        menu.open_click();
        menu.close_click();
        menu.childListOpen();

        // 手機板才啟動
        if ($(window).width() < 701) {
            menu.childListClose();
        }
    }
}






/***************************************************************************************************************************/


///////////////////////////////////////
//               product             //
///////////////////////////////////////
var product = {
    // 主頁 瀑布流
    masonry: function() {
        var msnry = new Masonry('.grid', {
            itemSelector: '.grid-item',
            gutter: 70,
        });

        if ($(window).width() < 1264) {
            var msnry = new Masonry('.grid', {
                itemSelector: '.grid-item',
                gutter: 40,
            });
        }

        if ($(window).width() < 700) {
            msnry.destroy();
        }

    },


    // 主頁 手機板時topAd_text的文字顏色更換
    text_color: function() {
        if ($(window).width() < 701) {
            $(".topAd_text").css("color", "#000");
        }
    },

    // 產品資訊內頁  點選探索細節往下滑動到product_intro
    seedetail: function() {

        var product_inf_TotalHeight = $(".product_inf").offset().top + $(".product_inf").height()

        var nextArticleMarginTop = parseInt($("main>*").eq(2).css("margin-top"))

        var totoalHeight = product_inf_TotalHeight + nextArticleMarginTop

        $(".seedetail").click(function() {

            $("html,body").animate({

                scrollTop: totoalHeight - $(".header").height()

            }, 800, 'easeOutCubic');
        });
    },

    // 產品資訊內頁 slick頁數
    slick_count: function() {
        var totalPage = document.querySelectorAll(".product_inf ._slick ul li")

        if (totalPage.length < 2) {
            var totalPageNub = totalPage.length
        } else {
            var totalPageNub = totalPage.length - 2
        }

        $(".slick_page span:last-child").text(totalPageNub);
    },

    // 產品資訊內頁 性別下拉式選單
    gneder: function() {

        if ($(".gender ul li").length == 1) {
            $(".gender .selectMenu b").remove();
        }

        // 性別選項不只一個時啟動
        else {
            $(".selectMenu").click(function() {
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
            $(".gender ul li").click(function() {
                $(".selectMenu").removeClass("open");

                $(this).addClass("checked");

                $(this).siblings().removeClass("checked");

                $(this).parent().slideUp(500);

                $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())
            });
        }

    },


    // 產品系列內頁 下拉式選單
    dropdownMenu: function() {
        $(".selectMenu").click(function() {
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
        $(".menulist ul li").click(function() {
            $(".selectMenu").removeClass("open");

            $(this).addClass("checked");

            $(this).siblings().removeClass("checked");

            $(this).parent().slideUp(500);

            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())
        });

    },

    // 產品系列內頁 產品依序出現
    onebyone: function() {
        var element = document.querySelectorAll(".prducts ul li")

        var time = 0

        // 電腦版才啟動
        if ($(window).width() > 1024) {
            for (var i = 6; i < element.length; i++) {

                var x = i % 5

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

        // 平板螢幕寬度900以上
        if ($(window).width() > 900 && $(window).width() < 1025) {
            for (var i = 16; i < element.length; i++) {

                var x = i % 5

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

        // 平板螢幕寬度700以上
        if ($(window).width() > 700 && $(window).width() < 901) {
            for (var i = 9; i < element.length; i++) {

                var x = i % 4

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

        // 手機螢幕寬度700以下
        if ($(window).width() < 701) {
            for (var i = 3; i < element.length; i++) {

                var x = i % 2

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

    },

    mayLikeArrowHidden: function() {
        var element = document.querySelectorAll(".mayLike ._slick ul li")

        // 電腦版才啟動
        if ($(window).width() > 801) {
            if (element.length < 5) {
                $(".mayLike ._slick ._arrow").css("display", "none");
            }
        }

        // 螢幕大小小於800px
        if ($(window).width() < 801) {
            if (element.length < 4) {
                $(".mayLike ._slick ._arrow").css("display", "none");
            }
        }

        if ($(window).width() < 701) {
            if (element.length = 1) {
                $(".mayLike ._slick ._arrow").css("display", "none");
            }
        }

        if (element.length == 0) {
            $(".mayLike").css("display", "none");
        }

    },

    praiseLikeArrowHidden: function() {
        var element = document.querySelectorAll(".praise ._slick ul li")

        // 電腦版才啟動
        if ($(window).width() > 801) {
            if (element.length < 6) {
                $(".praise ._slick ._arrow").css("display", "none");
            }
        }

        // 螢幕大小小於800px
        if ($(window).width() < 801) {
            if (element.length < 4) {
                $(".praise ._slick ._arrow").css("display", "none");
            }
        }

        if ($(window).width() < 701) {
            if (element.length = 1) {
                $(".praise ._slick ._arrow").css("display", "none");
            }
        }

        if (element.length == 0) {
            $(".praise").css("display", "none");
        }
    },

    all: function() {
        // 主頁
        if (jqbody.hasClass("index")) {
            product.masonry();
            product.text_color();
        }

        // 產品資訊內頁
        if (jqbody.hasClass("productInf")) {
            product.seedetail();
            product.slick_count();
            product.gneder();
            product.mayLikeArrowHidden();
            product.praiseLikeArrowHidden();

            $(".product_inf ._text_bg ._text ._btn button").click(function() {
                // logInYet();
            });

            // 燈箱的js
            if ($("body").hasClass("out")) {
                product_libox.all();
            }

            if ($("body").hasClass("hasSize")) {
                product_size_libox.all();

            }
        }

        // 產品系列內頁
        if (jqbody.hasClass("productSeries")) {
            product.dropdownMenu();
            product.onebyone();
        }
    }
}



var product_libox = {

    open_click: function() {
        $("._btn li:first-child button").click(function() {
            product_libox.open();
        });
    },

    open: function() {
        $("._libox").addClass("open");
        $("body").css("overflow-y", "hidden");
    },

    close_click: function() {
        $(".close").click(function() {
            product_libox.close();
        });
    },

    close: function() {
        $("._libox").removeClass("open");
        $("._libox").addClass("close");
        $("body").css("overflow-y", "visible");
        $("body").css("overflow-x", "hidden");
        setTimeout(function() {
            $("._libox").removeClass("close");
        }, 1000);
    },

    clickOtherClose: function() {

        $('.workbox_bg').on('click', function(e) {

            if (e.target !== this) {
                return;
            } else {
                product_libox.close();
            }

        });
    },

    all: function() {
        if (jqbody.hasClass("productInf")) {
            product_libox.open_click();
            product_libox.close_click();
            product_libox.clickOtherClose();
        }
    }
}


var product_size_libox = {
    open_click: function() {
        $("._btn li:first-child button").click(function() {
            if ($("body").hasClass("hasSize")) {
                product_size_libox.open();
            }
        });
    },

    open: function() {
        $(".sizeLibox").addClass("open");
        $("body").css("overflow-y", "hidden");
    },

    close_click: function() {
        $("._close").click(function() {
            product_size_libox.close();
        });
    },

    close: function() {
        $(".sizeLibox").removeClass("open");
        $(".sizeLibox").addClass("close");
        $("body").css("overflow-y", "visible");
        $("body").css("overflow-x", "hidden");
        setTimeout(function() {
            $(".sizeLibox").removeClass("close");
            $(".changBtn.chang").removeClass("chang");
            $("._content").removeClass("description");
            $("._content").removeClass("size");
        }, 1400);
    },

    // 點選其他物件關閉燈箱
    clickOtherClose: function() {
        $('.sizeLibox').on('click', function(e) {

            if (e.target !== this) {
                return;
            } else {
                product_size_libox.close();
            }

        });
    },

    // 選擇尺寸與尺寸說明變換
    changBtn: function() {
        // 點選尺寸說明
        $(".changBtn ul li:last-child").click(function() {
            $(".changBtn").addClass("chang");
            $("._content").addClass("description");
            $("._content").removeClass("size");
            $(".sizeLibox ._content").removeClass("fixed");
        });

        // 點選選擇尺寸
        $(".changBtn ul li:first-child").click(function() {
            $(".changBtn").removeClass("chang");
            $("._content").removeClass("description");
            $("._content").addClass("size");
            $(".sizeLibox ._content").removeClass("fixed");
        });
    },

    // 點選尺寸
    sizechoice: function() {
        $(".sizechoice ul li").click(function() {
            // 選擇取消
            if ($(this).hasClass("checked")) {
                $(this).removeClass("checked");
                $(".hiddenMessage p:nth-child(1)").css("display", "none");
            } else if ($(this).hasClass("noproduct")) {
                return
            } else {
                // 選擇後方塊變黑
                $(this).addClass("checked");
                $(this).siblings().removeClass("checked");
                // 選擇尺寸文字更變 
                $(".hiddenMessage p:nth-child(1)").css("display", "flex");
                var size = $(this).text()
                $(".hiddenMessage p:nth-child(1) span").text(size);
            }
        });
    },

    // 選擇數量
    numbSelect: function() {
        // var numb = 0
        // 增加數量
        $(".add").click(function() {
            var i = parseInt($("._btn ul li:first-child p").text())

            if (isNaN(i)) {
                var i = 0
            }

            var numb = i + 1

            // 顯示選擇數量及字色變#000
            $("._btn ul li:first-child p").text(numb);
            $("._btn ul li:first-child p").css("color", "#000");

        });
        // 減少數量
        $(".reduce").click(function() {
            var i = parseInt($("._btn ul li:first-child p").text())

            if (isNaN(i)) {
                var i = 0
            }
            if (i > 0) {
                var numb = i - 1
            }

            $("._btn ul li:first-child p").text(numb);

            if (numb <= 0) {

                // 如果數量為0的話回復原本文字
                $("._btn ul li:first-child p").text("購買數量");
                $("._btn ul li:first-child p").css("color", "#666666");
            }
        });
    },

    // 未選擇尺寸就點加入購物按鈕
    notSelect: function() {
        $("._btn ul li:last-child").click(function() {
            if (!$(".sizechoice ul li").hasClass("checked")) {
                $(".hiddenMessage p:nth-child(2)").css("display", "flex");
            }
        });
        // 點選其他物件 未選擇字樣消失
        $(document).click(function(e) {
            if ($("._btn ul li:last-child").has(e.target).length === 0) {
                $(".hiddenMessage p:nth-child(2)").css("display", "none");
            }
        });

    },

    // 自訂Scrollbar
    mCustomScrollbar: function() {

        $(".sizeLibox ._content").mCustomScrollbar({
            scrollInertia: 200,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true },
            callbacks: {
                whileScrolling: function() {
                    product_size_libox.changBtnFixed();
                }
            }
        });
    },

    // changBtn浮動
    changBtnFixed: function(data_o) {

        var liboxScrollTop = parseInt($(".sizeLibox ._content .mCSB_container").css("top"))

        var closeHeight = $(".sizeLibox ._content ._close").height()

        var titleHeight = $(".sizeLibox ._content ._title").height() + parseInt($(".sizeLibox ._content ._title").css("margin-top"))

        var titlePaddingBottom = 70

        var totoalHeight = closeHeight + titleHeight + titlePaddingBottom

        if (liboxScrollTop + totoalHeight <= 0) {
            $(".sizeLibox ._content").addClass("fixed");
        } else {
            $(".sizeLibox ._content").removeClass("fixed");
        }

    },

    all: function() {
        product_size_libox.open_click();
        product_size_libox.close_click();
        product_size_libox.clickOtherClose();
        product_size_libox.changBtn();
        product_size_libox.numbSelect();
        product_size_libox.sizechoice();
        product_size_libox.notSelect();
        product_size_libox.mCustomScrollbar();
    }
}

/***************************************************************************************************************************/
/***************************************************************************************************************************/

///////////////////////////////////////
//               news                //
///////////////////////////////////////

var news = {
    // 主頁 瀑布流
    masonry: function() {

        var msnry = new Masonry('.grid', {
            itemSelector: '.grid-item',
            gutter: 140,
            resize: true
        });

        // 平板螢幕寬度1024px以下
        if ($(window).width() < 1025) {
            var msnry = new Masonry('.grid', {
                itemSelector: '.grid-item',
                gutter: 120,
                resize: true
            });
        }

        // 平板螢幕寬度900以下
        if ($(window).width() < 901) {
            var msnry = new Masonry('.grid', {
                itemSelector: '.grid-item',
                gutter: 70,
                resize: true
            });
        }

        // 手機板才啟動
        if ($(window).width() < 701) {
            var msnry = new Masonry('.grid', {
                itemSelector: '.grid-item',
            });

            msnry.destroy();

        }

    },


    // 主頁 下拉式選單
    dropdownMenu: function() {
        $(".selectMenu").click(function() {
            var ele = $(this)

            $(ele).toggleClass("open");

            // 開啟選單

            $(ele).parent().find("ul").slideToggle(400);

            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(400);
                    $(ele).removeClass("open");
                }
            });

        });

        // 選擇li後關閉選單
        $(".menulist ul li").click(function() {

            // 作用對象.selectMenu
            $(".selectMenu").removeClass("open");

            // 作用對象.menulist ul li
            $(this).addClass("checked");

            // 作用對象其他.menulist ul li
            $(this).siblings().removeClass("checked");

            // 作用對象.menulist ul 
            $(this).parent().slideUp(400);

            // .selectMenu p 文字更改
            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())

            // 作用對象select
            $(this).parent().parent().parent().addClass("black");
        });

    },

    selectAll: function() {
        $(".select .All").click(function() {
            $(".menulist ul li").removeClass("checked");
            $(".selectMenu p").text("選擇分類");
            $(".select").removeClass("black");
        });
    },

    // 限制字數
    wordlatest: function() {
        var len = 50; // 超過50個字以"..."取代

        $(".box_text p").each(function() {
            if ($(this).text().length > len) {
                var text = $(this).text().substring(0, len - 1) + "......";
                $(this).text(text);
            }
        });

    },

    all: function() {

        // 主頁
        if (jqbody.hasClass("index")) {
            news.dropdownMenu();
            news.selectAll();
            news.wordlatest();
            news.masonry();
            setTimeout(function() {
                news.masonry();
            }, 500);
        }
    }
}


/***************************************************************************************************************************/


/***************************************************************************************************************************/

///////////////////////////////////////
//               witness             //
///////////////////////////////////////


var witness = {

    // 幸福好評內頁 GO TOP
    gotop: function() {
        $("._goTop").click(function() {
            $("._inf").animate({
                scrollTop: 0,
            }, 800, 'easeInOutCubic');
        });
    },

    // 出現預約鑑賞
    scrollback: function() {

        var lastscrollY = 0;

        // 電腦版才啟動
        if ($(window).width() > 1024) {
            $("._inf").scroll(function() {

                var nowscrollY = $(this).scrollTop()

                // var nowscrollY = Math.round($(this).scrollTop())

                var scrollBottom = $("._inf").prop("scrollHeight") - $(this).height()

                // 向上滑動時出現
                if (nowscrollY < lastscrollY) {
                    $("._reservation").addClass("_hideUp");
                }

                // 到底部時出現
                else if (nowscrollY === scrollBottom) {
                    $("._reservation").addClass("_hideUp");
                }

                // 向下滑動時消失
                else {
                    $("._reservation").removeClass("_hideUp");
                }

                lastscrollY = nowscrollY;

            });
        }

        // 手機板或平板才啟動
        else if ($(window).width() < 1025) {

            $(window).scroll(function() {

                var nowscrollY = $(this).scrollTop();

                var scrollBottom = $("body").prop("scrollHeight") - $(window).height();

                // 向上滑動時出現
                if (nowscrollY < lastscrollY) {
                    $("._reservation").addClass("_hideUp");
                }

                // 到底部時出現
                else if (nowscrollY === scrollBottom) {
                    $("._reservation").addClass("_hideUp");
                }

                // 向下滑動時消失
                else {
                    $("._reservation").removeClass("_hideUp");
                }

                lastscrollY = nowscrollY;

            });
        }


    },

    // 數字倒數
    countup: function() {
        var couples = document.querySelectorAll(".couples ul li")

        // 本頁展示人數
        var couplesNumb = couples.length



        setTimeout(function() {

            // 動畫設定值
            var options = {  
                useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
            };

            // 使用說明new CountUp("myTargetElement",startNumber,endNumber,小數點後幾位,time,選擇功能)

            var demo = new CountUp('counter', 0, couplesNumb, 0, 3.5, options);
            if (!demo.error) {  
                demo.start();
            } else {  
                console.error(demo.error);
            }
        }, 800)

    },

    // 主頁 下拉式選單
    dropdownMenu: function() {
        $(".selectMenu").click(function() {
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
        $(".menulist ul li").click(function() {

            // 作用對象.selectMenu
            $(".selectMenu").removeClass("open");

            // 作用對象.menulist ul li
            $(this).addClass("checked");

            // 作用對象其他.menulist ul li
            $(this).siblings().removeClass("checked");

            // 作用對象.menulist ul 
            $(this).parent().slideUp(500);

            // .selectMenu p 文字更改
            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())

            // 作用對象select
            $(this).parent().parent().parent().addClass("black");
        });

    },

    selectAll: function() {
        $(".select .All").click(function() {
            $(".menulist ul li").removeClass("checked");
            $(".selectMenu p").text("選擇分類");
            $(".select").removeClass("black");
        });
    },

    // 產品系列內頁 產品依序出現
    onebyone: function() {
        var element = document.querySelectorAll(".couples ul li")

        var time = 0

        // 電腦版且螢幕寬度小於等於1080px才啟動
        if ($(window).width() > 900) {
            for (var i = 0; i < element.length; i++) {

                var x = i % 5

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

        // 平板螢幕寬度700以上
        if ($(window).width() > 700 && $(window).width() < 901) {
            for (var i = 0; i < element.length; i++) {

                var x = i % 4

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

        // 手機螢幕寬度700以下
        if ($(window).width() < 701) {
            for (var i = 0; i < element.length; i++) {

                var x = i % 2

                var time = x * .15 + "s"

                $(element[i]).css("animation-delay", time);
            }
        }

    },

    all: function() {

        // 幸福好評主頁
        if (jqbody.hasClass("index")) {
            witness.countup();
            witness.dropdownMenu();
            witness.selectAll();
            witness.onebyone();
        }

        // 幸福好評內頁
        if (jqbody.hasClass("detail")) {
            witness.gotop();
            witness.scrollback();

        }
    }
}


/***************************************************************************************************************************/



/***************************************************************************************************************************/

///////////////////////////////////////
//           reservation             //
///////////////////////////////////////

var reservation = {
    // 主頁 下拉式選單
    dropdownMenu: function() {
        $(".selectMenu").click(function() {
            var ele = $(this)

            $(ele).toggleClass("open");

            // 開啟選單

            $(ele).parent().find("ul").slideToggle(400);

            // 點選其他物件 關閉選單
            $(document).click(function(e) {
                if ($(ele).parent().has(e.target).length === 0) {
                    $(ele).parent().find("ul").slideUp(400);
                    $(ele).removeClass("open");
                }
            });

        });

        // 選擇li後關閉選單
        $(".menulist ul li").click(function() {

            // 作用對象.selectMenu
            $(".selectMenu").removeClass("open");

            // 作用對象.menulist ul li
            $(this).addClass("checked");

            // 作用對象其他.menulist ul li
            $(this).siblings().removeClass("checked");

            // 作用對象.menulist ul 
            $(this).parent().slideUp(400);

            // .selectMenu p 文字更改
            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())

        });

    },

    scrollBar: function() {
        $(".menulist ul").niceScroll({
            cursorcolor: '#fff',
            cursorborder: 'none',
            cursorwidth: 4,
        });
    },

    selectDate: function() {
        // 年份最多只到明年
        var thisYear = new Date().getFullYear()

        var nextYear = thisYear + 1

        $('._datebox input').attr("data-max-year", nextYear);

        $('._datebox input').attr("data-min-year", thisYear);
        
        $('._date').dateDropper();
    },

    selectreset: function() {
        $("._table ._button li:last-child").click(function() {
            $(".searchStore .selectMenu p").text("請選擇分店");
            $(".searchProduct .selectMenu p").text("請選擇");
            $(".firstTime .selectMenu p").text("請選擇");
        });
    },

    all: function() {
        reservation.selectDate();
        reservation.dropdownMenu();
        reservation.scrollBar();
        reservation.selectreset();
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/

///////////////////////////////////////
//           storehold               //
///////////////////////////////////////

var storehold = {

    //  下拉式選單
    dropdownMenu: function() {
        $(".selectMenu").click(function() {
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
        $(".menulist ul li").click(function() {

            // 作用對象.selectMenu
            $(".selectMenu").removeClass("open");

            // 作用對象.menulist ul li
            $(this).addClass("checked");

            // 作用對象其他.menulist ul li
            $(this).siblings().removeClass("checked");

            // 作用對象.menulist ul 
            $(this).parent().slideUp(500);

            // .selectMenu p 文字更改
            $(this).parent().parent().find(".selectMenu p").text($(this).find("p").text())

            // 作用對象select
            $(this).parent().parent().parent().addClass("black");
        });

    },

    selectAll: function() {
        $(".select .All").click(function() {
            $(".menulist ul li").removeClass("checked");
            $(".selectMenu p").text("選擇區域");
            $(".select").removeClass("black");
        });
    },



    all: function() {
        storehold.dropdownMenu();
        storehold.selectAll();
        // 引入燈箱的js
        storehold_libox.all();
    }
}




var storehold_libox = {

    open_click: function() {
        $("._area ul li").click(function() {
            storehold_libox.open();
        });
    },

    open: function() {
        $("body").css("overflow-y", "hidden");
        $("._libox").addClass("open");
    },

    close_click: function() {
        $("._libox ._close").click(function() {
            storehold_libox.close();
        });
    },

    close: function() {
        $("._libox").removeClass("open");
        $("._libox").addClass("close");
        $("body").css("overflow-y", "visible");
        $("body").css("overflow-x", "hidden");
        $("._libox_content_bg").css("overflow-y", "hidden");
        $("._reservation").removeClass("_hideUp");
        setTimeout(function() {
            $("._libox_content_bg").animate({
                scrollTop: 0
            }, 0);
            $("._libox_content_bg").css("overflow-y", "auto");
            $("._libox").removeClass("close");
        }, 1400);
    },

    clickOtherClose: function() {

        $('._libox').on('click', function(e) {

            if (e.target !== this) {
                return;
            } else {
                storehold_libox.close();
            }

        });
    },

    // 出現預約鑑賞
    scrollback: function() {

        var lastscrollY = 0;

        $("._libox_content_bg").scroll(function() {

            var nowscrollY = $(this).scrollTop();

            var scrollBottom = $("._libox_content_bg").prop("scrollHeight") - $(window).height();

            // 向上滑動時出現
            if (nowscrollY < lastscrollY) {
                if ($("._libox").hasClass("open")) {
                    $("._reservation").addClass("_hideUp");
                }
            }

            // 到底部時出現
            else if (nowscrollY === scrollBottom) {
                $("._reservation").addClass("_hideUp");
            }

            // 向下滑動時消失
            else {
                $("._reservation").removeClass("_hideUp");
            }

            lastscrollY = nowscrollY;

        });



    },

    // 燈箱預約鑑賞 GO TOP
    gotop: function() {
        $("._goTop").click(function() {
            $("._libox_content_bg").animate({
                scrollTop: 0,
            }, 1000, 'easeInOutCubic');
        });
    },

    all: function() {
        storehold_libox.open_click();
        storehold_libox.close_click();
        storehold_libox.clickOtherClose();
        storehold_libox.scrollback();
        storehold_libox.gotop();
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/

///////////////////////////////////////
//              about                //
///////////////////////////////////////

var about = {
    bannerScrollDown: function() {
        $("._banner_srcollDown").click(function() {
            $("html,body").animate({
                scrollTop: $("._banner").height() - $("header").height()
            }, 1000, "easeOutQuad")
        });
    },

    // 出現預約鑑賞
    scrollback: function() {
        var lastscrollY = 0;

        $(window).scroll(function() {

            var nowscrollY = Math.round($(this).scrollTop())

            var scrollBottom = $("body").prop("scrollHeight") - $(window).height();

            // 向上滑動時出現
            if (nowscrollY < lastscrollY) {
                $("._reservation").addClass("_hideUp");
            }

            // 到底部時出現
            else if (nowscrollY === scrollBottom) {
                $("._reservation").addClass("_hideUp");
            }

            // 向下滑動時消失
            else {
                $("._reservation").removeClass("_hideUp");
            }

            lastscrollY = nowscrollY;

        });
    },

    countup: function() {
        // 動畫設定值
        var options = {  
            useEasing: true,
              useGrouping: true,
              separator: ',',
              decimal: '.',
        };

        // 使用說明new CountUp("myTargetElement",startNumber,endNumber,小數點後幾位,time,選擇功能)

        var numb = 500

        var demo = new CountUp('counter', 0, numb, 0, 3.5, options);
        if (!demo.error) {  
            demo.start();
        } else {  
            console.error(demo.error);
        }
    },

    // 幸福好評內頁 GO TOP
    gotop: function() {
        $("._goTop").click(function() {
            $("html,body").animate({
                scrollTop: 0,
            }, 800, 'easeInOutCubic');
        });
    },

    all: function() {
        // 主頁的js    
        if ($("body").hasClass("index")) {
            about.bannerScrollDown();
        }

        // 內頁共用js
        if ($("body").hasClass("detail")) {
            about.scrollback();
            about.gotop();
        }

        // story內頁的js 
        if ($("body").hasClass("story")) {

        }
    }
}





/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//               home                //
///////////////////////////////////////
var home = {

    /*bodyScroll*/
    bodyScroll: function() {

        judge_device();

        $(window).resize(function() {

            judge_device();

        });

    },

    // 數字倒數(等動畫套入 要移到waypoint去觸發)
    countup: function() {

        // 本頁展示人數
        // var couplesNumb = document.getElementById("counter").innerHTML;

        var couplesNumb = $('.witness .counter').attr('count-number');



        setTimeout(function() {

            // 動畫設定值
            var options = {  
                useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
            };

            // 使用說明new CountUp("myTargetElement",startNumber,endNumber,小數點後幾位,time,選擇功能)

            var demo = new CountUp('counter', 0, couplesNumb, 0, 3.5, options);
            if (!demo.error) {  
                demo.start();
            } else {  
                console.error(demo.error);
            }
        }, 800)

    },

    /*檢查有沒有影片  影響header CSS*/
    videoCheck: function() {

        if ($('body').hasClass("has_video") == true) {

            var papillon_video = $('.papillon_video'),
                video_h = papillon_video.outerHeight();


            //resize時重新計算高度
            $(window).resize(function() {

                video_h = papillon_video.outerHeight();

            });


            //scorlling 時判斷目前高度與影片高度
            $(window).scroll(function() {

                var window_top = $(this).scrollTop();


                if (window_top >= video_h) {
                    //目前高度大於影片高度

                    $('#home').addClass('fixed');

                } else {
                    //目前高度小於影片高度

                    $('#home').removeClass('fixed');

                }

            });

        }

    },

}


function judge_device() {

    var body = $('body');


    /*判斷裝置*/
    var userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
        //是否為Android
        // alert('Android');
        body.getNiceScroll().remove();

    } else if (/iPhone|iPad/i.test(userAgent)) {
        //是否為iPhone或iPad
        // alert('iPhone');
        body.getNiceScroll().remove();

    } else {
        //使否是用電腦觀看
        // alert('不做事');
        body.niceScroll({});
    }

}


/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//              youtube              //
///////////////////////////////////////
function youtube_video() {

    var hidden_btn = $('.hidden_btn');

    var v_id = $('#video_box').attr('video-id');

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window.onYouTubeIframeAPIReady = function() {

        if ($("body").hasClass("has_video") && !$("html").hasClass("touch")) {

            video_firstview = new YT.Player('video_box', {
                width: '1920',
                height: '1080',
                videoId: v_id,
                playerVars: {
                    'rel': 0,
                    'showinfo': 0,
                    'controls': 0,
                    'autoplay': 1,
                    'loop': 1,
                    'modestbranding': 1,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onError': onPlayerError,
                    'onStateChange': onPlayerStateChange,
                }
            });

        }
    }


    /*影片準備好後所做的事*/
    function onPlayerReady(event) {

        // event.target.playVideo();

        /**/
        hidden_btn.on('click', function() {

            if ($('#video_box')) {

                setTimeout(function() {

                    event.target.playVideo();

                }, 500);

            }

        });

        /*音量控制按鈕*/
        var volume_switch = $('.volume_switch');

        volume_switch.on('click', function() {

            if (volume_switch.hasClass('switch_on') == true) {

                video_firstview.mute();

                volume_switch.removeClass('switch_on');

            } else {

                video_firstview.unMute();

                volume_switch.addClass('switch_on');

            }

        });

        //papillon_video(動畫)
        $('.papillon_video > *').each(function(index, element) {

            $(element).waypoint(function() {

                $(element).addClass('show');

            }, { offset: '110%' });

        });

    }


    /*影片錯誤時*/
    function onPlayerError(event) {

        //papillon_video(動畫)
        if ($('.papillon_video .video_header').hasClass('show') == false) {

            $('.papillon_video > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '110%' });

            });

        }

    }


    /*影片狀態改變時*/
    function onPlayerStateChange(event) {

        if (event.data == YT.PlayerState.ENDED) {

            /*重新播放影片*/
            video_firstview.playVideo();

        }

    }


    /*resize*/
    if ($("body").hasClass("has_video") && !$("html").hasClass("touch")) {

        var $firstview = $(".papillon_video");

        $(window).on("resize", firstviewVideoResize);

        function firstviewVideoResize() {

            var fvw = $firstview.width();
            var fvh = fvw * .5625;

            if (fvh < $firstview.outerHeight()) {
                fvh = $firstview.outerHeight();
                fvw = fvh * 1.777777778;
            }

            $("#video_box").css({
                width: fvw,
                height: fvh
            });

        }
        firstviewVideoResize();
    }


    /*判斷裝置*/
    var userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
        //是否為Android
        // alert('Android');
        hidden_btn.addClass('show_btn');

    } else if (/iPhone|iPad/i.test(userAgent)) {
        //是否為iPhone或iPad
        // alert('iPhone');
        hidden_btn.addClass('show_btn');

    } else if (/Windows/i.test(userAgent)) {
        //使否是用電腦觀看
        // alert('不做事');
    }

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//              red_tag              //
///////////////////////////////////////
/*預約紅標籤*/
function red_tag() {

    var lastscrollY = 0;

    var video = $('.papillon_video'),
        reservation = $('.reservation');


    /*向下滑動時出現(分有影片與沒影片)*/
    if (video.length > 0) {

        reservation.addClass('_video');

        setTimeout(function() {
            reservation.addClass('show');
        }, 500);

        $(window).scroll(function() {

            var nowscrollY = $(this).scrollTop(),
                window_h = $(window).height(),
                show_height = window_h * 0.5;


            var myNodelist = document.querySelector('footer'),
                footer_top = myNodelist.getBoundingClientRect().top;


            /*超過影片區後顯示*/
            if (nowscrollY > show_height) {

                reservation.removeClass('_video');

            }

            /*往上回到影片時不顯示*/
            if (nowscrollY < show_height) {

                reservation.addClass('_video');

            }


            /*到底部時固定*/
            if (footer_top <= window_h) {

                reservation.addClass("_hideStock");

            }

            /*從底部固定 往上滑時*/
            if (footer_top >= window_h) {

                reservation.removeClass("_hideStock");

            }

        });

    } else {

        setTimeout(function() {
            reservation.addClass('show');
        }, 500);

        $(window).scroll(function() {

            var nowscrollY = $(this).scrollTop(),
                window_h = $(window).height(),
                show_height = window_h * 0.5;


            var myNodelist = document.querySelector('footer'),
                footer_top = myNodelist.getBoundingClientRect().top;


            /*到底部時固定*/
            if (footer_top <= window_h) {

                reservation.addClass("_hideStock");

            }

            /*從底部固定 往上滑時*/
            if (footer_top >= window_h) {

                reservation.removeClass("_hideStock");

            }

        });

    }

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//           search_frame            //
///////////////////////////////////////
/*搜尋視窗search_frame*/
function search_frame() {

    var search_switch = $('.search_box'),
        search_frame = $('.search_frame'),
        close_btn = $('.search_frame ._close'),
        body = $('body');



    search_switch.on('click', function() {

        if (search_frame.hasClass('open') == false) {

            search_frame.addClass('open');

            $('html,body').css({
                overflow: "hidden",
            });

            $('.header').css({
                'padding-right': '17px',
            });

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.search_frame');

            //
            if ($('body').hasClass('home') == true) {

                body.getNiceScroll().remove();

            }

        }

    });

    close_btn.on('click', function() {

        if (search_frame.hasClass('open') == true) {

            search_frame.removeClass('open');

            $('html,body').css({
                overflow: "",
            });

            $('.header').css({
                'padding-right': '',
            });


            //解鎖 ios body scrollbar
            disableBodyScroll(false, '.search_frame');

            //
            if ($('body').hasClass('home') == true) {

                body.niceScroll();

            }

        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//         header_nav 產品NAV        //
///////////////////////////////////////
function header_nav() {

    var big_category_list = $('.big_category li'),
        product_nav = $('.product_nav'),
        product_nav_frame = $('.product_nav .frame');


    big_category_list.mouseover(function() {

        $(this).find(product_nav).addClass('open');

        $(this).mouseout(function() {

            product_nav.removeClass('open');

        });

    });

    product_nav_frame.mouseover(function() {

        $(this).closest('li').find('.big_category_list').addClass('show');

    });

    product_nav_frame.mouseout(function() {

        product_nav.removeClass('open');

        $('.big_category_list').removeClass('show');

    });

}
/***************************************************************************************************************************/




/***************************************************************************************************************************/
////////////////////////////////////////////////
//                 下拉選單                  ///
///////////////////////////////////////////////
function dropMenu() {

    var selectMenu = $('.selectMenu'),
        dropMenu_list = $('.dropMenu .dropMenu_box li'),
        dropMenu_box = $('.dropMenu .dropMenu_box');


    //
    selectMenu.click(function() {

        var ele = $(this)

        $(ele).toggleClass("open");

        // 開啟選單

        $(ele).closest('.dropMenu').find("ul").slideToggle(400);

        // 點選其他物件 關閉選單
        $(document).click(function(e) {

            if ($(ele).parent().has(e.target).length === 0) {

                $(ele).closest('.dropMenu').find('.dropMenu_box').slideUp(400);
                $(ele).removeClass("open");

            }

        });

    });

    // 選擇li後關閉選單
    dropMenu_list.click(function() {

        // 作用對象.selectMenu
        selectMenu.removeClass("open");

        // 作用對象.menulist ul li
        $(this).addClass("checked");

        // 作用對象其他.menulist ul li
        $(this).siblings().removeClass("checked");

        // 作用對象.menulist ul 
        $(this).parent().slideUp(400);

        // .selectMenu p 文字更改
        $(this).closest('.dropMenu').find(".selectMenu p").text($(this).find("p").text());

    });

    //下拉選單scroll bar
    dropMenu_box.niceScroll({
        cursorcolor: '#fff',
        cursorborder: 'none',
        cursorwidth: 4,
    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//             購物QA   清單切換              ///
///////////////////////////////////////////////
function container_switch() {

    var container = $('.container'),
        list = $('.container .list'),
        now_page = $('body').attr('id'),
        option = $("." + now_page + " .dropMenu_box li");

    var num = option.length;

    var window_Swidth = window.screen.width, //初始螢幕寬度
        window_regularWidth = window_Swidth; //現在螢幕寬度


    //給選項ID
    for (var index = 0; index < num; index++) {

        option.eq(index).attr('option-id', index);

    }


    //預設第一個清單的第一個LI是打開的
    if (window_Swidth < 768) {

        container.eq(0).find('li:eq(0)').addClass('open').find('.content').slideToggle();

    }
    $(window).resize(function() {

        var window_Swidth = window.screen.width;

        var list_content = list.find('.content');

        //當現在螢幕寬度 不等於 resize的螢幕寬度 就做動
        //原因是手機上的網址列 往下滑時縮小 也會被判斷成resize所以下一個 寬度等於resize寬度的保險，確認沒resize
        //resize後 再把現在螢幕寬度 更新
        if (window_regularWidth != window_Swidth) {

            if (window_Swidth < 768 && container.eq(0).find('li:eq(0)').hasClass('open') == false) {
                //手機模式時，將所有清單隱藏，並且打開清單第一個
                list_content.css('display', 'none');

                container.eq(0).find('li:eq(0)').addClass('open').find('.content').slideToggle();

                //更新 現在螢幕寬度
                window_regularWidth = window_Swidth;

            } else if (window_Swidth >= 768) {
                //非手機模式時，移除open class，並把所有清單打開
                var open_ed = $('.container .list.open');

                open_ed.removeClass('open');

                list_content.css('display', 'block');

            }

        }

    });



    //下拉選單 點擊選項
    option.on('click', function() {

        var window_Swidth = window.screen.width;

        var a = $(this).attr('option-id');

        container.removeClass('show');
        container.eq(a).addClass('show');

        if (window_Swidth < 768 && container.eq(a).find('li:eq(0)').hasClass('open') == false) {

            var list_opened = $('.container .list.open');

            list_opened.removeClass('open').find('.content').slideUp();

            container.eq(a).find('li:eq(0)').addClass('open').find('.content').slideToggle();

        }

    });


    //清單 點擊事件
    list.on('click', function() {

        var window_Swidth = window.screen.width;

        if (window_Swidth < 768) {

            if ($(this).hasClass('open') == false) {

                //移除上一個被打開的清單class，並且將之關上
                var list_opened = $('.container .list.open');

                list_opened.removeClass('open').find('.content').slideUp();


                //給被點選清單加上class，並打開
                $(this).addClass('open');

                $(this).find('.content').slideToggle(function() {

                    //被點選清單打開後，畫面移至該清單的頭
                    var target_top = $(this).offset().top;

                    $("html, body").animate({ scrollTop: target_top - 270 }, "slow");

                });

            } else {

                //給被點選清單加上class，並打開
                $(this).removeClass('open');

                $(this).find('.content').slideToggle();

            }

        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                 過場動畫JS                ///
///////////////////////////////////////////////
function cg_page() {

    var cg_canvas = $('.cg_page'),
        cg_width = $(window).width(),
        cg_height = $(window).height();

    if (cg_canvas.hasClass('open') == false) {

        cg_canvas.addClass('open');

        //過場
        pass_page();

    }


    //過場
    function pass_page() {

        cg_canvas.find('svg').attr('width', cg_width);
        cg_canvas.find('svg').attr('height', cg_height);

        var w_center = cg_width / 2;
        var h_center = cg_height / 2;




        if (cg_canvas.find('svg').length > 0) {


            $('svg').removeAttr('viewBox');
            $('svg').each(function() { $(this)[0].setAttribute('viewBox', '-' + (w_center - 100) + ' -' + h_center + ' ' + cg_width + ' ' + cg_height) });

            // $('svg').each(function () { $(this)[0].setAttribute('viewBox', '0 0 800 400') });


        }


        var startButton = document.querySelector(".cg_page");

        //scale 圖片為100px 以螢幕2000px 來算 就是20分之1

        var morphA = KUTE.fromTo('#shape_1', // target shape
            { // from shape
                path: '#shape_1',
                opacity: 1,
                scale: 1,
            }, { // to shape
                path: '#shape_6',
                opacity: 1,
                scale: 20,
            }, { // options
                easing: 'linear',
                // yoyo: true,
                // repeat: 1, 
                duration: 2000,
                morphIndex: 1, //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
                morphPrecision: 1, //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
            }
        );

        // var morphB = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_2',
        //         scale: 4,
        //     },
        //     { // to shape
        //         path: '#shape_3',
        //         scale: 8,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 400,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphC = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_3',
        //         scale: 8,
        //     },
        //     { // to shape
        //         path: '#shape_4',
        //         scale: 12,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 400,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphD = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_4',
        //         scale: 12,
        //     },
        //     { // to shape
        //         path: '#shape_5',
        //         scale: 16,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 400,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphE = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_5',
        //         scale: 16,
        //     },
        //     { // to shape
        //         path: '#shape_6',
        //         scale: 20,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 400,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );


        // morphA.chain(morphB);
        // morphB.chain(morphC);
        // morphC.chain(morphD);
        // morphD.chain(morphE);
        morphA.start();

    }


    //進場
    function in_page() {

        cg_canvas.find('svg').attr('width', cg_width);
        cg_canvas.find('svg').attr('height', cg_height);

        var w_center = cg_width / 2;
        var h_center = cg_height / 2;




        if (cg_canvas.find('svg').length > 0) {


            $('svg').removeAttr('viewBox');
            $('svg').each(function() { $(this)[0].setAttribute('viewBox', '-' + (w_center - 100) + ' -' + h_center + ' ' + cg_width + ' ' + cg_height) });

            // $('svg').each(function () { $(this)[0].setAttribute('viewBox', '0 0 800 400') });


        }


        var startButton = document.querySelector(".cg_page");

        var morphA = KUTE.fromTo('#shape_1', // target shape
            { // from shape
                path: '#shape_1',
                opacity: 1,
                scale: 3,
            }, { // to shape
                path: '#shape_2',
                opacity: 1,
                scale: 3,
            }, { // options
                easing: 'linear',
                // yoyo: true,
                // repeat: 1, 
                duration: 5000,
                morphIndex: 1, //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
                morphPrecision: 1, //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
            }
        );

        // var morphB = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_2',
        //         opacity: 0.25,
        //         scale: 10,
        //     },
        //     { // to shape
        //         path: '#shape_3',
        //         opacity: 0.5,
        //         scale: 10,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 1000,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphC = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_3',
        //         opacity: 0.5,
        //         scale: 10,
        //     },
        //     { // to shape
        //         path: '#shape_4',
        //         opacity: 0.75,
        //         scale: 10,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 1000,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphD = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_3',
        //         opacity: 0.75,
        //         // scale: 3,
        //     },
        //     { // to shape
        //         path: '#shape_2',
        //         opacity: 1,
        //         // scale: 2,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 1000,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );

        // var morphE = KUTE.fromTo('#shape_1',  // target shape
        //     { // from shape
        //         path: '#shape_2',
        //         // scale: 2,
        //     },
        //     { // to shape
        //         path: '#shape_1',
        //         // scale: 1,
        //     }, 
        //     { // options
        //         easing: 'linear', 
        //         // yoyo: true,
        //         // repeat: 1, 
        //         duration: 1000,
        //         morphIndex: 1,  //選項允許您旋轉第二個/結束路徑，使點在變形過程中行進的距離最短，作為變形動畫感覺更“自然”的效果。默認情況下，這個選項沒有設置。
        //         morphPrecision: 1,  //越小，視覺效果越好，但功耗越多，性能越差。默認值是15
        //     }
        // );


        // morphA.chain(morphB);
        // morphB.chain(morphC);
        // morphC.chain(morphD);
        // morphD.chain(morphE);
        morphA.start();

    }





    // startButton.addEventListener(
    //     "click",
    //     function() {
    //         morphA.chain(morphB);
    //         morphB.chain(morphC);
    //         morphC.chain(morphD);
    //         morphD.chain(morphE);
    //         morphA.start();
    //     },
    //     false
    // );

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




$(document).ready(function() {

    var page = $('body').attr('id');

    /*首頁home 啟動的JS*/
    if (page == "home") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*首頁body scroll bar*/
        home.bodyScroll();

        /*檢查有沒有影片  影響header CSS*/
        home.videoCheck();

        /*waypoint*/
        _waypoint.homeW();

        /* b-lazy */
        _Blazy.homeW();

        /*slick*/
        slick('homeSlick');

        /*youtube*/
        youtube_video();

        /*svg動畫*/
        var $svg = $('svg').drawsvg({
            // stagger: 500,
            duration: 2000,
        });

        $svg.drawsvg('animate');


        /* 過場 */
        // cg_page();
    }


    // 產品product 啟動的JS
    if (page == "product") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*waypoint*/
        _waypoint.productW();

        /*slick*/
        slick("productSlick");


        /* product*/
        product.all();

        /* b-lazy */
        _Blazy.productW();




        /* masonry*/
        if ($("body").hasClass("index")) {
            $(window).resize(function() {
                product.masonry();
            });
        }
    }

    // 最新消息news 啟動的JS
    if (page == "news") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*waypoint*/
        _waypoint.newsW();

        /*slick*/
        slick("newsSlick");

        /* b-lazy */
        _Blazy.newsW();


        /* news*/
        news.all();

        /* masonry*/
        $(window).resize(function() {
            news.masonry();
        });
    }

    // 幸福好評witness 啟動的JS
    if (page == "witness") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*waypoint*/
        _waypoint.witnessW();

        /* news*/
        witness.all();

        /* b-lazy */
        _Blazy.witnessW();
    }

    // 預約鑑賞reservation 啟動的JS
    if (page == "reservation") {

        /*ajax header*/
        // header();

        /*ajax footer*/
        // footer();

        /*waypoint*/
        _waypoint.reservationW();

        /* news*/
        reservation.all();

        /* b-lazy */
        _Blazy.reservationW();
    }

    // 門市據點storehold 啟動的JS
    if (page == "storehold") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*waypoint*/
        // _waypoint.storeholdW();

        /* news*/
        storehold.all();

        /* b-lazy */
        // _Blazy.storeholdW();
    }


    //會員中心 member_center 啟動的JS
    if (page == "member") {

        /*ajax header*/
        header();

        /*ajax footer*/
        if ($('body').hasClass('memberJoin_frame') == true) {
            //不做事
        } else if ($('body').hasClass('memberPassword_frame') == true) {

        } else {
            footer();
        }

    }



    // 品牌故事about啟動的js
    if (page == "about") {

        if ($("body").hasClass("index")) {
            /*ajax header*/
            header();

            /*ajax footer*/
            footer();
        }

        /*slick*/
        slick("aboutSlick");

        /*waypoint*/
        _waypoint.aboutW();

        /* news*/
        about.all();

        /* b-lazy */
        _Blazy.aboutW();
    }



    // 聯絡我們contact_us 啟動的JS
    if (page == "contact") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*下拉選單*/
        dropMenu();

    }


    // 購物QA SHOPPING QA 啟動的JS
    if (page == "shopping_qa") {

        /*ajax header*/
        header();

        /*ajax footer*/
        footer();

        /*啟動光箱*/
        active_lbox();

        /*下拉選單*/
        dropMenu();

        /*清單切換*/
        container_switch();

    }




}); //end of  $(document).ready