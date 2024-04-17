import Navy from "./Components/Navy";
import Main from "./Components/Main";
import Todo from "./Components/Todo";
import { useState, useEffect } from "react";

const App = () => {
  const start = () => {
    const currentDate = new Date();

    // Get the month and year
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    // Display the month and year in the h3 element
    const currentMonthYearElement = document.getElementById("currentMonthYear");
    currentMonthYearElement.textContent = `${month} ${year}`;
    const labels = document.querySelectorAll(
      ".sun, .mon, .tue, .wed, .thu, .fri, .sat"
    );
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());
    labels.forEach((label, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      const dayNumber = date.getDate();
      label.textContent =
        dayNumber <= 0
          ? 31 + dayNumber
          : dayNumber > 31
          ? dayNumber - 31
          : dayNumber;
    });
  };
  useEffect(() => {
    start();
  }, []);
  const [toggle, setToggle] = useState(false);
  const blah = () => {
    setToggle(!toggle);
    console.log("Is it happening");
  };
  return (
    <div className="App">
      <div className="parent">
        <Navy onToggle={blah} />
        <Todo onToggle={toggle} />
        <Main onToggle={toggle} />
      </div>
    </div>
  );
};

export default App;
