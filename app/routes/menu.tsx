import Card from '~/components/card';
import Header from '~/components/header';
import Footer from '~/components/footer';
import banner from '~/assets/banner_menu.jpg';
import Container from '~/components/container';
import HeroSection from '~/components/hero-section';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

export default function Menu() {
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
              px="24"
              flex="1"
              maxW="700px">
              <Heading
                as="h2"
                fontSize="9xl"
                textAlign="center"
                lineHeight="0.625">
                Main Menu
              </Heading>
              <Text
                px="4.875rem"
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
