import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SarnelliHouse from '../assets/images/sarnellihouse.png';
import { Container } from './Conainer';
import { Typography, Button } from 'antd';
import { MobileContext } from '../context';

export const AboutUs = () => {
  const history = useHistory();
  const { Title, Text, Link } = Typography;
  const { mobile } = useContext(MobileContext);

  let style: { [key: string]: string | number } = {
    display: 'flex',
    marginBottom: 20
  };
  if (mobile)
    style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

  return (
    <Container white>
      <Title>About Us</Title>
      <div style={style}>
        <div>
          <Text>
            All the money raised through this tournament will be going to{' '}
            <Link href='http://sarnellihouse.org/' target='_blank'>
              <strong>Sarnelli House</strong>
            </Link>
            .
          </Text>
          <Title level={3}>
            <Link href='http://sarnellihouse.org/' target='_blank'>
              Visit Sarnelli House's official website.
            </Link>
          </Title>
          <Text>
            <Title level={4}>
              Here is a brief description from their website:
            </Title>
            Sarnelli House is a refuge for abandoned and abused children and
            children affected with HIV/AIDS. We work in the spirit of love where
            children can reach their potential and be nurtured as they grow into
            adults. The lives of these children can be transformed with love and
            support and with the grace of God.
          </Text>
          <Title level={3}>What does Sarnelli House do?</Title>
          <Text>
            <ol>
              <li>
                Sarnelli House strives to provide a safe home and basic needs
                for children living there.{' '}
              </li>
              <li>
                They help children and adults living with HIV/AIDS to help them
                access proper health care and treatment.{' '}
              </li>
              <li>
                They provide education or vocational training for children, so
                that they can become members in society, as well as fulfill
                their full potential.{' '}
              </li>
            </ol>
          </Text>
        </div>
        <img
          style={{
            marginLeft: mobile ? 0 : 50,
            marginTop: mobile ? 20 : 0,
            maxHeight: 350
          }}
          src={SarnelliHouse}
          alt='sarnelli house logo'
        />
      </div>
      <Button
        type='primary'
        onClick={() => {
          history.push('/aboutus');
        }}
        style={{ marginTop: mobile ? 20 : 0 }}
        block={mobile}
      >
        Learn More
      </Button>
    </Container>
  );
};
