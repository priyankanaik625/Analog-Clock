import { now } from './utility.js'

const getClockTemplate = id => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`

const initialiseClock = () => {
   return  document.querySelector(".clock-warpper").innerHTML = getClockTemplate(0)
}

initialiseClock();

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");


const startClock = () => {
    const time = now();
   
    //Another way of calulating the rotation degree
    // const secondDegrees = 270 + 6 * time.seconds; // 360/60 = 6 so, second-hand rotates 360 degrees in 60 seconds
    // const minuteDegrees = 270 + (60 * time.minutes + time.seconds) / 10;
    // const hourDegrees = 270 + (3600 * time.hours + 60 * time.minutes + time.seconds) / 120;

    const secondDegrees = 270 + time.seconds * 6; // 360/60 = 6 so, second-hand rotates 360 degrees in 60 seconds
    const minuteDegrees = 270 + time.minutes * 6;
    const hourDegrees =  270 + time.hours * 30 + time.minutes * (360/12/60); // hour moves 360/12 for 60 minutes within
    
    hourHand.style.transform = `rotate(${hourDegrees}deg) translate(50%)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg) translate(50%)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg) translate(30%)`;

    document.querySelector('h1').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}` 
};


setInterval(() => {
    startClock();
}, 1000);

 