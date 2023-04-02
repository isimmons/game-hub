import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import NavBar from '~/components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

import type { Platform, Genre, GameQuery } from './@types';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleOrderBy = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onSelectPlatform={handleSelectPlatform}
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onOrderBy={handleOrderBy}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
