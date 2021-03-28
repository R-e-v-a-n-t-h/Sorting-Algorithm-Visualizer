import React,{useState,useEffect} from 'react'
import './visualize.css'
import selectionSort from './Algorithms/selectionSort'
import insertionSort from './Algorithms/insertionSort'
import bubbleSort from './Algorithms/bubbleSort'
import shellSort from './Algorithms/shellSort'
import heapSort from './Algorithms/heapSort'
import quickSort from './Algorithms/quickSort'
import mergeSort from './Algorithms/mergeSort'

//------------------------------->Bar colors
export const pCol = 'dodgerblue'
export const sCol = 'red'
export const tCol = 'yellow'
export const qCol = 'limegreen'
const platformColor='blue'
//-------------------------------X

function Visualizer() {

//--------------------------------------------------------------------------------------------> Choices variables
    const algosArray=['Selection sort','Insertion sort','Bubble sort','Shell sort','Heap sort','Quick sort','Merge sort']
    const sizesArray=['XS','S','M','L','XL']
    const [algo,setAlgo]=useState('Selection sort')
    const [size,setSize]=useState('XS')
    const[reGen,setReGen]=useState(0)
    const[active,setActive]=useState(false)
    const[activity,setActivity]=useState(active)
    const [disable,setDisable]= useState(false)
//--------------------------------------------------------------------------------------------X

//--------------------------------------------------------------------------------------------> Visualizer variables

    function createArray(arraySize){
        let A=[]
        for(let i =0;i<arraySize;i++){
            A.push(Math.floor(Math.random()*(700-10+1))+10)
        }
        return A
    } 

    function sorted(array){
        let isSorted = true;
        for(let i=0;i<array.length-1;i++){
            if(array[i][0]>array[i+1][0])
                isSorted=false;
        }
        return isSorted;
    }

    //------------------------------------------------> Array properties control
    const sizeOfArray= {XS:8,S:27,M:45,L:100,XL:212}
    const widthOfBars= {XS:132,S:39,M:23.5,L:10.5,XL:5}
    //------------------------------------------------X
    
    //------------------------------------------------> Sorting speed control
    const sortingSpeed= {
        'Selection sort':{XS:500,S:100,M:50,L:10,XL:0},
        'Insertion sort':{XS:500,S:100,M:50,L:10,XL:0},
        'Bubble sort':{XS:150,S:70,M:25,L:7.5,XL:0},
        'Shell sort':{XS:500,S:100,M:50,L:10,XL:0},
        'Heap sort':{XS:250,S:70,M:25,L:5,XL:0},
        'Quick sort':{XS:500,S:250,M:125,L:75,XL:15},
        'Merge sort':{XS:800,S:750,M:500,L:350,XL:300}
    }
    
    const endingSpeed={
        'Selection sort':10,
        'Insertion sort':10,
        'Bubble sort':10,
        'Shell sort':10,
        'Heap sort':10,
        'Quick sort':10,
        'Merge sort':500
    }
    //------------------------------------------------X

    //Initial array creation [data,color]
    const make=(createArray(Number(sizeOfArray[size])))
    const[arrayToSort,setArrayToSort]= useState(make.map(data=>{return[data,pCol]}));
    //const[sortedArray,setSortedArray]=useState(mySort(arrayToSort,0,1,arrayToSort.length-1))

    //Create new array on changes
    useEffect(()=>{
            setArrayToSort(()=>{
                const newArr = createArray(Number(sizeOfArray[size]))
                return newArr.map(data=>{return[data,pCol]})})
                //setSortedArray(mySort(arrayToSort,0,1,arrayToSort.length-1))
            setActive(false)

        },[size,reGen,algo])


    //Sorting array and re-rendering
    useEffect(()=>{
        if(!sorted(arrayToSort)&&active){
            if(algo=='Selection sort')
                selectionSort(arrayToSort)
            else if(algo =='Insertion sort')
                insertionSort(arrayToSort)
            else if(algo =='Bubble sort')
                bubbleSort(arrayToSort)
            else if(algo =='Shell sort')
                shellSort(arrayToSort)
            else if(algo =='Heap sort')
                heapSort(arrayToSort)
            else if(algo =='Quick sort')
                quickSort(arrayToSort)
            else if(algo =='Merge sort')
                mergeSort(arrayToSort)
                
            setTimeout(()=>{setActivity(!activity)},sortingSpeed[algo][size])
        }
        else{
            setTimeout(()=>{if(sorted(arrayToSort))
                setArrayToSort(arrayToSort.map(x=>[x[0],qCol]))
            setActive(false)
            setDisable(false)},endingSpeed[algo])
        }
        },[activity])

//--------------------------------------------------------------------------------------------X  
    

    return (
        <>
        {/*Display Choices*/}
        <div className='grid' id='choices'>
        <div>
        <label htmlFor="pickAlgo">Algorithm: </label>
        <select disabled={disable} name={"pickAlgo"} id={"pickAlgo"} onChange={(e)=>{setAlgo(e.target.value)}} >
            {algosArray.map(x=>{
                return <option value={x}>{x}</option>
            })}
        </select>
        </div> 
        <div>
            <label htmlFor="arraySize">Array Size: </label>
        <select disabled={disable} name={'arraySize'} id={'arraySize'}  onChange={(e)=>{setSize(e.target.value)}} >
        {sizesArray.map(x=>{
            return <option value={x}>{x}</option>
        })}
        </select>
        </div>

        <div>
            <button className={"btn btn-primary"} id={"reGen"} disabled={disable} onClick={()=> {setReGen(Math.random())}}>Generate New array</button>
        </div>
        <div>
            <button className={"btn btn-success"} id={"start"} disabled={disable} onClick={()=> {setActive(true)
            setActivity(!activity);
            setDisable(true)
            
            }} >Start Sorting</button>
        </div>
        </div>
        
        <hr style={{backgroundColor: platformColor,borderColor: platformColor}}/>
        
        {/*Display Visualizer*/}
        <div className="visual" id="visualizer">
            {arrayToSort.map((x)=>{return <div 
            style={{'height':((Number(x[0])/2)+'px'), 'width':(widthOfBars[size]+'px'), 'background-color':x[1]}} 
            className='visualBars'
            id={Number(x[0])/2+''}></div>})}
        </div>
        </>
    )
}

export default Visualizer
