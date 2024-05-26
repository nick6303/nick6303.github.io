$(document).ready(function() {
    // 後端請注意:此處僅為測試用
    $(".openNewsDetail").each(function() {
        $(this).click(function() {
            var numb = $(this).attr("data-whitchNews")
            // var numb = 2
            ajaxNewsDetailLibox(numb);
        });
    });
});

function ajaxNewsDetailLibox(numb) {
    $("body").append("<article class='newsDetailLibox'></article>");

    var liboxUrl = "../../views/news/" + numb + ".html"

    $.ajax({
            url: liboxUrl,
        })
        .done(function(data) {
            $(".newsDetailLibox").html(data);
            newsDetailLibox.all();
        });
}

var newsDetailLibox = {
    open: function() {
        $(".newsDetailLibox").addClass("open");
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
        $(".newsDetailLibox .liboxClose").click(function() {
            newsDetailLibox.close();
        });
    },

    close: function() {
        $(".newsDetailLibox").removeClass("open");
        $(".newsDetailLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
            $(".newsDetailLibox").css("overflow-y", "hidden");
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".newsDetailLibox").remove();
        }, 1100);
    },

    scrollToTop: function() {
        $(".newsDetailLibox .liboxToTop").click(function() {
            $(".newsDetailLibox").animate({
                scrollTop: 0,
            }, 1000, 'easeOutCubic');
        });
    },

    all: function() {
        newsDetailLibox.open();
        newsDetailLibox.close_click();
        newsDetailLibox.scrollToTop();
    }
}