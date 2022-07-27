import Card from '~/components/card';
import Header from '~/components/header';
import Footer from '~/components/footer';
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
            <Card
              py="16"
              px="44"
              flex="1"
              maxW="700px">
              <Heading
                as="h2"
                fontSize="9xl"
                textAlign="center"
                lineHeight="0.625">
                About
              </Heading>
              <Text
                px="6"
                fontSize="lg"
                textAlign="center">
                48 Cuisine Restaurant. We have a wide variety of Asian food.
              </Text>
            </Card>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
