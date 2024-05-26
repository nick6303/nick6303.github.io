// 後端請注意:下面的click純粹為了啟動dialogLibox.all(); 可修改    
$(document).ready(function() {
    $(".openMessage").off().click(function() {
        ajaxdialogLibox();
    });
});


// 引入結構
function ajaxdialogLibox() {
    $("body").append("<article class='dialogLibox'></article>")
    $.ajax({
            url: '../../views/layout/dialogLibox.html',
        })
        .done(function(data) {
            $(".dialogLibox").html(data);
            // ↓↓↓↓↓↓↓↓↓後端請注意:怎麼引入結構都可，但是一定要啟動這個function↓↓↓↓↓↓↓
            dialogLibox.all();
            // ↑↑↑↑↑↑↑↑↑後端請注意:怎麼引入結構都可，但是一定要啟動這個function↑↑↑↑↑↑↑
        });
}

var dialogLibox = {
    open: function() {
        $(".dialogLibox").addClass("open");
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
        $(".dialogLibox .liboxClose").off().click(function() {
            dialogLibox.close();
        });

        $(".dialogLibox").off().click(function(e) {
            if ($(e.target).hasClass("dialogLibox")) {
                dialogLibox.close();
            }
        })
    },

    close: function() {
        // ↓↓↓↓↓↓↓↓↓↓↓↓後端請注意:偵測還有幾個未讀訊息↓↓↓↓↓↓↓↓↓
        var notyet = "還有" + $(".notyet").length + "個未讀訊息"
        // ↑↑↑↑↑↑↑↑↑↑↑↑後端請注意:偵測還有幾個未讀訊息↑↑↑↑↑↑↑↑↑↑↑
        $(".dialogLibox").removeClass("open");
        $(".dialogLibox").addClass("close");
        // 電腦版啟動
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置啟動
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".dialogLibox").remove();
        }, 800);
    },


    scroll: function() {
        // 訊息框高度
        var conversationHeight = $(".dialogLibox section .conversation").height()
        // 取得未讀訊息第一個之前的同階層div
        var notyetFirstPrevAll = $(".worker.notyet").eq(0).prevAll()
        // 取得未讀訊息第一個之前的同階層div高度及margin-top
        var notyetFirstOffset = 0
        // 加總div高度及margin-top
        for (i = 0; i < notyetFirstPrevAll.length; i++) {
            var height = $(notyetFirstPrevAll[i]).height() + parseInt($(notyetFirstPrevAll[i]).css("margin-top"))
            var notyetFirstOffset = notyetFirstOffset + height
        }
        // 如果沒有未讀訊息直接滾動到底部
        if (notyetFirstOffset == 0) {
            var notyetFirstOffset = "bottom"
        }
        // 滾動至notyetFirstOffset所標示的位置
        $(".dialogLibox section .conversation").mCustomScrollbar("scrollTo", notyetFirstOffset, {
            // 滾動時間0秒
            scrollInertia: 0
        });
        // 紀錄每個工作人員訊息的位置高度
        var message = document.querySelectorAll(".dialogLibox section .conversation .worker")
        var messageArray = new Array
        for (i = 0; i < message.length; i++) {
            var prevAll = $(message[i]).prevAll()
            var totalHeight = 0
            for (x = 0; x < prevAll.length; x++) {
                var height = $(prevAll[x]).height() + parseInt($(prevAll[x]).css("margin-top"))
                var totalHeight = totalHeight + height
            }
            var totalHeight = totalHeight + $(message[i]).height() + parseInt($(message[i]).css("margin-top"))
            messageArray.push(totalHeight)
        }
        // 自訂的scrollbar
        $(".dialogLibox section .conversation").mCustomScrollbar({
            scrollInertia: 800,
            callbacks: {
                // 偵測燈箱開啟時是否有訊息進入目視範圍
                onCreate: function() {
                    for (i = 0; i < message.length; i++) {
                        if (messageArray[i] < conversationHeight) {
                            // ↓↓↓↓↓↓↓↓↓後端請注意:進入目視範圍後的動作↓↓↓↓↓↓↓↓↓↓
                            $(message).eq(i).removeClass("notyet");
                            // ↑↑↑↑↑↑↑↑↑後端請注意:進入目視範圍後的動作↑↑↑↑↑↑↑↑↑↑
                        }
                    }
                },
                // 偵測訊息是否進入目視範圍
                whileScrolling: function() {
                    var scrollTop = Math.abs(this.mcs.top) + conversationHeight
                    for (i = 0; i < message.length; i++) {
                        if (messageArray[i] < scrollTop) {
                            // ↓↓↓↓↓↓↓↓↓後端請注意:進入目視範圍後的動作↓↓↓↓↓↓↓↓↓↓
                            $(message).eq(i).removeClass("notyet");
                            // ↑↑↑↑↑↑↑↑↑後端請注意:進入目視範圍後的動作↑↑↑↑↑↑↑↑↑↑
                        }
                    }
                }
            }
        });
    },

    textareaScroll: function() {
        // 輸入欄位的scrollbar
        $(".dialogLibox section textarea").niceScroll({
            cursorcolor: "transparent",
            cursorborder: "none",
            background: "transparent",
        });
    },

    // 改變textarea提示訊息
    changPlaceholder: function() {
        changPlaceholder(".dialogLibox section textarea", 700);
    },

    all: function() {
        dialogLibox.open()
        dialogLibox.close_click();
        dialogLibox.textareaScroll();
        dialogLibox.scroll();
        dialogLibox.changPlaceholder();
    }
}