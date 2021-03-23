import React, { useState } from 'react';
import {
  Typography,
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  notification
} from 'antd';
import { Container } from './Conainer';
import { useAuth } from '../hooks';

export const Donate = () => {
  const { Title } = Typography;
  const { useForm } = Form;
  const [form] = useForm();
  const [amount, setAmount] = useState<number>(0);
  const { makeDonation } = useAuth();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  return (
    <Container>
      <Title>Wish to donate w/o playing a game?</Title>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title level={3}>Fill out this form</Title>
      </div>
      <Form
        {...layout}
        form={form}
        name='basic'
        onFinish={async (content: object) => {
          const result = await makeDonation(content);
          if (result) {
            form.resetFields();
            notification.success({
              message: 'Success',
              description:
                'Donation successfully made! Thank you for your support!'
            });
          }
        }}
        requiredMark='optional'
        onValuesChange={(values) => {
          if (values.amount && values.amount > 0 && values.amount !== amount)
            setAmount(values.amount);
        }}
      >
        <Form.Item
          label='Full Name'
          name='name'
          key='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          label='Amount'
          name='amount'
          key='amount'
          rules={[
            () => ({
              required: true,
              validator(_, value) {
                if (value && value > 0) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'Please enter an amount greater than zero!'
                );
              }
            })
          ]}
        >
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            max={10000}
          />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name='agree'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('This is required!')
            }
          ]}
        >
          <Checkbox>
            {amount > 0
              ? ` I agree to deduct ${`$${amount}`.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )} NTD from my school account`
              : ''}
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
