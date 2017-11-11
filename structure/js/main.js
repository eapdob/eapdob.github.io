$(function() {

    // mobile anchors
    $(".menu__item").click(function() {
        if ($(window).width() < 992) $(".mobileMenu").removeClass("open");
    });

    // gallery pictures
    mixitup($("#galleryImagesGrid"), {
        selectors: {
            target: '.galleryImagesItem'
        },
        animation: {
            duration: 400
        }
    });

    // gallery menu
    $(".galleryList__item").click(function() {
        $(".galleryList__item").removeClass("active");
        $(this).addClass("active");
    });

    // hero slider
    $(".heroSlider").owlCarousel({
        nav: true,
        navText: [],
        dots: true,
        items: 1
    });

    // members slider
    $(".membersSlider").owlCarousel({
        items: 1,
        dots: true,
        margin: 50,
        center: true
    });

    // testimonials slider
    $(".testimonialsList").slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: "<button class=\"slick-prev\"></button>",
        nextArrow: "<button class=\"slick-next\"></button>",
        verticalSwiping: true
    });

    // resize event
    $(window).on("resize", function() {
        if ($(window).width() < 992) {
            $(".mobileMenu").append($(".header__nav"));
        } else {
            $(".header .container .row > div:nth-child(2)").append($(".header__nav"));
            $(".mobileMenu").removeClass("open");
        }
    });

    $(window).trigger("resize");

    // smooth transition to anchor
    $(".header .menu .menu__item a").click(function(event) {

        // prevent standart operation
        event.preventDefault();

        // get anchor and header height
        var href = $(this).attr("href");
        var headerHeight = $(".header").height();
        headerHeight = headerHeight + 92;

        // animate to id
        $("html, body").animate({scrollTop: $(href).offset().top - headerHeight}, 750);
    });

    // toggle mobile menu
    $(".menuToggle").click(function() {
        var el = $(this).data("toggle");
        $(el).toggleClass("open");
    });

    // var header = $(".header");
    // $(window).scroll(function() {
    //     console.log($(this).scrollTop());
    //     if ($(this).scrollTop() > 0 && !header.hasClass("fixed")) {
    //        header.addClass("fixed");
    //     } else if ($(this).scrollTop() <= 112 && header.hasClass("fixed")) {
    //        header.removeClass("fixed");
    //     }
    // });
});