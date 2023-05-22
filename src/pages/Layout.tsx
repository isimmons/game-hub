import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
