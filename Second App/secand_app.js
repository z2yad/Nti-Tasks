let name = prompt("Enter your name?");
console.log(name);

let age = prompt("Enter your age?");
console.log(age);

let years_of_experience = Number(prompt("How many years of experience do you have?"));
console.log(years_of_experience);

let Performance_Level = Number(prompt("Enter your performance level (0-10):"));

let baseSalary = 15000;

// Job Category
let jobCategory = "";
if (years_of_experience < 2) {
    jobCategory = "Junior";
} else if (years_of_experience < 5) {
    jobCategory = "Mid-Level";
} else if (years_of_experience < 10) {
    jobCategory = "Senior";
} else {
    jobCategory = "Expert";
}
console.log("Job Category:", jobCategory);

// Performance Text
let performanceText = "";
switch (Performance_Level) {
  case 9:
  case 10:
    performanceText = "Excellent";
    break;
  case 7:
  case 8:
    performanceText = "Good";
    break;
  case 5:
  case 6:
    performanceText = "Average";
    break;
  default:
    performanceText = "Needs Improvement";
}
console.log("Performance:", performanceText);

// Bonus & Final Salary
let bonus = 0;

if (years_of_experience >= 0 && years_of_experience <= 2) {
  bonus = baseSalary * 0.10;
} else if (years_of_experience >= 3 && years_of_experience <= 5) {
  bonus = baseSalary * 0.15;
} else if (years_of_experience > 5) {
  bonus = baseSalary * 0.20;
}

let finalSalary = baseSalary + bonus;
console.log("Your final salary is: " + finalSalary);

// Shift Time
let currentHour = new Date().getHours();
let shift = (currentHour >= 9 && currentHour < 18) ? "Day Shift" : "Night Shift";

// Alert
alert(`
Name: ${name}
Age: ${age}
Experience: ${years_of_experience}
Job Category: ${jobCategory}
Performance: ${performanceText}
Final Salary: ${finalSalary}
Shift: ${shift}
`);

// DOM Output
document.getElementById("result").innerHTML = `
  <h2>Employee Report</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Years of Experience:</strong> ${years_of_experience}</p>
  <p><strong>Job Category:</strong> ${jobCategory}</p>
  <p><strong>Performance Level:</strong> ${performanceText}</p>
  <p><strong>Final Salary:</strong> ${finalSalary}</p>
  <p><strong>Shift:</strong> ${shift}</p>
`;
