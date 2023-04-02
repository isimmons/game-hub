import { Box } from '@chakra-ui/react';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
