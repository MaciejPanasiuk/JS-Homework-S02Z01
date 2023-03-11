// Write a code that takes in a string and returns a list of its digits.
// So for 2342 it should return [2,3,4,2], and for ’A243b’ it should return [2,4,3].
//1st method
let sampleString = "2345AB6,!A7";

function getDigits(inputString) {
  let result = Array.from(inputString);
  result = result
    .map((current) => Number(current))
    .filter((current) => !isNaN(current));
  return result;
}

//2nd method
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const DIGITS=['1','2','3','4','5','6','7','8','9','0'];
function getDigitsWithRef(inputString) {
  let result = Array.from(inputString);
  result = result.filter((current) => DIGITS.includes(Number(current)));
  return result;
}
//3rd method?
function getDigitsWithLoopin(inputString) {
  let result = [];
  for (let i = 0; i < inputString.length; i++) {
    for (let n = 0; n <= 9; n++) {
      if (inputString[i] == n) {
        // result.push(inputString[i])//for digits as strings
        result.push(Number(inputString[i])); //for digits as numbers
      }
    }
  }
  return result;
}

// const listOfDigits=getDigits(sampleString)
// const listOfDigits=getDigitsWithRef(sampleString)
const listOfDigits = getDigitsWithLoopin(sampleString);
console.log(listOfDigits);
