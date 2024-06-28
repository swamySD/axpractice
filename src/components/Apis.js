import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Apis = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const getData = () => {
    axios
      .get('https://6523e5e7ea560a22a4e8ffe4.mockapi.io/users')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  

  const postData = () => {
    axios
      .post('https://6523e5e7ea560a22a4e8ffe4.mockapi.io/users', {
        name: name,
        age: 26,
        hobbies: ['poetry', 'cooking', 'travelling', 'coding'],
      })
      .then(() => {
        getData(); // Update data after posting
      })
      .catch((error) => console.log(error));
      setName('')
  };

  const updateData = (id) => {
    axios
      .put(`https://6523e5e7ea560a22a4e8ffe4.mockapi.io/users/${id}`, {
        name: name,
        age: 25,
        hobbies: ['sleeping', 'cooking', 'travelling', 'coding'],
      })
      .then(() => {
        getData(); // Update data after updating
      })
      .catch((error) => console.log(error));
      setName('')
  };

  const deleteData = (id) => {
    axios
      .delete(`https://6523e5e7ea560a22a4e8ffe4.mockapi.io/users/${id}`)
      .then(() => {
        getData(); // Update data after deleting
      })
      .catch((error) => console.log(error));
      setName('')
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={postData}>Post Data</button>
      {data &&
        data.map((eachUser, index) => {
          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '500px', padding: '10px' }}>
              <span style={{ paddingRight: '10px' }}>{eachUser.id} {eachUser.name}</span>
              <div>
                <button style={{ height: '30px', marginRight: '10px' }} onClick={() => updateData(eachUser.id)}>Update</button>
                <button style={{ height: '30px' }} onClick={() => deleteData(eachUser.id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Apis;
