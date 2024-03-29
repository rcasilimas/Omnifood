$(document).ready(function() {

	$('.js-section-features').waypoint(function(direction) {
		if(direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	})

	$('.js-btn-full').click(function() {
		$('html, body').animate({ scrollTop: $(".js-section-plans").offset().top}, 1000);
	})
	$('.js-btn-ghost').click(function() {
		$('html, body').animate({ scrollTop: $(".js-section-features").offset().top}, 1000);
	})

	$('.js-wp-1').waypoint(function(direction) {
		$('.js-wp-1').addClass('animated fadeIn')
	}, {
		offset: '50%'
	})

	$('.js-wp-2').waypoint(function(direction) {
		$('.js-wp-2').addClass('animated fadeInUp')
	}, {
		offset: '50%'
	})

	$('.js-wp-3').waypoint(function(direction) {
		$('.js-wp-3').addClass('animated fadeIn')
	}, {
		offset: '50%'
	})

	$('.js-wp-4').waypoint(function(direction) {
		$('.js-wp-4').addClass('animated pulse')
	}, {
		offset: '50%'
	})

	$('.js-nav-icon').click(function() {
		var nav = $('.js-main-nav');
		nav.slideToggle(200);
		var icon = $('.menu-icon')
	})

});

