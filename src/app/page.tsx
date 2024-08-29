import { fetchData } from "@/utils/fetchData";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Featured from "@/components/Featured";
import Poster from "@/components/Poster";
import TrySearch from "@/components/TrySearch";

export default async function Home() {
  const popularMovies = await fetchData({ endpoint: "/movie/popular" });
  const popularSeries = await fetchData({ endpoint: "/tv/popular" });
  const topRatedMovies = await fetchData({ endpoint: "/movie/top_rated" });
  const topRatedSeries = await fetchData({ endpoint: "/tv/top_rated" });
  const heroMovie = await fetchData({ endpoint: "/movie/592831" });
  const featuredShowHOTD = await fetchData({ endpoint: "/tv/94997" });
  const featuredShowGOT = await fetchData({ endpoint: "/tv/1399" });
  const trendingMovies = await fetchData({ endpoint: "/trending/movie/week" });
  const trendingShows = await fetchData({ endpoint: "/trending/tv/week" });

  return (
    <main className={styles.main}>
      <div className={styles.movie_container}>
        <Hero movie={heroMovie} />
        <Carousel
          elements={popularMovies.results}
          ranking={false}
          title="Popular movies"
        />
        <Featured
          videoUrl="https://www.youtube.com/embed/YN2H_sKcmGw?si=r2v1M_pZpbk-QsN_?autoplay=1&mute=1&controls=0"
          switchSides
          videoTitle="The George RR Martin Universe"
        >
          <div>
            <Poster element={featuredShowGOT} />
            <Poster element={featuredShowHOTD} />
          </div>
        </Featured>
        <Carousel
          elements={trendingMovies.results}
          ranking
          title="Top 9 movies now"
        />
        <Carousel
          elements={popularSeries.results}
          title="Popular TV Shows"
        />
        <Featured
          videoUrl="https://www.youtube.com/embed/17ywQS6XO-M?si=_89_1ORbwb75VLqutl?autoplay=1&mute=1&controls=0"
          videoTitle="Wizarding World"
        />
        <Carousel
          elements={topRatedSeries.results}
          title="Top rated TV Shows"
        />
        <Carousel
          elements={trendingShows.results}
          ranking
          title="Top 9 TV Shows now"
        />
        <Carousel
          elements={topRatedMovies.results}
          title="Top rated Movies"
        />
        <TrySearch />
      </div>
    </main>
  );
}
