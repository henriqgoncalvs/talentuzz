import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9',
    },
  },
  outline: {
    variant: 'outline',
    color: 'primary',
    bg: 'white',
  },
};

export type LinkP = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  variant = 'link',
  shallow = false,
  icon,
}: LinkP) => {
  return (
    <NextLink
      href={href}
      shallow={shallow}
      passHref
      legacyBehavior
    >
      <Button leftIcon={icon} as="a" {...variants[variant]}>
        {children}
      </Button>
    </NextLink>
  );
};
