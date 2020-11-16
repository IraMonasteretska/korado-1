$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('.header__phones').removeClass('active');
	});
	$('.header__btn').click(function(event) {
		$('.header__phones').toggleClass('active');
		$('.header__menu, .header__burger').removeClass('active');
	});

	/***  Section Colors start  ***/

	$( ".text__radiator" ).mouseenter( function() {
		if ($("#romb-one").css('transform') == 'none') {
		  $("#romb-one").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-one").css({'transform': ''});
		};
	});

	$( ".text__towel" ).mouseenter( function() {
		if ($("#romb-two").css('transform') == 'none') {
		  $("#romb-two").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-two").css({'transform': ''});
		};
	});

	$( ".text__multicolored" ).mouseenter( function() {
		if ($("#romb-three").css('transform') == 'none') {
		  $("#romb-three").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-three").css({'transform': ''});
		};
	});

	$(".colors__text--one").mouseenter(function(){
		$('.radiators').hide();
		$('#rad1').show();		
	});

	$(".colors__text--two").mouseenter(function(){
		$('.radiators').hide();
		$('#rad2').show();		
	});

	$(".colors__text--three").mouseenter(function(){
		$('.radiators').hide();
		$('#rad3').show();		
	});

	$(".towel-1").mouseenter(function(){
		$('.towels').hide();
		$('#towel1').show();		
	});

	$(".towel-2").mouseenter(function(){
		$('.towels').hide();
		$('#towel2').show();		
	});

	$(".gallery__btn").mouseenter(function(){
		$(this).parent().parent().addClass('rotate');	
	});

	$(".gallery__btn").mouseleave(function(){
		$(this).parent().parent().removeClass('rotate');
	});


	/***  Section Colors finish  ***/

	$('.social__btn').click(function () {
        $('.social__item').fadeToggle();
		$('.social__close').toggle();
		$('.social__message').toggle();
		$('.social__circle').toggleClass('active');
	});
	
	

});