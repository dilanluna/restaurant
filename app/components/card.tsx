import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

export type CardProps = BoxProps & { opaque?: boolean };

export default function Card({
  children,
  opaque = false,
  ...props
}: CardProps) {
  return (
    <Box
      {...props}
      borderWidth="8px"
      borderStyle="solid"
      borderColor="white"
      bgColor={opaque ? 'brand-black' : 'blackAlpha.800'}>
      {children}
    </Box>
  );
}
