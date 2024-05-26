var waypoint = {
    product: function() {
        $('.products ul li').each(function(index, element) {
            $(element).waypoint(function() {
                $(element).addClass('show');
            }, { offset: '80%' });
        });
    },

    keep_inf: function() {
        $(".keep_inf").waypoint(function() {
            $(".keep_inf").addClass("show");
        }, { offset: '80%' });
    }
}




var action = {
    select_count: function() {
        var product_count = document.querySelectorAll(".products ul li")

        var i = $(product_count).length

        $(".show_p span").text(i);

        if (i == 0) {
            $(".show_p").css("display", "none");
            $(".hidden_p").css("display", "block");
            $(".show_ul").css("display", "none");
            $(".hidden_ul").css("display", "flex");
            $(".keep_inf_title p").text("找尋柏拉圖產品");
        }
    },

    delete_click: function() {
        $(".delete").click(function() {
        	$(this).parent().addClass("disappear");

        	var el = $(this)
        	
            setTimeout(function() {
                $(el).parent().remove();
                action.select_count();
                waypoint.product();
                waypoint.keep_inf();
            }, 800);
        });
    },

    // 問卷選單出現
    quotation_open: function() {
        $(".openQuotation").click(function() {
            $(".quotation").delay(600).slideDown(1000);
            $(".quotation").addClass("open");
            $(".keep_inf>span").addClass("open");
        });
    }

}

var wishlist = {
    action: function() {
        action.select_count();
        action.quotation_open();
        action.delete_click();
    },

    waypoint: function() {
        waypoint.product();
        waypoint.keep_inf();
    }
}








// 引入
$(document).ready(function() {
    wishlist.action();
    wishlist.waypoint();
});