'use client'
import React from 'react';
import { List } from './ContactsList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

     const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
         );
    }
        const filteredContacts = getVisibleContacts();
         console.log(filteredContacts);

    return (
        <List>
            { filteredContacts.map(({ name, number, id }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}/>
            ))
            }
        </List>
    );
}

