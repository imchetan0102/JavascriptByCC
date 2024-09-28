

// Singleton  - 

// Create using constructor 
    Object.create

// Object Literals

// -----------------------------------------



const mysymbol = Symbol("Key1")


const user={
    name:"chetan",
    age:23,
    [mysymbol]:"Mykey1",
    city:"Nagpur",
    email:"Chetan@google.com",
    Login:false,
    lastLogin:["Monday", "Friday"]
}

// Access Object
console.log(user);

console.log(user.email);
console.log(user["email"]);
console.log(user[mysymbol]);   //Symbol


// Change value in object

user.email="Khadse@google.com"
console.log(user);


// dont allow to change the object value

// Object.freeze(user)

user.email="Matt@google.com"
console.log(user);

// ---------- Function in Object -------------------------------

user.greeting = function(){
    console.log("Welcome  all");
}

console.log(user.greeting());



// ***********************************************************************************************************

console.log("=====================================================================");


const tinderUser2={}  //Non singletone object

const tinderUser=new Object()     //Singleton object

tinderUser.id=12
tinderUser.name="matt",
tinderUser.Login=true

console.log(tinderUser);



// --- Nested Objects------------------------------------------------

const regularUser = {
    email:"spome@gmail.com",
    fullname:{
        Fname:"Chetan",
        Lname:"Khadse",
        marks:{
            English:99,
            Hindi:85,
            Math:58
        }
    }
}

console.log(regularUser.fullname.marks);

console.log(regularUser.fullname);

console.log(regularUser);





//  Combine Objects

const obj1={
    1:"A",
    2:"B",
    3:"C"
}

const obj2={
    4:"D",
    5:"E",
    6:"F"
}

const  obj3={obj1, obj2}    // this will print object under object, It will not combine them

console.log(obj3);


const obj4  = Object.assign({}, obj1, obj2)
console.log(obj4);
