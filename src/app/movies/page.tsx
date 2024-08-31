import Head from "next/head";
import { Movie } from "@/utils/types";
import styles from "./page.module.scss";
import Showcase from "@/components/ShowcaseMovies";
import { getGenresList } from "@/utils/getGenres";
import { fetchData } from "@/utils/fetchData";
import Modal from "@/components/Modal";

type genreElement = {
  id: number;
  name: string;
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Page: React.FC<SearchParamProps> = async ({ searchParams }) => {
  const show = searchParams?.show;
  const type = searchParams?.type;
  const id = searchParams?.id;
  const genresList: genreElement[] = await getGenresList("movie");
  let moviesByGenre: Record<string, Movie[]> = {};

  await Promise.all(
    genresList.map(async (genre: genreElement) => {
      const movies = await fetchData({
        endpoint: `/discover/movie?with_genres=${genre.id}&adult=false`,
      });

      moviesByGenre = {
        ...moviesByGenre,
        [genre.name]: movies.results,
      };
    })
  );

  return (
    <div className={styles.movies__container}>
      <Head>
        <title>Leisure Plus - Movies</title>
        <meta
          name="description"
          content="The best place to find your favorite movies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Movies</h1>
      <Showcase data={moviesByGenre} />
      {show && type && id && <Modal type={type} id={id} root="/movies" />}
    </div>
  );
};

export default Page;
