// import React, { useEffect, useState } from 'react';
'use client'
import {Form} from '../Form/Form';
import {ContactsList} from '../ContactsList/ContactsList';
import {Filter} from '../Filter/Filter'

import { Container, Title, TitleContacts } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selector';
// import { addContact, deleteContact } from '../../redux/ContactsSlice';
// import { changeFilter } from '../../redux/FilterSlice';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();
//   const [contacts, setContacts] = useState(() => {
//     if (localStorage.getItem('contacts')) {
//       return JSON.parse(localStorage.getItem('contacts'));
//     }
//     return initialState;

//   });
    
//     const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

  // const handleAddContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number
  //   };
  //   if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact(contact));
  // };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     )
//   };

//    const changeFilter = (event) => {
//     setFilter(event.currentTarget.value);
//   };

  // const handleAddContact = () => dispatch(addContact(contacts.id));
  // const handleDeleteContact = () => dispatch(deleteContact(contacts.id));
  // const hendlechangeFilter = event => dispatch(changeFilter(event.currentTarget.value))

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // }

  return (
      <Container>
        <Title>Phonebook</Title>
        <Form/>
        <TitleContacts>Contacts</TitleContacts>
        <Filter/>
        <ContactsList />
      </Container>
  );

}