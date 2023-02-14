import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 400;
`;
export const InputContainer = styled.div`
  margin-top: 5px;
`;

export const Input = styled.input`
  display: inline-block;
  margin: 0;
  margin-bottom: 20px;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 20px;

  :hover,
  :focus {
    outline-color: #5e3e3e;
  }
`;
