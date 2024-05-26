// var Plugin_lbox = (function ($) {

//     var defaults = {
//         class: "lbox",
//         onOff: false,
//         wrapper: "body",
//         lboxObj: "<article class='lbox'></article>",
//         lboxObjContent: "<div class='lbox__wrap'><div class='lbox__inner'></div></div>",
//         inner: "lbox__inner",
//         close: "lbox__close",
//         start: function lboxStart() {
//         },
//         end: function lboxEnd() {
//         },

//     };

//     function Plugin_lbox(options) {
//         this._name = name;
//         this.settings = $.extend({}, defaults, options);
//         this.init();


//     }

//     Plugin_lbox.prototype.init = function () {
//         var wrapper = $(this.settings.wrapper)

//         var lboxObj = $(this.settings.lboxObj)
//         var lboxObjContent = $(this.settings.lboxObjContent)
//         lboxObj.addClass(this.settings.class);
//         lboxObj.append(lboxObjContent);
//         wrapper.append(lboxObj);
//         lboxObj.data('lbox', this.settings);
//         var width = window.screen.width == $(window).width();
//         lboxObj.data('ww', width);
//     };

//     Plugin_lbox.prototype.ajax = function (path) {
//         var that = this
//         $.ajax({
//             url: path,
//         }).done(function (data) {
//             $('.' + that.settings.class + ' .' + that.settings.inner).append(data)
//             setTimeout(function () {
//                 that.open();
//             }, 0);
//         });
//     };

//     Plugin_lbox.prototype.open = function () {
//         if (!this.settings.onOff) {
//             $("." + this.settings.class).addClass('on')
//             this.close_el();
//             this.lock();
//             this.settings.onOff = true;
//             this.start();
//         }
//     };

//     Plugin_lbox.prototype.ajaxop = function (path, style, src) {
//         var that = this;
//         $.ajax({
//             url: path,
//         }).done(function (data) {
//             $('.' + that.settings.class).addClass('nocg')
//             $('.' + that.settings.class + ' .' + that.settings.inner).append(data)

//             setTimeout(function () {
//                 that.ajaxopOpen(style, src);
//             }, 0);
//         });
//     };

//     Plugin_lbox.prototype.ajaxopOpen = function (style, src) {
//         if (!this.settings.onOff) {

//             var jqbody = $(this.settings.wrapper);
//             if (!$('.' + this.settings.class).data('ww')) {
//                 jqbody.css({ 'overflow': 'hidden', 'padding-right': '17px', });
//                 jqbody.find('header').css({ 'overflow': 'hidden', 'padding-right': '17px', })
//             } else { jqbody.css({ 'overflow': 'hidden', }); }

//             $("." + this.settings.class).fadeIn();
//             this.ajaxopClose_el();
//             this.lock();
//             this.settings.onOff = true;
//             this.start();
//             setTimeout(function () {

//                 if (style == "pic") {
//                     $('.lboxPicture img').attr('src', src);
//                 } else if (style == "vid") {
//                     $('.lboxVideo iframe').attr('src', src)
//                 }

//             }, 0);
//         }
//     };

//     // Plugin_lbox.prototype.conversion = function () {
//     //     var that = this;
//     //     $.ajax({
//     //         url: "../../views/layout/conversion.html",
//     //     }).done(function (data) {
//     //         $('.' + that.settings.class).addClass('nocg')
//     //         $('.' + that.settings.class + ' .' + that.settings.inner).append(data)
//     //         setTimeout(function () {
//     //             that.conversionOpen();
//     //         }, 0);
//     //     });

//     // };

//     // Plugin_lbox.prototype.conversionOpen = function () {
//     //     if (!this.settings.onOff) {
//     //         $("." + this.settings.class).fadeIn();
//     //         this.pictureClose_el();
//     //         this.lock();
//     //         this.settings.onOff = true;
//     //         this.start();
//     //     }
//     // };

//     Plugin_lbox.prototype.close_el = function () {
//         var that = this
//         if (!$('.' + that.settings.class + ' .' + that.settings.inner).data('bindClick')) {
//             $('.' + that.settings.class + ' .' + that.settings.inner).data('bindClick', true)
//             $('.' + that.settings.class + ' .' + that.settings.inner).on('click', '.' + this.settings.close, function () {
//                 that.close();
//                 that.settings.onOff = false;
//                 that.lock();
//             })
//         } else {
//             console.log('綁過了1')
//         }
//     };

//     Plugin_lbox.prototype.ajaxopClose_el = function () {
//         var that = this
//         if (!$('.' + that.settings.class + ' .' + that.settings.inner).data('bindClick')) {
//             $('.' + that.settings.class + ' .' + that.settings.inner).data('bindClick', true)
//             $('.' + that.settings.class + ' .' + that.settings.inner).on('click', '.' + this.settings.close, function () {
//                 that.close2();
//                 that.settings.onOff = false;
//                 that.lock();
//             })
//         } else {
//             console.log('綁過了2')
//         }
//     };

//     Plugin_lbox.prototype.close = function () {
//         var that = this;
//         $("." + that.settings.class).removeClass('on');
//         setTimeout(function () {
//             $("." + that.settings.class).find("." + that.settings.inner).empty()
//         }, 500);
//         that.end();
//     };

//     Plugin_lbox.prototype.close2 = function () {
//         var that = this;
//         $("." + that.settings.class).fadeOut();
//         var jqbody = $(this.settings.wrapper);

//         if (!$('.' + this.settings.class).data('ww')) {
//             jqbody.css({ 'overflow': '', 'padding-right': '' });
//             jqbody.find('header').css({ 'overflow': '', 'padding-right': '', })
//         } else { jqbody.css({ 'overflow': '', 'padding-right': '' }); }

//         setTimeout(function () {
//             $("." + that.settings.class).find("." + that.settings.inner).empty()
//         }, 500);

        

//         that.end();
//     };

//     Plugin_lbox.prototype.lock = function () {

//         var x = 0 ;
//         $('.lbox').each(function(){
//             if  ($(this).data('lbox').onOff){
//                 x = 1;
//             }
//         })
//         if (x) {
//             var body = $(this.settings.wrapper)
//             if (!this.settings.onOff) {
//                 body.css({ overflow: 'hidden' })
//             } else {
//                 if ($("." + this.settings.class).prev().hasClass('on')) {
//                 } else {
//                     body.css({ overflow: '' })
//                 }
//             } 
//         }else{

//         }

//     };

//     Plugin_lbox.prototype.start = function () {
//         try {
//             lboxStart();
//             var lboxStart2 = this.settings.start
//             lboxStart2();
//         } catch (err) {
//         }
//     };

//     Plugin_lbox.prototype.end = function () {
//         try {
//             lboxEnd();
//             var lboxEnd2 = this.settings.end
//             lboxEnd2();
//         } catch (err) {
//         }
//     };

//     return Plugin_lbox

// }(jQuery));



// // 範例

// // var lbox1 = new Plugin_lbox({ class: 'lbox1', start: lboxStart1 });
// // var lbox2 = new Plugin_lbox({ class: 'lbox2', start: lboxStart });

// // $('.content_wrap').on('click', '.lboxBtn', function () {
// //     var data = $(this).data('lbox');
// //     lbox1.ajax(data)
// // });

// // $('.lboxBtn2').on('click', function () {
// //     var data = $(this).data('lbox');
// //     var src = $(this).find('img').attr('src')
// //     lbox2.ajaxop(data,"pic",src)
// // });

// // $('.content_wrap').on('click', '.lboxBtnVideo', function () {
// //     var data = $(this).data('lbox');
// //     var src = $(this).data('video')
// //     lbox1.ajaxop(data,"vid",src)
// // });