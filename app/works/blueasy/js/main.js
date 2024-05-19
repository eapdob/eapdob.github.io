$(function() {
    var _window = $(window);

    // smooth scroll from menu
    $(".header .menu__item a").click(function(e) {
        // get id
        var href = $(this).attr("href");

        // animate to id
        $("html, body").animate({scrollTop: $(href).offset().top}, 750);
        e.preventDefault();

        // hide mobile menu
        if ($(".mobileMenu").hasClass("open")) {
            $(".mobileMenu").removeClass("open");
        }
    });

    // resize on small devices
    _window.on("resize", function() {
        if (_window.width() < 992) {
            $(".mobileMenu").append($(".header__nav"));
        } else {
            $(".header .container .row > div:nth-child(2)").append($(".header__nav"));
            $(".mobileMenu").removeClass(".open");
        }
    });
    _window.trigger("resize");

    // toggle menu
    $("[data-toggle]").click(function() {
       var toggleElement = $(this).data("toggle");
       $(toggleElement).toggleClass("open");
    });

    // form validation
    $("input, select, textarea").jqBootstrapValidation();
});