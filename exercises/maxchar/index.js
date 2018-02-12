// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
//
// function maxChar(str)
// {
//   var myobj = {};
//   // let i = 0;
//   for(let character of str)
//   {
//     // myobj[character] = i;
//     // i++;
//     // if (!myobj[character])
//     // {
//     //   myobj[character] = 1;
//     // } else {
//     //   myobj[character]++;
//     // }
//     myobj[character] = myobj[character] + 1 || 1;
//   }
//
//   var myvalues = Object.getOwnPropertyNames(myobj);
//
//   var myhighestvalue = [];
//
//   var myhighestkey;
//
//   for(var i=0; i<myvalues.length;i++){
//     myhighestvalue.push(myobj[myvalues[i]]);
//     if(i == myvalues.length - 1){
//       myhighestkey = Math.max(...myhighestvalue);
//     }
//   }
//   console.log(myhighestkey);
//   for(key in myobj)
//   {
//     if (myobj[key] == myhighestkey){
//       return key;
//     }
//   }
//
// }

// Solution # 2 Map

function maxChar(str)
{
  const charMap = {};
  var max = 0;
  var maxChar = "";
  for (let char of str)
  {
    if (charMap[char])
    {
      charMap[char]++;
    }
    else
    {
      charMap[char] = 1;
    }
  }
  for(let char in charMap)
  {
    if (charMap[char] > max)
    {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar
}

module.exports = maxChar;
