import styled from '@emotion/styled';
import Account from '../account';
import Menu from './Menu';
import Recommened from './Recommened';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  /* min-height: calc(100vh - 75px); */
  border-radius: 10px;
  overflow-x: hidden;
  position: relative;
`;
const Container = styled.div`
  position: fixed;
  top: 75px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: hidden;
  }
`;
const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <Account />
        <Menu />
        <Recommened />
      </Container>
    </Wrapper>
  );
};

export default SideBar;
