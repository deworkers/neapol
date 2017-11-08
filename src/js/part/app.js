jQuery(document).ready(function() {
    
    jQuery('.images').bxSlider({
	  speed: 50000,
	  ticker: true,
	  tickerHover: true,
	  maxSlides: 10
	 });

	jQuery('.scrollView, .scrollView2, .scrollView3').children().addClass('scroll-hidden');


    var scrollAnimate = function(_this) {
		var start, end, box, timer;
	    start = 0;
	    box = _this;
	    end = box.children().length;
	    timer = setInterval(function() {
	    	box.children().eq(start).addClass('rotate').removeClass('scroll-hidden');
	        start++;
	        if (start == end) {
	            clearInterval(timer);
	            _this.removeClass('scroll-hidden');
	        }
	    }, 500);
    }

    scrollAnimate( jQuery('.scrollView') );

	jQuery(window).on('scroll', function() {
	    if ( jQuery('body, html').scrollTop() > 1000 ) {
	    	scrollAnimate( jQuery('.scrollView2') );
	    }

	    if ( jQuery('body, html').scrollTop() > 2200 ) {
	    	scrollAnimate( jQuery('.scrollView3') );
	    }
	});

});