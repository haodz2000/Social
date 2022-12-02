import React from 'react';
import styled from '@emotion/styled';
import Post from '../post';
import { IUser } from '../../pages/profile/[id]';
import Information from './Posts/Information';
import ListImage from './Posts/ListImage';
import ListFollowing from './Posts/ListFollowing';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Right = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
interface Props{
  user: IUser;
}
const Posts:React.FC<Props> = ({ user }) => {
  return (
    <Wrapper>
      <Left>
        <Information user={user}/>
        <ListImage/>
        <ListFollowing/>
      </Left>
      <Right>
        <Post />
        <Post />
        <Post />
      </Right>
    </Wrapper>
  );
};

export default Posts;
