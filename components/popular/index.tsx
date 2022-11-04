import React from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { avatar } from '../../assets/avatar';
import { PersonAdd } from '@mui/icons-material';
const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Avatar = styled(Image)`
  margin-right: 15px;
  border-radius: 50%;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Follow = styled(Button)`
  height: 40px;
  text-transform: none;
  background-color: #1b74e4;
  color: white;
  padding: 0 16px;
`;
const Popular = () => {
  return (
    <Wrapper>
      <Row>
        {/* <Account/> */}
        <Avatar
          loader={({ src }) => {
            return src;
          }}
          width={50}
          height={50}
          alt="Avatar"
          src={avatar}
        />
        <Information>
          <Typography fontWeight={600} fontSize={18}>
            Ta Huu Hao
          </Typography>
          <Typography variant="subtitle2">5trieu follow</Typography>
          <Action>
            <Follow startIcon={<PersonAdd />}>
              <Typography fontWeight={500}>Follow</Typography>
            </Follow>
          </Action>
        </Information>
      </Row>
    </Wrapper>
  );
};

export default Popular;
