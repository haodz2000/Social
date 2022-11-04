import styled from '@emotion/styled';
import Layout from '../components/layout';
import Post from '../components/post';
import Title from '../components/Title';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;
const Container = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Home() {
  return (
    <Layout>
      <Title title="Social" />
      <Wrapper>
        <Container>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
      </Wrapper>
    </Layout>
  );
}
