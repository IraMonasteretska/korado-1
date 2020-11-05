$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('.header__phones').removeClass('active');
	});
	$('.header__btn').click(function(event) {
		$('.header__phones').toggleClass('active');
		$('.header__menu, .header__burger').removeClass('active');
	});
});