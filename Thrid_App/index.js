let temperature = Number(prompt("Enter the temperature :"));
let condition = (temperature < 0)?  "Freezing cold" : (0 <= temperature && temperature <= 15) ? " cold" : (16 < temperature && temperature <= 25) ? " Mild" : (26 < temperature && temperature <= 35) ? "Warm" : (temperature > 35) ? "Hot" : "Invalid temperature";
console.log("condition: " + condition);
if (temperature < -5 || temperature > 40) {
    console.log("Dangerous temperature");
}else if (temperature >= -5 && temperature <= 40) {
    console.log("Safe temperature");
}
let advice = (temperature >= 16 && temperature <= 25) ? "Perfect temperature for outdoor activities." :(temperature > 30)? "Stay hydrated " : "Dress appropriately for the weather.";
console.log("advice: " + advice);
alert(`temperature:${temperature}
condition:${condition}
advice:${advice}`);
let result = document.getElementById("result");
result.innerHTML = `<h3>temperature: ${temperature}</h3>
<h3>condition: ${condition}</h3>
<h3>advice: ${advice}</h3>`;