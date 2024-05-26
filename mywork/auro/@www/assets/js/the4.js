$('.btns').on('mouseenter', 'li', function () {
    if (!$(this).hasClass('focus')) {
        $(this).addClass('focus').siblings().removeClass('focus');
    }
});

if ($('#purchase .dropdown').length) {
        
    // 
    $("#purchase .dropdown_capacity").select2({
        minimumResultsForSearch: Infinity,
        theme: "dropdownB",
        width: "100%"
    });
    
    $("#purchase .dropdown_quantity").select2({
        minimumResultsForSearch: Infinity,
        theme: "dropdownB",
        width: "100%"
    });

    var dropdown_step2 = $(".dropdown_step2");
    dropdown_step2.each(function () {
        var x = $(this).data('placeholder') || "";
        $(this).select2({
            placeholder: x,
            minimumResultsForSearch: Infinity,
            theme: "dropdownD",
            width: "100%",
        });
    });

}

if ($('#purchase .yourTotal').length) {

    $('#purchase .shopping__total').waypoint({
        handler: function (direction) {
            $(this.element).find('.yourTotal').toggleClass('ffixed')
        },
        offset: '0%'
    });

    var yourTotal = $('.yourTotal');
    var shopping__total = $('.shopping__total');

    yourTotal.css({
        'width': shopping__total.width(),
        'left': shopping__total.offset().left,
    });

    $(window).resize(function () {
        yourTotal.css({
            'width': shopping__total.width(),
            'left': shopping__total.offset().left,
        });
    });

    setTimeout(function () {
        yourTotal.css({
            'width': shopping__total.width(),
            'left': shopping__total.offset().left,
        });
    }, 1000);

    $(".total_title").on('click',function () {
        $(this).parents('.shopping__total').toggleClass('open');
        $(".total_list").slideToggle();
    });


}

$('.yourInfo_list>ul>li').on('click',function () {
    $(this).addClass('open').siblings().removeClass('open');
})