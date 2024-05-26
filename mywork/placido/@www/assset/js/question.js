$(document).ready(function() {
	
	 // 點選scrolldown會往下捲動到content
    $('.scrolldown').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.banner').offset().top + $('.banner').height(),
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    // 點選banner_slide會往下捲動到content
    $('.banner_slide').click(function() {
        $("html,body").animate({
                // scrollTop定位
                scrollTop: $('.banner').offset().top + $('.banner').height(),
            },
            // 動作時間
            1000, 'easeOutCubic');
    });


    ////////////////////////////////////
    //      tab Menu to select        //
    ////////////////////////////////////
    $('.selectMenu').click(function() {
        $(this).toggleClass("open");
        $('.menu_list ul').fadeToggle(300);
        $('.menu_list_bg').css("overflow","visible");
    });

    function aClick() {
        var selectMenu = $('.selectMenu');
        if (selectMenu.hasClass('open')) {
            selectMenu.removeClass('open');
            $('.menu_list ul').fadeToggle(1);
        }
    }

    $('.menu_list ul li').click(function() {
        var selectMenu = $('.selectMenu');
        selectMenu.text($(this).find("a").text());
        aClick();
    });


    ////////////////////////////////////
    //      問題的答案向下滑          //
    ////////////////////////////////////

    $('.row_inf ul li').click(function(){
    	$(this).find("._ans").slideToggle(600);
    	$(this).siblings().find("._ans").slideUp(600); 


        $(this).siblings().delay(500).removeClass("on");

	   	if($(this).hasClass("on")){
    		$(this).removeClass('on');
            $(this).addClass('off');
            setTimeout(function(){
                $(this).removeClass('off');
            },600)
    	}
    	else{
    	   $(this).addClass("on");
        }

    });



    ////////////////////////////////////
    //           waypoint             //
    ////////////////////////////////////

    $('.question>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('show');
        }, { offset: '60%' });
    });






    // 滑動到row:first-child menu_list的第一個li底線
    var windowW = $(window)
    windowW.scroll(function() {

       menu_listWaypoint();
       

    });



    // .row_inf ul li 依序滑入
    liSlideIn();
    

    ////////////////////////////////////
    //     menu_list的click事件       //
    ////////////////////////////////////

    // 引入menu_list選單滑動事件

    menu_listScroll();



});





    ////////////////////////////////////
    //      menu_list選單滑動事件     //
    ////////////////////////////////////

function menu_listScroll() {

    var row = document.querySelectorAll('.row')

    $('.menu_list ul li').click(function(){

        var i =  $(this).prevAll().length;

        $("html,body").animate({
                // scrollTop定位
            scrollTop: $(row[i]).offset().top - $(window).height()/2 + $(row[i]).height()/2 
        },
        // 動作時間
        1000, 'easeOutCubic');
    });
 
}

    ////////////////////////////////////
    //       MENU_LIST的waypoint      //
    ////////////////////////////////////

function menu_listWaypoint() {

    var windowTop = $(window).scrollTop()

    // 啟動元素(PS:就是碰到它會啟動)
    var trigger = $('.question .row:first-child')

    var triggerOffsetTop = trigger.offset().top
    var trigger_margin =  parseInt(trigger.css("margin-top"))
    var offset = trigger.height()

    if(triggerOffsetTop - trigger_margin - offset*.8 < windowTop){
       $(".menu_list ul li:first-child").addClass("active");; 
    }
    else{ 
        $(".menu_list ul li:first-child").removeClass("active"); 
    }

     menu_listHover();

    
}



    ////////////////////////////////////
    //     menu_list的hover事件       //
    ////////////////////////////////////

function menu_listHover() {

    $(".menu_list ul li").mouseover(function(){
            
        $(".menu_list ul li:first-child").removeClass("active");

    });



    $(".menu_list ul li").mouseout(function(){
           
        $(".menu_list ul li:first-child").delay(200).addClass("active");

     });

}



    ////////////////////////////////////
    //  .row_inf ul li 依序滑入       //
    ////////////////////////////////////



function liSlideIn(){

var li = document.querySelectorAll('.row_inf ul li')

for (var i = 0; i < li.length; i++) {

var liNub = $(li[i]).prevAll().length;

var x = liNub*.2 + 0.6 + "s"    //數值化為秒數

$(li[i]).css('animation-delay',x)

}
















// console.log(li[]);


}


