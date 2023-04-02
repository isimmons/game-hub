import { HStack, Image } from '@chakra-ui/react';

import logo from '~/assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

type Props = {
  onSearch: (query: string) => void;
};

const NavBar = ({ onSearch }: Props) => {
  const handleSearch = (query: string) => {
    onSearch(query);
  };

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={handleSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
