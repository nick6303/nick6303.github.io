//member 首頁

$('.member__img>ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    dots: false,
    arrows: false,
    asNavFor: $('.member__txt>ul')


});

$('.member__txt>ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    dots: true,
    arrows: false,
    asNavFor: $('.member__img>ul'),
    dotsClass: 'slick_dot_style_banner',
    appendDots: '.member__dot',
});




if ($('.theverfication').length) {

    $('.theverfication li input').focus(function (e) {
        $(this).val('')
    });

    $('.theverfication li input').keyup(function (e) {
        if ($(this).val().length == $(this).attr('maxlength'))
            $(this).parent().next().find('input').focus();
    });

    var time01 = $('.time01');
    var time02 = $('.time02');
    var time03 = $('.time03');

    var time = 300;
    var time300;
    timerun();
    function timerun() {
        time300 = setInterval(function () {
            time -= 1;
            timeshow(time);
        }, 1000);
    }

    function timeshow(time) {
        var m, s, s1, s2
        m = time / 60;
        m = Math.floor(m);
        s = time % 60;
        s = s + ""
        s = js2d(s);
        s.split("")
        time01.text(m)
        time02.text(s[0])
        time03.text(s[1])
        if (m == 0 && s[0] == 0 && s[1] == 0) {
            alert(0);
            clearInterval(time300);
            return
        }
    }

    function timeagain() {
        clearInterval(time300);
        time = 301;
        timerun();
    }
}



$('body').on('click', '.registered_btn', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxajaxop');
    $.ajax({
        url: path,
    }).done(function (data) {
        lboxclass.find('.lbox__inner').append(data);
        setTimeout(function () {
            lboxclass.addClass('nocg').fadeIn();
            lboxStart();
            lock(lboxclass);
            close(lboxclass);
        }, 0);
    });
});




// 會員服務條款
$('.content_wrap').on('click', '.memberterms_btn', function () {
    var data = $(this).data('lbox');
    lbox1.ajaxop(data)
});


$('.goBack').on('click', function () {
    history.go(-1);
})


$('.problem_q2').on('click', function () {
    $('.problem_q').click();
});


$('.problem_q').on('click', function () {
    var x = $(this).position();
    var wsmall = x.left + 50 + 700 > $(window).width()
    $('.problem_a__wrap').each(function () {
        if (!wsmall) {
            $(this).css({
                top: x.top + 20 - $(this).height() / 2,
                left: x.left + 50,
            }).fadeIn();
        } else {
            $(this).css({
                top: x.top + 50,
                left: '50%',
                transform: 'translateX(-50%)'
            }).fadeIn();
        }
    })
});

$('.problem_a__close').on('click', function () {
    $(this).parents('.problem_a__wrap').fadeOut();
})



var dropdown_member = $(".dropdown_member");
dropdown_member.each(function () {
    var x = $(this).data('placeholder') || "";
    $(this).select2({
        placeholder: x,
        minimumResultsForSearch: Infinity,
        theme: "dropdownC",
        width: "100%",
    });
});



// 要修改值 清掉再綁
// var z3 = [
//     {
//         "id": 1,
//         "text": "南投縣"
//     },
//     {
//         "id": 2,
//         "text": "台北市",
//     },
//     {
//         "id": 3,
//         "text": "高雄市",
//     }
// ];

// $(".dropdown_member").select2('destroy').find('option').remove();
// // $("select").select2('destroy');
// $(".dropdown_member").select2({
//     data: z3,
//     // placeholder: 'Select an option',
//     minimumResultsForSearch: Infinity,
//     theme: "dropdownC",
//     width: "100%"
// });


