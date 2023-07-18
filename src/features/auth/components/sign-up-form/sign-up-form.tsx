import { Stack, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { resolver, z } from '@/lib/schema-validator';

import { useSignUp } from '../../api/sign-up';
import { SignUpData } from '../../types';

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
    ),
  org_name: z.string(),
  org_email: z.string().email(),
  org_info: z.string(),
  org_phone: z.string(),
  org_location: z.string(),
});

export type SignUpFormProps = {
  onSuccess: () => void;
};

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const signup = useSignUp({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<SignUpData>({
      resolver: resolver(signUpFormSchema),
    });

  const onSubmit = (data: SignUpData) => {
    signup.submit(data);
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
      <InputField
        label="Organization Name"
        type="text"
        {...register('org_name', {
          required: 'Required',
        })}
        error={formState.errors['org_name']}
      />
      <InputField
        label="Organization Email"
        type="email"
        {...register('org_email', {
          required: 'Required',
        })}
        error={formState.errors['org_email']}
      />
      <InputField
        label="Organization Info"
        type="text"
        {...register('org_info', {
          required: 'Required',
        })}
        error={formState.errors['org_info']}
      />
      <InputField
        label="Organization Phone"
        type="text"
        {...register('org_phone', {
          required: 'Required',
        })}
        error={formState.errors['org_phone']}
      />
      <InputField
        label="Organization Location"
        type="text"
        {...register('org_location', {
          required: 'Required',
        })}
        error={formState.errors['org_location']}
      />

      <Button
        isLoading={signup.isLoading}
        isDisabled={signup.isLoading}
        type="submit"
      >
        Sign Up
      </Button>

      <VStack alignItems="center" spacing="2">
        <Text>Already have an account?</Text>

        <Link href="/auth/login">Login</Link>
      </VStack>
    </Stack>
  );
};
