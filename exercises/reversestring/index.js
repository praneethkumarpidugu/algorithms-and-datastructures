// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
/*
Praneeth Algorithm
*/
// function reverse(str) {
//   var stringToReverse = str.split('');
//   var reverseString = [];
//   for(var i=0; i<=stringToReverse.length;i++){
//     // console.log(str.replace('/\s/g', ''));
//     if (stringToReverse[stringToReverse.length-i] == undefined){
//       continue
//     }
//     reverseString.push(stringToReverse[stringToReverse.length-i]);
//   }
//   return reverseString.join('');
// }
// module.exports = reverse;

// /*Solution # 1 by Udemy*/
//
// function reverse(str){
//   return str
//   .split('')
//   .reverse()
//   .join('');
// }

/*Solution # 2 by Udemy*/
function reverse(str){
  let reversed = '';
  for (let character of str){
    reversed = character + reversed
    // debugger;
  }
  return reversed;
}

/*Solution # 3 by Udemy*/
/*If we want to debug a line we can debugger.*/
/*To execute a function in debugger mode we need to execute it as
node-inspect index.js
better chrome tools :)
*/
// function reverse(str){
//   debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// reverse("Hello World");
module.exports = reverse;
