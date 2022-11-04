import {Phonebook} from './Phonebook/Phonebook'

import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, changeFilter, deleteContact } from 'redux/PhonebookRedax/reducer.Phonbook';


export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContact(id))
    };

 
  const handleFilteerConnect = () => {
    return contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));
}
  
  const onChangeName = (e) => {
     dispatch(changeFilter(e.target.value))
  }
  const handleSubmit = (name, number) => {
   if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number, id: nanoid() }))
    
  };
 
   return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
          gap: 10,
        }}>
        <h1>Phonebook</h1>
        <Phonebook
          handleAddContact={handleSubmit}        
        />
        <h2>Contacts</h2>
        <Filter onChangeName={onChangeName} filter={filter} />
        <ContactList
          onFilterContacts={handleFilteerConnect()}
          deleteUser={handleDeleteUser}
        />


      </div>
    );
  }



