import logo from "../images/logo.png";
import DP from "../images/New_Me.png";
import { useState } from "react";
function displayDay() {
  var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var currentTime = new Date();
  var currentDay = daysOfWeek[currentTime.getDay()];
  return currentDay;
}
function displayDate() {
  var currentDate = new Date();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  var formattedDate = day;
  return formattedDate;
}
const Navy = ({ onToggle }) => {
  function Theme() {
    document.body.classList.toggle("dark-theme");
  }
  const [currentDate, setCurrentDate] = useState(displayDate());
  const [currentDay, setCurrentDay] = useState(displayDay());

  return (
    <div className="navy">
      <div className="logo" id="sid" onClick={onToggle}>
        <img className="GolGol" src={logo} />
      </div>
      <div className="log1">
        <img className="DP" src={DP} />
      </div>
      <div className="log2">
        <label className="DAY" id="current-day">
          {currentDay}
        </label>
        <label className="NO">{currentDate}</label>
      </div>

      <div className="log3" onClick={Theme}>
        <i className="bx bx-sun bx-md"></i>
      </div>
      <div className="log4">
        <i className="bx bx-log-out bx-md"></i>
      </div>
      <div className="bor1"></div>
      <div className="bor2"></div>
      <div className="bor3"></div>
      <div className="ril">
        <label className="rills">RILLI</label>
      </div>
    </div>
  );
};

export default Navy;
