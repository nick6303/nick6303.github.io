////////////////////////////////////
//      tab Menu to select        //
////////////////////////////////////

var menuselect = {
    open: function() {
        $('.selectMenu').click(function() {

            var el = $(this)

            $(el).parent().focusout(function() {
                $(el).parent().find("ul").slideUp(500);
            });

            $(el).parent().focusout(function() {
                $(".hidden_message2").css("display", "none");
            });

            // 選擇的條件
            var i = $(el).parent().parent().prevAll().length;

            // 點選選擇縣市及展示總攬開啟selectLibox
            if (i == 0 || i == 2) {

                $(el).toggleClass("open");
                $(el).parent().find('ul').slideToggle(500);
                $(el).parent().parent().css("overflow", "visible");

            }


            // 點選選擇區域必須在已選完縣市情況下才開啟selectLibox
            else if (i == 1 && $(".city").hasClass("checked")) {
                $(el).toggleClass("open");
                $(el).parent().find('ul').slideToggle(500);
                $(el).parent().parent().css("overflow", "visible");
            }

            // 未點選縣市而點選區域
            else {
                $(".hidden_message2").css("display", "block");
            }
        });
    },

    textchang: function() {
        $('.menu_list ul li').click(function() {

            // function作用對象selectMenu
            $(this).parent().parent().parent().parent().find(".selectMenu p").text($(this).find("a").text());

            // function作用對象menu_list ul  
            $(this).parent().parent().parent().slideUp(500);

            // function作用對象menu_list_bg  
            $(this).parent().parent().parent().parent().parent().addClass("checked");



        });
    },



    all: function() {
        menuselect.open();
        menuselect.textchang();
    }
}




////////////////////////////////////
//       google map api           //
////////////////////////////////////

initialize();

    function initialize() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };
        
        var map = new google.maps.Map(
            document.getElementsByClassName('map-canvas'),
            mapOptions
            );
        
    }


    google.maps.event.addDomListener(
        window, 'load', initialize);









////////////////////////////////////
//      customScrollbar           //
////////////////////////////////////


var customScrollbar = {
    menu_list_ul: function() {
        $(".menu_list ul").mCustomScrollbar({
            scrollInertia: 400,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true },
        });
    },

    resultList_ul: function() {
        $(".resultList ul").mCustomScrollbar({
            scrollInertia: 400,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true },
            theme: "dark",
        });
    },

    show_area_ul: function() {
        $(".show_area div>ul").mCustomScrollbar({
            scrollInertia: 400,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true },
            theme: "dark",
        });
    },

    result_show_ul: function() {
        $(".result_show ul").mCustomScrollbar({
            scrollInertia: 400,
            scrollEasing: "ease",
            mouseWheel: { preventDefault: true },
            theme: "dark",
        });
    }
}




////////////////////////////////////
//     resultLibox                //
////////////////////////////////////


var resultLibox = {

    // 在 finish_select這個function裡啟動
    open: function() {
        $(".resultLibox").addClass("open");
        $("body").css("overflow-y", "hidden");
    },

    close: function() {
        $(".resultLibox").removeClass("open");
        $(".resultLibox").addClass("close");
        $("body").css("overflow-y", "auto");
        setTimeout(function() {
            $(".resultLibox").removeClass("close");
        }, 1100);
    },

    resultLibox_close_click: function() {
        $(".resultLibox_close").click(function() {
            resultLibox.close();
        });
    },

    result_show: function() {
        $(".result_show ul li").click(function() {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            setTimeout(function() {
                $(".result_show ul").parent().addClass("on");
                $(".resultLibox_map").addClass("on");
            }, 450);

        });
    },

    // 點選result_arrow開啟resultLibox
    result_arrow_click: function() {
        $(".result_arrow").click(function() {
            resultLibox.open();
        });
    },

    all: function() {
        resultLibox.resultLibox_close_click();
        resultLibox.result_show();
        resultLibox.result_arrow_click();
    }
}









////////////////////////////////////
//     resultList                 //
////////////////////////////////////

var resultList = {

    resultList_click: function() {
        $(".resultList ul li").click(function() {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });
    },

    all: function() {
        resultList.resultList_click();
    }
}






////////////////////////////////////
//     where頁面                  //
////////////////////////////////////

var where = {
    menuselect: function() {
        menuselect.all();
    },

    customScrollbar: function() {
        customScrollbar.menu_list_ul();
        customScrollbar.resultList_ul();
        customScrollbar.show_area_ul();
        customScrollbar.result_show_ul();
    },



    finish_select: function() {

        $(".seeResult").click(function() {


            if ($(".menu_list_bg").hasClass("checked")) {



                if ($(window).width() > 1024) {

                    setTimeout(function() {
                        // 滾動到result
                        $("html,body").animate({
                            scrollTop: $(".result").offset().top - parseInt($(".result").css("margin-top"))
                        }, 800);
                    }, 100);

                    $(".result").addClass("open");
                }

                // 只在手機板有功能
                else {



                    // 開啟resultLibox
                    resultLibox.open();
                }

            } else {
                $(".hidden_message").css("display", "block");
            }

            // 將尚未選取字樣消失
            $(this).focusout(function() {
                $(".hidden_message").css("display", "none");
            });
        });

    },

    reset_select: function() {
        // 重製已選擇的的文字內容
        $(".resetSelect").click(function() {


            $(".menu_list_bg.checked").removeClass("checked");

            // 選擇縣市
            $(".city .selectMenu p").text("選擇縣市");
            $(".selectCity h2 span").text("選擇縣市");
            // $(".conditions ul li:nth-child(1)").find("p").text("全部縣市");

            // 選擇區域
            $(".area .selectMenu p").text("選擇區域");
            $(".selectArea h2 span").text("選擇區域");
            // $(".conditions ul li:nth-child(2)").find("p").text("全部區域");

            // 展示總覽
            $(".store .selectMenu p").text("展示總覽");
            $(".selectStore h2 span").text("展示總覽");
            // $(".conditions ul li:nth-child(3)").find("p").text("全部");

        });
    },

    resultLibox: function() {
        resultLibox.all();
    },

    resultList: function() {
        resultList.all();
    },


    all: function() {
        where.menuselect();
        where.customScrollbar();
        where.finish_select();
        where.resultLibox();
        where.resultList();
        where.reset_select();
    }
}







// 引入
$(document).ready(function() {
    where.all();
});