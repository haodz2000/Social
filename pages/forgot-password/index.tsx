import styled from '@emotion/styled';
import { ArrowBack } from '@mui/icons-material';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Title from '../../components/Title';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #7700fb;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`;
const Branch = styled(Typography)`
  box-shadow: 0 19px 73px 0 rgb(0 0 0 / 17%);
`;
const Form = styled.form`
  min-width: 470px;
  padding: 50px 60px;
  background-color: #fff;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0 19px 73px 0 rgb(0 0 0 / 17%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Input = styled.div`
  width: 100%;
  margin: 10px 0;
`;
const SubmitBtn = styled(LoadingButton)`
  background-color: #2d5be3;
  padding: 12px 50px;
  &:hover {
    background-color: #2d5be3;
    opacity: 0.9;
  }
`;
const Login = styled(Button)`
  margin: 0 15px;
  padding: 12px 50px;
  background-color: green;
  border-radius: 6px;
  &:hover {
    background-color: green;
    opacity: 0.9;
  }
`;

interface IFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required().email()
  })
  .required();

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <Wrapper>
      <Title title={'Social-forgot-password'} />
      <Container>
        <Content>
          <Logo>
            <Branch fontFamily={'monospace'} color={'whitesmoke'} variant="h3">
              Hao Social
            </Branch>
          </Logo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              align="center"
              marginBottom={5}
              variant="h3"
              fontSize={24}>
              Forgot password
            </Typography>
            <Input>
              <FormControl fullWidth>
                <TextField
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  placeholder="your_email@gmail.com"
                />
              </FormControl>
            </Input>
            <Input>
              <SubmitBtn disabled={!isValid} type="submit">
                <Typography
                  color={'whitesmoke'}
                  fontWeight={600}
                  variant="button">
                  Submit
                </Typography>
              </SubmitBtn>
              <Link href={'/login'}>
                <Login startIcon={<ArrowBack sx={{ color: 'white' }} />}>
                  <Typography
                    color={'whitesmoke'}
                    fontWeight={600}
                    variant="button">
                    Login
                  </Typography>
                </Login>
              </Link>
            </Input>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
