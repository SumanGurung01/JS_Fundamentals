/*

Arrow Function : ES6 feature that allow to define a function in a different ways than normal function

Normal() vs Arrow()

1. Normal() : are hoisted 
   Arrow() : are not hoisted

2. Normal() : this keyword reference to the object that it is a part of
   Arror() : this keyword reference the window object

3. Normal() : arguments are defined
   Arror() : arguments are not defined

4. Normal() : return is used to return anything
   Arrow() : does not require return keyword

*/


/* HOISTING */
Normal()  // => This is a normal Function
Arrow()   // => Error

function Normal(){
   console.log("This is normal Function")
}

const Arrow = () => {
   console.log("This is Arrow Function")
}



/* THIS */
const object = {
   Normal : function(){
      console.log(this)
   },
   Arrow : () => {
      console.log(this)
   }
}

object.Normal() // => {Normal: ƒ, Arrow: ƒ}
object.Arrow()  // => Window {window: Window, self: Window, document: document, name: '', location: Location, …}



/* ARGUMENTS */
function normalArgument(){
   console.log(arguments)
}

const arrowArgument = () => {
   console.log(arguments)
}


Normal(2,3,4,5,6,7)   // => Arguments(6) [2, 3, 4, 5, 6, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ] 
      
Arrow(2,3,4,5,6,7)   // =>  Uncaught ReferenceError: arguments is not defined



/* RETURN */
function normalReturn(){
   return 10+20
}

const arrowReturn = () => 10+20

console.log(normalReturn())   //30
console.log(arrowReturn())    //30


