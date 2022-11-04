import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { ad } from '../../assets/advertisment';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Item = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
`;
const Information = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: calc(100% - 150px - 15px);
  word-break: break-all;
`;
const Advertisment = () => {
  return (
    <Wrapper>
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: '#65676B' }}
        fontSize={17}>
        Được tài trợ
      </Typography>
      <Item>
        <Image
          loader={({ src }) => {
            return src;
          }}
          alt="Advertisment"
          src={ad}
          width={150}
          height={150}
        />
        <Information>
          <Typography
            variant="h1"
            fontSize={18}
            fontWeight={500}
            sx={{ color: '#65676B' }}>
            Laptop gia re aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Typography>
          <Typography></Typography>
        </Information>
      </Item>
    </Wrapper>
  );
};

export default Advertisment;
