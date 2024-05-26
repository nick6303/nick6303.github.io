



page.talktoauro = (function () {
    $('.nav-search-btn').on('click', function () {
        var x = $(this).prev().width() + 50;
        $(this).next().css('max-width',x);
        $('.nav-search').addClass('nav-search--on');
    });
    $('.nav-search__btn-cancel').on('click', function () {
        $('.nav-search').css('max-width','').removeClass('nav-search--on');
    });

    $('.talktoauro__content').on('click', '.lboxBtn', function () {
        var data = $(this).data('lbox');
        lbox1.ajax(data)
    });


    var waypoint = $('.talktoauro__inner>ul>li').each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('enter');
        }, {
                offset: '50%'
            });
    });


})

// var lbox1 = new Plugin_lbox({ class: 'lbox1',start: lboxStart });

if ($('#talktoauro').length) {
    page.talktoauro();
}