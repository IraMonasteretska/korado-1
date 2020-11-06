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

	$( ".text__radiator" ).click( function() {
		if ($("#romb-one").css('transform') == 'none') {
		  $("#romb-one").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-one").css({'transform': ''});
		};
	});

	$( ".text__towel" ).click( function() {
		if ($("#romb-two").css('transform') == 'none') {
		  $("#romb-two").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-two").css({'transform': ''});
		};
	});

	$( ".text__multicolored" ).click( function() {
		if ($("#romb-three").css('transform') == 'none') {
		  $("#romb-three").css({'transform': 'rotate(-180deg)'});
		} else {
		  $("#romb-three").css({'transform': ''});
		};
	});

	$(".colors__text--one").click(function(){
		$('.radiators').hide();
		$('#rad1').show();		
	});

	$(".colors__text--two").click(function(){
		$('.radiators').hide();
		$('#rad2').show();		
	});

	$(".colors__text--three").click(function(){
		$('.radiators').hide();
		$('#rad3').show();		
	});

	$(".towel-1").click(function(){
		$('.towels').hide();
		$('#towel1').show();		
	});

	$(".towel-2").click(function(){
		$('.towels').hide();
		$('#towel2').show();		
	});

	/***  Section Colors finish  ***/
	
	

});