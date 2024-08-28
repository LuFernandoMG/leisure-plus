import { fetchData } from "@/utils/fetchData";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Featured from "@/components/Featured";
import Poster from "@/components/Poster";

export default async function Home() {
  const popularMovies = await fetchData({ endpoint: "/movie/popular"});
  const popularSeries = await fetchData({ endpoint: "/tv/popular"});
  const topRatedMovies = await fetchData({ endpoint: "/movie/top_rated"});
  const topRatedSeries = await fetchData({ endpoint: "/tv/top_rated"});
  const heroMovie = await fetchData({ endpoint: "/movie/592831"});
  const featuredShowHOTD = await fetchData({ endpoint: "/tv/94997"}); 
  const featuredShowGOT = await fetchData({ endpoint: "/tv/1399"});

  console.log('featuredShowHOTD', featuredShowHOTD);
  return (
    <main className={styles.main}>
      <div className={styles.movie_container}>
        <Hero movie={heroMovie} />
        <Carousel elements={popularMovies.results} title="Popular movies" />
        <Featured videoUrl="https://www.youtube.com/embed/YN2H_sKcmGw?si=r2v1M_pZpbk-QsN_" switchSides>
          <Poster element={featuredShowGOT} />
          <Poster element={featuredShowHOTD} />
        </Featured>
        <Carousel elements={popularSeries.results} title="Popular TV Shows" />
        <Featured videoUrl="https://www.youtube.com/embed/YN2H_sKcmGw?si=r2v1M_pZpbk-QsN_" switchSides={false}>
          <Poster element={featuredShowGOT} />
          <Poster element={featuredShowHOTD} />
        </Featured>
        <Carousel elements={topRatedSeries.results} title="Top rated TV Shows" />
        <Carousel elements={topRatedMovies.results} title="Top rated Movies" />
      </div>
    </main>
  );
}
