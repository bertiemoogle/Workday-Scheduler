// Declare variables.

let todaysDate;
let displayDate;
let currentHour;
let appointmentRow;
let appHour;
let appText;

// Sets current date and time and sends the info to the HTML file to render to the page.

$(document).ready(function () {
    todaysDate = moment().format("MMMM Do YYYY");
    displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todaysDate;

    currentHour = moment().format("HH");
  
    // Compares the current time with the hourly appointment rows. Using CSS the slots change colour 
    // according to whether they are "present", "future" or "past".

    $(".row").each(function () {
      appointmentRow = $(this).attr("id").split("-")[1];
      if (currentHour == appointmentRow) {
        $(this).addClass("present");
      } else if (currentHour < appointmentRow) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > appointmentRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    // Saves contents of the appointment slots to local storage.

    $(".saveBtn").click(function (event) {
      event.preventDefault();

      appHour = $(this).parent().attr("id").split("-")[1];
      appText = $(this).siblings(".time-block").val();
      
      localStorage.setItem(appHour, appText);
    });
  
    // Retrieves values from local storage. Can be cleared using "localStorage.clear()" in the console.

    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });

