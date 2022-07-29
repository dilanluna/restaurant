import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import type { BoxProps } from '@chakra-ui/react';

type HeroSectionProps = BoxProps & {
  children: ReactNode;
  banner?: string;
  cover?: boolean;
};

export default function HeroSection({
  children,
  banner,
  cover = false,
  ...props
}: HeroSectionProps) {
  return (
    <Box
      {...props}
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
