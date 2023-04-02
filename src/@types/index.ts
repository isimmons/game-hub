export type GamePlatform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
};

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export type FetchResponse<T> = {
  count: number;
  results: T[];
};
