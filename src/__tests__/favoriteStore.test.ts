import { favoriteStore } from '@/store/favoriteStore';
import { Movie, Show } from '@/utils/types';

const mockMovie: Movie = {
  id: 1,
  title: 'Mock Movie',
  backdrop_path: '/mockBackdropPath.jpg',
  // Add other necessary fields
};

const mockShow: Show = {
  id: 2,
  name: 'Mock Show',
  backdrop_path: '/mockBackdropPath.jpg',
  // Add other necessary fields
};

describe('favoriteStore', () => {
  beforeEach(() => {
    // Reset the store before each test
    favoriteStore.setState({ favorites: [] });
  });

  it('should add a favorite movie', () => {
    favoriteStore.getState().addFavorite(mockMovie);
    const favorites = favoriteStore.getState().favorites;
    expect(favorites).toHaveLength(1);
    expect(favorites[0]).toEqual(mockMovie);
  });

  it('should add a favorite show', () => {
    favoriteStore.getState().addFavorite(mockShow);
    const favorites = favoriteStore.getState().favorites;
    expect(favorites).toHaveLength(1);
    expect(favorites[0]).toEqual(mockShow);
  });

  it('should remove a favorite movie', () => {
    favoriteStore.getState().addFavorite(mockMovie);
    favoriteStore.getState().removeFavorite(mockMovie);
    const favorites = favoriteStore.getState().favorites;
    expect(favorites).toHaveLength(0);
  });

  it('should remove a favorite show', () => {
    favoriteStore.getState().addFavorite(mockShow);
    favoriteStore.getState().removeFavorite(mockShow);
    const favorites = favoriteStore.getState().favorites;
    expect(favorites).toHaveLength(0);
  });

  it('should not remove a favorite that does not exist', () => {
    favoriteStore.getState().addFavorite(mockMovie);
    favoriteStore.getState().removeFavorite(mockShow);
    const favorites = favoriteStore.getState().favorites;
    expect(favorites).toHaveLength(1);
    expect(favorites[0]).toEqual(mockMovie);
  });
});