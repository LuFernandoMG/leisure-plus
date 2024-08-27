import { fetchData } from "@/utils/fetchData";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import styles from "./page.module.scss";

export default async function Home() {
  let popularMovies = await fetchData({ endpoint: "/movie/popular"});
  let popularSeries = await fetchData({ endpoint: "/tv/popular"});
  let topRatedMovies = await fetchData({ endpoint: "/movie/top_rated"});
  let topRatedSeries = await fetchData({ endpoint: "/tv/top_rated"});
  let heroMovie = await fetchData({ endpoint: "/movie/592831"});

  return (
    <main className={styles.main}>
      <div className={styles.movie_container}>
        <Hero movie={heroMovie} />
        <Carousel movies={popularMovies.results} title="Popular movies" />
        <Carousel movies={popularSeries.results} title="Popular TV Shows" />
        <Carousel movies={topRatedSeries.results} title="Top rated TV Shows" />
        <Carousel movies={topRatedMovies.results} title="Top rated Movies" />
      </div>
    </main>
  );
}
