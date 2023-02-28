import {
  Button as ChakraButton,
  forwardRef,
} from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: 0.9,
    },
  },
  outline: {
    variant: 'outline',
    bg: 'white',
    color: 'primary',
  },
};

export type ButtonP = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
} & Omit<React.ComponentProps<typeof ChakraButton>, 'variant'>;

export const Button = forwardRef(
  (
    {
      variant = 'solid',
      type = 'button',
      children,
      icon,
      ...props
    }: ButtonP,
    ref
  ) => {
    return (
      <ChakraButton
        {...variants[variant]}
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
