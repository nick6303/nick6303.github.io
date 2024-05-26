////////////////////////////////////
//      tab Menu to select        //
////////////////////////////////////

var menuselect = {
    open: function() {
        $('.selectMenu').click(function() {
            $(this).toggleClass("open");
            $('.menu_list ul').fadeToggle(300);
            $('.menu_list_bg').css("overflow", "visible");
        });
        menuselect.aClick();
    },

    aClick: function() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    },

    textchang: function() {
        $('.menu_list ul li').click(function() {
            var selectClick = $('.menu_list .selectMenu');
            selectClick.text($(this).find("a").text());
            menuselect.aClick();
        });
    },
    all: function() {
        menuselect.open();
        menuselect.textchang();
    }
}



var waypoint = {
    products: function() {
        $('.products ul>*').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '60%' });
        });
    }
}


var detail_ajax = {
    find: function() {
        $.ajax({
                url: '../../view/layout/product/find.html',
            })
            .done(function(data) {
                $(".find").html(data);

                detail_ajax.findjs();


            });
    },
    result: function() {
        $.ajax({
                url: '../../view/layout/product/result.html',
            })
            .done(function(data) {
                $(".result").html(data);

                detail_ajax.resultjs();


            });
    },

    findjs: function() {
        findjs.open();
        findjs.close();
        findjs.action();
    },

    resultjs: function() {
        resultjs.close();
        resultjs.action();
    },

    product_detail_inf: function() {
        $.ajax({
                url: '../../view/layout/product/product_detail_inf.html',
            })
            .done(function(data) {
                $(".product_detail_inf").html(data);


                product_detail_inf.all();
            });

    },

    all: function() {
        detail_ajax.find();
        detail_ajax.result();
        detail_ajax.product_detail_inf();
    }
}


// find內頁的js開始--------
var findjs = {
    open: function() {
        $(".select").click(function() {
            $(".find").addClass("open");
            $("body").css("overflow", "hidden");
            // $(".find .detail").css("overflow", "auto");
        });
    },
    close: function() {
        $(".find .detail_close").click(function() {
            $(".find").removeClass("open");
            $(".find").addClass("close");
            $("body").css("overflow", "auto");
            $(".find .detail").css("overflow", "hidden");
            // $(".active").removeClass("active");
            $(".hidden_message").css("display", "none");
            setTimeout(function() {
                $(".find").removeClass("close");
                // $(".show_area .on").removeClass("on");
                // $(".checked").removeClass("checked");
            }, 1300);
        });
    },
    action: function() {
        findaction.menu_click();
        findaction.finish_find();
        findaction.select();
        findaction.reset();
    }
}

var findaction = {

    menu_click: function() {
        var show_area = document.querySelectorAll('.show_area>div')
        $(".select_menu ul li").click(function() {
            // select_menu
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            // show_area
            var i = $(this).prevAll().length;
            $(show_area[i]).addClass("on");
            $(show_area[i]).siblings().addClass("off");
            $(show_area[i]).siblings().removeClass("on");
            setTimeout(function() {
                $(show_area[i]).siblings().removeClass("off");
            }, 500);
        });
    },

    select: function() {
        $(".show_area ul li div").click(function() {

            $(this).toggleClass("checked");

            // 計算客戶點了幾個條件
            // find頁面的條件li
            var findSelect_li = document.querySelectorAll('.find .select_menu ul li')

            // result頁面的條件li
            var resultSelect_li = document.querySelectorAll('.result .select_menu ul li')

            // 第幾個條件
            var i = $(this).parent().parent().parent().prevAll().length;

            // 已點選的數量
            var nub = $(this).parent().parent().parent().find(".checked").length

            $(findSelect_li[i]).find("p b").text(nub)

            if (nub == 0) {
                $(findSelect_li[i]).removeClass("checked")
            } else {
                $(findSelect_li[i]).addClass("checked")
            }

            $(resultSelect_li[i]).find("span").text(nub)

        });
    },

    finish_find: function() {
        $("#finish_find").click(function() {
            if ($(".show_area .checked").hasClass("checked")) {

                $(".find").removeClass("open");
                $(".find").addClass("close");
                $(".find .detail").css("overflow", "hidden");
                setTimeout(function() {
                    $(".find").removeClass("close");
                }, 1300);
                $(".find").removeClass("open");
                $(".result").addClass("open");
                $(".result .detail").css("overflow", "auto");
                $(".hidden_message").css("display", "none");
            } else {
                $(".hidden_message").css("display", "block");
            }
        });
    },

    reset: function() {
        $("#clear").click(function() {
            $(".checked").removeClass("checked");
            $(".result .select_menu ul li").find("span").text("")
        });
    }

}
// find內頁的js結束--------


// result內頁js的開始--------
var resultjs = {

    close: function() {
        $(".result .detail_close").click(function() {
            $(".result").removeClass("open");
            $(".result").addClass("close");
            $("body").css("overflow", "auto");
            $(".result .detail").css("overflow", "hidden");
            setTimeout(function() {
                $(".result").removeClass("close");
            }, 1300);
        });
    },

    action: function() {
        resultaction.scroll();
        resultaction.ft_slideup();
        resultaction.menu_click();
        resultaction.click_attach();
        horizontalImag();
    }
}

var resultaction = {
    scroll: function() {
        // 每次捲動的時候啟動blazy
        var lboxW = $('.result .detail');

        lboxW.scroll(function() {

            blazyfunction.common();

        });
    },

    ft_slideup: function() {
        $(".detail_ft_slideup").click(function() {
            $(".result .detail").animate({
                scrollTop: 0
            }, 1000);
        });
    },

    menu_click: function() {
        $(".select_menu ul li").click(function() {
            $(".result").removeClass("open");
            $(".result").addClass("close");
            $(".result .detail").css("overflow", "hidden");
            $(".find").addClass("open");
            setTimeout(function() {
                $(".result").removeClass("close");
            }, 1300);
        });
    },

    // 點選連結事件
    click_attach: function() {
        var menu = document.querySelector(".find").querySelectorAll(".select_menu ul li")
        var show_area = document.querySelector(".find").querySelectorAll('.show_area>div')
        $(".result .select_menu ul li").click(function() {
            var i = $(this).prevAll().length;
            $(menu[i]).addClass("active");
            $(menu[i]).siblings().removeClass("active");
            $(show_area[i]).addClass("on");
            $(show_area[i]).siblings().addClass("off");
            $(show_area[i]).siblings().removeClass("on");
            setTimeout(function() {
                $(show_area[i]).siblings().removeClass("off");
            }, 500);
        });
    }
}


// 偵測圖片是否為橫幅
function horizontalImag() {

    var ele =  document.querySelectorAll(".box_img img");

    for (var i = 0; i <ele.length ; i++) {
        if($(ele[i]).width() > $(ele[i]).height()){
            $(ele[i]).addClass("horizontal");
        }
    }

}


// result內頁js的結束--------


$(document).ready(function() {
    waypoint.products();
    detail_ajax.all();
    menuselect.all();
    horizontalImag();
});