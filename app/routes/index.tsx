import Card from '~/components/card';
import Header from '~/components/header';
import Footer from '~/components/footer';
import Container from '~/components/container';
import banner from '~/assets/banner_welcome.jpg';
import HeroSection from '~/components/hero-section';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box pb="10">
      <Header />

      <HeroSection
        cover
        banner={banner}>
        <Container>
          <HStack
            pt="44"
            justifyContent="center">
            <Card
              py="16"
              px="36"
              flex="1"
              maxW="700px">
              <Heading
                as="h1"
                fontSize="9xl"
                textAlign="center"
                lineHeight="0.625">
                48 Cuisine
              </Heading>
              <Text
                px="1.125rem"
                fontSize="lg"
                textAlign="center"
                fontWeight="medium">
                welcome 48 Cuisine. We have a wide variety of Asian food. Cooked
                by profesional chef.
              </Text>
            </Card>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
