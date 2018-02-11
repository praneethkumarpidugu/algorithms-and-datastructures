// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  correctSign = Math.sign(n)
  reversedInt = '';
  if(correctSign == 1){
    for(let number of n.toString().split(''))
      {
        if(Math.sign(number) == 0){
          continue
        }
        reversedInt = number + reversedInt;
      }
    return parseInt(reversedInt);
  }
  else if (correctSign == -1)
  {
    for(let number of n.toString().split(''))
      {
        if(Math.sign(number) == 0){
          continue
        }
        reversedInt = number + reversedInt;
  }

    return parseInt(reversedInt) * correctSign;
  } else {
    return n;
  }

}

module.exports = reverseInt;
