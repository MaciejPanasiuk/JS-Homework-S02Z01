// Write a code that multiplies two matrices together.
//  Dimension validation is required.
//ZADADY:
//number of columns of A must be equal to rows of B
//we multiply every number in row of A by every each number in column of B, then sum it, and that how we get position [0][0],
//  to get [1][0] we multiply second row of A by the 1st column of A and so on
//validation first, or checking if we put numbers

const sampleMatrixA = [
  [2, 1, 3],
  [-1, 2, 4],
];
const sampleMatrixB = [
  [1, 3],
  [2, -2],
  [-1, 4],
];
const sampleMatrixC = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const sampleMatrixD = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

class MatrixSolver {
  constructor(inputMatrixA, inputMatrixB) {
    this.inputMatrixA = inputMatrixA;
    this.inputMatrixB = inputMatrixB;
  }
  Validate() {
    if (this.inputMatrixA.length === this.inputMatrixB[0].length) {
      return true;
    } else {
      return false;
    }
  }
  Multiply() {
    let row1 = this.inputMatrixA.length;
    let col1 = this.inputMatrixA[0].length;
    let col2 = this.inputMatrixB[0].length;
    if (!this.Validate) {
      return "Cannot multiply matrices, number of columns of 1st matrix is not equal to rows of 2nd matrix";
    } else {
      // let ResultMatrix=Array(row1).fill(0)
      // ResultMatrix=ResultMatrix.map((arrElem)=>arrElem.fill(Array(col2)));
      // let ResultMatrix=Array(row1).fill(Array(col2).fill(0))
      let ResultMatrix=Array(row1)
      for (let x = 0; x < row1; x++) { 
        ResultMatrix[x] = new Array(col2);}   
      for (let r = 0; r < row1; r++) {
        for (let c = 0; c < col2; c++) {
          let solvedSpot = 0;
          for (let i = 0; i < col1; i++) {
            solvedSpot +=
              this.inputMatrixA[r][i] * this.inputMatrixB[i][c];
              ResultMatrix[r][c]=solvedSpot;
          }
        }
      }
      return ResultMatrix;
    }
  }
}
const AB = new MatrixSolver(sampleMatrixA, sampleMatrixB);
console.table(AB.Multiply());
const BA=new MatrixSolver(sampleMatrixB,sampleMatrixA)
console.table(BA.Multiply())
