(function(){
	var getlocaiton = function(){
		var _this = this;
		_this.base = $('base').attr('href');
    _this.baseSplit = $('base').attr('href').split("/");
    _this.lang =  _this.baseSplit.pop();
		_this.area_id = "";
    _this.location_Click = $(".area_click a")
    _this.load_page_id = location.href.split("/").pop();

		getlocaiton.prototype.init = function() {
			_this.location();
      _this.ChangeContent();
		};

		this.location = function(){
			 $(document).ready(function(){
         click(_this.load_page_id);
       })
		}

    _this.ChangeContent = function(){
      $(_this.location_Click).click(function(){

          _this.area_id = $(event.target).data("info");
          Content(_this.area_id);
          url(_this.area_id);
      })
    }

    function Content(id){

        $.ajax({
              url: _this.base + '/Location/ajax',
              data:{id:_this.area_id},
              type: 'get',
              error: function (xhr) {
                result = false;
              },
              success: function (response) {
                  
                  $('.content .location_inner').remove();
                  $('.content').append(response);
                  
                  $('.fa-caret-down').click(function(){
                      if($(this).parent().hasClass('open')){
                          $(this).parent().removeClass('open');
                      }else{
                          $(this).parent().addClass('open');
                      }
                  });
                  $('.location_inner .location_txt li ul div').on('click', function() {
                      $(this).parent().toggleClass('open');
                  })

                  $('.location_inner .location_txt li ul li').on('click', function() {
                      if ($(this).parent().attr('class') == 'open') {} else {
                          $(this).parent().toggleClass('open');
                      }
                  })


                  $('.location').each(function(index, element) {
                      $(element).waypoint(function() {
                          $(element).addClass('animated fadeIn').removeClass('hide');
                      }, {
                          offset: '80%'
                      });
                  });
              }
        });
    }

    function click(area_d){
        $(".area_click a[data-info='"+ area_d +"']").parent().attr('class', "pick");
    }

    function url(area_id){
      window.history.replaceState(null, null, _this.lang +"/Location/area/"+ area_id );
    }

	}

	var handleGetLocation = new getlocaiton();
	handleGetLocation.init();

})();
