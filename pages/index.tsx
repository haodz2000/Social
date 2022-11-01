import { Button } from '@mui/material';
import Link from 'next/link';
import Title from '../components/Title';

export default function Home() {
  return (
    <div>
      <Title title="Social" />
      <Link href={'/login'}>
        <Button>Login</Button>
      </Link>
    </div>
  );
}
