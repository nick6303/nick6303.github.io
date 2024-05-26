(function(){

    var search =  function(){
        var _this = this;
        _this.base = $("base").attr("href");
        _this.click= $(".search_icon");
        _this.inputValue = $(".product_search_btn input");
        search.prototype.init = function() {
            _this.searchInput();
        };

        this.searchInput = function (){
            _this.click.click(function(){
                var inputKey = $(_this.inputValue).val();
                $.ajax({
                    url: _this.base + "/cache/store",
                    type:"GET",
                    data:{value:inputKey},
                    error: function (xhr) {
                        result = false;
                    },

                    success: function (response) {
                        console.log( response );
                    }
                });
            })
        }
    }

    var handleSearch = new search();
    handleSearch.init();
    
})();