import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import NavBar from '~/components/NavBar';

type ErrorType = {
  status?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as ErrorType;

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <NavBar />
        <Box padding={5}>
          <Heading>Oops...</Heading>
          <Text>This page does not exist</Text>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <Box padding={5}>
          <Heading>Oops...</Heading>
          <Text>An unexpected error occurred</Text>
          {error.status && error.message && (
            <div>
              Error: {error.status}. Sorry, {error.message}
            </div>
          )}
        </Box>
      </>
    );
  }
};

export default ErrorPage;
