import { Fragment } from 'react';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '~/hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const loadMore = () => {
    fetchNextPage();
  };

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={loadMore} marginY={5}>
          {isFetchingNextPage ? 'Loading...' : 'Load More...'}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
