let now;
let date;
let hour;

$(document).ready(function () {
    now = moment().format("MMMM Do YYYY");
    date = document.querySelector("today");
    date.innerHTML = now;
    hour = moment().format("HH");
});