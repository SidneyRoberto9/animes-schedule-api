export class CreateAnimeDto {
  _id?: string;
  title: string;
  title_english: string;
  title_Japanese: string;
  image_url: string;
  type: string;
  episodes: number;
  status: string;
  airing: boolean;
  weekday: string;
  rating: string;
  synopsis: string;
  premiered: string;
  producers: string[];
  licensors: string[];
  studios: string[];
  genres: string[];
  external_links: link[];
}

export interface link {
  nome: string;
  url: string;
}
