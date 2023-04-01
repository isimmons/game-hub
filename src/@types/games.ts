export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
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
