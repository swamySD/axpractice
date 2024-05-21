import React,{useState,memo} from 'react'

const Box=({color})=>{
    console.log('Box rendered')
    return(
        <div style={{height:'150px', display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center',width:'150px',backgroundColor:`${color}`,marginTop:'20px'}}>
            <span>{color}</span>
        </div>
    )
}

const MemodBox=memo(Box)

const Memo = () => {
    const [appRenderIndex,setAppRenderIndex]=useState(0)
    const [color,setColor]=useState('red')

   console.log(`App Re-Rendered ${appRenderIndex}`)

  return (
    <div>
     <button onClick={()=>setAppRenderIndex(appRenderIndex+1)}>Re-Render App </button>
     <button onClick={()=>setColor('green')}>Change Color </button>
      <MemodBox color={color} />
    </div>
  )
}

export default Memo