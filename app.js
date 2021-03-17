setTimeout(checkMinutes, 1000);
getExactTime();
function getExactTime() {
  let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday :)",
      "Saturday",
    ];

  let d = new Date();
  let pm = d.getHours() >= 12;
  let hour12 = d.getHours() % 12;
  let secs = new Date().getSeconds();

  if (!hour12) hour12 += 12;
  let minute = d.getMinutes();
  let now = `${hour12}:${minute} ${pm ? "pm" : "am"}`;

  let dateDOM = document.querySelector("#date");
  let hourDOM = document.querySelector("#hours");
  let minuteDOM = document.querySelector("#mins");
  let secondDOM = document.querySelector("#secs");
  let workoutStart = document.querySelector("#workout-start");
  let workoutEnd = document.querySelector("#workout-end");
  let minLeftDOM = document.querySelector("#time-left");

  dateDOM.innerHTML = `${day[d.getDay()]}<br>${
    month[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

  setInterval(() => {
    let secs = new Date().getSeconds();
    secondDOM.innerHTML = `${secs < 10 ? "0" : ""}${secs}`;
  }, 1000);

  setInterval(() => {
    let mins = new Date().getMinutes();
    minuteDOM.innerHTML = `${mins < 10 ? "0" : ""}${mins}`;
  }, 1000);

  setInterval(() => {
    hourDOM.innerHTML = `${hours < 10 ? "0" : ""}${hour12}`;
  }, 1000);
  minLeftDOM.innerHTML = 55 - minute + " minutes";
  workoutStart.innerHTML = `${hours < 10 ? "0" : ""}${hour12}:00 ${
    pm ? "pm" : "am"
  }`;
  workoutEnd.innerHTML = `${hours < 10 ? "0" : ""}${hour12}:55 ${
    pm ? "pm" : "am"
  }`;
}
function checkMinutes() {
  var now = new Date().getMinutes();
  if (now > checkMinutes.prevTime) {
    // do something

    let d = new Date();
    let pm = d.getHours() >= 12;
    let hour12 = d.getHours() % 12;
    if (!hour12) hour12 += 12;
    let minute = d.getMinutes();
    let now = `${hour12}:${minute} ${pm ? "pm" : "am"}`;
    let workoutStart = document.querySelector("#workout-start");
    let workoutEnd = document.querySelector("#workout-end");

    let minLeftDOM = document.querySelector("#time-left");

    console.log(minute);
    if (minute === 25) {
      for (var i = 0; i <= 1; i++) {
        responsiveVoice.speak(
          `Members you have 2 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
            pm ? "pm" : "am"
          }`
        );
      }
    } else if (minute === 50) {
      responsiveVoice.speak(
        `Members you have 5 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
          pm ? "pm" : "am"
        }`
      );
      responsiveVoice.speak(
        `Members you have 5 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
          pm ? "pm" : "am"
        }`
      );
    } else if (minute === 45) {
      responsiveVoice.speak(
        `Members you have 10 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
          pm ? "pm" : "am"
        }`
      );
    } else if (minute === 40) {
      responsiveVoice.speak(
        `Members you have 15 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
          pm ? "pm" : "am"
        }`
      );
    } else if (minute === 35) {
      responsiveVoice.speak(
        `Members you have 20 minutes left for your workout. Please be at the gate at ${hour12}:'55' ${
          pm ? "pm" : "am"
        }`
      );
    } else if (minute === 56) {
      responsiveVoice.speak(
        `Attention members Your workout is over Please head to the gate Thank You`
      );
    }

    console.log(`${hour12}:${minute} ${pm ? "pm" : "am"}`);
    if (minute >= 55 && minute <= 60) {
      document.querySelector(".info").style.visibility = "hidden";
      // document.getElementsByClassName('info').style.visibility = 'hidden';
    } else {
      document.querySelector(".info").style.visibility = "visible";
    }

    minLeftDOM.innerHTML = 55 - minute + " minutes";
    workoutStart.innerHTML = `${hours < 10 ? "0" : ""}${hour12}:00 ${
      pm ? "pm" : "am"
    }`;
    workoutEnd.innerHTML = `${hours < 10 ? "0" : ""}${hour12}:55 ${
      pm ? "pm" : "am"
    }`;

    // console.log('nextminute arrived');
  }
  checkMinutes.prevTime = now;
  setTimeout(checkMinutes, 1000);
}
