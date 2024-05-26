// 燈箱
;(function ($) {

    $.fn.xlbox = function (options ) {
        var _defaultSettings = {
            x: 1,
            y: 2,
        };
        var _settings = $.extend(_defaultSettings, options);

        

        var _handler = function () {
        
            $(this).on('click',function () {
                console.log(_settings.x)
                console.log(_settings.y)
            });
            return false;
        };

        return this.each(_handler);
    };


}(jQuery));


$('.news-box__btn').xlbox();