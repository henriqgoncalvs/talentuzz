import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
} & ChakraButtonProps;

export const Button = forwardRef(
  (
    { type = 'button', children, icon, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <ChakraButton
        {...props}
        type={type}
        leftIcon={icon}
        ref={ref}
      >
        {children}
      </ChakraButton>
    );
  }
);
