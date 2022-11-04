import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Action from './Action';
import Search from './Search';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
  height: 75px;
  box-shadow: 1px 1px 1px 1px rgba(184, 184, 184, 0.2);
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  /* max-width: 1400px; */
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 20%;
  height: 100%;
`;
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Logo href={'/'}>
            <Typography variant="h4" fontWeight={700} color={'blue'}>
              Hao Social
            </Typography>
          </Logo>
        </Left>
        <Center>
          <Search />
        </Center>
        <Right>
          <Action />
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Header;
