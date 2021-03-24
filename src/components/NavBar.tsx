import { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context';
import { Button } from './Button';
import { useAuth } from '../hooks';
import Logo from '../assets/images/logo.png';

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: #000;
  z-index: 999;

  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Menu = styled.ul`
  height: 120px;
  max-width: 1440px;
  padding: 0px;
  margin: 0px;

  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 11px;

  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-right: auto;
  cursor: pointer;
`;

const navBarItems = [
  { name: 'Home', route: '/' },
  { name: 'User Guide', route: '/guide' },
  { name: 'Games', route: '/games' },
  { name: 'Contact Us', route: '/contact' },
  { name: 'Pricing', route: '/pricing', style: { color: '#00C9DD' } }
];

type NavBarProps = {
  dashboard?: boolean;
};

export const NavBar: FC<NavBarProps> = ({ dashboard }) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { setAuth } = useAuth();

  const imgNode = (
    <Img
      src={Logo}
      alt='logo'
      onClick={() => {
        history.push('/');
      }}
    />
  );

  if (dashboard && user) {
    return (
      <Header>
        <Menu>
          {imgNode}
          <Button
            onClick={() => {
              setAuth();
              history.push('/');
            }}
          >
            LOG OUT
          </Button>
        </Menu>
      </Header>
    );
  }

  const navBarItemsNode = navBarItems.map(({ name, route, style }, i) => (
    <MenuItem
      key={i}
      onClick={() => {
        history.push(route);
      }}
      style={style}
    >
      {name}
    </MenuItem>
  ));

  return (
    <Header>
      <Menu>
        {imgNode}
        {navBarItemsNode}
        {user ? (
          <Button
            key='1b'
            onClick={() => {
              history.push('/dashboard');
            }}
          >
            Dashboard
          </Button>
        ) : (
          <Button
            key='1'
            onClick={() => {
              history.push('/login');
            }}
          >
            LOG IN
          </Button>
        )}
      </Menu>
    </Header>
  );
};
