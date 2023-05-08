import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '~/hooks/usePlatforms';

import type { MouseEvent } from 'react';

type Props = {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  const handleSelectPlatform = (platform: Platform) => (event: MouseEvent) => {
    event.preventDefault();

    onSelectPlatform(platform);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={handleSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
