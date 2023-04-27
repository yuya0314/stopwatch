'use strict';
{
  const timer=document.getElementById('timer');
  const start=document.getElementById('start');
  const stop=document.getElementById('stop');
  const reset=document.getElementById('reset');

let settime;
let origin;
let stoptime=0;
stop.disabled=true;
reset.disabled=true;

function countdown () {
  const d = new Date(Date.now() - settime + stoptime );
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");
  const ms = Math.floor(d.getMilliseconds()/100)
  timer.textContent = `${m}:${s}:${ms}`;
   
}
start.addEventListener('click',()=>{
  settime= Date.now();
  countdown();
 origin= setInterval(countdown,10);
 start.disabled= true;
 stop.disabled=false;
 reset.disabled=true;
});
stop.addEventListener('click',()=>{
 clearTimeout(origin);
  stoptime += Date.now()-settime;
  start.disabled=false;
  stop.disabled=true;
  reset.disabled=false;
});
reset.addEventListener('click',()=>{
  timer.textContent = "00:00:0";
  stoptime= 0;
  stop.disabled=true;
  reset.disabled=true;
  
});
}
