class Temperature {
    constructor(){
        this.celsius = 0
        this.fahrenheit = 32
    }

    // Getter for Celsius temperature
    get getCelsius(){
        return this.celsius
    }

    // Setter for Celsius temperature
    set setCelsius(value){
        if(typeof value === 'number'){
            this.celsius = value
            this.fahrenheit = (value * 9/5) + 32
        }
        else{
            console.log(`Invalid input. Please provide a number for Celsius temperature.`);
        }
    }

    // Getter for Fahrenheit temperature
    get getFahrenheit(){
        return this.fahrenheit
    }

    // Setter for Fahrenheit temperature
    set setFahrenheit(value){
        if(typeof value === 'number'){
            this.fahrenheit = value
            this.celsius = (value - 32) * 5/9
        }
        else{
            console.log(`Invalid input. Please provide a number for Fahrenheit temperature.`);
        }
    }

}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setCelsius = 25
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setFahrenheit = 68
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);