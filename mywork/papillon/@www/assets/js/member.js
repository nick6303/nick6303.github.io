$(document).ready( function(){

    /*memberPassword_frame 會員密碼修改*/
    if ( $('body').hasClass('memberPassword_frame') == true ) {

        /*會員內頁內容切換*/
        member_switch();

        /*會員驗證碼填寫*/
        vcode();

        /*倒數計時器設定*/
        countdown_timer();

    }


    /*memberJoin_frame 會員註冊*/
    if ( $('body').hasClass('memberJoin_frame') == true ) {

        /*會員內頁內容切換*/
        member_switch();

        /*會員驗證碼填寫*/
        vcode();

        /*倒數計時器設定*/
        countdown_timer();

        /*會員條款同意按鈕*/
        agree_btn();

        /*會員服務條款 scroll bar*/
        member_benefits_scroll();

        /*下拉選單*/
        dropMenu();

    }


    /*memberAccount_frame 會員帳號管理*/
    if ( $('body').hasClass('memberAccount_frame') == true ) {

        /*月曆日曆*/
        $('.calender input').dateDropper();

        /*設定大頭貼*/
        set_picture();

        /*會員下拉選單*/
        dropMenu();
        
    }


    /*orderDetail_frame(member_orderDetail.html) 訂購單*/
    if ( $('body').hasClass('orderDetail_frame') == true ) {
        
        /*blazy*/
        work_blazy();
        
        /*明細內容切換*/
        orderDetail_switch();

        //waypoint
        member_waypoint.order_detailW();
        
    }

    /*shopping_cart 購物車*/
    if ( $('body').hasClass('shopping_cart') == true ) {
        
        /*blazy*/
        work_blazy();

        /*刪除item*/
        delete_item();

        /*付款方式切換*/
        payWay_switch();

        /*付款內容切換*/
        payMent_switch();

        /*發票內容切換*/
        invoce_switch();

        /*開關shipping_block*/
        shipping_switch();

        /*下拉選單*/
        dropMenu();

        /*shipping內容切換*/
        shipping_content_switch();
        
    }

    /*member_bonus*/
    if ( $('body').hasClass('member_bonus') == true ) {

        //紅利點數使用說明 bonus rule
        bonus_rule();

        //waypoint
        member_waypoint.bonusW();

    }

    /*member_favorite*/
    if ( $('body').hasClass('member_favorite') == true ) {
        
        //remove item
        remove_item();

        //waypoint
        member_waypoint.favoriteW();

    }


    /*member_address*/
    if ( $('body').hasClass('member_address') == true ) {
        
        //address_box
        address_box();

        /*下拉選單*/
        dropMenu();

        //waypoint
        member_waypoint.addressW();

    }

    /*member_guide*/
    if ( $('body').hasClass('member_guide') == true ) {

        /*blazy*/
        work_blazy();

    }

    /*orderReturn_frame(購買紀錄(member_order.html) 與 退換貨紀錄(member_return.html))*/
    if ( $('body').hasClass('orderReturn_frame') == true ) {

        //waypoint
        member_waypoint.orderW();

    }

});






/***************************************************************************************************************************/
///////////////////////////////////////
//             waypoint             //
//////////////////////////////////////
var member_waypoint = {

    bonusW: function(){

        if ( $('.member_bonus').length > 0) {

            //
            $('.box_1 > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '90%' });

            });



            //判斷螢幕寬度 呼叫one_by_one
            which_obo();

            $(window).resize(function(){

                which_obo();

            });

            function which_obo(){

                var window_w = $(window).width();

                if ( window_w < 681 ) {

                    var base_number = 2; //基數
    
                    one_by_one(base_number);
                    
                }else if ( window_w < 1024 ) {
    
                    var base_number = 3; //基數
    
                    one_by_one(base_number);
    
                }else {
    
                    var base_number = 4; //基數
    
                    one_by_one(base_number);
    
                }
                
            }

            //一個一個顯示動畫
            function one_by_one(base_number){

                var list          = $('.box_2 .frame li'),
                    list_num      = list.length,
                    interval_time = 0.25, //動畫間隔基數
                    animate_time  = 0.5;  //動畫時間


                //計算迴圈次數，基數為四，總數除以基數，只要有餘數 便把迴圈次數再加一
                var a = list_num % base_number;

                if ( a == 0 ) {
                    var loop_time = list_num / base_number;
                }else {
                    var loop_time = Math.round( list_num / base_number ) + 1;
                }


                //動畫迴圈
                for (var index = 0; index < loop_time; index++) {

                    var b = index * base_number;

                    //每一圈的的list動畫間隔
                    for (var i = 0; i < base_number; i++) {

                        var d = 0.5 + ( i * interval_time );
                        
                        list.eq( i + b ).css('transition','all ' + animate_time + 's ease ' + d + 's');
                        
                    }

                    // list.eq( 0 + b ).css('transition','all ' + c + 's ease ' + c + 's');
                    // list.eq( 1 + b ).css('transition','all ' + c + 's ease ' + c * 1.5 + 's');
                    // list.eq( 2 + b ).css('transition','all ' + c + 's ease ' + c * 2 + 's');
                    // list.eq( 3 + b ).css('transition','all ' + c + 's ease ' + c * 2.5 + 's');
                    
                }

            }
            

            $('.box_2 .frame > *').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, { offset: '90%' });

            });

        }

    },

    favoriteW: function(){

        //判斷螢幕寬度 呼叫one_by_one
        which_obo();

        $(window).resize(function(){

            which_obo();

        });

        function which_obo(){

            var window_w = $(window).width();

            if ( window_w < 768 ) {

                var base_number = 2; //基數

                one_by_one(base_number);
                
            }else if ( window_w < 1024 ) {

                var base_number = 3; //基數

                one_by_one(base_number);

            }else {

                var base_number = 5; //基數

                one_by_one(base_number);

            }
            
        }

        //一個一個顯示動畫
        function one_by_one(base_number){

            var list          = $('.box_1 .frame li'),
                list_num      = list.length,
                interval_time = 0.25, //動畫間隔基數
                animate_time  = 0.5;  //動畫時間


            //計算迴圈次數，基數為四，總數除以基數，只要有餘數 便把迴圈次數再加一
            var a = list_num % base_number;

            if ( a == 0 ) {
                var loop_time = list_num / base_number;
            }else {
                var loop_time = Math.round( list_num / base_number ) + 1;
            }


            //動畫迴圈
            for (var index = 0; index < loop_time; index++) {

                var b = index * base_number;

                //每一圈的的list動畫間隔
                for (var i = 0; i < base_number; i++) {

                    var d = 0.5 + ( i * interval_time );
                    
                    list.eq( i + b ).css('transition','all ' + animate_time + 's ease ' + d + 's');
                    
                }

                // list.eq( 0 + b ).css('transition','all ' + c + 's ease ' + c + 's');
                // list.eq( 1 + b ).css('transition','all ' + c + 's ease ' + c * 1.5 + 's');
                // list.eq( 2 + b ).css('transition','all ' + c + 's ease ' + c * 2 + 's');
                // list.eq( 3 + b ).css('transition','all ' + c + 's ease ' + c * 2.5 + 's');
                
            }

        }


        //
        $('.box_1 .frame > *').each(function(index, element) {

            $(element).waypoint(function() {

                $(element).addClass('show');

            }, { offset: '90%' });

        });
    },

    addressW: function(){

        //
        $('.box_1 .frame > *').each(function(index, element) {

            $(element).waypoint(function() {

                $(element).addClass('show');

            }, { offset: '90%' });

        });

    },

    orderW: function(){
        
        //
        $('.orderReturn_table > *').each(function(index, element) {

            $(element).waypoint(function() {

                $(element).addClass('show');

            }, { offset: '90%' });

        });

    },

    order_detailW: function(){

        //
        $(".order_nav_frame").waypoint(function() {

            $(".order_nav_frame").addClass("show");

        }, { offset: "80%" });

    },

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//           member_switch           //
//////////////////////////////////////
/*註冊頁 與 查詢密碼頁 的 內容切換*/
function member_switch(){

    var frame_box        = $('.frame_box'),  //內容
        next_content_btn = $('.next_content_btn'),  //切換內容按鈕
        back_content_btn = $('.back_content_btn'),  //切換內容按鈕
        open_success_btn = $('.open_success')  //打開成功畫面按鈕
        member_success   = $('.member_success');  //成功畫面

    //依照內容數量 給予每個內容一個 id
    for ( var index = 0; index < frame_box.length; index++) {

        frame_box.eq(index).attr('box-id',index);

    }


    var close_btn = $('.m_box_inner').find('._close');

    close_btn.addClass('animate');


    //往下內容按鈕 當切換內容的按鈕 被按下 把當前的內容隱藏 下個內容打開
    next_content_btn.click('click',function(){

        var now_box_id  = parseInt($(this).closest('.frame_box').attr('box-id')),
            next_box_id = now_box_id + 1;

        frame_box.eq(now_box_id).addClass('not_show');

        frame_box.eq(next_box_id).removeClass('not_show');


        //close鍵的動畫
        close_btn.removeClass('animate');

        setTimeout(function(){

            close_btn.addClass('animate');
            
        }, 200);


        //跳回頁面最上
        $("html, body").animate({
            scrollTop: 0
        }, 0);

    });

    //往回內容按鈕
    back_content_btn.on('click',function(){

        var now_box_id  = parseInt($(this).closest('.frame_box').attr('box-id')),
            back_box_id = now_box_id - 1;

        frame_box.eq(now_box_id).addClass('not_show');
        
        frame_box.eq(back_box_id).removeClass('not_show');


        //close鍵的動畫
        close_btn.removeClass('animate');

        setTimeout(function(){

            close_btn.addClass('animate');
            
        }, 200);


        //跳回頁面最上
        $("html, body").animate({
            scrollTop: 0
        }, 0);

    });

    //成功畫面呼叫
    open_success_btn.on('click',function(){

        if ( member_success.hasClass('not_show') == true ) {

            member_success.removeClass('not_show');
            
        }

        // $('.member_success').niceScroll();

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//               會員驗證碼填寫               ///
///////////////////////////////////////////////
function vcode(){
    //cache dom
    var $inputs = $("#vcode").find("input");

    //bind events
    $inputs.on('keyup', processInput);
  
    //define methods
    function processInput(e) {
        var x = e.charCode || e.keyCode;

        if( (x == 8 || x == 46) && this.value.length == 0) {

            var indexNum = $inputs.index(this);

            if(indexNum != 0) {
                $inputs.eq($inputs.index(this) - 1).focus();
            }

        }
    
        if( ignoreChar(e) ) 
            return false;
        else if (this.value.length == this.maxLength) {
            // $(this).next('input').focus();
            $(this).closest('li').next('li').find('input').focus();
        }
    }
    function ignoreChar(e) {
        var x = e.charCode || e.keyCode;
        if (x == 37 || x == 38 || x == 39 || x == 40 )
            return true;
        else 
            return false
    }
}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//              會員條款同意按鈕              ///
///////////////////////////////////////////////
function agree_btn(){

    var icon_btn_group = $('.icon_btn_group'),
        tick_btn       = $('.icon_btn_group .tick');

    tick_btn.on('click',function(){

        if ( $(this).hasClass('agree') == false ) {
            
            $(this).addClass('agree');

        }else {

            $(this).removeClass('agree');

        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                會員服務條款                ///
///////////////////////////////////////////////
function member_benefits_scroll(){

    var service_term = $('.service_term'),
        box          = $('.service_term .box'),
        close_btn    = $('.service_term ._close'),
        open_btn     = $('.icon_btn_group .terms');

    var window_width = window.screen.width;  //載入螢幕寬度


    //打開按鈕
    open_btn.on('click',function(){

        if ( service_term.hasClass('open') == false ) {

            //會員條款scroll bar
            box.niceScroll();

            // service_term.addClass('open');

            //animate
            setTimeout(function(){
                
                service_term.addClass('open');
                
            }, 100);
            
        }

    });

    //關閉按鈕
    close_btn.on('click',function(){

        if ( service_term.hasClass('open') == true ) {

            //remove custom scroll_bar
            box.getNiceScroll().remove();
            
            // service_term.removeClass('open');

            service_term.removeClass('open').addClass('close');
            
            setTimeout(function(){

                service_term.removeClass('close')
                
            }, 1500);
            
        }

    });

    //點擊box以外區域 也關閉
    service_term.on('click',function(e){

        if (e.target !== this) { 
            return; 
        }else {

            //remove custom scroll_bar
            box.getNiceScroll().remove();
            
            // service_term.removeClass('open');

            service_term.removeClass('open').addClass('close');
            
            setTimeout(function(){

                service_term.removeClass('close')
                
            }, 1500);
            
        }

    });


    //resize 重置scroll_bar 因為動畫影響高度關係，所以等一秒動畫結束才重綁scroll_bar
    $(window).resize(function(){
        
        var resize_window_width = window.screen.width;

        if ( resize_window_width != window_width ) {

            box.getNiceScroll().remove();

            setTimeout(function(){

                box.niceScroll({horizrailenabled:false});
                
            }, 1000);
            
        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                 下拉選單                  ///
///////////////////////////////////////////////
function dropMenu(){

    var selectMenu    = $('.selectMenu'),
        dropMenu_list = $('.dropMenu .dropMenu_box li'),
        dropMenu_box  = $('.dropMenu .dropMenu_box');


    //
    selectMenu.click(function() {

        var ele = $(this)

        $(ele).toggleClass("open");

        // 開啟選單

        $(ele).closest('.dropMenu').find("ul").slideToggle(400);

        // 點選其他物件 關閉選單
        $(document).click(function(e) {

            if ($(ele).parent().has(e.target).length === 0) {

                $(ele).closest('.dropMenu').find('.dropMenu_box').slideUp(400);
                $(ele).removeClass("open");

            }

        });

    });

    // 選擇li後關閉選單
    dropMenu_list.click(function() {

        // 作用對象.selectMenu
        selectMenu.removeClass("open");

        // 作用對象.menulist ul li
        $(this).addClass("checked");

        // 作用對象其他.menulist ul li
        $(this).siblings().removeClass("checked");

        // 作用對象.menulist ul 
        $(this).parent().slideUp(400);

        // .selectMenu p 文字更改
        $(this).closest('.dropMenu').find(".selectMenu p").text($(this).find("p").text());

    });

    //下拉選單scroll bar
    dropMenu_box.niceScroll({
        cursorcolor: '#fff',
        cursorborder: 'none',
        cursorwidth: 4,
    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                 倒數計時器                 ///
///////////////////////////////////////////////
function countdown_timer(){

    var count_text = $('.countdown p');
        minutes    = $('.countdown p').eq(0).attr('data-m') / 1,
        seconds    = $('.countdown p').eq(1).attr('data-s') / 1;


    //
    if ( seconds < 10 ) {

        seconds = '0' + seconds;

    }


    count_text.eq(0).text(minutes);

    count_text.eq(1).text(seconds);

}

//開始計時
function strat_countdown(){

    var count_text = $('.countdown p');
        minutes    = $('.countdown p').eq(0).attr('data-m') / 1,
        seconds    = $('.countdown p').eq(1).attr('data-s') / 1;


    /***** 起始值 *****/
    //秒數
    var ippp = 60;

    //
    minutes = minutes - 1;

    count_text.eq(0).text(minutes);

    //
    ippp = ippp - 1;
    
    count_text.eq(1).text(ippp);

    //啟動計時器
    setDelay();
    /***** 起始值 *****/
    

    //計時器功能
    function setDelay() {

        if ( minutes > 0 && ippp > 0 ) {
            //分 秒 皆大於0 (ex: 2:35, 2:39之類的)

            setTimeout(function(){
                
                ippp = ippp - 1;

                //
                if ( ippp < 10 ) {
                    
                    ippp = '0' + ippp;
            
                }

                //
                count_text.eq(1).text(ippp);
    
                //
                setDelay();
    
            }, 1000);
            
        }else if ( minutes > 0 && ippp == 0 ) {
            //分大於0 秒數剛好為0 (ex: 2:00, 5:00之類的)

            ippp = 60;

            //
            minutes = minutes - 1;

            count_text.eq(0).text(minutes);

            //
            ippp = ippp - 1;

            count_text.eq(1).text(ippp);

            //
            setDelay();

        }else if ( minutes == 0 && ippp > 0 ) {
            //分為0 秒數還大於0 (ex: 0:09, 0:36之類的)

            setTimeout(function(){
                
                ippp = ippp - 1;

                //
                if ( ippp < 10 ) {
                    
                    ippp = '0' + ippp;
            
                }

                //
                count_text.eq(1).text(ippp);
    
                //
                setDelay();
    
            }, 1000);

        }

    }

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                大頭貼開光箱                ///
///////////////////////////////////////////////
function set_picture(){

    var set_pic_btn   = $('.set_pic'),
        close_pic_btn = $('.close_pic'),
        set_picture   = $('.set_picture'),
        body          = $('body'),
        header        = $('header'),
        set_pic_frame = false;

    var rwd = window.screen.width == $(window).width();

    //打開
    set_pic_btn.on('click',function(){

        if ( set_pic_frame == false ) {

            set_picture.addClass('show');

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.set_picture');

            if (rwd == false) {

                body.css({
                    'overflow':'hidden',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }

            set_pic_frame = true;
            
        }

    });

    //關閉
    close_pic_btn.on('click',function(){
        
        if ( set_pic_frame == true ) {

            set_picture.removeClass('show');

            set_picture.addClass('no_show');

            //解鎖 ios body scrollbar
            disableBodyScroll(false, '.set_picture');

            setTimeout(function() {

                body.css({
                    'overflow':'',
                });
    
                header.css({
                    'padding-right':'',
                });

                set_picture.removeClass('no_show');

                set_pic_frame = false;

            }, 1000);
            
        }

    });

    //關閉
    set_picture.on('click',function(e){

        if (e.target !== this) {

            return;

        } else {

            set_picture.removeClass('show');
            
            set_picture.addClass('no_show');

            //解鎖 ios body scrollbar
            disableBodyScroll(false, '.set_picture');

            setTimeout(function() {

                body.css({
                    'overflow':'',
                });
    
                header.css({
                    'padding-right':'',
                });

                set_picture.removeClass('no_show');

                set_pic_frame = false;

            }, 1000);

        }

    });

    //scroll bar
    // set_picture.niceScroll();

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                   b-lazy                  ///
///////////////////////////////////////////////
function work_blazy(){

    //member_orderDetail
    if ( $('body').hasClass('orderDetail_frame') == true ) {
        
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
            }
        });
        
    }

    //shopping_cart
    if ( $('body').hasClass('shopping_cart') == true ) {
        
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
            }
        });
        
    }

    //member_guide
    if ( $('body').hasClass('member_guide') == true ) {
        
        var bLazy = new Blazy({
            offset: 70,
            success: function(ele) {

                $(ele).closest('.list').addClass('show');

            }
        });
        
    }

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                明細內容切換                ///
///////////////////////////////////////////////
/*註冊頁 與 查詢密碼頁 的 內容切換*/
function orderDetail_switch(){
    
    var frame_box        = $('.detail_content'),  //內容
        switch_btn       = $('.order_nav .form_btn a');  //切換內容按鈕

    //依照內容數量 給予每個內容一個 id
    for ( var index = 0; index < frame_box.length; index++) {

        frame_box.eq(index).attr('box-id',index);

    }
    //依照內容數量 給予每個'切換按鈕'一個 id
    for ( var index = 0; index < frame_box.length; index++) {
        
        switch_btn.eq(index).attr('btn-id',index);

    }

    //按鈕切換
    switch_btn.on('click',function(){

        var a = $(this).attr('btn-id');

        if ( frame_box.eq(a).hasClass('show') == false ) {

            //按鈕樣式切換
            if ( $(this).hasClass('black') == false ) {

                switch_btn.removeClass('black').addClass('gray');

                switch_btn.eq(a).removeClass('gray').addClass('black');
                
            }

            //內容切換
            frame_box.removeClass('show');
            
            frame_box.eq(a).addClass('show');
        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//                付款方式切換                ///
///////////////////////////////////////////////
function payWay_switch(){

    var list = $('.pay_way_list');

    list.on('click',function(){

        if ( $(this).hasClass('clicked') == false ) {

            list.removeClass('clicked');
            
            $(this).addClass('clicked');
            
        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//            付款內容切換            //
//////////////////////////////////////
function payMent_switch(){

    var frame_box          = $('.payment .box'),  //內容
        payment            = $('.payment');        //內容內框
        payment_block      = $('.payment_block'),  //內容外框
        next_content_btn   = $('.next_content_btn'),  //切換內容按鈕
        cancel_content_btn = $('.cancel_content_btn');  //切換內容按鈕

    var rwd = window.screen.width == $(window).width();

    
    //依照內容數量 給予每個內容一個 id
    for ( var index = 0; index < frame_box.length; index++) {
        
        frame_box.eq(index).attr('payment-id',index);

    }
    for ( var index = 0; index < next_content_btn.length; index++) {
        
        next_content_btn.eq(index).attr('btn-id',index);

    }
    
    //打開
    next_content_btn.on('click',function(){

        var a = $(this).attr('btn-id');

        if ( payment_block.hasClass('show') == false ) {

            payment_block.addClass('show');

            frame_box.eq(a).addClass('show');

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.payment_block');

            if ( rwd == false ) {

                $('body').css({ 'overflow': 'hidden', });
                $('.header').css('padding-right','17px');
                
            }else {

                $('body').css({ 'overflow': 'hidden', });

            }
            
        }else {

            frame_box.eq(a - 1).removeClass('show').addClass('no_show');

            if ( $(window).width() <= 767 ) {

                setTimeout(function(){

                    frame_box.eq(a - 1).removeClass('no_show');
                    
                    frame_box.eq(a).removeClass('no_show').addClass('show');
                    
                }, 500);
                
            }else {

                setTimeout(function(){

                    frame_box.eq(a - 1).removeClass('no_show');
                    
                    frame_box.eq(a).removeClass('no_show').addClass('show');
                    
                }, 1000);

            }

        }

    });

    //關閉
    cancel_content_btn.on('click',function(){

        $(this).closest('.box').removeClass('show').addClass('no_show');

        payment_block.removeClass('show').addClass('no_show');

        //解鎖 ios body scrollbar
        disableBodyScroll(false, '.payment_block');

        if ( $(window).width() <= 767 ) {

            setTimeout(function(){

                frame_box.removeClass('no_show');
    
                payment_block.removeClass('no_show');
    
                $('body').css({ 'overflow': '',});
                
            }, 500);
            
        }else {

            setTimeout(function(){

                frame_box.removeClass('no_show');
    
                payment_block.removeClass('no_show');
    
                $('body').css({ 'overflow': '', });
                $('.header').css('padding-right','');
                
            }, 1000);

        }

    });

    //scroll bar
    // $('.payment').niceScroll();

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//            發票內容切換            //
//////////////////////////////////////
function invoce_switch(){

    var check_box = $('.invoce .check_box');
    

    check_box.on('click',function(){

        if ( $(this).hasClass('show') == false ) {
            
            check_box.removeClass('show');
    
            $(this).addClass('show');
            
        }

    });

}
/***************************************************************************************************************************/


/***************************************************************************************************************************/
///////////////////////////////////////
//             刪除item              //
//////////////////////////////////////
function delete_item(){

    var delete_btn = $('.shopping_cart .delete_btn');

    delete_btn.on('click',function(){

        var item = $(this).closest('.order_li');

        if ( item.hasClass('close') == false ) {

            item.addClass('close');

            setTimeout(function(){

                item.remove();
                
            }, 1000);
            
        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//        開關shipping_block         //
//////////////////////////////////////
function shipping_switch(){

    var open_btn     = $('.shipping_btn'),
        hidden_block = $('.shipping_block'),
        cancel_btn   = $('.cancel_btn'),
        close_btn    = $('.close_btn'),
        save_btn     = $('.save_btn'),
        box          = $('.shipping_list .box');

    var rwd = window.screen.width == $(window).width();

    //打開鍵
    open_btn.on('click',function(){

        box.eq(0).addClass('open_show');

        if ( hidden_block.hasClass('show') == false ) {

            hidden_block.addClass('show');

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.shipping_block');

            if ( rwd == false ) {
                
                $('body').css({ 'overflow': 'hidden', });
                $('.header').css('padding-right','17px');
                
            }else {

                $('body').css({ 'overflow': 'hidden', });

            }
            
        }

    });

    //取消鍵
    cancel_btn.on('click',function(){
        
        if ( hidden_block.hasClass('show') == true ) {

            hidden_block.removeClass('show');

            hidden_block.addClass('no_show');

            //解開 ios body scrollbar
            disableBodyScroll(false, '.shipping_block');

            setTimeout(function(){

                box.removeClass('show').removeClass('open_show');

                hidden_block.removeClass('no_show');

                if ( rwd == false ) {
                    
                    $('body').css({ 'overflow': '',});
                    $('.header').css('padding-right','');
                    
                }else {
    
                    $('body').css({ 'overflow': '', });
    
                }
                
            }, 1000);
            
        }

    });

    //關閉鍵
    close_btn.on('click',function(){

        if ( hidden_block.hasClass('show') == true ) {

            hidden_block.removeClass('show');
            
            hidden_block.addClass('no_show');

            //解開 ios body scrollbar
            disableBodyScroll(false, '.shipping_block');

            setTimeout(function(){

                box.removeClass('show').removeClass('open_show');

                hidden_block.removeClass('no_show');

                if ( rwd == false ) {
                    
                    $('body').css({ 'overflow': '',});
                    $('.header').css('padding-right','');
                    
                }else {
    
                    $('body').css({ 'overflow': '', });
    
                }
                
            }, 1000);
            
        }

    });

    //儲存鍵
    save_btn.on('click',function(){
        
        if ( hidden_block.hasClass('show') == true ) {

            hidden_block.removeClass('show');
            
            hidden_block.addClass('no_show');

            //解開 ios body scrollbar
            disableBodyScroll(false, '.shipping_block');

            setTimeout(function(){

                box.removeClass('show').removeClass('open_show');

                hidden_block.removeClass('no_show');

                if ( rwd == false ) {
                    
                    $('body').css({ 'overflow': '',});
                    $('.header').css('padding-right','');
                    
                }else {
    
                    $('body').css({ 'overflow': '', });
    
                }
                
            }, 1000);
            
        }

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//          shipping內容切換         //
//////////////////////////////////////
function shipping_content_switch(){

    var content_btn = $('.content_btn'),
        content     = $('.shipping_list .box');

    //依照內容數量 給予每個內容一個 id
    for ( var index = 0; index < content_btn.length; index++) {
        
        content_btn.eq(index).attr('btn-id',index);

    }
    //依照內容數量 給予每個內容一個 id
    for ( var index = 0; index < content.length; index++) {
        
        content.eq(index).attr('content-id',index);

    }

    content_btn.on('click',function(){

        content.eq(0).removeClass('open_show');

        //
        if ( $(this).hasClass('black') == false ) {

            content_btn.removeClass('black').addClass('gray');

            $(this).removeClass('gray').addClass('black');
            
        }


        //
        var a = $(this).attr('btn-id');

        content.removeClass('show');

        content.eq(a).addClass('show');

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//             bonus rule            //
//////////////////////////////////////
function bonus_rule(){

    var list = $('.use_box .frame li');

    var open_btn   = $('.use_information .open_btn'),
        close_btn  = $('.use_box .close_btn'),
        frame      = $('.use_box'),
        frame_box  = $('.use_box .box');

    var rwd = window.screen.width == $(window).width();
    var body   = $('body'),
        header = $('header');


    //打開
    open_btn.on('click',function(){

        if ( frame.hasClass('open') == false ) {

            frame.addClass('open');

            //鎖住 ios body scrollbar
            disableBodyScroll(true, '.use_box');

            if (rwd == false) {
                
                body.css({
                    'overflow':'hidden',
                    'padding-right':'',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }
            
        }

    });


    //關閉
    close_btn.on('click',function(){

        frame.removeClass('open').addClass('close');

        //解鎖 ios body scrollbar
        disableBodyScroll(false, '.use_box');

        setTimeout(function(){
            
            frame.removeClass('close');

            body.css({
                'overflow':'',
                'padding-right':'',
            });

            header.css({
                'padding-right':'0px',
            });

            
        }, 1000);

    });


    //點旁邊關閉
    frame.on('click',function(e){

        if (e.target !== this) { 
            
            return; 

        }else {

            if ( frame.hasClass('open') == true ) {
                
                frame.removeClass('open').addClass('close');

                //解鎖 ios body scrollbar
                disableBodyScroll(false, '.use_box');
    
                setTimeout(function(){
    
                    frame.removeClass('close');

                    body.css({
                        'overflow':'',
                        'padding-right':'',
                    });
        
                    header.css({
                        'padding-right':'0px',
                    });
                    
                }, 1000);
                
            }

        }

    });


    //點擊事件
    list.on('click',function(){
        
        if ( $(this).hasClass('open') == false ) {

            var list_opened = $('.use_box .frame li.open');

            list_opened.removeClass('open').find('.content').slideUp();

            $(this).addClass('open');

            $(this).find('.content').slideToggle(function() {

                //scroll bar resize
                frame_box.getNiceScroll().resize();

            });
            
        }else {

            $(this).removeClass('open');            

            $(this).find('.content').slideToggle();

        }
        
    });


    //active scroll bar
    frame_box.niceScroll({horizrailenabled:false});

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//            remove_item            //
//////////////////////////////////////
function remove_item(){

    var open_btn   = $('.box_1 .open_btn'),
        close_btn  = $('.delete_box .close_btn'),
        frame      = $('.delete_box'),
        frame_box  = $('.delete_box .box');

    var rwd = window.screen.width == $(window).width();
    var body   = $('body'),
        header = $('header');


    //打開
    open_btn.on('click',function(){

        if ( frame.hasClass('open') == false ) {
            
            frame.addClass('open');

            if (rwd == false) {
                
                body.css({
                    'overflow':'hidden',
                    'padding-right':'',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }
            
        }

    });


    //關閉
    close_btn.on('click',function(){

        frame.removeClass('open').addClass('close');
        
        setTimeout(function(){
            
            frame.removeClass('close');

            body.css({
                'overflow':'',
                'padding-right':'',
            });

            header.css({
                'padding-right':'0px',
            });

            
        }, 1300);

    });

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
///////////////////////////////////////
//            address_box            //
//////////////////////////////////////
function address_box(){
    
    var open_btn     = $('.member_address .frame .open_btn'),
        close_btn    = $('.address_box .close_btn'),
        frame        = $('.address_box'),
        frame_box    = $('.address_box .box'),
        frame_adbox  = $('.address_box .adbox');

    var rwd = window.screen.width == $(window).width();
    var body   = $('body'),
        header = $('header');

    
    //打開
    //判斷開啟的adbox  
    open_btn.on('click',function(){

        // frame_box.getNiceScroll().resize();
        
        var e = $(this);

        //鎖住 ios body scrollbar
        disableBodyScroll(true, '.address_box');


        if ( frame.hasClass('open') == false && e.hasClass('btn_add') == true ) {

            frame.addClass('open');

            $('.adbox_1').addClass('open');
            
            if (rwd == false) {
                
                body.css({
                    'overflow':'hidden',
                    'padding-right':'',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }
            
        }
        if ( frame.hasClass('open') == false && e.hasClass('btn_edit') == true ) {
            
            frame.addClass('open');

            $('.adbox_2').addClass('open');
            
            if (rwd == false) {
                
                body.css({
                    'overflow':'hidden',
                    'padding-right':'',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }
            
        }
        if ( frame.hasClass('open') == false && e.hasClass('btn_delete') == true ) {
            
            frame.addClass('open');

            $('.adbox_3').addClass('open');
            
            if (rwd == false) {
                
                body.css({
                    'overflow':'hidden',
                    'padding-right':'',
                });
    
                header.css({
                    'padding-right':'17px',
                });

            }else {

                body.css({
                    'overflow':'hidden',
                });

            }
            
        }

    });


    //關閉
    close_btn.on('click',function(){
        
        frame.removeClass('open').addClass('close');

        frame_adbox.removeClass('open');

        //解鎖 ios body scrollbar
        disableBodyScroll(false, '.address_box');

        setTimeout(function(){
            
            frame.removeClass('close');

            body.css({
                'overflow':'',
                'padding-right':'',
            });

            header.css({
                'padding-right':'0px',
            });

            
        }, 1000);

    });


    //點旁邊關閉
    frame.on('click',function(e){
        
        if (e.target !== this) { 
            
            return; 

        }else {

            if ( frame.hasClass('open') == true ) {
                
                frame.removeClass('open').addClass('close');

                frame_adbox.removeClass('open');

                //解鎖 ios body scrollbar
                disableBodyScroll(false, '.address_box');
    
                setTimeout(function(){
    
                    frame.removeClass('close');

                    body.css({
                        'overflow':'',
                        'padding-right':'',
                    });
        
                    header.css({
                        'padding-right':'0px',
                    });
                    
                }, 1000);
                
            }

        }

    });


    //active scroll bar
    // frame.niceScroll({horizrailenabled:false});

}
/***************************************************************************************************************************/



/***************************************************************************************************************************/
////////////////////////////////////////////////
//               鎖定ios scroll              ///
///////////////////////////////////////////////

// Use in combination with:
// html, body {overflow: hidden;}
//
// and: -webkit-overflow-scrolling: touch; for the element that should scroll.
//
// disableBodyScroll(true, '.i-can-scroll');


var disableBodyScroll = (function () {

    /**
     * Private variables
     */
    var _selector = false,
        _element = false,
        _clientY;

    /**
     * Polyfills for Element.matches and Element.closest
     */
    if (!Element.prototype.matches)
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;

    if (!Element.prototype.closest)
        Element.prototype.closest = function (s) {
            var ancestor = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (ancestor.matches(s)) return ancestor;
                ancestor = ancestor.parentElement;
            } while (ancestor !== null);
            return el;
        };

    /**
     * Prevent default unless within _selector
     * 
     * @param  event object event
     * @return void
     */
    var preventBodyScroll = function (event) {
        if (false === _element || !event.target.closest(_selector)) {
            event.preventDefault();
        }
    };

    /**
     * Cache the clientY co-ordinates for
     * comparison
     * 
     * @param  event object event
     * @return void
     */
    var captureClientY = function (event) {
        // only respond to a single touch
        if (event.targetTouches.length === 1) { 
            _clientY = event.targetTouches[0].clientY;
        }
    };

    /**
     * Detect whether the element is at the top
     * or the bottom of their scroll and prevent
     * the user from scrolling beyond
     * 
     * @param  event object event
     * @return void
     */
    var preventOverscroll = function (event) {
        // only respond to a single touch
	    if (event.targetTouches.length !== 1) {
	    	return;
	    }

	    var clientY = event.targetTouches[0].clientY - _clientY;

	    // The element at the top of its scroll,
	    // and the user scrolls down
	    if (_element.scrollTop === 0 && clientY > 0) {
	        event.preventDefault();
	    }

	    // The element at the bottom of its scroll,
	    // and the user scrolls up
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
		if ((_element.scrollHeight - _element.scrollTop <= _element.clientHeight) && clientY < 0) {
	        event.preventDefault();
	    }

    };

    /**
     * Disable body scroll. Scrolling with the selector is
     * allowed if a selector is porvided.
     * 
     * @param  boolean allow
     * @param  string selector Selector to element to change scroll permission
     * @return void
     */
    return function (allow, selector) {
    	if (typeof selector !== "undefined") {
	        _selector = selector;
	        _element = document.querySelector(selector);
    	}

        if (true === allow) {
        	if (false !== _element) {
	            _element.addEventListener('touchstart', captureClientY, false);
	            _element.addEventListener('touchmove', preventOverscroll, false);
        	}
            document.body.addEventListener("touchmove", preventBodyScroll, false);
        } else {
        	if (false !== _element) {
	            _element.removeEventListener('touchstart', captureClientY, false);
	            _element.removeEventListener('touchmove', preventOverscroll, false);
	        }
            document.body.removeEventListener("touchmove", preventBodyScroll, false);
        }
    };
}()); 
/***************************************************************************************************************************/