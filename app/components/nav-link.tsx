import type { ReactNode } from 'react';
import { Link } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from '@remix-run/react';
import type { RemixNavLinkProps } from '@remix-run/react/dist/components';

export default function NavLink({
  children,
  ...rest
}: RemixNavLinkProps & { children?: ReactNode }) {
  return (
    <RouterNavLink {...rest}>
      {({ isActive }) => (
        <Link
          as="span"
          fontWeight="semibold"
          fontSize={{ '2xl': 'lg' }}
          color={isActive ? 'brand.500' : undefined}>
          {children}
        </Link>
      )}
    </RouterNavLink>
  );
}
