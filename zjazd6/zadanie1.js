// Write a function that rotates a list by k elements. For example, [1,2,3,4,5,6]
// rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.

let List=[1,2,3,4,5,6];

function rotateListLeft(arrToRotate,numToRotateBy){

   for(let i=0;i<numToRotateBy; i++){
    let firstElement=arrToRotate.shift()
    arrToRotate.push(firstElement)}
}
function rotateListright(arrToRotate,numToRotateBy){

    for(let i=0;i<numToRotateBy; i++){
     let lastElement=arrToRotate.pop()
     arrToRotate.unshift(lastElement)}
 }
console.log(List);
rotateListLeft(List,2);
// rotateListright(List,3);
console.log(List);

const ListObject={
    valuesArr:[1,2,3,4,5,6],
    set rotateLeftBy(num){
        for(let i=0;i<num; i++){
            this.valuesArr.push(this.valuesArr.shift())}
    }
}
ListObject.rotateLeftBy=2
console.log(ListObject.valuesArr);
