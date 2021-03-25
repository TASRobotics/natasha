import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 59px 0px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  position: relative;
  width: 929px;
  height: 400px;
  background-color: #eae9ff;
  padding: 123px 89px 61px 147px;
`;

const Circle = styled.div`
  background-color: #007985;
  width: 164px;
  height: 164px;
  border-radius: 50%;

  position: absolute;
  left: 106px;
  top: -72px;
`;

const SmallCircle = styled.div`
  background-color: #007985;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  margin-left: 20px;
  margin-right: 17px;
`;

const TypeContainer = styled.div`
  position: absolute;
  top: 46px;
  right: 79px;
  font-size: 24px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  background: #eae9ff;
  border: 6px solid #00c9dd;
  box-sizing: border-box;
  border-radius: 0px 20px 0px 0px;

  position: absolute;
  left: 175px;
  top: -26px;

  padding: 17px 22px;
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const Img = styled.img`
  margin: 0px 106px;
  width: 400px;
  height: 400px;
`;

type TestimonialProps = {
  title: string;
  description: string;
  type: string;
  time: string;
  img: string;
};

export const GameDescription: FC<TestimonialProps> = ({
  title,
  description,
  type,
  time,
  img
}) => {
  const descriptionNode = (
    <Box>
      <Circle />
      <Title>{title}</Title>
      <TypeContainer>
        <SmallCircle />
        {type}
        <SmallCircle />
        {time}
      </TypeContainer>
      <Description>{description}</Description>
    </Box>
  );

  return (
    <Container>
      {descriptionNode}
      <Img src={img} alt='profile' />
    </Container>
  );
};
