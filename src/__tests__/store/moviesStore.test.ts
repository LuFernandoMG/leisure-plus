import { moviesStore } from '@/store/moviesStore';
import { fetchData } from '@/utils/fetchData';
import { Movie } from '@/utils/types';

jest.mock('@/utils/fetchData');

const mockFetchData = fetchData as jest.Mock;

const mockMovies: Movie[] = [
  { id: 1, title: 'Movie 1', backdrop_path: '/path1.jpg' },
  { id: 2, title: 'Movie 2', backdrop_path: '/path2.jpg' },
];

describe('moviesStore', () => {
  beforeEach(() => {
    mockFetchData.mockResolvedValue({ results: mockMovies });
  });

  it('should set sort and reset page and movies', () => {
    const { setSort, sort, page, movies } = moviesStore.getState();
    setSort('release_date.desc');
    const state = moviesStore.getState();
    expect(state.sort).toBe('release_date.desc');
    expect(state.page).toBe(1);
    expect(state.movies).toEqual([]);
  });

  it('should fetch movies and update the store', async () => {
    const { fetchMovies, movies } = moviesStore.getState();
    await fetchMovies('popularity.desc', 1, []);
    const state = moviesStore.getState();
    expect(state.movies).toEqual(mockMovies);
  });

  it('should set page', () => {
    const { setPage, page } = moviesStore.getState();
    setPage(2);
    const state = moviesStore.getState();
    expect(state.page).toBe(2);
  });
});
