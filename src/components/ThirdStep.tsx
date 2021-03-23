import React, { FC } from 'react';
import { Form, Button, Checkbox, Typography } from 'antd';

type ThirdStepProps = {
  onFinish: () => void;
};

const { Link } = Typography;
const { Text } = Typography;

const ThirdStep: FC<ThirdStepProps> = ({ onFinish }) => {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Text>
          This game costs $300 NTD. By checking this box, you agree to deduct
          $300 NTD from your school account. This fee is{' '}
          <strong>non-refundable</strong>, and cannot be withdrawn. All the
          money raised will go to charity.
        </Text>
      </div>
      <Form onFinish={onFinish}>
        <Form.Item
          name='agree'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('This is required!')
            }
          ]}
        >
          <Checkbox>I agree to deduct $300 NTD from my school account</Checkbox>
        </Form.Item>
        <Form.Item
          name='agree2'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('This is required!')
            }
          ]}
        >
          <Checkbox>
            I have read over the{' '}
            <Link href='https://www.tas-gaming.com/rules' target='_blank'>
              rules
            </Link>{' '}
            and agree to abide by them
          </Checkbox>
        </Form.Item>
        <Form.Item key='submit'>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export { ThirdStep };
