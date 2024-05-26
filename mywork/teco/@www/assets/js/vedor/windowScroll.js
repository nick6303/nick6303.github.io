var windowScroll = function() {

	windowScroll.prototype.init = function() {

		$('.anchorBtn').off().on('click', function() {

			var anchorId = '#'+$(this).data('anchor');

			if( anchorId.length > 0 )
			{
				$('html, body').animate({
			        scrollTop: $(anchorId).offset().top
			    }, 500);
			}

		});

	}

}
var windowScrollInstance = new windowScroll();
windowScrollInstance.init();