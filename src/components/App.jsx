import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { FormWrap, TitlePhone, TitleContact } from './App.styled';
import { useGetContactsQuery } from '../redux/contactSlice';
import { useState } from 'react';
import React from 'react';

export function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const newContactList = () => {
    if (contacts) {
      return contacts.filter(({ name }) => {
        const searchingName = name.toLowerCase();
        return searchingName.includes(filter);
      });
    }
  };
  const list = newContactList();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#010101',
      }}
    >
      <FormWrap>
        <TitlePhone>Phonebook</TitlePhone>
        <ContactForm />

        <TitleContact>Contacts</TitleContact>
        <Filter onFilter={setFilter} />
        {contacts && <ContactList contacts={list} />}
      </FormWrap>
    </div>
  );
}
