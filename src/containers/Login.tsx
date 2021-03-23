import { Formik, FormikHelpers } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
  width: 585px;
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

  text-transform: uppercase;
  margin-bottom: 34px;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Login = () => {
  const history = useHistory();
  const { login } = useAuth();

  const validate = (values: { email: string; password: string }) => {
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
    values: { email: string; password: string },
    {
      setSubmitting
    }: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => {
    await login(values);
    setSubmitting(false);
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
              <Title>Login to NATASHA</Title>
              <SubTitle
                onClick={() => {
                  history.push('/register');
                }}
              >
                First time? Sign up now {`->`}
              </SubTitle>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='Email'
              />
              {errors.email && touched.email && errors.email}
              <Input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='Password'
              />
              {errors.password && touched.password && errors.password}
              <Button
                type='submit'
                disabled={isSubmitting}
                style={{ marginTop: 29 }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};
