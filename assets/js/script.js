// Sets current date and time.

$(document).ready(function () {
    let todaysDate = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todaysDate;

    let currentHour = moment().format("HH");
  
// Compares the current time with the hourly appointment rows.
    $(".row").each(function () {
      var appointmentRow = $(this).attr("id").split("-")[1];
      
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
  
    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
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

// let todaysDate;
// let displayDate;
// let hour;
// let row;

// $(document).ready(function () {
//     todaysDate = moment().format("MMMM Do YYYY");
//     displayDate = document.querySelector(".displayDate");
//     displayDate.innerHTML = todaysDate;

    

//     hour = moment().format("HH");

//     $(".row").each(function () {
//         row = $(this).attr("id").split("-")[1];
//     })

//     if (hour === row) {
//         $(this).addClass("present");
//     } else if (hour < row) {
//         $(this).removeClass("present");
//         $(this).addClass("future");
//     } else if (hour > row) {
//         $(this).removeClass("future");
//         $(this).addClass("past");
//     }


// $(".saveBtn").click(function (event) {
//     event.preventDefault();
//     let value = $(this).siblings(".time-block").val();
//     let time = $(this).parent().attr("id").split("-")[1];
//     localStorage.setItem(time, value); 
// })

// $("#hourNine .time-block").val(localStorage.getItem("9"));
// $("#hourTen .time-block").val(localStorage.getItem("10"));
// $("#hourEleven .time-block").val(localStorage.getItem("11"));
// $("#hourTwelve .time-block").val(localStorage.getItem("12"));
// $("#hourOnePm .time-block").val(localStorage.getItem("13"));
// $("#hourTwoPm .time-block").val(localStorage.getItem("14"));
// $("#hourThreePm .time-block").val(localStorage.getItem("15"));
// $("#hourFourPm .time-block").val(localStorage.getItem("16"));
// $("#hourFivePm .time-block").val(localStorage.getItem("17"));
// });