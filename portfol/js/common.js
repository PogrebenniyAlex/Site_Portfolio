$(document).ready(function() {

/*******выравнивание хэдера*******/

	function detectedHeight(){
		$(".main_head").css("height", $(window).height());
	};

	detectedHeight();
	$(window).resize(function(){
		detectedHeight();
	});

/*******меню********/

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").toggleClass("top_text_opac");
	});

	$(".menu_toggle").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".top_menu").is(":visible")) {
			$(".top_text").toggleClass("top_text_opac");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").toggleClass("top_text_opac");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_text h1").animated("fadeInDown","fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp","fadeOutDown");
	$(".animation_left").animated("fadeInLeft", "fadeOutDown");
	$(".animation_right").animated("fadeInRight", "fadeOutDown");
	$(".animation_foto").animated("flipInX","flipOutX");
	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	$(".popup").magnificPopup({type:"image"});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function(event) {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass('active');
	});


});

/******preloader*****/
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});