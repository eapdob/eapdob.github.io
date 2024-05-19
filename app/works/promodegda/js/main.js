$(function() {
    // Slider top
    $(".sliderTop").owlCarousel({
        items: 1,
        nav: true,
        navText : [],
        dots: true,
        autoplay: true,
 		autoplayTimeout: 3000,
 		loop: true
    });

    // Slider bottom
    $(".sliderBottom").owlCarousel({
        items: 5,
        nav: true,
        navText : [],
        margin: 16,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        responsiveClass:true,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            480:{
                items:3,
                nav:false
            },
            992:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    // mobile menu
    $(".mobileIcon").on("click", function() {
        $(".mobile").stop().slideToggle(350);
    });

    // start check
    if ($(window).width() >= 769) {
        $(".menu__item").appendTo(".menu");
    } else {
        $(".menu__item").appendTo(".mobile__menu");
    }

    // resizing
    $(window).trigger("resize");
    $(window).on("resize", function() {
        // reset position of mobile menu
        if ($(".mobile").hasClass("active")) {
            $(".mobile").removeClass("active");
        }
        // check for size
        if ($(window).width() >= 769) {
            $(".menu__item").appendTo(".menu");
        } else {
            $(".menu__item").appendTo(".mobile__menu");
        }
    });
});