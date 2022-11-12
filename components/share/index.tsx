import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { avatar } from '../../assets/avatar';
import Divider from '../divider';
import { Button, Slide, Typography } from '@mui/material';
import {
  EmojiEmotionsRounded,
  InsertPhotoRounded,
  VideoCameraFrontRounded
} from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import Form from './Form';

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
`;

const Container = styled.div`
  width: 100%;
  padding: 12px 16px 10px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`;
const Avatar = styled(Image)`
  border-radius: 50%;
`;
const Input = styled.div`
  background-color: #f0f2f5;
  word-break: break-all;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 92%;
  border-radius: 20px;
  padding: 10px 15px;
  color: #65676b;
  outline: none;
  border: none;
  user-select: text;
  white-space: pre-wrap;
  cursor: pointer;
  margin: 0 auto;
`;
const Foot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;
const BtnAction = styled(Button)`
  text-transform: none;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  color: #65676b;
  &:hover {
    background-color: #f0f2f5;
  }
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Share = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <Avatar
            loader={({ src }) => {
              return src;
            }}
            src={avatar}
            alt="Avatar"
            width={40}
            height={40}
          />
          <Input onClick={handleClickOpen}>
            <Typography>Ơ, bạn đang nghĩ gì thế</Typography>
          </Input>
        </Header>
        <Divider color="lightGray" />
        <Foot>
          <BtnAction
            startIcon={
              <VideoCameraFrontRounded
                fontSize="large"
                sx={{ color: '#F3425F' }}
              />
            }>
            <Typography fontWeight={700}>Video trực tiếp</Typography>
          </BtnAction>
          <BtnAction
            startIcon={
              <InsertPhotoRounded fontSize="large" sx={{ color: '#45DB62' }} />
            }>
            <Typography fontWeight={700}>Ảnh/video</Typography>
          </BtnAction>
          <BtnAction
            startIcon={
              <EmojiEmotionsRounded
                fontSize="large"
                sx={{ color: '#F7B928' }}
              />
            }>
            <Typography fontWeight={700}>Feeling/activity</Typography>
          </BtnAction>
        </Foot>
      </Container>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <Form />
      </Dialog>
    </Wrapper>
  );
};

export default Share;
