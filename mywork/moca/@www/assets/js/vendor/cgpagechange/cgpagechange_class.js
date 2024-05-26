///////////////////////////////////////
//            轉場href判斷           //
/////////////////////////////////////// 
$('body')
.on('click', 'a.cg', function (e) {
    e.preventDefault();
    // 本地
    var x = window.location.pathname
    var xArr = x.split("/");
    xArr = lastArr(xArr)
    // 連結
    var y = $(this).attr("href");
    var yArr = y.split("/");
    yArr = lastArr(yArr)

    if (xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    } else {
        if ( $(this).hasClass('cgB') ) {
            pagechange.CG_B($(this).attr("href"));
        }else {
            pagechange.CG_A($(this).attr("href"));
        }
    }

})
.on('click', 'a.anchor', function (e) {
    e.preventDefault();
    var a = $(this).attr('href');
    cut_a = a.split('#');

    var target = cut_a[1];

    var jqTarget = '.' + target;

    if (target.length) {
        $('html, body').animate({ scrollTop: $(jqTarget).offset().top }, { duration: 900 });
    }
})
.on('click', 'a.cgNot', function (e) {
    e.preventDefault();
});

//補index.html上去
function lastArr(arr) {
    var last = arr.pop()
    if (last.indexOf("#") > -1) {
        arr.push(last)
    } else if (last.indexOf("php") > 0) {
        arr.push(last)
    } else if (last == "") {
        arr.push('index.php')
    } else {
        arr.push(last)
        arr.push('index.php')
    }
    return arr
}

// 轉場
var pagechange = {
    CG_A: function (href) {
        var x = "<div class='wddEndBg cgBack'></div>",
            logo = "<img class='icon' src='../../assets/img/cgLogo/cgLogo.png' alt='' title=''>";

        $("body").append(x);

        setTimeout(function(){
            $('.wddEndBg').append(logo);

            setTimeout(function(){
                $('.wddEndBg').addClass('showUp');
            }, 50);
        }, 0);

        $("body").delay(0).animate({ opacity: "1" }, {
            queue: true,
            duration: 600,
            easing: "easeOutQuad",
            complete: function () {
                window.sessionStorage["session"] = '';

                setTimeout(function () {
                    window.location.assign(href);
                }, 0);
            }
        });
    },
    CG_B: function (href) {
        var x = "<div class='wddEndBg cgBack cgB'></div>";

        $("body").append(x);

        setTimeout(function(){
            $('.wddEndBg').addClass('showUp');
        }, 50);

        $("body").delay(0).animate({ opacity: "1" }, {
            queue: true,
            duration: 800,
            easing: "easeOutQuad",
            complete: function () {
                window.sessionStorage["session"] = 'cgB';

                setTimeout(function () {
                    window.location.assign(href);
                }, 0);
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


// Storage()
// function saveToStorage() {
//     window.localStorage["local"] = document.getElementById("local").value;
//     window.sessionStorage["session"] = 'successCG';
// }
// function loadStorage() {
//     document.getElementById("local").value = window.localStorage["local"];
//     document.getElementById("session").value = window.sessionStorage["session"];
// }