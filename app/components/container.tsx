import type { ContainerProps } from '@chakra-ui/react';
import { Container as ChakraContainer } from '@chakra-ui/react';

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <ChakraContainer
      {...props}
      maxW={{
        sm: '450px',
        md: '720px',
        lg: '960px',
        xl: '1216px',
        '2xl': '1448px',
      }}>
      {children}
    </ChakraContainer>
  );
}
