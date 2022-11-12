import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from '../header';
import SideBar from '../sidebar';
import RightBar from '../rightbar';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f2f3f5;
  overflow-y: scroll;
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
  max-width: calc(1920px - 400px - 400px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <SideBar />
        <Content>{children}</Content>
        <RightBar />
      </Container>
    </Wrapper>
  );
};

export default Layout;
