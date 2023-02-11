import {
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input,
  Textarea,
} from '@chakra-ui/react';
import {
  FieldError,
  UseFormRegister,
} from 'react-hook-form';

export type InputFieldP = {
  type?: 'text' | 'email' | 'password' | 'textarea';
  label?: string;
  error?: FieldError;
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const InputField = forwardRef(
  (props: InputFieldP, ref) => {
    const {
      type = 'text',
      label,
      error,
      ...inputProps
    } = props;

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        {type === 'textarea' ? (
          <Textarea
            bg="white"
            rows={8}
            {...inputProps}
            ref={ref}
          />
        ) : (
          <Input
            bg="white"
            type={type}
            {...inputProps}
            ref={ref}
          />
        )}
        {error && (
          <FormHelperText color="red">
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);
