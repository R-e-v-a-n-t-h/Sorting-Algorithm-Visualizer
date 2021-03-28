import {pCol,sCol,tCol,qCol} from '../Visualizer'


function len(array)
{
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i][1]!=qCol)
            count+=1;
    }
    return count
}

function reset(array){
    for (let i=0;i<array.length;i++){
        if(array[i][1]!=qCol)
            array[i][1]=pCol
        }
}


export default function bubbleSort(array){
    let t,i
    for(i=1;i<array.length;i++)
    {
        if(array[i][0]<array[i-1][0] && array[i][1]!=tCol &&array[i-1][1]!=tCol)
        {

            
            t=array[i]
            array[i]=array[i-1]
            array[i-1]=t
            array[i][1]=sCol
            array[i-1][1]=tCol
            return array
        }
        
    }
    array[len(array)-1][1]=qCol
    reset(array)
    return array
}