now = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  document.getElementById(
    "today"
  ).innerHTML = `${hour} : ${minute} : ${second}`;
};
setInterval(now, 1000);

const ramadhan = new Date("May 6, 2019 03:00:00").getTime();
let fasting = setInterval(function() {
  let now = new Date().getTime();
  let distance = ramadhan - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = `0${hours}`.slice(-2);
  document.getElementById("minutes").innerHTML = `0${minutes}`.slice(-2);
  document.getElementById("seconds").innerHTML = `0${seconds}`.slice(-2);

  if (distance <= 0) {
    clearInterval(fasting);
    document.getElementById("countdown").innerHTML = "Happy Ramadhan";
  }
}, 1000);
