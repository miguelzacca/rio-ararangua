"use strict";

{
  const handleData = (day, temp) => {
    document.getElementById("temp").textContent = temp;

    if (day) {
      const color = "#d3b924ce";
      document.getElementById("day").style.backgroundColor = color;
    }
  };

  fetch(
    "https://api.weatherapi.com/v1/current.json?key=2fc2b9f16f0b4e619d132633240506&q=Ararangua&aqi=no"
  )
    .then((res) =>
      res
        .json()
        .then((data) => {
          const info = data.current;
          handleData(info.is_day, info.temp_c);
        })
        .catch((err) => console.error(err))
    )
    .catch((err) => console.error(err));
}
