import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '~/services/image-url';
import Emoji from './Emoji';

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const [title, subTitle] = game.name.split(':');

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        {subTitle && <Heading fontSize="1xl">{subTitle}</Heading>}
        <HStack justifyContent="space-between" marginBottom={3}>
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {title}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
