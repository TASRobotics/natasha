import React, { useState, useEffect } from 'react';
import { Container } from '../components';
import { User } from '../context';
import { Layout, Typography, Button, Form, Input, Table, Modal } from 'antd';
import {
  CheckCircleTwoTone,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { useAuth } from '../hooks';

export const Admin = () => {
  type ModalContent = {
    name?: string;
    teammates?: string[];
    captain?: boolean;
  };

  const { Content } = Layout;
  const { Title, Text } = Typography;
  const [data, setData] = useState<
    | {
        messages: { email: string; content: string; date: string }[];
        users: User[];
        donations: {
          name: string;
          schoolID: string;
          email: string;
          amount: number;
          date: string;
        }[];
      }
    | undefined
  >(undefined);
  const { setAdmin } = useAuth();
  const [modal, setModal] = useState<ModalContent | undefined>(undefined);

  const fetchData = async () => {
    const data = await setAdmin(localStorage.adminKey);
    if (data) setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const check = (modalContent: ModalContent) => {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
        onClick={() => {
          setModal(modalContent);
        }}
      >
        <CheckCircleTwoTone twoToneColor='#52c41a' />
      </div>
    );
  };

  return (
    <Layout>
      <Content>
        <Container>
          <Title>Admin</Title>
          {!data ? (
            <Form
              onFinish={async ({ adminKey }: { adminKey: string }) => {
                const data = await setAdmin(adminKey);
                if (data) setData(data);
              }}
            >
              <Form.Item
                label={'Enter the admin key'}
                name={'adminKey'}
                rules={[
                  { required: true, message: 'Please enter the admin key' }
                ]}
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
          ) : (
            <>
              <Button
                type='primary'
                onClick={fetchData}
                style={{ marginBottom: 10 }}
              >
                Refresh
              </Button>
              <Title level={3}>Users</Title>
              <Table
                columns={[
                  {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
                  },
                  {
                    title: 'ID',
                    dataIndex: 'schoolID',
                    key: 'schoolID'
                  },
                  {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                  },
                  {
                    title: 'Bedwars',
                    dataIndex: 'bedwars',
                    key: 'bedwars',
                    render: (bedwars, record) =>
                      bedwars.participating ? check(record.bedwars) : null
                  },
                  {
                    title: 'League of Legends',
                    dataIndex: 'league',
                    key: 'league',
                    render: (league, record) =>
                      league.participating ? check(record.league) : null
                  },
                  {
                    title: 'Valorant',
                    dataIndex: 'valorant',
                    key: 'valorant',
                    render: (valorant, record) =>
                      valorant.participating ? check(record.valorant) : null
                  },
                  {
                    title: 'Brawl Stars',
                    dataIndex: 'brawlstars',
                    key: 'brawlstars',
                    render: (brawlstars, record) =>
                      brawlstars.participating ? check(record.brawlstars) : null
                  },
                  {
                    title: 'CS:GO',
                    dataIndex: 'csgo',
                    key: 'csgo',
                    render: (csgo, record) =>
                      csgo.participating ? check(record.csgo) : null
                  },
                  {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                    render: (date) => date.substring(0, 16).replace('T', ', ')
                  }
                ]}
                dataSource={data.users.map((user, idx) => {
                  return { ...user, key: idx };
                })}
              />
              <Title level={3}>Messages</Title>
              <Table
                columns={[
                  {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                  },
                  {
                    title: 'Content',
                    dataIndex: 'content',
                    key: 'content'
                  },
                  {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                    render: (date) => date.substring(0, 16).replace('T', ', ')
                  }
                ]}
                dataSource={data.messages.map((message, idx) => {
                  return { ...message, key: idx };
                })}
              />
              <Title level={3}>Donations</Title>
              <Table
                columns={[
                  {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
                  },
                  {
                    title: 'ID',
                    dataIndex: 'schoolID',
                    key: 'schoolID'
                  },
                  {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                  },
                  {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount'
                  },
                  {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                    render: (date) => date.substring(0, 16).replace('T', ', ')
                  }
                ]}
                dataSource={data.donations.map((donation, idx) => {
                  return { ...donation, key: idx };
                })}
              />
            </>
          )}
        </Container>
        <Modal
          title='Extra Info'
          visible={Boolean(modal)}
          onCancel={() => {
            setModal(undefined);
          }}
          footer={[]}
        >
          {modal ? (
            <Text>
              <div>Username: {modal!.name}</div>
              <div>
                Teammates:
                {modal!.teammates && modal!.teammates.length > 0 ? (
                  <ul>
                    {modal!.teammates.map((teammate, idx) => (
                      <li key={idx}>{teammate}</li>
                    ))}
                  </ul>
                ) : (
                  'No teammates'
                )}
              </div>
              <div>
                Team Captain:{' '}
                {modal.captain ? (
                  <CheckOutlined style={{ color: '#52c41a' }} />
                ) : (
                  <CloseOutlined style={{ color: '#ff4d4f' }} />
                )}
              </div>
            </Text>
          ) : null}
        </Modal>
      </Content>
    </Layout>
  );
};
