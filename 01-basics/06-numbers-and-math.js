
// number and math

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)

// +++++++++++++++ math ----------- **********///////////////

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(5,3,8,2,0))
console.log(Math.max(5,3,8,2,0))

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20 
console.log(Math.floor(Math.random()*(max-min + 1))+min)