function convertTemperature(temperature, unit) {
    if (unit === "C") {
        return (temperature * 9 / 5) + 32;
    }

    if (unit === "F") {
        return (temperature - 32) * 5 / 9;
    }

    return null;
}

const temperature = Number(prompt("Geef de temperatuur in:"));
const unitInput = prompt("Is dit in Celsius (C) of Fahrenheit (F)?");
const unit = unitInput === null ? "" : unitInput.toUpperCase();
const convertedTemperature = convertTemperature(temperature, unit);

if (convertedTemperature === null || Number.isNaN(temperature)) {
    console.log("Fout: geef een geldige temperatuur en eenheid in.");
} else if (unit === "C") {
    console.log(`${temperature}°C = ${convertedTemperature.toFixed(2)}°F`);
} else {
    console.log(`${temperature}°F = ${convertedTemperature.toFixed(2)}°C`);
}
