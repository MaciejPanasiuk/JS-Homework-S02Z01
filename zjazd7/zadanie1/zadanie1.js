import { LatinToMorseRef as Morse } from "./morse.js";

const exampleText = "some text that needs translating 12!";
const exampleMorse =
  "... --- -- . / - . -..- - / - .... .- - / -. . . -.. ... / - .-. .- -. ... .-.. .- - .. -. --. / .---- ..--- -.-.--";
class MorseTranslator {
  constructor(inputText) {
    this.inputText = inputText;
  }
  translateToMorse() {
    let result = this.inputText.toLowerCase().split("");
    for (let i = 0; i < result.length; i++) {
      if (result[i] === " ") {
        result[i] = "/";
      } else if (Morse.hasOwnProperty(result[i])) {
        result[i] = Object.values(Morse)[Object.keys(Morse).indexOf(result[i])];
      } else if (Morse.Interpunction.includes(result[i])) {
        result[i] =
          Morse.Interpunction[Morse.Interpunction.indexOf(result[i]) + 1];
      }
    }
    return result.join(" ");
  }
  translateToEnglish() {
    let result = this.inputText.split(" ");
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "/") {
        result[i] = result[i];
      } else if (Object.values(Morse).includes(result[i])) {
        result[i] = Object.keys(Morse)[Object.values(Morse).indexOf(result[i])];
      } else if (Morse.Interpunction.includes(result[i])) {
        result[i] =
          Morse.Interpunction[Morse.Interpunction.indexOf(result[i]) - 1];
      }
    }
    return result.join("").replaceAll("/", " ");
  }
}
const Englishsample = new MorseTranslator(exampleText);
console.log(Englishsample.inputText);
console.log(Englishsample.translateToMorse());
const Morsesample = new MorseTranslator(exampleMorse);
console.log(Morsesample.inputText);
console.log(Morsesample.translateToEnglish());

