// $('.content_wrap').on('click', '.lboxBtn', function () {
//     var data = $(this).data('lbox');
//     lbox1.ajax(data);
// });
// 第一層
$('body').on('click', '.lboxBtn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lbox1');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('on');
            lboxStart1();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});

// 第二層
$('body').on('click', '.lboxBtn2', function () {
    var path = $(this).data('lbox');
    var src = $(this).find('img').attr('src');
    var lboxclass = $('.lbox2');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            $('.lboxPicture img').attr('src', src);
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});




// about的index
$('.about_box .txt,.about_box .img').each(function (index, element) {
    var that = $(element);
    that.waypoint(function (direction) {
        that.addClass('movein');
    }, {
            offset: '60%'
        });
});
$('.thebg').each(function (index, element) {
    var that = $(element);
    that.waypoint(function (direction) {
        that.addClass('movein');
    }, {
            offset: '60%'
        });
});


function lboxStart1() {
    $('.about_nav').on('click', 'li', function () {
        var x = $(this).prevAll().length;
        var p = $('#the_title');
        var y1 = $('.detail01');
        var y2 = $('.detail02');
        var y3 = $('.detail03');
        var y3tree = $('.detail_tree');
        switch (x) {
            case 0:
                y2.slideUp();
                y3.slideUp();
                y1.slideDown()
                y3tree.hide();
                $('.lbox__wrap').animate({ scrollTop: p.position().top }, { duration: 0, easing: 'easeInOutCirc' });
                reOpen = false
                break;
            case 1:
                y1.slideUp();
                y3.slideUp();
                y2.slideDown()
                y3tree.hide();
                $('.lbox__wrap').animate({ scrollTop: p.position().top }, { duration: 0, easing: 'easeInOutCirc' });
                reOpen = false
                aboutWaypoint2();
                break;
            case 2:
                y1.slideUp();
                y2.slideUp();
                y3.slideDown();
                y3tree.show();
                $('.lbox__wrap').scrollTop( p.position().top ) ;
                reOpen = true
                aboutWaypoint3();
                break;
            default:
                break;
        }
        Waypoint.refreshAll();
        re();
    })

    // $('.lboxBtn2').on('click', function () {
    //     // 修改喔
    //     var data = $(this).data('lbox');
    //     var src = $(this).find('img').attr('src')
    //     lbox2.ajaxop(data, "pic", src)
    // });

    var img5_wrap = $('.img5_wrap');
    var img5 = $('.img5');
    var img5s = $('.img5_img');
    var img5x = 0;
    var rrx;
    function rr() {
        rrx = setTimeout(function () {
            img5.click();
            rr()
        }, 3000);
    }
    rr();

    img5_wrap.on('click', function () {
        clearTimeout(rrx);
        img5x += 1;
        var x = img5x % 5 + 1
        var y = img5x * 72
        img5.css({ 'transform': 'rotate(' + y + 'deg)' })
        img5s.css({ 'transform': 'rotate(-' + y + 'deg)' })
        $('.img5_txt').hide();
        $('.img5_txt0' + x).show();
    })

    $('.certification').on('click', 'li.list', function () {
        var txtMore = $('.txtMore')

        if (!txtMore.hasClass('open')) {
            txtmore(txtMore, $(this))
        } else {
            txtMore.slideUp();
            txtMore.removeClass('open')
        }

    });

    $('.close').on('click', function () {
        var txtMore = $('.txtMore')
        txtMore.slideUp();
        txtMore.removeClass('open')
    });

    setTimeout(function () {
        aboutWaypoint1();
        aboutWaypoint();
        Waypoint.refreshAll();
    }, 100);

}


function txtmore(txtMore, that) {

    var img = that.find('img').attr('src')
    var h5 = that.find('h5').text();
    var h6 = that.find('h6').text();
    var p = that.find('p').text();
    var span = that.find('span').text();

    txtMore.find('img').attr('src', img)
    txtMore.find('h5').text(h5).show();
    txtMore.find('h6').text(h6).show();
    txtMore.find('p').text(p);
    txtMore.find('span').text(span);
    if (h5 == "") { txtMore.find('h5').hide(); }
    if (h6 == "") { txtMore.find('h6').hide(); }

    setTimeout(function () {
        var x = that;
        for (let i = 0; i < 3; i++) {
            if (x.next('.list').length) {
                if (x.position().top == x.next('.list').position().top) {
                    x = x.next('.list')
                } else {
                    $(txtMore).insertAfter(x)
                    txtMore.slideDown();
                    i = 3
                }
            } else {
                $(txtMore).insertAfter(x)
                txtMore.slideDown();
                i = 3
            }
        }
        txtMore.addClass('open')
        $('.lbox__wrap').animate({ scrollTop: txtMore.position().top }, { duration: 900, easing: 'easeInOutCirc' });
    }, 500);

}




// var lbox1 = new Plugin_lbox({ class: 'lbox1', start: lboxStart1 });
// var lbox2 = new Plugin_lbox({ class: 'lbox2', start: lboxStart });
//about 第一層
var wrapper = "<article class='lbox lbox1'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper);
//about 第二層
var wrapper2 = "<article class='lbox lbox2'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper2);


var reOpen = false;
function re() {
    // IE 沒作用
    var zz = true;
    if (!reOpen == false) {
        var scrollFunc = function (e) {
            e.preventDefault();
            e = e || window.e;
            var x = $('.on .lbox__wrap').scrollTop();
            var y = x - (e.deltaY ? e.deltaY : e.wheelDelta )  * 3

            if (zz) {
                zz = false;
                $(".on .lbox__wrap").animate({
                    scrollTop: y
                }, {
                        duration: 20, easing: 'easeInOutCirc', complete: function () {
                            zz = true;
                        }
                    }
                );
            }
        }
    } else {
        var scrollFunc = function (e) {
            console.log('沒事沒事')
        }
    }
    document.body.onmousewheel = scrollFunc

}
function lboxEnd() {
    var scrollFunc = function (e) {
        console.log('沒事沒事')
    }
    document.body.onmousewheel = scrollFunc
}

// 燈箱裡面的waypoint
function aboutWaypoint1() {

    $('.detail01_01 li').each(function (index, element) {
        $(element).waypoint({
            handler: function () {
                $(this.element).addClass('movein')
            },
            context: '.lbox__wrap',
            offset: '70%'
        });
    });

    $('.detail01_02,.detail01_03,.detail01_04').each(function (index, element) {
        var that = $(element);
        that.waypoint({
            handler: function () {
                $(this.element).addClass('movein')
            },
            context: '.lbox__wrap',
            offset: '70%'
        });
    });

    setTimeout(function () {
        Waypoint.refreshAll();
    }, 1000);
}

function aboutWaypoint2() {

    $('.detail02_01').waypoint({
        handler: function () {
            $(this.element).addClass('movein')
        },
        context: '.lbox__wrap',
        offset: '70%'
    });

    $('.detail02 .img,.detail02 .txt').each(function (index, element) {
        var that = $(element);
        that.waypoint({
            handler: function () {
                $(this.element).addClass('movein')
            },
            context: '.lbox__wrap',
            offset: '70%'
        });
    });

    setTimeout(function () {
        Waypoint.refreshAll();
    }, 1000);
}

function aboutWaypoint3() {
    $('.detail_tree li').each(function (index, element) {
        var that = $(element);
        that.waypoint({
            handler: function (direction) {
                $(this.element).toggleClass('movein')
            },
            context: '.lbox__wrap',
            offset: '10%'
        });
    });
    setTimeout(function () {
        Waypoint.refreshAll();
    }, 1000);
}

function aboutWaypoint() {

    $('.lbox_style_about_detail .title,.lbox_style_about_detail .nav_wrap').each(function (index, element) {
        var that = $(element);
        that.waypoint({
            handler: function (direction) {
                $(this.element).addClass('movein')
            },
            context: '.lbox__wrap',
            offset: '80%'
        });
    });

    if ($('.replebin').length) {

        setTimeout(function () {
            $('.replebin01 .img>div').each(function (index, element) {
                var that = $(element);
                that.waypoint({
                    handler: function (direction) {
                        $(this.element).addClass('movein')
                    },
                    context: '.lbox__wrap',
                    offset: '80%'
                });
            });
        }, 1000);

        $('.replebin01 .txt').each(function (index, element) {
            var that = $(element);
            that.waypoint({
                handler: function (direction) {
                    $(this.element).addClass('movein')
                },
                context: '.lbox__wrap',
                offset: '60%'
            });
        });

        $('.replebin02 .txt,.replebin02 .img').each(function (index, element) {
            var that = $(element);
            that.waypoint({
                handler: function (direction) {
                    $(this.element).addClass('movein')
                },
                context: '.lbox__wrap',
                offset: '60%'
            });
        });
    }
    if ($('.histochemistry').length) {
        setTimeout(function () {
            $('.histochemistry').waypoint({
                handler: function (direction) {
                    $(this.element).addClass('movein')
                },
                context: '.lbox__wrap',
                offset: '60%'
            });
        }, 1000);
    }

    if ($('.certification').length) {
        setTimeout(function () {
            $('.certification').waypoint({
                handler: function (direction) {
                    $(this.element).addClass('movein')
                },
                context: '.lbox__wrap',
                offset: '60%'
            });
        }, 1000);
    }
}