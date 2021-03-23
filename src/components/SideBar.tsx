import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Aside = styled.aside`
  flex: 0 0 364px;
  min-width: 364px;
  max-width: 364px;
  height: 100%;
  background-color: #fff;
  z-index: -1;
`;

const Menu = styled.ul``;

const MenuItem = styled.li``;

const sideBarItems = [
  { name: 'Account', route: '/account' },
  { name: 'Games', route: '/games' },
  { name: 'Therapist', route: '/therapist' },
  { name: 'Help', route: '/help' }
];

export const SideBar = () => {
  const history = useHistory();

  const sideBarItemsNode = sideBarItems.map(({ name, route }, i) => (
    <MenuItem
      key={i}
      onClick={() => {
        history.push(route);
      }}
    >
      {name}
    </MenuItem>
  ));

  return (
    <Aside>
      <Menu>{sideBarItemsNode}</Menu>
    </Aside>
  );
};
