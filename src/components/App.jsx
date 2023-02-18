import { ToastContainer } from 'react-toastify';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, MainTitle, Title } from './App.styled';

const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
