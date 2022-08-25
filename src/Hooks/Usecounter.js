import {useState} from "react";
function Usecounter(initial=0){
  const[num, setNum]= useState(initial)
  const increment =()=>{
    setNum(prev=>prev+1);
    
  };
  const decrement =()=>{
    setNum(prev=>prev-1);
    
  };
  const reset =()=>{
    setNum(initial);
    
  };
 
   return[increment,decrement,reset,num]
}
export default Usecounter;