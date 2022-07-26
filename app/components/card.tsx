import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

export default function Card({
  children,
  opaque = false,
  ...props
}: BoxProps & { opaque?: boolean }) {
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
