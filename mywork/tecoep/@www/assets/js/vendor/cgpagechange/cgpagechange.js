///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
$('body').on('click', 'a', function(e) {
    e.preventDefault();
    var thisClass = $(this).attr("class") ? $(this).attr("class") : 'noClass'
    var thisTarget = $(this).attr("target");
    var aHref = $(this).attr("href");
    // 偽燈箱動畫
    var fakeLibox = $(this).data("fake-libox");
    // 本地
    var x = window.location.pathname
    var xArr = x.split("/");
    xArr = lastArr(xArr)
    // 連結
    var y = $(this).attr("href");
    var yArr = y.split("/");
    yArr = lastArr(yArr)

    // 判斷是否已經登入
    // var loginAlready = localStorage.getItem("alreadyLogin")

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
    } else if (thisClass.indexOf('nodoit') > -1) {
        //啥事都不幹
    } else if (y.indexOf('jpg') > -1 || y.indexOf('javascript') > -1) {
        //啥事都不幹
    } else if (y.indexOf("#") > -1) {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
        }
    } else if (xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    }
    // else if (loginAlready !== "true"){
    //     alert("因版權問題只能給你看首頁!")
    // }
    else if (fakeLibox) {
        // 偽燈箱動畫
        pagechange.CG_B(y);
    } else {
        pagechange.CG_A(y);
    }

})

///////////////////////////////////////
//           cgpagechangeA           //
///////////////////////////////////////

var pagechange = {
    CG_A: function(href) {
        var radom = Math.floor(Math.random() * Math.floor(2)) + 1

        switch (2) {
            case 1:
                // 方案一
                $("html").append("<div id='endbg'></div>");

                for (var i = 0; i < 3; i++) {
                    $("#endbg").append("<div class='box1'></div>");
                }

                $("#endbg .box1").each(function() {
                    var i = $(this).index();
                    var delayTime = i * .2 + "s"
                    $(this).css("animation-delay", delayTime);

                });

                var str = 1
                localStorage.setItem("animation", str);

                $("body").delay(1400).animate({ opacity: "0" }, {
                    queue: true,
                    duration: 10,
                    easing: "easeOutQuad",
                    complete: function() {
                        setTimeout(function() {
                            window.location.assign(href);
                        }, 100);
                    }
                });

                break;
            case 2:
                // 方案二
                $("html").append("<div id='endbg'><div class='cglogo'><img src='../../assets/img/hd_logo.png'><div></div>");
                for (var i = 0; i < 8; i++) {
                    $("#endbg").append("<div class='box2'><div class='smallbox'></div></div>");
                }

                $("#endbg .box2").each(function() {
                    // var i = Math.floor(Math.random() * Math.floor(5));
                    var i = $(this).index();
                    var zindex = i
                    var delayTime = i * .1 + "s"

                    $(this).css("z-index", zindex);
                    $(this).find(".smallbox").css("animation-delay", delayTime);

                });

                // var str = 2
                // localStorage.setItem("animation", str);

                $("html").delay(2000).animate({ opacity: "0" }, {
                    queue: true,
                    duration:200,
                    easing: "easeOutQuad",
                    complete: function() {
                        setTimeout(function() {
                            window.location.assign(href);
                        }, 100);
                    }
                });

                break;
        }

    },

    CG_B: function(href) {
        $("body").append("<div class='fakeLiboxOpen'></div>");

        $("body").delay(800).animate({ opacity: "0" }, {
            queue: true,
            duration: 200,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 100);
            }
        });
    }
}


// checkIsfromstartbg();

// 檢查是否上一頁是偽燈箱
function checkIsfromstartbg() {
    var check = localStorage.getItem("IsItFromFakeLibox");

    if (check == "yes") {

    } else {
        startbg();
    }
}



function startbg() {
    if ($("body").hasClass("detail") && $('body').attr('id') == "news") {
        // 甚麼都不做
    } else {
       // 方案二
            $("body").append("<div id='startbg'><div class='cglogo'><div></div>");
            for (var i = 0; i < 8; i++) {
                $("#startbg").append("<div class='box2'><div class='smallbox'></div></div>");
            }

            $("#startbg .box2").each(function() {
                // var i = Math.floor(Math.random() * Math.floor(5));
                var i = $(this).index();
                var zindex = i
                var x = i * 0.1
                var delayTime = x + "s"

                $(this).css("z-index", zindex);
                $(this).find(".smallbox").css("animation-delay", delayTime);
            });

            setTimeout(function() {
                $("#startbg").remove();
            }, 1900);
    }
}


function startbgradom() {
    var radom = parseInt(localStorage.getItem("animation"))
    switch (2) {
        case 1:
            // 方案一
            $("body").append("<div id='startbg'></div>");
            for (var i = 0; i < 3; i++) {
                $("#startbg").append("<div class='box1'></div>");
            }
            $("#startbg .box1").each(function() {
                var i = $(this).index();
                var delayTime = i * 0.2 + "s"
                $(this).css("animation-delay", delayTime);
            });

            setTimeout(function() {
                $("#startbg").remove();
            }, 1400);

            break;

        case 2:
            // 方案二
            $("body").append("<div id='startbg'></div>");
            for (var i = 0; i < 8; i++) {
                $("#startbg").append("<div class='box2'><div class='smallbox'></div></div>");
            }

            $("#startbg .box2").each(function() {
                // var i = Math.floor(Math.random() * Math.floor(5));
                var i = $(this).index();
                var zindex = i
                var x = i * 0.1
                var delayTime = x + "s"

                $(this).css("z-index", zindex);
                $(this).find(".smallbox").css("animation-delay", delayTime);
            });

            setTimeout(function() {
                $("#startbg").remove();
            }, 1900);

            break;
    }
}