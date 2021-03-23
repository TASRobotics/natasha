import React, { useContext, useState } from 'react';
import { Layout, Menu, Modal, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context';
import { useAuth } from '../hooks';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  background-color: #fff;
  color: #000;
`;

const StyledMenu = styled.ul`
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

const StyledMenuItem = styled.li`
  display: block;
  padding: 20px;
`;

export const NavBar = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const { setAuth } = useAuth();

  return (
    <StyledHeader>
      <StyledMenu>
        {user ? (
          <>
            <StyledMenuItem
              key='1a'
              onClick={() => {
                setLogoutModal(true);
              }}
            >
              Log out
            </StyledMenuItem>
            <StyledMenuItem
              key='1b'
              onClick={() => {
                history.push('/myaccount');
              }}
            >
              My Account
            </StyledMenuItem>
          </>
        ) : (
          <StyledMenuItem
            key='1'
            onClick={() => {
              history.push('/auth');
            }}
          >
            Log in
          </StyledMenuItem>
        )}
        <StyledMenuItem
          key='2'
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </StyledMenuItem>

        <StyledMenuItem
          key='3'
          onClick={() => {
            history.push('/rules');
          }}
        >
          Rules
        </StyledMenuItem>
        <StyledMenuItem
          key='5'
          onClick={() => {
            history.push('/bedwars');
          }}
        >
          Bedwars
        </StyledMenuItem>

        <StyledMenuItem
          key='6'
          onClick={() => {
            history.push('/league');
          }}
        >
          League of Legends
        </StyledMenuItem>
        <StyledMenuItem
          key='7'
          onClick={() => {
            history.push('/valorant');
          }}
        >
          Valorant
        </StyledMenuItem>
        <StyledMenuItem
          key='8'
          onClick={() => {
            history.push('/brawlstars');
          }}
        >
          Brawl Stars
        </StyledMenuItem>
        <StyledMenuItem
          key='4'
          onClick={() => {
            history.push('/csgo');
          }}
        >
          CS:GO
        </StyledMenuItem>
        <StyledMenuItem
          key='9'
          onClick={() => {
            history.push('/aboutus');
          }}
        >
          About Us
        </StyledMenuItem>
      </StyledMenu>
      <Modal
        title='Logout'
        visible={logoutModal}
        onOk={() => {
          setAuth();
          setLogoutModal(false);
        }}
        onCancel={() => {
          setLogoutModal(false);
        }}
        footer={[
          <Button
            key='back'
            onClick={() => {
              setLogoutModal(false);
            }}
          >
            No
          </Button>,
          <Button
            key='submit'
            type='primary'
            onClick={() => {
              setAuth();
              setLogoutModal(false);
            }}
          >
            Yes
          </Button>
        ]}
      >
        Are you sure you want to logout?
      </Modal>
    </StyledHeader>
  );
};
