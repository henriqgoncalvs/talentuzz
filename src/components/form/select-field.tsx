import {
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Select,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type SelectFieldP = {
  label?: string;
  error?: FieldError;
  placeholder?: string;
  options: { label: string; value: string }[];
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const SelectField = forwardRef(
  (props: SelectFieldP, ref) => {
    const { label, error, placeholder, options, ...inputProps } =
      props;

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <Select
          placeholder={placeholder}
          ref={ref}
          {...inputProps}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {error && (
          <FormHelperText color="red">
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);
