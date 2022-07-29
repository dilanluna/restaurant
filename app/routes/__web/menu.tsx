import Header from '~/components/header';
import banner from '~/assets/banner_menu.jpg';
import HeroCard from '~/components/hero-card';
import Container from '~/components/container';
import HeroSection from '~/components/hero-section';
import type { MetaFunction } from '@remix-run/node';
import { Heading, HStack, Text } from '@chakra-ui/react';

export const meta: MetaFunction = () => ({
  title: 'Menu - 48 Cuisine',
});

export default function Menu() {
  return (
    <>
      <Header />

      <HeroSection banner={banner}>
        <Container>
          <HStack
            justifyContent="center"
            pt={{ base: '40', md: '44' }}>
            <HeroCard px={{ base: '6', md: '24' }}>
              <Heading
                as="h2"
                lineHeight="0.625"
                fontSize={{ base: '8xl', md: '9xl' }}>
                Main Menu
              </Heading>
              <Text
                fontSize="lg"
                px={{ base: '6', md: '4.875rem' }}>
                We have Chinese food, Japanese food, and Korean food
              </Text>
            </HeroCard>
          </HStack>
        </Container>
      </HeroSection>
    </>
  );
}
