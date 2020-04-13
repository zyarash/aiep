const end = new Date(2020, 3, 24, 0, 0, 0);


function pad(num) {
    var s = num+"";
    if (num < 10) {
        return "0" + s
    }
    return s;
}


setInterval(function() {

    var now = new Date().getTime();
    var timeleft = end - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var countdown = $("#countdown");
    countdown.text(
        `${pad(days)}days ${pad(hours)}hours ${pad(minutes)}minutes ${pad(seconds)}seconds`
    );

}, 1000);


$(document).ready(function() {
    $("#prompt").fadeOut(3000);

    $("#no").click(function() {
        $("#prompt").fadeIn(3000);
        $("#prompt").fadeOut(3000);
    });

    $("#yes").click(function() {
        $("#prompt").fadeOut(3000);
        $("#question-box").fadeOut(3000);
        $("#fade").fadeOut(3000);
        audioElement = $("#noise").get(0);
        audioElement.play();
    });


    $(".audio").click(function() {
        audioElement = $("#noise").get(0);
        if (audioElement.paused) {
            audioElement.play();
            $(".audio").css("background-image", "url(unmute.svg)");
        }
        else {
            audioElement.pause();
            $(".audio").css("background-image", "url(mute.svg)");
        }
    });
});
