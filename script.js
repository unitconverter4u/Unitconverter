// Length Converter Function
document.getElementById('length').addEventListener('input', convertLength);

function convertLength() {
    let value = parseFloat(document.getElementById('length').value);
    let unit = document.getElementById('length-units').value;
    let result = "";

    // If the input is not a valid number, do nothing
    if (isNaN(value)) return;

    // Perform conversions based on selected unit
    if (unit === "meters") {
        result = `Kilometers: ${(value / 1000).toFixed(4)} km<br>Centimeters: ${(value * 100).toFixed(2)} cm<br>Inches: ${(value * 39.3701).toFixed(2)} inches<br>Feet: ${(value * 3.28084).toFixed(2)} ft`;
    } else if (unit === "kilometers") {
        result = `Meters: ${(value * 1000).toFixed(2)} m<br>Centimeters: ${(value * 100000).toFixed(2)} cm<br>Inches: ${(value * 39370.1).toFixed(2)} inches<br>Feet: ${(value * 3280.84).toFixed(2)} ft`;
    } else if (unit === "centimeters") {
        result = `Meters: ${(value / 100).toFixed(2)} m<br>Kilometers: ${(value / 100000).toFixed(5)} km<br>Inches: ${(value * 0.393701).toFixed(2)} inches<br>Feet: ${(value * 0.0328084).toFixed(2)} ft`;
    } else if (unit === "inches") {
        result = `Meters: ${(value / 39.3701).toFixed(2)} m<br>Kilometers: ${(value / 39370.1).toFixed(5)} km<br>Centimeters: ${(value * 2.54).toFixed(2)} cm<br>Feet: ${(value / 12).toFixed(2)} ft`;
    } else if (unit === "feet") {
        result = `Meters: ${(value / 3.28084).toFixed(2)} m<br>Kilometers: ${(value / 3280.84).toFixed(5)} km<br>Centimeters: ${(value * 30.48).toFixed(2)} cm<br>Inches: ${(value * 12).toFixed(2)} inches`;
    }

    // Display the conversion result in the result container
    document.getElementById('length-result').innerHTML = result;
}

// Temperature Converter Function
document.getElementById('temperature').addEventListener('input', convertTemperature);

function convertTemperature() {
    let celsius = parseFloat(document.getElementById('temperature').value);

    // If the input is not a valid number, do nothing
    if (isNaN(celsius)) return;

    // Convert Celsius to Fahrenheit and Kelvin
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    // Display the conversion results
    document.getElementById('temp-result').innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>Kelvin: ${kelvin.toFixed(2)} K`;
}
