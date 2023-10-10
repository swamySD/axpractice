import React from 'react'

const ChildComponent = ({name,changeName}) => {

   

  return (
    <div>
    <p>{name}</p>
    <button onClick={()=>changeName('Hello this is Nishant')}>Change Name</button>
    </div>
  )
}

export default ChildComponent