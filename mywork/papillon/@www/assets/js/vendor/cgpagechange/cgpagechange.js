///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
$('body').on('click', 'a', function (e) {
    e.preventDefault();
    var thisClass = $(this).attr("class") ? $(this).attr("class") : 'noClass'
    var thisTarget = $(this).attr("target");
    // 本地
    var x = window.location.pathname
    var xArr = x.split("/");
    xArr = lastArr(xArr)
    // 連結
    var y = $(this).attr("href");
    var yArr = y.split("/");
    yArr = lastArr(yArr)

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



    if (thisTarget == "_blank") {
        window.open(y);
    } else if (thisClass.indexOf('nodoit') > -1) {
        //啥事都不幹
    }
    else if (y.indexOf('jpg') > -1 || y.indexOf('javascript') > -1) {
        //啥事都不幹
    } else if (y.indexOf("#") > -1) {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
        }
    } else if (xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    } else {
        pagechange.CG_A(y);
    }

})

///////////////////////////////////////
//           cgpagechangeA           //
///////////////////////////////////////

var pagechange = {
    CG_A: function (href) {
        $("html").append("<div id='endbg'></div>");
        for (var i = 0; i <= 11; i++) {
            $("#endbg").append("<div class='box'></div>");
        }

        //呼叫過場動畫
        // cg_page();


        $("body").delay(1000).animate({ opacity: "0" }, {
            queue: true,
            duration: 200,
            easing: "easeOutQuad",
            complete: function () {
                setTimeout(function () {
                    window.location.assign(href);
                }, 100);
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
