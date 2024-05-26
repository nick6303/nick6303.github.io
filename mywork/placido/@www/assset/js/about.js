$(document).ready(function() {
    // 點選scrolldown會往下捲動到content
    $('.scrolldown').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.banner').offset().top + $('.banner').height(),
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////
    $('.selectMenu').click(function() {
        $(this).toggleClass("open");
        $('.menu_list ul').fadeToggle(300);
        $('.menu_list_bg').css("overflow", "visible");
    });

    function aClick() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    }

    $('.menu_list ul li').click(function() {
        var selectMenu = $('.selectMenu');
        selectMenu.text($(this).find("a").text());
        aClick();
    });



    ////////////////////////////////////
    //           waypoint             //
    ////////////////////////////////////

    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '50%' });
    });



    // 滑動到row:first-child menu_list的第一個li底線
    var windowW = $(window)
    windowW.scroll(function() {

        menu_listWaypoint();


    });





    ////////////////////////////////////
    //     menu_list的click事件       //
    ////////////////////////////////////





    // 引入menu_list選單滑動事件

    menu_listScroll();

});





////////////////////////////////////
//      menu_list選單滑動事件     //
////////////////////////////////////

function menu_listScroll() {

    var row = document.querySelectorAll('.row')

    $('.menu_list ul li').click(function() {

        var i = $(this).prevAll().length;

        $("html,body").animate({
                // scrollTop定位
                scrollTop: $(row[i]).offset().top - $(window).height() / 2 + $(row[i]).height() / 2
            },
            // 動作時間
            1000, 'easeOutCubic');
    });

}





////////////////////////////////////
//       MENU_LIST的waypoint      //
////////////////////////////////////

function menu_listWaypoint() {

    var windowTop = $(window).scrollTop()

    // 啟動元素(PS:就是碰到它會啟動)
    var trigger = $('.row:first-child')

    var triggerOffsetTop = trigger.offset().top
    var trigger_margin = parseInt(trigger.css("margin-top"))
    var offset = trigger.height()

    if (triggerOffsetTop - trigger_margin - offset * .7 < windowTop) {
        $(".menu_list ul li:first-child").addClass("active");

    } else {
        $(".menu_list ul li:first-child").removeClass("active");
    }

    menu_listHover();


}



////////////////////////////////////
//     menu_list的hover事件       //
////////////////////////////////////

function menu_listHover() {

    $(".menu_list ul li").mouseover(function() {

        $(".menu_list ul li:first-child").removeClass("active");

    });


    $(".menu_list ul li").mouseout(function() {

        $(".menu_list ul li:first-child").delay(200).addClass("active");

    });

}




















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓placido內頁的js↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/about/placido.html',
    })
    .done(function(data) {
        $(".placido").html(data);
        placidoJs();
    })


function placidoJs() {

    // 點選關於柏拉圖開啟內頁

    $('#placido').click(function() {
        $('.placido').addClass('load');
        $('body').css('overflow', 'hidden');
        $('.placido .detail').css('overflow-y', 'auto');
        $(".placido .fixed_menu_bg").css("opacity", "1");
        setTimeout(function() {
            $('.placido').removeClass('load');
            $('.placido').addClass('on');
        }, 1000);
    });

    // 點選close關閉內頁
    $('.detail_close').click(function() {
        $('.placido').removeClass('on');
        $('.placido').addClass('off');
        $('.placido .detail').css('overflow-y', 'hidden');
        $(".placido .fixed_menu_bg").css("opacity", "0");
        setTimeout(function() {
            $('.placido .show').removeClass("show");
            $('.placido').removeClass('off');
            $('body').css("overflow", "auto");
            $(".placido .detail").animate({
                scrollTop: 0
            }, 0)
        }, 800);
    });


    // 點選back至最上方
    $(".detail_slideup").click(function() {
        $(".placido .detail").animate({
            scrollTop: 0
        }, 1000, 'easeOutCubic');
    });






    ////////////////////////////////////
    //    placido內頁的waypoint       //
    ////////////////////////////////////

    var lboxW = $('.placido .detail');

    lboxW.scroll(function() {

        placido_waypoint(lboxW);

    });








    ////////////////////////////////////
    //    引入detail_menu選單滑動事件 //
    ////////////////////////////////////

    placido_detail_menuScroll();
    placido_fixed_menuScroll();







    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////

    // detail_menu
    $('.placido .detail_menu .selectClick').click(function() {
        $(this).toggleClass("open");
        $('.placido .detail_menu ul').fadeToggle(300);
        $('.placido .detail_menu_bg').css("overflow", "visible");

        if ($(".placido .detail_slogan").css("overflow") == "visible") {

            $(".placido .detail_slogan").css("overflow", "hidden")

        } else {

            $(".placido .detail_slogan").css("overflow", "visible")
        }
    });

    $('.placido .detail_menu ul li').click(function() {
        $(".placido .detail_slogan").css("overflow", "hidden");
        placido_menuaClick();
    });


    // fixed_menu
    $('.placido .selectNav').click(function() {
        $(this).toggleClass("open");
        $('.placido .fixed_menu ul').fadeToggle(300);
        $('.placido .fixed_menu_bg').css("overflow", "visible");
    });

    $('.placido .fixed_menu ul li').click(function() {
        placido_menubClick();
    });
}




////////////////////////////////////
//      tab Menu to select        //
////////////////////////////////////

function placido_menuaClick() {
    var selectMenu = $('.placido .detail_menu .selectClick');
    if (selectMenu.hasClass('open')) {
        selectMenu.removeClass('open');
        $('.placido .detail_menu ul').fadeToggle(1);
    }
}

function placido_menubClick() {
    var selectMenu = $('.placido .selectNav');
    if (selectMenu.hasClass('open')) {
        selectMenu.removeClass('open');
        $('.placido .fixed_menu ul').fadeToggle(1);
    }
}




////////////////////////////////////
//      placido_waypoint           //
////////////////////////////////////



function placido_waypoint(data_o) {

    var windowHeight = $(window).height()
    var detail_closeHeight = $(".detail_close").height()

    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().top + detail_closeHeight < 0) {
            $(".placido .detail_nav").addClass("hide");
        } else { $(".placido .detail_nav").removeClass("hide"); }

    });

    // detail_nav浮動的waypoint
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().bottom < 0) { $(".placido .detail").addClass("fixed"); } else { $(".placido .detail").removeClass("fixed"); }

    });



    // placido_box內容的waypoint
    $(data_o).find('.placido_boxs ._img').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    $(data_o).find('.placido_boxs ul li').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    // culture_slide內容的waypoint
    $(data_o).find('.culture_slide').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });




    // culture_title內容的waypoint
    $(data_o).find('.culture_title').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });



    // culture_title內容的waypoint
    $(data_o).find('.culture_row>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });

    // culture_title內容的waypoint
    $(data_o).find('.detail_ft>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


}







//////////////////////////////
// detail_menu選單滑動事件  //
//////////////////////////////


function placido_detail_menuScroll() {

    var row = document.querySelectorAll('.placido .detail_content>*')

    var banner = $(".placido .detail_banner")

    $('.placido .detail_menu ul li').click(function() {

        var i = $(this).prevAll().length

        var y = $(row[i]).prevAll()



        // 總高度
        var ytotalHeight = 0;

        for (var a = 0; a < y.length; a++) {

            var yHeight = y[a].offsetHeight;

            var ytotalHeight = ytotalHeight + yHeight;
        }




        // 總margin-top值
        var yTotalMarginTop = 0

        for (var b = 0; b < y.length; b++) {

            var yMarginTop = parseInt($(y[b]).css("margin-top"))

            var yTotalMarginTop = yTotalMarginTop + yMarginTop
        }





        $(".placido .detail").animate({
                // scrollTop定位
                scrollTop: banner.height() + parseInt(banner.css("margin-top")) + ytotalHeight + yTotalMarginTop
            },
            // 動作時間
            1000, 'easeOutCubic');
    });



}


////////////////////////////
// fixed_menu選單滑動事件 //
////////////////////////////

function placido_fixed_menuScroll() {

    var row = document.querySelectorAll('.placido .detail_content>*')

    var banner = $(".placido .detail_banner")

    $('.placido .fixed_menu ul li').click(function() {

        var i = $(this).prevAll().length

        var y = $(row[i]).prevAll()

        // 總高度
        var ytotalHeight = 0;

        for (var a = 0; a < y.length; a++) {

            var yHeight = y[a].offsetHeight;

            var ytotalHeight = ytotalHeight + yHeight;
        }




        // 總margin-top值
        var yTotalMarginTop = 0

        for (var b = 0; b < y.length; b++) {

            var yMarginTop = parseInt($(y[b]).css("margin-top"))

            var yTotalMarginTop = yTotalMarginTop + yMarginTop
        }





        $(".placido .detail").animate({
                // scrollTop定位
                scrollTop: banner.height() + parseInt(banner.css("margin-top")) + ytotalHeight + yTotalMarginTop
            },
            // 動作時間
            1000, 'easeOutCubic');
    });
}



// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑placido內頁的js↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓hiland內頁的js↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/about/hiland.html',
    })
    .done(function(data) {
        $(".hiland").html(data);
        hilandJs();
    })


function hilandJs() {

    // 點選關於昌達開啟內頁

    $('#hiland').click(function() {
        $('.hiland').addClass('load');
        $('body').css('overflow', 'hidden');
        $('.hiland .detail').css('overflow-y', 'auto');
        $(".hiland .fixed_menu_bg").css("opacity", "1");
        setTimeout(function() {
            $('.hiland').removeClass('load');
            $('.hiland').addClass('on');
        }, 1000);
    });


    // 點選close關閉內頁
    $('.detail_close').click(function() {
        $('.hiland').removeClass('on');
        $('.hiland').addClass('off');
        $('.hiland .detail').css('overflow-y', 'hidden');
        $(".hiland .fixed_menu_bg").css("opacity", "0");
        setTimeout(function() {
            $('.hiland .show').removeClass("show");
            $('.hiland').removeClass('off');
            $('body').css("overflow", "auto");
            $(".hiland .detail").animate({
                scrollTop: 0
            }, 0, 'easeOutCirc')
        }, 800);
    });


    // 點選back至最上方
    $(".detail_slideup").click(function() {
        $(".hiland .detail").animate({
            scrollTop: 0
        }, 1000, 'easeOutCubic');
    });


    // hiland內頁的waypoint


    var lboxW = $('.hiland .detail');

    lboxW.scroll(function() {

        hiland_waypoint(lboxW);

    });







    ////////////////////////////////////
    //      license內頁               //
    ////////////////////////////////////




    if ($(window).width() > 1024) {



        $('.license ul li').click(function() {
            $('.license_slick_bg').addClass('open');

            var i = $(this).prevAll().length;

            $('.license_slick ul').slick('slickGoTo', i);
        });



        $('.license_slick ul').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            speed: 400,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        $(".license_slick .icon-arrow-left").click(function() {
            $('.license_slick ul').slick("getSlick").slickPrev();
        });

        $(".license_slick .icon-arrow-right").click(function() {
            $('.license_slick ul').slick("getSlick").slickNext();
        });



        $(".license_slick_close").click(function() {
            $('.license_slick_bg').addClass('close');
            $('.license_slick_bg').removeClass('open');
            setTimeout(function() {
                $('.license_slick_bg').removeClass('close');
            }, 1000);
        });

    }

    ////////////////////////////////////
    //      .history_slick            //
    ////////////////////////////////////


    $(".history_slick>ul").slick({
        lazyLoad: 'ondemand',
        arrows: false,
        speed: 400,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.history_slick_nav ul'
    });


    $(".history_slick_nav ul").slick({
        lazyLoad: 'ondemand',
        swipe: false,
        arrows: false,
        speed: 400,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40%',
        focusOnSelect: true,
        asNavFor: '.history_slick>ul',
        responsive: [{
            breakpoint: 1025,
            settings: {
                centerPadding: '39%'
            }
        }, {
            breakpoint: 400,
            settings: {
                centerPadding: '35%'
            }
        }]
    });



    $(".history_slick_nav ul li").click(function() {
        var text = $(this).find("p").text()
        $("._year p").text(text);

    });



    ////////////////////////////////////
    //    品質認證在手機板時變slick   //
    ////////////////////////////////////


    if ($(window).width() < 1025) {
        $('.license ul').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });

        $(".license .icon-arrow-left").click(function() {
            $('.license ul').slick("getSlick").slickPrev();
        });

        $(".license .icon-arrow-right").click(function() {
            $('.license ul').slick("getSlick").slickNext();
        });

    }





    ////////////////////////////////////
    //    引入detail_menu選單滑動事件 //
    ////////////////////////////////////

    hiland_detail_menuScroll();
    hiland_fixed_menuScroll();







    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////

    // detail_menu
    $('.hiland .detail_menu .selectClick').click(function() {
        $(this).toggleClass("open");
        $('.hiland .detail_menu ul').fadeToggle(300);
        $('.hiland .detail_menu_bg').css("overflow", "visible");

        if ($(".hiland .detail_slogan").css("overflow") == "visible") {

            $(".hiland .detail_slogan").css("overflow", "hidden")

        } else {

            $(".hiland .detail_slogan").css("overflow", "visible")
        }
    });

    $('.hiland .detail_menu ul li').click(function() {
        $(".hiland .detail_slogan").css("overflow", "hidden");
        hiland_menuaClick();
    });


    // fixed_menu
    $('.hiland .selectNav').click(function() {
        $(this).toggleClass("open");
        $('.hiland .fixed_menu ul').fadeToggle(300);
        $('.hiland .fixed_menu_bg').css("overflow", "visible");
    });

    $('.hiland .fixed_menu ul li').click(function() {
        hiland_menubClick();
    });

}


////////////////////////////////////
//      tab Menu to select        //
////////////////////////////////////

function hiland_menuaClick() {
    var selectMenu = $('.hiland .detail_menu .selectClick');
    if (selectMenu.hasClass('open')) {
        selectMenu.removeClass('open');
        $('.hiland .detail_menu ul').fadeToggle(1);
    }
}

function hiland_menubClick() {
    var selectMenu = $('.hiland .selectNav');
    if (selectMenu.hasClass('open')) {
        selectMenu.removeClass('open');
        $('.hiland .fixed_menu ul').fadeToggle(1);
    }
}

////////////////////////////////////
//      hiland_waypoint           //
////////////////////////////////////



function hiland_waypoint(data_o) {

    var windowHeight = $(window).height()
    var detail_closeHeight = $(".detail_close").height()

    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().top + detail_closeHeight < 0) {
            $(".hiland .detail_nav").addClass("hide");
        } else { $(".hiland .detail_nav").removeClass("hide"); }

    });

    // detail_nav浮動的waypoint
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().bottom < 0) {
            $(".hiland .detail").addClass("fixed");
        } else { $(".hiland .detail").removeClass("fixed"); }

    });



    // _hiland內容的waypoint
    $(data_o).find('._hiland>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    //story_slide內容的waypoint
    $(data_o).find('.story_slide').each(function(index) {

        var offset = $(this).height()
        // 因為story_slide的height是0 抓不到他的height 故用90
        if (this.getBoundingClientRect().top - windowHeight + 90 < 0) {

            $(this).addClass("show");
        }

    });



    //story_title內容的waypoint
    $(data_o).find('.story_title').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });




    //story_row內容的waypoint
    $(data_o).find('.story_row>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });

    //history內容的waypoint
    $(data_o).find('.history').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    //history內容的waypoint
    $(data_o).find('.certification>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .1 < 0) {

            $(this).addClass("show");
        }

    });


}


////////////////////////////////////
//   detail_menu選單滑動事件      //
////////////////////////////////////



function hiland_detail_menuScroll() {

    var row = document.querySelectorAll('.hiland .detail_content>*')

    var banner = $(".hiland .detail_banner")

    $('.hiland .detail_menu ul li').click(function() {

        var i = $(this).prevAll().length

        var y = $(row[i]).prevAll()



        // 總高度
        var ytotalHeight = 0;

        for (var a = 0; a < y.length; a++) {

            var yHeight = y[a].offsetHeight;

            var ytotalHeight = ytotalHeight + yHeight;
        }




        // 總margin-top值
        var yTotalMarginTop = 0

        for (var b = 0; b < y.length; b++) {

            var yMarginTop = parseInt($(y[b]).css("margin-top"))

            var yTotalMarginTop = yTotalMarginTop + yMarginTop
        }





        $(".hiland .detail").animate({
                // scrollTop定位
                scrollTop: banner.height() + parseInt(banner.css("margin-top")) + ytotalHeight + yTotalMarginTop
            },
            // 動作時間
            1000, 'easeOutCubic');
    });



}


function hiland_fixed_menuScroll() {

    var row = document.querySelectorAll('.hiland .detail_content>*')

    var banner = $(".hiland .detail_banner")

    $('.hiland .fixed_menu ul li').click(function() {

        var i = $(this).prevAll().length

        var y = $(row[i]).prevAll()

        // 總高度
        var ytotalHeight = 0;

        for (var a = 0; a < y.length; a++) {

            var yHeight = y[a].offsetHeight;

            var ytotalHeight = ytotalHeight + yHeight;
        }




        // 總margin-top值
        var yTotalMarginTop = 0

        for (var b = 0; b < y.length; b++) {

            var yMarginTop = parseInt($(y[b]).css("margin-top"))

            var yTotalMarginTop = yTotalMarginTop + yMarginTop
        }





        $(".hiland .detail").animate({
                // scrollTop定位
                scrollTop: banner.height() + parseInt(banner.css("margin-top")) + ytotalHeight + yTotalMarginTop
            },
            // 動作時間
            1000, 'easeOutCubic');
    });
}


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑placido內頁的js↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓technology內頁的js↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/about/technology.html',
    })
    .done(function(data) {
        $(".technology").html(data);
        technologyJs();
    })


function technologyJs() {
    // 點選關於柏拉圖開啟內頁

    $('#technology').click(function() {
        $('.technology').addClass('load');
        $('body').css('overflow', 'hidden');
        $('.technology .detail').css('overflow-y', 'auto');
        $(".technology .fixed_menu_bg").css("opacity", "1");
        setTimeout(function() {
            $('.technology').removeClass('load');
            $('.technology').addClass('on');
        }, 1000);
    });

    // 點選close關閉內頁
    $('.detail_close').click(function() {
        $('.technology').removeClass('on');
        $('.technology').addClass('off');
        $('.technology .detail').css('overflow-y', 'hidden');
        $(".technology .fixed_menu_bg").css("opacity", "0");
        setTimeout(function() {
            $('.technology .show').removeClass("show");
            $('.technology').removeClass('off');
            $('body').css("overflow", "auto");
            $(".technology .detail").animate({
                scrollTop: 0
            }, 0, 'easeOutCirc')
        }, 800);
    });


    // 點選back至最上方
    $(".detail_slideup").click(function() {
        $(".technology .detail").animate({
            scrollTop: 0
        }, 1000, 'easeOutCubic');
    });


    // technology內頁的waypoint


    var lboxW = $('.technology .detail');

    lboxW.scroll(function() {

        technology_waypoint(lboxW);

    });

}



////////////////////////////////////
//   technology內頁的waypoint     //
////////////////////////////////////

function technology_waypoint(data_o) {

    var windowHeight = $(window).height()
    var detail_closeHeight = $(".detail_close").height()

    // detail_nav先加入hide
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().top + detail_closeHeight < 0) {
            $(".technology .detail_nav").addClass("hide");
        } else { $(".technology .detail_nav").removeClass("hide"); }

    });

    // detail_nav浮動的waypoint
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().bottom < 0) {
            $(".technology .detail").addClass("fixed");
        } else { $(".technology .detail").removeClass("fixed"); }

    });





    //combination_img內容的waypoint
    $(data_o).find('.combination_img').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });





    //combination_img內容的waypoint
    $(data_o).find('.combination_text').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    //combination_img內容的waypoint
    $(data_o).find('.technology_row>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });



    //detail_ft內容的waypoint
    $(data_o).find('.detail_ft>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


}





// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑technology內頁的js↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


















// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓manufacturing內頁的js↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$.ajax({
        url: '../../view/layout/about/manufacturing.html',
    })
    .done(function(data) {
        $(".manufacturing").html(data);
        manufacturingJs();
    })


function manufacturingJs() {
    $('#manufacturing').click(function() {
        $('.manufacturing').addClass('load');
        $('body').css('overflow', 'hidden');
        $('.manufacturing .detail').css('overflow-y', 'auto');
        $(".manufacturing .fixed_menu_bg").css("opacity", "1");
        setTimeout(function() {
            $('.manufacturing').removeClass('load');
            $('.manufacturing').addClass('on');
        }, 1000);
    });

    // 點選close關閉內頁
    $('.detail_close').click(function() {
        $('.manufacturing').removeClass('on');
        $('.manufacturing').addClass('off');
        $('.manufacturing .detail').css('overflow-y', 'hidden');
        $(".manufacturing .fixed_menu_bg").css("opacity", "0");
        setTimeout(function() {
            $('.manufacturing .show').removeClass("show");
            $('.manufacturing').removeClass('off');
            $('body').css("overflow", "auto");
            $(".manufacturing .detail").animate({
                scrollTop: 0
            }, 0, 'easeOutCirc')
        }, 800);
    });


    // 點選back至最上方
    $(".detail_slideup").click(function() {
        $(".manufacturing .detail").animate({
            scrollTop: 0
        }, 1000, 'easeOutCubic');
    });



    // manufacturing內頁的waypoint


    var lboxW = $('.manufacturing .detail');

    lboxW.scroll(function() {

        manufacturing_waypoint(lboxW);

    });
}


////////////////////////////////////
//  manufacturing內頁的waypoint   //
////////////////////////////////////
function manufacturing_waypoint(data_o) {

    var windowHeight = $(window).height()
    var detail_closeHeight = $(".detail_close").height()

    // detail_nav先加入hide
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().top + detail_closeHeight < 0) {
            $(".manufacturing .detail_nav").addClass("hide");
        } else { $(".manufacturing .detail_nav").removeClass("hide"); }

    });

    // detail_nav浮動的waypoint
    $(data_o).find('.detail_banner').each(function(index) {

        if (this.getBoundingClientRect().bottom < 0) {
            $(".manufacturing .detail").addClass("fixed");
        } else { $(".manufacturing .detail").removeClass("fixed"); }

    });




    //process_text內容的waypoint
    $(data_o).find('.process_text').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * 1 < 0) {

            $(this).addClass("show");
        }

    });



    //process_start內容的waypoint
    $(data_o).find('.process_start').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .6 < 0) {

            $(this).addClass("show");
        }

    });


    //process_boxs內容的waypoint
    $(data_o).find('.process_boxs>*').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });


    //process_package內容的waypoint
    $(data_o).find('.process_package').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .6 < 0) {

            $(this).addClass("show");
        }

    });


    //space內容的waypoint
    $(data_o).find('.space').each(function(index) {

        var offset = $(this).height()

        if (this.getBoundingClientRect().top - windowHeight + offset * .5 < 0) {

            $(this).addClass("show");
        }

    });

}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑manufacturing內頁的js↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑