import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, MainTitle, Title } from './App.styled';

const initialContactsState = () => {
  const contacts = localStorage.getItem('Contact');
  if (contacts !== null) {
    const parseContacts = JSON.parse(contacts);
    return parseContacts;
  } else {
    return [];
  }
};

const App = () => {
  const [contacts, setContacts] = useState(initialContactsState);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContact} />

      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;
