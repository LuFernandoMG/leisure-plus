import { fetchData } from '@/utils/fetchData';
import { Show } from '@/utils/types';
import { create } from 'zustand';

export const tvStore = create((set) => ({
    sort: "popularity.desc",
    setSort: (sort: string) => set({ sort, page: 1, movies: [] }),
    shows: [],
    fetchShows: async (sort: string, page: number, shows: Show[]) => {
        const response = await fetchData({
            endpoint: `/discover/tv?include_adult=false&sort_by=${sort}&page=${page}`,
        });
        set({ shows: [...shows, ...response.results] });
    },
    page: 1,
    setPage: (page: number) => set({ page }),
}));