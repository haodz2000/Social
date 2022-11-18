import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { avatar } from '../../../assets/avatar';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const Avatar = styled(Link)`
  border-radius: 50%;
  margin-right: 10px;
`;
const Text = styled.div`
  width: 95%;
  word-break: break-all;
  min-height: 30px;
  padding: 10px 15px;
  border-radius: 16px;
  background-color: #f0f2f5;
  color: #65676b;
  border: none;
  outline: none;
`;
const Input = () => {
  return (
    <Wrapper>
      <Avatar href={'/'}>
        <Image
          loader={({ src }) => {
            return src;
          }}
          alt="Avatar"
          src={avatar}
          width={35}
          height={35}
          style={{ borderRadius: '50%' }}
        />
      </Avatar>
      <Text
        tabIndex={0}
        aria-multiline={true}
        role={'textbox'}
        contentEditable={true}
        placeholder={'Write comment...'}></Text>
    </Wrapper>
  );
};

export default Input;
