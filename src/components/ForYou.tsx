import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.img`
  flex: 1 0 414px;
  width: 414px;
  height: 150px;
  object-fit: cover;
  &:not(:last-child) {
    margin-right: 70px;
  }
  -webkit-filter: brightness(100%);
  &:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 100ms ease;
    -moz-transition: all 100ms ease;
    -o-transition: all 100ms ease;
    -ms-transition: all 100ms ease;
    transition: all 100ms ease;
    cursor: pointer;
  }
`;

type ForYouProps = {
  img: string;
};

export const ForYou: FC<ForYouProps> = ({ img }) => {
  return <Container src={img} />;
};
