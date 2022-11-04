import styled from '@emotion/styled';
import { ArrowBack, Key, Person } from '@mui/icons-material';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
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
const RegisterBtn = styled(LoadingButton)`
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
  password: string;
  confirmPwd: string;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPwd: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref('password'), null], 'Wrong password')
  })
  .required();

const Register = () => {
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
      <Title title={'Social-register'} />
      <Container>
        <Content>
          <Logo>
            <Branch fontFamily={'monospace'} color={'whitesmoke'} variant="h3">
              Hao Social
            </Branch>
          </Logo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Typography marginBottom={5} variant="h3" fontSize={24}>
              Register New Account
            </Typography>
            <Input>
              <FormControl fullWidth>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    )
                  }}
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  placeholder="your_email@gmail.com"
                />
              </FormControl>
            </Input>
            <Input>
              <FormControl fullWidth>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    )
                  }}
                  {...register('password')}
                  type={'password'}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  placeholder="Password"
                />
              </FormControl>
            </Input>
            <Input>
              <FormControl fullWidth>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    )
                  }}
                  {...register('confirmPwd')}
                  error={!!errors.confirmPwd}
                  helperText={errors.confirmPwd?.message}
                  type={'password'}
                  placeholder="Confirm password"
                />
              </FormControl>
            </Input>
            <Input>
              <RegisterBtn disabled={!isValid} type="submit">
                <Typography
                  color={'whitesmoke'}
                  fontWeight={600}
                  variant="button">
                  Register
                </Typography>
              </RegisterBtn>
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

export default Register;
