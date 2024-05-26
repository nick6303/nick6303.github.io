// promotion頁面開始------------------------------

$(document).ready(function() {

    // nav浮動出現(每個頁面nav出現觸發點不一樣)
    $(".title").waypoint(function() {
        $(".hd_fixed").toggleClass('fixed');

    }, { offset: '5%' });

    // nav浮動離開
    // $(".hd_slideup").waypoint(function() {
    //     $(".hd_fixed").removeClass('fixed');

    // }, { offset: '0%' });


    $(".title").waypoint(function() {
        $(".fixed").removeClass('hide');
    }, { offset: '0%' });

    // 內容waypoint--------------
    // 標題
    $(".title").waypoint(function() {
        $("h4").addClass('show');
    }, {
        offset: '80%'
    });

    // menu_list
    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, {
        offset: '80%'
    });

    // 內容依序出現
    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '100%' });
    });

    // menu_list的perfectScrollbar
    $(".menu_list").perfectScrollbar();

});








// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓promotion_detail的js那一包↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$(document).ready(function() {

    $(".learn_more").click(function() {
        $(".detail").removeClass("off");
        $(".detail").addClass("load");
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $(".detail").removeClass("load");
            $(".detail").addClass("on");
        }, 1000);
        // $(".detail").removeClass("off");
    });
    $(".close_icom").click(function() {
        $(".detail").addClass("off");
        $(".detail").removeClass("on");
        $("body").css("overflow-y", "auto");
    });


        // 點選MAKE A RESERVATION至contact內頁
    $("._contact").click(function(){
        $('.contact').removeClass('off');
        $('.contact').addClass('on');
    });




});

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑promotion_detail的js那一包↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// promotion頁面結束------------------------------