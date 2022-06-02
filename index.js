let today = new Date(); 
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day = dayNames[today.getDay()];

document.querySelector(".day").innerHTML = `(Day: ${day})`;

document.querySelector(`.${day}`).style.backgroundColor = "#C0EEFF";

document.querySelector(".break-time").style.backgroundColor = "#fff";