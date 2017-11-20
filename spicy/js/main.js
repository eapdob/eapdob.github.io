$(function() {
    var __window = $(window);
    var __mobileIcon = $(".header__mobileMenuIcon");

    // window resizing
    __window.on("resize", function() {
        // change to mobile menu
        if (__window.width() < 992) {
            $(".header__nav").appendTo($(".header__mobileMenu"));
            $(".header__mobileMenu").removeClass("open");
        } else {
            $(".header__nav").appendTo($(".header__desktopMenu"));
        }
    });
    __window.trigger("resize");

    __mobileIcon.on("click", function() {
        var el = $(this).data("toggle");
        $(el).toggleClass("open");
    });
});

// video muting
// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('cookVideo', {
        videoId: 'CemSe2odl8w', // YouTube Video ID
        width: 560,               // Player width (in px)
        height: 315,              // Player height (in px)
        playerVars: {
            mute: 1,
            autoplay: 1,
            rel: 0,
            controls: 0,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 1         // Hide video controls when playing,
        }
    });
}