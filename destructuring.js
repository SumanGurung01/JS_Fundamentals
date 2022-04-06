// object destructuring
const obj = {
    firstName:"Sam",
    lastName:"Smith",
    age : 20,
    hobby : {
                sport : "football",
                music : "r&b"
            }
}

const { firstName , lastName , age , hobby : {sport , music} } = obj

console.log(firstName)   //Sam
console.log(lastName)    //Smith
console.log(age)         //20
console.log(sport)       //football
console.log(music)       //r&b



// Array destructuring

const array = [1,2,3,4,5]

const [a,b,...c] = array

console.log(a)  //1
console.log(b)  //2
console.log(c)  //[3,4,5]
