var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../../uploads/catalog/test.jpg',
            w: 800 ,
            h: 1024
        },
        {
            html: '<div class="catalogyPage"><div class="left"><img src="../../uploads/catalog/test.jpg" ></div><div class="right"><img src="../../uploads/catalog/test01.jpg"></div></div>'
        },
        {
            src: '../../uploads/catalog/02.jpg',
            w: 1788,
            h: 954
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        closeEl:false,
        pinchToClose:false,
        closeOnScroll:false,
        closeOnVerticalDrag:false,
        tapToClose: false,
        closeElClasses: [],
        loop:true,
        
        barsSize: {top:0, bottom:0},

        showAnimationDuration: 0,
        hideAnimationDuration: 0,        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

// document.getElementById('btn').onclick = openPhotoSwipe;