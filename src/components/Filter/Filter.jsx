import PropTypes from 'prop-types';
import { Label, Input, InputContainer } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <InputContainer>
        <Input type="text" value={value} onChange={onChange} />
      </InputContainer>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
