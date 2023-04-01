export type Game = {
  id: number;
  name: string;
  background_image: string;
};

export type FetchGamesResponse = {
  count: number;
  results: Game[];
};
