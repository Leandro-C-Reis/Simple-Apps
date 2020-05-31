
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let h, m, s;

function clock()
{
  h =  new Date().getHours();
  m =  new Date().getMinutes();
  s =  new Date().getSeconds();

  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(clock, 1000);
