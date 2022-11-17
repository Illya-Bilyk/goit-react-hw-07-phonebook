import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem';
import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, phoneNumber } = contact;
        return <Contact key={id} id={id} name={name} number={phoneNumber} />;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ).isRequired,
  // onDelete: PropTypes.func.isRequired,
};
