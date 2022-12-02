import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';
import { IUser } from '../../pages/profile/[id]';
import Group from './Group/Group';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
  background-color: #fff;
  margin-bottom: 50px;
`;
const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

interface Props {
  user: IUser;
}
const Groups: React.FC<Props> = ({ user }) => {
  console.log(user);
  return (
    <Wrapper>
      <Container>
        <Typography variant="h1" fontSize={30} fontWeight={700}>
          Nhóm đã tham gia
        </Typography>
        <ListGroup>
          {Array.from(Array(12)).map((_, index) => (
            <Group key={index} />
          ))}
        </ListGroup>
      </Container>
    </Wrapper>
  );
};

export default Groups;
