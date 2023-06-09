//                   +-------------------------+
//                   ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//                   +-------------------------+

// Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. 
// The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's
// digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array.
// (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates.
// Your program should output the cells it visits during its search,and a message indicating where you found the treasure.

import Positions from './Positions.js'
const INPUT = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];
const Start=11
function TreasureHunter(inputPos,inputMap){
  if(Positions.isTreasure(inputPos,inputMap)){
    console.log(`Cell [${Positions.getCol(inputPos)},${Positions.getRow(inputPos)}] Here be treasure!`)
  }
  else{
    console.log(`Cell [${Positions.getCol(inputPos)},${Positions.getRow(inputPos)}]:no luck-moving further,`)
    let col=Positions.getCol(inputPos)-1;
    let row=Positions.getRow(inputPos)-1;
    TreasureHunter(inputMap[col][row],inputMap);
  }
}
TreasureHunter(Start,INPUT)
