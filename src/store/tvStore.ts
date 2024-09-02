import { fetchData } from '@/utils/fetchData';
import { Show } from '@/utils/types';
import { create } from 'zustand';

type tvStoreType = {
    sort: string;
    setSort: (sort: string) => void;
    shows: Show[];
    fetchShows: (sort: string, page: number, shows: Show[]) => Promise<void>;
    page: number;
    setPage: (page: number) => void;
    sortOptions: {
        "popularity.desc": string,
        "popularity.asc": string,
        "vote_average.desc": string,
        "vote_average.asc": string,
        "first_air_date.desc": string,
        "first_air_date.asc": string,
        "name.asc": string,
        "name.desc": string,
        "original_name.asc": string,
        "original_name.desc": string,
      };
};

export const tvStore = create<tvStoreType>((set): tvStoreType => ({
    sort: "popularity.desc",
    setSort: (sort: string) => set({ sort, page: 1, shows: [] }),
    shows: [],
    fetchShows: async (sort: string, page: number, shows: Show[]) => {
        const response = await fetchData({
            endpoint: `/discover/tv?include_adult=false&sort_by=${sort}&page=${page}`,
        });
        set({ shows: [...shows, ...response.results] });
    },
    page: 1,
    setPage: (page: number) => set({ page }),
    sortOptions: {
        "popularity.desc": "Popularity Descending",
        "popularity.asc": "Popularity Ascending",
        "vote_average.desc": "Rating Descending",
        "vote_average.asc": "Rating Ascending",
        "first_air_date.desc": "First Air Date Descending",
        "first_air_date.asc": "First Air Date Ascending",
        "name.asc": "Name Ascending",
        "name.desc": "Name Descending",
        "original_name.asc": "Original Name Ascending",
        "original_name.desc": "Original Name Descending",
      },
}));