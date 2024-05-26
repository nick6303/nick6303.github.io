
page.qanda = (function () {
    $('.txt').on('click', 'li .qanda_q', function () {
        var that = $(this).parent();
        if (that.hasClass('open')) {
        } else {
            that.find('.qanda_a').slideToggle()
            that.find('.qanda_q').slideToggle()
            that.addClass('open')
        }
    });
    $('.txt').on('click', 'li span', function () {
        var that = $(this).parent()
        if (that.hasClass('open')) {
            that.find('.qanda_a').slideToggle()
            that.find('.qanda_q').slideToggle()
            that.removeClass('open')
        } else {
            that.find('.qanda_a').slideToggle()
            that.find('.qanda_q').slideToggle()
            that.addClass('open')
        }
    });

    $('.qanda__inner>ul>li').each(function (index, element) {
        var that = $(element);
        that.waypoint(function (direction) {
            that.addClass('movein');
        }, {
                offset: '70%'
            });
    });
});

page.certification = (function () {
    $('.certification__inner').on('click', 'li .certification_q', function () {
        var that = $(this).parents('li');
        if (that.hasClass('open')) {
        } else {
            that.find('.certification_a').slideToggle()
            that.addClass('open')
        }
    });
    $('.certification__inner').on('click', 'li span', function () {
        var that = $(this).parent()
        if (that.hasClass('open')) {
            that.find('.certification_a').slideToggle()
            that.removeClass('open')
        } else {
            that.find('.certification_a').slideToggle()
            that.addClass('open')
        }
    });


    $('.certification__inner').waypoint(function (direction) {
        $(this.element).addClass('movein');
    }, {
            offset: '70%'
        });


});

page.catalog = (function () {
    $('#img_wrap li').each(function (e) {
        var inview = new Waypoint.Inview({
            element: $('#img_wrap .rpoint')[e],
            entered: function (direction) {
                txtin(e)
            },
            exit: function (direction) {
                txtout(e)
            }
        })
    })
    function txtin(e) {
        $('.txtfixed').removeClass('turnon')
        $('#txt' + e).addClass('turnon').prev().addClass('turnon')
    }
    function txtout(e) {
        $('#txt' + e).removeClass('turnon').prev().removeClass('turnon')
    }
});





page.commodities = (function () {
    $('.commodities__inner>ul>li').on('click', function () {
        var that = $(this)
        if (!that.hasClass('open')) {
            that.addClass('open');
            setTimeout(function () {
                that.find('.list').slideDown();
            }, 1000);
        }
    });
    $('.openvtn').on('click', function () {
        var that = $(this).parents('li')
        if (that.hasClass('open')) {
            that.find('.list').slideUp();
            setTimeout(function () {
                that.removeClass('open');
            }, 500);
        }
    });

    $('.search-btn').on('click', function () {
        $('.nav-search').addClass('nav-search--on');
    });
    $('.nav-search__btn-cancel').on('click', function () {
        $('.nav-search').removeClass('nav-search--on');
    });

    $('.commodities__inner>ul>li').each(function (index, element) {
        var that = $(element);
        that.waypoint(function (direction) {
            that.addClass('movein');
        }, {
                offset: '70%'
            });
    });


});



if ($('#commodities').length) {
    page.commodities();
}
if ($('#certification').length) {
    page.certification();
}
if ($('#catalog , #video').length) {
    page.catalog();
}
if ($('#qanda').length) {
    page.qanda();
}


$('.service_center_box>div').each(function (index, element) {
    var that = $(element);
    that.waypoint(function (direction) {
        that.addClass('movein');
    }, {
            offset: '60%'
        });
});

$('.service_center__video>div').each(function (index, element) {
    var that = $(element);
    that.waypoint(function (direction) {
        that.addClass('movein');
    }, {
            offset: '60%'
        });
});