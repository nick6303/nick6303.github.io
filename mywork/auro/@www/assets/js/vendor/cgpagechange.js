///////////////////////////////////////
//            轉場href判斷           //
/////////////////////////////////////// 

$('body').on('click', 'a.cg', function (e) {
    e.preventDefault();
    // 本地
    var x = window.location.pathname
    var xArr = x.split("/");
    xArr = lastArr(xArr)
    // 連結
    var y = $(this).attr("href");
    var yArr = y.split("/");
    yArr = lastArr(yArr)

    if (y.indexOf('javascript') >= 0) {
        //有javascript 啥事都不幹
    } else if (xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    } else {
        pagechange.CG_A($(this).attr("href"));
    }

}).on('click', 'a.anchor', function (e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
    }
});

//補index.html上去
function lastArr(arr) {
    var last = arr.pop()
    if (last.indexOf("#") > -1) {
        arr.push(last)
    } else if (last.indexOf("html") > 0) {
        arr.push(last)
    } else if (last == "") {
        arr.push('index.html')
    } else {
        arr.push(last)
        arr.push('index.html')
    }
    return arr
}

// 轉場
var pagechange = {
    CG_A: function (href) {
        var x = "<div id='endbg'><div class='brush__wrap mask'></div></div>";
        $("body").append(x);
        $("body").delay(1000).animate({ opacity: "1" }, {
            queue: true,
            duration: 500,
            easing: "easeOutQuad",
            complete: function () {
                setTimeout(function () {
                    window.location.assign(href);
                }, 200);
            }
        });
    }
}

//動態曲線
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',

    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
});
