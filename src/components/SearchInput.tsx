import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '~/store';

import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchRef.current) return;

    setSearchText(searchRef.current.value);

    searchRef.current.value = '';

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
