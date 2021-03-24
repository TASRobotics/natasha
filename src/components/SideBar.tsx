import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Aside = styled.aside`
  flex: 0 0 364px;
  min-width: 364px;
  max-width: 364px;
  height: calc(100%+120px);
  background-color: #fff;
  z-index: -1;
  margin-top: -120px;
  padding-top: 120px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
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
