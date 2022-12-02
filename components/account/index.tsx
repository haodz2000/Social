import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { avatar } from '../../assets/avatar';
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`;
const Avatar = styled(Link)`
  margin-right: 10px;
`;
const Img = styled(Image)`
  border-radius: 50%;
`;
const Name = styled.div``;
const Account = () => {
  return (
    <Wrapper>
      <Avatar href={'/'}>
        <Img
          loader={({ src }) => {
            return src;
          }}
          src={avatar}
          width={50}
          height={50}
          alt="Avatar"
        />
      </Avatar>
      <Name>
        <Typography variant="h6" fontWeight={500} sx={{ color: '#050505' }}>
          Ta Huu Hao
        </Typography>
      </Name>
    </Wrapper>
  );
};

export default Account;
