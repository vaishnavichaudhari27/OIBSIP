document.getElementById('convert-btn').addEventListener('click', function() {
    const inputVal = document.getElementById('temp-input').value.trim();
    const unit = document.getElementById('unit-select').value;
    const errorDiv = document.getElementById('error-message');
    
    const outC = document.getElementById('output-celsius');
    const outF = document.getElementById('output-fahrenheit');
    const outK = document.getElementById('output-kelvin');

    errorDiv.innerText = '';
    outC.innerText = '--';
    outF.innerText = '--';
    outK.innerText = '--';

    if (inputVal === '') {
        errorDiv.innerText = 'Please enter a value.';
        return;
    }

    const num = Number(inputVal);
    if (isNaN(num)) {
        errorDiv.innerText = 'Please enter a valid numeric value.';
        return;
    }

    let celsius;

    if (unit === 'C') {
        celsius = num;
    } else if (unit === 'F') {
        celsius = (num - 32) * (5 / 9);
    } else if (unit === 'K') {
        celsius = num - 273.15;
    }

    if (celsius < -273.15) {
        errorDiv.innerText = 'Temperature cannot be below Absolute Zero (-273.15°C).';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    outC.innerText = celsius.toFixed(2) + ' °C';
    outF.innerText = fahrenheit.toFixed(2) + ' °F';
    outK.innerText = kelvin.toFixed(2) + ' K';
});
