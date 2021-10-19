let countdownDate = new Date("Oct 19, 2021 7:45:00").getTime();

let now, days, hours, minutes, seconds;

let pastCountdown;

let timerLoop = setInterval(function() {
    now = new Date().getTime();

    if (countdownDate > now || pastCountdown == true) {
        const timeLeft = countdownDate - now;

        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    } else {
        countdownDate = new Date("Oct 20, 2021 7:45:00").getTime();

        const timeLeft = countdownDate - now;

        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        pastCountdown = true;

        document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    }

}, 1000);