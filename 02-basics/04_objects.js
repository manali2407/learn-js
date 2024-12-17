//const user = new Object();
const user = {}
user.id=125;
user.name = "Manali"
user.IsLogged = true
//console.log(user)

const regularUser = {
    email:"abc@gmail.com",
    fullname:{
        userFullName:{
            firstname:"abc"
        }
    }
}
//console.log(regularUser.fullname.userFullName.fullname);

obj1 = {1:"a",2:"c",3:"c"}
obj2 = {4:"d",5:"e",6:"f"}


//obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2}  // mostly used opertator
console.log(obj3);


const stringVal = "manali pathratkar"
const newVal = [...stringVal]
console.log(newVal);
console.log('***********************')
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('IsLogged'))



const course ={
    cousrseName : "javascript",
    coursePrice : 999,
    courseInstrctor:"Manali"
}

const {courseInstrctor: instructor} = course
console.log(instructor);
