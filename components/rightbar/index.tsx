import styled from '@emotion/styled';
import Divider from '../divider';
import Advertisment from './Advertisment';
import PersonContact from './PersonContact';
const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  position: relative;
  overflow-y: scroll;
`;
const Container = styled.div`
  position: fixed;
  height: 100%;
  top: 75px;
  overflow-y: scroll;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0;
`;
const RightBar = () => {
  return (
    <Wrapper>
      <Container>
        <Advertisment />
        <Divider color="gray" />
        <PersonContact />
      </Container>
    </Wrapper>
  );
};

export default RightBar;
