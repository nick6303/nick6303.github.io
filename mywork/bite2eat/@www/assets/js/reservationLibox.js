$(document).ready(function() {
    $(".openReservationLibox").click(function() {
        openReservationLibox();
    });
});

function openReservationLibox() {
    $("body").append("<article class='reservationLibox'></article>")
    $(".reservationLibox").addClass("open");

    // 不開放預約
    // if (para = "xxx") {
    // $(".reservationLibox").addClass("noOrder");
    // }

    // 預約額滿
    // else if (para = "xxx") {
    $(".reservationLibox").addClass("noSeat");
    // }

    // 預約成功
    // else if (para = "xxx") {
    // $(".reservationLibox").addClass("success");
    // }

    $.ajax({
            url: '../../views/reservation/reservationLibox.html',
        })
        .done(function(data) {
            $(".reservationLibox").html(data);
            reservationLibox.all();
        });
}


var reservationLibox = {
    open: function() {
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().resize().hide();
        } else if ($(window).width() < 1025) {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function() {
        $(".reservationLibox .liboxClose,.reservationLibox .btn").click(function() {
            reservationLibox.close();
        });
    },

    click_other: function() {
        $('.reservationLibox').click(function(e) {
            if (e.target == this) {
                reservationLibox.close();
            }
        });
    },

    close: function() {
        $(".reservationLibox").removeClass("open");
        $(".reservationLibox").addClass("close");
        if ($(window).width() < 1025) {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".reservationLibox").remove();
        }, 1100);
    },

    scrollbar: function() {
        if ($(window).width() > 1023) {
            $(".reservationLibox").niceScroll({
                nativeparentscrolling: false,
                cursorborder: "none",
                cursorwidth: "4px",
                railpadding: { top: 0, right: 2, left: 0, bottom: 0 },
            });
        }
    },

    resize: function() {
        setTimeout(function() {
            if ($(".reservationLibox .box").innerHeight() > $(".reservationLibox").height()) {
                $(".reservationLibox").css("align-items", "flex-start");
            } else {
                $(".reservationLibox").css("align-items", "center");
            }
        }, 100)
    },

    all: function() {
        reservationLibox.open();
        reservationLibox.close_click();
        reservationLibox.click_other();
        reservationLibox.scrollbar();
        reservationLibox.resize();
    }
}



// ------------------------------------------------------------------------



$(document).ready(function() {
    $(".cancel button").click(function() {
        openCancelLibox()
    });
});


function openCancelLibox() {

    $("body").append("<article class='cancelLibox'></article>")
    $(".cancelLibox").addClass("open");

    $.ajax({
            url: '../../views/reservation/cancelLibox.html',
        })
        .done(function(data) {
            $(".cancelLibox").html(data);
            cancelLibox.all();
        });
}

var cancelLibox = {
    open: function() {
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().resize().hide();
        } else if ($(window).width() < 1025) {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function() {
        $(".cancelLibox .liboxClose,.cancelLibox .btn").click(function() {
            cancelLibox.close();
        });
    },

    click_other: function() {
        $('.cancelLibox').click(function(e) {
            if (e.target == this) {
                cancelLibox.close();
            }
        });
    },

    close: function() {
        $(".cancelLibox").removeClass("open");
        $(".cancelLibox").addClass("close");
        if ($(window).width() < 1025) {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".cancelLibox").remove();
        }, 1000);
    },

    scrollbar: function() {
        if ($(window).width() > 1023) {
            $(".cancelLibox").niceScroll({
                nativeparentscrolling: false,
                cursorborder: "none",
                cursorwidth: "4px",
                railpadding: { top: 0, right: 2, left: 0, bottom: 0 },
            });
        }
    },

    send: function() {
        $(".cancelLibox .box").addClass("finish").removeClass("form");
        $(".cancelLibox h2.form,.cancelLibox .px22.form,.cancelLibox h3.form,.cancelLibox form").delay(200).slideUp(800);
        $(".cancelLibox h2.finish,.cancelLibox .px22.finish,.cancelLibox h3.finish,.cancelLibox .btn.finish").delay(200).slideDown(800);
    },

    resize: function() {
        setTimeout(function() {
            if ($(".cancelLibox .box").innerHeight() > $(".cancelLibox").height()) {
                $(".cancelLibox").css("align-items", "flex-start");
            } else {
                $(".cancelLibox").css("align-items", "center");
            }
        }, 100);
    },

    input: function() {
        $(".cancelLibox .tableContent input").each(function() {
            $(this).closest("div").click(function() {
                $(this).find("input").focus()
            })
        });

        $(".cancelLibox .tableContent input").on("keypress", function() {
            if (event.keyCode == 13) {
                event.preventDefault();
                $(this).closest("form").find("button").click()
            }
        });
    },

    all: function() {
        cancelLibox.open();
        cancelLibox.close_click();
        cancelLibox.click_other();
        cancelLibox.scrollbar();
        cancelLibox.resize();
        cancelLibox.input();
    }
}