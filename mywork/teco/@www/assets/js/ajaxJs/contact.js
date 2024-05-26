(function(){
	var sendform = function(){
		var _this = this;
    _this.base = $("base").attr("href")
		_this.form = $("#opinion_form ul li ");
    _this.send = $(".form_send");
    _this.reset_code = $(".testimg");
		sendform.prototype.init = function() {
			_this.ajax();
      _this.reset_c();
		};

		this.ajax = function(){
      $("input[name='_token']").val( $("form input[name='_token']").val() );
			_this.send.click(function(){

        var emptyInput = [] ;
        var form_input = {} ;

        [].slice.call( _this.form ).forEach(function(input){
          //如果有一個值沒輸入
            if( $(input).children("input").val() == "" ){
              emptyInput.push( $(input).children("label").text() );
            }else if( $(input).children("textarea").val() == "" ){
              emptyInput.push( $(input).children("label").text() );
            }else{
              if ( $(input).has('input')  ){
                form_input[$(input).children("input").attr("id")] = $(input).children("input").val();
              }
              if ( $(input).has('textarea') ){
                form_input[$(input).children("div").attr("id")] = $(input).children("textarea").val();
              }
            }
        });

          if( emptyInput.length > 0 ){
            var errorMessage = emptyInput.toString();
            alert( errorMessage.replace(/,/g,"\n") +"\n                                                     不可以留空");
          }else{
            send_ajax( form_input );
          }
        
      });
    
    this.reset_c = function(){
      _this.reset_code.click(function(){
         var d = new Date(),
          img = this.childNodes[1];
          img.src = img.src.split('?')[0] + '?t=' + d.getMilliseconds();
      })
    }

    function send_ajax(form_input) {
      
      $.ajax({
        url: _this.base + '/Contact/send',
        data:{
          "form_data" : form_input,
          "_token" : $("form input[name='_token']").val(),
        },
        type: 'GET', 
        error: function (xhr) {
         },
         success: function (response) {
            console.log( typeof( response ) );
            console.log( response );
            if( response === "1" ){
              alert("表單送出成功");
              $(".swpmodal-close").click();
            }else{
              alert( response );
              _this.reset_code.click();
            }
            
          }
      });

      
    }
				

		}
	}

	var handlesendform = new sendform();
	handlesendform.init();

})();