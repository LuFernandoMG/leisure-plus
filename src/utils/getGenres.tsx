import { fetchData } from "./fetchData";

export async function getGenresList() {
  try {
    const genres = await fetchData({
      endpoint: "/genre/movie/list",
    });

    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}
export async function getGenres(genreIds: number[]): Promise<string[]> {
  try {
    const genres: string[] = [];

    const listOfGenres = await fetchData({
      endpoint: "/genre/movie/list",
    });

    for (const id of genreIds) {
      const genre = listOfGenres.genres.find(
        (genre: { id: number; name: string }) => genre.id === id
      )?.name;
      genres.push(genre);
    }
    
    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}
