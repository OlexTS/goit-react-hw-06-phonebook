import PropTypes from 'prop-types';

import {
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ item: { name, number, id }, onDeleteContact }) => {
  return (
    <Item>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
