function thisK() {
   // console.log(this);
    const username ="Manali"
   // console.log(this.username); //this will give undefined
    
    
}

thisK();


//++++++++++++++ arrow function

const arrowFuntion = ()=>{
  //  console.log(this);      // this will give {}
    
}
arrowFuntion()

const  arrowFuntion1 = (num1, num2) => {
   return num1 + num2
}                                                     //when on next line we have to mention return keywor
console.log("with return", arrowFuntion1(5,8));

const arrowFuntion2 = (num1,num2)=> (num1 + num2) ;   // implicite return  //num1 + num2 this will also work
console.log("implicitewith return", arrowFuntion2(5,8));


const objectReturn = () => ({username:"Manali"})      // to return object we have to mention it in ()  i.e ({})
console.log(objectReturn());
