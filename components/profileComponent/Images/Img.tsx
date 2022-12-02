import styled from '@emotion/styled';
import { Edit } from '@mui/icons-material';
import React from 'react';

interface Style {
  avatar: string;
}
const Wrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  background-image: url(${(props: Style) => props.avatar});
  background-size: cover;
`;
const BtnEdit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
interface Props {
  image: string;
}
const Img: React.FC<Props> = (props) => {
  return (
    <Wrapper avatar={props.image}>
      <BtnEdit>
        <Edit />
      </BtnEdit>
    </Wrapper>
  );
};

export default Img;
