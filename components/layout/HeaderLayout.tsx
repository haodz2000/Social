import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '../header';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f2f3f5;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};

export default HeaderLayout;
