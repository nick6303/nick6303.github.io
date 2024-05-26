a_slick = {
    support_page: function() {
        $('.a-media-list--left').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.a-media-list--right, .a-media-inner',
        })
        $('.a-media-list--right').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.a-media-list--left, .a-media-inner',
            arrows: false,
            // prevArrow: '<div class="a-btn-prev"><span></span></div>',
            // nextArrow: '<div class="a-btn-next"><span></span></div>',
        })
        $('.a-media-inner').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.a-media-list--left, .a-media-list--right',
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    prevArrow: '<div class="a-btn-prev"><span></span></div>',
                    nextArrow: '<div class="a-btn-next"><span></span></div>',
                }
            }, ]
        })
        $('.a-media-div .a-btn-prev').click(function(){
            $('.a-media-list--left').slick("slickPrev");
        });
        $('.a-media-div .a-btn-next').click(function(){
            $('.a-media-list--left').slick("slickNext");
        });
    },
    support_detail: function() {
        $('.a-media-list--100').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="a-btn-prev"><p>Previous</p><span></span></div>',
            nextArrow: '<div class="a-btn-next"><span></span><p>Next</p></div>',
        })
    }
}

a_btn = {
    support_page: function() {
        $('.a-openForm').click(function() {
            $('.a-table').stop().slideDown(1200);
        })
        $('.a-btnClose').click(function() {
            $('.a-table').stop().slideUp(1200);
        })
    }
}

a_waypoints = {
    eachscrollAnimation: function(local, addClass, long) {
        $(local).each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass(addClass);
            }, { offset: long });
        });
    },
    oneByOne: function(local, second, ani) {
        $(local).each(function(index, element) {
            var that = $(element);
            var x = index * second
            that.waypoint(function(direction) {
                setTimeout(function() {
                    that.addClass(ani);
                }, x);
            }, {
                offset: '90%'
            });
        });
    },
    support_page: function() {
        a_waypoints.eachscrollAnimation('.a-ani', 'in', '60%')
        a_waypoints.oneByOne('.a-card-list li', 350, 'in')
    }
}

/*Ajax lightBox*/
var a_lbox_checked = false;

function a_active_lbox() {

    var lbox_switch = $('.ajax_open');

    lbox_switch.on('click', function() {

        if (a_lbox_checked == false) {

            var a = $(this).attr('ajax-page');

            var b = $(this).attr('ajax-id');

            a_lbox_checked = true;

            var dist = $(window).scrollTop();

            a_lbox(a, b, dist);

            a_lock_bScroll();

        }

    });

}
//啟動lightbox
function a_lbox(lbox_page, lbox_id, dist) {

    $.ajax({
            url: lbox_page,
        })
        .done(function(data) {

            $("body").append("<article class='hide_lightbox " + lbox_id + "' data-dist='" + dist + "'></article>");

            $(".hide_lightbox").html(data);

            a_lbox_function();

            /*給燈箱一個 open 讓動畫作動*/
            if ($(".hide_lightbox").length > 0) {

                setTimeout(function() {

                    $(".hide_lightbox").addClass('open');

                }, 100);

            }
        })

}

function a_lbox_function() {

    //styleLightBox 燈箱
    if ($('.support').length > 0) {

        console.log('ajax open')
        a_slick.support_detail();
        a_lbox_close();

    }
}

function a_lbox_close() {

    var ajaxCloseBtn = $('.hide_lightbox .ajax_close');

    ajaxCloseBtn.on('click', function() {

        var dist = $(this).closest('.hide_lightbox').attr('data-dist');

        if (a_lbox_checked === true) {

            a_lbox_checked = false;

            $('.hide_lightbox').addClass('close');



            setTimeout(function() {

                $('.hide_lightbox').remove();
                unlock_bScroll();
                window.scrollTo(1, dist);
            }, 500);

        }

    });

}

function a_lock_bScroll() {

    var checkDevice = nickCheckDevice();

    var a = $(window).width();

    var b = window.screen.width;

    var body = $('body');

    var distance = $(window).scrollTop();

    if (checkDevice === false) {
        //pc
        body.css({
            'padding-right': '17px',
            'overflow-y': 'hidden'
        });

    } else {
        //行動裝置
        setTimeout(function() {

            body.css({
                'position': 'fixed',
                'overflow-y': 'hidden',
                'top': -(distance)
            });

        });
    }

    return distance;
}

$(document).ready(function() {

    var thisPage = $('body');

    // cgLoadin();

    if (thisPage.hasClass('support')) {
        a_slick.support_page();
        a_btn.support_page();
        a_active_lbox()
        a_waypoints.support_page();
    }

    console.log('support OK');

});