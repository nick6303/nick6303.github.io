$(document).ready(function() {

    // .banner的slick
    $('.banner_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
    });

    $(".banner .icon-arrow-left").click(function() {
        $('.banner_slick ul').slick("getSlick").slickPrev();
    });

    $(".banner .icon-arrow-right").click(function() {
        $('.banner_slick ul').slick("getSlick").slickNext();
    });






    // .style的slick
    $('.style_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: false,
        asNavFor: '.style_slick_nav_bg>ul'
    });

    $("._style .icon-arrow-left").click(function() {
        $('.style_slick ul').slick("getSlick").slickPrev();
    });

    $("._style .icon-arrow-right").click(function() {
        $('.style_slick ul').slick("getSlick").slickNext();
    });



    $('.style_slick_nav_bg>ul').slick({
        lazyLoad: 'ondemand',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        asNavFor: '.style_slick ul',
        swipe: false
    });


    // .style_slick選單
    $('.style_slick_nav ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        focusOnSelect: true,
        speed: 1000,
        infinite: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                centerMode: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                dots: false,
                focusOnSelect: false,
                dots: false
            }

        }]

    });


    if ($(window).width() < 1025) {
        $('.style_slick ul').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".slick-active .style_slick_nav").find("ul li:first-child").delay(1000).addClass("slick-center");
            $('.slick-active .style_slick_nav').find("ul").slick('slickGoTo', 0);
        });
    }




    // .story的slick
    $('.story_slick ul').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
    });




    // 點選scrolldown會往下捲動到style
    $('.scrolldown').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('._style').offset().top,
            },
            // 動作時間
            1000, 'easeOutCubic');
    });



    // 點選BRAND STORY會往下捲動到story
    $('.style_slidedown').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.story').offset().top
            },
            // 動作時間
            1000, 'easeOutCubic');
    });



    // 點選MORE INFORMATION會往下捲動到video
    $('.story_down').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.video').offset().top,
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    $('#video').click(function() {
        $('.video_libox').addClass('open');
        $("body").css("overflow", "hidden");
    });

    $('.libox_close').click(function() {
        $('.video_libox').removeClass('open');
        $('.video_libox').addClass('close');
        $("body").css("overflow", "auto");
        setTimeout(function() {
            $('.video_libox').removeClass('close');
        }, 1000);
    });





    //style waypoiny
    $("._style").waypoint(function() {
        $("._style").addClass("show");

    }, {
        offset: '50%'
    });


    //story waypoiny
    $(".story").waypoint(function() {
        $(".story").addClass("show");
        setTimeout(function() {
            $('.story .slick-track>*').each(function(index, element) {
                if ($(element).find(".story_slick_img").height() > $(element).find(".story_slick_img").find("img").height()) {
                    $(element).find(".story_slick_img").find("img").css("width", "auto");
                    $(element).find(".story_slick_img").find("img").css("height", "100%");
                }
            });
        }, 100);
    }, {
        offset: '50%'
    });


    //video waypoiny
    // $('.video>*').each(function(index, element) {
    //     $(element).waypoint(function() {
    //         $(element).addClass('show');
    //     }, { offset: '80%' });
    // });




    // 當row_video內的圖片高度比row_video小  圖片自適應期高度
    var bLazy = new Blazy({
        validateDelay: 0,
        success: function(ele) {
            $(ele).parent().parent().parent().parent().addClass("show");
            if ($(ele).height() < $(ele).parent().height()) {
                $(ele).css("width", "auto");
                $(ele).css("height", "100%");
            }
        }
    });


});