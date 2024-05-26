var detailLibox = {

    open_click: function () {
        $("#news .newsContent .ajaxBox .box>div").click(function () {
            var src = $(this).attr("data-src")
            detailLibox.open(src)
        });
    },

    open: function (src) {
        $("body").append("<article class='detailLibox'></article>")
        if ($(window).width() > 1024) {
            $("body").getNiceScroll().remove();
            $("body").css("overflow-y", "hidden")
        }else{
            $("body").css("overflow-y", "hidden")
        }

        $.ajax({
                // 載入資料
                url: src,
            })
            .done(function (data) {
                // 將資料塞入結構
                $(".detailLibox").html(data);
                detailLibox.all();

                var temp =($('.base-url').val() !==undefined)? $('.base-url').val(): ""
                
                var catenameP =($("#content").attr("data-catename")!==undefined)? $("#content").attr("data-catename"): ""
                
                var keytitle =($("#content").attr("data-key")!==undefined)? $("#content").attr("data-key"):""
                
                if(temp!==""&&catenameP!==""&&keytitle!==""){
                    history.replaceState(null,"",temp+"/News/"+catenameP+"/"+keytitle);
                }
            });
    },
    close_click: function () {
        $(".detailLibox .liboxClose").click(function () {
            detailLibox.close();
        });

        $(".detailLibox").click(function (e) {
            if ($(e.target).hasClass("detailLibox")) {
                detailLibox.close();                
            }
        })
    },

    close: function () {
        $(".detailLibox").addClass("close");
        if ($(window).width() > 1024) {
            bodyscrollbar();
        }
        else{
            $("body").css("overflow-y", "visible");
        }
        setTimeout(function () {
            var temp =($('.base-url').val()!==undefined)? $('.base-url').val(): ""
            var catenameP =($("#content").attr("data-catename")!==undefined)? $("#content").attr("data-catename"):""
            if(temp!==""&&catenameP!==""){
                history.replaceState(null,"",temp+"/News/"+catenameP);
            }
            $(".detailLibox").remove()

        }, 800)
    },

    slick: function () {
        $(".detailLibox ._slick ul").slick({
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: "#news .detailLibox ._slick .icon-triangle_left",
            nextArrow: "#news .detailLibox ._slick .icon-triangle_right",
            responsive: [{
                breakpoint: 1000,
                settings: {
                    arrows: false,
                }
            }]
        });
        $('.detailLibox ._slick ul').on('lazyLoaded', function(event, slick, currentSlide, nextSlide){
            $("#news .detailLibox").getNiceScroll().resize();       
        });
    },

    socailMediaOpen: function () {
        $(".topTitle .share button").click(function () {
            $(this).closest(".share").toggleClass("open")
        });
    },

    waypoint: function () {

        liboxWaypoint(".contentBox>*","70%")
        liboxWaypoint(".mayNeed","80%")
        liboxWaypoint(".otherNews","100%")

        function liboxWaypoint(target,offsetValue) {
            $(target).each(function (index, element) {
                $(element).waypoint({
                    context: document.querySelector('.detailLibox'),
                    handler: function () {
                        $(element).addClass('show');
                    },
                    offset: offsetValue
                });
            });
        }
    },

    blazy:function(){
        var bLazy = new Blazy({
            offset: 100,
            container:".detailLibox",
            success: function (ele) {
                Waypoint.refreshAll();
                $(ele).closest("._img").addClass("in")
                $("#news .detailLibox").getNiceScroll().resize();
            }
        });
    },

    Scroll:function(){
        if (!mobile()) {
            $("#news .detailLibox").niceScroll({
                zindex: "3",
                scrollspeed: 40,
                cursorborder: "none",
                cursorwidth: "4px",
                cursorcolor: "#fff",
                zindex: "12", 
                preventmultitouchscrolling: false,
                railpadding: { top: 0, right: 1, left: 0, bottom: 0 },
            });
        }
    },

    all: function () {
        detailLibox.close_click();
        detailLibox.slick();
        detailLibox.socailMediaOpen();
        detailLibox.waypoint();
        detailLibox.blazy();
        detailLibox.Scroll();
    }
}


$(document).ready(function () {
    detailLibox.open_click();
});