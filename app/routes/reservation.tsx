import Header from '~/components/header';
import Footer from '~/components/footer';
import { Box, HStack } from '@chakra-ui/react';
import HeroSection from '~/components/hero-section';
import banner from '~/assets/banner_reservation.jpg';

export default function Reservation() {
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
