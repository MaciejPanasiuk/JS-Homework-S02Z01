"use strict";
let lastAction = "";
let lastResult = 0;
let secondArg = 0;

const add = function (a, b) {
  lastAction = `add`;
  secondArg = b;
  lastResult = a + b;
  return lastResult;
};
const subtract = function (a, b) {
  lastAction = `subtract`;
  secondArg = b;
  lastResult = a - b;
  return lastResult;
};
const multiply = function (a, b) {
  lastAction = `multiply`;
  secondArg = b;
  lastResult = a * b;
  return lastResult;
};
const divide = function (a, b) {
  lastAction = `divide`;
  secondArg = b;
  lastResult = a / b;
  return lastResult;
};

//bruteforce way
const repeat = function () {
  if (!lastAction) {
    console.log(`this is the first action`);
  } else {
    const operations = {
      add,
      subtract,
      multiply,
      divide,
    };
    return operations[lastAction](lastResult, secondArg);//we make an object that has all the math funcs and methods and access its props
    //simpler code ver, but less optimised and far less clean
    // if ((lastAction === "add")) {
    //   lastResult = add(lastResult, secondArg);
    //   return lastResult;
    // } else if ((lastAction === "subtract")) {
    //   lastResult = subtract(lastResult, secondArg);
    //   return lastResult;
    // } else if ((lastAction === "multiply")) {
    //   lastResult = multiply(lastResult, secondArg);
    //   return lastResult;
    // } else if ((lastAction === "divide")) {
    //   lastResult = divide(lastResult, secondArg);
    //   return lastResult;
    // }
  }
};
export default {
  add,
  subtract,
  multiply,
  divide,
  repeat,
};
