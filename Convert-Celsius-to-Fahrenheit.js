// 8. Program to Convert Celsius to Fahrenheit

const celcToFahr = (n) => 
	`${n} Celsius is equal to ${(n * 9 / 5) + 32} Fahrenheit.`; 

const n = 80; 
console.log(celcToFahr(n));


// second method

function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  console.log(celsiusToFahrenheit(25)); 