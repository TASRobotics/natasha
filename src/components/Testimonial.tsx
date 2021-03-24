import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 56px 0px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 886px;
  height: 400px;
  background-color: #eae9ff;
  padding: 63px 87px 79px 106px;
`;

const Quote = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const From = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Img = styled.img`
  margin: 0px 106px;
  width: 400px;
  height: 400px;
`;

type TestimonialProps = {
  direction: 'left' | 'right';
  quote: string;
  name: string;
  description: string;
  img: string;
};

export const Testimonial: FC<TestimonialProps> = ({
  direction,
  quote,
  name,
  description,
  img
}) => {
  const quoteNode = (
    <Box>
      <Quote>{quote}</Quote>
      <From>{`- ${name}, ${description}`}</From>
    </Box>
  );

  if (direction === 'left') {
    return (
      <Container>
        <Img src={img} alt='profile' />
        {quoteNode}
      </Container>
    );
  }
  return (
    <Container>
      {quoteNode}
      <Img src={img} alt='profile' />
    </Container>
  );
};
