import React, { useContext } from 'react';
import { Typography, Form, Input, Button, Divider, notification } from 'antd';
import { Container } from './Conainer';
import { useAuth } from '../hooks';
import { MobileContext } from '../context';
import Mail from '../assets/images/mail.png';
import DiscordImg from '../assets/images/discord.png';

export const ContactUs = () => {
  const { Title, Link } = Typography;
  const { useForm } = Form;
  const [form] = useForm();
  const { mobile } = useContext(MobileContext);
  const { sendMessage } = useAuth();

  let style: { [key: string]: string } = {
    display: 'flex'
  };
  if (mobile)
    style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

  return (
    <Container white>
      <Title>Have any questions?</Title>
      <div style={style}>
        <div style={{ flex: 1 }}>
          <Title level={3}>Shoot us a message</Title>
          <Form
            form={form}
            name='contactus'
            layout='vertical'
            onFinish={async (content: object) => {
              const result = await sendMessage(content);
              if (result) {
                form.resetFields();
                notification.success({
                  message: 'Success',
                  description: 'Message sent!'
                });
              }
            }}
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[
                () => ({
                  validator(_, value) {
                    if (value && value.includes('.tas.tw')) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Please use a TAS email!');
                  }
                })
              ]}
            >
              <Input style={{ width: 250 }} />
            </Form.Item>

            <Form.Item
              label='Message'
              name='content'
              rules={[
                { required: true, message: 'Please input your message!' }
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Divider
          type={mobile ? 'horizontal' : 'vertical'}
          style={mobile ? {} : { height: '300px' }}
        />
        <div style={{ flex: 1 }}>
          <Title level={3}>
            Send us an email at{' '}
            <Link href='mailto:sarnellihouse@students.tas.tw' target='_blank'>
              sarnellihouse@students.tas.tw
            </Link>
          </Title>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Mail} alt='mail' style={{ height: 250 }} />
          </div>
        </div>
        <Divider
          type={mobile ? 'horizontal' : 'vertical'}
          style={mobile ? {} : { height: '300px' }}
        />
        <div style={{ flex: 1 }}>
          <Title level={3}>
            Join our Discord
            <br />
            <Link href='https://discord.gg/k6XF92E5BP' target='_blank'>
              https://discord.gg/k6XF92E5BP
            </Link>
          </Title>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={DiscordImg}
              alt='mail'
              style={{ height: 150, marginTop: 50 }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
