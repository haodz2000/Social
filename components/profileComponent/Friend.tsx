import React from 'react'
import styled from '@emotion/styled';
import { IUser } from '../../pages/profile/[id]';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

interface Props{
  user: IUser;
}
const Friend:React.FC<Props> = ({user}) => {
  return (
    <Wrapper>
      Friend
    </Wrapper>
  )
}

export default Friend
