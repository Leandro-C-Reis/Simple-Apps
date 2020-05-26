
const time = document.getElementById("time");
const resetBtn = document.getElementById("reset");
const circle = document.querySelector("#dial");
const pointer = document.querySelector(".clock-timer");

let second = 0;
let hour = 0;
let minute = 0;
let count = 0;
let play = false;
let active = false;
let myTimer;
let angle = 0;

function start() {
  if (!play){
    play = true;
    active = true;
    document.querySelector(".start").innerHTML = "STOP";
    document.querySelector(".reset").classList.add("active");
    document.querySelector(".text").classList.add("active");
    document.querySelector(".text").style.opacity = "1";
    
    myTimer = setInterval(renderScreen, 50);
  }
  else{
    play = false;
    document.querySelector(".start").innerHTML = "START";

    clearInterval(myTimer);
  }
}

function renderScreen(){
  count += 50;

  if (count >= 1000){
    second++;
    count = 0;
  }
  
  if (second >= 60){
    minute++;
    second = 0;
  }

  if (minute >= 60){
    hour++;
    minute = 0;
  }

  if (hour == 24){
    clearInterval(myTimer);
  }

  time.innerHTML = `${
      hour >= 10 ? hour : `0${hour}`
        }:${minute >= 10 ? minute : `0${minute}`
          }:${second >= 10 ? second : `0${second}`}
  `;

  circleAnimation();
}

function reset() {
  if (active) {
    clearInterval(myTimer);
    count = 0;
    hour = 0;
    minute = 0;
    second = 0;
    active = false;
    angle = 0;
    active = false;
  
    time.innerHTML = `00:00:00`;
    document.querySelector(".start").innerHTML = "START";
  
    resetBtnAnimation();
    circleAnimation(true);
  }
}

function resetBtnAnimation() {
  resetBtn.classList.add('reset-animation');
  document.querySelector('.text').style.opacity = "0.4";
  
  setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  resetBtn.classList.remove('reset-animation');
  document.querySelector(".reset").classList.remove("active");
  document.querySelector(".text").classList.remove("active");
}

function circleAnimation(reset) {

  angle += 0.3;

  pointer.style.transform = `rotate(${angle}deg)`;
  time.style.transform = `rotate(-${angle}deg)`;
  circle.style.transform = `rotate(-${angle}deg)`;
  
  if (reset) {
    time.style.transform = "rotate(0deg)";
    pointer.style.transform = `rotate(0deg)`;
    circle.style.transform = `rotate(0deg)`;
  }
}