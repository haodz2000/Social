import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IUser } from '../../pages/profile/[id]';
import { Typography } from '@mui/material';
import Img from './Images/Img';
interface Style {
  active?: boolean;
}
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
  background-color: #fff;
  margin-bottom: 50px;
`;
const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Filter = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const FilerOption = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props: Style) =>
    props.active ? '2px solid #1876d2' : 'none'};
`;
const TextFilterOption = styled(Typography)`
  color: ${(props: Style) => (props.active ? '#1876d2' : 'black')};
`;
const BoxListImage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
`;
interface Props {
  user: IUser;
}
const img: string =
  'https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const Images: React.FC<Props> = ({ user }) => {
  console.log(user);
  const [filter, setFilter] = useState<string>('me');
  return (
    <Wrapper>
      <Container>
        <Header>
          <Typography variant="h3" fontSize={22} fontWeight={600}>
            Images
          </Typography>
        </Header>
        <Filter>
          <FilerOption active={filter === 'me'}>
            <TextFilterOption
              onClick={() => setFilter('me')}
              active={filter === 'me'}
              variant="h3"
              fontSize={18}
              fontWeight={600}>
              Anh cua ban
            </TextFilterOption>
          </FilerOption>
          <FilerOption active={filter === 'album'}>
            <TextFilterOption
              onClick={() => setFilter('album')}
              active={filter === 'album'}
              variant="h3"
              fontSize={18}
              fontWeight={600}>
              Album
            </TextFilterOption>
          </FilerOption>
        </Filter>
        <BoxListImage>
          {Array.from(Array(12)).map((_, index) => (
            <Img image={img} key={index} />
          ))}
        </BoxListImage>
      </Container>
    </Wrapper>
  );
};

export default Images;
