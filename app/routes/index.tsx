import Header from '~/components/header';
import Footer from '~/components/footer';
import HeroCard from '~/components/hero-card';
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
            justifyContent="center"
            pt={{ base: '40', md: '44' }}>
            <HeroCard px={{ base: '16', sm: '20', md: '36' }}>
              <Heading
                as="h1"
                lineHeight="0.625"
                fontSize={{ base: '8xl', md: '9xl' }}>
                48 Cuisine
              </Heading>
              <Text
                px="1.125rem"
                fontSize="lg"
                fontWeight="medium">
                welcome 48 Cuisine. We have a wide variety of Asian food. Cooked
                by profesional chef.
              </Text>
            </HeroCard>
          </HStack>
        </Container>
      </HeroSection>

      <Footer />
    </Box>
  );
}
