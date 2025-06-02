// function by Nigol.

function startTime() {
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  // Toggle these for 12 hour or 24 hour time.
  const time_12h = true;
  var today = new Date();
  
  // Test
  // https://rswpthemes.com/how-to-get-current-time-in-12-hour-format-in-javascript/
  // const currentTime = today.toLocaleTimeString([], {
  //   hour: 'numeric', minute: 'numeric', hour12: true
  // });

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (time_12h) {
    let meridiem = hours >= 12 ? 'PM' : 'AM';
  
    // Adjusting hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    // Add a 0 to the minutes, so it shows up like 01,02.. instead of 1,2..
    if (minutes < 10) {
      minutes = '0'+minutes;
    }

    // Add a 0 to the seconds, so it shows up like 01,02.. instead of 1,2..
    if (seconds < 10) {
      seconds = '0'+seconds;
    }

      // var year = today.getFullYear();
    var monthIndex = today.getMonth();
    var month = monthNames[monthIndex];
    var day = today.getDate();  

    const currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    // document.getElementById("showRealTime").innerHTML = `${month} ${day} | ${h}:${m}:${s}`;
    document.getElementById("showRealTime").innerHTML = `${month} ${day} | ${currentTime}`;
    setTimeout(startTime, 500);


  } else {
    if (hours < 10) { 
      hours = '0'+hours; 
    } 
    document.getElementById("showRealTime").innerHTML = `${month} ${day} | ${hours}:${minutes}:${seconds}`;
  }
}

/*
* What was the point in this function?
function checkTime(i) {

  if (i < 10) {i = "0" + i};
  return i;
}
  */