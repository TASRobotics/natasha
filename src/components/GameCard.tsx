import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import { MobileContext } from '../context';

type GameCardProps = {
  img: string;
  title: string;
  points: string[];
  onClick: () => void;
  onButtonClick: () => void;
  disabled: boolean;
};

export const GameCard = ({
  img,
  title,
  points,
  onClick,
  onButtonClick,
  disabled
}: GameCardProps) => {
  const { mobile } = useContext(MobileContext);

  return (
    <>
      <Card
        title={title}
        hoverable
        onClick={onClick}
        style={{
          width: 230,
          position: 'relative',
          marginBottom: mobile ? 20 : 0
        }}
      >
        <div
          style={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <img
            src={img}
            alt='title'
            style={{
              display: 'block',
              top: '-50px',
              maxWidth: 180,
              maxHeight: 100,
              margin: 'auto'
            }}
          />
        </div>
        <ul style={{ listStyleType: 'circle', height: 44 }}>
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <Button
          block
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick();
          }}
          type='primary'
          disabled={disabled}
        >
          {disabled ? "You're already signed up" : 'Sign Up Now'}
        </Button>
      </Card>
    </>
  );
};
