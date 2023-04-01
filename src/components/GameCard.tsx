import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import type { Game } from '~/@types/games';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const [title, subTitle] = game.name.split(':');

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{title}</Heading>
        {subTitle && <Heading fontSize="1xl">{subTitle}</Heading>}
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;