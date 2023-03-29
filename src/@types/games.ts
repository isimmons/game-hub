export type Game = {
  id: number;
  name: string;
};

export type FetchGamesResponse = {
  count: number;
  results: Game[];
};
