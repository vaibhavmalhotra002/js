let num=[1,2,3,45,456]
let a = num.toString();
console.log(a ,typeof(a))

let b =num.join("+")
console.log(b)

num.pop()
console.log(num)

num.push(56)
console.log(num)

// let r =num.shift()  //removes an element from starting
// console.log(r,num)

let r =num.unshift(34)//removes an element from starting
console.log(r,num)