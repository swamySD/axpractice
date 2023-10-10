import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [name,setName]=useState('Nishant')

    const changeName=(value)=>{
      setName(value)
    }
  return (
    <div>
        <ChildComponent name={name} changeName={changeName}/>
        
    </div>
  )
}

export default ParentComponent