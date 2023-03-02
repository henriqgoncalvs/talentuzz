import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Button } from '../button';

export type LinkProps = {
  href: string;
  icon?: JSX.Element;
  shallow?: boolean;
  target?: string;
} & ChakraButtonProps;

export const Link = ({
  href,
  children,
  variant = 'link',
  shallow = false,
  target,
  ...restProps
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      shallow={shallow}
      passHref
      legacyBehavior
    >
      <Button
        as="a"
        target={target}
        variant={variant}
        {...restProps}
      >
        {children}
      </Button>
    </NextLink>
  );
};
