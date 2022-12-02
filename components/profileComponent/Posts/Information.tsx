import React from 'react';
import styled from '@emotion/styled';
import { IUser } from '../../../pages/profile/[id]';
import { Button, Typography } from '@mui/material';
import { Favorite, Home, LocationOn, RssFeed } from '@mui/icons-material';
import Divider from '../../divider';

const Wrapper = styled.div`
  width: 460px;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
`;
const Container = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Row = styled.div`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BtnUpdate = styled(Button)`
  background-color: #e4e6eb;
  color: #000;
  width: 100%;
  text-transform: none;
  height: 40px;
  margin-bottom: 15px;
`;
const Information = ({ user }: { user: IUser }) => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h3" fontSize={22} fontWeight={600}>
          Giới thiệu
        </Typography>
        <Typography align="center">{user.name}</Typography>
        <Divider color="#dbdbdb" />
        <Row>
          <LocationOn htmlColor="#8f8f8f" />
          <Typography>Vĩnh Ninh Vĩnh Quỳnh Thanh Trì Hà Nội</Typography>
        </Row>
        <Row>
          <Favorite htmlColor="#8f8f8f" />
          <Typography>Độc thân</Typography>
        </Row>
        <Row>
          <Home htmlColor="#8f8f8f" />
          <Typography>Song tai Ha Noi</Typography>
        </Row>
        <Row>
          <RssFeed htmlColor="#8f8f8f" />
          <Typography>
            Co <strong>10</strong> nguoi theo doi
          </Typography>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <BtnUpdate>
            <Typography fontWeight={700}>Chinh sua thong tin</Typography>
          </BtnUpdate>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Information;
