page.news = (function () {
    $('.nav-search-btn').on('click', function () {
        var x = $(this).prev().width() + 50;
        $(this).next().css('max-width',x);
        $('.nav-search').addClass('nav-search--on');
    });
    $('.nav-search__btn-cancel').on('click', function () {
        $('.nav-search').css('max-width','').removeClass('nav-search--on');
    });


  


    var waypoint = $('.news__inner>ul>li').each(function (index, element) {
        $(element).waypoint(function () {
            $(element).addClass('enter');
        }, {
                offset: '50%'
            });
    });

})


if ($('#news').length) {
    page.news();
}

var wrapper = "<article class='lbox lbox1'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper);

$('body').on('click', '.lboxBtn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxMenu');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('on');
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);

    });
});