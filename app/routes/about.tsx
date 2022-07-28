import Card from '~/components/card';
import { json } from '@remix-run/node';
import Header from '~/components/header';
import Footer from '~/components/footer';
import HeroCard from '~/components/hero-card';
import banner from '~/assets/banner_about.jpg';
import Container from '~/components/container';
import { useLoaderData } from '@remix-run/react';
import HeroSection from '~/components/hero-section';
import SectionSpacer from '~/components/section-spacer';
import alisonPicture from '~/assets/teammate_alison.jpg';
import bannerStory from '~/assets/banner_about_story.jpg';
import mrNakaPicture from '~/assets/teammate_mr_naka.jpg';
import mrIzumiPicture from '~/assets/teammate_mr_izumi.jpg';
import davidZainPicture from '~/assets/teammate_david_zain.jpg';
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node';
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useToken,
  VStack,
} from '@chakra-ui/react';

type Teammate = {
  name: string;
  role: string;
  picture: string;
};

function TeammateCard({
  name,
  role,
  picture,
}: {
  name: string;
  role: string;
  picture: string;
}) {
  const bodyFonts = useToken('fonts', 'body');

  return (
    <Card
      border="none"
      opaque="none">
      <AspectRatio ratio={3 / 4}>
        <Img
          src={picture}
          alt={`${name}, ${role}`}
        />
      </AspectRatio>

      <Box
        pt="5"
        textAlign="center">
        <Heading
          as="h5"
          fontSize="2xl"
          fontWeight="medium"
          fontFamily={bodyFonts}>
          {name}
        </Heading>
        <Text>{role}</Text>
      </Box>
    </Card>
  );
}

export const meta: MetaFunction = () => ({
  title: 'About - 48 Cuisine',
});

// hack to get the links to work
export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: alisonPicture,
    as: 'image',
  },
  {
    rel: 'preload',
    href: mrNakaPicture,
    as: 'image',
  },
  {
    rel: 'preload',
    href: mrIzumiPicture,
    as: 'image',
  },
  {
    rel: 'preload',
    href: davidZainPicture,
    as: 'image',
  },
];

export const loader: LoaderFunction = async () => {
  return json([
    { name: 'Mr. Izumi', role: 'Mananger', picture: mrIzumiPicture },
    { name: 'Mr. Naka', role: 'Head Chef', picture: mrNakaPicture },
    { name: 'David Zain', role: 'Chef', picture: davidZainPicture },
    { name: 'Alison', role: 'Sous Chef', picture: alisonPicture },
  ]);
};

export default function About() {
  const team = useLoaderData<Teammate[]>();

  return (
    <Box pb="10">
      <Header />

      <HeroSection
        as="header"
        banner={banner}>
        <Container>
          <HStack
            justifyContent="center"
            pt={{ base: '40', md: '44' }}>
            <HeroCard px={{ base: '16', sm: '20', md: '44' }}>
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

      <SectionSpacer />

      <Container as="section">
        <Stack
          alignItems="center"
          justifyContent="space-between"
          spacing={{ base: '20', lg: '0' }}
          direction={{ base: 'column', lg: 'row' }}>
          <VStack
            spacing="8"
            alignItems="flex-start"
            maxW={{ lg: '420px', xl: '520px' }}>
            <Heading
              as="h3"
              maxW="339px"
              fontSize="6xl"
              lineHeight="1">
              Story 48 Cuisine Restaurant
            </Heading>

            <VStack
              spacing="6"
              alignItems="flex-start">
              <Text fontSize="lg">
                Welcome to the 48 Cuisine Restaurant. This restaurant was
                founded in 2012 with the concept of Asian food fine dining, and
                cooked by professional chef.
              </Text>
              <Text fontSize="lg">
                Our restaurant provides a variety of Asian dishes including
                Chinese food, Japanese Food, Korean Food.
              </Text>
              <Text fontSize="lg">
                We have 3 restaurants with 3 different concepts. first outdoor
                restaurant with a lakeside view. second, a classic concept
                restaurant with a beautiful rustic feel. third, a restaurant
                with a modern concept in the middle of the city.
              </Text>
            </VStack>
          </VStack>

          <AspectRatio
            w="432px"
            ratio={2 / 3}>
            <Img
              src={bannerStory}
              alt="Cooking asian food"
            />
          </AspectRatio>
        </Stack>
      </Container>

      <SectionSpacer />

      <Container as="section">
        <VStack
          spacing="20"
          alignItems="streach">
          <Box
            mx="auto"
            maxW="520px"
            textAlign="center">
            <Heading
              as="h3"
              fontSize="8xl">
              Our Team
            </Heading>
            <Text fontSize="lg">
              We have a team of professional chefs who have worked in the
              culinary world for decades.
            </Text>
          </Box>

          <SimpleGrid
            rowGap="10"
            columnGap="5"
            columns={{ base: 1, md: 2, lg: 4 }}>
            {team.map((teammate) => (
              <TeammateCard
                key={teammate.name}
                name={teammate.name}
                role={teammate.role}
                picture={teammate.picture}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <SectionSpacer />

      <Footer />
    </Box>
  );
}
