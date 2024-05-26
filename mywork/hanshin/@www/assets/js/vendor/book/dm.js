var rwdWidth = $(window).width()
var rwdHeight = $(window).height()
var pw = 1000;
var ph = 1415;
if (rwdWidth < rwdHeight) {
pw = pw
ph = ph * 2
}

$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    var interval = setInterval(function () {
        $.mobile.loading('show', {
        text: 'loading...',
        textVisible: true,
        theme: 'a',
        html: ""
        });
        clearInterval(interval);
    }, 1);
});



// 檢查是否為移動裝置
function mobile() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS
    return device;
}

var winWidth = $(window).width() - 200;
var winHeight = $(window).height() - 60;
var deviceWidth = $(window).width() - 80;
var sW = 700 * 2,
    sH = 990;
if (typeof pw != 'undefined') {
    sW = pw * 2;
    sH = ph;
}
if (sW > winWidth) {
    var o = winWidth / sW;
    sH = sH * o;
    sW = winWidth;
}
if (sH > winHeight) {
    var o = winHeight / sH;
    sW = sW * o;
    sH = winHeight;
}

// if (deviceWidth < 1024 && deviceWidth >= 688) {
//     sW = deviceWidth - 80
//     var o = deviceWidth / sW;
//     sH = sH * o - 80
// } 
// else 
if (deviceWidth < 688) {
    var o = deviceWidth / sW;
    sW = deviceWidth
    sH = sH * o
}


/*
 *  CONFIGURATION
 */
WIDTH_BOOK = sW; //WIDTH BOOK
HEIGHT_BOOK = sH; //HEIGHT BOOK
ZOOM_STEPS_SIZE = 0.1; //STEPS SIZE FOR ZOOM
ZOOM_STEPS_LENGTH = 8; //STEPS LENGTH FOR ZOOM
/*
 *  Variables
 */
var toolsHeight = 60;
var autoMarginB = 5; //margin bottom
var autoMarginT = 5; //margin top
var autoMarginL = 40; //margin left,40
var autoMarginR = 40; //margin right,40
/////document READY
$(window).on("pageinit",
    function(event) {
        resize_input_text();
    });

function resize_input_text() {
    var input = $('#page-number');
    var btn = $('nav#right button');
    input.css('width', 30);
    input.css('padding-right', btn.width() + 2);
}

function bookHeightCheck() {
    if ($('#book').height() > ($(window).height() - (toolsHeight + autoMarginB + autoMarginT))) {
        higherThanWindow = true;
    }else if($('#book').width() > $(window).width()){
        higherThanWindow = true;
    }else {
        higherThanWindow = false;
    }
    return higherThanWindow;
}

function calculate_zoom_factor(arg) {
    if (arg == true) { // default
        zoom_factor = $('#page').height() * ZOOM_STEPS_SIZE;
    } else {
        zoom_factor = default_book_height * ZOOM_STEPS_SIZE;
    }
}

function close_overlay() {
    $('.overlay').removeClass('active').css("animation","fadeOut 1s both");
}

function isiPhone() {
    return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1));
}
var Book = {
    arrows: function() {
        $('.nav_arrow.prev').click(function() {
            blazy();
            $('#book').turn('previous');
        });
        $('.nav_arrow.next').click(function() {
            blazy();
            $('#book').turn('next');
        });
    },
    all_pages: function() {
        var summary = 0;
        var self = this;
        var slider_width = $('#slider').width();
        $('#all_pages').on("swipeleft",function() {
            offset = -$("#slider", this).offset().left;
            if (offset < summary - slider_width) {
                $('#slider').animate({
                    left: "-=320px"
                }, {
                    queue: false,
                    duration: 200
                });
            }
        });
        $('#all_pages').on("swiperight",
            function() {
                offset = -($("#slider", this).offset().left);
                if (offset > 0) {
                    $('#slider').animate({
                        left: "+=320px"
                    }, {
                        queue: false,
                        duration: 200
                    });
                }
            });
        $('#slider li').click(function(e) {
            tmp = $(this).index()
            close_overlay();
            $(this).setPage(tmp); 
            var page = (tmp==0)?1:tmp*2
            $('#book').turn('page', page);
            blazy();
        });
        $('.btn-close').click(function() {
            close_overlay();
        })
    },
    book_grab: function() {
        if ($.browser.webkit) {
            $('#page').css('cursor', '-webkit-grab');
        }
        if ($.browser.mozilla) {
            $('#page').css('cursor', '-moz-grab');
        }
        if ($.browser.msie) {
            $('#page').css('cursor', 'url(../img/openhand.cur)');
        }
    },
    book_position: function() {
        book_height = $('#page').height();
        book_width = $('#page').width();
        half_height = (book_height / 2) + 30;
        half_width = book_width / 2;
        $('#page').css({
            left: '50%',
            top: '50%',
            margin: '-' + half_height + 'px auto 0 -' + half_width + 'px'
        });
    },
    drag: function(e) {
        $el = $(this);
        $dragged = $el.addClass('draggable');
        $('#page').unbind('mousemove', Book.book_grab);
        $('#page').bind('mousemove', Book.book_grabbing);
        $('#page').unbind('touchstart', Book.book_grab);
        $('#page').bind('touchstart', Book.book_grabbing);
        d_h = $dragged.outerHeight(),
        d_w = $dragged.outerWidth();
        if(e.type=="mousedown"){
            pos_y = $dragged.offset().top + d_h - e.pageY
            pos_x = $dragged.offset().left + d_w - e.pageX
        }else{
            pos_y = $dragged.offset().top + d_h - e.originalEvent.touches[0].pageY,
            pos_x = $dragged.offset().left + d_w - e.originalEvent.touches[0].pageX;
        }

        $dragged.parents().on("mousemove",function(e) {
            $('.draggable').offset({
                top: e.pageY + pos_y - d_h,
                left: e.pageX + pos_x - d_w
            });
        });

        $dragged.parents().on("touchmove",function(e) {
            $('.draggable').offset({
                top: e.originalEvent.touches[0].pageY + pos_y - d_h,
                left: e.originalEvent.touches[0].pageX + pos_x - d_w
            });
        });

        e.preventDefault();
    },
    drop: function() {
        Book.book_grab();
        $('#page').bind('mousemove', Book.book_grab);
        $('#page').bind('touchmove', Book.book_grab);
        $('#page').removeClass('draggable');
    },
    dragdrop_init: function() {
        bookHeightCheck();
        if (higherThanWindow == false) {
            $('#page').unbind('mousedown', Book.drag);
            $('#page').unbind('mouseup', Book.drop);
            $('#page').unbind('touchstart', Book.drag);
            $('#page').unbind('touchend', Book.drop);
            $('#page').removeClass("grab")
        } else {
            $('#page').bind('mousedown', Book.drag);
            $('#page').bind('mouseup', Book.drop);
            $('#page').bind('touchstart', Book.drag);
            $('#page').bind('touchend', Book.drop);
            $('#page').addClass("grab")
        }
        update_fonts();
    },
    init: function() {
        blazy();
        default_book_width = WIDTH_BOOK;
        default_book_height = HEIGHT_BOOK;
        default_page_width = WIDTH_BOOK;
        default_page_height = HEIGHT_BOOK;
        window_height = $(window).height();
        window_width = $(window).width();
        zoom_steps = ZOOM_STEPS_LENGTH;
        current_zoom_step = 0;
        dbl_clicked = false;
        on_start = true;
        self = this;
        /* =  jQuery Addresss INIT
        --------------------------*/
        var current_address = $.address.pathNames();
        var results = $('#address ul li[data-address=' + current_address + ']');
        var index = results.index('li');
        var nrPage = index + 1;
        if (!nrPage) {
            nrPage = 1;
        }
        /* =  jQuery Addresss CHANGE
        --------------------------*/
        $.address.change(function(event) {
            var address = event.value;
            var results = $('#address ul li[data-address=' + address + ']');
            var index = results.index('li');
            var nrPage = index + 1;
            if (!nrPage) {
                nrPage = 1;
            }
            $('#book').turn('page', nrPage); 
        });
        $('#book').turn({
            display: 'double',
            acceleration: true,
            elevation: 50,
            page: nrPage,
            autoCenter: true,
            when: {
                first: function(e, page) {
                    $('.nav_arrow.prev').hide();
                },
                turned: function(e, page) {
                    if (page > 1) {
                        $('.nav_arrow.prev').fadeIn();
                        $('#about').hide();
                    }
                    if (page == 1) {
                        $('#about').css('z-index', 11);
                    }
                    if (page % 2 == 0) {
                        if (page < $(this).turn('pages') - 1) {
                            $('.nav_arrow.next').fadeIn();
                        }
                    } else {
                        if (page < $(this).turn('pages')) {
                            $('.nav_arrow.next').fadeIn();
                        }
                    }
                    update_fonts();
                    $(this).setPage(page);
                    blazy();
                },
                turning: function(e, page) {
                    if (page < 2) {
                        $('#about').show();
                    } else {
                        $('#about').css('z-index', 5);
                    }
                },
                last: function(e, page) {
                    $('.nav_arrow.next').hide();
                }
            }
        });
        if (rwdWidth < rwdHeight) {
            book_width = WIDTH_BOOK;
            book_height = HEIGHT_BOOK * 2;
            $('#book').turn('display', 'single');
        }
        Book.arrows();
    },
    scaleHorizontal: function() {
        screen_height = $(window).height() - toolsHeight;;
        book_width = WIDTH_BOOK;
        screen_width = $(window).width();
        book_height = HEIGHT_BOOK;
        var new_width = screen_width - (autoMarginL + autoMarginR);
        var new_height = book_height * new_width / book_width;
        $('#page').css({
            width: new_width,
            height: new_height
        });
        $('#book').turn('size', new_width, new_height);
    },
    scaleStart: function() {
        if (on_start == true) {
            bookHeightCheck();
            on_start = false;
        }
    },

    scaleVertical: function() {
        screen_height = $(window).height() - toolsHeight;;
        book_width = WIDTH_BOOK;
        screen_width = $(window).width();
        book_height = HEIGHT_BOOK;
        var new_height = screen_height - (autoMarginT + autoMarginB);
        var new_width = book_width * new_height / book_height;
        $('#page').css({
            width: new_width,
            height: new_height
        });
        $('#book').turn('size', new_width, new_height);
    },
    zoom_auto: function() {
        dbl_clicked = false;
        current_zoom_step = 0;
        calculate_zoom_factor(true);
        Book.scaleStart();
        screen_width = $(window).width();
        screen_height = $(window).height() - toolsHeight;;
        deltaW = screen_width - ($('#page').width() + (autoMarginL + autoMarginR));
        deltaH = screen_height - $('#page').height();
        if (deltaW > deltaH) {
            Book.scaleVertical();
        } else {
            Book.scaleHorizontal();
        }
        if ($('#page').width() > WIDTH_BOOK || $('#page').height() > HEIGHT_BOOK) {
            $('#page').css({
                width: default_page_width,
                height: default_page_height
            });
            $('#book').turn('size', default_book_width, default_book_height);
        }
        update_fonts()
    },
    zoom_in: function(dbl) {
        if (dbl_clicked == false) {
            if (dbl == true) {
                zoom_factor = $('#book').height() * (ZOOM_STEPS_SIZE * 10);
            }
            current_zoom_step++;
            book_height = $('#book').height();
            book_width = $('#book').width();
            new_height = book_height + zoom_factor;
            ratio = new_height / book_height;
            new_width = book_width * ratio;
            $('#page').css({
                width: new_width,
                height: new_height
            });
            $('#book').turn('size', new_width, new_height);
            Book.dragdrop_init();
        }
        update_fonts();
    },
    zoom_out: function() {
        if (dbl_clicked == false) {
            current_zoom_step--;
            book_height = $('#book').height();
            book_width = $('#book').width();
            new_height = book_height - zoom_factor;
            ratio = new_height / book_height;
            new_width = book_width * ratio;
            $('#page').css({
                width: new_width,
                height: new_height
            });
            $('#book').turn('size', new_width, new_height);
            Book.dragdrop_init();
        } else {
            Book.zoom_auto();
        }
        update_fonts();
    }
}
var Navigation = {
        ///event mouse down in book 
        book_mouse_down: function() {
            // $('#about').css('z-index', 5);
        },
        book_mouse_up: function(e) {
            var offset = $(this).offset();
            var relativeX = (e.pageX - offset.left);
            // if (relativeX > (WIDTH_BOOK / 2)) {
                // $('#about').css('z-index', 11);
            // }
        },
        init: function() {
            self = this; // Double Click
            var windowWidth = $(window).width()
            // if (!mobile()) {
            //     $('#page').dblclick(function() {
            //         console.log("123")
            //         current_zoom_step = 0;
            //         if (dbl_clicked == true) {
            //             $('#page').css('cursor', 'default');
            //             Book.zoom_auto();
            //             Book.dragdrop_init();
            //             dbl_clicked = false;
            //             calculate_zoom_factor(true);
            //         } else {
            //             Book.book_grab();
            //             Book.zoom_auto();
            //             Book.zoom_in(true);
            //             dbl_clicked = true;
            //         }
            //         Book.book_position();
            //     });
            // }
            // Home 
            $('nav .home').on('click',
                function() { //$('#book').turn('page', 1);
                    $(document).setPage(1);
                }); // Zoom Original
            $('nav .zoom_original').click(function() {
                current_zoom_step = 0;
                $('#page').css({
                    width: default_page_width,
                    height: default_page_height
                });
                $('#book').turn('size', default_book_width, default_book_height);
                Book.book_position();
                Book.dragdrop_init();
            }); 
            // Zoom Auto
            $('nav .zoom_auto').on('click',function() {
                Book.zoom_auto();
                Book.book_position();
                Book.dragdrop_init();
            }); 
            // Zoom In
            $('nav .zoom_in').on('click',function() {
                // if (current_zoom_step < zoom_steps) {
                    Book.zoom_in();
                    Book.book_position();
                // }
            }); 
            // Zoom Out
            $('nav .zoom_out').on('click',function() {
                if (current_zoom_step > -zoom_steps) {
                    Book.zoom_out();
                    Book.book_position();
                }
            }); 
            // All Pages
            $('nav .show_all').on('click',function() {
                $('#all_pages').addClass('active').css("animation","fadeIn 1s both");
                blazy();
                Book.all_pages();
                return false;
            }) 

            $('#page-number').keydown(function(e) {
                if (e.keyCode == 13) $('#book').turn('page', $('#page-number').val());
            });
            $('.goto button').click(function(e) {
                $('#book').turn('page', $('#page-number').val());
            }); //change z-index in about
            $('#book').bind('mousedown', this.book_mouse_down);
            $('#book').bind('mouseup', this.book_mouse_up);
            if (isiPhone()) { //for IPhone		
                $('#book').bind('touchstart', this.book_mouse_down);
                $('#book').bind('touchend', this.book_mouse_up);
            }
            if (!isiPhone()) {
                // self.tooltip();
            }
        }
    }
    /* = Start
    -------------------------------------------------------------- */
$(window).on('keydown',function(e) {
    if (e.keyCode == 37) {
        $('#book').turn('previous');
    } else if (e.keyCode == 39) {
        $('#book').turn('next');
    }
});
$(window).load(function() {
    $.address.strict(false);
    $('#page').show();
    Book.init();
    Book.zoom_auto();
    Book.book_position();
    Book.dragdrop_init();
    Navigation.init();
    calculate_zoom_factor();
    update_fonts();
    // singlePage()
});
$(window).resize(function() {
    if (!isiPhone()) {
        Book.book_position();
        Book.zoom_auto();
        Book.dragdrop_init();
    }
    calculate_zoom_factor();
});


/* =  set Page
--------------------------*/
$.fn.setPage = function(nr_) {
    var results = $('#address ul li').eq(nr_ - 1);
    var address = results.attr('data-address');
    $(this).setAddress(address);
};
/* =  set Address
--------------------------*/
$.fn.setAddress = function(address_) {
    $.address.value(address_);
};
/* =  scale fonts 
--------------------------*/
function update_fonts() { //////scale p
    resize_font(14, '.page_book > p') //////scale h1
    resize_font(24, '.page_book > h1') //////scale h3
    resize_font(20, '.page_book > h3') //////scale list li
    resize_font(14, '.page_book  ul li') ///SCALE ABOUT
    //////scale about p
    resize_font(11, '#about p') //////scale about h3
    resize_font(22, '#about h3');
    resize_link();
}

function resize_font($size_original_, path_) {
    $w = $('#page').width();
    $size = ($size_original_ * $w) / WIDTH_BOOK;
    $new_size = Math.round(parseInt($size)) + "px";
    $(path_).css('font-size', $new_size);
    $(path_).css('line-height', $new_size);
}

function resize_link() {
    var b = $('#page').height() / ph;
    $('.booklink').each(function() {
        var css = {
            left: (b * $(this).data('x1')) + 'px',
            top: (b * $(this).data('y1')) + 'px',
            width: (b * $(this).data('w')) + 'px',
            height: (b * $(this).data('h')) + 'px'
        }
        $(this).css(css);
    })
}

function booklink(a) {
    $(window).trigger('orientationchange');
    if ($(a).hasClass('lightbox')) {
        $(a).colorbox({
            open: true
        })
    } else {
        return true;
    }
}

function blazy(){
    var bLazy1 = new Blazy({
        offset: 100,
    });

    var bLazy2 = new Blazy({
        offset: 100,
        container:"#dm.book .overlay"
    });
}

function noMovement(second,href) { 
    if($("body").hasClass("guide") && !$("body").hasClass("commercial") && $("body").attr("id") !== "winform"){
        ifvisible.setIdleDuration(second)
        ifvisible.on("idle", function(){
            $("html").delay(100).animate({ opacity: "0" }, {
                queue: true,
                duration: 800,
                // easing: "easeOutQuad",
                complete: function() {
                    window.location.assign(href);
                }
            });
        })
    }
}

$(document).ready(function () {
    // 導覽機 閒置幾秒之後會變廣告頁 noMovement(秒數,想要轉到哪頁)
    var second = $("body").attr("data-delaySecond")
    var href = $("body").attr("data-indexHerf")
    if(second !==undefined && href !== undefined){
        noMovement(second,href);
    }
})