// 會員通用燈箱
var liboxs = {

    isajax: false,

    alreadyHave: false,
    
    ajax:function(target){
        var src = $(target).attr("data-src")
        
        liboxs.alreadyHave = ($(".memberFormLibox").length > 0 )

        $("body").append("<article class='memberFormLibox'></article>")
        
        $.ajax({
            // 載入資料
            url: src,
        }).done(function (data) {
            // 將資料塞入結構
            if(liboxs.alreadyHave ){
                // 第二個memberFormLibox
                $("article.memberFormLibox").eq(-1).html(data);
                $("article.memberFormLibox").eq(-1).find(".libox").eq(0).addClass("open")
            }else{
                $("article.memberFormLibox").html(data);
                $("article.memberFormLibox").find(".libox").eq(0).addClass("open")
            }
            // 是否是ajax進來的
            liboxs.isajax = true
            if (!mobile()) {
                $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
            } else {
                $("body").css("overflow-y", "hidden")
            }

            liboxs.all(0);
        });
    },

    open:function (index) {
        var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);

        $libox.addClass("open")
        if (!mobile()) {
            $("body").css({"overflow-y":"hidden","padding-right":"1rem"})
        } else {
            $("body").css("overflow-y", "hidden")
        }

        liboxs.all(index);
    },

    close_click: function (index) {

        var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);
        
        $libox.find(".liboxClose").click(function () {
            liboxs.close(this);
        });

        $libox.click(function(e){
            if($(e.target).hasClass("libox")){
                liboxs.close(this);
            }
        });
    },

    close: function (target,closeMember) {

        var removeMember = (closeMember == undefined)?true:false

        $(target).closest(".libox").addClass("close").removeClass("open");
        
        if (!mobile()) {
            $("body").css({
                "overflow-y": "visible",
                "padding-right": "0rem"
            })
        } else {
            $("body").css("overflow-y", "visible");
        }

        setTimeout(function () {
            $(target).closest(".libox").removeClass("close");
            if(liboxs.isajax && removeMember){
                if(liboxs.alreadyHave){
                    $("article.memberFormLibox").eq(-1).remove();
                }else{
                    $("article.memberFormLibox").remove();
                }
                liboxs.isajax = false
            }
        }, 400);
    },

    input:function(index){
        $(".memberFormLibox .libox").eq(index).find("input").each(function(){
            $(this).closest(".item").click(function(){
                $(this).find(".inputArea input").focus();
            })
        })
    },

    niceScroll:function(index){
        if(!mobile()){
            $(".memberFormLibox .libox").eq(index).find("section").niceScroll({
                cursorborder: "none",
                cursorwidth: "5px",
                cursorcolor: "#000",
                nativeparentscrolling: false,
                railpadding: { 
                    top: 0, 
                    right: 1, 
                    left: 0, 
                    bottom: 0 
                }
            })
        }
    },

    intro:function(index){
        var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);

        $libox.find(".typeBox .listTable .openIntro").each(function(){
            $(this).off().click(function(){
                $(this).closest(".list").toggleClass("active").find(".intro").slideToggle({
                    duration: 400,
                    complete:function(){
                        $libox.find("section").getNiceScroll().resize();
                    }
                })
                $(this).closest(".list").siblings().removeClass("active").find(".intro").slideUp({
                    duration: 400,
                    complete:function(){
                        $libox.find("section").getNiceScroll().resize();
                    }
                })
            })
        })
    },

    select:function(index){
        var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);

        $libox.find(".typeBox .select p").each(function(){
            $(this).click(function(){
                var i = $(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                $libox.find(".typeBox .table>div").eq(i).addClass("active").siblings().removeClass("active")
            })
        })
    },
    // 只有在手機板才會出現
    mobileListClick:function(index){
        if($(window).width()<601){
            var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);
            $libox.find(".table .listbody .list").each(function(){
                $(this).find(".openObject").css("display","none");
                $(this).off().click(function(){
                    $(this).toggleClass("on").find(".openObject").slideToggle(400)
                    $(this).siblings().removeClass("on").find(".openObject").slideUp(400)
                })
            })
        }
    },
    // 只有在手機板才會出現的提示文字
    mobileBefore:function(){
        $(".memberFormLibox .typeBox .listbody .list .openObject").each(function(){
            var dataName = $(this).attr("data-name")
            if(dataName !== undefined){
                $(this).find("p").attr("data-name",dataName)
            }
        })
    },

    all:function(index){
        liboxs.niceScroll(index);
        liboxs.input(index)
        liboxs.mobileBefore()

        var $libox =(liboxs.isajax)?$(".memberFormLibox").eq(-1).find(".libox").eq(index):$(".memberFormLibox .libox").eq(index);
        console.log($libox)
        //是否有X
        if($libox.find(".liboxClose").length == 0){
            $libox.addClass("noX");
            console.log("1")
        }else{
            console.log("2")
            liboxs.close_click(index);
        }
        // 驗證碼
        if($libox.find(".vcode").length > 0){
            var target = $libox.find(".vcode")
            vcode(target);
        }
        // 日期選擇器
        if($libox.find(".sel_date").length > 0){
            member.dateDropper();
        }
        // 下拉式選單
        if($libox.find(".dropDown").length > 0){
            dropDown(".memberFormLibox");
        }
        // 點數表單
        if($libox.find(".typeBox").length > 0){
            liboxs.intro(index);
            liboxs.select(index);
            liboxs.mobileListClick(index)
        }
    }
}