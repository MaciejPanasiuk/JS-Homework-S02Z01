//create a board Z by Y with random pairs of values, populate it with 0s or Xs
//XxY we have number of tiles, /2 we have number of values that we need to pick at random exacly XxY/2 times.Then add it 2 times at random to the memoBoard


import pkg from "lodash";
const { uniqueId } = pkg;

class Tile {
  constructor(Id, symbol) {
    this.Id = Id;
    this.symbol = symbol;
    this.isRevealed = false;
  }
}
const createEmptyBoard = function (Xdim, Ydim) {
  let arrLength = Xdim * Ydim;
  let Result = Array.from({ length: arrLength }, (elem) => elem=new Tile(uniqueId(), 0))
  return Result;
};
const pickRandomNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
};

const createValuesArr = function (scope) {
  const result = [];
  for (let i = 1; i <= scope; i++) {
    result.push(i, i);
  }
  return result;
};
const CreateMemoryBoard = function (Xdim, Ydim) {
  const valueRange = (Xdim * Ydim) / 2;
  const newBoard = createEmptyBoard(Xdim, Ydim);
  const valuesArr = createValuesArr(valueRange);
  let randomindex, Tile;

  for (const value of valuesArr) {
    do {
      randomindex = pickRandomNum(0, Xdim*Ydim);
    } while (newBoard[randomindex].symbol !== 0);
    newBoard[randomindex].symbol = value;
  }

  return newBoard;
};

export default {
  CreateMemoryBoard,
  pickRandomNum,
  createEmptyBoard,
};

// const createEmptyBoard = function (Xdim, Ydim) {
//   let Result = Array.from({ length: Xdim }, () => new Array(Ydim));
//   for(let x=0;x<Xdim;x++){
//     for (let y=0;y<Ydim;y++){
//       Result[x][y]=new Tile(uniqueId(),0);
//     }
//   }
//   return Result;
// };
// const pickRandomNum = function(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
// }

// const createValuesArr = function (scope) {
//   const result = [];
//   for (let i = 1; i <= scope; i++) {
//     result.push(i, i);
//   }
//   return result;
// };
// const CreateMemoryBoard = function (Xdim, Ydim) {
//   const valueRange = (Xdim * Ydim) / 2;
//   const newBoard = createEmptyBoard(Xdim, Ydim);
//   const valuesArr = createValuesArr(valueRange);

//   for (const value of valuesArr) {
//     let XVal, YVal, Tile;
//     do {
//       XVal = pickRandomNum(0,Xdim);
//       YVal = pickRandomNum(0,Ydim);
//       Tile = {...newBoard[XVal][YVal]}

//     } while (Tile.symbol !== 0);

//     Tile.symbol = value;
//     newBoard[XVal][YVal]=Tile;
//   }

//   return newBoard;
// };
