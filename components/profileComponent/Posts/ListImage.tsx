import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
const Wrapper = styled.div`
  width: 460px;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
`
const Container = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const BoxListImage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`
const Img = styled(Link)`
  width: 135px;
  height: 135px;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
`
const ListImage = () => {
  return (
    <Wrapper>
      <Container>
        <BoxListImage>
        { Array.from(Array(9)).map((_,index)=><Img href={'profile/2'} key={index}/>) }
        </BoxListImage>
      </Container>
    </Wrapper>
  )
}

export default ListImage
