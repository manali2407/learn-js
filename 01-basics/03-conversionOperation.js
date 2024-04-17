
//conversionOperation
let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = "score"

console.table([score,score1,score2,score3,score4,score5,]);

let Numberscore  = Number(score)
let Numberscore1 = Number(score1)
let Numberscore2 = Number(score2)
let Numberscore3 = Number(score3)
let Numberscore4 = Number(score4)
let Numberscore5 = Number(score5)
console.table([Numberscore,Numberscore1,Numberscore2,Numberscore3,Numberscore4,Numberscore5,]);
console.table([typeof(Numberscore), typeof(Numberscore1), typeof(Numberscore2),typeof(Numberscore3),typeof(Numberscore4),typeof(Numberscore5)]);

let logginIn = 252  // 1 , 0, "mas" , 252, 

let boolVaule  = Boolean(logginIn)
console.log(boolVaule);
console.log(typeof boolVaule);


let stringName = 33  // 1 , 0, "mas" , 252, 

let stringValue  = String(stringName)
console.log(stringValue);
console.log(typeof stringValue);