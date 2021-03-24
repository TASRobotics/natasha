import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 606px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  color: #007985;
  margin-bottom: 18px;
`;

const Circle = styled.div`
  display: flex;
  background-color: #007985;
  color: #fff;
  font-size: 64px;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 164px;
  margin-right: 31px;
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  margin-left: 82px;
  font-size: 24px;
  font-weight: 500;
`;

const Img = styled.img`
  margin: 0px 84px;
`;

type UserStepProps = {
  direction: 'left' | 'right';
  number: number;
  title: string;
  content: string[];
  img: string;
};

export const UserStep: FC<UserStepProps> = ({
  number,
  title,
  content,
  img,
  direction
}) => {
  const textNode = (
    <TextContainer>
      <TitleContainer>
        <Circle>{number}</Circle>
        {title}
      </TitleContainer>
      <ContentContainer>
        {content.map((item) => (
          <div>{`- ${item}`}</div>
        ))}
      </ContentContainer>
    </TextContainer>
  );

  if (direction === 'left') {
    return (
      <Container>
        <Img src={img} alt='step' />
        {textNode}
      </Container>
    );
  }

  return (
    <Container>
      {textNode} <Img src={img} alt='step' />
    </Container>
  );
};
