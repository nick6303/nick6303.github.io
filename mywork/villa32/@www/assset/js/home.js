 $(document).ready(function() {

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


     // slick---------------------------




     $('.slick_box ul').slick({
        lazyLoad: 'ondemand',
         arrows: false,
         speed: 1000,
         infinite: false,
         slidesToShow: 2,
         slidesToScroll: 2,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             }
         }]
     });

     $(".slick_prev").click(function() {
         $('.slick_box ul').slick("getSlick").slickPrev();
     });


     $(".slick_next").click(function() {
         $('.slick_box ul').slick("getSlick").slickNext();
     });






     // menu_list在rwd時自動隱藏成Scrollbar
     $(".menu_list").perfectScrollbar();



    
    var windowW = $(window)
    windowW.scroll(function() {

       navfixed();
       

    });

 });


function navfixed() {

    // 在進入浮動前先加入class"hide"
    var windowTop = $(window).scrollTop()
       
       console.log(windowTop);
    if(windowTop - 100 > 0){
        $(".hd_fixed").addClass('hide');

    }
    else{ 
        $(".hd_fixed").removeClass("hide"); 
    }

    // nav浮動的waypoint
    var trigger = $('.hd_slideup').offset().top

    var trigger_margin =  parseInt($('.hd_slideup').css("margin-top"))

    if(trigger - trigger_margin < windowTop){
        $(".hd_fixed").addClass("fixed"); 
    }
    else{ 
        $(".hd_fixed").removeClass("fixed"); 
    }

    
}