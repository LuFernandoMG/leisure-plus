import Image from "next/image";
import styles from "./page.module.scss";
import fetchData from "@/utils/fetchData";

interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export default async function Home() {
  let data = await fetchData({ endpoint: "/movie/popular"});

  return (
    <main className={styles.main}>
      <h1>Popular Movies</h1>
      <ul className={styles.list}>
        {data.results.map((movie: Movie) => (
          <li key={movie.id} className={styles.item}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
