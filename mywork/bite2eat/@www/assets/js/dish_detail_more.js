$(document).ready(function() {
    $(".openDetailLibox").click(function() {
        $("body").append("<article class='dishMoreLibox'></article>")
        $(".dishMoreLibox").addClass("open");
        $.ajax({
                url: '../../views/menu/dishMoreLibox.html',
            })
            .done(function(data) {
                $(".dishMoreLibox").html(data);
                dishMoreLibox.all();
            });

    });
});


var dishMoreLibox = {
    open: function() {
        $("body").getNiceScroll().resize().hide();
    },

    close_click: function() {
        $(".dishMoreLibox .liboxClose").click(function() {
            dishMoreLibox.close();
        });
    },
    close: function() {
        $(".dishMoreLibox").removeClass("open");
        $(".dishMoreLibox").addClass("close");
        setTimeout(function() {
            $(".dishMoreLibox").remove();
        }, 1000);
    },

    scrollbar:function(){
		$(".dishMoreLibox").niceScroll({
            nativeparentscrolling: false,
            cursorborder: "none",
            cursorwidth: "4px",
            railpadding: { top: 0, right: 2, left: 0, bottom: 0 },
		});	
    },

    all: function() {
        dishMoreLibox.open();
        dishMoreLibox.close_click();
        dishMoreLibox.scrollbar();
    }
}