(function(){

    var Share =  function(){
       
    var _this = this;
    
    
    _this.click= $(".share_icon div a i");
    Share.prototype.init = function() {
                _this.sharePage();
    };
        this.sharePage = function (){
            $(_this.click).click(function( event ){
                _this.href =  location.href;
                var shareType = $(this).attr('id');
                
                switch(shareType){
                    case 'FB':
                            window.open('http://www.facebook.com/sharer/sharer.php?u='+_this.href);
                            break;

                    case 'twitter':
                            window.open('http://twitter.com/home/?status='+_this.href);
                            break;

                //     // case 'icon-y':
                //     //      window.open('http://www.facebook.com/sharer/sharer.php?u='+_this.href);
                //     //      break;
                }
            }); 
        }
    }

    var handleShare = new Share();
    handleShare.init();
    
})();