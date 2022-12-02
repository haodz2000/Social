import React from 'react';
import styled from '@emotion/styled';
import { IUser } from '../../../pages/profile/[id]';
import { Typography } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
`;
const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  position: relative;
`;
const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoreIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;
interface Props {
  user: IUser;
}
const Follower: React.FC<Props> = ({ user }) => {
  return (
    <Wrapper>
      <Container>
        <Avatar />
        <Information>
          <Typography variant="h3" fontSize={18} fontWeight={700}>
            Ta Huu {user.name}
          </Typography>
          <Typography variant="subtitle1" fontSize={13}>
            15 nguoi theo doi
          </Typography>
        </Information>
        <MoreIcon>
          <MoreHoriz />
        </MoreIcon>
      </Container>
    </Wrapper>
  );
};

export default Follower;
