var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'd2ifxC6D0Uk',
        playerVars: { 'autoplay': 0 }
    });
}
var isPlaying = false;
function onPlayerReady(event) {
    event.target.playVideo();
}


window.addEventListener('scroll', function () {
    var video = document.getElementById("player");
    var posVideo = video.offsetTop;
    var alturaVideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (posVideo + alturaVideo < currentScroll + windowHeight &&
        posVideo > currentScroll
    ) {
        if (!isPlaying) {
            player.playVideo();
            isPlaying = true;
        }
    } else {
        if (isPlaying) {
            player.pauseVideo();
            isPlaying = false;

        }
    }

    // console.log("posVideo", posVideo);
    // console.log("currentScroll", currentScroll);
    // console.log("windowHeight", windowHeight);
});