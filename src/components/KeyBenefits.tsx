import styled from 'styled-components';

import { Title } from './Title';

const Box = styled.div`
  margin-top: -20px;

  width: 929px;
  height: 1264px;

  background-color: #eae9ff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 170px 0px 150px 0px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 1324px;
`;

const TitleContainer = styled.div`
  margin-left: -49px;
`;

const SubTitle = styled.div`
  color: #0e0e2c;
  font-size: 24px;
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  margin-top: 62px;
  padding: 0px 128px;
  text-align: right;
`;

const BenefitContainer = styled.div`
  margin-bottom: 86px;
`;

const MiniTitle = styled.div`
  font-size: 40px;
  color: #00c9dd;
  font-weight: 700;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #000;
`;

export const KeyBenefits = () => {
  return (
    <Container>
      <Box>
        <TitleContainer>
          <Title>We offer</Title>
          <SubTitle>
            customized stroke therapy through engaging AR/VR games.
          </SubTitle>
        </TitleContainer>
        <DescriptionContainer>
          <BenefitContainer>
            <MiniTitle>Accessibility</MiniTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              imperdiet massa velit feugiat. Morbi nullam condimentum vitae,
              quisque erat facilisis suspendisset augue commodo, suspendisse
              nullam.
            </Description>
          </BenefitContainer>
          <BenefitContainer>
            <MiniTitle>Affordability</MiniTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              imperdiet massa velit feugiat. Morbi nullam condimentum vitae,
              quisque erat facilisis suspendisset augue commodo, suspendisse
              nullam.
            </Description>
          </BenefitContainer>
          <div>
            <MiniTitle>Fun</MiniTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              imperdiet massa velit feugiat. Morbi nullam condimentum vitae,
              quisque erat facilisis suspendisset augue commodo, suspendisse
              nullam.
            </Description>
          </div>
        </DescriptionContainer>
      </Box>
    </Container>
  );
};
