import {pCol,sCol,tCol,qCol} from '../Visualizer'

function reset(array){
    for (let i=0;i<array.length;i++)
        array[i][1]=pCol
}


function sorted(array){
    let isSorted = true;
    for(let i=0;i<array.length-1;i++){
        if(array[i][0]>array[i+1][0]){
            isSorted=false;
            break;
        }
    }
    return isSorted;
}

export default function shellSort(array){
    
    reset(array);
    let t,gap=array.length;
while(!sorted(array))
{
    gap=Math.floor(gap/2);
    for(let i = gap; i < array.length; i++)
    {
        if(array[i][0]<array[i-gap][0])
        {
            array[i-gap][1]=tCol
            array[i][1]=sCol
            t=array[i]
            array[i]=array[i-gap]
            array[i-gap]=t
            return array
        }
    }
}
}