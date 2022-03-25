/*

SHALLOW VS DEEP COPYING

1. Shallow Copy create a reference to the object
   Deep copy assign a seperate space in the memory
   
2. Shallow Copy reflects changes made to the copied object in the original object.
   Deep copy doesn’t reflect changes made to the new/copied object in the original object.
   
3. Primitive datatype(var, let, const, bool) are deep copied and reference datatype (array ,Objects) are 
   shallowed copied if assignment is used to copy (=) 

*/

const obj1 = {
    name:"Sam",
    surname:{
        middle:"King",
        last:"Smith"
    }
}

/*1. using assignment operator*/ 
const assignmentObj = obj1  // shallow copying

assignmentObj.name="Matt"   //changes will be made in obj1 as well

console.table(obj1)
console.table(assignmentObj)



/*2. using spread operator */
const spreadObject = {...obj1}  // deep copy but only non nested object. Nested obj will be shallow copied

spreadObject.surname.middle="Matt"   // will change the original object:obj1

console.table(obj1)
console.table(spreadObject)



/*3. using Object.assign() */
const assignObj = Object.assign({},obj1)   // deep copy but only non nested object. Nested obj will be shallow copied

assignObj.surname.middle="Matt"   // will change the original object:obj1

console.table(obj1)
console.table(assignObj)



/*4. using JSON methods */
const jsonObj = JSON.parse(JSON.stringify(obj1))  // complete deep copying

jsonObj.surname.middle="Matt"

console.table(obj1)
console.table(jsonObj)

