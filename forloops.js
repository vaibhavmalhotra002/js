let sum=0
let n = prompt("Enter the number:")
n=Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i+1);
    }
console.log("Sum of first " + n + " Natural numbers is: "+ sum)

/*
//fir in loop is used when we wanna print keys only
let marks={
  Harsh :0,
  dev:1,
  vaibhav: 3,
  aditya:7
}
for (let a in marks){
  console.log("Marks of "+  a + " are "+marks[a])
}

//for of loop prints values of an obj only if its iterable

for (let b of "Vaibhav"){
  console.log(b)
}
*/