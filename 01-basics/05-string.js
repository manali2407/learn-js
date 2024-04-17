
//string
const fname = "Manali"
const repoCount = 22
console.log(fname + repoCount + " values");
console.log(`hello my name is ${fname} my repoCount is ${repoCount}`);

const gameName = new String( "ManaliMario")
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newGame = gameName.substring(0, 4)
console.log(newGame);


const newGame1 = gameName.slice(2, 5)
console.log(newGame1);

