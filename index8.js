// for (let i=0 ;i<=1000 ;i+=13)
//     console.log(i);
// // ****************************************

//  function multiplication2 ( x , y){
// return x*y ;
//  }

//  console.log(multiplication2(4,5));

// //  ****************************************
 
// function trianglearea (height,base){
//     return (x*y/2);
// }
// console.log (trianglearea(12,6));

// *********************************************

// function isPandigital(num) {
//     let str = num.toString();         
//     let digits = "0123456789";          
//     for (let d of digits) {
//         if (!str.includes(d)) {
//             return false;               
//         }
//     }
//     return true;                        
// }


// console.log(isPandigital(98140723568910));  
// console.log(isPandigital(90864523148909));  

// *************************************************

// let drink = prompt("Enter your favorite drink: ");
//  drink.toLowerCase();

// switch (drink) {
//     case "banana":
//         console.log("The price of a banana drink is 20 dollars");
//         break;

//     case "mango":
//         console.log("The price of a mango drink is 25 dollars");
//         break;

//     case "orange":
//         console.log("The price of an orange drink is 15 dollars");
//         break;

//     case "apple":
//         console.log("The price of an apple drink is 18 dollars");
//         break;

//     case "coffee":
//         console.log("The price of a coffee drink is 10 dollars");
//         break;

//     case "tea":
//         console.log("The price of a tea drink is 5 dollars");
//         break;

//     default:
//         console.log("Sorry, this drink is not available.");
// }

//  function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
function tellFortune(jobTitle, location, partnerName, numberOfKids) {
    return "You will be a " + jobTitle + 
           " in " + location + 
           ", and married to " + partnerName + 
           " with " + numberOfKids + " kids.";
}


console.log(tellFortune("software engineer", "Jordan", "Alice", 3));

function calculateDogAge(puppyAge) {
    let dogYears = puppyAge * 7;
    return "Your doggie is " + dogYears + " years old in dog years!";
}

console.log(calculateDogAge(2));
