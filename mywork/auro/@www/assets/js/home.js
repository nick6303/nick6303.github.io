$('.banner_slick ul').on('init', function (slick) {
    var that = $(this);
    $(this).addClass('movein');
    setTimeout(function () {
        that.find('.slick-active').addClass('mmove');
    }, 1000);
});

$('.banner_slick ul').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).find('.slick-active').addClass('mmove').siblings().removeClass('mmove');
});

$('.banner_slick ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slick_dot_style_banner',
    appendDots: '.banner_dot',
});



$('.banner_home__down').on('click', function() {
    $('html, body').animate({ scrollTop: $('.content_wrap').offset().top }, { duration: 900, easing: 'easeInOutCirc' });
});



// var c8763 = true;
// $('.list_change li').on('click',function () {
//     if (!$(this).hasClass('focus')) {
//         $(this).addClass('focus').siblings().removeClass('focus');
//         if (c8763) {
//             c8763 = false;
//             var bg = $(this).data('bg');
//             var ibg = $('.inspiration_bg');
//             ibg.fadeOut(500);
//             setTimeout(function () {
//                 ibg.css('background-image', "url('" + bg + "')" ).fadeIn();
//                     c8763 = true;
//             }, 500);
//         }
//     }
// });

$('.home__inspiration').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    dots: false,
    arrows: false,
});
$('.home__inspiration').on('click','.list_change li',function () {
    var x = $(this).prevAll().length;
    $('.home__inspiration').slick('slickGoTo', x);
});


$('.home__story .title').waypoint(function (direction) {
    $(this.element).addClass('movein');
}, {
        offset: '80%'
    })

$('.home__story .storyBox').each(function (index, element) {
    $(element).waypoint(function (direction) {
        $(element).addClass('movein');
    }, {
            offset: '60%'
        });
});

$('.inspiration .txt').waypoint(function (direction) {
    $(this.element).addClass('movein');
}, {
        offset: '80%'
    })

$('.colorBlocks li').each(function (index, element) {
    var that = $(element);
    var x = index * 250
    that.waypoint(function (direction) {
        setTimeout(function () {
            that.addClass('movein');
        }, x);
    }, {
        offset: '90%'
    });
});

$('.home__story .title').waypoint(function (direction) {
    $(this.element).addClass('movein');
}, {
        offset: '80%'
    })

$('.home__living .title').waypoint(function (direction) {
    $(this.element).addClass('movein');
}, {
        offset: '80%'
    })

$('.home__living a').waypoint(function (direction) {
    $(this.element).addClass('movein');
}, {
        offset: '60%'
    })