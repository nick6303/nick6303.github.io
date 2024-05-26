/***************************************************************************************************************************/
//////////////////////////////////////////////
//                尚未登入燈箱              //
//////////////////////////////////////////////
function ajaxLogInYetLibox() {
    $("body").append("<article class='logInYetLibox'></article>");
    $.ajax({
            url: '../../views/layout/logInYetLibox.html',
        })
        .done(function(data) {
            $(".logInYetLibox").html(data);
            logInYetLibox.all();
        });
}

var logInYetLibox = {
    open: function() {
        $(".logInYetLibox").addClass("open");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "hidden", "padding-right": "1rem" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "hidden");
        }
    },

    close_click: function() {
        $(".logInYetLibox .top .X").click(function() {
            logInYetLibox.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("logInYetLibox")) {
                logInYetLibox.close();
            }
        })
    },

    close: function() {
        $(".logInYetLibox").removeClass("open");
        $(".logInYetLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".logInYetLibox").remove();
        }, 600);
    },

    all: function() {
        logInYetLibox.open();
        logInYetLibox.close_click();
    }
}

