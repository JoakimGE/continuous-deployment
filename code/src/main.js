import { getSecondsLeftOfYear, getTimeString } from "./clock";
import './style.css'

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
let intervalId = 1;

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
}

render();
setInterval(render, 1000);
