import type { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

export default function HeroSection({
  children,
  banner,
  cover = false,
}: {
  children: ReactNode;
  banner?: string;
  cover?: boolean;
}) {
  return (
    <Box
      maxW="2560px"
      minH={cover ? '100vh' : '640px'}
      {...(banner && {
        bgSize: 'cover',
        bgRepeat: 'no-repeat',
        bgImage: `url(${banner})`,
        bgPosition: `${cover ? 'bottom' : 'bottom -132px'} center`,
      })}>
      <Box
        w="100%"
        h="100%"
        bgColor="blackAlpha.200">
        {children}
      </Box>
    </Box>
  );
}
