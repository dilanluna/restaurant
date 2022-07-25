import Header from '~/components/header';
import Footer from '~/components/footer';
import banner from '~/assets/banner_menu.jpg';
import { Box, HStack } from '@chakra-ui/react';
import HeroSection from '~/components/hero-section';

export default function Menu() {
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
