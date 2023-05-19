/* Scroll to Top */

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll-to-top");
  scroll.classList.toggle("active", window.scrollY > 120);
});

/* Temperature Converter */

document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.getElementById("celsius-input");
  const fahrenheitInput = document.getElementById("fahrenheit-input");
  const kelvinInput = document.getElementById("kelvin-input");

  // Convert Celsius to Fahrenheit and Kelvin
  celsiusInput.addEventListener("input", function () {
    const celsiusValue = parseFloat(celsiusInput.value);

    // Convert to Fahrenheit
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = isNaN(fahrenheitValue)
      ? ""
      : fahrenheitValue.toFixed(1);

    // Convert to Kelvin
    const kelvinValue = celsiusValue + 273.15;
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(1);
  });

  // Convert Fahrenheit to Celsius and Kelvin
  fahrenheitInput.addEventListener("input", function () {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    // Convert to Celsius
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(1);

    // Convert to Kelvin
    const kelvinValue = ((fahrenheitValue + 459.67) * 5) / 9;
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(1);
  });

  // Convert Kelvin to Celsius and Fahrenheit
  kelvinInput.addEventListener("input", function () {
    const kelvinValue = parseFloat(kelvinInput.value);

    // Convert to Celsius
    const celsiusValue = kelvinValue - 273.15;
    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(1);

    // Convert to Fahrenheit
    const fahrenheitValue = (kelvinValue * 9) / 5 - 459.67;
    fahrenheitInput.value = isNaN(fahrenheitValue)
      ? ""
      : fahrenheitValue.toFixed(1);
  });
});

/* Distance Converter */

document.addEventListener("DOMContentLoaded", function () {
  const mmInput = document.getElementById("mm-input");
  const cmInput = document.getElementById("cm-input");
  const mInput = document.getElementById("m-input");
  const kmInput = document.getElementById("km-input");
  const ftInput = document.getElementById("ft-input");
  const inInput = document.getElementById("in-input");
  const ydInput = document.getElementById("yd-input");
  const miInput = document.getElementById("mi-input");

  // Convert Millimeters to other units
  mmInput.addEventListener("input", function () {
    const mmValue = parseFloat(mmInput.value);

    cmInput.value = isNaN(mmValue) ? "" : (mmValue / 10).toFixed(2);
    mInput.value = isNaN(mmValue) ? "" : (mmValue / 1000).toFixed(3);
    kmInput.value = isNaN(mmValue) ? "" : (mmValue / 1000000).toFixed(6);
    ftInput.value = isNaN(mmValue) ? "" : (mmValue * 0.003281).toFixed(3);
    inInput.value = isNaN(mmValue) ? "" : (mmValue * 0.03937).toFixed(2);
    ydInput.value = isNaN(mmValue) ? "" : (mmValue * 0.001094).toFixed(3);
    miInput.value = isNaN(mmValue) ? "" : (mmValue * 0.00000062137).toFixed(10);
  });

  // Convert Centimeters to other units
  cmInput.addEventListener("input", function () {
    const cmValue = parseFloat(cmInput.value);

    mmInput.value = isNaN(cmValue) ? "" : (cmValue * 10).toFixed(1);
    mInput.value = isNaN(cmValue) ? "" : (cmValue / 100).toFixed(2);
    kmInput.value = isNaN(cmValue) ? "" : (cmValue / 100000).toFixed(5);
    ftInput.value = isNaN(cmValue) ? "" : (cmValue * 0.032808).toFixed(3);
    inInput.value = isNaN(cmValue) ? "" : (cmValue * 0.3937).toFixed(2);
    ydInput.value = isNaN(cmValue) ? "" : (cmValue * 0.010936).toFixed(3);
    miInput.value = isNaN(cmValue) ? "" : (cmValue * 0.0000062137).toFixed(10);
  });

  // Convert Meters to other units
  mInput.addEventListener("input", function () {
    const mValue = parseFloat(mInput.value);

    mmInput.value = isNaN(mValue) ? "" : (mValue * 1000).toFixed(1);
    cmInput.value = isNaN(mValue) ? "" : (mValue * 100).toFixed(1);
    kmInput.value = isNaN(mValue) ? "" : (mValue / 1000).toFixed(4);
    ftInput.value = isNaN(mValue) ? "" : (mValue * 3.281).toFixed(3);
    inInput.value = isNaN(mValue) ? "" : (mValue * 39.37).toFixed(2);
    ydInput.value = isNaN(mValue) ? "" : (mValue * 1.094).toFixed(3);
    miInput.value = isNaN(mValue) ? "" : (mValue * 0.00062137).toFixed(6);
  });

  // Convert Kilometers to other units
  kmInput.addEventListener("input", function () {
    const kmValue = parseFloat(kmInput.value);

    mmInput.value = isNaN(kmValue) ? "" : (kmValue * 1000000).toFixed(1);
    cmInput.value = isNaN(kmValue) ? "" : (kmValue * 100000).toFixed(1);
    mInput.value = isNaN(kmValue) ? "" : (kmValue * 1000).toFixed(1);
    ftInput.value = isNaN(kmValue) ? "" : (kmValue * 3280.84).toFixed(2);
    inInput.value = isNaN(kmValue) ? "" : (kmValue * 39370.08).toFixed(2);
    ydInput.value = isNaN(kmValue) ? "" : (kmValue * 1093.61).toFixed(2);
    miInput.value = isNaN(kmValue) ? "" : (kmValue * 0.62137).toFixed(2);
  });

  // Convert Feet to other units
  ftInput.addEventListener("input", function () {
    const ftValue = parseFloat(ftInput.value);

    mmInput.value = isNaN(ftValue) ? "" : (ftValue * 304.8).toFixed(1);
    cmInput.value = isNaN(ftValue) ? "" : (ftValue * 30.48).toFixed(1);
    mInput.value = isNaN(ftValue) ? "" : (ftValue * 0.3048).toFixed(2);
    kmInput.value = isNaN(ftValue) ? "" : (ftValue * 0.0003048).toFixed(6);
    inInput.value = isNaN(ftValue) ? "" : (ftValue * 12).toFixed(2);
    ydInput.value = isNaN(ftValue) ? "" : (ftValue * 0.33333).toFixed(5);
    miInput.value = isNaN(ftValue) ? "" : (ftValue * 0.00018939).toFixed(8);
  });

  // Convert Inches to other units
  inInput.addEventListener("input", function () {
    const inValue = parseFloat(inInput.value);

    mmInput.value = isNaN(inValue) ? "" : (inValue * 25.4).toFixed(1);
    cmInput.value = isNaN(inValue) ? "" : (inValue * 2.54).toFixed(1);
    mInput.value = isNaN(inValue) ? "" : (inValue * 0.0254).toFixed(3);
    kmInput.value = isNaN(inValue) ? "" : (inValue * 0.0000254).toFixed(7);
    ftInput.value = isNaN(inValue) ? "" : (inValue * 0.083333).toFixed(6);
    ydInput.value = isNaN(inValue) ? "" : (inValue * 0.027778).toFixed(6);
    miInput.value = isNaN(inValue) ? "" : (inValue * 0.000015783).toFixed(9);
  });

  // Convert Yards to other units
  ydInput.addEventListener('input', function () {
  const ydValue = parseFloat(ydInput.value);

  mmInput.value = isNaN(ydValue) ? '' : (ydValue * 914.4).toFixed(1);
  cmInput.value = isNaN(ydValue) ? '' : (ydValue * 91.44).toFixed(1);
  mInput.value = isNaN(ydValue) ? '' : (ydValue * 0.9144).toFixed(2); 
  kmInput.value = isNaN(ydValue) ? '' : (ydValue * 0.0009144).toFixed(6);
  ftInput.value = isNaN(ydValue) ? '' : (ydValue * 3).toFixed(2);
  inInput.value = isNaN(ydValue) ? '' : (ydValue * 36).toFixed(2);
  miInput.value = isNaN(ydValue) ? '' : (ydValue * 0.00056818).toFixed(8);
  }); 

  // Convert Miles to other units
  miInput.addEventListener('input', function () {
    const miValue = parseFloat(miInput.value);

    mmInput.value = isNaN(miValue) ? '' : (miValue * 1609344).toFixed(1);
    cmInput.value = isNaN(miValue) ? '' : (miValue * 160934.4).toFixed(1);
    mInput.value = isNaN(miValue) ? '' : (miValue * 1609.344).toFixed(2);
    kmInput.value = isNaN(miValue) ? '' : (miValue * 1.60934).toFixed(5);
    ftInput.value = isNaN(miValue) ? '' : (miValue * 5280).toFixed(2);
    inInput.value = isNaN(miValue) ? '' : (miValue * 63360).toFixed(2);
    ydInput.value = isNaN(miValue) ? '' : (miValue * 1760).toFixed(2);
  });
});

/* Dropdown Menu */

/* document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown');
  const thermalDataFile = '../project-1/table/table.html'; // Replace with the path to your thermal conductivity data HTML file

  // Fetch the data from the separate HTML file containing the thermal conductivity data
  fetch(thermalDataFile)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      
      // Get the table rows from the parsed HTML document
      const tableRows = htmlDoc.querySelectorAll('tr');
      
      // Iterate over the table rows starting from the second row
      for (let i = 1; i < tableRows.length; i++) {
        const tableData = tableRows[i].querySelectorAll('td');
        
        // Get the value from the second column (index 1)
        const text = tableData[1].textContent;
        
        // Create a new option element and add it to the dropdown
        const option = document.createElement('option');
        option.textContent = text;
        dropdown.appendChild(option);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});  */

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown');
  const resultField = document.getElementById('resultField');

  // Fetch the data from the HTML file containing the thermal conductivity table
  fetch('../project-1/table/table.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      
      // Get the table rows from the parsed HTML document
      const tableRows = htmlDoc.querySelectorAll('tr');
      
      // Create an array to store the values from the 2nd and 4th columns
      const dataRows = [];
      
      // Iterate over the table rows starting from the second row
      for (let i = 1; i < tableRows.length; i++) {
        const tableData = tableRows[i].querySelectorAll('td');
        
        // Get the value from the second column (index 1)
        const key = tableData[1].textContent;
        
        // Get the value from the fourth column (index 3)
        const value = tableData[3].textContent;
        
        // Create an object for the row data and add it to the array
        const rowData = {
          key: key,
          value: value
        };
        dataRows.push(rowData);
        
        // Create a new option element and add it to the dropdown
        const option = document.createElement('option');
        option.textContent = key;
        dropdown.appendChild(option);
      }

      // Event listener for the dropdown change event
      dropdown.addEventListener('change', function() {
        const selectedValue = dropdown.value;
        
        // Find the corresponding value in the dataRows array
        const selectedRow = dataRows.find(row => row.key === selectedValue);
        
        // Display the corresponding value in the result field
        if (selectedRow) {
          resultField.value = selectedRow.value;
        } else {
          resultField.value = '';
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

/* Heat Flux Calculator */

document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  const tempDifferenceInput = document.getElementById('temp-difference');
  const thermalConductivityInput = document.getElementById('thermal-conductivity');
  const distanceInput = document.getElementById('distance');
  const heatFluxOutput = document.getElementById('heat-flux');

  calculateBtn.addEventListener('click', function() {
    const tempDifference = parseFloat(tempDifferenceInput.value);
    const thermalConductivity = parseFloat(thermalConductivityInput.value);
    const distance = parseFloat(distanceInput.value);

    // Check if all inputs are valid numbers
    if (isNaN(tempDifference) || isNaN(thermalConductivity) || isNaN(distance)) {
      heatFluxOutput.value = 'Invalid input';
    } else {
      // Calculate the heat flux
      const heatFlux = (tempDifference * thermalConductivity) / distance;
      heatFluxOutput.value = heatFlux.toFixed(2) + ' W/m²';
    }
  });
});