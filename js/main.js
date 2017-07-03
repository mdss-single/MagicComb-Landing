(function($){ 
	"use strict";
	$('.js-slider, .js-hot').flickity({
		prevNextButtons: false
	});
	$('.js-news').flickity({
		wrapAround: true,
		cellAlign: 'left',
		pageDots: false
	});

	$('.faq__questions').each(function(i) {
		var storage = localStorage.getItem('tab' + i);
		if (storage) {
			$(this).find('li').removeClass('faq__question--active').eq(storage).addClass('faq__question--active').closest('.faq').find('.faq__answer').removeClass('faq__answer--active').eq(storage).addClass('faq__answer--active');
		}
	});
	$('.faq__questions').on('click', 'li:not(.faq__question--active)', function() {
		$(this).addClass('faq__question--active').siblings().removeClass('faq__question--active').closest('.faq').find('.faq__answer').removeClass('faq__answer--active').eq($(this).index()).addClass('faq__answer--active');
		var ulIndex = $('.faq__questions').index($(this).parents('.faq__questions'));
		localStorage.removeItem('tab' + ulIndex);
		localStorage.setItem('tab' + ulIndex, $(this).index());
	});

	$('.header__burger').on('click', function() {
		$('.nav-place').addClass('nav-place--active');
		$('body').prepend('<div class="cover"></div>');
		return false;
	});
	$('.nav-place__close').on('click', function() {
		$('.nav-place').removeClass('nav-place--active');
		$('.cover').remove();
		return false;
	});
	$(document).on('click', '.cover', function(){ 
		$('.nav-place').removeClass('nav-place--active');
		$(this).remove();
	})

	if ($(window).width() < 850) {
		$('.nav-content').html('');
		$('.nav__list').clone().appendTo('.nav-content');
	}
	$(window).resize(function() {
		if ($(window).width() < 850) {
			$('.nav-content').html('');
			$('.nav__list').clone().appendTo('.nav-content');
		}
	});

	$('.nav-place').swipe({
		swipeLeft:function() {
			$('.nav-place').removeClass('nav-place--active');
			$('.cover').remove();
		},
	});

})(jQuery);