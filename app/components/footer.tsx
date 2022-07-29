import logo from '~/assets/logo_small.png';
import { Link as RouterLink } from '@remix-run/react';
import { Box, Center, HStack, Img, Link, Stack, Text } from '@chakra-ui/react';
import Container from './container';

export default function Footer() {
  return (
    <Box
      py="10"
      as="footer"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="white">
      <Container>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}>
          <HStack>
            <Link
              to="/"
              as={RouterLink}>
              <Img
                src={logo}
                height="64px"
                alt="48 Cousine"
              />
            </Link>
          </HStack>

          <Stack
            as="nav"
            textAlign="center"
            justifyContent="space-between"
            flex={{ base: 'none', lg: '1' }}
            maxW={{ lg: '620px', xl: '700px' }}
            spacing={{ base: 6, lg: 10, '2xl': 12 }}
            direction={{ base: 'column', md: 'row' }}>
            <Link
              as={RouterLink}
              to="/menu">
              Menu
            </Link>
            <Link
              as={RouterLink}
              to="/reservation">
              Reservation
            </Link>
            <Link
              as={RouterLink}
              to="/about">
              About
            </Link>
            <Link
              as={RouterLink}
              to="/contact-us">
              Contact Us
            </Link>
            <Text>Social Media</Text>
          </Stack>
        </Stack>

        <Center pt={{ base: '8', md: '5' }}>
          <Text>&copy; 48 Cuisine Restaurant. All Rights Reserved. 2022</Text>
        </Center>
      </Container>
    </Box>
  );
}
