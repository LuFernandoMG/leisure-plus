import { fetchData } from '@/utils/fetchData';
import { Movie } from '@/utils/types';
import { create } from 'zustand';

type moviesStoreType = {
    sort: string;
    setSort: (sort: string) => void;
    movies: Movie[];
    fetchMovies: (sort: string, page: number, movies: Movie[]) => Promise<void>;
    page: number;
    setPage: (page: number) => void;
};

export const moviesStore = create<moviesStoreType>((set): moviesStoreType => ({
    sort: "popularity.desc",
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
}));