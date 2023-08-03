document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertTemperature);

    function convertTemperature() {
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
        let result;

        if (isNaN(inputValue)) {
            alert('Please enter a valid number.');
            return;
        }

        if (fromUnit === toUnit) {
            result = inputValue;
        } else if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                result = (inputValue * 9 / 5) + 32;
            } else if (toUnit === 'kelvin') {
                result = inputValue + 273.15;
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                result = (inputValue - 32) * 5 / 9;
            } else if (toUnit === 'kelvin') {
                result = (inputValue - 32) * 5 / 9 + 273.15;
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                result = inputValue - 273.15;
            } else if (toUnit === 'fahrenheit') {
                result = (inputValue - 273.15) * 9 / 5 + 32;
            }
        }

        document.getElementById('outputValue').value = result.toFixed(2);
    }
});
