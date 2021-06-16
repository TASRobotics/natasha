import { FC } from 'react';
import styled from 'styled-components';

import { Button as BaseButton } from './Button';

type ContainerProps = {
  forYou?: boolean;
};

const Container = styled.div<ContainerProps>`
  ${({ forYou }) => (forYou ? 'flex: 1 0 414px;' : null)}
  position: relative;
  width: 414px;
  height: 237px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  /* White */

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-bottom: ${({ forYou }) => (forYou ? '20px' : '70px')};

  &:not(:last-child) {
    margin-right: 70px;
  }
`;

const Img = styled.img`
  position: absolute;
  top: -47px;
  left: -35px;
  width: 188px;
  height: 188px;

  border-radius: 50%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  width: 220px;
  font-size: 16px;
  font-weight: 500;
`;

const Title = styled.div`
  font-size: 24px;
  color: #8155a4;
  font-weight: 700;
`;

const Button = styled(BaseButton)`
  background-color: #eae9ff;
  color: #007985;
`;

type GameSelectionProps = {
  title: string;
  description: string;
  onStart: () => void;
  img: string;
  forYou?: boolean;
};

export const GameSelection: FC<GameSelectionProps> = ({
  title,
  description,
  onStart,
  img,
  forYou
}) => {
  return (
    <Container forYou={forYou}>
      <Img src={img} alt='game' />
      <DescriptionContainer>
        <Title>{title}</Title>
        {description}
      </DescriptionContainer>
      <Button onClick={onStart}>START</Button>
    </Container>
  );
};
