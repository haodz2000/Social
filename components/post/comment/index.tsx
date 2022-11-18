import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { avatar } from '../../../assets/avatar';
import { Typography } from '@mui/material';
import Link from 'next/link';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
const Avatar = styled(Link)`
  border-radius: 50%;
  margin-right: 10px;
`;
const Text = styled.div`
  position: relative;
  width: auto;
  word-break: break-all;
  min-height: 30px;
  padding: 5px 15px;
  border-radius: 16px;
  background-color: #f0f2f5;
  color: #5b5b50;
  border: none;
  outline: none;
`;
const Name = styled(Link)``;
const Time = styled(Typography)`
  position: absolute;
  bottom: -20px;
  right: 0;
`;
const Comment = () => {
  return (
    <Wrapper>
      <Container>
        <Avatar href={'/'}>
          <Image
            loader={({ src }) => {
              return src;
            }}
            alt="Avatar"
            src={avatar}
            width={35}
            height={35}
            style={{ borderRadius: '50%' }}
          />
        </Avatar>
        <Text>
          <Name href={'/'}>
            <Typography
              variant="h6"
              fontSize={15}
              fontWeight={700}
              color="#363636">
              Ta Huu Hao
            </Typography>
          </Name>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            neque tempora laboriosam debitis officiis maiores accusamus minus.
            Accusantium voluptates natus, nostrum dolorum, excepturi totam sunt
            voluptas ex, sequi quasi ipsam.
          </Typography>
          <Time fontSize={12}>6h ago</Time>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Comment;
