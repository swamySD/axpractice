import React,{useState,useEffect} from 'react'
import './fetch.css'
const Fetch = () => {

    const [users,setUsers]=useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((json)=>{
         console.log(users)
         setUsers(json)
       })
       },[])
   
       const filteredData=()=>{
            let data=users.filter((eachUser,i)=>
            eachUser.name.length>18)
            
            console.log(data)
       }

  return (
    <>
    <h1>Users</h1>
    <div className='card-container-g'>
        {
          users.map((eachUser,index)=>{
            return(
              <div className='card' key={index}>
                <h1>{eachUser.name}</h1>
              </div>
            )
          })
        }
        <button onClick={filteredData}>filter Data</button>
    </div>
    </>
  )
}

export default Fetch