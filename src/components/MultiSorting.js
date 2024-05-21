import React, { useState } from 'react';


 const itemss= [
    {
      name: 'Prada',
      category: 'Bags',
    },
    {
      name: 'Gucci',
      category: 'Bags',
    },
    {
      name: 'Guess',
      category: 'Bags',
    },
    {
      name: 'Rolex',
      category: 'Watches',
    },
    {
      name: 'Timex',
      category: 'Watches',
    },
    {
      name: 'Nike',
      category: 'Sports',
    },
    {
      name: 'Adidas',
      category: 'Sports',
    },
    {
      name: 'Fila',
      category: 'Sports',
    },
    {
      name: 'Ray Ban',
      category: 'Sunglasses',
    },
    {
      name: 'Aldo',
      category: 'Sunglasses',
    },
    {
      name: 'Polaroid',
      category: 'Sunglasses',
    },
  ];
  


const  MultipleFilters=()=>{
 
  const [filters, setFilters] = useState([]);

  const handleFilter = (category) => {
    // Toggle filter selection
    if (filters.includes(category)) {
      setFilters(filters.filter((filter) => filter !== category));
    } else {
      setFilters([...filters, category]);
    }
  };

  const filteredItems = itemss.filter((item) => {
    // Include item if no filters are selected or item's category matches any selected filter
    return filters.length === 0 || filters.includes(item.category);
  });
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {['Bags', 'Watches', 'Sports', 'Sunglasses'].map((category, idx) => (
          <button
            className={`button ${filters.includes(category) ? 'active' : ''}`}
            key={`filters-${idx}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items-container" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item" style={{width:'100px',height:'100px',border:'1px solid grey',textAlign:'center',margin:'10px'}}>
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleFilters