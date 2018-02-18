// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution # 1

function anagrams(stringA, stringB) {
  var stringA_ = stringA.replace(/\s/g, '').split('');
  var stringB_ = stringB.replace(/\s/g, '').split('');
  var result = false;
  if (stringA_.length !== stringB_.length){
    return result;
  } else {
    for (var i=0; i<stringA_.length;i++)
    {
      for (var j=0; j<stringB_.length;j++)
      {
        debugger;
        if (stringA_[i] == stringB_[j])
        {
          result = true;
          break;
        } else {
          result = false
        }
      }
    }
  }
  return result;
}

module.exports = anagrams;
