import React from 'react';
import { Carousel as ADCarousel } from 'antd';
import { ImageHeader } from './ImageHeader';
import styled from 'styled-components';
import Minecraft from '../assets/images/minecraft.jpg';
import Valorant from '../assets/images/valorant.jpg';
import League from '../assets/images/lol.jpg';
import Audience from '../assets/images/audience.jpg';

const StyledCarousel = styled(ADCarousel)`
  &&& {
    button {
      height: 24px;
    }
    li {
      width: 48px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const Carousel = () => {
  return (
    <StyledCarousel autoplay>
      <div>
        <ImageHeader
          img={Minecraft}
          title='TAS Gaming Tournament'
          subtitle={`We're back!`}
        />
      </div>
      <div>
        <ImageHeader
          img={Valorant}
          title='Five Days, Five Games'
          subtitle='Play during Spring Break!'
        />
      </div>
      <div>
        <ImageHeader
          img={League}
          title='Highschool-Wide Tournament'
          subtitle='Face off against your classmates!'
        />
      </div>
      <div>
        <ImageHeader
          img={Audience}
          title='High Quality Livestream'
          subtitle='Demonstrate your skills to the entire school!'
        />
      </div>
    </StyledCarousel>
  );
};
