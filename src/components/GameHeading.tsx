import { Heading } from '@chakra-ui/react';
import useGenre from '~/hooks/useGenre';
import usePlatform from '~/hooks/usePlatform';
import useGameQueryStore from '~/store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = genreId ? useGenre(genreId) : null;
  const platform = platformId ? usePlatform(platformId) : null;

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
