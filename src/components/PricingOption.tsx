import { FC } from 'react';
import styled from 'styled-components';
import { Title as BaseTitle } from './Title';

const Container = styled.div`
  width: 373px;
  height: 1160px;
  padding: 32px 0px;
  background-color: #eae9ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-right: 66px;
  }
`;

const CostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #007985;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  color: #fff;
  margin: 30px 0px 15px 0px;
`;

const SmallCircle = styled.div`
  background-color: #007985;
  flex: 1 0 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-top: 10px;
  margin-right: 43px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 23px 91px 23px 68px;
  font-size: 24px;
  font-weight: 500;
`;

const Title = styled(BaseTitle)`
  color: #000;
`;

type PricingOptionProps = {
  name: string;
  cost: string;
  content: string[];
};

export const PricingOption: FC<PricingOptionProps> = ({
  name,
  cost,
  content
}) => {
  const contentNode = content.map((point, i) => (
    <ContentContainer key={i}>
      <SmallCircle />
      {point}
    </ContentContainer>
  ));

  return (
    <Container>
      <Title>{name}</Title>
      <CostContainer>{cost}</CostContainer>
      {contentNode}
    </Container>
  );
};
