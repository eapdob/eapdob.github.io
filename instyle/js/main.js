$(function() {
    var _window = $(window);

    // slider
    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    // menu click
    $(".menu-icon").on('click', function() {
        $(".mobile-menu").toggleClass("open");
    });

    // resizing
    _window.on('resize', function() {
        if (_window.width() >= 1200) {
            if ($(".mobile-menu").hasClass("open")) {
                $(".mobile-menu").removeClass("open");
            }
            $(".first").appendTo(".leftMenu");
            $(".second").insertBefore(".rightMenu__item:first-child");
        } else {
            $(".first").appendTo(".menu");
            $(".second").appendTo(".menu");
        }
    });

    // call resize event
    _window.trigger('resize');

    // catalog button
    $(".catalog__btn").click(function(e) {
        e.preventDefault();
        $(".hiddenItem").fadeIn(700).addClass("animated slideInDown");
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
    player = new YT.Player('ytPlayer', {
        videoId: '20TI3Ul9sQU', // YouTube Video ID
        width: 640,               // Player width (in px)
        height: 360,              // Player height (in px)
        playerVars: {
            rel: 0,
            controls: 0,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 1         // Hide video controls when playing,
        },
        events: {
            'onReady' : onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // variables
    var playButton = document.getElementById("playBtn");
    var pauseButton = document.getElementById("pauseBtn");
    var muteButton = document.getElementById("muteBtn");
    var unMuteButton = document.getElementById("unMuteBtn");
    playButton.style.display = "none";
    muteButton.style.display = "none";
    // events
    event.target.playVideo();
    event.target.setVolume(10);
    event.target.mute();
    // bind events
    // play btn
    playButton.addEventListener("click", function() {
        player.playVideo();
        pauseButton.style.display = "block";
        this.style.display = "none";
    });
    // stop btn
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
        playButton.style.display = "block";
        this.style.display = "none";
    });
    // mute btn
    muteButton.addEventListener("click", function() {
        player.mute();
        unMuteButton.style.display = "block";
        this.style.display = "none";
    });
    // unmute btn
    unMuteButton.addEventListener("click", function() {
        player.unMute();
        muteButton.style.display = "block";
        this.style.display = "none";
    });
}