// Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
const sample1 = "karol";
const sample2 = "rolki";
class Sequence {
  constructor(firstString, secondString) {
    this.firstString = firstString;
    this.secondString = secondString;
  }
  findSubSequence() {
    let longAndShortString = [this.firstString, this.secondString]
      .sort((a, b) => b.length - a.length)
      .map((element) => element.toLowerCase());
    let [longString, shortString] = longAndShortString;
    let substring = "";
    let result = "";
    for (let i = 0; i < shortString.length; i++) {
        for (let j = shortString.length - i; j > 0; j--) {
          if (longString.includes(shortString.slice(i, j + 1))) {
            substring = shortString.slice(i, j + 1);
            break;
          }
        }
      if (substring.length > result.length) {
        result = substring;
      }
    }
    if (result) {
      return `longest common subsequence of words '${this.firstString}' and '${this.secondString}' is '${result}'`;
    } else {
      return "both strings doesnt contain any subsequences";
    }
  }
}
const example = new Sequence(sample1, sample2);
console.log(example.findSubSequence());
