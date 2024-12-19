//Immediately Invoked Function Expressions (IIFE)

// function iife() {                                      // normal function
//     console.log(`database connected`);
//     }
// iife()

(function iife() {  
     // name iife                                   // iife function ()()
  console.log(`database connected`);
})();                                               // always mention ; at the en of iife function otherwise it will not
                                                    //   uneerstan where  to en the funtion

((name) => {
    //arrow function an parametieze iife
    console.log(`database connected two ${name}`);
})("manali");

