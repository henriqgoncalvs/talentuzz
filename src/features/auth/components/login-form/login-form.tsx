import { Stack, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { resolver, z } from '@/lib/schema-validator';

import { useLogin } from '../../api/login';
import { LoginData } from '../../types';

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<LoginData>({
      resolver: resolver(loginFormSchema),
    });

  const onSubmit = (data: LoginData) => {
    login.submit(data);
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing="5"
      w="full"
    >
      <InputField
        label="Email"
        type="email"
        {...register('email', { required: 'Required' })}
        error={formState.errors['email']}
      />
      <InputField
        label="Password"
        type="password"
        {...register('password', {
          required: 'Required',
        })}
        error={formState.errors['password']}
      />

      <Button
        isLoading={login.isLoading}
        isDisabled={login.isLoading}
        type="submit"
      >
        Log in
      </Button>

      <VStack alignItems="center" spacing="2">
        <Text>Don&apos;t have an account?</Text>

        <Link href="/auth/sign-up">Sign up</Link>
      </VStack>
    </Stack>
  );
};
