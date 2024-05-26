/***************************************************************************************************************************/
///////////////////////////////////////////////
//               會員驗證碼填寫             ///
///////////////////////////////////////////////

function vcode() {
    // 檢查是否為移動裝置
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS
    var mobile = device && $(window).width() < 850

    //cache dom
    var $inputs = $("#vcode").find("input");

    //bind events
    $inputs.on('keyup', processInput);

    //define methods
    function processInput(e) {
        // 紀錄按的按鍵
        var value = this.value

        if (isNaN(value)) {
            var value = ""
        }
        // // 清除原本的內容
        $(this).val("")
        // // 塞入剛剛的紀錄內容
        $(this).val(value)

        var x = e.charCode || e.keyCode;
        if ((x == 8 || x == 46) && this.value.length == 0) {
            var indexNum = $inputs.index(this);
            if (indexNum != 0) {
                $inputs.eq($inputs.index(this) - 1).focus();

            }
        }

        if (ignoreChar(e)) {
            return false;
        } else if (this.value.length == this.maxLength) {
            $(this).closest('li').addClass("checked");
            if (!mobile) {
                $(this).closest('li').next('li').find('input').focus();
            }
        } else if (this.value.length < this.maxLength) {
            $(this).closest('li').removeClass("checked");
        }
    }

    function ignoreChar(e) {
        var x = e.charCode || e.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40) {
            return true;
        } else { return false }
    }
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
//////////////////////////////////////////////
//                開啟報名燈箱              //
//////////////////////////////////////////////


function openRegisteredLibox() {
    $(".step3 .button a:last-child").click(function() {
        ajaxRegisteredLibox();
    });
}


function ajaxRegisteredLibox() {

    $("body").append("<article class='registeredLibox'></article>")
    $.ajax({
            url: '../../views/service/registeredLibox.html',
        })
        .done(function(data) {
            $(".registeredLibox").html(data);
            registeredLibox.all();
        });
}

var registeredLibox = {
    open: function() {
        $(".registeredLibox").addClass("open");
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
        $(".registeredLibox .liboxClose").click(function() {
            registeredLibox.close();
        });
    },

    close: function() {
        $(".registeredLibox").removeClass("open");
        $(".registeredLibox").addClass("close");
        // 電腦版
        if ($(window).width() > 1024) {
            $("body").css({ "overflow-y": "visible", "padding-right": "0" });
        }
        // 行動裝置
        else {
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function() {
            $(".registeredLibox").remove();
        }, 800);
    },

    // 插入數字
    appendNumb: function() {
        $(".registeredLibox .category ul li").each(function() {
            $this = $(this)
            var i = $this.index() + 1
            var numb = "0" + i
            if (i > 9) {
                var numb = i
            }
            $this.find("span").text(numb);
        });

        var liNumb = document.querySelectorAll(".registeredLibox .category ul li").length;
        $(".registeredLibox .word .numb").text(liNumb);
    },

    liboxToTop: function() {
        $(".liboxToTop").click(function() {
            $(".registeredLibox").animate({
                scrollTop: 0
            }, 600, "easeOutCubic");
        });
    },

    all: function() {
        registeredLibox.open();
        registeredLibox.close_click();
        registeredLibox.appendNumb();
        registeredLibox.liboxToTop();
    }
}


/***************************************************************************************************************************/


$(document).ready(function() {
    vcode();
    openRegisteredLibox();
});