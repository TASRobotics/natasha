import { FC } from 'react';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button } from './Button';
import { Input } from './Input';

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
  white-space: nowrap;
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

type FormPageProps = {
  title: string;
  subtitle: string;
  subtitleRoute: string;
  initialValues: { [key: string]: string };
  validate: (values: {
    [key: string]: string;
  }) => void | object | Promise<FormikErrors<{ [key: string]: string }>>;
  handleSubmit: (
    values: { [key: string]: string },
    formikHelpers: FormikHelpers<{ [key: string]: string }>
  ) => void | Promise<any>;
  inputs: { type: string; name: string; placeholder: string }[];
  button: string;
};

export const FormPage: FC<FormPageProps> = ({
  title,
  subtitle,
  subtitleRoute,
  initialValues,
  validate,
  handleSubmit,
  inputs,
  button
}) => {
  const history = useHistory();

  return (
    <Background>
      <Container>
        <Formik
          initialValues={initialValues}
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
              <Title>{title}</Title>
              <SubTitle
                onClick={() => {
                  history.push(subtitleRoute);
                }}
              >
                {subtitle}
              </SubTitle>
              {inputs.map(({ type, name, placeholder }, i) => (
                <>
                  <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                  ></Input>
                  {errors[name] && touched[name] && errors[name]}
                </>
              ))}
              <Button
                type='submit'
                disabled={isSubmitting}
                style={{ marginTop: 29 }}
              >
                {button}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};
