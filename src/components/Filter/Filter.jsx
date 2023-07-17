import React from 'react';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter contacts by name:
        <Input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
