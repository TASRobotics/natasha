import React, { useContext, useState } from 'react';
import { NavBar, Container } from '../components';
import {
  Layout,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  notification,
  Checkbox
} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { UserContext, Game, registerDict } from '../context';
import { useAuth } from '../hooks';

const games: Game[] = ['bedwars', 'league', 'valorant', 'brawlstars', 'csgo'];

export const MyAccount = () => {
  const { Content } = Layout;
  const { Title, Text, Link } = Typography;
  const { user } = useContext(UserContext);
  const { editUser } = useAuth();
  const [modal, setModal] = useState<Game | undefined>(undefined);

  const signedUpNode = [];
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    if (user![game].participating) {
      const { name, teammates, captain } = user![game];
      signedUpNode.push(
        <div style={{ marginBottom: 10 }} key={i}>
          <Title level={5}>
            <Link href={`https://www.tas-gaming.com/${game}`} target='_blank'>
              {registerDict[game].label}
            </Link>
          </Title>
          <div>
            <Text>Username: </Text>
            <Text>{name}</Text>
          </div>
          <div>
            <Text>Teammates:</Text>
            {teammates.length > 0 ? (
              <ul>
                {teammates.map((teammate, j) => (
                  <li key={j}>{teammate}</li>
                ))}
              </ul>
            ) : (
              <Text>You did not add any teammmates!</Text>
            )}
          </div>
          <div>
            <Text>
              Team Captain:{' '}
              {captain ? (
                <CheckOutlined style={{ color: '#52c41a' }} />
              ) : (
                <CloseOutlined style={{ color: '#ff4d4f' }} />
              )}
            </Text>
          </div>
          {teammates.length > 0 ? (
            <div>
              <Button
                // eslint-disable-next-line no-loop-func
                onClick={() => {
                  setModal(game);
                }}
                type='primary'
                size='small'
              >
                Edit
              </Button>
            </div>
          ) : null}
        </div>
      );
      break;
    }
  }

  let modalNode: React.ReactNode;

  if (modal) {
    const { label, teammates, usernameLabel } = registerDict[modal];

    const teammatesFormItems: React.ReactNode[] = [];

    const place = ['First', 'Second', 'Third', 'Fourth'];
    for (let i = 0; i < teammates; i++) {
      const initialValue = user![modal].teammates[i];
      teammatesFormItems.push(
        <Form.Item
          label={
            teammates === 1
              ? "Teammate's full name"
              : `${place[i]} teammate's full name`
          }
          name={i.toString()}
          key={i.toString()}
          initialValue={initialValue || ''}
        >
          <Input />
        </Form.Item>
      );
    }

    modalNode = (
      <Form
        layout='vertical'
        onFinish={async (content: any) => {
          let output: any;
          const name = content.name;
          delete content.name;
          const captain = content.captain;
          delete content.captain;
          const newGameObject = {
            participating: true,
            name,
            captain,
            teammates: (Object.values(content) as string[]).filter(
              (teammate) => teammate && teammate.length !== 0
            )
          };
          console.log(newGameObject);
          output = await editUser({
            [modal]: newGameObject
          });
          if (output !== false)
            notification.success({
              message: 'Success',
              description: 'Successfully edited!'
            });
          setModal(undefined);
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <Text>{label}</Text>
        </div>
        <Form.Item
          label={usernameLabel}
          name='name'
          key='name'
          initialValue={user![modal].name}
        >
          <Input />
        </Form.Item>
        {teammatesFormItems}
        <Form.Item
          name='captain'
          valuePropName='checked'
          initialValue={user![modal].captain}
        >
          <Checkbox>Team Captain</Checkbox>
        </Form.Item>
        <Form.Item key='submit'>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }

  return (
    <Layout>
      <NavBar />
      <Content>
        <Container>
          <Title>My Account</Title>
          <Title level={3}>Sign ups</Title>
          {signedUpNode.length > 0 ? (
            signedUpNode
          ) : (
            <Text>
              You have not signed up to any games!{' '}
              <Link href='https://www.tas-gaming.com'>Sign up now!</Link>
            </Text>
          )}
        </Container>
        <Modal
          title='Edit User'
          visible={Boolean(modal)}
          onCancel={() => {
            setModal(undefined);
          }}
          footer={[
            <Button
              key='back'
              onClick={() => {
                setModal(undefined);
              }}
            >
              Cancel
            </Button>
          ]}
        >
          {modalNode}
        </Modal>
      </Content>
    </Layout>
  );
};
