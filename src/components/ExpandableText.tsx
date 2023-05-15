import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  limit?: number;
  children: string;
};

const ExpandableText = ({ limit = 300, children: text }: Props) => {
  if (!text) return null;

  if (text.length <= limit) return <Text>{text}</Text>;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const displayText = isExpanded ? text : `${text.substring(0, limit)}...`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Text>
      {displayText}
      <Button
        onClick={toggleExpansion}
        size="xs"
        marginLeft={3}
        fontWeight="bold"
        colorScheme="yellow"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
