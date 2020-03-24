// ASSESSMENT 6: Coding Practical Questions


var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

//find way to access objects
//find way to capitalize first letter in desired object value ("name")
//return specific sentence with modified objects



const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

let FP =(toTitleCase(people[0].name))
let ZB =(toTitleCase(people[1].name))
let AD =(toTitleCase(people[2].name))
let job0 =(people[0].occupation)
let job1 =(people[1].occupation)
let job2 =(people[2].occupation)


const sentenceMaker = (x,y) => {
    return `${x} is a ${y}.`
}

console.log(sentenceMaker(FP,job0));  
console.log(sentenceMaker(AD, job2));
console.log (sentenceMaker(ZB, job1))




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
  

const myFunction = (array) => {
    let filteredArray = array.filter(item=>(parseInt(item) == item))
    let newArray = filteredArray.map(value=>(value%3))
    return newArray
}

console.log(myFunction(testingArray1))
console.log(myFunction(testingArray2))





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const myFunction = (array1,array2) => {
    let newArray = array1.concat(array2);
    return newArray.filter((a, b) => newArray.indexOf(a) === b)
}

console.log(myFunction(testingArray3,testingArray4))

