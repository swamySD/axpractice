import { useEffect,useState} from "react";
import React from 'react';
import axios from "axios";


const pinAPI=`https://api.postalpincode.in/pincode/`

const Debouncing = () => {
const [pin,setPin]=useState('')

const searchPin=(pin)=>{
    console.log(pin)
    axios.get(pinAPI+pin).then((res)=>{
        console.log(res.data[0].Postoffice)
    }).catch(error=>console.log(error))
}

useEffect(()=>{
const start= setTimeout(()=>{
searchPin(pin)
},3000)
return ()=>clearTimeout(start)
},[pin])

console.log(pin)

  return (
    <div>
        <input type="text" onChange={(e)=>setPin(e.target.value)} value={pin} placeholder="Enter your Pin"/>
    </div>
  )
}

export default Debouncing