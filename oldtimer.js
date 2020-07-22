//
//60-sec countdown timer
//
var displayTimeLeft = $("#display-time-left");
var timer = 60;

function countdown() {
    if (timer <= 0) {
        clearInterval(timer = 0)
    }
    displayTimeLeft.text(timer);
    timer--;
};