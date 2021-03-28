import {pCol,sCol,tCol,qCol} from '../Visualizer'

function reset(array){
    for (let i=0;i<array.length;i++){
        if(array[i][1]!='limegreen')
            array[i][1]='dodgerblue'
        }
}

function findPivot(array){
    let i,p,tbi,tsi;
    for(i=0;i<array.length;i++)
    {
        if(array[i][1]!=qCol){
            p = i;
            break;
        }
    }

    tbi=p+1
    tsi=tbi
    while(array[tsi][1]!=qCol&&tsi<array.length-1)
        tsi++
    if(array[tsi][1]==qCol)
        tsi-=1
    return {p:p,tbi:tbi,tsi:tsi}
}


export default function quickSort(array) {
    reset(array)
    let {p,tbi,tsi} = findPivot(array);
    let t;
    array[p][1]=sCol
  
    if(array[p+1][1]==qCol)
    {
        array[p][1]=qCol
        return array
    }


    while(tsi>=tbi){
        while(array[tbi]!=undefined&&array[tbi][0]<=array[p][0]){
            tbi++;
        }
        while(array[tsi][0]>array[p][0]){
            tsi--;
        }

        if (tsi>=tbi)
        {
            array[tsi][1]=tCol
            array[tbi][1]=tCol
            t=array[tsi];
            array[tsi]=array[tbi];
            array[tbi]=t;
            return array;
        }
        if(tsi<tbi){
            array[tsi][1]=sCol
            array[p][1]=qCol
            t=array[tsi];
            array[tsi]=array[p];
            array[p]=t;
            return array
        }
    }
};
