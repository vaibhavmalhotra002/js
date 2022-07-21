//Create a variable of type string and try to add anumber to it
let a="vaibhav";
let b= 6;
console.log(a+b) //concatination takes place here

//use typeof operator to find the datatype of the string in above ques.
console.log(typeof (a+b))

//create a const object in js &can you make it hold a number later?

const a1 ={
    name:"vaibhav",
    section:10
}
//a1= 45; Will give a error */


//try to add a new key to the const obj in q3 were u able to do it
a1['name']="vaibhavi"
a1['class']=12
console.log(a1)
 //create a const dictionary
 const dict ={
    eggcorn : "a word or phrase that is a seemingly logical alteration of another word or phrase that sounds similar and has been misheard or misinterpreted, as 'old wise tale' for 'old wives' tale'.",
    erlking : "a spirit or personified natural power that works mischief, especially to children."
 }
 console.log(dict['eggcorn'])