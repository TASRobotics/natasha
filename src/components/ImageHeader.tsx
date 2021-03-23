import React, { useContext } from 'react';
import { MobileContext } from '../context';
import { Typography } from 'antd';
import styled from 'styled-components';

type DivProps = {
  mobile: boolean;
};

type ImageHeaderProps = {
  img: string;
  title: string;
  subtitle?: string;
  imgStyle?: object;
};

const Img = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px); /* apply the blur */
    pointer-events: none; /* make the pseudo class click-through */
  }
`;

const StyledDiv = styled.div<DivProps>`
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  border-right: ${({ mobile }) => (mobile ? 'none' : null)};
  border-left: ${({ mobile }) => (mobile ? 'none' : null)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ mobile }) => (mobile ? '100%' : '80%')};
  padding: 20px;
  text-align: center;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    color: #fff;
  }
`;

export const ImageHeader = ({
  img,
  title,
  subtitle,
  imgStyle
}: ImageHeaderProps) => {
  const { mobile } = useContext(MobileContext);

  return (
    <div style={{ position: 'relative' }}>
      <Img
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center 50%',
          ...imgStyle
        }}
      />
      <StyledDiv mobile={mobile}>
        <StyledTitle style={{ color: '#fff', fontSize: 44, marginBottom: 10 }}>
          {title}
        </StyledTitle>
        {subtitle && (
          <StyledTitle level={3} style={{ color: '#fff', marginTop: 0 }}>
            {subtitle}
          </StyledTitle>
        )}
      </StyledDiv>
    </div>
  );
};
