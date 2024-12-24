let year = 2024; 
let month = 12;
let date = 24;
let birthYear = +prompt("Enter Your Birth Year  (Current Year is: 2024)");
let birthMonth = +prompt("Enter Your Birth Month  (Current Month is: 12)");
let birthDate = +prompt("Enter Your Birth Date  (Current Date is: 24)")

let sum = year - birthYear;
let sum1 = month - birthMonth;
let sum2 = date - birthDate;


document.write(`You  Are ` ,sum + " Years " + sum1 + " months  And " + sum2 + " days  old..." )
