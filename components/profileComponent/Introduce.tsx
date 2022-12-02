import styled from '@emotion/styled';
import React from 'react';
import { IUser } from '../../pages/profile/[id]';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
interface Props {
  user: IUser;
}
const Introduce: React.FC<Props> = ({ user }) => {
  return <Wrapper>Introduce {user.name}</Wrapper>;
};

export default Introduce;
