import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Divider from '../divider';
import {
  AddAPhotoOutlined,
  ClearSharp,
  InsertEmoticon,
  InsertPhoto,
  LocationOn
} from '@mui/icons-material';
import Image from 'next/image';
import { avatar } from '../../assets/avatar';
import { LoadingButton } from '@mui/lab';

interface PropsOut {
  handleClose: () => void;
}
interface Props {
  openFile?: boolean;
}
const Wrapper = styled.form`
  width: 100%;
  max-width: 500px;
`;
const Container = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
`;
const Account = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Avatar = styled(Image)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const Name = styled.div`
  margin-left: 10px;
`;
const Content = styled.div`
  width: 100%;
`;
const Text = styled.div`
  width: 100%;
  margin-top: 10px;
  outline: none;
  border: none;
  padding: 5px;
  min-height: ${(props: Props) => (props.openFile ? '60px' : '200px')};
  max-height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  margin-bottom: 15px;
`;
const BoxImage = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 300px;
  max-height: 500px;
  border-radius: 8px;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  padding: 5px;
`;
const Select = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const AddImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
  &:hover {
    background-color: #e7e7e7;
  }
`;
const Feature = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  row-gap: 10px;
  border: 1px solid lightgray;
`;
const ButtonPost = styled(LoadingButton)`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background-color: #1b74e4;
  color: #fff;
  text-transform: none;
`;
const Label = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: lightblue;
  }
  cursor: pointer;
`;
const Form = ({ handleClose }: PropsOut) => {
  const [openFile, setOpenFile] = useState<boolean>(false);
  const handleToggleFile = () => {
    setOpenFile(!openFile);
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <Typography variant="h3" fontSize={20} fontWeight={700}>
            New post
          </Typography>
          <Icon onClick={handleClose}>
            <ClearSharp />
          </Icon>
        </Header>
        <Divider color="lightGray" />
        <Body>
          <Account>
            <Avatar
              loader={({ src }) => {
                return src;
              }}
              alt="avatar"
              src={avatar}
              width={50}
              height={50}
            />
            <Name>
              <Typography variant="h3" fontSize={18} fontWeight={700}>
                Ta Huu Hao
              </Typography>
            </Name>
          </Account>
          <Content>
            <Text
              openFile={openFile}
              tabIndex={0}
              contentEditable={true}
              placeholder="Hao oi ban dang nghi gi"
              role={'textbox'}></Text>
            {openFile && (
              <BoxImage>
                <Select htmlFor="file">
                  <AddImage>
                    <Label htmlFor="file">
                      <AddAPhotoOutlined />
                    </Label>
                    <Typography variant="h6" fontSize={16} fontWeight={600}>
                      Add image/video
                    </Typography>
                    <Typography variant="subtitle1" fontSize={12}>
                      or drag and drop
                    </Typography>
                  </AddImage>
                </Select>
                <input id="file" type={'file'} hidden />
              </BoxImage>
            )}
            <Feature>
              <Typography fontWeight={700}>Add to post</Typography>
              <Label onClick={handleToggleFile}>
                <InsertPhoto fontSize="large" sx={{ color: '#00A400' }} />
              </Label>
              <Label>
                <InsertEmoticon fontSize="large" sx={{ color: '#F5C33B' }} />
              </Label>
              <Label>
                <LocationOn fontSize="large" sx={{ color: '#F35369' }} />
              </Label>
            </Feature>
            <ButtonPost disabled={true}>
              <Typography fontWeight={700} fontSize={18} color={'#fff'}>
                Post
              </Typography>
            </ButtonPost>
          </Content>
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Form;
