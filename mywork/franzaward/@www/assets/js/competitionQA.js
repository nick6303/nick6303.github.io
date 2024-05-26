$(document).ready(function() {
    $(".item.QA").click(function() {
        ajaxCompetitionQA()
    });
});

function ajaxCompetitionQA() {
    $("body").append("<article class='competitionQA'></article>")
    $.ajax({
            url: '../../views/competition/competitionQA.html',
        })
        .done(function(data) {
            $(".competitionQA").html(data);
            competitionQA.all();
        });

}

var competitionQA = {
    open: function() {
        $(".competitionQA").addClass("open");
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
        $(".competitionQA .liboxClose,.competitionQA .back").click(function() {
            competitionQA.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("competitionQA")) {
                competitionQA.close();
            }
        })
    },

    close: function() {
        $(".competitionQA").removeClass("open");
        $(".competitionQA").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".competitionQA").remove();
        }, 1100);
    },

    scroll: function() {
        $(".competitionQA section .QAcontent").niceScroll({
            cursorwidth: "2px",
            cursorborder: "none",
            background: "#e6e6e6",
            cursorcolor: "#3ea6dc",
            railpadding: { top: 0, right: -15, left: 0, bottom: 0 },
        });
        setTimeout(function() {
            $(".competitionQA section .QAcontent").getNiceScroll().resize();
        }, 2000);
    },

    // 問題展開
    answerShow: function() {
        $(".QAbox span").each(function() {
            var $span = $(this)
            $span.click(function() {
                $span.closest(".QAbox").find(".answer").slideToggle(500)
                $span.closest(".QAbox").toggleClass("active");

                $span.closest(".QAbox").siblings().find(".answer").slideUp(500);
                $span.closest(".QAbox").siblings().removeClass("active");

                setTimeout(function() {
                    $(".competitionQA section .QAcontent").getNiceScroll().resize();
                }, 500);
            });
        });
    },

    // 選擇問題分類
    selectQA:function(){
        $(".competitionQA section ._title ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".competitionQA section .QAcontent").getNiceScroll().resize();
        });
    },

    all: function() {
        competitionQA.open();
        competitionQA.close_click();
        competitionQA.scroll();
        competitionQA.answerShow();
        competitionQA.selectQA();
    }
}