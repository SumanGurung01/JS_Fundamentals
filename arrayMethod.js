// map vs forEach
/* 
map return a new array but forEach doesnt
*/

const array = [2,3,5,7,9]

const mapArray = array.map(item => {
    return item+2
})

const forEachArray = array.forEach(item => {
    return item+3
})

console.log(mapArray)   //[4,5,7,9,11]
console.log(forEachArray)   //undefined

array.forEach(item => {
    console.log(item)   // 2 3 5 7 9
})



/*
map vs filter

map return an array of same length as of the mapped array 
but filter returns array of length same or less than the filtered array.

*/

const filterArray = array.filter(item => {
    if(item>5){
        return item
    }
})

const mapFilterArray = array.map(item => {
    if(item>5){
        return item
    }
})

console.log(filterArray)   // [7,9]
console.log(mapFilterArray)   //[undefined ,undefined ,undefined ,7 ,9 ]


// reduce returns a single value
const sum = array.reduce((acc,item)=> {
    acc = acc+item
    return acc
})

console.log(sum)


