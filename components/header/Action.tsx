import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnAction = styled(Button)`
  background-color: white;
  margin: 0 5px;
  padding: 8px 16px;
`;
const Action = () => {
  return (
    <Wrapper>
      <Link href={'/login'}>
        <BtnAction>
          <Typography color={'black'} fontWeight={600}>
            Login
          </Typography>
        </BtnAction>
      </Link>
      <Link href={'/login'}>
        <BtnAction>
          <Typography color={'black'} fontWeight={600}>
            Register
          </Typography>
        </BtnAction>
      </Link>
    </Wrapper>
  );
};

export default Action;
