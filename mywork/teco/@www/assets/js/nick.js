// 如果是前端使用 var user = true   
// 如果是後端使用 var user = false
var user = true

/***************************************************************************************************************************/

// 蘋果回上頁debug
function appleDebug() {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
}
/***************************************************************************************************************************/
///////////////////////////////////////
//            限制字數               //
///////////////////////////////////////

function wordlatest(len, target) {

    $(target).each(function() {
        if ($(this).text().length > len) {
            var text = $(this).text().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//          是否為移動裝置            //
///////////////////////////////////////

function mobile() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS

    return device
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {
    customizeW: function() {
        if ($("main").hasClass("result")) {
            _waypoint.eachWaypoint(".resultContent .box", '80%');
        }
    },

    shopW: function() {
        _waypoint.eachWaypoint(".productList", '80%');

        if ($("main").hasClass("checkout")) {
            _waypoint.eachWaypoint(".gifts,.purchase,.discount", '100%');
        }

        if ($("main").hasClass("payment")) {
            _waypoint.eachWaypoint(".shipping,.invoic,.payway", '100%');
        }
    },

    memberW: function() {

        _waypoint.eachWaypoint(".memberCenter .content section", '70%');

        _waypoint.eachWaypoint(".infManage form .option section", '70%');

        _waypoint.eachWaypoint(".list .box", '70%');

        _waypoint.eachWaypoint(".billDetail .content section,.returnDetail .content section", '70%');

        _waypoint.eachWaypoint(".favorite .list ul li", '60%');

        _waypoint.eachWaypoint(".favorite .list ul li", '60%');

        _waypoint.singleWaypoint(".messageContent .addMessage", '80%');

        _waypoint.eachWaypoint(".messageContent .messageList a", '70%');

        _waypoint.eachWaypoint(".messageDetail .messageContent .messageList ", '70%');

        _waypoint.eachWaypoint(".messageDetail .messageContent .messageList li", '70%');

        _waypoint.eachWaypoint(".dividend .table,.list ._title", '70%');
    },

    catalogueW: function() {
        $(".catalogueContent .box").each(function(index, element) {
            $(element).waypoint({
                handler: function(direction) {
                    if (direction == "up" && $(window).width() > 1024) {
                        $(element).removeClass("show")
                    }
                    if (direction == "down") {
                        $(element).addClass("show")
                    }
                },
                offset: '80%'
            });
        });
    },

    // 樣式
    eachWaypoint: function(target, offsetValue) {
        $(target).each(function(index, element) {
            $(element).waypoint({
                handler: function() {
                    $(element).addClass('show');
                },
                offset: offsetValue
            });
        });
    },

    singleWaypoint: function(target, offsetValue) {
        $(target).waypoint({
            handler: function() {
                $(target).addClass('show');
            },
            offset: offsetValue
        });
    }
}

/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////

var _Blazy = {
    customizeW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
                $(ele).closest(".box").addClass("in");
                $(ele).closest("._img").addClass("show");
            }
        });
    },

    memberW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
                $(ele).closest("li").addClass("in");
            }
        });
    },

    catalogueW: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
                $(ele).closest(".box").addClass("in");
            }
        });
    },
}

/***************************************************************************************************************************/
/***************************************************************************************************************************/
////////////////////////////////////
//           go top               //
////////////////////////////////////

function goTop() {
    $(".goTop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1500, 'easeOutCubic');
    });
}

/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           dropDown             //
////////////////////////////////////



function dropDown() {

    $(document).click(function (e) {
        if ($(".dropDown").has(e.target).length === 0) {
            $(".dropDown").find("ul").slideUp(500);
        }else{
            var dropDown = $(e.target).closest(".dropDown").attr("class")
            $(".dropDown").each(function(){
                
                if($(this).attr("class") != dropDown){
                    $(this).find("ul").slideUp(500);
                }
            })
        }
    })

    $(".dropDown").each(function() {
        $this = $(this)
        $(this).find(".selectMenu").off().click(function() {
            if ($(this).closest(".dropDown").find("ul").css("display") == "none") {
                $(this).closest(".dropDown").find("ul").slideDown(500);
            } else {
                $(this).closest(".dropDown").find("ul").slideUp(500);
            }
        });

        $(this).find("li").click(function() {
            $(this).closest("ul").slideUp(500);
            $(this).closest(".dropDown").find(".selectMenu").addClass("checked").find("p").text($(this).text());
            $(this).closest(".dropDown").find("input").val($(this).text());

        });

        // $(document).click(function (e) {
        //     if ($(".dropDown").has(e.target).length === 0) {
        //         $(".dropDown").find("ul").slideUp(500);
        //     }
        // })

        $(this).find("ul").mCustomScrollbar({
            mouseWheel: {
                preventDefault: true,
            },
        });
    });
}




/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           驗證碼填寫            //
////////////////////////////////////

function vcode(target) {
    // 檢查是否為移動裝置
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS
    var mobile = device && $(window).width() < 850
    //cache dom
    var $inputs = $(target).find("input");
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
        } else {
            return false
        }
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           倒數計時              //
////////////////////////////////////

function countDown(target) {
    var count_text = $(target).find("p")
    var minutes = $(target).find("p").eq(0).attr('data-m') / 1
    var seconds = $(target).find("p").eq(1).attr('data-s') / 1

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    count_text.eq(0).text(minutes);
    count_text.eq(1).text(seconds);
}

// 倒數計時是否不須暫停
var noStop = true

//開始計時
function strat_countdown(target, eventFunction) {
    setTimeout(function() {
        return noStop = true
    }, 1000);
    setTimeout(function() {
        var count_text = $(target).find("p")
        var minutes = $(target).find("p").eq(0).attr('data-m') / 1
        var seconds = $(target).find("p").eq(1).attr('data-s') / 1
        /***** 起始值 *****/

        // 分鐘
        if (minutes !== 0) {
            minutes = minutes - 1;
        }

        if (minutes < 10) {
            minutes = "0" + minutes
        }
        count_text.eq(0).text(minutes);

        //秒數
        var ippp = seconds
        if (seconds == 0) {
            var ippp = 60;
        }
        ippp = ippp - 1;
        if (ippp < 10) {
            ippp = '0' + ippp;
        }
        count_text.eq(1).text(ippp);

        //啟動計時器
        setDelay();
        /***** 起始值 *****/
        //計時器功能
        function setDelay() {

            if (minutes > 0 && ippp > 0 && noStop) {
                //分 秒 皆大於0 (ex: 2:35, 2:39之類的)
                t = setTimeout(function() {
                    ippp = ippp - 1;
                    if (ippp < 10) {
                        ippp = '0' + ippp;
                    }
                    count_text.eq(1).text(ippp);
                    setDelay();
                }, 1000)

            } else if (minutes > 0 && ippp == 0 && noStop) {
                //分大於0 秒數剛好為0 (ex: 2:00, 5:00之類的)

                // 分
                minutes = minutes - 1;
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                count_text.eq(0).text(minutes);

                // 秒
                // 歸零秒數
                ippp = 60;
                ippp = ippp - 1;
                count_text.eq(1).text(ippp);
                setDelay();
            } else if (minutes == 0 && ippp > 0 && noStop) {
                //分為0 秒數還大於0 (ex: 0:09, 0:36之類的)
                t = setTimeout(function() {
                    // 秒
                    ippp = ippp - 1;
                    if (ippp < 10) {
                        ippp = '0' + ippp;
                    }
                    count_text.eq(1).text(ippp);
                    setDelay();
                }, 1000)
            } else if (minutes == 0 && ippp == 0 && noStop) {
                // 倒數完畢
                // 有填入function才啟動
                if (eventFunction != undefined) {
                    eventFunction();
                }
            }
        }
    }, 1001);
    return noStop = false
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           客製化主頁            //
////////////////////////////////////

var customize = {

    selectMeasureWay: function() {
        $(".openForm").click(function() {
            if ($(this).closest("section").siblings().hasClass("active")) {
                customize.noticeLibox(this);
            } else {
                customize.measureOpen(this);
            }
        });
    },

    noticeLibox: function(target) {
        $(".notice").addClass("open");

        $(".notice section .button ul li").click(function() {
            $(".notice").removeClass("open").addClass("close");
            setTimeout(function() {
                $(".notice").removeClass("close");
            }, 400);
            if ($(this).hasClass("yes")) {
                customize.measureOpen(target);
            }
        });

        $(".notice").click(function(e) {
            if ($(e.target).hasClass("notice")) {
                $(".notice").removeClass("open").addClass("close");
                setTimeout(function() {
                    $(".notice").removeClass("close")
                }, 400);
            }
        });
    },

    measureOpen: function(target) {
        $this = $(target)
        // 清除原本開啟的表格資料
        $this.closest("section").siblings().find("form")[0].reset()

        //開啟點選的表格  
        $this.find(".numb,p").slideUp(300);
        $this.closest("section").addClass("active");

        // 關閉原本開啟的表格
        $this.closest("section").siblings().find("form").slideUp(300);
        $this.closest("section").siblings().removeClass("active");

        setTimeout(function() {
            //關閉原本開啟的表格
            $this.closest("section").siblings().find(".numb,p").slideDown(500);
            //開啟點選的表格 
            $this.closest("section").find("form").slideDown(500);

            // 手機板才啟動
            if ($(window).width() < 701) {
                $this.find("._img").slideDown(500);
                $this.closest("section").siblings().find("._img").slideUp(500);
            }
        }, 300);

        setTimeout(function() {
            // 自動focus在第一個表格
            $this.closest("section").find(".workbox input").eq(0).focus()

            // scrollbar重整
            $("main article").getNiceScroll().resize();
        }, 800);
    },

    inputFocus: function() {
        $(".workbox").click(function() {
            $(this).find("input[type='number']").focus();
            $(this).find("input[type='text']").focus();
        });

        $("input[type='number'],input[type='text']").each(function() {
            // 取消enter輸入
            $(this).on("keypress", function() {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    $(this).closest("form").find("button").click()
                }
            });

            $(this).focusin(function() {
                $(this).closest(".workbox").addClass("active");
                var thisClass = $(this).closest(".workbox")
                if (thisClass.hasClass("length")) {
                    $(".measuring ._img .width,.measuring ._img .high").css("opacity", "0");
                    $(".measuring ._img .length").css("opacity", "1");
                } else if (thisClass.hasClass("width")) {
                    $(".measuring ._img .length,.measuring ._img .high").css("opacity", "0");
                    $(".measuring ._img .width").css("opacity", "1");
                } else if (thisClass.hasClass("high")) {
                    $(".measuring ._img .length,.measuring ._img .width").css("opacity", "0");
                    $(".measuring ._img .high").css("opacity", "1");
                }
            });

            $(this).focusout(function() {
                $(this).closest(".workbox").removeClass("active");
                $(".measuring ._img img").css("opacity", "1");
            });
        });
    },

    measureHouse: function() {
        $(".measuring .left form .workbox").each(function() {
            $(this).mouseover(function() {
                if ($(this).hasClass("length")) {
                    $(".measuring ._img .width,.measuring ._img .high").css("opacity", "0");
                    $(".measuring ._img .length").css("opacity", "1");
                } else if ($(this).hasClass("width")) {
                    $(".measuring ._img .length,.measuring ._img .high").css("opacity", "0");
                    $(".measuring ._img .width").css("opacity", "1");
                } else if ($(this).hasClass("high")) {
                    $(".measuring ._img .length,.measuring ._img .width").css("opacity", "0");
                    $(".measuring ._img .high").css("opacity", "1");
                }
            });


            $(this).mouseout(function() {
                if ($(".measuring .left form .active").length != 0) {
                    $(".measuring .left form .active").each(function() {
                        var thisClass = $(this).attr("class")
                        var targetClass = thisClass.replace(/ workbox/, "").replace(/ active/, "")
                        if (targetClass == "length") {
                            $(".measuring ._img .width,.measuring ._img .high").css("opacity", "0");
                            $(".measuring ._img .length").css("opacity", "1");
                        } else if (targetClass == "width") {
                            $(".measuring ._img .length,.measuring ._img .high").css("opacity", "0");
                            $(".measuring ._img .width").css("opacity", "1");
                        } else if (targetClass == "high") {
                            $(".measuring ._img .length,.measuring ._img .width").css("opacity", "0");
                            $(".measuring ._img .high").css("opacity", "1");
                        }
                    });
                } else {
                    $(".measuring ._img img").css("opacity", "1");
                }
            });
        });
    },

    indexNicescroll: function() {
        $("main article").niceScroll({
            cursorborder: 'none',
            cursorcolor: 'transparent',
        });
    },

    animateDelay: function() {
        $(".box").each(function() {
            // 電腦版
            var i = $(this).index() % 3;

            // 平板
            if ($(window).width() < 1025) {
                var i = $(this).index() % 2;
            }

            // 手機板
            if ($(window).width() < 701) {
                var i = 0;
            }

            var delayTime = i * .3 + "s"
            $(this).css("animation-delay", delayTime)

        });
    },

    // 計算有幾個搜尋結果
    quantity: function() {
        var i = $(".resultContent .boxs .box").length
        $(".topTitle section .match span").text(i);
    },

    all: function() {
        if ($("main").hasClass("index")) {
            customize.inputFocus();
            customize.selectMeasureWay();
            customize.measureHouse();
            customize.indexNicescroll();
        }

        if ($("main").hasClass("result")) {
            customize.animateDelay();
            customize.quantity();
        }
        if ($("main").hasClass("contact")) {
            // dropDown();
            customize.inputFocus();
        }
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//          配件加購說明           //
////////////////////////////////////


var accessoriesInf = {
    number: function() {
        $(".areaLeft").each(function() {
            var i = $(this).closest(".area").index()

            if (i > 9) {
                var numb = i
            } else {
                var numb = "0" + i
            }

            $(this).find(".numb").text(numb)
        });
    },

    areaLeftFixed: function() {
        var windowHeight = $(window).height()
        $(window).scroll(function() {
            $(".feature .area").each(function() {
                var area = $(this)
                var areaLeft = $(this).find(".areaLeft")
                if (area.innerHeight() > windowHeight) {
                    var top = this.getBoundingClientRect().top
                    var bottom = this.getBoundingClientRect().bottom
                    var areaLeftHeight = areaLeft.innerHeight();
                    var topTargetPoint = windowHeight / 2 - areaLeftHeight / 2
                    var bottomTargetPoint = windowHeight / 2 + areaLeftHeight / 2
                    // 區塊浮動
                    if (top <= topTargetPoint) {
                        areaLeft.addClass("fixed");
                        // 到底部
                        if (bottom <= bottomTargetPoint) {
                            areaLeft.addClass("bottom");
                        } else if (bottom > bottomTargetPoint) {
                            areaLeft.removeClass("bottom");
                        }
                    }
                    // 取消區塊浮動
                    else if (top > topTargetPoint) {
                        areaLeft.removeClass("fixed");
                    }
                    areaLeft.removeClass("normal");
                }
                // 區塊高度沒超過螢幕高度
                else {
                    areaLeft.addClass("normal");
                }
            });
        });
    },

    all: function() {
        if ($("main").hasClass("accessoriesInf")) {
            accessoriesInf.number();
            if ($(window).width() > 901) {
                accessoriesInf.areaLeftFixed();
            }
        }
    }
}





/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//              購物車             //
////////////////////////////////////

var shop = {
    orderDetailBottom: function() {
        shop.orderDetailBottom_check();

        $(window).scroll(function() {
            shop.orderDetailBottom_check();
        });
    },

    orderDetailBottom_check: function() {
        var scrollBottom = $(window).scrollTop() + $(window).height()
        var footerTop = $("footer").offset().top
        if (scrollBottom >= footerTop) {
            $(".orderDetail").addClass("bottom");
        } else {
            $(".orderDetail").removeClass("bottom");
        }
    },

    customizeOrderLibox: function() {
        $(".openOrder").click(function() {
            $("body").append("<article class='customizeOrderLibox'></article>");
            var src = $(this).attr("data-src")
            $.ajax({
                    url: src,
                })
                .done(function(data) {
                    $(".customizeOrderLibox").html(data);
                    if (!mobile()) {
                        $("body").css({
                            "overflow-y": "hidden",
                            "padding-right": "1rem"
                        });
                    } else {
                        $("body").css("overflow-y", "hidden");
                    }

                    scroll();
                    $(".customizeOrderLibox .topNav .back").click(function() {
                        close();
                    });

                    $(".customizeOrderLibox").click(function(e) {
                        if ($(e.target).hasClass("customizeOrderLibox")) {
                            close();
                        }
                    });
                });
        });

        function close() {
            $(".customizeOrderLibox").addClass("close");
            if (!mobile()) {
                $("body").css({
                    "overflow-y": "visible",
                    "padding-right": "0"
                });
            } else {
                $("body").css("overflow-y", "visible");
            }
            setTimeout(function() {
                $(".customizeOrderLibox").remove();
            }, 400);
        }

        function scroll() {
            $(".customizeOrderLibox section").niceScroll();
        }
    },

    formDivDelay: function() {
        $("form>div").each(function() {
            var i = $(this).index()
            var delayTime = i * 0.3 + 1 + "s"
            $(this).css("animation-delay", delayTime);
        });
    },

    // 價格初始化
    priceInitialize: function() {
        $(".amount input[type='number'],.inputArea input[type='number']").each(function() {
            var val = $(this).val();
            var price = $(this).closest("div").parent().find(".price").attr("data-price") * val
            if (val !== NaN) {
                $(this).closest("div").parent().find(".price").text(price.toLocaleString())
            }
        })
    },

    showDetailPrice: function() {
        if (mobile()) {
            $(".others div,.freight").css("display", "none");
        }
        $(".totalPrice button").click(function() {
            $(".others div,.freight").slideToggle({
                start: function() {
                    $(this).css({
                        "display": "flex"
                    });
                },
                duration: 400,
            });
            $(".others div:first-child,.totalPrice button").toggleClass("active");
        });
    },

    rebateOrcode: function() {
        $(".discountList>div").eq(0).addClass("active").find(".price").removeClass("notYou");
        $(".discountList .rebate,.discountList .code").click(function() {
            $(this).addClass("active").find(".price").removeClass("notYou");
            $(this).siblings(".rebate,.code").removeClass("active").find(".price").addClass("notYou");

            // 重新計算總金額
            totalPrice();
        });

        $(".discount form.discountList>div .inputArea").each(function() {
            if ($(this).find(">*").length == 1) {
                $(this).css("background-color", "transparent")
            }
        })
    },

    textInput: function() {
        $("main input[type='text'],main input[type='number']").each(function() {
            $this = $(this);
            // 將原本的enter的功能取代變click the button
            $(this).keydown(function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault()
                    $(this).siblings("button").click();
                }
            });
            //訂單確認頁面  click表格內任意點 自動focus input
            $(this).closest(".inputArea").parent().click(function() {
                $(this).find("input[type='text']").focus();
            });
            //付款方式頁面 click表格內任意點 自動focus input
            $(this).closest(".textInputs").find("div").click(function() {
                $(this).find("input").focus();
            });

            // rwdPlaceholder
            rwdPlaceholder(this, 451);
        });

        // rwdPlaceholder
        function rwdPlaceholder(ele, widthLength) {
            if ($(ele).attr("data-rwdPlaceholder") !== "" && $(window).width() < widthLength) {
                $(ele).attr("placeholder", $(ele).attr("data-rwdPlaceholder"));
            }
        }
    },

    // 新增住址
    addAddress: function() {
        $("input[name='packageAddress'],input[name='ticketAddress']").off().click(function() {
            if ($(this).parent().hasClass("addAddress")) {
                $(this).closest(".item").find(".textInputs").slideDown({
                    duration: 500,
                    progress: function() {
                        shop.orderDetailBottom_check();
                        // dropDown();
                    },
                });

            } else if (!$(this).parent().hasClass("addAddress") && $(this).closest(".item").find(".textInputs").css("display") == "flex") {
                $(this).closest(".item").find(".textInputs").slideUp({
                    duration: 500,
                    progress: function() {
                        shop.orderDetailBottom_check();
                    },
                });
            }
        });

        $("input[name='ticketType']").off().click(function() {
            if ($(this).parent().attr("data-hasTextInput")) {
                var className = ".type." + $(this).parent().attr("class");
                $(className).slideDown(500).siblings(".type").slideUp(500);
            } else {
                $(".type").slideUp(500);
            }

        });
    },

    // 選擇付費方式
    selectPayway: function() {
        $(".tables .payway form .item").each(function() {
            $(this).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                if ($(this).has(".checkBoxs").length === 0) {
                    $(".tables .payway form .item .checkBoxs input[type='radio']").attr('checked', false);
                }
            });
        });


    },

    all: function() {
        shop.orderDetailBottom();
        shop.customizeOrderLibox();
        shop.formDivDelay();
        shop.priceInitialize();
        shop.showDetailPrice();
        if ($("main").hasClass("checkout")) {
            shop.rebateOrcode();
            shop.textInput();
        }
        if ($("main").hasClass("payment")) {
            shop.addAddress();
            shop.textInput();
            shop.selectPayway();
        }
    }
}


/***************************************************************************************************************************/
/***************************************************************************************************************************/
////////////////////////////////////
//             會員中心            //
////////////////////////////////////
var member = {

    inputBoxFocus: function() {
        $("main input[type='text']:not(.datePicker)").each(function() {
            $(this).parent().click(function() {
                $(this).find("input").focus();
            });
        });
    },

    simpleLibox: function() {
        libox(".openWhatLibox", ".whatLibox");

        libox(".openTerms", ".terms");

        function libox(button, libox) {
            $(button).click(function() {
                $(libox).addClass("open");
            });

            $(libox).find(".back").click(function() {
                close();
            });

            var className = libox.replace(/./, "");

            $(libox).click(function(e) {
                if ($(e.target).hasClass(className)) {
                    close();
                }
            })

            function close() {
                $(libox).removeClass("open").addClass("close");
                setTimeout(function() {
                    $(libox).removeClass("close");
                }, 400);
            }
        }
    },

    perfectSCroll: function() {
        if (mobile() && $("#member .topTitle ul").length != 0) {
            const container = document.querySelector('#member .topTitle ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    dateDrooper: function() {
        $('.datePicker').dateDropper();

        $('.datePicker').change(function() {
            var value = $(this).val();
            $(".birthday p").text(value);
            isdate();
        });

        isdate();

        function isdate() {
            $p = $(".birthday p")
            if ($p.text() == $p.attr("data-placeholder")) {
                $p.css("color", "#7676768")
            } else {
                $p.css("color", "#000")
            }
        }
    },

    showPassWord: function() {

        // type="text"
        var text = $("#password").text()
        // type="password"
        var password = ""
        for (var i = 0; i < text.length; i++) {
            var password = password + "●"
        }
        $("#password").text(password);

        // 點選眼睛按鈕時 
        $(".showPassWord").click(function() {

            // 擷取目前的值
            if (this.checked) {
                // 換成type="text"
                $("#password").text(text);
            } else {
                // 換成type="password"
                $("#password").text(password);
            }

        });
    },

    gender: function() {
        $("input[name='gender']").each(function() {
            var value = $('input[name="gender"]:checked').val()
            $(".picture ._img figure").attr("class", value);
            $(this).change(function() {
                var value = $('input[name="gender"]:checked').val()
                $(".picture ._img figure").attr("class", value);
            });
        });
    },

    liDelay: function() {
        $(".billDetail .content section>ul li,.returnDetail .content section>ul li").each(function() {
            var i = $(this).index()
            var delayTime = i * 0.2 + 1 + "s"
            $(this).css("animation-delay", delayTime);
        });

        $(".dividend .table ul li").each(function() {
            var i = $(this).index()
            var delayTime = i * 0.2 + 0.8 + "s"
            $(this).css("animation-delay", delayTime);
        });
    },

    coutUp: function() {
        $(".billList .list .box,.return .list .box").each(function() {
            var i = $(this).index() + 1
            if (i < 10) {
                var i = "0" + i
            }
            $(this).find(".numb").text(i)
        });
    },

    animateDelay: function() {
        $(".favorite .list ul li").each(function() {
            var i = $(this).index()
            var z
            if ($(window).width() < 701) {
                var z = 0
            } else if ($(window).width() < 901) {
                var z = i % 2
            } else {
                var z = i % 3
            }

            var delayTime1 = z * 0.24 + "s"
            var delayTime2 = z * 0.24 + 0.24 + "s"

            $(this).find("._img span:last-child").css("animation-delay", delayTime1);
            $(this).find("._img span:first-child,._img img").css("animation-delay", delayTime2);
            // $(this).css("animation-delay", delayTime);
        });
    },

    hasCollection: function() {
        if ($(".favorite .list ul li").length === 0) {
            $(".nothing").show();
        } else {
            $(".nothing").hide();
        }
    },
    wordlatest: function() {
        wordlatest(120, ".messageList ._text .words p");
        if ($(window).width() < 700) {
            wordlatest(60, ".messageList ._text .words p");
        }
    },

    all: function() {
        member.inputBoxFocus();
        vcode("#vcode");
        countDown(".countUp");
        member.perfectSCroll();
        member.liDelay();
        member.coutUp();
        member.simpleLibox();
        // dropDown();
        if ($("main").hasClass("infManage")) {
            member.showPassWord();
            member.dateDrooper();
            member.gender();
        }
        if ($("main").hasClass("billDetail")) {
            shop.customizeOrderLibox();
        }
        if ($("main").hasClass("favorite")) {
            member.animateDelay();
            member.hasCollection();
        }
        if ($("main").hasClass("message")) {
            member.wordlatest();
        }
    }
}




/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             電子型錄            //
////////////////////////////////////

var catalogue = {

    perfectSCroll: function() {
        if (mobile() && $(".topTitle>div ul").length != 0) {
            const container = document.querySelector('.topTitle>div ul');
            const ps = new PerfectScrollbar(container, {
                suppressScrollY: true,
                maxScrollbarLength: 1
            });
        }
    },

    liClick: function() {
        $(".topTitle>div ul li").each(function() {
            $(this).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
            });
        });
    },

    all: function() {
        catalogue.perfectSCroll();
        catalogue.liClick();
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/


$(document).ready(function() {

    // 蘋果回上頁debug
    appleDebug();

    // 截取頁面id
    var page = $('main').attr('id');

    dropDown()
    if (page == "customize") {

        customize.all();

        accessoriesInf.all();

        _Blazy.customizeW();

        _waypoint.customizeW();

        goTop();
    }


    if (page == "shop") {

        shop.all();
        _waypoint.shopW();
    }


    if (page == "member") {
        _Blazy.memberW();
        member.all();
        _waypoint.memberW();
    }


    if (page == "catalogue") {
        catalogue.all();
        _waypoint.catalogueW();
        _Blazy.catalogueW();
    }


});