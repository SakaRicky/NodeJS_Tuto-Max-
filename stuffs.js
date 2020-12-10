var counter = function(arr){
    return `There are ${arr.length} elements in the array`;
}

var adder = function(a,b){
    return `The sum of ${a} and ${b} is ${a+b}`
}

console.log(counter([1,2,3,4,16,18]))
console.log(adder(19,18))

module.exports = {
    counter: counter,
    adder: adder
}