// number methot

// const num = 5

// const numToSt = num.toString()

// console.log(num)
// console.log( numToSt)

// let x =' 9.656'
// x.toFixed(0);
// x.toFixed(2)

// console.log(Number.parseFloat(x)) // numberleri yuvarlaqlastirmadi



// function evenOdd(num){
//     if(num % 2 === 0){
       // console.log("even num")
//         return "even num"
//     } else {
 // console.log("odd num")
//         return "odd num"
//     }
// }

// console.log(evenOdd(6))

// const every = (num) => num %2=== 0? "even num" : "odd num"

// console.log(every(6))

// let num = 9.9

// console.log(Math.floor(num))

// const student = ["Turan","Resul","Esmiralda","Emin","Aqshin"]

// console.log(student)

// student.push("Ilkin")

// console.log(student)

// student.pop()

// console.log(student)

// const frName = student.shift()

// console.log(frName)

// console.log(student)

// const fName = student.unshift()

// console.log(fName)

// console.log(student)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// const a = [...myBoys, ...myGirls]

// const work = {
//     title: "FullStack Dev",
//     salary:7000
// }

// const person = {
//     name: "Ilkin",
//     Surname: "Ibadov"
// }

// const worker = {
//     ...work,
//     ...person
// }

// console.log(worker)
// console.log(a)

//Search includes True False
// indexOf

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") +1;

// console.log(position)
// fruits.splice(indexOf, 1)

//for dongusus

// fruits.map((value,index)=>{
//     console.log(value,index)
    
// })

// for(let i = 0; i < 4; i++){
//     console.log("loop")
//     fruits.pop()
// }

// console.log(fruits)

// const num = [1,2,3,4,5]

// number2 =[]

// num.map(number =>{
//     console.log(number*2)
// })

// num.map(number =>{
//     number2.push(number*2)
// })

// console.log(number2)


// let cumle = ["apple","banana","orange","plum","peach","dog","cat"]





// 1 Create a function that takes a sentence and returns an array of words longer than 4 characters.
function liste(list){
    return list.split(" ").filter(list =>list.length>4)
}

console.log(liste("Bu gün JavaScript dərsini öyrənirik"))

// 2 Given an array of numbers, return a new array where each number is converted to a string with "USD" appended.
function ceviri(num){
    return num.map(num => num +" USD")
}

console.log(ceviri([5, 10, 20]))

//  3 Write a function that receives a string and returns the same string but with all vowels removed.
function removeS(str){
    return str.replace(/[aeiouAEIOUəöüıƏÖÜİ]/g, " ")
}
console.log(removeS("Hello Word"))

// 4 Given an array of strings, use map to return each string with the first letter capitalized.

function capitalizeFirst(arr) {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log(capitalizeFirst(["salam", "dünya", "javascript"]));

// 5 Filter an array of numbers to return only the numbers that are multiples of 3 or 5.

function filterMulti(arr){
    return arr.filter(num => num % 3 === 0 || num % 5 === 0)
 
}

console.log(filterMulti([1, 3, 4, 5, 9, 10, 14, 15, 18, 20, 21, 22, 23, 25, 30, 35, 37])
)
// 6 Take a full name string (e.g., "john doe") and return initials in uppercase ("J.D.").

function getName(fullName){
    return fullName.split(" ").map(fullName => fullName.charAt(0).toUpperCase()).join(".") + ".";
}

console.log(getName("john doe"))

// 7 Given an array of numbers, return the average value rounded to 2 decimal places.

function rounded(arr){
    const sum = arr.reduce((total,num) => total + num,0)
    const avg = sum / arr.length
    return avg.toFixed(2)
}

console.log(rounded([10,20,30]))

// 8 Write a function that returns the longest word inside a sentence.

function lengthWord(word){
    const words = word.split(" ")
    let longest = " "

    for(let words1 of words){
        if(words1.length > longest.length){
            longest = words1;
        }
    }

    return longest;
}

console.log(lengthWord("Hello, im learning JavaScript"))

// 9 Create a function that takes an array of mixed values (numbers + strings) and returns only the numbers.

function getNumbers(arr) {
  return arr.filter(item => typeof item === "number");
}

console.log(getNumbers([1, "hello", 5, "world", 10]));

// 10 Given a list of emails, filter out the ones that do not include "@gmail.com".

function filterGmail(emails) {
  return emails.filter(email => email.includes("@gmail.com"));
}

console.log(filterGmail([
  "user1@gmail.com",
  "user2@yahoo.com",
  "user3@gmail.com",
  "user4@hotmail.com"
]));


// 11 Write a function that takes an array of names and returns their lengths using map.

function lengthName(entNames){
    return entNames.map(EntName => EntName.length)
} 

console.log(lengthName(["Turan","Emin","Resul","Esmiralda","Aqshin"]))

// 12 Take a string and return true if it contains only digits, false otherwise.

function Digit(str){
    if(str.length === 0) return false
    return str.split(" ").every(char => !isNaN(char))
}

console.log(Digit("1234"))
console.log(Digit("123av4"))
console.log(Digit("adve1"))
console.log(Digit(""))

// 13 Given an array of numbers, return a new array where each number is squared, but only include results greater than 20.

function number(nums){
    return nums.map(num => num ** 2).filter(squa => squa>20)
}

console.log(number([2,3,4,5,6,7]))

// 14 Convert a comma-separated string "a,b,c,d" into an array, reverse it, and join back with "-" separator.

function reverses(strn){
    return strn.split(",").reverse().join("-")
}

console.log(reverses("a,b,c,d"))

// 15 Given an array of words, filter out any words shorter than 3 characters.


function fillShW(words){
    return words.filter(word => word.length >=3)
}

console.log(fillShW(["a", "an", "the", "ok", "hello","name","JavaScript"]))
// 16 Write a function that finds how many times a specific character appears in a string.

function countChar(str, char) {
  let count = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

console.log(countChar("banana", "a"));

// 17 Given an array of numbers, return the sum of all even numbers.

function sumEvenNum(arr){
    return arr.filter(num=>num%2===0).reduce((sum,num)=>sum+num,0)
}

console.log(sumEvenNum([1,2,3,4,5,6,7,8,9]))

// 18 Using map, convert an array of numbers into an array of objects: { value: number, isEven: boolean }

function maObject(arr){
    return arr.map(num => ({
        value :num,
        isEven: num%2 === 0
    }))
}

console.log(maObject([1,2,3,4]))

// 19 Given a string, return it reversed, but without using split, reverse, or join directly.

function noReverse(str){
    let norever= ""
    for(let i = str.length - 1;i >=0; i--) {
        norever +=str[i];
    }
    return norever
}

console.log("Hello Word")
console.log(noReverse("Hello Word"))
// 20 Filter an array of strings to keep only those that start with the letter "A" (case insensitive).

function fillA(words){
    return words.filter(word=>word[0].toUpperCase()==="A")
}

console.log(fillA(["Apple", "banana", "avocado", "Apricot", "pear"]))

// 21 Write a function that formats a phone number string into "(XXX) XXX-XXXX".

function phoneNum(number11){
    let str = number11.toString().split("").filter(char => !isNaN(char)).join("x")

    return `(${str.slice(0,3)}-${str.slice(3,6)}--${str.slice(6,10)})`
}

console.log(phoneNum("123-456-7890"));
// 22 Given an array of numbers, return a new array containing each number divided by 2 and rounded up.

function divi(arr){
    return arr.map(num  => Math.ceil(num / 2))
}

console.log(divi([1,2,3,4,5,6,7,8]))

// 23 Replace every space in a string with an underscore.

function replaceSpace(rep){
    return rep.replace(/ /g,"_")
}

console.log(replaceSpace("Hello Word"))
// 24 Given an array of objects with { name, age }, return only the names of users older than 18.
function adultName(users){
    return users
        .filter(user => user.age >= 18)
        .map(user => user.name)
}

const user = [
    { name: "Turan", age: 18 },
    { name: "Ali", age: 16 },
    { name: "Məhəmməd", age: 25 },
    { name: "Aylin", age: 16 }
];

console.log(adultName(user))
// 25 Take an array of numbers and return a formatted string like: "Min: X, Max: Y, Count: Z".

function format(arr){
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const count = arr.length

    return `Min: ${min}, Max: ${max}, Count: ${count}`
}

console.log(format([5,10,3,8,12]))


