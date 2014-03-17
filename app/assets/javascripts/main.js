$(function() {
  // var s = skrollr.init({
//     render: function(data) {
//         //Debugging - Log the current scroll position.
//         //console.log(data.curTop);
//         console.log(data.curTop)
//     }
//   });

	// // resize our sections
//   var windowHeight =$(window).height()
//   console.log($(window).height())
//   $('.slide').css({'height': windowHeight})
//
//
// 	// refresh Skrollr after resizing our sections
// 	s.refresh($('.homeSlide'))

  // jQuery.fn.center = function(parent) { // center a div in window
//       if (parent) {
//           parent = this.parent();
//       } else {
//           parent = window;
//       }
//       this.css({
//           "position": "absolute",
//           "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop()),
//           "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft())
//       });
//   return this;
//   }

  // $($('.story')[0]).center()

	$window = $(window)
	$slide = $('.homeSlide');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      // Resize sections
		      adjustWindow();

		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow(){

		// Init Skrollr
	  var s = skrollr.init({
			forceHeight: false,
	    render: function(data) {
	        //Debugging - Log the current scroll position.
	        //console.log(data.curTop);
	        console.log(data.curTop)
	    }
	  });

		// Get window size
	    winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		}

	    // Resize our slides
	    $slide.height(winH);

	    // Refresh Skrollr after resizing our sections
			s.refresh($('.homeSlide'));

	}

})