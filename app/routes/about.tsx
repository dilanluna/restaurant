import Header from '~/components/header';
import Footer from '~/components/footer';
import HeroCard from '~/components/hero-card';
import banner from '~/assets/banner_about.jpg';
import Container from '~/components/container';
import HeroSection from '~/components/hero-section';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box pb="10">
      <Header />

      <HeroSection banner={banner}>
        <Container>
          <HStack
            pt="44"
            justifyContent="center">
            <HeroCard px="44">
              <Heading
                as="h2"
                fontSize="9xl"
                lineHeight="0.625">
                About
              </Heading>
              <Text
                px="6"
                fontSize="lg">
                48 Cuisine Restaurant. We have a wide variety of Asian food.
              </Text>
            </HeroCard>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
