      //7a
      function greet(name) {
        if (!name) {
          console.log("Hi there!");
        } else {
          console.log(`hello ${name}!`);
        }
      }
      greet("Stella");
      greet();
      greet("Wane");
      
      //7f
      function convertToFahrenheit(Celcius) {
        return (Celcius * 9) / 5 + 32;
      }

      function convertToCelcius(Fahrenheint) {
        return ((Fahrenheint - 32) * 5) / 9;
      }

      function convertTemperature(degrees, unit) {
        if (unit === "C") {
          const result = convertToFahrenheit(degrees);
          return `${result} F`;
        } else if (unit === "F") {
          const result = convertToCelcius(degrees);
          return `${result} C`;
        }
      }
      console.log(convertTemperature(25, "C"));
      console.log(convertTemperature(86, "F"));


      function convertLength(length, from, to) {
        if (from !== "km" && from !== "miles" && from !== "ft") {
          return `Invalid unit: ${from}`;
        } else if (to !== "km" && to !== "miles" && to !== "ft") {
          return `Invalid unit: ${to}`;
        }
        if (from === "km" && to === "miles") {
          return `${length / 1.6} ${to}`;
        } else if (from === "km" && to === "ft") {
          return `${length * 3281} ${to}`;
        } else if (from === "miles" && to === "km") {
          return `${length * 1.6} km`;
        } else if (from === "miles" && to === "ft") {
          return `${length * 5280} ${to}`;
        } else if (from === "ft" && to === "km") {
          return `${length / 5281} ${to}`;
        } else if (from === "ft" && to === "miles") {
          return `${length / 5280} ${to}`;
        } else if (from === to) {
          return `${length} ${to}`;
        }
      }
      console.log(convertLength(5, "miles", "km"));
      console.log(convertLength(5, "miles", "ft"));
      console.log(convertLength(5, "lbs", "lbs"));