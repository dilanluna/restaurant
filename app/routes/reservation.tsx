import Card from '~/components/card';
import Header from '~/components/header';
import Footer from '~/components/footer';
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
            <Card
              py="16"
              px="32"
              flex="1"
              maxW="700px">
              <Heading
                as="h2"
                fontSize="9xl"
                textAlign="center"
                lineHeight="0.625">
                Reservation
              </Heading>
              <Text
                px="2.125rem"
                fontSize="lg"
                textAlign="center">
                We have Chinese food, Japanese food, and Korean food
              </Text>
            </Card>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
