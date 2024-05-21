import React,{useState} from 'react'


// They don't necessarily need to take props
// This one also has an explicit return
const Sorting = () => {
  const [elves, setElves] = useState([
    'Buddy',
    'Dobby',
    'Winky',
    'Bing',
    'Bernard'
  ]);
 
  const sortHandler = (type) => {
    let sortedElves;
    switch (type) {
      case 'dsc':
        sortedElves = [...elves].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
        setElves(sortedElves);
        break;
      case 'asc':
        sortedElves = [...elves].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        setElves(sortedElves);
        break;
      default:
        // No sorting, do nothing
        break;
    }
  };
  
  
  
console.log(elves)

  return (
    
    <div>
      {/* */}
      <ul>
        {elves.map((item,index)=>(<li key={index}> {item}</li>))}
      </ul>
      
      <button onClick={()=>sortHandler('dsc')}>sort</button>
	  <button onClick={()=>sortHandler('asc')}>sort</button>
    </div>

  );
};

export default Sorting;