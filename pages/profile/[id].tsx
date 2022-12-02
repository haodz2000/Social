import React, { useState } from 'react';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import HeaderLayout from '../../components/layout/HeaderLayout';
import Image from 'next/image';
import { avatar } from '../../assets/avatar';
import { Button, Typography } from '@mui/material';
import { AddCircle, ModeEdit } from '@mui/icons-material';
import Divider from '../../components/divider';
import Posts from '../../components/profileComponent/Posts';
import Introduce from '../../components/profileComponent/Introduce';
export interface IUser {
  id: string;
  name: string;
  coverPicture: string;
  avatar: string;
}
const Header = styled.div`
  width: 100%;
  max-width: 1920px;
  background: #fff;
  height: 800px;
  display: flex;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
  border-bottom: 1px solid rgb(0 0 0 / 17%);
  flex-direction: column;
`;
const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Body = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: #f2f3f5;
`;
const Menu = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  color: ${(props: Props) => (props.active ? 'blue' : '#65676B')};
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: ${(props: Props) =>
    props.active ? '4px solid blue' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FootHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Left = styled.div`
  width: 600px;
  display: flex;
  gap: 20px;
`;
const ImageAvatar = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  margin-top: -50px;
  z-index: 1;
  box-shadow: 1px 1px 5px white;
`;
const BoxName = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BoxAvatarFriend = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;
const AvatarFriend = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;
interface Props {
  active?: boolean;
}
const Right = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
const CoverPicture = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  background-color: #c5c5c5;
  object-fit: contain;
  border-radius: 8px;
  margin: 0 auto 15px;
`;
const ButtonEdit = styled(Button)`
  height: 36px;
  background-color: #e4e6eb;
  text-transform: none;
  color: #050505;
  padding: 5px 15px;
`;
const ButtonFollow = styled(Button)`
  height: 36px;
  background-color: #1b74e4;
  text-transform: none;
  color: #fff;
  padding: 5px 15px;
  &:hover {
    background-color: #1b74e4;
    opacity: 0.8;
  }
`;
const listUsers: IUser[] = [
  {
    id: '1',
    name: 'Hao',
    coverPicture: 'aaaa',
    avatar: 'aaaa'
  },
  {
    id: '1',
    name: 'Hao',
    coverPicture: 'aaaa',
    avatar: 'aaaa'
  },
  {
    id: '1',
    name: 'Hao',
    coverPicture: 'aaaa',
    avatar: 'aaaa'
  }
];
interface Params {
  id: string;
}
const Profile = ({ user }: { user: IUser }) => {
  const [page,setPage] = useState<string>('posts')
  return (
    <HeaderLayout>
      <Title title="Profile" />
      <Header>
        <ContainerHeader>
          <CoverPicture></CoverPicture>
          <FootHeader>
            <Left>
              <ImageAvatar
                loader={({ src }) => {
                  return src;
                }}
                src={avatar}
                alt="avatar"
                width={200}
                height={200}
              />
              <BoxName>
                <Typography variant="h1" fontSize={30} fontWeight={700}>
                  Ta Huu Hao
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={13}
                  color={'#05050b'}
                  fontWeight={700}>
                  665 ban be
                </Typography>
                <BoxAvatarFriend>
                  <AvatarFriend
                    loader={({ src }) => {
                      return src;
                    }}
                    alt={'friend'}
                    src={avatar}
                    height={30}
                    width={30}
                    loading="lazy"
                  />
                </BoxAvatarFriend>
              </BoxName>
            </Left>
            <Right>
              <ButtonFollow startIcon={<AddCircle />}>
                <Typography fontWeight={700}>Theo doi</Typography>
              </ButtonFollow>
              <ButtonEdit startIcon={<ModeEdit />}>
                <Typography fontWeight={700}>
                  Chinh sua trang ca nhan
                </Typography>
              </ButtonEdit>
            </Right>
          </FootHeader>
          <Divider color="lightGray" />
          <Menu>
            <MenuItem onClick={()=>setPage('posts')} active={page==='post'}>
              <Typography fontWeight={700}>Posts</Typography>
            </MenuItem>
            <MenuItem onClick={()=>setPage('introduce')} active={page ==='introduce'}>
              <Typography fontWeight={700}>Introduce</Typography>
            </MenuItem>
            <MenuItem onClick={()=>setPage('friend')} active={page ==='friend'}>
              <Typography fontWeight={700}>Friend</Typography>
            </MenuItem>
            <MenuItem onClick={()=>setPage('images')} active={page ==='images'}>
              <Typography fontWeight={700}>Images</Typography>
            </MenuItem>
          </Menu>
        </ContainerHeader>
      </Header>
      <Body>
        {page=== 'posts'&&<Posts user={user} />}
        {page=== 'introduce'&&<Introduce/>}
        {page=== 'friend'&&<h1>Friend </h1>}
        {page=== 'images'&&<h1>Images</h1>}
      </Body>
    </HeaderLayout>
  );
};

export default Profile;
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const paths = listUsers.map((user) => ({
    params: { id: user.id }
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }: { params: Params }) {
  const user = listUsers.find((item) => item.id === params.id);
  return { props: { user } };
}
