import { Movie, Show } from '@/utils/types';
import { create } from 'zustand';

export const favoriteStore = create((set) => ({
    favorites: [],
    addFavorite: (favorite: Movie | Show) => set((state: { favorites: (Movie | Show)[] }) => (
        { favorites: [...state.favorites, favorite] }
    )),
    removeFavorite: (favorite: Movie | Show) => set((state: { favorites: (Movie | Show)[] }) => (
        { favorites: state.favorites.filter((fav: Movie | Show) => fav.id !== favorite.id) }
    )),
}));