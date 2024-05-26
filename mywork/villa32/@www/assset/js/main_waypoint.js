$(document).ready(function() {

    // 首頁-----------------------------------------------

    // 內容依序出現
    $(".title").waypoint(function() {
        $("h4").addClass('show');
    }, {
        offset: '80%'
    });

    $(".title").waypoint(function() {
        $(".menu_list").addClass('show');
    }, {
        offset: '80%'
    });
    $(".title").waypoint(function() {
        $(".slick").addClass('show');
    }, {
        offset: '80%'
    });

    // nav浮動出現
    $(".title").waypoint(function() {
        $(".hd_fixed").addClass('fixed');

    }, { offset: '15%' });

    // nav浮動離開
    $(".hd_slideup").waypoint(function() {
        $(".hd_fixed").removeClass('fixed');

    }, { offset: '0%' });


    $(".title").waypoint(function() {
        $(".fixed").removeClass('hide');
    }, { offset: '0%' });




    // promotion頁面-----------------------------------------------


    $('.row>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '100%' });
    });



    // stay頁面-----------------------------------------------

    $(".title").waypoint(function() {
        $(".title").addClass('show');
    }, {
        offset: '80%'
    });



    $('.rooms>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '100%' });
    });





});