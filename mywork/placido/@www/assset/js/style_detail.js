$(document).ready(function() {
    // click
    detail_click.scrolldown();

    // slick
    detail_slick.banner_slick();
    detail_slick.banner_slick_nav();


    // waypoint
    waypoint.other_style_title();
    waypoint.other_style_row();
    waypoint.back_style();

    // ajax
    ajax.product_detail_inf();
});




detail_click = {
    scrolldown: function() {
        $(".scrolldown").click(function() {
            $("html,body").animate({
                    // scrollTop定位
                    scrollTop: $('.other_style').offset().top,
                },
                // 動作時間
                1000, 'easeOutCubic');
        });
    }
}



detail_slick = {


    banner_slick: function() {
        $(".banner_slick>ul").slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            dots: true,
            infinite: false,
            arrows: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    asNavFor: '.banner_slick_nav_bg'
                }
            }]
        })

        $(".banner_slick .icon-arrow-left").click(function() {
            $('.banner_slick>ul').slick("getSlick").slickPrev();
        });

        $(".banner_slick .icon-arrow-right").click(function() {
            $('.banner_slick>ul').slick("getSlick").slickNext();
        });



        $('.banner_slick>ul').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".banner_slick_nav.slick-active").find("ul li:first-child").delay(1000).addClass("slick-center");
            $('.banner_slick_nav.slick-active').find("ul").slick('slickGoTo', 0);
        });


    },

    banner_slick_nav: function() {
        $(".banner_slick_nav_bg").slick({
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    infinite: false,
                    arrows: false,
                    asNavFor: '.banner_slick>ul',
                    swipe: false,
                }
            }]
        });

        $(".banner_slick_nav ul").slick({
            responsive: [{
                breakpoint: 1025,
                settings: {
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    infinite: false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "30%",
                    focusOnSelect: true,
                }
            }]
        });



    }

}

waypoint = {

    other_style_title: function() {
        $(".other_style_title").waypoint(function() {
            $(".other_style_title").addClass("show")
        }, { offset: '80%' });
    },


    other_style_row: function() {
        $('.other_style_row>*').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '50%' });
        });

    },
    back_style: function() {
        $(".back_style").waypoint(function() {
            $(".back_style").addClass("show")
        }, { offset: '80%' });
    }
}



ajax = {

    product_detail_inf: function() {
        $.ajax({
                url: '../../view/layout/product/product_detail_inf.html',
            })
            .done(function(data) {
                $(".product_detail_inf").html(data);


                product_detail_inf.all();
            });

    }

}