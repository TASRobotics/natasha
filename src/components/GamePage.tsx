import React, { useContext } from 'react';
import { Table, Typography, Button, Calendar } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Page } from './Page';
import { UserContext, GameRegisterContext, Game } from '../context';

type GamePageProps = {
  game: Game;
  img: string;
  imgStyle?: object;
  title: string;
  description: string;
  format: (
    | string
    | { main: string; sub: (string | { main: string; sub: string[] })[] }
  )[];
  schedule?: {
    date: string;
    times: { key: string; time: string; description: string }[];
    moment: string;
  };
};

export const GamePage = ({
  game,
  img,
  imgStyle,
  title,
  description,
  format,
  schedule
}: GamePageProps) => {
  const { user } = useContext(UserContext);
  const { startGameRegister } = useContext(GameRegisterContext);
  const history = useHistory();

  const { Title, Text } = Typography;

  return (
    <Page img={img} title={title} imgStyle={{ ...imgStyle }}>
      <Text>{description}</Text>
      <Title level={3}>Format</Title>
      <Text>
        The {title} tournament format go as follows:
        <ol>
          {format.map((item, i) => (
            <li key={i}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  {item.main}
                  <ol style={{ marginBottom: 0, listStyleType: 'lower-latin' }}>
                    {item.sub.map((subItem, j) => (
                      <li key={`${i}${j}`}>
                        {typeof subItem === 'string' ? (
                          subItem
                        ) : (
                          <>
                            {subItem.main}
                            <ol
                              style={{
                                marginBottom: 0,
                                listStyleType: 'lower-roman'
                              }}
                            >
                              {subItem.sub.map((subSubItem, k) => (
                                <li key={`${i}${j}${k}`}>{subSubItem}</li>
                              ))}
                            </ol>
                          </>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </li>
          ))}
        </ol>
      </Text>
      <Title level={3}>Schedule</Title>
      {schedule ? (
        <>
          <Title level={4}>{schedule.date}</Title>
          <Text>
            * Times are prone to change but this is a rough estimation
          </Text>
          <div style={{ display: 'flex' }}>
            <Calendar
              fullscreen={false}
              value={moment(schedule.moment)}
              style={{ width: 300, marginRight: 20 }}
            />
            <Table
              columns={[
                {
                  title: 'Time',
                  dataIndex: 'time',
                  key: 'time'
                },
                {
                  title: 'Description',
                  dataIndex: 'description',
                  key: 'description'
                }
              ]}
              dataSource={schedule.times}
              pagination={false}
              style={{ maxWidth: 300 }}
            />
          </div>
        </>
      ) : (
        'Coming soon'
      )}
      <div style={{ margin: '20px 0' }}>
        <Button
          size='large'
          type='primary'
          onClick={() => {
            if (user) startGameRegister(game);
            else history.push('/auth');
          }}
          disabled={Boolean(user && user[game].participating)}
        >
          {Boolean(user && user[game].participating)
            ? "You're already signed up"
            : 'Sign Up Now'}
        </Button>
      </div>
    </Page>
  );
};
