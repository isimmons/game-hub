import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { BsChevronDown } from 'react-icons/bs';

type Props = {
  onOrderBy: (sortOrder: string) => void;
  sortOrder: string;
};

const SortSelector = ({ onOrderBy, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  const handleOrderBy = (orderBy: string) => (event: MouseEvent) => {
    event.preventDefault();

    onOrderBy(orderBy);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={handleOrderBy(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;