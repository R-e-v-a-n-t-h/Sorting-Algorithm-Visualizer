import {pCol,sCol,tCol,qCol} from '../Visualizer'

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

function setComCol(A,col){
    for(let i=0;i<A.length;i++){
        A[i][1]=col
    }
}
function reset(array){
    for (let i=0;i<array.length;i++){
        array[i][1]=pCol
    }
}

function join(arrayL,arrayR,array){
    for(let i=0;i<arrayL.length;i++)
        array[i]=arrayL[i]
    for(let i=0,j=arrayL.length;i<arrayR.length,j<array.length;i++,j++)
        array[j]=arrayR[i]    
}

export default function mergeSort(array) {
    let startIndex=0,stopIndex=array.length-1,mid=Math.floor((startIndex+stopIndex)/2);
    let n1 = mid-startIndex+1, n2=stopIndex-mid,i,j,t;
    let L =[], R=[];
    reset(array)

    for(i=0;i<n1;i++)
        L.push(array[i])

    for(i=mid+1;i<array.length;i++)
        R.push(array[i])

        if(n1!=1&&!sorted(L)){
            mergeSort(L) 
            join(L,R,array)
            return array
        }

        if(n2!=1&&!sorted(R)){
            mergeSort(R)
            join(L,R,array)
            return array
        }

        (merge(L,R,array))
        return array
};

function merge(arrayL,arrayR,array){
    let i=0,j=0,k=0;
    setComCol(arrayL,tCol)
    setComCol(arrayR,tCol)
    while (i<arrayL.length && j<arrayR.length)
    {
        if (arrayL[i][0]<=arrayR[j][0])
        {
            array[k]=arrayL[i];
            i++;
        }
        else
        {
            array[k]=arrayR[j];
            j++;
        }
        k++;
    }
    while (i<arrayL.length)
        {
            array[k] = arrayL[i];
        i++;
        k++;
    }
        while (j < arrayR.length) {
        array[k] = arrayR[j];
        j++;
        k++;
    }
}