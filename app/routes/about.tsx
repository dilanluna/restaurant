import Header from '~/components/header';
import Footer from '~/components/footer';
import { Box, HStack } from '@chakra-ui/react';
import banner from '~/assets/banner_about.jpg';
import HeroSection from '~/components/hero-section';

export default function About() {
  return (
    <Box pb="10">
      <Header />
      <HeroSection banner={banner}>
        <HStack />
      </HeroSection>
      <Footer />
    </Box>
  );
}
