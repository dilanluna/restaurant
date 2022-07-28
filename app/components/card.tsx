import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

export type CardProps = Omit<BoxProps, 'border'> & {
  border?: 'none' | 'sm' | 'md';
  opaque?: 'none' | 'mid' | 'full';
};

export default function Card({
  children,
  border = 'md',
  opaque = 'mid',
  ...props
}: CardProps) {
  return (
    <Box
      {...props}
      borderStyle="solid"
      borderColor="white"
      borderWidth={border === 'none' ? '0' : border === 'sm' ? '4px' : '8px'}
      bgColor={
        opaque === 'full'
          ? 'brand-black'
          : opaque === 'mid'
          ? 'blackAlpha.800'
          : 'transparent'
      }>
      {children}
    </Box>
  );
}
