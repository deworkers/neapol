(function( $ ){
  	$.fn.scrollView = function(options) {
	    var options = $.extend( {
	      'timeout' : 1000,
	      'animate' : 'rotate'
	    }, options);

		var _this = this;
		var n = _this.children().length; // элементов в блоке
		var pos = _this.position().top; // позиция блока

		_this.children().each(function() {
			$(this).addClass('scroll-hidden');
		});

		for(var i = 0; i < n; i++) {
		    (function(index) {
		        setTimeout(function() { 
		        	console.log(_this);
					//_this.find($($('.scroll-hidden')[i])).removeClass('scroll-hidden').addClass(options.animate);
		        }, options.timeout*i);
		    })(i);
		}

   	

  	};
})( jQuery );