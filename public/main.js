const end = new Date(2020, 3, 24, 0, 0, 0);

setInterval(function() {

    var now = new Date().getTime();
    var timeleft = end - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var countdown = $("#countdown");
    countdown.text(
  	`${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`
    );

    $("#fade").fadeOut(3000)

}, 1000)


$(document).ready(function() {
    $("html").fadeIn();
});
