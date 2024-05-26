
$('.collect>ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    dotsClass: 'slick_dot_style',
    appendDots: '.collect_dot',
    arrows: false,
});

if ( $(".dropdown_vip").length  ) {
    var dropdown_vip = $(".dropdown_vip");
    dropdown_vip.each(function () {
        var x = $(this).data('placeholder') || "";
        $(this).select2({
            placeholder: x,
            minimumResultsForSearch: Infinity,
            theme: "dropdownC",
            width: "100%",
        });
    });
}


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





function lboxVipJs() {
    $('.address3 ul li').on('click', function() {
        $(this).addClass('focus').siblings().removeClass('focus');
    });


    $('.add_btms1 ul li').on('click',function () {
        var x = $(this).prevAll().length;
        switch (x) {
            case 0:
                $('.lbox__close').click();
                break;
            case 1:
                $(this).parents('.viplbox_address').addClass('step2').removeClass('step1');
                break;
            default:
                break;
        }
    });

    $('.add_btms2 ul li').on('click',function () {
        var x = $(this).prevAll().length;
        switch (x) {
            case 0:
                $(this).parents('.viplbox_address').addClass('step3').removeClass('step2');
                break;
            case 1:
                $('.lbox__close').click();
                break;
            default:
                break;
        }
    });

    $('.add_btms3 ul li').on('click',function () {
        var x = $(this).prevAll().length;
        switch (x) {
            case 0:
                $('.lbox__close').click();
                break;
            case 1:
                $(this).parents('.viplbox_address').addClass('step2').removeClass('step3');
                break;
            default:
                break;
        }
    });

    // $('.viplbox_address').on('click', '.vipBtn2', function () {
    //     var data = $(this).data('lbox');
    //     lboxVip2.ajaxop(data);
    // });

    


}

// 燈箱內的燈箱

// var lboxVip2 = new Plugin_lbox({ class: 'lboxajaxop2'});

//  vip 背景透明專用 main裡面有了 用他的好了
// var lboxVip = new Plugin_lbox({ class: 'lboxajaxop', start: lboxStartVip });
// $('.content_wrap,.nav_wrap ').on('click', '.vipBtn', function () {
//     var data = $(this).data('lbox');
//     lboxConversionVip.ajaxop(data);
// });

var wrapper5 = "<article class='lbox lboxajaxop2'><div class='lbox__wrap'><div class='lbox__inner'></div></div></article>";
$('body').append(wrapper5);


$('body').on('click', '.vipBtn', function () {
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



$('body').on('click', '.vipBtn2', function () {
    var path = $(this).data('lbox');
    var lboxclass = $('.lboxajaxop2');
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
