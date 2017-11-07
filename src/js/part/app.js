$(document).ready(function() {
    
    $('.images').bxSlider({
	  speed: 50000,
	  ticker: true,
	  tickerHover: true,
	  maxSlides: 10
	 });

	$('.scrollView, .scrollView2, .scrollView3').children().addClass('scroll-hidden');


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

    scrollAnimate( $('.scrollView') );

	$(window).on('scroll', function() {
	    if ( $('body, html').scrollTop() > 1000 ) {
	    	scrollAnimate( $('.scrollView2') );
	    }

	    if ( $('body, html').scrollTop() > 2200 ) {
	    	scrollAnimate( $('.scrollView3') );
	    }
	});

});