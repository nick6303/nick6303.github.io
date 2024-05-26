////////////////////////////////    共  用    ////////////////////////////////       


$('.menuBar').addClass('menuFixed');

$('.navbox').addClass('navboxFixed');

$('article').addClass('p_top');



/////////////////////

//   轉場href判斷  //

////////////////////



$("a").click(function (a) {

    if (!$(this).hasClass("noAction")) {

        a.preventDefault();

        var aHref = $(this).attr("href"); //抓連結裡面的href

        var aTarget = $(this).attr("target"); //抓連結裡面的target(開啟網頁的方式)

        var aArr = aHref.split("/"); //把aHref裡面的網址切成陣列(判斷用 / 分隔)

        var aFilePath = aArr.pop(); //抓取上個陣列最後一個字串(陣列會少一個)

        var aFilePrevPath = aArr.pop();

        var aTargetPath = aFilePath.substr(0, 1); //抓取字串第一字元一個字元



        var locHref = location.href; //抓目前網址

        var locArr = locHref.split("/"); //把網址切成陣列(判斷用 / 分隔)

        var locFilePath = locArr.pop(); //抓取上個陣列最後一個字串(陣列會少一個)

        var locFilePrevPath = locArr.pop();

        var locTargetPath = aFilePath.substr(0, 1); //抓"連結"裡面的最後一個字串第一字元一個字元





        if (aFilePath == "") {
            aFilePath = "index.html";
        }

        if (locFilePath == "") {
            locFilePath = "index.html";
        }

        if (aArr == "") {
            aFilePrevPath = locFilePrevPath;
        }



        if (aTarget == "_blank") {

            window.open(aHref); //傳遞另開視窗路徑至 window.open(aHref)

            aTarget = "";



        } else if (aHref.indexOf("mailto:") >= 0 || aHref.indexOf("tel:") >= 0) {

            window.location.assign(aHref);

            aTarget = "";



        } else if (aHref.indexOf("javascript") >= 0) {} else if (aHref.indexOf("mp4") >= 0) {} else if (aHref.indexOf("youtube") >= 0) {} else if (aFilePrevPath != locFilePrevPath) {

            pagechange(aHref); //傳遞路徑至 pagechange(aHref)

            aHref = "";



        } else if (aFilePath != locFilePath && aTargetPath != "#" && locTargetPath != "#" && aHref != "") {

            if (aArr.pop() == locArr.pop() && aFilePath == locFilePath) {} else {

                pagechange(aHref); //傳遞路徑至 pagechange(aHref)

                aHref = "";

            }

        } else {

            var target = $(this.hash); //抓當前網址的#id

            // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (this.hash == "#top") {

                $('article').addClass('p_top');

                $('html, body').animate({
                    scrollTop: 0
                }, {
                    duration: 500,
                    easing: 'easeInOutCirc'
                });



            } else {



                $('article').removeClass('p_top');

                if (target.length) {

                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, {
                        duration: 500,
                        easing: 'easeInOutCirc'
                    });

                } //end if

            }

        }

    } //end else

}); //end click function



///////////////////////////////////////
//      Page Change Animlate JQ      //
///////////////////////////////////////



var pagechange = function (href) {

    nav.close();

    $("body").append("<div id='cutto'><div class='cutto01'><div class='cuttologo'></div></div></div>");

    $("body").css({
        overflowY: "hidden"
    });

    $(".cutto01").css({
        background: "#F0F0F0"
    });



    $(".cutto01").animate({

        height: "100vh",

    }, {

        queue: true,

        duration: 500,

    }, 'swing');



    $(".cuttologo").animate({

        opacity: 0,

    }, {

        queue: true,

        duration: 200,

    }, 'swing');

    $(".cuttologo").delay(250).animate({

        opacity: 1,

    }, {

        queue: true,

        duration: 350,

    }, 'swing');

    $("html").delay(1000).animate({
        opacity: "0"
    }, {

        queue: true,

        duration: 500,

        complete: function () {

            setTimeout(function () {

                window.location.assign(href);

            }, 100);

        }

    });

}

//還沒確認作用否



window.onunload = function () {
    $('#cutto').remove()
};



/////////////////

//選單menu按鈕 //

/////////////////

$('.menuBtn').on('click', function () {

    $(this).addClass("opennav");

    nav.open();

})

$('.nav-close').on('click', function () {

    nav.close();

    $('.menuBtn').removeClass("opennav");

})


if ($('.nav-accent').size() > 0) {

    $('.nav-accent>div').mCustomScrollbar({

        theme: "minimal",

    })

}



var nav = {

    open: function () {

        $('.navmenu').delay(500).slideToggle(500);

        // $("body").css({ overflowY: "hidden" });

        setTimeout(function timeout() {

            $("body").css({
                overflowY: "hidden"
            });

        }, 1000);

    },

    close: function () {

        $('.navmenu').slideUp();

        $("body").css({
            overflowY: ""
        });

    }



}



/////////////////

//pro  detail01 //

/////////////////



$('.product_nav').on('click', function () {

    $(this).toggleClass('open');

})



$(document).click(function (e) {

    if (!$('.product_nav ul').is(e.target) && $('.product_nav ul').has(e.target).length === 0) {

        $('.product_nav').removeClass('open');

    }

});



$('.product_nav li').on('click', function () {

    var elem = $(this).find('a').text();

    $('.product_nav ul>span a').text(elem);

})

$(window).resize(function () {

    $('.product_nav').removeClass('open');

});



$(document).ready(function () {

    $('.six').insertAfter(".product_nav ul li:nth-child(7)");

})



$('.product_info_buy_right ul').on('click', function () {

    $(this).toggleClass('open');

})

$('.product_info_buy_right ul li').on('click', function () {

    var elem = $(this).text();

    var elem2 = $(this).find('span').css('background-color');

    $('.product_info_buy_right ul>span').text('');

    $('.product_info_buy_right ul>span').append('<span></span>' + elem);

    $('.product_info_buy_right ul>span span').addClass('color').css('background-color', elem2);

})

$('.add').on('click', function () {

    var total = $('.num').text();

    total++;

    $('.num').text(total);

})

$('.sub').on('click', function () {

    var total = $('.num').text();

    if (total > 1) {
        total--;
    }

    $('.num').text(total);

})



if ($('.product').length > 0) {

    $('article>section:nth-child(2)').addClass('product_fixed');

}



if ($('.product_info_icon li').length > 16) {

    $('.product_info_icon ul').addClass('more')

}









$('.product_fixed').waypoint(function () {

    if ($('.product_nav.fixed').length > 0) {

        $('.product_nav').removeClass("fixed");

    } else {

        $('.product_nav').addClass("fixed");

    }

}, {

    offset: '0%'

});









///////////////////

//product search //

///////////////////




// 向下按鈕

$('.product_info_godown').on('click', function () {

    if (document.documentElement.scrollTop + document.body.scrollTop == 0) {

        $("html,body").animate({
            scrollTop: $("#product_info").offset().top - 110
        }, 500);

    } else {

        $("html,body").animate({
            scrollTop: $("#product_info").offset().top
        }, 500);

    }

});

$('.search_box_right li').click(function () {

    $(this).find('a').toggleClass('check');

});





$('.product_x').click(function () {

    $(this).parent().toggleClass('open');

});

$('.product_search_bottom a:first-child').click(function () {

    $('.open').removeClass('open');
    setTimeout(function () {
        $('.product_111 .pinner').each(function (index, element) {
            $(element).waypoint(function () {
                if ($(element).attr("class").indexOf("animated") > 0) {} 
                else {
                    switch (run_3n % 3 + 1) {
                        case 1:
                            $(element).addClass('animated fadeIn').removeClass('hide').find('.product_txt').addClass('delay-03s animated fadeIn');
                            run_3n++;
                            break;
                        case 2:
                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-06s animated fadeIn');
                            run_3n++;
                            break;
                        case 3:
                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-09s animated fadeIn');
                            run_3n++;
                            break;
                    }
                }
            }, {
                offset: '90%'
            });
        });
    }, 500);
});
var tooltipSlider = document.getElementById('slider-tooltips');
$('.product_search_bottom a:last-child').click(function () {

    $('.check').removeClass('check');

    tooltipSlider.noUiSlider.reset();

});



$('.product_nav li').click(function () {

    $(this).parent().find('a').removeClass('pick');

    $(this).find('a').toggleClass('pick');

});



$('.search_spec_right li div:first-child').click(function () {

    if ($(window).width() < 583) {

        $(this).toggleClass('on');

        $(this).next('div').slideToggle(500);

    }

});



$('.search_spec_left').click(function () {

    if ($(window).width() < 583) {

        $(this).toggleClass('on');

        $(this).next('div').slideToggle(500);

    }

});



$(window).resize(function () {

    $('.search_spec_right').css('display', '');

});





///////////////

//location //

//////////////



$('.location_inner .location_txt li ul div,.location_txt li  div ul>i').on('click', function () {

    $(this).parent().toggleClass('open');

})



$('.location_inner .location_txt li ul li').on('click', function () {

    if ($(this).parent().attr('class') == 'open') {} else {

        $(this).parent().toggleClass('open');

    }

})



$('.thenav ul').on('click', function () {

    if ($(window).width() < 767) {

        $(this).parent().toggleClass('open');

    }

})

$(window).resize(function () {

    $('.thenav.open').removeClass('open');

});



$('.thenav li').on('click', function () {

    var elem = $(this).find('a').text();

    $('.thenav ul>span a').text(elem);

})



$('.location_search i').on('click', function () {

    $(this).parent().toggleClass('open');

})



$('.thenav li').on('click', function () {

    $(this).parent().find('li').removeClass('pick');

    $(this).toggleClass('pick');

})



/////////
//faq //
////////



$('.faq_datil .faq_datil_qa ul li:first-child').on('click', function () {

    $(this).parent().toggleClass('open');

})



//////////////////
//   選單固定   //
///////////////////





beforeScrollTop = document.documentElement.scrollTop + document.body.scrollTop;

window.addEventListener('scroll', function () {

    var afterScrollTop = document.documentElement.scrollTop + document.body.scrollTop;



    if (beforeScrollTop > afterScrollTop) {

        $('.menuBar').addClass('menuFixed');

        $('.navbox').addClass('navboxFixed');

    } else {

        $('.menuBar').removeClass('menuFixed');

        $('.navbox').removeClass('navboxFixed');

    }



    beforeScrollTop = afterScrollTop;

    if (beforeScrollTop <= 1) {

        $('article').addClass('p_top');

        $('.menuBar').addClass('menuFixed');

        $('.navbox').addClass('navboxFixed');

    } else {

        $('article').removeClass('p_top');

    }



    if (beforeScrollTop < 1000) {

        $('.gotopfixed').css('display', '')

    } else {

        $('.gotopfixed').css('display', 'block')

    }

});



var bLazy = new Blazy({

    offset: 300,

    success: function (ele) {

        Waypoint.refreshAll();

    }

});





//////////////////

//  頁尾input   //

///////////////////



$(document).ready(function () {

    //下拉選單

    //下拉選單的收與放

    $('.footer-dropdown li').hide();

    /*打開下拉選單*/
    $('.footer-dropdown').each(function () {
        $(this).click(function () {
            $(this).toggleClass('open');
            $(this).find('li').slideToggle();
        });
    })

    /*收起下拉選單*/

    $(document).click(function (e) {

        if (!$('.footer-dropdown').is(e.target) && $('.footer-dropdown').has(e.target).length === 0) {

            $('.footer-dropdown li').slideUp();

            $('.footer-dropdown').removeClass('open');

        }

    });

    //下拉選單點擊後的文字更換

    $('.footer-dropdown li a').on('click', function () {

        var tt = $(this).text();

        $(this).closest('.footer-dropdown').find('span').addClass('clicked').text(tt);

        $(this).closest('.footer-dropdown').find('input').val(tt);

    });



});



/////////////////////

//   banner 輪播   //

////////////////////



$(document).ready(function () {



    $('.small_slick:not(.homebox0301)').slick({

        infinite: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: true,

        prevArrow: '<div class="prev-button icon-arrow-left"></div>',

        nextArrow: '<div class="next-button icon-arrow-right"></div>',

    });

    $('.homebox0301.small_slick').slick({

        infinite: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: true,

        autoplay: true,

        autoplaySpeed: 3000,

        pauseOnHover: false,

        prevArrow: '<div class="prev-button icon-arrow-left"></div>',

        nextArrow: '<div class="next-button icon-arrow-right"></div>',

    });

    if ($('.homebox01').length > 0) {

        $('.home_img').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            asNavFor: '.home_txt',

            arrows: true,

            autoplay: false,

            autoplaySpeed: 3000,

            pauseOnHover: false,

            prevArrow: '<div class="prev-button icon-teco_left"></div>',

            nextArrow: '<div class="next-button icon-teco_right"></div>',

        });

        setTimeout(function timeout() {

            $('.home_img').slick('slickPlay');

        }, 2000);



        $('.home_txt').slick({

            infinite: true,

            slidesToShow: 3,

            slidesToScroll: 1,

            centerMode: true,

            centerPadding: 0,

            arrows: false,

            asNavFor: '.home_img',

            focusOnSelect: true,

            responsive: [{

                breakpoint: 1200,

                settings: {

                    centerMode: false,

                    slidesToShow: 2,

                }

            }, {

                breakpoint: 768,

                settings: {

                    centerMode: true,

                    slidesToShow: 1,

                }

            }]

        });

        $('.homebox05 .home_style1_txt').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            asNavFor: '.homebox05 .home_style1_pic',

            dots: true,

            arrows: true,

            prevArrow: '<div class="prev-button icon-arrow-left"></div>',

            nextArrow: '<div class="next-button icon-arrow-right"></div>',

            responsive: [{

                breakpoint: 1400,

                settings: {

                    dots: false,

                }

            }]

        });

        $('.homebox05 .home_style1_pic').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            centerMode: true,

            centerPadding: 0,

            arrows: false,

            asNavFor: '.homebox05 .home_style1_txt',

        });

        $('.homebox05_ltr .home_style1_txt_ltr').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            asNavFor: '.homebox05_ltr .home_style1_pic_ltr',

            dots: true,

            arrows: true,

            prevArrow: '<div class="prev-button icon-arrow-left"></div>',

            nextArrow: '<div class="next-button icon-arrow-right"></div>',

        });

        $('.homebox05_ltr .home_style1_pic_ltr').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            centerMode: true,

            centerPadding: 0,

            arrows: false,

            asNavFor: '.homebox05_ltr .home_style1_txt_ltr',

        });

        $('.homebox06 .home_style2_txt').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            asNavFor: '.homebox06  .home_style2_pic',

            dots: true,

            arrows: true,

            prevArrow: '<div class="prev-button icon-arrow-left"></div>',

            nextArrow: '<div class="next-button icon-arrow-right"></div>',

            responsive: [{

                breakpoint: 1400,

                settings: {

                    dots: false,

                }

            }]

        });

        $('.homebox06 .home_style2_pic').slick({

            infinite: true,

            slidesToShow: 2,

            slidesToScroll: 1,

            arrows: false,

            asNavFor: '.homebox06  .home_style2_txt',

            responsive: [{

                breakpoint: 1400,

                settings: {

                    slidesToShow: 1,

                }

            }, {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                }

            }, {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                }

            }]

        });

        $('.homebox06_ltr .home_style2_txt_ltr').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            asNavFor: '.homebox06_ltr .home_style2_pic_ltr',

            dots: true,

            arrows: true,

            prevArrow: '<div class="prev-button icon-arrow-left"></div>',

            nextArrow: '<div class="next-button icon-arrow-right"></div>',

            responsive: [{

                breakpoint: 1400,

                settings: {

                    dots: false,

                }

            }]

        });

        $('.homebox06_ltr .home_style2_pic_ltr').slick({

            infinite: true,

            slidesToShow: 2,

            slidesToScroll: 1,

            arrows: false,

            asNavFor: '.homebox06_ltr .home_style2_txt_ltr',

            responsive: [{

                breakpoint: 1400,

                settings: {

                    slidesToShow: 1,

                }

            }, {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                }

            }, {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                }

            }]

        });

    }





    $('.product_small_slick').slick({

        infinite: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        dots: true,

        fade: true,

    });

    $('.product_featured_slick').slick({

        infinite: true,

        slidesToShow: 3,

        slidesToScroll: 3,

        dots: true,

        arrows: true,

        prevArrow: '<div class="prev-button icon-arrow-left"></div>',

        nextArrow: '<div class="next-button icon-arrow-right"></div>',

        responsive: [{

            breakpoint: 1200,

            settings: {

                arrows: false,

                slidesToShow: 2,

                slidesToScroll: 2,

            }

        }, {

            breakpoint: 600,

            settings: {

                arrows: false,

                slidesToShow: 1,

                slidesToScroll: 1,

            }

        }]

    });

    if ($('.product_info_slick').find("li").length > 3) {

        $('.product_info_slick').slick({

            infinite: true,

            slidesToShow: 3,

            slidesToScroll: 1,

            arrows: false,

            centerMode: true,

            centerPadding: 0,

            focusOnSelect: true,

            responsive: [{

                breakpoint: 600,

                settings: {

                    arrows: false,

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }]

        });

    } else if ($('.product_info_slick').find("li").length > 1) {

        $('.product_info_slick').addClass('product_info_slick_less').removeClass('product_info_slick');

        $('.product_info_slick_less').slick({

            infinite: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: false,

            centerMode: true,

            centerPadding: 0,

            focusOnSelect: true,

        });

    } else {

        $('.product_info_slick').addClass('product_info_slick_only').removeClass('product_info_slick')

    }



    $('.about_slick').slick({

        infinite: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: true,

        prevArrow: '<div class="prev-button icon-arrow-left"></div>',

        nextArrow: '<div class="next-button icon-arrow-right"></div>',

    });



    var bLazy = new Blazy({

        offset: 300,

        success: function (ele) {

            Waypoint.refreshAll();

        }

    });



    $('.small_slick').on('afterChange', function (event, slick, currentSlide) {

        bLazy.load($(this).find('img'))

    });

    $('.home_img').on('afterChange', function (event, slick, currentSlide) {

        bLazy.load($(this).find('img'))

    });

    $('.home_style1_pic,.home_style1_txt_ltr,.home_style2_pic,.home_style2_pic_ltr').on('afterChange', function (event, slick, direction) {

        bLazy.load($(this).find('img'))

    });

    $('.product_featured_slick').on('afterChange', function (event, slick, direction) {

        bLazy.load($(this).find('img'))

    });









});



//////////////////

//  瀑布流  //

///////////////////

$(document).ready(function () {

    if ($('.new_grid').size() > 0) {

        var $grid = $('.new_grid').masonry({

            itemSelector: '.grid-item',

            columnWidth: '.grid-sizer',

            percentPosition: true

        });

        $grid.imagesLoaded().progress(function () {

            $grid.masonry('layout');

        });

        var bLazy = new Blazy({

            success: function (ele) {

                $grid.masonry('layout');

            }

        });

    }

});



/////////////

//影片燈箱

////////////



$('._video').click(function (event) {

    event.preventDefault();

    var c = $('<div class="box-modal" id="exampleModal" />');

    var thevideo = $(this).attr('href');

    c.html('<video preload controls loop  autoplay="autoplay"><source src="' + thevideo + '"type="video/mp4" /></video></div>');

    c.prepend('<div class="box-modal_close swpmodal-close">&times;</div>');

    $.swpmodal({

        content: c,

        closeOnEsc: false,

        closeOnOverlayClick: false,

        overlay: {

            css: {

                backgroundColor: '#000',

                opacity: .75

            }

        }

    });



});

$('._youtube').click(function (event) {

    event.preventDefault();

    var c = $('<div class="box-modal" id="exampleModal" />');

    var thevideo = $(this).attr('href');

    c.html('<iframe  src="' + thevideo + '" frameborder="0" allowfullscreen><');

    c.prepend('<div class="box-modal_close swpmodal-close">&times;</div>');

    $.swpmodal({

        content: c,

        closeOnEsc: false,

        closeOnOverlayClick: false,

        overlay: {

            css: {

                backgroundColor: '#000',

                opacity: .75

            }

        }

    });

});







$('.teco_table').click(function () {



    $.swpmodal({

        type: 'ajax',

        url: $("base").attr("href") + '/Contact/form_table',

        afterLoadingOnShow: function (data, el) {},

        beforeClose: function (data, el) {



        }

    });

});



////////////////

// 動畫

/////////////////

var run_3n = 3;

var run_2n = 2;



//about

$(document).ready(function () {

    if ($('.about01').length > 0) {

        $('.about_nav').waypoint(function () {

            $('.about_nav .col-12').toggleClass("fixed");

        }, {

            offset: '0%'

        });

        $('.about_video').waypoint(function () {

            $('.about_nav .col-12 .col-3').removeClass("pick");

            $('.about_nav .col-12 .col-3:nth-child(1)').addClass("pick");

        }, {

            offset: '0%'

        });

        $('.about_motor').waypoint(function () {

            $('.about_nav .col-12 .col-3').removeClass("pick");

            $('.about_nav .col-12 .col-3:nth-child(2)').addClass("pick");

        }, {

            offset: '0%'

        });

        $('.about_had').waypoint(function () {

            $('.about_nav .col-12 .col-3').removeClass("pick");

            $('.about_nav .col-12 .col-3:nth-child(3)').addClass("pick");

        }, {

            offset: '0%'

        });

        $('.about_glory').waypoint(function () {

            $('.about_nav .col-12 .col-3').removeClass("pick");

            $('.about_nav .col-12 .col-3:nth-child(4)').addClass("pick");

        }, {

            offset: '0%'

        });



        $('.about .about01_txt  h4').addClass('delay-05s animated-slow fadeIn');

        $('.about .about01_txt  hr').addClass('delay-10s animated-slow fadeIn');

        $('.about .about01_txt  p').addClass('delay-15s animated-slow fadeIn');



        $('.about_video .col-12').addClass('hide');

        $('.about_video .col-12 h5').waypoint(function () {

            $('.about_video .col-12 img').addClass('animated fadeIn').removeClass('hide');

            $('.about_video .col-12 h5').addClass('delay-03s animated fadeIn').removeClass('hide');

            $('.about_video .col-12 hr').addClass('delay-06s animated fadeIn').removeClass('hide');

            $('.about_video .col-12 p,.about_video .col-12 ul').addClass('delay-09s animated fadeIn').removeClass('hide');



        }, {

            offset: '90%'

        });



        $('.about_motor>.col-12>.col-6,.about_had .col-12>div,.hadbox4 h3,.hadbox4 h5,.hadbox4 hr').addClass('hide');

        $('.about_motor>.col-12>.col-6,.about_had .col-12>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_2n % 2 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });

        $('.hadbox4 h3').waypoint(function () {

            $('.hadbox4 h3').addClass('animated fadeIn').removeClass('hide');

            $('.hadbox4 h5').addClass('delay-03s animated fadeIn').removeClass('hide');

            $('.hadbox4 hr').addClass('delay-06s animated fadeIn').removeClass('hide');

        }, {

            offset: '90%'

        });



        $('.glorybox0,.about_glory .col-12>div').addClass('hide');

        $('.glorybox0').waypoint(function () {

            $('.glorybox0').addClass('delay-06s animated fadeIn').removeClass('hide');

        }, {

            offset: '90%'

        });



        $('.about_glory .col-12>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_2n % 2 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });





    }

})







//home

$(document).ready(function () {

    if ($('.homebox01').length > 0) {



        $('.home_img_txt p').addClass('delay-05s animated-slow fadeIn');

        $('.home_img_txt h4').addClass('delay-10s animated-slow fadeIn');

        $('.home_img_txt a').addClass('delay-15s animated-slow fadeIn');



        $('.homebox02>ul,.homebox03>div,.homebox04>div>div,.homebox05>div,.homebox06>div').addClass('hide');

        $('.homebox02>ul,.homebox03>div,.homebox05>div,.homebox06>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_2n % 2 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });

        $('.homebox04>div>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_3n % 3 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide');

                            run_3n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide');

                            run_3n++;

                            break;

                        case 3:

                            $(element).addClass('delay-06s animated fadeIn').removeClass('hide');

                            run_3n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });

    }

});



//product_index

$(document).ready(function () {

    if ($('.product_index').length > 0) {



        $('.product_img_txt h4').addClass('delay-05s animated-slow fadeIn');

        $('.product_img_txt hr').addClass('delay-10 animated-slow fadeIn');

        $('.product_img_txt p').addClass('delay-15s animated-slow fadeIn');



        $('.product_index_collectin h4').addClass('delay-20s animated-slow fadeIn');

        $('.product_index_collectin p').addClass('delay-25s animated-slow fadeIn');



        $('.w100 .w50>div,.w100 .w33,.product_index_txt').addClass('hide');

        $('.w100>:not(div),.w100 .w50>:not(div)').parent().addClass('hide');

        $('.w100>:not(div)').waypoint(function () {

            $('.w100>:not(div)').parent().addClass('animated fadeIn').removeClass('hide').find('.product_index_txt')

                .addClass('delay-03s animated fadeIn');

        }, {

            offset: '90%'

        });

        $('.w100 .w50>:not(div)').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).parent().addClass('animated fadeIn').removeClass('hide')

                    .find('.product_index_txt').addClass('delay-03s animated fadeIn');

            }, {

                offset: '90%'

            });

        });

        $('.w100 .w50>div').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('delay-03s animated fadeIn').removeClass('hide')

                    .find('.product_index_txt').addClass('delay-06s animated fadeIn');

            }, {

                offset: '90%'

            });

        });

        $('.w100 .w33').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_3n % 3 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide')

                                .find('.product_index_txt').addClass('delay-03s animated fadeIn');

                            run_3n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide')

                                .find('.product_index_txt').addClass('delay-06s animated fadeIn');

                            run_3n++;

                            break;

                        case 3:

                            $(element).addClass('delay-06s animated fadeIn').removeClass('hide')

                                .find('.product_index_txt').addClass('delay-09s animated fadeIn');

                            run_3n++;

                            break;

                    }

                }

            }, {

                offset: '90%'

            });

        });

    }

});



//product_detail01



$(document).ready(function () {

    if ($('.product_1,.product_11,.product_111,.product_12').length > 0) {





        $('.pinner').addClass('hide');

        $('.animated,.fadeIn').removeClass('animated').removeClass('fadeIn');

        $('.product_inner_txt h4').addClass('delay-05s animated-slow fadeIn');

        $('.product_inner_txt hr').addClass('delay-10s animated-slow fadeIn');

        $('.product_inner_txt p').addClass('delay-15s animated-slow fadeIn');

        $('.product_nav').addClass('animated-slow fadeIn');

        $('.product_1 .pinner').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated fadeIn').removeClass('hide')

                    .find('.product_txt').addClass('delay-03s animated fadeIn');

            }, {

                offset: '90%'

            });

        });

        $('.product_11 .pinner').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_2n % 2 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-03s animated fadeIn');

                            run_2n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-06s animated fadeIn');

                            run_2n++;

                            break;

                    }

                }

            }, {

                offset: '90%'

            });

        });

        $('.product_111 .pinner').each(function (index, element) {
            $(element).waypoint(function () {
                if ($(element).attr("class").indexOf("animated") > 0) {} else {
                    switch (run_3n % 3 + 1) {
                        case 1:
                            $(element).addClass('animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-03s animated fadeIn');
                            run_3n++;
                            break;
                        case 2:
                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-06s animated fadeIn');
                            run_3n++;
                            break;
                        case 3:
                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-09s animated fadeIn');
                            run_3n++;
                            break;
                    }
                }
            }, {
                offset: '90%'
            });
        });

        $('.product_12 .pinner').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_3n % 3 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-03s animated fadeIn');

                            run_3n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-06s animated fadeIn');

                            run_3n++;

                            break;

                        case 3:

                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-09s animated fadeIn');

                            run_3n++;

                            break;

                    }

                }

            }, {

                offset: '90%'

            });

        });

    }

});



// product_detail02

$(document).ready(function () {

    if ($('.product_info').length > 0) {



        $('.product_info,.product_info_buy,.product_spec>div,.product_explore>*,.product_featured>div').addClass('hide');

        $('.product_info').waypoint(function () {

            $('.product_info_pic').addClass('animated-slow fadeIn').removeClass('hide');

            $('.product_info_txt').addClass('delay-03s animated-slow fadeIn').removeClass('hide');

            $('.product_info_other').addClass('delay-06s animated-slow fadeIn').removeClass('hide');

        }, {

            offset: '90%'

        });

        $('.product_info_buy').waypoint(function () {

            $('.product_info_buy').addClass('animated-slow fadeIn').removeClass('hide');

        }, {

            offset: '90%'

        });

        $('.product_spec>div').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated-slow fadeIn');

                $(element).removeClass('hide');

            }, {

                offset: '90%'

            });

        });

        $('.product_explore>*').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated-slow fadeIn').removeClass('hide');



            }, {

                offset: '90%'

            });

        });

        $('.product_featured>div').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated-slow fadeIn').removeClass('hide');

            }, {

                offset: '90%'

            });

        });

    }

})



//new

$(document).ready(function () {

    if ($('.new').length > 0) {



        $('.location_topnav h4').addClass('delay-05s animated-slow fadeIn');

        $('.location_topnav p').addClass('delay-10s animated-slow fadeIn');

        $('.new_nav ul').addClass('delay-15s animated-slow fadeIn');



        $('.location_topnav + section').addClass('delay-20s animated-slow fadeIn');

        $('.grid-item').addClass('hide');

        $('.grid-item').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_2n % 2 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide');

                            run_2n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });

    }

});

//faq

$(document).ready(function () {

    if ($('.faqbox01,.faqbox02 ').length > 0) {



        $('.faqbox01_txt h4').addClass('delay-05s  animated-slow fadeIn');

        $('.faqbox01_txt hr').addClass('delay-10s animated-slow fadeIn');

        $('.faqbox01_txt p').addClass('delay-15s animated-slow fadeIn');

        $('.faqbox02>h4').addClass('delay-20s animated-slow fadeIn');

        $('.faqbox02>p').addClass('delay-25s animated-slow fadeIn');

        $('.faqbox02_inner>div').addClass('hide');

        $('.faqbox02_inner>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_3n % 3 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-03s animated fadeIn');

                            run_3n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-06s animated fadeIn');

                            run_3n++;

                            break;

                        case 3:

                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-09s animated fadeIn');

                            run_3n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });



        $('.contact_inner>div').each(function (index, element) {

            $(element).waypoint(function () {

                if ($(element).attr("class").indexOf("animated") > 0) {} else {

                    switch (run_3n % 3 + 1) {

                        case 1:

                            $(element).addClass('animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-03s animated fadeIn');

                            run_3n++;

                            break;

                        case 2:

                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-06s animated fadeIn');

                            run_3n++;

                            break;

                        case 3:

                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')

                                .find('.product_txt').addClass('delay-09s animated fadeIn');

                            run_3n++;

                            break;

                    }

                }

            }, {

                offset: '80%'

            });

        });

    }

});

//faq_inner

$(document).ready(function () {

    if ($('.faq_nav').length > 0) {

        $('.location_topnav h4').addClass('delay-05s animated-slow fadeIn');

        $('.location_topnav p').addClass('delay-10s animated-slow fadeIn');

        $('.faq_nav ul').addClass('delay-15s animated-slow fadeIn');



        $('.location_topnav + section').addClass('delay-20s animated-slow fadeIn');



        $('.faq_datil').addClass('hide');

        $('.faq_datil').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated fadeIn').removeClass('hide');

            }, {

                offset: '80%'

            });

        });

    }

});

//location

$(document).ready(function () {

    if ($('.location_nav').length > 0) {

        $('.location_topnav h4').addClass('delay-05s animated-slow fadeIn');

        $('.location_topnav p').addClass('delay-10s animated-slow fadeIn');

        $('.location_nav ul').addClass('delay-15s animated-slow fadeIn');

        $('.location_topnav + section').addClass('delay-20s animated-slow fadeIn');



        $('.location').addClass('hide');

        $('.location').each(function (index, element) {

            $(element).waypoint(function () {

                $(element).addClass('animated fadeIn').removeClass('hide');

            }, {

                offset: '80%'

            });

        });

    }

});









/* 搜尋  新增JS樣式 */

$('.use_search').on('click', function () {

    $.swpmodal({

        type: 'ajax',

        url: '../../views/load/the_search.html',

        overlay: {

            block: undefined,

            tpl: '<div class="swpmodal-overlay"></div>',

            css: {

                backgroundColor: '#000',

                opacity: .6

            }

        },

        afterLoadingOnShow: function (data, el) {

            $('.search_ok').on('click', function () {

                //dosomething

            });

        },

    });

});

$(document).ready(function () {
    if ($('.search_page1').length > 0) {

        $('.search_page1 h4').addClass('delay-05s animated-slow fadeIn');

        $('.search_page1 p').addClass('delay-5s animated-slow fadeIn');

        $(".search_page2").addClass('delay-10s animated-slow fadeIn');

        $(".search_result").addClass('delay-15s animated-slow fadeIn');
    }

    // 引入隱私權政策
    privacy.open_click();
});


var privacy = {
    open_click: function () {
        $(".footernav li a").click(function () {
            if ($(this).text() == "隱私權政策") {
                $("body").append("<article class='privacyLibox'></article>")

                $.ajax({
                        url: '../../views/load/the_privacy.html',
                    })

                    .done(function (data) {
                        $(".privacyLibox").html(data);
                        privacy.all();
                    });
            }
        });
    },

    open: function () {
        $(".privacyLibox").addClass("open");
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "hidden",
                "padding-right": "1rem"
            });
        } else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function () {
        $(".privacyLibox .topNav .back").click(function () {
            privacy.close();
        });
    },

    close: function () {
        $(".privacyLibox").removeClass("open").addClass("close");
        if ($(window).width() > 1024) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0rem"
            });
        } else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            $(".privacyLibox").remove();
        }, 400);
    },

    countUp: function () {
        $(".privacyLibox .content ul li").each(function () {
            var i = $(this).index() + 1
            if (i < 10) {
                var i = "0" + i
            }
            $(this).find("h6").attr("data-numb", i);
        });
    },

    all: function () {
        privacy.open();
        privacy.close_click();
        privacy.countUp();
    }
}