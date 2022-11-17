import { Delete, Item } from './ContactList.styled';
import { useDeleteContactsMutation } from '../../redux/contactSlice';
import React from 'react';

export const Contact = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <Item>
      {name} : {number}
      <Delete
        type="button"
        name={name}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Delete>
    </Item>
  );
};
