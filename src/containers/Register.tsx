import { useContext } from 'react';
import { FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks';
import { FormPage } from '../components';
import { UserContext } from '../context';

export const Register = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);
  if (user) {
    history.push('/dashboard');
  }

  const { register } = useAuth();

  const validate = (values: { [key: string]: string }) => {
    const errors: { [key: string]: string } = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const handleSubmit = async (
    values: {
      [key: string]: string;
    },
    {
      setSubmitting
    }: FormikHelpers<{
      [key: string]: string;
    }>
  ) => {
    await register(values);
    setSubmitting(false);
  };

  return (
    <FormPage
      title='Sign Up to NATASHA'
      subtitle='Already have an account? Log in ->'
      subtitleRoute='/login'
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validate={validate}
      handleSubmit={handleSubmit}
      inputs={[
        { type: 'text', name: 'firstName', placeholder: 'First Name' },
        { type: 'text', name: 'lastName', placeholder: 'Last Name' },
        { type: 'email', name: 'email', placeholder: 'Email' },
        { type: 'password', name: 'password', placeholder: 'Password' }
      ]}
      button='SUBMIT'
    />
  );
};
