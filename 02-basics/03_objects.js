// object literals

 const jsUser = {
    name:"Manali",
    age:30,
    location:"Mumbai",
    email:"manali@mail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

//  console.log(jsUser.email);
//  console.log(jsUser["email"]);

//  jsUser.email = "manali@mail2.com"
//  console.log(jsUser.email);
//  Object.freeze(jsUser);
//  jsUser.email = "manali@mail1.com"
//  console.log(jsUser.email);

jsUser.greeting = function(){
   console.log("hello world")
}

jsUser.greeting2 = function(){
   console.log(`Hello ${this.name} well come to js tutorial` )
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());