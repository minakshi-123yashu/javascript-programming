console.log("======== Function with no arguments and no return value ============");
function dayOfTheWeek(){
    console.log("Today is Thursday..."); 
}
dayOfTheWeek();
dayOfTheWeek();
dayOfTheWeek();

console.log("======== Function with arguments and no return value ============");

function addition(n1, n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
addition(60, 70, 40);
addition(10.40, 99.567, 34.678);


console.log("======== Function with arguments and return value ============");
function square(num){
    var result = num * num;
    return result;
}
var squareValue =  square(15);
console.log("Square is: ", squareValue);

var returnValue = square(11);
console.log("Square is: ", returnValue);


console.log("========1. Function with no argumtents and no return value======");
function favSubject() {
    console.log(" My favourate subject is : ANATOMY");
}
favSubject();


console.log("=======2.  Function with no argument and no return value======");
function favName() {
    console.log("My Favourate name is : SAANVI & YASHASVI...");
}
favName();

console.log("===========3.Function with no argument & no return value======");
function myDetail(){
    console.log("My name is MINAKSHI. My daughter name is SAANVI & YASHASVI.");
    console.log("I lives in NAGPUR...");
    console.log("MY Husband name is SARANG.")
}
myDetail();


console.log("======== Function with arguments and no return value ============");

function addThreeValues(n1, n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
console.log("Addition of 3 values....");
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
console.log("Hello good morning");


function bankDetails( accountName, acountNum, location, pinCode);{
var result = accountName, acountNum, location, pinCode;
console.log(result);
}


