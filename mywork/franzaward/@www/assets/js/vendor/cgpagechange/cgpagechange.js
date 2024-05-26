///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
// 檢查是否為移動裝置
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var device = isAndroid || isiOS

$('body').on('click', 'a', function(e) {
    e.preventDefault();
    var thisClass = $(this).attr("class") ? $(this).attr("class") : 'noClass'
    var thisTarget = $(this).attr("target");
    var aHref = $(this).attr("href");
    // 本地
    var x = window.location.pathname
    var xArr = x.split("/");
    xArr = lastArr(xArr)
    // 連結
    var y = $(this).attr("href");
    var yArr = y.split("/");
    yArr = lastArr(yArr);

    // // 判斷是否已經登入
    // var loginAlready = localStorage.getItem("alreadyLogin")

    // 判斷是否為ie
    var is_oldie = window.navigator.userAgent.indexOf("MSIE") > 0
    var is_newie = window.navigator.userAgent.indexOf("Trident") > 0



    // 競賽頁面專屬動畫參數
    var isCompetition = $(this).attr('data-isCompetition')
    $this = this
    var top = this.getBoundingClientRect().top
    var left = this.getBoundingClientRect().left
    var width = $(this).width()
    var height = $(this).height()
    var html = $($this).find("._img").html()
    var append = '<article class="changImg"><section class="_img" style="height:' + height + 'px;width:' + width + 'px">' + html + '</section></article>'


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
        window.open(aHref);
    }else if (thisClass.indexOf('nodoit') > -1) {
        //啥事都不幹
    }else if (y.indexOf('jpg') > -1 || y.indexOf('javascript') > -1) {
        //啥事都不幹
    }else if (y.indexOf("#") > -1) {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
        }
    }else if (xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    }
    // else if (loginAlready !== "true"){
    //     alert("因版權問題只能給你看首頁!")
    // }
    else if (isCompetition) {
        // 競賽介紹葉面
        pagechange.CG_B(y, top, left, append);

    } else if ($($this).hasClass("a_winner")) {
        pagechange.CG_C(y);
    } else {
        pagechange.CG_A(y);
    }

})



var pagechange = {
    ///////////////////////////////////////
    //           cgpagechangeA           //
    ///////////////////////////////////////
    CG_A: function(href) {
        // 隨機顏色
        // var i = Math.floor(Math.random() * Math.floor(3)) + 1;
        // var color
        // var numb
        // switch (i) {
        //     case 1:
        //         var color = "#4f3015" //咖啡
        //         var numb = 1
        //         break;
        //     case 2:
        //         var color = "#236486" //藍色
        //         var numb = 2
        //         break;
        //     case 3:
        //         var color = "#d09b37" //金色
        //         var numb = 3
        //         break;
        //     default:
        //         break;
        // }


        // // 塞入結構
        // var circle = ""
        // for (var i = 0; i <= 10; i++) {
        //     var x = "<circle class='circle" + i + "' cx='50%' cy='50%' r='" + ((5 * i) + 0.01) + "%' stroke='" + color + "'> </circle>"
        //     var circle = x + circle
        // }
        // var logo = "<article id='svgLogo'><img src='../../assets/js/vendor/cgpagechange/cglogo" + numb + ".png' alt='' /></article>"
        // var svg = "<svg id='endbg'>" + circle + "</svg>" + logo
        // $("body").append(svg);

        // // 填入寬高
        // $windowHeight = $(window).height();
        // $windowWidth = $(window).width();
        // var diameter = Math.sqrt(($windowHeight * $windowHeight) + ($windowWidth * $windowWidth))
        // $("#endbg").attr("width", diameter * 2);
        // $("#endbg").attr("height", diameter * 2);


        // // 填入點選位置
        // $(document).click(function(ele) {
        //     var x = ele.clientX
        //     var y = ele.clientY
        //     $("#endbg").css("top", y);
        //     $("#endbg").css("left", x);
        // });
        // var diameterFinal = diameter / 5
        // // 擴散圓圈顏色部分
        // if (device) {
        //     $("circle").addClass("stroke");
        //     $("html").delay(1500).animate({ opacity: "0" }, {
        //         queue: true,
        //         duration: 600,
        //         easing: "easeOutQuad",
        //         complete: function() {
        //             setTimeout(function() {
        //                 window.location.assign(href);
        //             }, 100);
        //         }
        //     });
        // } else {
        //     $("circle").each(function() {
        //         $(this).css("stroke-width", diameterFinal);
        //     });
        $("html").delay(100).animate({ opacity: "0" }, {
            queue: true,
            duration: 800,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 100);
            }
        });
        // }




    },

    // 競賽辦法
    CG_B: function(href, top, left, append) {
        var formCompetition = "yes"
        localStorage.setItem("formCompetition",formCompetition);

        $("body").append(append);
        $(".changImg ._img").css({ "top": top, "left": left });
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "hidden", "padding-right": "1rem" });
        } else {
            $("body").css("overflow-y", "hidden");
        }
        setTimeout(function() {
            $(".changImg").addClass("center");
        }, 500)
        setTimeout(function() {
            $(".changImg").addClass("width");
        }, 1000);
        setTimeout(function() {
            window.location.assign(href);
        }, 1500);
    },

    CG_C: function(href) {
        $("body").append("<article class='winnerBlock'><section class='blockLeft'></section><section class='blockCenter'></section><section class='blockRight'></section></article>");
        setTimeout(function() {
            window.location.assign(href);
        }, 1400);
    }

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