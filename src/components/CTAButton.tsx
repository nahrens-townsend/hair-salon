import { Button, type ButtonProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface CTAButtonProps extends ButtonProps {
  to?: string;
  href?: string;
  variant?: 'brand' | 'brandOutline';
}

export default function CTAButton({
  children,
  to,
  href,
  variant = 'brand',
  ...rest
}: CTAButtonProps) {
  const sharedProps = {
    variant,
    px: 8,
    py: 6,
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    fontFamily: 'body',
    fontWeight: '400',
    h: 'auto',
    ...rest,
  };

  if (to) {
    return (
      <Button as={RouterLink} to={to} {...sharedProps}>
        {children}
      </Button>
    );
  }

  if (href) {
    return (
      <Button as="a" href={href} {...sharedProps}>
        {children}
      </Button>
    );
  }

  return <Button {...sharedProps}>{children}</Button>;
}
