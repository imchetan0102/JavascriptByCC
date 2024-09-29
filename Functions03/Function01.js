
// Function
function Myname(){
    console.log("Chetan khadse");
    console.log("Chetan khadse");
    console.log("Chetan khadse");
    console.log("Chetan khadse");
    console.log("Chetan khadse");
    
}

// execute
Myname()


// Addition Function  ---------------------------------------------------------------

function Addition1(num1, num2){
    console.log(num1+num2);
}
// Addition(4,7);
const result1 = Addition1(4,2)
console.log("Result1 :",result1);     //it will result :undefined

// --------------------------------------------------------------------

function Addition2(num3, num4){
    // let result2 = num3+num4
    return num3 + num4
}
const result2 = Addition2(9,8)
console.log("Result2 :",result2);   //it will return

console.log(Addition2(1,1));


// ---------------------------------------------------------------------------------



function loginmsg(username){
    // if(username == undefined){
    if(!username){
        console.log("enter yourname ");
        return
    }
    return `${username} has log in.`
}

console.log(loginmsg("Chetan"))   //if chetan not pass it will say undfined





// =================================================================================================

// We dont know ki parameter kitne aa saqte hai.
// eg .  ek ecommerce mai pata nhi rehta ki kitne saman apn add kar sakte hai.



function calculateCartPrice(...item){
    return item
}
console.log(calculateCartPrice(200,400,800,620));    // return array[200,400,800,620], jo bhi value dalenge wo iss aray mai jayegi




// access object in functions

const Employee={
    id:12,
    name:"Chetan"
}
function EMP(emps){
    return emps
}
console.log(EMP(Employee));
