let todaysDate;
let dateDisplay;
let hour;

$(document).ready(function () {
    todaysDate = moment().format("MMMM Do YYYY");
    dateDisplay = document.querySelector("#currentDay");
    dateDisplay.innerHTML = todaysDate;
    hour = moment().format("HH");
});