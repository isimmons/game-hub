import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box className="main-footer" backgroundColor="gray.700">
      <Text paddingTop={2} color="gray.500">
        Games data provided by: <Link href="https://rawg.io">rawg.io</Link>
      </Text>
    </Box>
  );
};

export default Footer;
