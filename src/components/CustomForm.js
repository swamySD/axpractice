import React, { useState } from 'react';
import Input from './customInput';  // Assuming the Input component is in a file named Input.js
import './Form.css';

const CustomForm = () => {
  const [formInputs, setFormInputs] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  const setFormInputsHandler = (value, name) => {
    console.log({[name]:value})
    setFormInputs({ ...formInputs, [name]: value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(formInputs);
    setFormInputs({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='form'>
      <form onSubmit={submitFormHandler} className='form-data'>
        <Input
          type='text'
          name='name'
          value={formInputs.name}
          onChange={setFormInputsHandler}
        />
        <Input
          type='number'
          name='age'
          value={formInputs.age}
          onChange={setFormInputsHandler}
        />
        <Input
          type='email'
          name='email'
          value={formInputs.email}
          onChange={setFormInputsHandler}
        />
        <Input
          type='password'
          name='password'
          value={formInputs.password}
          onChange={setFormInputsHandler}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
