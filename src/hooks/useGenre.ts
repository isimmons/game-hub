import useGenres from './useGenres';

const useGenre = (id?: number) => {
  const { data: Genres } = useGenres();
  return Genres.results.find((g) => g.id === id);
};

export default useGenre;
