//primative data type

// 7 type number, string, boolean, null, undefined, symbol,bigInt

const score = 100
const isLoggedIn = true
const outsideTemp = null
let userName;
const id = Symbol('123');
const anotherId = Symbol('123');
const bigIntNumber = 98585256852558
// refernce type or non primative


//object , array, functions
  
   dev = ["Brahma", "Vishnu", "Mahesh"];

   let devi=[{
      name:"Saraswati",
      husband:"Brahma"
   },
   {
    name:"Laxmi",
    husband:"Vishnu"
 },
 {
    name:"Parvati",
    husband:"Mahesh"
 },

]


const myFunction = function(){
    console.log("hello world");
}


// heap and stack

userOne = {
    name:"Manali",
    age:22
}
console.log(userOne);

userTwo = userOne
console.log(userTwo);

 userTwo.name = "manu"
console.log(userTwo);