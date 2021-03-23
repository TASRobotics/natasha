import React from 'react';
import { NavBar, ImageHeader, Container } from '.';
import { Layout } from 'antd';

type PageProps = {
  img: string;
  imgStyle?: object;
  title: string;
  children?: React.ReactNode;
};

export const Page = ({ img, imgStyle, title, children }: PageProps) => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <ImageHeader
          img={img}
          title={title}
          imgStyle={{
            height: 300,
            ...imgStyle
          }}
        />
        <Container>{children}</Container>
      </Content>
    </Layout>
  );
};
