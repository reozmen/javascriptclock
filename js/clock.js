let user = prompt("Adınız nedir?");

let userName = document.getElementById("myName");

user.length == 0
  ? (userName.innerHTML = "Misafir")
  : (userName.innerHTML = user);

let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = days[today.getDay()];

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let info = document.querySelector("#myClock");
  info.innerHTML = `${h}:${m}:${s} ${d}`;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(showTime, 1000);

showTime();
