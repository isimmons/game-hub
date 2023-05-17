type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Publisher = {
  id: number;
  name: string;
};

type Game = {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers?: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

type Trailer = {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
};

type Screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};
