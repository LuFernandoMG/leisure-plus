export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection?: null,
  budget?: 120000000,
  genres?: [ { id: 18, name: 'Drama' }, { id: 878, name: 'Science Fiction' } ],
  homepage?: 'https://www.lionsgate.com/movies/megalopolis',
  imdb_id?: 'tt10128846',
  origin_country?: [ 'US' ],
  production_companies?: [
    {
      id: 70,
      logo_path: '/ueaENQkPcy8rlr5fGZVBXKOhlBh.png',
      name: 'American Zoetrope',
      origin_country: 'US'
    },
    {
      id: 236562,
      logo_path: null,
      name: 'Caesar Film',
      origin_country: 'US'
    }
  ],
  production_countries?: [ { iso_3166_1: 'US', name: 'United States of America' } ],
  revenue?: 0,
  runtime?: 138,
  spoken_languages?: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
  status?: 'Released',
  tagline?: "If you can't see a better future, build one.",
}
