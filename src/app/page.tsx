'use client';
import styles from "./page.module.scss";
import { fetchData } from "@/utils/fetchData";
import Carousel from "@/components/Carousel";

export default async function Home() {
  let data = await fetchData({ endpoint: "/movie/popular"});

  return (
    <main className={styles.main}>
      <div className={styles.movie_container}>
        <Carousel movies={data.results} title="Popular movies" />
      </div>
    </main>
  );
}
