if(true){
    let a=10;
    const b=20
    var c =30;
}

// console.log(a);
// console.log(b);
console.log(c);   //only c can access outside of scope

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/


console.log("addone function: ",addone(5));  //we are accessing function before it declare

function addone(num){
    return num+1
}


console.log(addtwo(5));   // this gives cannot access, because it not decalre uptill now,

const addtwo=function(num2){
    return num2+2
}