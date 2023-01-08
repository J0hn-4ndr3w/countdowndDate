
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthDay = '19 August 2023';

function countDown() {
  const drewBirthDate = new Date(birthDay);
  const currentDate = new Date();

  const totalSeconds = (drewBirthDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

}


countDown();

setInterval(countDown, 1000);