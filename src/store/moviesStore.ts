import { fetchData } from '@/utils/fetchData';
import { getGenresList } from '@/utils/getGenres';
import { Movie } from '@/utils/types';
import { create } from 'zustand';

type moviesStoreType = {
    sort: string;
    setSort: (sort: string) => void;
    movies: Movie[];
    fetchMovies: (sort: string, page: number, movies: Movie[]) => Promise<void>;
    page: number;
    setPage: (page: number) => void;
    sortOptions: {
        "popularity.desc": string,
        "popularity.asc": string,
        "vote_average.desc": string,
        "vote_average.asc": string,
        "release_date.desc": string,
        "release_date.asc": string,
        "title.asc": string,
        "title.desc": string,
        "primary_release_date.asc": string,
        "primary_release_date.desc": string,
        "original_title.asc": string,
        "original_title.desc": string,
    };
    genderList: { id: number, name: string }[];
    setGenderList: () => void;
    setFilters: ({ with_genres, with_origin_country, sort }: { with_genres: string, with_origin_country: string, sort: string }) => void;
};

export const moviesStore = create<moviesStoreType>((set): moviesStoreType => ({
    sort: "popularity.desc",
    sortOptions: {
        "popularity.desc": "Popularity Descending",
        "popularity.asc": "Popularity Ascending",
        "vote_average.desc": "Rating Descending",
        "vote_average.asc": "Rating Ascending",
        "release_date.desc": "Release Date Descending",
        "release_date.asc": "Release Date Ascending",
        "title.asc": "Title Ascending",
        "title.desc": "Title Descending",
        "primary_release_date.asc": "Release Date Ascending",
        "primary_release_date.desc": "Release Date Descending",
        "original_title.asc": "Original Title Ascending",
        "original_title.desc": "Original Title Descending",
    },
    setSort: (sort: string) => set({ sort, page: 1, movies: [] }),
    movies: [],
    fetchMovies: async (sort: string, page: number, movies: Movie[]) => {
        const response = await fetchData({
            endpoint: `/discover/movie?include_adult=false&sort_by=${sort}&page=${page}`,
        });
        set({ movies: [...movies, ...response.results] });
    },
    page: 1,
    setPage: (page: number) => set({ page }),
    genderList: [],
    setGenderList: async () => {
        const response = await getGenresList("movie");
        set({ genderList: response });
    },
    setFilters: async ({ with_genres, with_origin_country, sort }) => {
        const response = await fetchData({
            endpoint: `/discover/movie?include_adult=false&sort_by=${sort}&with_origin_country=${with_origin_country}&with_genres=${with_genres}&page=1`,
        });
        set({ movies: response.results, page: 1 });
    },
}));