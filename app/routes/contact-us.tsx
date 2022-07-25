import Header from '~/components/header';
import Footer from '~/components/footer';
import { Box, HStack } from '@chakra-ui/react';
import HeroSection from '~/components/hero-section';

export default function ContactUs() {
  return (
    <Box pb="10">
      <Header opaque />
      <HeroSection>
        <HStack />
      </HeroSection>
      <Footer />
    </Box>
  );
}
