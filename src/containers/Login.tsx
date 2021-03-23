import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import styled from 'styled-components';

import { useAuth } from '../hooks';
import { Button, Input } from '../components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eae9ff;
`;

const Container = styled.div`
  width: 1029px;
  height: 698px;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 566px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  color: #00c9dd;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #00c9dd;
`;

export const Login = () => {
  const [loginBool, setLoginBool] = useState<boolean>(false);
  const { login, register } = useAuth();

  const validate = (values: { email: string; password: string }) => {
    const errors: { email?: string } = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = (
    values: { email: string; password: string },
    {
      setSubmitting
    }: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Background>
      <Container>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};
