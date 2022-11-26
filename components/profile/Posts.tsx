import React from 'react';
import styled from '@emotion/styled';
import Post from '../post';
import { IUser } from '../../pages/profile/[id]';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 500px;
`;
const Right = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Posts = ({ user }: { user: IUser }) => {
  return (
    <Wrapper>
      <Left>{JSON.stringify(user)}</Left>
      <Right>
        <Post />
        <Post />
        <Post />
      </Right>
    </Wrapper>
  );
};

export default Posts;
