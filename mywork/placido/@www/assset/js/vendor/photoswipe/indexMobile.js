var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../../uploads/catalog/03.jpg',
            w: 1000 ,
            h: 1361
        },
        {
            src: '../../uploads/catalog/04.jpg',
            w: 1000 ,
            h: 1361
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
        clickToCloseNonZoomable: false,
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