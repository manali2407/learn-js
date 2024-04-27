function myName() {
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("A");
  console.log("L");
  console.log("I");
}

//myName()

//function with parameter
console.log("function with parameter");

//  function addTwoNum(number1, number2){
//     console.log(number1+number2);
//  }

//  addTwoNum(2,2)

function addTwoNum(number1, number2) {
  //   let result = number1 + number2
  //   return result;

  return number1 + number2;
}

const result = addTwoNum(3, 6);
// console.log("Result :", result)

// function isLoggedIn(username){
//   return `${username} is just logged in`
// }

// console.log(isLoggedIn('Manali'));

function isLoggedIn(username) {
  if (!username) {
    // if(username === undefined){
    console.log("Please enter username");
    return;
  }

  return `${username} is just logged in`;
}

//console.log(isLoggedIn());


function calculateCartPrice(...totalVal){
    return totalVal
}

//console.log(calculateCartPrice(100,200,500));

user = {
 username:"Manali",
 age : 32
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user)

function handeArray(getArray){
    return getArray[1]
}

console.log(handeArray([200,500,300,100]))