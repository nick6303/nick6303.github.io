function ajaxWinnerLibox(ele) {
    var href = $(ele).attr("data-href")
    $("body").append("<article class='winnerLibox'></article>")
    $.ajax({
        url: href,
    })
    .done(function(data) {
        $(".winnerLibox").html(data);
        winnerLibox.all();
    });
}


var winnerLibox = {
    open: function() {
        if ($(window).width() > 1024) {
            $("body").css({ "padding-right": "17px", "overflow": "hidden" });
        } else {
            $("body").css("overflow", "hidden");
        }
        $(".winnerLibox").addClass("open");
    },

    close_click: function() {
        $(".winnerLibox .inf .back a").click(function() {
            winnerLibox.close();
        });
    },

    close: function() {
        $(".winnerLibox").removeClass("open")
        $(".winnerLibox").addClass("close");
        if ($(window).width() > 1024) {
            $("body").css({ "padding-right": "0", "overflow": "visible" });
            $(".winnerLibox").css({ "width": "calc(100vw - 17px)", "overflow": "hidden" });
        } else {
            $("body").css("overflow", "visible");
        }
        setTimeout(function() {
            $(".winnerLibox").remove();
        }, 1500);
    },

    blazy: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                $(ele).parent().addClass("show");
            }
        });
    },

    perfectScrollbar: function() {
        if ($(window).width() < 1025) {
            var container = document.querySelector('.winnerLibox .anchors');
            var ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    // 填入影片
    videoFrame: function() {
        $(".winnerLibox .content .photoAndVideo .video").each(function() {
            // 取得 youtube Id
            var youtubeId = $(this).attr("data-youtubeId")
            // 取得 vimeo Id
            var vimeoId = $(this).attr("data-vimeoId")
            if (!youtubeId.length == 0) {
                var src = "https://www.youtube-nocookie.com/embed/" + youtubeId + "?rel=0&amp;showinfo=0"
                $(this).find("iframe").attr("src", src);
            }
            if (!vimeoId.length == 0) {
                var src = "https://player.vimeo.com/video/" + vimeoId + "?color=ffffff&title=0&byline=0&portrait=0"
                $(this).find("iframe").attr("src", src);
            }
        });
    },

    winner: function() {
        var windowHeight = $(window).height();
        var anchors = document.querySelectorAll(".winnerLibox .anchors ul li");
        var sections = document.querySelectorAll(".winnerLibox .content>div");
        // 滾動錨點
        $(".winnerLibox").scroll(function() {
            // console.log($(".winnerLibox").scrollTop())
            $(".content>div").each(function() {
                var offset = this.getBoundingClientRect().top
                var i = $(this).index()
                if (offset <= (windowHeight * 2 / 5)) {
                    $(anchors[i]).addClass("active").siblings().removeClass("active");
                }
            })
        });

        // 點擊錨點
        $(".winnerLibox .anchors ul li").click(function() {
            if (!$(this).hasClass("active")) {
                var i = $(this).index()
                var prevAll = $(sections[i]).prevAll()
                var anchorPoint = parseInt($(".winnerLibox").css("padding-top")) + parseInt($(sections[i]).css("margin-top"))
                if ($(window).width() < 1025) {
                    var anchorPoint = anchorPoint + $(".winnerLibox .inf").innerHeight() + $(".winnerLibox .anchors").innerHeight()
                }
                for (var x = 0; x < prevAll.length; x++) {
                    var anchorPoint = anchorPoint + $(prevAll[x]).innerHeight() + parseInt($(prevAll[x]).css("margin-top"))
                }

                $(".winnerLibox").animate({ scrollTop: anchorPoint }, {
                    duration: 1000,
                    easing: "easeOutCubic",
                });
            }
        });
    },

    mouseOver: function(ele) {
        $(ele).siblings().find("img").css("opacity", ".2");
    },

    mouseOut: function(ele) {
        $(ele).siblings().find("img").css("opacity", "1");
    },

    backToTop: function() {
        $(".winnerLibox .goTop").click(function() {
            $(".winnerLibox").animate({
                scrollTop: 0,
            }, 1500, 'easeOutCubic');
        });
    },

    all: function() {
        winnerLibox.open();
        winnerLibox.close_click();
        winnerLibox.perfectScrollbar();
        winnerLibox.videoFrame();
        winnerLibox.winner();
        winnerLibox.backToTop();
    }
}