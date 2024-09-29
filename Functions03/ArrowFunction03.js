

const user={
    username:"Chetan",
    id:21,
    welcome:function(){
        console.log(`${this.username}, welcome here`);   //if we remove this then it will give error username not define, this parent scope ka refence leke username print karwata hai
    }
}

user.welcome()
// console.log(user.welcome);
// This is works in object but not in function


// ************************************************************************

// Way 1 - to Write function

function chai(){
    let username="Noral function"
    console.log(this.username);    // undefined dega
}
chai()

// Way 2 - Variable mai function

const chai2 = function(){
    let username="var function"
    console.log(this.username);
}
chai2()


// Way 3 -Arroe Function

const chai3=()=>{
    let username="Arr function"
    console.log(this.username); 
}
chai3()


// ***************************************************************************

// Arrow Function  ---

const addtwo = (num1, num2) =>{
    return num1+num2;
}
console.log(addtwo(1,3));


// Implicite Function 
const multiply =(num1, num2)=>(num1*num2)
console.log(multiply(2,3));