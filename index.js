// ******************************** //
//  JS Practise Questions //

// ******************************* //





//  *********************************************** //

//  Q:1   Write a JavaScript function that reverse a number.


// function reverse_Number(reverse){
//     var reverse= reverse + "";
//     var x = reverse.split('').reverse().join('');
//     return x;
// }
// var reversed= reverse_Number(1234);
// console.log(reversed);



// ************************************* //

// Q: 2. Write a JavaScript function that checks whether a passed string is palindrome or not?




// var user= prompt("Enter any thing to check whether it is palindrome or not ");
// console.log("you entered ", user);

// function reverse() {
//    var myReverse = '';
//     for(var i = user.length - 1 ; i>=0 ; i--){
//         myReverse= myReverse + user.charAt(i);

//     }
//     return myReverse;
// }

// console.log(reverse());

// if(user === reverse()){
    
//     console.log("It's palindrome" );
// }
// else{
//     console.log("It's Not Palindrome");
// }




//  *********************************************** //

//   Q: 3  Write a JavaScript function that generates all combinations of a string.


// function checkCombination(str){
//     var list = [];
//     for(var i =0; i<str.length; i++){
//         for(var j=i+1; j<str.length +1; j++){
//             list.push(str.slice(i,j));
//         }
//     }
//     return list;
// }

// document.write(checkCombination('dog'));



 




// ************************************* //


// Q: 4  Write a JavaScript function that returns a passed string with letters in alphabetical order.


// var string = prompt("Enter a string");
// console.log(string);

// function passedString(){
//     var spl = string.split(' ');
//     console.log(spl);

//     var sorting= spl.sort();
//     console.log(sorting);

//     var joining= sorting.join(' ')
//     console.log(joining);
    
// }

// passedString();







// ********************************************//


// Q:5     Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


// function uppercase(str)
// {
//   var array = str.split(' ');
//   var newArray = [];
    
//   for(var x = 0; x < array.length; x++){
//     newArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return newArray.join(' ');
// }
// console.log(uppercase("the quick brown fox"));








//  *********************************************** //

//  Q:6  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.



// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i <= str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// console.log(longestWord("Web Development Tutorial"));






// **************************************** //

// Q: 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.


// var string = prompt("Enter any name to check whether it include vowels");

// function toCheck(string) {
//     const reg = /[aeiou]/gi;
//     var test = string.match(reg);
//     console.log(test);

// }
// toCheck(string);






//  *********************************************** //

//   Q: 8   Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function checkPrime(n){
//     if(n===1){
//         return false;
//     }
//     else if(n===2){
//         return true;
//     }
//     else{
//         for(var i=2; i<n ;i++){
//             if(n % i ===0){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// document.write(checkPrime(13));





// ********************************//


// Q: 9. Write a JavaScript function which accepts an argument and returns the type.


function check(){
    var user = prompt("Enter something ");
    console.log(typeof(user));
}

check();



























//  *********************************************** //



// Q: 10 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// var arr = [1, 2, 3, 4, 5];
// var outputArr = [];
// // Array is already in sorted form
// function findNo(){
//     outputArr.push(arr[1], arr[arr.length-2]);
//     // return outputArr;
   
//     console.log(outputArr);
// }

// findNo();