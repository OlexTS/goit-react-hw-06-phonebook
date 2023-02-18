import { Label, Input, InputContainer } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <Label>
      Find contacts by name
      <InputContainer>
        <Input
          type="text"
          value={value}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </InputContainer>
    </Label>
  );
};

export default Filter;
