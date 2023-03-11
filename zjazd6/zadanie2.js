// Write a class that prints the list of the first n Fibonacci numbers. The first two
// Fibonacci numbers are 1 and 1. The n+1 Fibonacci number can be computed by adding the
// n and the n-1 Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

//WERSJA NA PAŁĘ
// class FibonacciClass {
//   constructor(sequenceNum) {
//     this.numsInSequence=sequenceNum;
//     this.FibonacciSequenceArr = [];
//   }
//   fibonacciSeq(n) {
//     if (n === 0) {
//       return 0;
//     }
//     if (n === 1) {
//       return 1;
//     }
//     return this.fibonacciSeq(n - 2) + this.fibonacciSeq(n - 1);//class method that we recourse through needs binding regardless
//     //AT THIS POINTS ITS RECALCULATING THE CURRENT NUMBER EACH TIME, ABOVE 40 IT CHOKES AND DIES
//   }
//   getFiboSeq(param) {
//     let counter = 0;
//     while (this.FibonacciSequenceArr.length < param) {
//         this.FibonacciSequenceArr.push(this.fibonacciSeq(counter));//populating our fibonacci sequence array n times
//       counter++;
//     }
//     return this.FibonacciSequenceArr;
//   }
//   DisplaySeq(){
//     this.getFiboSeq(this.numsInSequence)
//     return `First ${this.FibonacciSequenceArr.length} numbers in Fibonacci sequence go as follows: ${this.FibonacciSequenceArr}`;
//   }
// }
// const FibbonacciSequence=new FibonacciClass(40);
// console.log(FibbonacciSequence.DisplaySeq())

//DIFFERENT METHOD, NOT MINE BUT MUCH BETTER OPTIMISED
// class FibonacciClass {
//   constructor(sequenceNum) {
//     this.numsInSequence = sequenceNum;
//     this.FibonacciSequenceArr = [];
//   }
//   getFibonacciFunction() {
//     let cache = [];
//     return function getFibboncci(n) {
//       // closure pattern, we save results in cache to
//       // avoid recalculating fibonacci numbers we already calculated
//       if (cache[n - 1]) {
//         return cache[n - 1];
//       }

//       if (n === 1) {
//         cache[0] = 0;
//         return 0;
//       }

//       if (n === 2) {
//         cache[1] = 1;
//         return 1;
//       }
//       const result = getFibboncci(n - 1) + getFibboncci(n - 2);
//       cache[n - 1] = result;
//       return result;
//     };
//   }

//   getFirstFibbNumbers(n) {
//     let result = [];
//     let getFibonacciNumber = this.getFibonacciFunction();
//     for (let i = 1; i <= n; i++) {
//       result.push(getFibonacciNumber(i));
//     }
//     return result;
//   }
//   DisplaySeq() {
//     this.FibonacciSequenceArr = this.getFirstFibbNumbers(this.numsInSequence);
//     return `First ${this.FibonacciSequenceArr.length} numbers in Fibonacci sequence go as follows: ${this.FibonacciSequenceArr}`;
//   }
// }
// const FibbonacciSequence = new FibonacciClass(100);
// console.log(FibbonacciSequence.DisplaySeq());


//SYNTEZA
