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

export default function heapSort(array) {
    let t,i,last=len(array)-1
    reset(array)
    while(last>0){
        for(i = 0;i<(last+1)/2;i++){

            if (2*i+1<=last && array[i][0]<array[2*i+1][0])
            {
                t=array[i];
                array[i]=array[2*i+1];
                array[2*i+1]=t;
                array[i][1]=sCol
                array[2*i+1][1]=tCol
                return array
            }

            if (2*i+2<=last && array[i][0]<array[2*i+2][0])
            {
                t=array[i];
                array[i]=array[2*i+2];
                array[2*i+2]=t;
                array[i][1]=sCol
                array[2*i+2][1]=tCol
                return array
            }

        }
        t=array[0];
        array[0]=array[last];
        array[last]=t;
        array[last][1]=qCol
        return array

    }   
};
