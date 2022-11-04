import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {
  friend,
  group,
  market,
  messenger,
  saved,
  watch
} from '../../assets/icon';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Redirect = styled(Link)`
  width: 100%;
  margin: 10px 0px;
`;
const Item = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: #fff;
    border-radius: 8px;
  }
`;
const Name = styled(Typography)`
  margin-left: 15px;
  font-size: 15px;
  color: #050505;
`;
const Menu = () => {
  return (
    <Wrapper>
      <Container>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={messenger}
              alt="Messenger"
              width={50}
              height={50}
            />
            <Name variant="h1">Messenger</Name>
          </Item>
        </Redirect>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={friend}
              alt="Friend"
              width={50}
              height={50}
            />
            <Name variant="h1">Friends</Name>
          </Item>
        </Redirect>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={group}
              alt="Group"
              width={50}
              height={50}
            />
            <Name variant="h1">Groups</Name>
          </Item>
        </Redirect>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={watch}
              alt="Watch"
              width={50}
              height={50}
            />
            <Name variant="h1">Watch</Name>
          </Item>
        </Redirect>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={market}
              alt="Market"
              width={50}
              height={50}
            />
            <Name variant="h1">Marketplace</Name>
          </Item>
        </Redirect>
        <Redirect href={'/'}>
          <Item>
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={saved}
              alt="Saved"
              width={50}
              height={50}
            />
            <Name variant="h1">Saved</Name>
          </Item>
        </Redirect>
      </Container>
    </Wrapper>
  );
};

export default Menu;
