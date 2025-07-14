// step 1
let name = prompt("Enter your name:");
console.log(name);
let birth_year = prompt("Enter your birth year:");
let isStudent = confirm("Are you a student?");
//step 2
let current_year = new Date().getFullYear();
let age = current_year - birth_year;
console.log(age);
alert("Hello"+ " " + name  + " ,"+ "you are" + " "+ age +" "+"years old")
    alert("category is: "+" "+(age < 13 ? "Kid" : age < 18 ? "Teen" : age < 60 ? "Adult" : "Senior"))
  alert("is student: " + isStudent);


/*انا لحظة ان switch
 مش بتستجيب معايا علشان كدا انا استخدمة  
 if  & else if*/

/*switch(age){
    case age < 13:
        console.log("kid");
        break;
        case 13 <= age && age <= 17:
            console.log("teen");
            break;
            case 18 <= age && age <= 59:
                console.log("adult");
                break;
                case age >= 60:
                    console.log("senior");
                    break;
                    default:
                        console.log("Invalid age");
                        break;
}*/
// step 3
if (age < 13) {
  console.log("Kid");
} else if (age >= 13 && age <= 17) {
  console.log("Teen");
} else if (age >= 18 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior");
}

if(isStudent){ 
    console.log(" Don't forget to study hard " );
}
let finalMessage = `Hello ${name}, you are ${age} years old.
 category is: ${age < 13 ? "Kid" : age < 18 ? "Teen" : age < 60 ? "Adult" : "Senior"}. is student: ${isStudent}`
document.getElementById("output").innerHTML = finalMessage.replace(/\n/g, "<br>");