import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import router from './routes';

import theme from './theme';
import './index.css';

const isDev = process.env.NODE_ENV === 'development' ? true : false;
const qc = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={qc}>
        <RouterProvider router={router} />
        {isDev && <ReactQueryDevtools />}
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
