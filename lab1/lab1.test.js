// Julia Nelson 
// CS 546 - A
// Lab 1 - TEST CASES
// "I pledge my honor that I have abided by the Stevens Honor System."


const lab1 = require("./lab1");

///////////// My Test Examples Q1
let Result = "\nExpected: \n{ '2': true, '3': true, '171': false, '1867': true } \nReturned: ";
console.log(Result);
console.log(lab1.questionOne([2, 3, 1867, 171, 3])); 

Result = "\nExpected: \n{ '11':true, '27': false, '10000': false }  \nReturned: ";
console.log(Result);  
console.log(lab1.questionOne([11, 27, 10000])); 


Result = "\nExpected: \n{ '0': false, '1': false, '2': true }  \nReturned: ";
console.log(Result);
console.log(lab1.questionOne([0, 1, 2])); 


Result = "\nExpected: \n{ '3': true, '8': false } \nReturned: ";
console.log(Result);
console.log(lab1.questionOne([3, 8])); 


Result = "\nExpected: \n{ '7': true, '12': false, '83': true, '113': true } \nReturned: ";
console.log(Result);
console.log(lab1.questionOne([7, 12, 83, 113])); 
 

Result = "\nExpected: \n{} \nReturned: ";
console.log(Result);
console.log(lab1.questionOne([])); 


Result = "\nExpected: \n{} \nReturned: ";
console.log(Result);
console.log(lab1.questionOne()); 



///////////// My Test Examples Q2
Result = "\nExpected: \n802268.22 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([3,10,11])); 

Result = "\nExpected: \n3788.00 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([3, 3, 3])); 

Result = "\nExpected: \n609.34 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([2,3])); 

Result = "\nExpected: \n45324382407509.80 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([521, 100, 93])); 

Result = "\nExpected: \n6497350.61 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([1, 13, 19])); 

Result = "\nExpected: \n0 \nReturned: ";
console.log(Result);
console.log(lab1.questionTwo([])); 





///////////// GIVEN Test Examples Q3
Result = "\nExpected: \n{\n consonants: 4,\n vowels: 5,\n numbers: 0,\n spaces: 2,\n punctuation: 1,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("do it again!")); 

Result = "\nExpected: \n{\n consonants: 23,\n vowels: 17,\n numbers: 0,\n spaces: 10,\n punctuation: 4,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("If you don't eat yer meat, you can't have any pudding!")); 

Result = "\nExpected: \n{\n consonants: 14,\n vowels: 9,\n numbers: 0,\n spaces: 5,\n punctuation: 3,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("How can you have any pudding..."));

Result = "\nExpected: \n{\n consonants: 10,\n vowels: 9,\n numbers: 0,\n spaces: 5,\n punctuation: 2,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("if you don't eat yer meat?"));

Result = "\nExpected: \n{\n consonants: 17,\n vowels: 13,\n numbers: 0,\n spaces: 5,\n punctuation: 4,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result); 
console.log(lab1.questionThree("Hey! Teachers! Leave those kids alone!!" )); 

Result = "\nExpected: \n{\n consonants: 0,\n vowels: 0,\n numbers: 3,\n spaces: 1,\n punctuation: 0,\n specialCharacters: 1\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("111 &")); 

Result = "\nExpected: \n{\n consonants: 0,\n vowels: 0,\n numbers: 0,\n spaces: 0,\n punctuation: 0,\n specialCharacters: 0\n} \nReturned: ";
console.log(Result);
console.log(lab1.questionThree("")); 




///////////// My Test Examples Q4

Result = "\nExpected: \n13326.38 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(1110000, 6, 9)); 

Result = "\nExpected: \n374.79 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(16872, 3.18, 4)); 


Result = "\nExpected: \n77.29 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(7000, 4, 9)); 


Result = "\nExpected: \n180480.99 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(19510000, 2.11, 10)); 


Result = "\nExpected: \n16985.49 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(571000, 4.5, 3)); 


Result = "\nExpected: \n680.22 \nReturned: ";
console.log(Result);
console.log(lab1.questionFour(8010, 3.5, 1)); 
