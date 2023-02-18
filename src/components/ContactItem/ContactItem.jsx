import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import {
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
