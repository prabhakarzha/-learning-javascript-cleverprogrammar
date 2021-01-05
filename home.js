//5/1/2021 i started javascript crash course by clever programmer

console.log("hello");
//alert("hii this is sonu");
//variable//
var b ="somethig";
console.log(b);

var sumNumber = 45;
console.log(sumNumber);
var age= prompt("what is your age?");

document.getElementById('container').innerHTML = age;

//Number in javascript//

var num1 = 10;
//increment num by 1
num1++;
//decrement  num by 1
num1--;
console.log(num1);

console.log(num1 / 6);

/*function in javascript


1. Create a function 
2. call a function
*/
function sum() {
    console.log("this is a function");
}
sum();

/*lets create a function that take in a name and says hello followed by your name for example 
name:"sonu kashyap"
Return:"Hello sonu kashyap"

The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value
*/
function greeting(yourName){
    var result ="hello" +" "+yourName;
  
    
    console.log(result);
}
    var name =prompt("what is your name?");



greeting(name);

// how do argument work in function?
// how do we add two number ina fun
function sumNumbers(num1,num2){
     var result =num1+num2;
console.log(result);
}
sumNumbers(10,10);










 


