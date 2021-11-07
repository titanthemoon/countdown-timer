let countdownDate = new Date("Nov 7, 2021 16:13:00").getTime();

let now, days, hours, minutes, seconds;

let pastCountdown;

let timerLoop = setInterval(function() {
    now = new Date().getTime();
        const timeLeft = countdownDate - now;

        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

}, 1000);