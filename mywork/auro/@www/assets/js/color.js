var grid = $(".grid").masonry({
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    itemSelector: ".grid-item",
    percentPosition: true
});

var timerStop;
var arr = [];

for (let i = 0; i < grid.data("masonry").items.length; i++) {
    if (grid.data("masonry").items[i]) {
        arr.push(grid.data("masonry").items[i]);
    }
}


function MouseWheel(e) {
    $('html, body').stop();
}

// hook event listener on window object
if ('onmousewheel' in window) {
    window.onmousewheel = MouseWheel;
} else if ('onmousewheel' in document) {
    document.onmousewheel = MouseWheel;
} else if ('addEventListener' in window) {
    window.addEventListener("mousewheel", MouseWheel, false);
    window.addEventListener("DOMMouseScroll", MouseWheel, false);
}
// $(window).scroll(function () { 
//     $('html, body').stop();
// });

$(".the_color").on("click", ".box", function () {

    var that = $(this);
    console.log(that);
    if (!$(this).hasClass('open')) {
        setTimeout(function () {
            $('html, body').animate({ scrollTop: that.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
        }, 500);
    }

    var x = $(this).prevAll().length;
    var y = x - 2;
    if (that.hasClass("open")) {
        for (let i = 0; i < arr.length; i++) {
            grid.data("masonry").items[i] = arr[i];
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            grid.data("masonry").items[i] = arr[i];
        }

        if ($(window).width() > 1024) {
            switch (y % 3) {
                case 0:
                    // 啥事都不幹
                    break;
                case 1:
                    grid.data("masonry").items[y] = arr[y - 1];
                    grid.data("masonry").items[y - 1] = arr[y];
                    break;
                case 2:
                    grid.data("masonry").items[y] = arr[y - 2];
                    grid.data("masonry").items[y - 2] = arr[y];
                    break;
            }
        } else if ($(window).width() > 600) {
            switch (y % 2) {
                case 0:
                    // 啥事都不幹
                    break;
                case 1:
                    grid.data("masonry").items[y] = arr[y - 1];
                    grid.data("masonry").items[y - 1] = arr[y];
                    break;
            }
        }

    }
    var i = that.find("li").length;
    var j = 1;

    function timer() {
        timerStop = setTimeout(function () {
            if (j < i) {
                that.find("li").eq(j).css({ display: "inline-block" });
                grid.masonry("layout");
                j += 1;
                timer();
            }
        }, 100);
    }

    that.siblings().removeClass("grid-item--w100 open");
    that.siblings().find("li:not(:first-child)").css({ display: "none" });

    clearTimeout(timerStop);

    if (that.hasClass("open")) {
        that.removeClass("grid-item--w100 open");
        that.find("li:not(:first-child)").css({ display: "none" });
        grid.masonry("layout");
    } else {
        that.addClass("grid-item--w100 open");
        grid.masonry("layout");
        timer();
    }

});
