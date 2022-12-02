import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Link from 'next/link'
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
const BoxListFollower = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
`
const Follower = styled(Link)`
  width: 135px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Avatar = styled.div`
  width: 135px;
  height: 135px;
  background-image: url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  border-radius: 8px;
`
const ListFollowing = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant='h3' fontSize={22} fontWeight={600}>
          Following
        </Typography>
        <BoxListFollower>
          {
            Array.from(Array(9)).map((_,index)=>(
            <Follower href={'profile/1'} key={index}>
              <Avatar/>
              <Typography variant='h3' fontSize={18} fontWeight={500}>
                Ta Huu Hao
              </Typography>
            </Follower>
            ))
          }
        </BoxListFollower>
      </Container>
    </Wrapper>
  )
}

export default ListFollowing
