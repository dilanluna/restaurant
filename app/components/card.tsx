import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

export type CardProps = Omit<BoxProps, 'border'> & {
  opaque?: boolean;
  border?: 'none' | 'sm' | 'md';
};

export default function Card({
  children,
  border = 'md',
  opaque = false,
  ...props
}: CardProps) {
  return (
    <Box
      {...props}
      borderStyle="solid"
      borderColor="white"
      bgColor={opaque ? 'brand-black' : 'blackAlpha.800'}
      borderWidth={border === 'none' ? '0' : border === 'sm' ? '4px' : '8px'}>
      {children}
    </Box>
  );
}
