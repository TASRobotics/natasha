import React from 'react';
import { Layout } from 'antd';
import {
  NavBar,
  Carousel,
  Games,
  AboutUs,
  Donate,
  ContactUs
} from '../components';

export const Home = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <Carousel />
        <Games />
        <AboutUs />
        <Donate />
        <ContactUs />
      </Content>
    </Layout>
  );
};
