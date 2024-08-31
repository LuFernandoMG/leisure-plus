import { fetchData } from '@/utils/fetchData';
import { Movie } from '@/utils/types';
import { create } from 'zustand';

export const moviesStore = create((set) => ({
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