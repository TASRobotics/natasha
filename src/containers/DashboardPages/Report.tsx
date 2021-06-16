import { FC, useContext } from 'react';
import styled from 'styled-components';

import { Title as BaseTitle, SubTitle as BaseSubTitle } from '../../components';
import { UserContext } from '../../context';

const Title = styled(BaseTitle)`
  color: #000;
`;

const SubTitle = styled(BaseSubTitle)`
  color: #000;
  margin-bottom: 40px;
`;

type BarProps = {
  percentage: number;
};

const Bar = styled.div<BarProps>`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background: #ecf1f4;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: ${({ percentage }) => percentage * 300}px;
    height: 40px;
    border-radius: 15px;
    background: #00c9dd;
  }
`;

const PerformanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const PerformanceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  width: 400px;
  font-size: 16px;
  font-weight: 700;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
`;

const UpNextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  font-size: 18px;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
  margin-bottom: 40px;
`;

const UpNextItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Percentage = styled.div`
  color: #007985;
  font-size: 32px;
  font-weight: 700;
  margin-left: 10px;
`;

const SubSubTitle = styled.div`
  font-size: 16px;
`;

const HCenterContainer = styled.div`
  display: flex;
  align-items: center;
`;

type BarWithPercentageProps = {
  percentage: number;
};

const BarWithPercentage: FC<BarWithPercentageProps> = ({ percentage }) => {
  return (
    <HCenterContainer>
      <Bar percentage={percentage} />
      <Percentage>{Math.round(percentage * 100)}%</Percentage>
    </HCenterContainer>
  );
};

export const Report = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  return (
    <div>
      <Title>Your Report</Title>
      <SubTitle>Your Performance</SubTitle>
      <PerformanceContainer>
        <PerformanceItem>
          <div>Overall Performance</div>
          <BarWithPercentage percentage={0.3} />
        </PerformanceItem>
        <PerformanceItem>
          <div>Right arm accuracy</div>
          <BarWithPercentage percentage={0.7} />
        </PerformanceItem>
        <PerformanceItem>
          <div>Left arm accuracy</div>
          <BarWithPercentage percentage={0.5} />
        </PerformanceItem>
      </PerformanceContainer>
      <SubTitle>Up Next</SubTitle>
      <UpNextContainer>
        <UpNextItem>
          Speed
          <BarWithPercentage percentage={0.45} />
        </UpNextItem>
        <UpNextItem>
          Duration
          <BarWithPercentage percentage={0.85} />
        </UpNextItem>
        <UpNextItem>
          Control
          <BarWithPercentage percentage={0.25} />
        </UpNextItem>
      </UpNextContainer>
      <SubTitle>Progress To Date</SubTitle>
      <HCenterContainer>
        <SubSubTitle>Improvement from your last session:</SubSubTitle>
        <Percentage>50%</Percentage>
      </HCenterContainer>
    </div>
  );
};
