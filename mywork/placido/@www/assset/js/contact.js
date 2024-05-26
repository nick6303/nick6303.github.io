var waypoint = {
    map: function() {
        $("._map").waypoint(function() {
            $("._map").addClass("show");
        },{ offset: '80%' });
    },

    findHiland_text: function() {
        $(".findHiland_text").waypoint(function() {
            $(".findHiland_text").addClass("show");
        },{ offset: '80%' });
    },

    message_title: function() {
        $(".message_title").waypoint(function() {
            $(".message_title").addClass("show");
        },{ offset: '80%' });
    }
}


var contact = {
    waypoint: function() {
    	waypoint.map();
    	waypoint.findHiland_text();
    	waypoint.message_title();
    }
}

// 引入
$(document).ready(function() {
	contact.waypoint();
});