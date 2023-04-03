type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

type GameQuery = {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;
};

type FetchResponse<T> = {
  count: number;
  results: T[];
};
