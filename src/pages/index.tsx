import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';

const LandingPage = () => {
  return (
    <>
      <Button variant="solid">Click me</Button>
      <InputField label="Name" />
      <Link href="/">Home</Link>
    </>
  );
};

export default LandingPage;
