//dziesiątki to row
//jedności to col

function getRow(inputPosition){
    if(typeof inputPosition==='string'){
        return inputPosition[1];
    }
    else if(typeof inputPosition==='number'){
        let result=inputPosition.toString()
        return result[1]
    }
    else{
        console.log('BAD INPUT')
    }
}
function getCol(inputPosition){
    if(typeof inputPosition==='string'){
        return +inputPosition[0];
    }
    else if(typeof inputPosition==='number'){
        let result=inputPosition.toString()
        return +result[0]
    }
}
function isTreasure(position,inputMap){
    let col=getCol(position)-1
    let row=getRow(position)-1
    if(inputMap[col][row]===position)
    {return true;}
    return false;
  }
export default {
    getRow,getCol,isTreasure
}
