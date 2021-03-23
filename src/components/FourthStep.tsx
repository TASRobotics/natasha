import React, { FC } from 'react';
import { Button, Typography } from 'antd';

type FourthStepProps = {
  onFinish: () => void;
};

const { Text, Link } = Typography;

const FourthStep: FC<FourthStepProps> = ({ onFinish }) => {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Text>
          In order to participate in this tournament, you will need to join our
          discord server. To join, use this link:{' '}
          <Link href='https://discord.gg/k6XF92E5BP' target='_blank'>
            https://discord.gg/k6XF92E5BP
          </Link>
          . Once in, please find the "TAS Gaming Tournament" bot and direct
          message him your school ID. Once it tells you that your discord
          account has been confirmed, you can come back here and continue.
        </Text>
      </div>
      <div>
        <Button onClick={onFinish}>Continue</Button>
      </div>
    </>
  );
};

export { FourthStep };
