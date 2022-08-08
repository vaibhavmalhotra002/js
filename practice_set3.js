let marks={
    vaibhav:32,
    harry:25,
    shubham:26,
}
//Q1 using for loop
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Q2 using for in loop
for(key in marks){
    console.log("Marks of "+ key + " are "+ marks[key])
}
//Q3 keep entering number till correct number
let n =5
let i
while(i!=n){
    console.log("Try again")
    i=prompt("Enter a number")
    
}
console.log("You have entered correct number")

//q4 finfd mean uisng function
const mean =(a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(3,4,5,6))


