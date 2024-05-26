/***************************************************************************************************************************/
//////////////////////////////////////////////
//                尚未完成燈箱              //
//////////////////////////////////////////////


function openNotyetLibox() {
    $(".header .X").click(function() {
        ajaxNotyetLibox();
    });
}


function ajaxNotyetLibox() {

    $("body").append("<article class='notyetLibox'></article>");
    $.ajax({
            url: '../../views/layout/notyetLibox.html',
        })
        .done(function(data) {
            $(".notyetLibox").html(data);
            notyetLibox.all();
        });
}

var notyetLibox = {
    open: function() {
        $(".notyetLibox").addClass("open");
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
        $(".notyetLibox .liboxClose").click(function() {
            notyetLibox.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("notyetLibox")) {
                notyetLibox.close();
            }
        })
    },

    close: function() {
        $(".notyetLibox").removeClass("open");
        $(".notyetLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".notyetLibox").remove();
        }, 600);
    },

    all: function() {
        notyetLibox.open();
        notyetLibox.close_click();
    }
}

$(document).ready(function() {
    openNotyetLibox();
});