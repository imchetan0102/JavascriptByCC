
const myarr = [0,2,4,6,5,5,8]
console.log(myarr);


const myarr2=new Array(1,2,5,4,87,6)
console.log(myarr2[3]);


myarr.push(6)
myarr.concat(myarr2)
myarr.pop()
myarr.unshift(11)    //add at starting
myarr.shift()        //remove from starting

console.log(myarr);



const marvel=["ironman", "Thor", "Captain america", "buck"]

const DC=["Superman", "WonderWomen", "Batman", "Flash"]

// marvel.push(DC)

let allheros = marvel.concat(DC)
console.log(allheros);


const all_heros=[...marvel, ...DC]   //More Prefered
console.log(all_heros);
