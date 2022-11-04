import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Divider from '../divider';
import Popular from '../popular';
const Wrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Recommened = () => {
  return (
    <Wrapper>
      <Row>
        <Typography
          fontSize={18}
          fontWeight={500}
          sx={{ marginRight: '5px', color: '#050505' }}>
          Recommened
        </Typography>
        <Divider color="#afafaf" />
      </Row>
      <Col>
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </Col>
    </Wrapper>
  );
};

export default Recommened;
