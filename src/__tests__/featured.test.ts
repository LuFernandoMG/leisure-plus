// import { render, screen } from '@testing-library/react';
// import Featured from '@/components/Featured';
// import { fetchData } from '@/utils/fetchData';

// jest.mock('@/utils/fetchData');

// const mockFetchData = fetchData as jest.Mock;

// const mockHPCollection = {
//   id: 1241,
//   name: 'Harry Potter Collection',
//   parts: [
//     { id: 1, title: 'Harry Potter and the Sorcerer\'s Stone' },
//     { id: 2, title: 'Harry Potter and the Chamber of Secrets' },
//   ],
// };

// describe('Featured Component', () => {
//   beforeEach(() => {
//     mockFetchData.mockResolvedValue(mockHPCollection);
//   });

//   it('renders the Featured component with switchSides true', async () => {
//     render(
//       <Featured
//         switchSides={true}
//         videoUrl="https://example.com/video.mp4"
//         videoTitle="Example Video"
//       >
//         <div>Child Content</div>
//       </Featured>
//     );

//     expect(await screen.findByText('A Fantasy World of Strange Feuding Kingdoms')).toBeInTheDocument();
//     expect(screen.getByText('Explore the worlds of George R. R. Martin and reconnect with those stories that has been in mouth of everyone for the last decade!')).toBeInTheDocument();
//     expect(screen.getByText('Child Content')).toBeInTheDocument();
//     expect(screen.getByTitle('Example Video')).toBeInTheDocument();
//   });

//   it('renders the Featured component with switchSides false', async () => {
//     render(
//       <Featured
//         switchSides={false}
//         videoUrl="https://example.com/video.mp4"
//         videoTitle="Example Video"
//       >
//         <div>Child Content</div>
//       </Featured>
//     );

//     expect(await screen.findByText('A Fantasy World of Strange Feuding Kingdoms')).toBeInTheDocument();
//     expect(screen.getByText('Explore the worlds of George R. R. Martin and reconnect with those stories that has been in mouth of everyone for the last decade!')).toBeInTheDocument();
//     expect(screen.getByText('Child Content')).toBeInTheDocument();
//     expect(screen.getByTitle('Example Video')).toBeInTheDocument();
//   });
// });