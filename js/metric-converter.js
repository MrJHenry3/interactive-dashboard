
let convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', function(event) {
    event.preventDefault();


    let value1 = parseFloat(document.getElementById('value1').value);
    let units1 = document.getElementById('units1').value
    let units2 = document.getElementById('units2').value;
    let result = '';

    if (units1 === "in" && units2 === "cm") {
    result = value1 * 2.54;
    } 
    
    else if (units1 === "ft" && units2 === "cm") {
    result = value1 * 30.48;
    } 
    
    else if (units1 === "yd" && units2 === "m") {
    result = value1 * 0.91;
    } 
    
    else if (units1 === "mi" && units2 === "km") {
    result = value1 * 1.61;
    } 
    
    else if (units1 === "cm" && units2 === "in") {
    result = value1 * 0.39;
    } 
    
    else if (units1 === "cm" && units2 === "ft") {
    result = value1 * 0.0328;
    } 
    
    else if (units1 === "m" && units2 === "yd") {
    result = value1 * 1.09;
    } 
    
    else if (units1 === "km" && units2 === "mi") {
    result = value1 * 0.62;
    }

    document.getElementById('result').innerHTML = value1 + " " + units1 + " is " + result + " " + units2;
});