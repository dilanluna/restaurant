import { useRef } from 'react';
import logo from '~/assets/logo_small.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink as RouterLink } from '@remix-run/react';
import {
  Box,
  Button,
  HStack,
  Img,
  IconButton,
  Link,
  useMediaQuery,
  useToken,
  Drawer,
  useDisclosure,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react';
import NavLink from './nav-link';
import Container from './container';

export default function Header({ opaque = false }: { opaque?: boolean }) {
  const openMenuButton = useRef(null);
  const md = useToken('breakpoints', 'md');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLargeScreen] = useMediaQuery(`(min-width: ${md})`);

  return (
    <Box
      top="0"
      left="0"
      w="100%"
      py={`1.375rem`}
      position="fixed"
      bg={opaque ? 'brand-black' : undefined}
      bgGradient={
        !opaque ? 'linear(to-b, black -26.87%, blackAlpha.50 119%)' : undefined
      }>
      <Container>
        <HStack justifyContent="space-between">
          {isLargeScreen && (
            <HStack spacing={{ base: 6, lg: 10, '2xl': 12 }}>
              <NavLink to="/">Welcome</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/reservation">Reservation</NavLink>
            </HStack>
          )}

          <HStack>
            <Link
              to="/"
              as={RouterLink}>
              <Img
                src={logo}
                alt="48 Cousine"
                height={{ base: '46px', md: '38px', lg: '56px' }}
              />
            </Link>
          </HStack>

          {isLargeScreen && (
            <HStack spacing={{ base: 6, lg: 10, '2xl': 12 }}>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
              <Button
                as={RouterLink}
                to="/reservation"
                variant="primary">
                Order Now
              </Button>
            </HStack>
          )}

          {!isLargeScreen && (
            <IconButton
              fontSize="28px"
              onClick={onOpen}
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              colorScheme="blackAlpha"
            />
          )}

          {!isLargeScreen && (
            <Drawer
              isOpen={isOpen}
              onClose={onClose}
              finalFocusRef={openMenuButton}>
              <DrawerOverlay bg="blackAlpha.500" />

              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody
                  bg="brand-black"
                  borderLeftWidth="1px"
                  borderLeftStyle="solid"
                  borderLeftColor="whiteAlpha.500">
                  <VStack
                    pt="20"
                    spacing="6">
                    <NavLink to="/">Welcome</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/reservation">Reservation</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                    <Button
                      as={RouterLink}
                      to="/reservation"
                      variant="primary">
                      Order Now
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          )}
        </HStack>
      </Container>
    </Box>
  );
}
