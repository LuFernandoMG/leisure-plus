import styles from "./page.module.scss";
import { fetchData } from "@/utils/fetchData";
import Carousel from "@/components/Carousel";

export default async function Home() {
  let data = await fetchData({ endpoint: "/movie/popular"});

  return (
    <main className={styles.main}>
      <h1>Popular Movies</h1>
      <div className={styles.movie_container}>
        <Carousel movies={data.results} />
      </div>
    </main>
  );
}
