import {pCol,sCol,tCol,qCol} from '../Visualizer'

function reset(array){
    for (let i=0;i<array.length;i++)
        array[i][1]=pCol
}
export default function insertionSort(array){
    
    reset(array);
    let t;
    for(let i = 1; i < array.length; i++)
    {
        if(array[i][0]<array[i-1][0])
        {
            array[i][1]=sCol
            t=array[i]
            array[i]=array[i-1]
            array[i-1]=t
            
            return array
        }
    }
        
}