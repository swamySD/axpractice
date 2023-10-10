import React from 'react';

const Input = ({ type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value, e.target.name)}
    />
  );
};

export default Input;
