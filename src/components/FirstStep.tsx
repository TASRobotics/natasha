import React, { FC } from 'react';
import { Form, Button, Input } from 'antd';

type FirstStepProps = {
  onFinish: (content: { name: string }) => void;
  usernameLabel: string;
};

const FirstStep: FC<FirstStepProps> = ({ onFinish, usernameLabel }) => {
  return (
    <Form layout='vertical' onFinish={onFinish}>
      <Form.Item
        label={`Please input your ${usernameLabel}`}
        name='name'
        rules={[{ required: true, message: 'Please input your username!' }]}
        key='1'
      >
        <Input />
      </Form.Item>
      <Form.Item key='submit'>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { FirstStep };
