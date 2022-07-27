import Header from '~/components/header';
import Footer from '~/components/footer';
import HeroCard from '~/components/hero-card';
import Container from '~/components/container';
import HeroSection from '~/components/hero-section';
import banner from '~/assets/banner_reservation.jpg';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

export default function Reservation() {
  return (
    <Box pb="10">
      <Header />

      <HeroSection banner={banner}>
        <Container>
          <HStack
            pt="44"
            justifyContent="center">
            <HeroCard px="32">
              <Heading
                as="h2"
                fontSize="9xl"
                lineHeight="0.625">
                Reservation
              </Heading>
              <Text
                px="2.125rem"
                fontSize="lg">
                We have Chinese food, Japanese food, and Korean food
              </Text>
            </HeroCard>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
