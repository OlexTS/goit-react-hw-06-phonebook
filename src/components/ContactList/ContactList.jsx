import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem item={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
