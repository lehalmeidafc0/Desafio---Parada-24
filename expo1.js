function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    
    if (celsius === "") {
        alert("Por favor, insira uma temperatura em Celsius.");
        return;
    }

    celsius = parseFloat(celsius);

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById('fahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvin').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
