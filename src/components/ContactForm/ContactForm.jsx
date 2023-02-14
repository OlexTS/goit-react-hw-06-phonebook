import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';
import {
  Input,
  FormCont,
  Label,
  SubmitButton,
  Text,
  ErrorText,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(5)
    .max(24)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      'Please enter correct name'
    ),
  number: Yup.string().phone('UA').required(),
});

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormCont autoComplete="off">
        <Label>
          <Text>Name</Text>
          <Input type="text" name="name" placeholder="Jack Daniel" />
          <FormError name="name" />
        </Label>
        <Label>
          <Text>Number</Text>
          <Input type="tel" name="number" placeholder="8-000-000-00-00" />
          <FormError name="number" />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormCont>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
