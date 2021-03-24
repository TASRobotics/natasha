import { useContext } from 'react';
import { FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import LoginImg from '../assets/images/login.png';

import { useAuth } from '../hooks';
import { FormPage } from '../components';
import { UserContext } from '../context';

export const Login = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);
  if (user) {
    history.push('/dashboard');
  }

  const { login } = useAuth();

  const validate = (values: { [key: string]: string }) => {
    const errors: { email?: string; password?: string } = {};
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
    await login(values);
    setSubmitting(false);
  };

  return (
    <FormPage
      title='Login to NATASHA'
      subtitle='First time? Sign up now ->'
      subtitleRoute='/register'
      initialValues={{ email: '', password: '' }}
      validate={validate}
      handleSubmit={handleSubmit}
      inputs={[
        { type: 'email', name: 'email', placeholder: 'Email' },
        { type: 'password', name: 'password', placeholder: 'Password' }
      ]}
      button='LOGIN'
      img={LoginImg}
    />
  );
};
