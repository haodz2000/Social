import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
interface Style {
  position: number;
}
const Wrapper = styled.div`
  width: 30%;
  height: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 17%);
`;
const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  box-shadow: 0 11px 16px 0 rgb(0 0 0 / 25%);
`;
const Body = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  gap: 10px;
`;
const Footer = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListMember = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Member = styled.div`
  position: relative;
  left: ${(props: Style) => (-(props.position - 1) % 6) * 15 + 'px'};
  transform: translateX(100%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
`;
const Group = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Avatar />
        </Header>
        <Body>
          <Typography variant="h3" fontSize={20} fontWeight={600}>
            Group
          </Typography>
          <Typography textAlign={'center'}>
            voluptates maiores aliquid? Repellat fuga, laboriosam alias eaque
            quisquam pariatur commodi?
          </Typography>
          <Typography marginTop={1} fontWeight={700}>
            Thành viên nhóm
          </Typography>
        </Body>
        <Footer>
          {/* <Divider color='black' /> */}
          <ListMember>
            {Array.from(Array(6)).map((_, index) => (
              <Member position={index} key={index} />
            ))}
          </ListMember>
          {/* <Divider color='black'/> */}
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default Group;
