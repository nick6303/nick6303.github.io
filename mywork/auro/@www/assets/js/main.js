var global = {
    header: new Object,
    // 前端  == true
    // 後端  == false
    // user: true
    user: true
}

var kit = {}
var page = {}

var jsReady = (function () {
    var ajax = function () {
        $.ajax({
            url: '../../views/layout/header.html',
        })
            .done(function (data) {
                $("#header").html(data);
                runHeader();
            })
        $.ajax({
            url: '../../views/layout/footer.html',
        })
            .done(function (data) {
                $("#footer").html(data);
                runFooter();
            })
    }
    var runHeader = function () {
        // console.log("header")
        global.header = $('.header_fixed')
    }
    var runFooter = function () {
        // console.log("footer")
        $('.footer__gotop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, { duration: 900, easing: 'easeInOutCirc' });
        });

    }

    var runAll = function () {
        runHeader();
        runFooter();
    }
    return {
        ajax: ajax,
        runAll: runAll
    }
})()

if (global.user) {
    jsReady.ajax();
} else {
    jsReady.runAll();
}




kit.blazy = (function () {
    var bLazy = new Blazy({
        loadInvisible: true,
        offset: 1000,
        success: function (ele) {
            if ($(ele).parents('.banner__img').length) {
                $(ele).parents('.banner__img').addClass('enter')
            }
        }
    });
    return bLazy
})()

// 背景自製b-lazy
// 只有分第一次螢幕大小而已
kit.bLazyBg = (function () {
    var bLazyBg = function () {
        var x = $('.bLazyBg')
        if ($(window).width() > 1024) {
            x.each(function () {
                var y = $(this).data('src')
                $(this).css({
                    'background-image': 'url("' + y + '")'
                }).addClass('bLazyBgOk');
            })
        } else {
            x.each(function () {
                var y = $(this).data('src-small')
                $(this).css({
                    'background-image': 'url("' + y + '")'
                }).addClass('bLazyBgOk');
            })
        }
    }
    return bLazyBg
})()


// waypoint
kit.waypoint = (function () {

    if ($('.nav_wrap').length) {
        var $waypoint = $('.nav_wrap');
        $waypoint.waypoint(function (e) {
            $waypoint.addClass('movein')
        }, {
                offset: '100%'
            });
    }
    return $waypoint
})()

kit.nicescroll = (function () {
    if ($('main .navbit').length) {
        var navbit = $("main .navbit").niceScroll("main .navbit>ul",
            {
                cursorcolor: "#000",
                cursoropacitymax: "0",
            }
        );
    }
})()





kit.stopscroll = (function () {
    function MouseWheel(e) {
        $('html, body').stop();
    }
    if ('onmousewheel' in window) {
        window.onmousewheel = MouseWheel;
    } else if ('onmousewheel' in document) {
        document.onmousewheel = MouseWheel;
    } else if ('addEventListener' in window) {
        window.addEventListener("mousewheel", MouseWheel, false);
        window.addEventListener("DOMMouseScroll", MouseWheel, false);
    }
})()




// 向上向下滾
kit.scrollupdown = (function () {
    var scroll = function () {
        var beforeScrollTop = document.body.scrollTop;
        window.addEventListener("scroll", function () {
            var afterScrollTop = document.body.scrollTop + document.documentElement.scrollTop,
                delta = afterScrollTop - beforeScrollTop;
            if (delta === 0) return false;
            fn(afterScrollTop > $(window).height() / 2, delta > 0);
            beforeScrollTop = afterScrollTop;
        }, false);
    }

    var fn = function (x, y) {
        // x 是螢幕過半 Y 上下
        if (x) {
            if (y) {
                global.header.removeClass('header_fixed--fixed-in')
            } else {
                global.header.addClass('header_fixed--fixed-in')
            }
        } else {
            global.header.removeClass('header_fixed--fixed-in')
        }
    }
    return scroll;
})()
setTimeout(function () {
    kit.scrollupdown();
}, 1000);


// news && talktoauro

function lboxStart() {


    if ($('.lbox_style_news').length) {
        $('.slick_style_lboxA ul').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            dotsClass: 'slick_dot_style',
            appendDots: '.slick_style_lboxA_dot',
            arrows: false,
        });
    }

    if ($('.lbox .recommand_slick>ul>li').length > 3) {
        $('.lbox .recommand_slick>ul').slick({
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

    if ($('.lbox_style_talktoauro').length) {
        setTimeout(function () {
            kit.bLazyBg();
        }, 0);
    }

    // 燈箱都要的js
    $('.btns_lbox').on('mouseenter', 'li', function () {
        if (!$(this).hasClass('focus')) {
            $(this).addClass('focus').siblings().removeClass('focus');
        }
    });

    if ($('.memberterms_wrap').length) {
        $(".txt_wrap").niceScroll(".txt", {
            cursorcolor: '#1b41a2',
            cursorwidth: '5px',
            cursorborderradius: '0px',
        });
    }

    if ($('ul.list').length) {
        $('ul.list').on('mouseenter', 'li', function () {
            if (!$(this).hasClass('focus')) {
                $(this).addClass('focus').siblings().removeClass('focus');
            }
        });
    }
    if ($('#search').length) {
        $('#search .recommand__btn').on('mouseenter', 'li', function () {
            if (!$(this).hasClass('focus')) {
                $(this).addClass('focus').siblings().removeClass('focus');
            }
        });
    }

    if ($(".dropdown_vip").length) {
        var dropdown_vip = $(".dropdown_vip");
        dropdown_vip.each(function () {
            var x = $(this).data('placeholder') || "";
            $(this).select2({
                placeholder: x,
                minimumResultsForSearch: Infinity,
                theme: "dropdownC",
                width: "100%",
            });
        });
    }

    // conversion
    if ($('.lbox_conversion').length) {

        $(".space_size").niceScroll({
            cursorcolor: '#1b41a2',
            cursorwidth: '5px',
            cursorborderradius: '0px',
            cursoropacitymin: '1',
            autohidemode: 'false'
        });
        $(".lbox_conversion .left>div").on('click', function () {

            if (!$(this).hasClass('focus')) {
                var data = $(this).data('lbox');
                // lboxConversionVip.ajaxop(data);

                var x = $(this).attr('class') + '';
                $(this).addClass('focus').siblings().removeClass('focus');
                if (x.indexOf('mxn') >= 0) {
                    $('.space_size_mxn').fadeIn();
                    $('.space_size_m2').fadeOut();
                } else if (x.indexOf('m2') >= 0) {
                    $('.space_size_mxn').fadeOut();
                    $('.space_size_m2').fadeIn();
                }
                setTimeout(function () {
                    $(".space_size").getNiceScroll().resize();
                }, 500);
            }
        })
    }

    if ($(".yourProduct_list_lbox").length) {
        $(".yourProduct_list_lbox").niceScroll({
            cursorcolor: '#1b41a2',
            cursorwidth: '5px',
            cursorborderradius: '0px',
            cursoropacitymin: '1',
            autohidemode: 'false'
        });
    }


    if ($('.colorbg').length) {
        rrmenu()
    }

    if ($('#vip').length) {
        lboxVipJs();
    }

    if ($('.lbox .dropdown').length) {

        $(".lbox .dropdown_capacity").select2({
            minimumResultsForSearch: Infinity,
            theme: "dropdownB",
            width: "100%"
        });

        $(".lbox .dropdown_quantity").select2({
            minimumResultsForSearch: Infinity,
            theme: "dropdownB",
            width: "100%"
        });
    }
    if ($('.yourTotal').length) {
        $('.yourTotal').waypoint({
            handler: function (direction) {
                $(this.element).toggleClass('ffixed')
            },
            context: '.lbox__wrap',
            offset: '0%'
        });

        var yourTotal = $('.yourTotal');
        var shopping__total = $('.shopping__total');

        yourTotal.css({
            'width': shopping__total.width(),
            'left': shopping__total.offset().left,
        });

        $(window).resize(function () {
            yourTotal.css({
                'width': shopping__total.width(),
                'left': shopping__total.offset().left,
            });
        });

        setTimeout(function () {
            yourTotal.css({
                'width': shopping__total.width(),
                'left': shopping__total.offset().left,
            });
        }, 1000);

        $(".total_title").on('click',function () {
            $(this).parents('.shopping__total').toggleClass('open');
            $(".total_list").slideToggle();
        });

    }


}


$('ul.list').on('mouseenter', 'li', function () {
    if (!$(this).hasClass('focus')) {
        $(this).addClass('focus').siblings().removeClass('focus');
    }
});



var dropdown_all = $(".dropdown_all");
dropdown_all.each(function () {
    var x = $(this).data('placeholder')
    $(this).select2({
        placeholder: x,
        minimumResultsForSearch: Infinity,
        theme: "dropdownA",
        width: "100%",
    });
});



function js2d(num) {
    if (num < 10) { num = '0' + num; }
    return num
}
// 燈箱特區

//購物車
var wrapperThe4 = "<article class='lbox lboxThe4'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapperThe4);
var wrapperThe5 = "<article class='lbox lboxThe5'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapperThe5);
//選單 
var wrapper = "<article class='lbox lboxMenu'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper);
//隱私權用
var wrapper2 = "<article class='lbox lboxajaxop'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper2);
//影片
var wrapper3 = "<article class='lbox lboxVideo'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper3);
//需求換算器
var wrapper4 = "<article class='lbox lboxConversion'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper4);


// the4
$('body').on('click', '.lboxBtnVideo', function () {
    var path = $(this).data('lbox');
    var src = $(this).data('video')
    var lboxclass = $('.lboxVideo');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            $('.lboxVideo iframe').attr('src', src)
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});

$('body').on('click', '.the4box2', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxThe5');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});

//隱私權專用 
$('body').on('click', '.the4box', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxajaxop');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});

// 首頁
$('body').on('click', '.menuBtn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxMenu');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('on');
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
        setTimeout(function () {
            rrmenu();
        }, 1000);
    });
});


// 需求換算器
$('body').on('click', '.conversionBtn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxConversion');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});



// 影片
$('body').on('click', '.the4Btn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxThe4');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').html(data);
        setTimeout(function () {
            lboxclass.addClass('on');
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});


//menu的動畫
function rrmenu() {
    particlesJS("menu_img", {
        "particles": {
            "number": {
                "value": 200, "density": {
                    "enable": true, "value_area": 800
                }
            }, "color": {
                "value": "#ffffff"
            }, "shape": {
                "type": "circle", "stroke": {
                    "width": 0, "color": "#000000"
                }, "polygon": {
                    "nb_sides": 5
                }, "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }, "opacity": {
                "value": 0.5, "random": false, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                }
            }, "size": {
                "value": 3, "random": true, "anim": {
                    "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                }
            }, "line_linked": {
                "enable": true, "distance": 0, "color": "#ffffff", "opacity": 0.4, "width": 1
            }, "move": {
                "enable": true, "speed": 2, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 1200
                }
            }
        }, "interactivity": {
            "detect_on": "canvas", "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                }, "onclick": {
                    "enable": true, "mode": "push"
                }, "resize": true
            }, "modes": {
                "grab": {
                    "distance": 400, "line_linked": {
                        "opacity": 1
                    }
                }, "bubble": {
                    "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });

}

function lock(lboxclass) {
    var body = $('body')
    body.css({ overflow: 'hidden' })
}
function unlock(lboxclass) {
    var body = $('body')
    body.css({ overflow: '' })
}

function close(lboxclass) {

    if (lboxclass.selector == '.lboxajaxop' || lboxclass.selector == '.lboxVideo' || lboxclass.selector == '.lboxConversion') {
        console.log('111')
        lboxclass.on('click', '.lbox__close', function () {
            lboxclass.fadeOut();
            unlock(lboxclass);
            // var jqbody = $(this.settings.wrapper);
            // if (!$('.' + this.settings.class).data('ww')) {
            //     jqbody.css({ 'overflow': '', 'padding-right': '' });
            //     jqbody.find('header').css({ 'overflow': '', 'padding-right': '', })
            // } else { jqbody.css({ 'overflow': '', 'padding-right': '' }); }
            setTimeout(function () {
                lboxclass.find(' .lbox__inner').empty()
            }, 500);
        });
    } else if (lboxclass.selector == '.lbox2' || lboxclass.selector == '.lboxajaxop2' || lboxclass.selector == '.lboxThe5') {
        lboxclass.on('click', '.lbox__close', function () {
            lboxclass.fadeOut();
            setTimeout(function () {
                lboxclass.find(' .lbox__inner').empty()
            }, 500);
        });
    } else {

        lboxclass.on('click', '.lbox__close', function () {
            lboxclass.removeClass('on');
            unlock(lboxclass);
            setTimeout(function () {
                lboxclass.find(' .lbox__inner').empty()
            }, 500);
        })

    }


}