function zoom() {
    $(".zoom").click(function() {
        var src = $(this).closest(".workbox").find("a img").attr("src")
        $("body").append("<article class='imgLibox'><div class='liboxClose'><span></span></div><img src='" + src + "'></article");

        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "hidden", "padding-right": "1rem" });
        } else {
            $("body").css("overflow-y", "hidden");
        }
        liboxClose();
    });
}

function liboxClose() {
    $(".imgLibox").click(function() {
        $(this).addClass("close");

        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        } else {
            $("body").css("overflow-y", "visible");
        }

        setTimeout(function() {
            $(".imgLibox").remove();
        }, 400)
    });
}