import { render, screen } from '@testing-library/react';
import Card from '@/components/Card';
import { Movie } from '@/utils/types';

const mockMovie: Movie = {
  id: 1,
  title: 'Mock Movie',
  backdrop_path: '/mockpath.jpg',
  vote_average: 8.5,
};

describe('Card Component', () => {
  it('renders a movie card', () => {
    render(Card({ element: mockMovie, clean: true, root: '/' }));
    const image = screen.getByAltText('Mock Movie');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fmockpath.jpg&w=3840&q=75');
  });

  it('renders the card', () => {
    render(Card({ element: mockMovie, clean: true, root: '/' }));
    expect(screen.getByText('Mock Movie')).toBeInTheDocument();
  });

  it('renders the score of the card', () => {
    render(Card({ element: mockMovie, clean: true, root: '/' }));
    const scoreElement = screen.getByText('Score: 8.5/10');
    expect(scoreElement).toHaveClass('score');
  });
});