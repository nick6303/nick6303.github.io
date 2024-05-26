page.product = (function () {
    $('.btns_s2').on('mouseenter', 'li', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('focus').siblings().removeClass('focus');
        }
    });

    var $product__nav_title = $('.product__nav .title');
    $product__nav_title.waypoint(function (e) {
        $product__nav_title.addClass('movein')
    }, {
            offset: '80%'
        });

    var $product__nav_ul = $('.product__nav ul');
    $product__nav_ul.waypoint(function (e) {
        $product__nav_ul.addClass('movein')
    }, {
            offset: '80%'
        });

    var $product__title = $('.product__title');
    $product__title.waypoint(function (e) {
        $product__title.addClass('movein')
    }, {
            offset: '100%'
        });

    var $product__inner = $('.product__inner>ul>li');
    $product__inner.each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('movein');
        }, {
                offset: '50%'
            });
    });

    var $product__more = $('.product__more');
    $product__more.waypoint(function (e) {
        $product__more.addClass('movein')
    }, {
            offset: '50%'
        });


})

page.product_category = (function () {
    $('.btns').on('mouseenter', 'li', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('focus').siblings().removeClass('focus');
        }
    });

    var $banner_noImg__title = $('.banner_noImg__title');
    $banner_noImg__title.waypoint(function (e) {
        $banner_noImg__title.addClass('movein')
    }, {
            offset: '100%'
        });

    var $product_category__inner = $('.product_category__inner>ul>li');
    $product_category__inner.each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('movein');
        }, {
                offset: '80%'
            });
    });

})

page.product_list = (function () {


    // 室內外
    $('.bothdoor').on('mouseenter', 'li', function () {
        if ($(this).hasClass('on')) {
        } else {
            $(this).addClass('on').siblings().removeClass('on')
        }
    })

    var $product_list__inner = $('.product_list__inner');
    $product_list__inner.on('mouseenter mouseleave', 'ul', function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        if (e.type == 'mouseenter') {
        } else {
            switch (direction) {
                case 0:
                    thetop = -theh
                    theleft = theleft
                    break;
                case 1:
                    thetop = thetop
                    theleft = $(this).width();
                    break;
                case 2:
                    thetop = thetop + theh
                    theleft = theleft
                    break;
                case 3:
                    thetop = thetop
                    theleft = -thew
                    break;
            }
            $thebg.css({
                top: thetop,
                left: theleft,
            })
            $(this).find('.on').removeClass('on');
        }
    });
    var thew
    var theh
    var thetop
    var theleft
    var $thebg = $('.thebg')
    var $product_list__inner = $('.product_list__inner');
    $product_list__inner.on('mouseenter click mouseleave', 'li', function (e) {
        $(this).addClass('on').siblings().removeClass('on')
        thew = $(this).width();
        theh = $(this).height();
        thetop = this.offsetTop
        theleft = this.offsetLeft
        var bg = $(this).data('bg')
        $thebg.css({
            height: theh,
            width: thew,
            top: thetop,
            left: theleft,
            background: bg,
        })
    });

})

// 三個
page.product_detail = (function () {

    var $product_banner = $('.banner_normal,.banner_feature,.banner_colorstory')
    $product_banner.imagesLoaded().always(function (instance) {
        $product_banner.waypoint(function (e) {
            $product_banner.addClass('movein')
        }, {
                offset: '100%'
            });
    });

    $('.product_rwd').on('click', function () {
        $(this).parent().toggleClass('open')
        $(this).prevAll('.product_rwd_hide').slideToggle()
    });

    var $product_rwd_hide = $('.product_rwd_hide')
    var $product_rwd = $('.product_rwd')
    $(window).resize(function () {
        if ($product_rwd.is(':visible')) {
            $product_rwd_hide.slideUp()
        } else {
            $product_rwd_hide.slideDown()
        }
        $('.open').removeClass('open')
    });

    $('.btns').on('mouseenter', 'li', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('focus').siblings().removeClass('focus');
        }
    });

});


// 商品特色
page.product_detail_info = (function () {

    if ($('.feature').length > 0) {
        $(window).resize(function () {
            video_rwd()
        });
        video_rwd()

        function video_rwd() {
            if ($('.feature .img').length > 0) {
                var video_wrap = $('.feature .img').css("width").match(/\d+/);
                var video_x = $('.feature .img iframe').attr("width");
                var video_y = $('.feature .img iframe').attr("height");
                $('.feature .img iframe').attr("width", video_wrap);
                $('.feature .img iframe').attr("height", video_wrap / video_x * video_y)
            }
        }

        $('.feature .circle--video_play').on('click', function () {
            $(this).css({ 'transform': 'scale(1.25)', 'opacity': '0', 'transition': '0.5s' });
            var that = $(this)
            that.parent().siblings("iframe")[0].src += "&autoplay=1";
            setTimeout(function () {
                that.parent().fadeOut()
            }, 500);
        });
    }

    $('.ingredient').on('click', '.circle--product_q', function () {
        var x = $(this).offset();
        var wsmall = x.left + 50 + 700 > $(window).width()
        var that = $('.name_info__wrap')
        if (!wsmall) {
            that.css({
                top: x.top + 20 - that.height() / 2,
                left: x.left + 50,
            }).fadeIn();
        } else {
            that.css({
                top: x.top + 50,
                left: '50%',
                transform: 'translateX(-50%)'
            }).fadeIn();
        }
    });

    $('.name_info__close').on('click', function () {
        $(this).parents('.name_info__wrap').fadeOut();
    })

    var $banner_introduction = $('.banner_introduction')
    $banner_introduction.waypoint(function (e) {
        $banner_introduction.addClass('movein')
    }, {
            offset: '100%'
        });

    var $product_detail__box = $('.product_detail__box');
    $product_detail__box.each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('movein');
        }, {
                offset: '80%'
            });
    });

    var $list1 = $('.list1>ul>li');
    $list1.each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('movein');
        }, {
                offset: '80%'
            });
    });



});

// 最後兩個區塊 + 下拉選單
page.product_detail_more = (function () {
    $(document).ready(function () {
        var $dropdown_nature = $(".dropdown_capacity");
        $dropdown_nature.select2({
            minimumResultsForSearch: Infinity,
            theme: "dropdownB",
            width: "100%"
        });
        var $dropdown_nature = $(".dropdown_quantity");
        $dropdown_nature.select2({
            minimumResultsForSearch: Infinity,
            theme: "dropdownB",
            width: "100%"
        });
    });

    if ($('.recommand_slick>ul>li').length > 3) {
        $('.recommand_slick>ul').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            infinite: true,
            dots: false,
            arrows: true,
            prevArrow: '<div class="recommand_slick__prev"><span></span></div>',
            nextArrow: '<div class="recommand_slick__next"><span></span></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20px',
                    }
                }]
        });
    }else{

    }

    $('.cases_slick>ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<div class="cases_slick__prev"><span></span></div>',
        nextArrow: '<div class="cases_slick__next"><span></span></div>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '10px',
            }
        }]
    });

    var $recommand = $('.recommand')
    $recommand.waypoint(function (e) {
        $recommand.addClass('movein')
    }, {
            offset: '80%'
        });
    var $cases = $('.cases')
    $cases.waypoint(function (e) {
        $cases.addClass('movein')
    }, {
            offset: '80%'
        });

});



page.product_colorstory = (function () {

    //背景rwd 
    setTimeout(function () {
        kit.bLazyBg();
    }, 0);

    $('.banner_colorstory__img ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        dots: true,
        dotsClass: 'slick_dot_style',
        appendDots: '.colorstory_dot',
        arrows: false,
    });

    var $colorstory__inner = $('.colorstory__inner>div');
    $colorstory__inner.each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('movein');
        }, {
                offset: '80%'
            });
    });

});

page.product_feature = (function () {

    $('.banner_feature__img ul').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        dots: true,
        dotsClass: 'slick_dot_style',
        appendDots: '.feature_dot',
        arrows: false,
    });

});

page.product_normal = (function () {

    $('.banner_normal__img ul').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        dots: true,
        dotsClass: 'slick_dot_style',
        appendDots: '.normal_dot',
        arrows: false,
    });
});





if ($('#product').length) {
    page.product();
}
if ($('#product_category').length) {
    page.product_category();
}
if ($('#product_list').length) {
    page.product_list();
}
if ($('#product_colorstory').length) {
    page.product_detail();
    page.product_colorstory();
    page.product_detail_more();
}
if ($('#product_feature').length) {
    page.product_detail();
    page.product_feature();
    page.product_detail_info();
}
if ($('#product_normal').length) {
    page.product_detail();
    page.product_normal();
    page.product_detail_info();
    page.product_detail_more();
}













