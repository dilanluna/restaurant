import Header from '~/components/header';
import Footer from '~/components/footer';
import { Box, HStack } from '@chakra-ui/react';
import banner from '~/assets/banner_welcome.jpg';
import HeroSection from '~/components/hero-section';

export default function Index() {
  return (
    <Box pb="10">
      <Header />
      <HeroSection
        cover
        banner={banner}>
        <HStack />
      </HeroSection>
      <Footer />
    </Box>
  );
}
