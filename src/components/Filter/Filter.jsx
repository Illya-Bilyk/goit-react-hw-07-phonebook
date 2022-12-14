import { Label } from '../ContactForm/ContactForm.styled';
import { Input } from './Filter.styled';
import React from 'react';
export const Filter = ({ onFilter }) => {
  const handleFilter = e => {
    const keyWord = e.target.value
      .toLowerCase()
      .split(' ')
      .join('');

    onFilter(keyWord);
  };

  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleFilter}
      />
    </div>
  );
};
