import styled from '@emotion/styled';
import Advertisment from './Advertisment';
import PersonContact from './PersonContact';
const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0;
  overflow-x: hidden;
`;
const RightBar = () => {
  return (
    <Wrapper>
      <Container>
        <Advertisment />
        <PersonContact />
      </Container>
    </Wrapper>
  );
};

export default RightBar;
