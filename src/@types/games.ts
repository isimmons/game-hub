export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
};

export type GamePlatform = {
  id: number;
  name: string;
  slug: string;
};

export type FetchGamesResponse = {
  count: number;
  results: Game[];
};

export type Genre = {
  id: number;
  name: string;
};

export type FetchGenresResponse = {
  count: number;
  results: Genre[];
};
