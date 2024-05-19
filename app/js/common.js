$(document).ready(function() {
	// header height
	function heightDetect() {
		$(".header").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	// sandwich menu
	$(".toggleMenu").click(function() {
		if ($(".topMenu").is(":visible")) {
			$(".headerText").removeClass("headerText_opacify");
			$(".sandwich").removeClass("active");
			$(".topMenu").fadeOut(600);
			$(".menuList__item a").removeClass("fadeInUp animated");
		} else {
			$(".headerText").addClass("headerText_opacify");
			$(".sandwich").addClass("active");
			$(".topMenu").fadeIn(600);
			$(".menuList__item a").addClass("fadeInUp animated");
		}
	});
	$(".menuList__item a").click(function() {
		$(".headerText").removeClass("headerText_opacify");
		$(".sandwich").removeClass("active");
		$(".topMenu").fadeOut(600);
		$(".menuList__item a").removeClass("fadeInUp animated");
	}).append("<span>");

	// page scrolling
	$(".topMenu .menuList .menuList__item a").mPageScroll2id();

	// animation header elements
	$(".headerText h1").animated("fadeInDown", "fadeOutUp");
	$(".headerText p").animated("fadeInUp", "fadeOutDown");

	// animation section elements
	$(".sectionHeader").animated("fadeInUp", "fadeOutDown");
	$(".animation-1").animated("flipInY", "flipOutY");
	$(".animation-2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation-3").animated("fadeInRight", "fadeOutRight");

	// popup photo
	$(".popup").magnificPopup({type: "image"});
	
	// portfolio section
	// mixItUp
	$("#portfolio__grid").mixItUp();

	// handle click portfolio item
	$(".section__portfolio li").click(function() {
		$(".section__portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	// popup portfolio
	// $(".popupContent").magnificPopup({type: "inline", midClick: true});
	// id for portfolio items
	// $(".portfolioItem").each(function(i) {
	// 	i = i + 1;
	// 	$(this).find(".popupContent").attr("href", "#work_" + i + "");
	// 	$(this).find(".portfolioItem__description").attr("id", "work_" + i + "");
	// });

	// contacts section
	// form validation
	$("input, select, textarea").jqBootstrapValidation();
});

$(window).load(function() { 
	// preloader
	$(".loader__inner").delay(300).fadeOut("slow");
	$(".loader").delay(300).fadeOut("slow");
});