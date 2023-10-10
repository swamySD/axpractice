import React, { useState } from 'react'
import './Form.css'
const Form = () => {
const [formInputs,setFormInputs]=useState({
    name:'',
    age:'',
    email:'',
    password:'',

})
    const setFormInputsHandler=(value,name)=>{
        console.log({[name]:value})
     setFormInputs({...formInputs,[name]:value})
    }

    const submitFormHandler=(e)=>{
        e.preventDefault()
        console.log(formInputs)
        setFormInputs({
            name:'',
            age:'',
            email:'',
            password:'',
        })
    }



  return (
    <div className='form'>
        <form onSubmit={submitFormHandler} className='form-data'>
            <input type='text' name="name" onChange={(e)=>setFormInputsHandler(e.target.value,e.target.name)} value={formInputs.name} />
            <input type='number'  name="age" onChange={(e)=>setFormInputsHandler(e.target.value,e.target.name)} value={formInputs.age}/>
            <input type='email' name="email" onChange={(e)=>setFormInputsHandler(e.target.value,e.target.name)} value={formInputs.email}/>
            <input type='password' name="password" onChange={(e)=>setFormInputsHandler(e.target.value,e.target.name)} value={formInputs.password} />
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default Form