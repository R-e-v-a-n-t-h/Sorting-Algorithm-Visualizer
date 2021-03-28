import {pCol,sCol,tCol,qCol} from '../Visualizer'


export default function selectionSort (array){
    let t;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            array[i][1]=pCol
            array[j][1]=pCol
            if(array[i][0]>array[j][0]){
                t=array[i];
                array[i]=array[j];
                array[j]=t;
                array[i][1]=sCol
                array[j][1]=tCol
                return array
            }

        }
    }
}

