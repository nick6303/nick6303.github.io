/***************************************************************************************************************************/
////////////////////////////////////
//             waypoint           //
////////////////////////////////////
var _waypoint = {
    spaceW: function () {
        $("").each(function (index, element) {
            $(element).waypoint({
                handler: function () {
                    $(element).addClass('show');
                },
                offset: '50%'
            });
        });
    }
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             b-lazy             //
////////////////////////////////////
var _Blazy = {

    spaceW: function () {
        var bLazy = new Blazy({
            offset: 100,
            success: function (ele) {
                Waypoint.refreshAll();
            }
        });
    },
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             slick              //
////////////////////////////////////


function slick(o) {
    var slick = {
        spaceSlick: function () {
            $("").slick({
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: false,
                fade: true,
                arrows: false,
            });
        }
    }

    if (o != undefined) {
        // 如果o有帶值 執行特定個 js
        slick[o]();

    } else if ($('.slick').length > 0) {
        // 如果o沒帶值 抓body的id  執行那個switch
        var page = $('body').attr('id');

        switch (page) {
            case 'home':
                slick.homeSlick();
                break;
            case 'product':
                slick.productSlick();
                break;
            default:
                break;
        }
    }
}


/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//         檢查是否為移動裝置          //
///////////////////////////////////////
function mobile() {

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS;

    return device;
}
/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//             space              //
////////////////////////////////////
var space = {

    selectPlace: function (ele) {
        $(ele).addClass("active").siblings().removeClass("active")
        if($(ele).hasClass("outDoor")){
            $(".dropdownList.outDoor").show();
            $(".dropdownList.inDoor").hide();
        }
        else if($(ele).hasClass("inDoor")){
            $(".dropdownList.outDoor").hide();
            $(".dropdownList.inDoor").show();
        }
    },

    buttonHover: function () {
        $(".buttons button").mouseover(function () {
            $(this).addClass("focus").siblings().removeClass("focus")
        });
    },

    niceScroll: function () {
        if ($(window).width() > 1024) {
            $("main .selectBox .selecRoom .scrollBox").niceScroll({
                railpadding: {
                    top: 0,
                    right: -25,
                    left: 0,
                    bottom: 0
                },
                cursorcolor: "#1b41a2",
                horizrailenabled: false,
            });

            $("main .selectBox .selectColor .mainColor").niceScroll({
                railpadding: {
                    top: 0,
                    right: -25,
                    left: 0,
                    bottom: 0
                },
                cursorcolor: "#1b41a2",
                horizrailenabled: false,
            });
            $("main .selectBox .selectColor .detailColor .scrollBox").niceScroll({
                railpadding: {
                    top: 0,
                    right: -25,
                    left: 0,
                    bottom: 0
                },
                cursorcolor: "#1b41a2",
                horizrailenabled: false,
            });
        } else {
            space.roomSlick();
        }
    },

    roomSlick: function () {
        $("main .selectBox .selecRoom ul").slick({
            infinite: false,
            slidesToShow: 3,
            prevArrow: ".selectBox .selecRoom .slick-left",
            nextArrow: ".selectBox .selecRoom .slick-right",
            responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }]
        });
    },

    // scrollbar重整
    resizeNicescroll: function () {
        if ($(window).width() > 1024) {
            $("main .selectBox .selecRoom .scrollBox,main .selectBox .selectColor .mainColor,main .selectBox .selectColor .detailColor .scrollBox").getNiceScroll().resize();
        }
    },

    selecRoom: function () {
        $("main .selectBox .selecRoom ul li").eq(0).addClass("active")

        // 點擊選擇空間
        $(".buttonBox ul li.room").click(function () {
            $("main .selectBox .selecRoom").show()
            $("main .selectBox .selectColor").hide()
            // scrollbar重整
            space.resizeNicescroll();
        });

        // 選擇照片
        $("main .selectBox .selecRoom ul li ._img").off().click(function () {
            $(this).closest("li").addClass("active").siblings().removeClass("active");
            var src = $(this).closest("li").attr("data-img")
            $(".showBox .roomImg img").attr("src", src);
            var eles = $(this).closest("li").prevAll()
            var top = 0
            for (var i = 0; i < eles.length; i++) {
                var top = top + $(eles[i]).innerHeight() + 2
            }
            if ($(window).width() > 1024) {
                $("main .selectBox .selecRoom .scrollBox").getNiceScroll(0).doScrollTop(top);
            } else {
                $("html,body").animate({
                    scrollTop: 0
                }, 800)
            }
        });
    },

    howManyRoom: function () {
        var numb = $("main .selectBox .selecRoom ul li").length
        $("main .selectBox .selecRoom .countUp .ch .numb").text(numb)
    },

    selectColor: function () {
        // 點擊選擇顏色
        $(".buttonBox ul li.color").click(function () {
            $("main .selectBox .selecRoom").hide()
            $("main .selectBox .selectColor").show()
            // scrollbar重整
            space.resizeNicescroll();
        });

        // 點選主顏色
        $(".selectBox .selectColor .mainColor ul li").click(function () {
            $(".selectBox .selectColor .mainColor").hide()
            $(".selectBox .selectColor .detailColor").show()
            // scrollbar重整
            space.resizeNicescroll();
            var color = $(this).css("background")
            $('.selectBox .selectColor .detailColor .back').css("background", color)
            if ($(window).width() < 1025) {
                $("html,body").animate({
                    scrollTop: $("main .selectBox").offset().top
                }, 800)
            }
        });

        // 點選回上一步
        $(".selectBox .selectColor .detailColor .back").click(function () {
            $(".selectBox .selectColor .detailColor").hide()
            $(".selectBox .selectColor .mainColor").show()
            // scrollbar重整
            space.resizeNicescroll();
        });

        // 點選顏色詳細選項
        $(".selectBox .selectColor .detailColor ul li").click(function () {
            var color = $(this).css("background")
            $(".showBox .colorBox").css("background", color);
            $("main .buttonBox ul li.inf").addClass("checked")
            if ($(window).width() < 1025) {
                $("html,body").animate({
                    scrollTop: 0
                }, 800);
            }
        });
    },

    roomReset: function () {
        space.howManyRoom();
        if ($(window).width() > 1024) {
            if ($("main .selectBox .selecRoom ul").has(".slick-list").length === 1) {
                $("main .selectBox .selecRoom ul").slick("unslick")
                space.niceScroll()
            }
            space.resizeNicescroll();
        } else if ($("main .selectBox .selecRoom ul").has(".slick-list").length === 1) {
            $("main .selectBox .selecRoom ul").slick("unslick")
            space.roomSlick();
        } else {
            space.roomSlick();
        }
    },

    all: function () {
        if ($("body").hasClass("index")) {
            space.buttonHover();
        }
        if ($("body").hasClass("detail")) {
            space.howManyRoom();
            space.niceScroll();
            space.selecRoom();
            space.selectColor();
            $(window).resize(function () {
                setTimeout(function () {
                    space.roomReset();
                },100);
            })
        }
    }
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/

$(document).ready(function () {
    // 截取頁面id
    var page = $('body').attr('id');
    if (page == "space") {

        /*waypoint*/
        _waypoint.spaceW();

        /* b-lazy */
        _Blazy.spaceW();

        /*slick*/
        slick('spaceSlick');
        space.all();
    }
});