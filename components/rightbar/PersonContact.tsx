import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Account from '../account';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const PersonContact = () => {
  return (
    <Wrapper>
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: '#65676B' }}
        fontSize={17}>
        Online User
      </Typography>
      <Container>
        <Account />
        <Account />
        <Account />
        <Account />
      </Container>
    </Wrapper>
  );
};

export default PersonContact;
