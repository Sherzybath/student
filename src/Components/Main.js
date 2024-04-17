import React from "react";

const Main = ({ onToggle }) => {
  if (document.getElementById("main")) {
    const main = document.getElementById("main");
    if (onToggle) {
      main.style.marginLeft = "450px";
    } else {
      main.style.marginLeft = "0";
    }
  }

  function showNextWeek() {
    const labels = document.querySelectorAll(
      ".sun, .mon, .tue, .wed, .thu, .fri, .sat"
    );

    labels.forEach((label) => {
      const currentNumber = parseInt(label.textContent);
      label.textContent =
        currentNumber + 7 > 31 ? currentNumber + 7 - 31 : currentNumber + 7;
    });
  }
  function showPreviousWeek() {
    const labels = document.querySelectorAll(
      ".sun, .mon, .tue, .wed, .thu, .fri, .sat"
    );

    labels.forEach((label) => {
      const currentNumber = parseInt(label.textContent);
      label.textContent =
        currentNumber - 7 < 1 ? currentNumber - 7 + 31 : currentNumber - 7;
    });
  }
  return (
    <div className="Main" id="main">
      <div className="calendar">
        <div className="top">
          <h3 id="currentMonthYear"></h3>
          <div className="buttonContainer">
            <button
              className="topButtons"
              id="prevWeek"
              onClick={showPreviousWeek}
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="topButtons" id="nextWeek" onClick={showNextWeek}>
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        <div className="NONE days-1">SUN</div>
        <div className="NONE days-2">MON</div>
        <div className="NONE days-3">TUE</div>
        <div className="NONE days-4">WED</div>
        <div className="NONE days-5">THU</div>
        <div className="NONE days-6">FRI</div>
        <div className="NONE days-7">SAT</div>

        <label className="NONE sun dayN"></label>
        <label className="NONE mon dayN"></label>
        <label className="NONE tue dayN"></label>
        <label className="NONE wed dayN"></label>
        <label className="NONE thu dayN"></label>
        <label className="NONE fri dayN"></label>
        <label className="NONE sat dayN"></label>
        <div className="bars">
          <div className="bars2">
            <div className="bord bord1"></div>
            <div className="bord bord2"></div>
            <div className="bord bord3"></div>
            <div className="bord bord4"></div>
            <div className="bord bord5"></div>
            <div className="bord bord6"></div>
            <div className="bord bord7"></div>
            <div className="bord bord8"></div>
            <div className="bord bord9"></div>
            <div className="bord bord10"></div>
            <div className="bord bord11"></div>

            <div className="time All">All day</div>
            <div className="time AM12">08:30</div>
            <div className="time AM1">09:30</div>
            <div className="time AM2">10:40</div>
            <div className="time AM3">11:40</div>
            <div className="time AM4">BREAK</div>
            <div className="time AM5">13:30</div>
            <div className="time AM6">14:30</div>
            <div className="time AM7">15:40</div>
            <div className="time AM8">16:40</div>
            <div className="time AM9">17:35</div>

            <div className="SLOT slot1">
              <div className=""></div>
            </div>

            <div className="SLOT slot2">
              <div className=""></div>
            </div>
            <div className="SLOT slot3">
              <div className=""></div>
            </div>
            <div className="SLOT slot4">
              <div className=""></div>
            </div>
            <div className="SLOT slot5">
              <div className=""></div>
            </div>
            <div className="SLOT slot6">
              <div className=""></div>
            </div>
            <div className="SLOT slot7">
              <div className=""></div>
            </div>
            <div className="SLOT slot8">
              <div className=""></div>
            </div>
            <div className="SLOT slot9">
              <div className=""></div>
            </div>
            <div className="SLOT slot10">
              <div className=""></div>
            </div>
            <div className="SLOT slot11">
              <div className=""></div>
            </div>
            <div className="SLOT slot12">
              <div className=""></div>
            </div>
            <div className="SLOT slot13">
              <div className=""></div>
            </div>
            <div className="SLOT slot14">
              <div className=""></div>
            </div>
            <div className="SLOT slot15">
              <div className=""></div>
            </div>
            <div className="SLOT slot16">
              <div className=""></div>
            </div>
            <div className="SLOT slot17">
              <div className=""></div>
            </div>
            <div className="SLOT slot18">
              <div className=""></div>
            </div>
            <div className="SLOT slot19">
              <div className=""></div>
            </div>
            <div className="SLOT slot20">
              <div className=""></div>
            </div>
            <div className="SLOT slot21">
              <div className=""></div>
            </div>
            <div className="SLOT slot22">
              <div className=""></div>
            </div>
            <div className="SLOT slot23">
              <div className=""></div>
            </div>
            <div className="SLOT slot24">
              <div className=""></div>
            </div>
            <div className="SLOT slot25">
              <div className=""></div>
            </div>
            <div className="SLOT slot26">
              <div className=""></div>
            </div>
            <div className="SLOT slot27">
              <div className=""></div>
            </div>
            <div className="SLOT slot28">
              <div className=""></div>
            </div>
            <div className="SLOT slot29">
              <div className=""></div>
            </div>
            <div className="SLOT slot30">
              <div className=""></div>
            </div>
            <div className="SLOT slot31">
              <div className=""></div>
            </div>
            <div className="SLOT slot32">
              <div className=""></div>
            </div>
            <div className="SLOT slot33">
              <div className=""></div>
            </div>
            <div className="SLOT slot34">
              <div className=""></div>
            </div>
            <div className="SLOT slot35">
              <div className=""></div>
            </div>
            <div className="SLOT slot36">
              <div className=""></div>
            </div>
            <div className="SLOT slot37">
              <div className=""></div>
            </div>
            <div className="SLOT slot38">
              <div className=""></div>
            </div>
            <div className="SLOT slot39">
              <div className=""></div>
            </div>
            <div className="SLOT slot40">
              <div className=""></div>
            </div>
            <div className="SLOT break">
              <span>BREAK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
