import { render, screen } from '@testing-library/react';
import Home  from '@/app/page';

it('renders the Home page ', async () => {
  render(<Home/>)
});

// import { fetchData } from '@/utils/fetchData';

// jest.mock('@/utils/fetchData');

// const mockFetchData = fetchData as jest.Mock;

// const mockMovies = {
//   results: [
//     { id: 1, title: 'Movie 1', backdrop_path: '/path1.jpg' },
//     { id: 2, title: 'Movie 2', backdrop_path: '/path2.jpg' },
//   ],
// };

// const mockShows = {
//   results: [
//     { id: 1, name: 'Show 1', backdrop_path: '/path1.jpg' },
//     { id: 2, name: 'Show 2', backdrop_path: '/path2.jpg' },
//   ],
// };

// const mockHeroMovie = { id: 592831, title: 'Hero Movie', backdrop_path: '/hero.jpg' };
// const mockFeaturedShowHOTD = { id: 94997, name: 'HOTD', backdrop_path: '/hotd.jpg' };
// const mockFeaturedShowGOT = { id: 1399, name: 'GOT', backdrop_path: '/got.jpg' };

// describe('Home Page', () => {
//   beforeEach(() => {
//     mockFetchData.mockImplementation(({ endpoint }) => {
//       switch (endpoint) {
//         case '/movie/popular':
//         case '/trending/movie/week':
//         case '/movie/top_rated':
//           return Promise.resolve(mockMovies);
//         case '/tv/popular':
//         case '/trending/tv/week':
//         case '/tv/top_rated':
//           return Promise.resolve(mockShows);
//         case '/movie/592831':
//           return Promise.resolve(mockHeroMovie);
//         case '/tv/94997':
//           return Promise.resolve(mockFeaturedShowHOTD);
//         case '/tv/1399':
//           return Promise.resolve(mockFeaturedShowGOT);
//         default:
//           return Promise.resolve({});
//       }
//     });
//   });

//   it('renders the Home page with fetched data', async () => {
//     render(<Home searchParams={} />);

//     expect(await screen.findByText('Hero Movie')).toBeInTheDocument();
//     expect(await screen.findByText('Movie 1')).toBeInTheDocument();
//     expect(await screen.findByText('Show 1')).toBeInTheDocument();
//     expect(await screen.findByText('HOTD')).toBeInTheDocument();
//     expect(await screen.findByText('GOT')).toBeInTheDocument();
//   });
// });