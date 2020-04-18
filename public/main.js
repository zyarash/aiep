var end = new Date(Date.UTC(2020, 3, 19, 19, 55, 0));
console.log(end);

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

    if (timeleft < 1) {
        window.location.replace("https://nsd.presave.io/t/NSDBL103");
    }
    else {

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        var countdown = $("#countdown");
        countdown.text(
            `${pad(days)}days ${pad(hours)}hours ${pad(minutes)}minutes ${pad(seconds)}seconds`
        );
    }

}, 1000);


$(document).ready(function() {
    audioElement = $("#noise").get(0);
    audioElement.volume = 0;
    audioElement.play();
    audioElement.pause();
    audioElement.currentTime = 0;

    $("#prompt").fadeOut(3000);

    $("#no").click(function() {
        $("#prompt").fadeIn(3000);
        setTimeout(function() {
            $("#prompt").fadeOut(3000);
        }, 4500);
    });

    $("#yes").click(function() {
        $("#prompt").fadeIn(3000);
        $("#question-box").fadeOut(3000);
        audioElement = $("#noise").get(0);
        audioElement.play();
        audioElement.volume = 0;
        $("#noise").animate({volume: 1}, 2000);
        setTimeout(function() {
            $("#prompt").fadeOut(3000);
            $("#fade").fadeOut(3000);
        }, 5000);
    });
});
