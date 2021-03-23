import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  style?: object;
  white?: boolean;
};

export const Container = ({
  children,
  white,
  style: styleProps
}: ContainerProps) => {
  let style = {
    backgroundColor: white ? '#fff' : 'inherit',
    padding: '50px 20px'
  };

  return (
    <div style={style}>
      <div
        style={{
          maxWidth: '1500px',
          margin: 'auto',
          ...styleProps
        }}
      >
        {children}
      </div>
    </div>
  );
};
