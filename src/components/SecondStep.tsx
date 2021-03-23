import React, { FC } from 'react';
import { Form, Button, Input, Typography, Checkbox } from 'antd';

type SecondStepProps = {
  onFinish: (content: object) => void;
  teammates: number;
  label: string;
};

const { Text } = Typography;

const SecondStep: FC<SecondStepProps> = ({ onFinish, teammates, label }) => {
  const formItems: React.ReactNode[] = [];
  const place = ['First', 'Second', 'Third', 'Fourth'];
  for (let i = 0; i < teammates; i++) {
    formItems.push(
      <Form.Item
        label={
          teammates === 1
            ? "Teammate's full name"
            : `${place[i]} teammate's full name`
        }
        name={i.toString()}
        key={i.toString()}
      >
        <Input />
      </Form.Item>
    );
  }

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Text>
          {label} will be played with teams of {teammates + 1}. If you have{' '}
          {teammates === 1 ? 'a friend' : 'friends'} you want to team up with,
          please enter their {teammates === 1 ? 'name' : 'names'} here! If not,
          just leave it blank and we'll assign you{' '}
          {teammates === 1 ? 'a teammate' : 'teammates'}. If you do add{' '}
          {teammates === 1 ? 'a teammate' : 'teammates'}, please make sure they
          also include you in their list of teammates when they signup! You can
          edit this list of teammates at the "My Account" page up until April
          2nd. If all your teammates have signed up and you all inputted the
          same team members by April 2nd, we will email you confirming you are a
          team and also ask you for a team name!
        </Text>
      </div>

      <Form layout='vertical' onFinish={onFinish}>
        {formItems}
        <Form.Item name='captain' valuePropName='checked'>
          <Checkbox>
            I am team captain (one per team). As team captain, I will ensure all
            my teammates get signed up and are ready to compete on the day of
            the tournament. I am also open to be contacted by the event
            organizers to make sure my team is ready.
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

export { SecondStep };
