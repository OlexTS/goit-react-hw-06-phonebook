import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormCont = styled(Form)`
  display: inline-block;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
`;

export const Text = styled.span`
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  display: inline-block;
  margin: auto;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px;
  border: none;
  border-radius: 20px;

  :hover,
  :focus {
    outline-color: #5e3e3e;
  }
`;
export const SubmitButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  background-color: #84adb4;
  margin-bottom: 40px;
  border: 2px solid #c29e9e;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #bda6a6;
    color: white;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;
