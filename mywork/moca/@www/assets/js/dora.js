//dora js

//各單元頁面 執行的地方
$(document).ready(function() {

    var thisPage = $('body').attr('id');

    //進場
    cgLoadin();

    if (thisPage == 'about') {
        ajaxBody.detect();
        //綁定按鈕 跟 受體
        ajaxContent.active('.mocaSNav', '.doraPageBody');
        //
        mocaSNav.active();
        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });
    }

    if (thisPage == 'card') {
        ajaxBody.detect();
    }

    // console.log('dora OK');

});

ajaxBody.about = function() {
    var a = $('.doraPageBody').attr('data-page');
    about.all();
    switch (a) {
        case 'about':
            // console.log('123');
            break;
        case 'curator':
            // console.log('456');
            about_curator.all();
            break;
        case 'history':
            // console.log('789');
            about_history.all();
            break;
        default:
            break;
    }
}

ajaxBody.card = function() {
    var a = $('.doraPageBody').attr('data-page');
    about.all();
    switch (a) {
        case 'card':
            // console.log('789');
            card.all();
            break;
        default:
            break;
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// dora.js

var about = {
    blazy: function() {
        var bLazy = new Blazy({
            selector: 'img',
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    waypoint: function() {
        waypoing_set('.titleSec', '70%');

        waypoing_set('.mocaPageBody', '90%');

        waypoing_set('.doraYes > *', '90%');

        waypoing_set('.doraNo .box', '90%');

        waypoing_set('.yearSlick', '90%');

        waypoing_set('.listDiv .list', '90%');

        waypoing_set('.itemDiv .up li', '90%');
    },
    all: function() {
        about.blazy();
        about.waypoint();
    }
}

var about_history = {
    historySlick: function() {
        var obj = $('.doraPageBody_history .yearSlick ul');
        obj.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            obj.closest('.yearSlick').find('.line').removeClass('open');
        });
        obj.on('afterChange', function(event, slick, currentSlide) {
            obj.closest('.yearSlick').find('.line').addClass('open');
        });
        obj.slick({
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            draggable: false,
            focusOnSelect: true,
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            appendArrows: '.doraPageBody_history .yearSlick ul',
            prevArrow: '.yearSlick .arrowPre',
            nextArrow: '.yearSlick .arrowNext',
            responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            }, ]
        });
    },
    all: function() {
        about_history.historySlick();
    }
}

var about_curator = {
    click: function() {
        $('.doraPageBody_curator .switchSec').on('click', 'li', function() {
            var sec = '.' + $(this).attr('data-open');
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parents('.doraPageBody_curator').find(sec).addClass('back active').siblings().removeClass('back active');

            about.blazy();
        })
    },
    itemDiv: function() {
        $('.itemDiv ul li').each(function() {
            var ele = $(this)
            if (ele.hasClass('close') && ele.next().hasClass('close')) {
                ele.addClass('continuous');
            }
        })
    },
    all: function() {
        about_curator.itemDiv();
        about_curator.click();
    }
}

var card = {
    switch: function() {


        $('.switchbox').on('click', "li", function() {
            var ele = $(this),
                orindex = ele.siblings('.active').index() - 1,
                index = ele.index() - 1,
                isitem = ele.parents('.banner').siblings('.content').find('.items'),
                items = isitem.eq(index),
                top = $('.switchbox').offset().top;

            ele.addClass('active').siblings().removeClass('active');

            if (ele.hasClass('overview')) {
                ele.addClass('active').siblings().removeClass('active');
                isitem.removeClass('only tocenter fadeOut').addClass('animated fadeIn');
            } else {
                items.siblings().removeClass('only').addClass('animated fadeOut tocenter');
                setTimeout(function() {
                    items.addClass('only').removeClass('fadeOut tocenter');
                    $("html,body").animate({
                        scrollTop: top
                    }, 800, 'easeOutCubic');
                }, 500)
            }
        });

        $('.content>div').on('click', "a:not('.only')", function() {
            var ele = $(this);
            var index = ele.index() + 1;
            var items = ele.parents('.content').siblings('.banner').find('li').eq(index);
            items.click();
        });

        $(".goTop").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 800, 'easeOutCubic');
        });
    },
    all: function() {
        card.switch();
    }
}