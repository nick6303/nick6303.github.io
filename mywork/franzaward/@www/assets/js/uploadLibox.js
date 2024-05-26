

function ajaxUploadLibox() {
    $("body").append("<article class='uploadLibox'></article>")
    $.ajax({
        url: '../../views/service/uploadLibox.html',
    })
    .done(function(data) {
        $(".uploadLibox").html(data);
        uploadLibox.all();
    });
}

var uploadLibox = {
    open: function() {
        $(".uploadLibox").addClass("open");
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
        $(".uploadLibox .liboxClose").click(function() {
            uploadLibox.close();
        });

        $(document).click(function(e) {
            if ($(e.target).hasClass("uploadLibox")) {
                uploadLibox.close();
            }
        })
    },

    close: function() {
        $(".uploadLibox").removeClass("open");
        $(".uploadLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".uploadLibox").remove();
        }, 600);
    },

    scrollBar: function() {

        $(".uploadLibox .right .rules").mCustomScrollbar({});


        $(".uploadLibox .left .uploadList").niceScroll({
            cursorcolor: "transparent",
            cursorborder: "none",
        });

        // 手機板才啟動
        if ($(window).width() < 701) {
            $(".uploadLibox .right").niceScroll({
                cursorcolor: "transparent",
                cursorborder: "none",
            });
        }
    },

    agree: function() {
        $(".uploadLibox .right .agree input").click(function() {
            $(".uploadLibox .right .button ul li.startUpload").toggleClass("active")
        });
    },

    startfunction: function() {
        var checkbox = $(".uploadLibox .right .agree input").prop("checked");
        if (checkbox) {
            $('.uploadLibox .right .agree input').css("display", "none");
            $(".uploadLibox .left").addClass("open");
            $(".uploadLibox .right .button ul").css("transform", "translateY(100%)");
            $(".uploadLibox .right .agree").addClass("uploading");
        }
    },

    // 填上檔案數量
    fillInNumb: function() {
        var numb = $(".uploadLibox .left .uploadList ul li").length

        $(".uploadLibox .left .top .circle .words p:last-child").text(numb);
    },

    doughnut: function(a, b) {

        // 畫甜甜圈
        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");
        // 自訂參數
        var startDeg = (Math.PI / 180) * 270

        var endDegVar = (a / b * 360) - 90

        var endDeg = (Math.PI / 180) * endDegVar

        var trueOrFalse = false

        if (endDegVar == 270) {
            var startDeg = 0
            var endDeg = Math.PI * 2
            var trueOrFalse = true
        }

        ctx.beginPath();
        ctx.arc(50, 50, 45, startDeg, endDeg, trueOrFalse);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#33a1db"
        ctx.lineCap = "butt"
        ctx.stroke();
        ctx.restore();
    },

    uploadLine: function(target, width) {
        $(target).css("width", width);
    },

    all: function() {
        uploadLibox.open();
        uploadLibox.close_click();
        uploadLibox.scrollBar();
        uploadLibox.agree();
    }
}



// 上傳成功燈箱
function uploadSuccess() {
    $("body").append("<article class='successLibox'></article>")
    $.ajax({
        url: '../../views/service/successLibox.html',
    })
    .done(function(data) {
        $(".successLibox").html(data);
    });
}