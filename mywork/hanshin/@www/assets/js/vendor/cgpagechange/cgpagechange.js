///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
// 檢查是否為移動裝置
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var device = isAndroid || isiOS

$('a:not(.nocg)').click(function(e) {
    e.preventDefault();
    var thisClass = $(this).attr("class") ? $(this).attr("class") : 'noClass'
    var thisTarget = $(this).attr("target");
    var aHref = $(this).attr("href");
    // 本地
    var x = window.location.pathname.replace("http://","")
    var xArr = x.split("/");
        xArr = lastArr(xArr)
    // 連結
    var href = $(this).attr("href");
    var y = this.href.replace("http://","")
    var yArr = y.split("/");
        yArr = lastArr(yArr);

    // 判斷是否為ie
    var is_oldie = window.navigator.userAgent.indexOf("MSIE") > 0
    var is_newie = window.navigator.userAgent.indexOf("Trident") > 0

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

    if (thisTarget == "_blank" || e.ctrlKey||e.metaKey) {
        window.open(aHref);
    } else if (thisClass.indexOf('nodoit') > -1) {
        //啥事都不幹
    } else if (y.indexOf('jpg') > -1 || y.indexOf('javascript') > -1) {
        //啥事都不幹
    } else if (y.indexOf("#") > -1) {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
        }
    } else if (xArr.length == yArr.length && xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2] && xArr[xArr.length - 3] == yArr[yArr.length - 3]) {
        //自己那頁 啥事都不幹
    } else {
        pagechange.CG_A(href);
    }

})



var pagechange = {
    ///////////////////////////////////////
    //           cgpagechangeA           //
    ///////////////////////////////////////
    CG_A: function(href) {
        $("html,body").delay(100).animate({ opacity: "0" }, {
            queue: true,
            duration: 800,
            easing: "easeOutQuad",
            complete: function() {
                window.location.assign(href);
            }
        });
    },

}

//動態曲線
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',

    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
});