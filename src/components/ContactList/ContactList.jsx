import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem item={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
export default ContactList;
