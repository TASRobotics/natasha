import React, { useState } from 'react';
import { NavBar, Container } from '../components';
import { Layout, Typography, Form, Input, Button } from 'antd';
import { useAuth } from '../hooks';

export const Register = () => {
  const [loginBool, setLoginBool] = useState<boolean>(false);
  const { login, register } = useAuth();

  const { Content } = Layout;
  const { Title, Text, Link } = Typography;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  let formItems: React.ReactElement[] = [];

  if (loginBool) {
    formItems.push(
      <Form.Item
        label='Email'
        name='email'
        key='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
    );
    formItems.push(
      <Form.Item
        label='Password'
        name='password'
        key='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
    );
    formItems.push();
  } else {
    formItems.push(
      <Form.Item
        label='Full Name'
        name='name'
        key='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
    );
    formItems.push(
      <Form.Item
        label='School ID'
        name='schoolID'
        key='schoolID'
        rules={[
          {
            required: true,
            min: 8,
            max: 8,
            message: 'Please input your school ID!'
          }
        ]}
      >
        <Input />
      </Form.Item>
    );
    formItems.push(
      <Form.Item
        label='Email'
        name='email'
        key='email'
        rules={[
          () => ({
            required: true,
            validator(_, value) {
              if (value && value.includes('.tas.tw')) {
                return Promise.resolve();
              }
              return Promise.reject('Please use a TAS email!');
            }
          })
        ]}
      >
        <Input />
      </Form.Item>
    );
    formItems.push(
      <Form.Item
        label='Password'
        name='password'
        key='password'
        rules={[
          {
            required: true,
            min: 8,
            message: 'Your password has to be a minimum of 8 characters'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
    );
    formItems.push(
      <Form.Item
        label='Confirm Password'
        name='confirm'
        key='confirm'
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two passwords that you entered do not match!'
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>
    );
  }

  return (
    <Layout>
      <NavBar />
      <Content>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Title>{loginBool ? 'Log in' : 'Register'}</Title>
          </div>
          <Form
            {...layout}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={loginBool ? login : register}
            requiredMark='optional'
          >
            {formItems.map((formItem) => formItem)}
            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {loginBool ? (
              <Text>
                Don't have an account yet?{' '}
                <Link
                  onClick={() => {
                    setLoginBool(false);
                  }}
                >
                  Sign up
                </Link>
              </Text>
            ) : (
              <Text>
                Already have an account?{' '}
                <Link
                  onClick={() => {
                    setLoginBool(true);
                  }}
                >
                  Log in
                </Link>
              </Text>
            )}
          </div>
        </Container>
      </Content>
    </Layout>
  );
};
