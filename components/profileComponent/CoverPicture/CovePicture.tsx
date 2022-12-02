import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  background-color: #c5c5c5;
  object-fit: contain;
  border-radius: 8px;
  margin: 0 auto 15px;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: contain;
  position: relative;
`;
const BtnUpdate = styled(Button)`
  position: absolute;
  right: 5px;
  top: 99%;
  transform: translateY(-100%);
  text-transform: none;
  background-color: #fff;
  color: black;
  &:hover {
    background-color: #ebe9e9;
  }
`;
const CoverPicture = () => {
  return (
    <Wrapper>
      <BtnUpdate startIcon={<CameraAlt />}>
        <Typography fontWeight={600}>Them anh bia</Typography>
      </BtnUpdate>
    </Wrapper>
  );
};

export default CoverPicture;
