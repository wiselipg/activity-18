let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

onload = ()=> stopwatch = document.getElementById("timerClock")

// updates variables
function updateTimer() {
    milliseconds++
    if (milliseconds >= 100) {
        seconds++
        milliseconds = 0
        if (seconds >= 60) {
            minutes++
            seconds = 0
            if (minutes >= 60) {
                hours++
                minutes = 0
            }
        }
    }
    
 //stopwatch
timerClock.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`
}

// starts the timer
function start() {
    interval = setInterval(updateTimer, 10)
}

// stops the timer
function stop() {
    clearInterval(interval)
}

// resets the timer to 0
function reset() {
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    timerClock.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`
}