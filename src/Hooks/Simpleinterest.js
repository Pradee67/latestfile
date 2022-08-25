import {useState} from "react";
function Usecounter(initial=0){
  const[principal, setprincipal]= useState()
  const[years, setyears]= useState()
  const[interest, setinterest]= useState()
  const[result, setresult]= useState()

  
  const calc =()=>{
    const result=principal*Math.pow(1+interest.years)
    setNum(result.toFixed(2));
    
  };
 
   return[principal,years,interest,result,calc]
}
export default Usecounter;