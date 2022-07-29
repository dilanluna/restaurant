import { Box } from '@chakra-ui/react';
import Footer from '~/components/footer';
import { Outlet } from '@remix-run/react';

export default function Layout() {
  return (
    <Box pb="10">
      <Outlet />

      <Footer />
    </Box>
  );
}
