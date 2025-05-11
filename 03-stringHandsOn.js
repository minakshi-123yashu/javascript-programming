
console.log("========PRINT THE STRING========");
var message = " Hey you are doing Good, keep it up";
console.log(message);


console.log("=======LENGTH OF THE STRING=======")
var messagelength = message.length;
console.log(`The String length is : ${messagelength}`);

console.log("=======After Trim()=========");
var message = "     Hey you are doing Good, keep it up    ";
console.log(`After trim : ${message.length}`);
var trimResult = message.trim();

console.log("=======Before Trim()=========");
var message = "    Hey you are doing Good, keep it up    ";
console.log(`Before trim : ${message.length}`);
var trimResult = message.trim();
TotlremovedSpaces = message.length - trimResult.length;
console.log(`Total Remove spaces after trim : ${TotlremovedSpaces}`);

console.log("========first and last char()======");
var str = " Hey you are doing Good, keep it up";
console.log(`given string : ${str}`);
var strAfterTrim = str.trim();
 strAfterTrim.charAt(0);
console.log(`first char is : ${ strAfterTrim.charAt (0)} and last char is :${strAfterTrim.charAt(strAfterTrim.length-1)} `);

console.log("=====Total Word available in the String=======");
var str = " Hey you are doing Good, keep it up";
var words = str.split(" ");
console.log(words);
var strWords = str.split(" ");

console.log(" =====Print the index of word good=====");
var str = " Hey you are doing Good, keep it up";
var indexOfGood = str.indexOf("Good");
console.log(`Index of word Good is : ${indexOfGood} `);











