//TODO
// Write a program that finds the longest palindromic substring
// of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

const sample = "emadamee";
class PalindromeFinder {
  constructor(inputString) {
    this.inputString = inputString;
  }
  findPalindrome() {
    let result = "";
    let substring = "";
    let input = this.inputString.toLowerCase();
    for (let i = 1; i < input.length - 1; i++) {
      if (input.length % 2 === 1) {
        for (let c = 1; c <= Math.floor(input.length / 2); c++) {
          if (input[i - c] === input[i + c]) {
            substring = input.slice(i - c, i + c + 1);
          } else {
            break;
          }
        }
      }
      if (input.length % 2 === 0) {
        for (let c = 1; c < input.length / 2; c++) {
          if (input[i - c] === input[i + c]) {
            substring = input.slice(i - c, i + c + 1);
          } else {
            break;
          }
        }
      }
      if (substring.length > result.length) {
        result = substring;
      }
    }
    if (result) {
      return result;
    } else {
      return "this word doesnt contain any palindromes";
    }
  }
}
const somestring = new palindromeFinder(sample);
console.log(somestring.inputString);
console.log(somestring.findPalindrome());
