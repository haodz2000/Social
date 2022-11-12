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
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    border-radius: 10px;
  }
`;
const Information = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: calc(100% - 150px - 15px);
  word-break: break-all;
  gap: 5px;
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
      <Item href="https://www.facebook.com/" target={'_blank'}>
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
          <Typography variant="h1" fontSize={18} fontWeight={500}>
            Laptop gia re nhu cho
          </Typography>
          <Typography fontSize={14} sx={{ color: '#65676B' }}>
            laptop.vn
          </Typography>
        </Information>
      </Item>
      <Item href="https://www.facebook.com/" target={'_blank'}>
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
          <Typography variant="h1" fontSize={18} fontWeight={500}>
            Laptop gia re nhu cho
          </Typography>
          <Typography fontSize={14} sx={{ color: '#65676B' }}>
            laptop.vn
          </Typography>
        </Information>
      </Item>
    </Wrapper>
  );
};

export default Advertisment;
