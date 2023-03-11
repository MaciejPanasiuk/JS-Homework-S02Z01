// Write a function that translates a text to Pig Latin and back. English is translated to Pig Latin
//  by taking the first letter of every word, moving it to the end of the word, and adding ‘ay’.
//  “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

// const SAMPLETEXT='The quick brown fox'
const SAMPLETEXT = "The quick Brown fox";
const INTERPUNCTION = [",", ".", "!", "?", '"', "`", ":", ";", "-", "+"];

function englishToPigLatin(inputText) {
  let result = splitWithPunc(inputText);
  for (let i = 0; i < result.length; i++) {
    if (INTERPUNCTION.includes(result[i])) {
      result[i] = result[i];
    } else if (isOnlyFirstLetterUpperCase(result[i])) {
      result[i] = result[i].slice(1) + result[i].slice(0, 1) + "ay";
      result[i] = capitalise(result[i]);
    } else if (iswholeWordUpperCase(result[i])) {
      result[i] = result[i].slice(1) + result[i].slice(0, 1) + "AY";
    } else {
      result[i] = result[i].slice(1) + result[i].slice(0, 1) + "ay";
    }
  }
  return joinWithPunc(result);
}
function pigLatinToEnglish(inputText) {
  let result = splitWithPunc(inputText);
  for (let i = 0; i < result.length; i++) {
    if (INTERPUNCTION.includes(result[i])) {
      result[i] = result[i];
    } else if (isOnlyFirstLetterUpperCase(result[i])) {
      result[i] =
        result[i][result[i].length - 3] +
        result[i].slice(0, result[i].length - 3);
      result[i] = capitalise(result[i]);
    } else {
      result[i] =
        result[i][result[i].length - 3] +
        result[i].slice(0, result[i].length - 3);
    }
  }
  return joinWithPunc(result);
}
function isOnlyFirstLetterUpperCase(inputWord) {
  if (
    inputWord[0] == inputWord[0].toUpperCase() &&
    inputWord != inputWord.toUpperCase()
  ) {
    return true;
  } else {
    return false;
  }
}
function iswholeWordUpperCase(inputWord) {
  if (inputWord == inputWord.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
function capitalise(inputWord) {
  let result = inputWord;
  result = result.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
function splitWithPunc(inputstring) {
  for (let j = 0; j < INTERPUNCTION.length; j++) {
    inputstring = inputstring.replaceAll(
      INTERPUNCTION[j],
      ` ${INTERPUNCTION[j]}`
    );
  }
  let result = inputstring.split(" ");
  return result;
}
function joinWithPunc(inputArr) {
  let result = inputArr.join(" ");
  for (let j = 0; j < INTERPUNCTION.length; j++) {
    result = result.replaceAll(` ${INTERPUNCTION[j]}`, INTERPUNCTION[j]);
  }
  return result;
}

let display = englishToPigLatin(SAMPLETEXT);
console.log(display);
display = pigLatinToEnglish(display);
console.log(display);
