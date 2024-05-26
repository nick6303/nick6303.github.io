function ajaxAccountLibox() {
    $("body").append("<article class='accountLibox'></article>")
    $.ajax({
        url: '../../views/member/accountLibox.html',
    })
    .done(function(data) {
        $(".accountLibox").html(data);
        accountLibox.all();
    });
}

var accountLibox = {
    open: function() {
        $(".accountLibox").addClass("open");
        $(".accountLibox .libox1").slideDown(500);
        $(".accountLibox .libox1").addClass("open");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "hidden", "padding-right": "1rem" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
            setTimeout(function() {
                accountLibox.scroll();
            }, 500);
        }
    },

    close_click: function() {
        $(".accountLibox .liboxClose,.accountLibox .back,.accountLibox .ok").click(function() {
            accountLibox.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("accountLibox")) {
                accountLibox.close();
            }
        })
    },

    close: function() {
        $(".accountLibox").removeClass("open");
        $(".accountLibox").addClass("close");

        if ($(".accountLibox .libox1").hasClass("open")) {
            $(".accountLibox .libox1").slideUp(400);
            $(".accountLibox .libox1").addClass("close");
            $(".accountLibox .libox1").removeClass("open");
        } else if ($(".accountLibox .libox2").hasClass("open")) {
            $(".accountLibox .libox2").slideUp(400);
            $(".accountLibox .libox2").addClass("close");
            $(".accountLibox .libox2").removeClass("open");
        }

        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".accountLibox").remove();
        }, 750);
    },

    closeLibox1_click: function() {
        $(".accountLibox .continue").click(function() {
            accountLibox.closeLibox1();
        });
    },

    closeLibox1: function() {
        $(".accountLibox .libox1").removeClass("open");
        $(".accountLibox .libox1").addClass("close");
        $(".accountLibox .libox1").slideUp(400);
        setTimeout(function() {
            $(".accountLibox .libox2").slideDown(500);
            $(".accountLibox .libox2").addClass("open");
        }, 300);
        setTimeout(function() {
            $(".accountLibox .libox1").removeClass("close");
        }, 400);
    },

    scroll: function() {
        $(".accountLibox .libox1").niceScroll({
            cursorborder: "none",
            cursorwidth: "2px",
            railpadding: { top: 1, right: 1, left: 0, bottom: 1 },
        });
    },

    all: function() {
        accountLibox.open();
        accountLibox.close_click();
        accountLibox.closeLibox1_click();
    }
}