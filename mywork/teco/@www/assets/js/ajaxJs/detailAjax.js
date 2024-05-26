(function(){
	var getHtml = function(){
		var _this = this;
		_this.base = $('base').attr('href');
    _this.href = location.href.split("/");
		_this.table = $(".QA_Table li");
		_this.contents = $("section.contents");
		getHtml.prototype.init = function() {
			_this.ajax();
      _this.null_title();
		};

		this.ajax = function(){
			_this.table.click(function( event ){

				$.ajax({
          		  	url: _this.base + '/Faq/ajax',
          		  	data:{category:$(event.currentTarget).data('info')},
          		  	type: 'get',
          		  	error: function (xhr) {
          		  	  result = false;
          		  	},
          		  	success: function (response) {
          		  		
          		  		_this.contents.empty()
          		  	    _this.contents.append(response);

          		  	    $('.faq_datil_qa li').click(function(){
                        if($(this).parent().hasClass('open')){
                            $(this).parent().removeClass('open');
                        }else{
                            $(this).parent().addClass('open');
                        }
                      });

                      $('.faq_datil').each(function(index, element) {
                          $(element).waypoint(function() {
                              $(element).addClass('animated fadeIn').removeClass('hide');
                          }, {
                              offset: '80%'
                          });
                      });

          		  	}
          		});
			});
		}

    this.null_title = function(){
      
      var title = _this.href.pop();
      

      if( title === "detail" ){
        $(".QA_Table li:nth-child(2)").addClass('pick');
      }else{
       
        [].slice.call( _this.table ).forEach(function(ele){
          if( $(ele).data("info") == decodeURIComponent(title) ){
            $(ele).addClass('pick');
          }
        });
      }
    }

	}

	var handleGetHtml = new getHtml();
	handleGetHtml.init();

})();