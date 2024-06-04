"use strict";

{
  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const display = document.getElementById("countArea");

  const areaKm = 3089;
  let count = 2950;

  const displayArea = async () => {
    if (count < areaKm) {
      display.textContent = ++count;
      await wait(25);
      displayArea();
    }
  };

  displayArea();
}
