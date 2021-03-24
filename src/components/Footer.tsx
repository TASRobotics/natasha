import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { Button as LoginButton } from './Button';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  height: 384px;
  background: #ffffff;
  box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;

  padding: 0px 95px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const Box = styled.div`
  max-width: 1440px;
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 22px;
  }
`;

const MenuTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const MenuSubItem = styled.div`
  font-size: 16px;
  color: #0e0e2c;
  font-weight: 500;
`;

const SignupButton = styled(LoginButton)`
  color: #00c9dd;
  background-color: #eae9ff;
  margin-right: 10px;
`;

const RightsContainer = styled.div`
  background-color: #fff;
  font-size: 16px;
  padding-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
  display: flex;
  justify-content: flex-start;
  color: #0e0e2c;
`;

export const Footer = () => {
  return (
    <>
      <Container>
        <Box>
          <Img src={Logo} />
          <Menu>
            <MenuItem>
              <MenuTitle>Home</MenuTitle>
            </MenuItem>
            <MenuItem>
              <MenuTitle>User Guide</MenuTitle>
            </MenuItem>
            <MenuItem>
              <MenuTitle>Games</MenuTitle>
              <MenuSubItem>Top 10</MenuSubItem>
              <MenuSubItem>AR</MenuSubItem>
              <MenuSubItem>VR</MenuSubItem>
            </MenuItem>
            <MenuItem>
              <MenuTitle>Contact Us</MenuTitle>
              <MenuSubItem>Facebook</MenuSubItem>
              <MenuSubItem>Instagram</MenuSubItem>
              <MenuSubItem>YouTube</MenuSubItem>
            </MenuItem>
            <MenuItem>
              <MenuTitle style={{ color: '#00C9DD' }}>Pricing</MenuTitle>
              <MenuSubItem>Top 10</MenuSubItem>
              <MenuSubItem>AR</MenuSubItem>
              <MenuSubItem>VR</MenuSubItem>
            </MenuItem>
          </Menu>
          <div>
            <SignupButton>SIGN UP</SignupButton>
            <LoginButton>LOG IN</LoginButton>
          </div>
        </Box>
      </Container>
      <div style={{ backgroundColor: '#fff' }}>
        <RightsContainer>
          <div>All Rights Reserved</div>
          <div style={{ marginLeft: 'auto' }}>FRC 2021</div>
        </RightsContainer>
      </div>
    </>
  );
};
