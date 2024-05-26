var run_3n = 3;
var run_2n = 2;

// //home
// $(document).ready(function() {
//     if ($('.homebox01').length > 0) {

//         $('.home_img_txt p').addClass('animated-slow fadeIn');
//         $('.home_img_txt h4').addClass('delay-03s animated-slow fadeIn');
//         $('.home_img_txt a').addClass('delay-06s animated-slow fadeIn');

//         $('.homebox02>ul,.homebox03>div,.homebox04>div>div,.homebox05>div,.homebox06>div').addClass('hide');
//         $('.homebox02>ul,.homebox03>div,.homebox05>div,.homebox06>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 switch (run_2n % 2 + 1) {
//                     case 1:
//                         $(element).addClass('animated fadeIn').removeClass('hide');
//                         run_2n++;
//                         break;
//                     case 2:
//                         $(element).addClass('delay-03s animated fadeIn').removeClass('hide');
//                         run_2n++;
//                         break;
//                 }
//             }, {
//                 offset: '80%'
//             });
//         });
//         $('.homebox04>div>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 switch (run_3n % 3 + 1) {
//                     case 1:
//                         $(element).addClass('animated fadeIn').removeClass('hide');
//                         run_3n++;
//                         break;
//                     case 2:
//                         $(element).addClass('delay-03s animated fadeIn').removeClass('hide');
//                         run_3n++;
//                         break;
//                     case 3:
//                         $(element).addClass('delay-06s animated fadeIn').removeClass('hide');
//                         run_3n++;
//                         break;
//                 }
//             }, {
//                 offset: '80%'
//             });
//         });


//     }
// });

//product_index
// $(document).ready(function() {
//     if ($('.product_index').length > 0) {
//         $(window).on('beforeunload', function() {
//             $(window).scrollTop(0);
//         });

//         $('.product_img_txt h4').addClass('animated-slow fadeIn');
//         $('.product_img_txt hr').addClass('delay-03s animated-slow fadeIn');
//         $('.product_img_txt p').addClass('delay-06s animated-slow fadeIn');

//         $('.product_index_collectin h4').addClass('delay-09s animated-slow fadeIn');
//         $('.product_index_collectin p').addClass('delay-12s animated-slow fadeIn');



//         $('.w100 .w50>div,.w100 .w33,.product_index_txt').addClass('hide');
//         $('.w100>:not(div),.w100 .w50>:not(div)').parent().addClass('hide');

//         $('.w100>:not(div)').waypoint(function() {
//             $('.w100>:not(div)').parent().addClass('animated fadeIn').removeClass('hide').find('.product_index_txt')
//                 .addClass('delay-03s animated fadeIn');
//         }, {
//             offset: '90%'
//         });

//         $('.w100 .w50>:not(div)').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).parent().addClass('animated fadeIn').removeClass('hide')
//                     .find('.product_index_txt').addClass('delay-03s animated fadeIn');
//             }, {
//                 offset: '90%'
//             });
//         });

//         $('.w100 .w50>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('delay-03s animated fadeIn').removeClass('hide')
//                     .find('.product_index_txt').addClass('delay-06s animated fadeIn');
//             }, {
//                 offset: '90%'
//             });
//         });

//         $('.w100 .w33').each(function(index, element) {
//             $(element).waypoint(function() {
//                 switch (run_3n % 3 + 1) {
//                     case 1:
//                         $(element).addClass('animated fadeIn').removeClass('hide')
//                             .find('.product_index_txt').addClass('delay-03s animated fadeIn');
//                         run_3n++;
//                         break;
//                     case 2:
//                         $(element).addClass('delay-03s animated fadeIn').removeClass('hide')
//                             .find('.product_index_txt').addClass('delay-06s animated fadeIn');
//                         run_3n++;
//                         break;
//                     case 3:
//                         $(element).addClass('delay-06s animated fadeIn').removeClass('hide')
//                             .find('.product_index_txt').addClass('delay-09s animated fadeIn');
//                         run_3n++;
//                         break;
//                 }
//             }, {
//                 offset: '90%'
//             });
//         });
//     }
// });

//product_detail01
$(document).ready(function() {
    if ($('.product_1,.product_11,.product_111,.product_12').length > 0) {
        $(window).on('beforeunload', function() {
            $(window).scrollTop(0);
        });

        $('.pinner').addClass('hide');
        $('.animated,.fadeIn').removeClass('animated').removeClass('fadeIn');
        $('.product_inner_txt h4').addClass('delay-05s animated-slow fadeIn');
        $('.product_inner_txt hr').addClass('delay-10s animated-slow fadeIn');
        $('.product_inner_txt p').addClass('delay-15s animated-slow fadeIn');
        $('.product_nav').addClass('delay-15s animated-slow fadeIn');
        $('.product_1 .pinner').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('animated fadeIn').removeClass('hide')
                    .find('.product_txt').addClass('delay-03s animated fadeIn');
            }, {
                offset: '90%'
            });
        });
        $('.product_11 .pinner').each(function(index, element) {
            $(element).waypoint(function() {
                if ($(element).attr("class").indexOf("animated") > 0) {} else {
                    switch (run_2n % 2 + 1) {
                        case 1:
                            $(element).addClass('animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-03s animated fadeIn');
                            run_2n++;
                            break;
                        case 2:
                            $(element).addClass('delay-03s animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-06s animated fadeIn');
                            run_2n++;
                            break;
                    }
                }
            }, {
                offset: '90%'
            });
        });
        $('.product_111 .pinner').each(function(index, element) {
            $(element).waypoint(function() {
                if ($(element).attr("class").indexOf("animated") > 0) {} else {
                    switch (run_3n % 3 + 1) {
                        case 1:
                            $(element).addClass('animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-03s animated fadeIn');
                            run_3n++;
                            break;
                        case 2:
                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-06s animated fadeIn');
                            run_3n++;
                            break;
                        case 3:
                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-09s animated fadeIn');
                            run_3n++;
                            break;
                    }
                }
            }, {
                offset: '90%'
            });
        });
        $('.product_12 .pinner').each(function(index, element) {
            $(element).waypoint(function() {
                if ($(element).attr("class").indexOf("animated") > 0) {} else {
                    switch (run_3n % 3 + 1) {
                        case 1:
                            $(element).addClass('animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-03s animated fadeIn');
                            run_3n++;
                            break;
                        case 2:
                            $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-06s animated fadeIn');
                            run_3n++;
                            break;
                        case 3:
                            $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')
                                .find('.product_txt').addClass('delay-09s animated fadeIn');
                            run_3n++;
                            break;
                    }
                }
            }, {
                offset: '90%'
            });
        });
    }
});

// // product_detail02
// $(document).ready(function() {
//     if ($('.product_info').length > 0) {

//         $('.product_info,.product_info_buy,.product_spec>div,.product_explore>*,.product_featured>div').addClass('hide');
//         $('.product_info').waypoint(function() {
//             $('.product_info_pic').addClass('animated-slow fadeIn').removeClass('hide');
//             $('.product_info_txt').addClass('delay-03s animated-slow fadeIn').removeClass('hide');
//             $('.product_info_other').addClass('delay-06s animated-slow fadeIn').removeClass('hide');
//         }, {
//             offset: '90%'
//         });

//         $('.product_info_buy').waypoint(function() {
//             $('.product_info_buy').addClass('animated-slow fadeIn').removeClass('hide');
//         }, {
//             offset: '90%'
//         });

//         $('.product_spec>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('animated-slow fadeIn');
//                 $(element).removeClass('hide');
//             }, {
//                 offset: '90%'
//             });
//         });

//         $('.product_explore>*').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('animated-slow fadeIn').removeClass('hide');

//             }, {
//                 offset: '90%'
//             });
//         });

//         $('.product_featured>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('animated-slow fadeIn').removeClass('hide');
//             }, {
//                 offset: '90%'
//             });
//         });
//     }
// })

// //new
// $(document).ready(function() {
//     if ($('.new').length > 0) {

//         $('.location_topnav h4').addClass('animated-slow fadeIn');
//         $('.location_topnav p').addClass('delay-03s animated-slow fadeIn');
//         $('.new_nav ul').addClass('delay-06s animated-slow fadeIn');

//         $('.location_topnav + section').addClass('delay-09s animated-slow fadeIn');

//         $('.grid-item').addClass('hide');
//         $('.grid-item').each(function(index, element) {
//             $(element).waypoint(function() {
//                 switch (run_2n % 2 + 1) {
//                     case 1:
//                         $(element).addClass('animated fadeIn').removeClass('hide');
//                         run_2n++;
//                         break;
//                     case 2:
//                         $(element).addClass('delay-03s animated fadeIn').removeClass('hide');
//                         run_2n++;
//                         break;
//                 }
//             }, {
//                 offset: '80%'
//             });
//         });
//     }
// });
// //faq
// $(document).ready(function() {
//     if ($('.faqbox01,.faqbox02 ').length > 0) {

//         $('.faqbox01_txt h4').addClass('animated-slow fadeIn');
//         $('.faqbox01_txt hr').addClass('delay-03s animated-slow fadeIn');
//         $('.faqbox01_txt p').addClass('delay-06s animated-slow fadeIn');
//         $('.faqbox02>h4').addClass('delay-09s animated-slow fadeIn');
//         $('.faqbox02>p').addClass('delay-12s animated-slow fadeIn');

//         $('.faqbox02_inner>div').addClass('hide');
//         $('.faqbox02_inner>div').each(function(index, element) {
//             $(element).waypoint(function() {
//                 switch (run_3n % 3 + 1) {
//                     case 1:
//                         $(element).addClass('animated fadeIn').removeClass('hide')
//                             .find('.product_txt').addClass('delay-03s animated fadeIn');
//                         run_3n++;
//                         break;
//                     case 2:
//                         $(element).addClass('delay-03s  animated fadeIn').removeClass('hide')
//                             .find('.product_txt').addClass('delay-06s animated fadeIn');
//                         run_3n++;
//                         break;
//                     case 3:
//                         $(element).addClass('delay-06s  animated fadeIn').removeClass('hide')
//                             .find('.product_txt').addClass('delay-09s animated fadeIn');
//                         run_3n++;
//                         break;
//                 }
//             }, {
//                 offset: '80%'
//             });
//         });
//     }
// });
// //faq_inner
// $(document).ready(function() {
//     if ($('.faq_nav').length > 0) {

//         $('.location_topnav h4').addClass('animated-slow fadeIn');
//         $('.location_topnav p').addClass('delay-03s animated-slow fadeIn');
//         $('.faq_nav ul').addClass('delay-06s animated-slow fadeIn');

//         $('.location_topnav + section').addClass('delay-09s animated-slow fadeIn');

//         $('.faq_datil').addClass('hide');
//         $('.faq_datil').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('animated fadeIn').removeClass('hide');
//             }, {
//                 offset: '80%'
//             });
//         });
//     }
// });
// //location
// $(document).ready(function() {
//     if ($('.location_nav').length > 0) {


//         $('.location_topnav h4').addClass('animated-slow fadeIn');
//         $('.location_topnav p').addClass('delay-03s animated-slow fadeIn');
//         $('.location_nav ul').addClass('delay-06s animated-slow fadeIn');
//         $('.location_topnav + section').addClass('delay-09s animated-slow fadeIn');


//         $('.location').addClass('hide');

//         $('.location').each(function(index, element) {
//             $(element).waypoint(function() {
//                 $(element).addClass('animated fadeIn').removeClass('hide');
//             }, {
//                 offset: '80%'
//             });
//         });
//     }
// });