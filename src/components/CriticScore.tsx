import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  const badgeColor = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      colorScheme={badgeColor}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
