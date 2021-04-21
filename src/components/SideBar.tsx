import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { MdVideogameAsset } from 'react-icons/md';
import { VscPerson } from 'react-icons/vsc';
import { MdHelp } from 'react-icons/md';

const Aside = styled.aside`
  flex: 0 0 364px;
  min-width: 364px;
  max-width: 364px;
  background-color: #fff;
  margin-top: -120px;
  padding-top: 120px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 94px;
  padding-bottom: 120px;
`;

type MenuItemProps = {
  selected: boolean;
};

const MenuItem = styled.li<MenuItemProps>`
  display: flex;
  width: 250px;
  font-weight: 700;
  padding: 24px 29px;
  font-size: 24px;
  color: #00c9dd;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;

  background-color: ${({ selected }) => (selected ? '#EAE9FF' : null)};
  box-shadow: ${({ selected }) =>
    selected ? '4px 4px 4px rgba(0, 0, 0, 0.25)' : null};
`;

const sideBarItems = [
  { name: 'Account', route: '', icon: <AiOutlineUser /> },
  { name: 'Games', route: '/games', icon: <MdVideogameAsset /> },
  { name: 'Therapist', route: '/therapist', icon: <VscPerson /> },
  { name: 'Help', route: '/help', icon: <MdHelp /> }
];

export const SideBar = () => {
  const history = useHistory();
  const location = useLocation();

  const sideBarItemsNode = sideBarItems.map(({ name, route, icon }, i) => (
    <MenuItem
      key={i}
      onClick={() => {
        history.push(`/dashboard${route}`);
      }}
      selected={location.pathname === `/dashboard${route}`}
    >
      {icon}
      {name}
    </MenuItem>
  ));

  return (
    <Aside>
      <Menu>{sideBarItemsNode}</Menu>
    </Aside>
  );
};
