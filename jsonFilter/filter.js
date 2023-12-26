const fs = require("fs");

fs.readFile("jsonFilter/Forecast.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let forecasts = JSON.parse(data);
  let uniqueForecasts = [];

  forecasts.forEach((forecast) => {
    if (!uniqueForecasts.some((item) => item.nmun === forecast.nmun)) {
      uniqueForecasts.push(forecast);
    }
  });

  fs.writeFile(
    "jsonFilter/Forecast.json",
    JSON.stringify(uniqueForecasts, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been updated with unique forecasts.");
    }
  );
});
