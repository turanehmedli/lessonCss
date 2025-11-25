

//  // var num  = 5 
//  let username = null //= "turan"

// const { use } = require("react")

//  undefined

//  username ="Turan";


//  console.log(username )
//  const a = 5 
//  const b = 5

//  const age = 23

//  const students = ["Turan","Resul","Emin","Esmiralda","Emin","Aqsin"]
//  console.log(students)

//  //+ - * / < > <= >= toplama cixma vurma bolme
//  // and && or || not ! truyu false, falseyu true edir

 

//  const jop = {
//     title:"ACADEMY",
//     department:"IT",
//     salary: 6000,
//  }

//  console.log(jop)



//  function sum(a,b) {
//     console.log(a+b)
//  }

//  const findDif=(a,b)=>{
//     console.log(a-b)
//  }

//  findDif(30,20)

// sum(10,20 )

// const c = 10

// const message = "Hello Word"

// if(c>=10){
//     console.log(message)
// } else if(c < 8 && c>5){
//     console.log("c is between 8 and 5")
// } else{
//     console.log("c is smaller then 5")
// }

// switch (c){
//     case 10:
//         console.log(message)
//         break;
//     case 8:
//         console.log("c is 8")
//         break;
//     case 5:
//         console.log("c is 5")
//         break;
//     default: console.log("Undifine")
//         break;
    
// }

// const age = 19

// const name = "Turan"

// const isStudent = true

// const scores =[78,67,90]

// const person ={
//     height:1.80,
//     weight:70
// }

// console.log(age>=18, age && person || isStudent)

// const checkEligibility =(age, isStudent)=>{

    

//     if(age>=18 && person || isStudent){
//         console.log("You qualify")
//     } else {
//         console.log("You do not qualify.")
//     }
// }

// function averageScore (scores){
//     console.log((scores[0]+scores[1]+scores[2])/3)
// }

// averageScore(scores)

// checkEligibility(age, isStudent)




//---------------------------------------

// const message = "Hello "



// // console.log(message.length)

// // let text1 = "Hello";
// // let text2 = "World";
// // let text3 = text1.concat(" ", text2);

// // console.log(text3)

// // console.log(message.toUpperCase())
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);

// let text2 = "Apple, Banana, Kiwi";
// let part2 = text.slice(-12, -6);


// console.log(part,part2)





// 1. length
// Create a function that checks whether a username is between 5 and 15 characters.
// If not, return an error message.


function controlName(username){

    if(username.length >=5 && username.length <=15 ){
        console.log("You qualify")
    } else {
        console.log("You do not qualify.")
    }
}

controlName("Turannnn")

 

// 2. charAt()
// Given a string representing a product code (e.g., "A45BX"),
// extract and return the first letter that indicates the product category.

const charName = "A45BX"

console.log(charName.charAt(0))
 

// 3. concat()
// Write a function that takes a first name and last name and returns
// a properly formatted full name: "Last, First".

function fullName(firstName,lastName){
    const text = lastName.concat(" ", firstName);
    console.log(text)
}
fullName("Turan","Ehmedli")

// 4. Bracket notation [ ]
// Given a string representing a file path, return the last character.
// (Useful to determine if the path ends with "/")

function bracket(path) {
    const text = path[path.length - 1];
    console.log(text)
}

(bracket("/users/photos/"));
 

// 5. slice()
// Given a string containing an email (e.g., "user@example.com"),
// extract and return the domain name ("example.com") using slice().

const text = "user@example.com"
const part = text.slice(5)
console.log(part)
 

// 6. substring()
// From a log message: "ERROR: Disk not found",
// extract the part after "ERROR: " using substring().

const str = "ERROR: Disk not found"
const text1 = str.substring(0,5)
console.log(text1)
 

// 7. substr()
// Given a credit card number as a string,
// return only the last 4 digits using substr().

 let cart = "5555 5555 4444 3456"
 let num = cart.substring(15)
 console.log(num)

// 8. toUpperCase()
// Convert a country code (e.g., "us", "ca") to uppercase
// to match an API requirement.

 let contry = "us ca"
 let text2 = contry.toUpperCase()
console.log(text2)

// 9. toLowerCase()
// Convert user-entered text to lowercase before saving it
// to ensure case-insensitive comparison.

let input = "HBhncjdkjJJNJ"
let control = input.toLowerCase()
console.log(control)
 

// 10. trim()
// Clean a form input by removing any leading and trailing spaces
// before validation.

let test = "        hello         "
console.log(test.trim())
 

// 11. trimStart()
// Remove only the leading spaces from a multi-line input's first line.

 let test1 = "        hello         "
console.log(test.trimStart())

// 12. trimEnd()
// Remove trailing spaces from user input before checking if the line ends with punctuation.
let test2 = "        hello         "
console.log(test.trimEnd())
 

// 13. padStart()
// Format an invoice number so it always appears as 8 digits,
// e.g., "57" → "00000057".

function fNumber(number) {
    const test5 = number.toString()
}

fNumber("57")

// 14. padEnd()
// Format column output in a console table by padding each name to 20 characters.

 function eNumber(number) {
    const test5 = number.padEnd(5, "0");
    console.log(test5)
}

eNumber("57")

// 15. repeat()
// Generate a separator line for a report by repeating "-" 50 times.

let text3 = "--"
console.log(text3.repeat(20))

// 16. replace()
// Replace all spaces in a string with hyphens to generate a URL slug.
// Example: "My Page Title" → "My-Page-Title".

let my = "My Page Title"
let my1 =my.replace(/ /ig,"-")
console.log(my1)
 

// 17. split()
// Given a CSV string of numbers ("12,5,8,130"),
// convert it into an array of integers.

 let spl = "12,5,8,130"
 let spli = spl.split(",")
 console.log(spli)

// 18. includes()
// Check if a log entry includes the word "ERROR".
// If so, flag it as critical.

 function controlErro(ctrl){
    const inclu = ctrl.includes("ERROR")
    console.log(inclu)
 }

 controlErro("ERROR: Disk not found")

  controlErro("Hello Word")

// 19. startsWith()
// Verify that a URL starts with "https://" before processing it.

const star = "https://google.com"
const cont = star.startsWith("https://")

console.log(cont)
 

// 20. endsWith()
// Check if a filename ends with ".jpg" or ".png" before uploading.


function jpgpng(test5){
    const test6 = test5.endsWith(".jpg") || test5.endsWith(".png")
    console.log(test6)
}

jpgpng("bg.jpg")
jpgpng("img.png")
jpgpng("test.text")

//Davami JS 2dedi