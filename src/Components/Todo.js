const Todo = ({ onToggle }) => {
  if (document.querySelectorAll(".opa") && document.getElementById("TD")) {
    const opaElements = document.querySelectorAll(".opa");
    const TD = document.getElementById("TD");

    if (onToggle) {
      TD.style.width = "450px";
      opaElements.forEach((element) => {
        element.style.transitionDuration = "0.3s";
      });
      setTimeout(function () {
        opaElements.forEach((element) => {
          element.style.opacity = 1;
        });
      }, 600);
    } else {
      TD.style.width = "0";

      opaElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transitionDuration = "0.3s";
      });
    }
  }

  let currentExpandable = null;
  function toggleExpand(element) {
    if (currentExpandable !== null) {
      currentExpandable.classList.remove("expanded");
    }
    element.classList.add("expanded");
    currentExpandable = element;
  }

  function createExpandableDiv() {
    const container = document.getElementById("expandable-container");
    const newDiv = document.createElement("div");
    newDiv.className = "expandable";
    newDiv.onclick = function () {
      toggleExpand(this);
    };
    newDiv.innerHTML = `
  <input
      type="text"
      class="editableInput"
      value="Task"
      ${(oninput = { updateInputValue })}
  />
  <input
      type="text"
      class="editableInput2"
      value="Things to do"
      ${(oninput = { updateInputValue })}
  />

`;
    container.appendChild(newDiv);
  }

  function removeLastExpandableDiv() {
    const container = document.getElementById("expandable-container");
    const expandableDivs = container.getElementsByClassName("expandable");
    if (expandableDivs.length > 0) {
      const lastDiv = expandableDivs[expandableDivs.length - 1];
      container.removeChild(lastDiv);
      if (lastDiv === currentExpandable) {
        currentExpandable = null;
      }
    }
  }

  function updateInputValue(inputElement) {
    // Get the parent expandable div
    const parentDiv = inputElement.closest(".expandable");
    if (parentDiv) {
      const value = inputElement.value;
      // Update the input value within the parent expandable div
      const editableInput = parentDiv.querySelector(".editableInput");
      if (editableInput) {
        editableInput.value = value;
      }
    }
  }

  return (
    <div className="Todo" id="TD">
      <h1 id="sid" className="opa">
        Todo List
      </h1>
      <div className="button_minus opa" onClick={removeLastExpandableDiv}></div>
      <div className="button_plus opa" onClick={createExpandableDiv}></div>
      <div id="expandable-container" className="opa"></div>
    </div>
  );
};

export default Todo;
