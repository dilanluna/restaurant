import Header from '~/components/header';
import HeroCard from '~/components/hero-card';
import Container from '~/components/container';
import HeroSection from '~/components/hero-section';
import type { MetaFunction } from '@remix-run/node';
import banner from '~/assets/banner_reservation.jpg';
import { Heading, HStack, Text } from '@chakra-ui/react';

export const meta: MetaFunction = () => ({
  title: 'Reservation - 48 Cuisine',
});

export default function Reservation() {
  return (
    <>
      <Header />

      <HeroSection banner={banner}>
        <Container>
          <HStack
            justifyContent="center"
            pt={{ base: '40', md: '44' }}>
            <HeroCard px={{ base: '10', sm: '14', md: '32' }}>
              <Heading
                as="h2"
                lineHeight="0.625"
                fontSize={{ base: '8xl', md: '9xl' }}>
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
    </>
  );
}
