// 後端請注意:下面的click純粹為了啟動functuin 可修改
$(document).ready(function() {
    $(".addMessage").click(function() {
        ajaxaddMessageLibox();
    });
});


// 引入結構
function ajaxaddMessageLibox() {

    $("body").append("<article class='addMessageLibox'></article>")

    $.ajax({
            url: '../../views/layout/addMessageLibox.html',
        })
        .done(function(data) {
            $(".addMessageLibox").html(data);
            // ↓↓↓↓↓↓↓↓↓後端請注意:怎麼引入結構都可，但是一定要啟動這個function↓↓↓↓↓↓↓
            addMessage.all();
            // ↑↑↑↑↑↑↑↑↑後端請注意:怎麼引入結構都可，但是一定要啟動這個function↑↑↑↑↑↑↑
        });
}


// 主要function
var addMessage = {
    open: function() {
        $(".addMessageLibox").addClass("open");
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
        $(".addMessageLibox .liboxClose").click(function() {
            addMessage.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("addMessageLibox")) {
                addMessage.close();
            }
        })
    },

    close: function() {
        $(".addMessageLibox").removeClass("open");
        $(".addMessageLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".addMessageLibox").remove();
        }, 800);
    },

    scroll: function() {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        // 自訂的scrollbar 只有在不是chrome的情況下啟動
        if ($(window).width() > 1024 && !isChrome) {
            $(".addMessageLibox section form .workbox textarea").niceScroll({
                cursorwidth: "3px",
                cursorcolor: "#878787",
                cursorborder: "none",
                background: "#c2c2c2",
            });
        }
    },

    all: function() {
        addMessage.open();
        addMessage.close_click();
        addMessage.scroll();
        dropdownList();
    }
}