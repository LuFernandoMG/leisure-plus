import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/movies/page';
import { getGenresList } from '@/utils/getGenres';
import { fetchData } from '@/utils/fetchData';

jest.mock('@/utils/getGenres');
jest.mock('@/utils/fetchData');
jest.mock('@/components/Modal', () => (props: any) => {
    return null;
});

const mockGetGenresList = getGenresList as jest.Mock;
const mockFetchData = fetchData as jest.Mock;

describe('Page Component', () => {
    beforeEach(() => {
        mockGetGenresList.mockResolvedValue([
            { id: 1, name: 'Action' },
            { id: 2, name: 'Comedy' }
        ]);

        mockFetchData.mockResolvedValue({
            results: [
                { id: 1, title: 'Movie 1' },
                { id: 2, title: 'Movie 2' }
            ]
        });
    });

    it('renders the page component', async () => {
        const searchParams = { show: 'true', type: 'movie', id: '1' };
        const PageComponent = await Page({ searchParams });
        render(PageComponent);

        // Check if the main elements are present
        expect(screen.getByText('Movies')).toBeInTheDocument();
        expect(screen.getByText('Action')).toBeInTheDocument();
        expect(screen.getByText('Comedy')).toBeInTheDocument();
    }); // Increase timeout to 10 seconds
});