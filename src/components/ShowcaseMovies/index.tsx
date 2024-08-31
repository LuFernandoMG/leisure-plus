"use client";
import { useState, useEffect } from "react";
import styles from "./Showcase.module.scss";
import Carousel from "@/components/Carousel";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { Movie } from "@/utils/types";
import { moviesStore } from "@/store/moviesStore";
import { useInView } from "react-intersection-observer";
import Card from "../Card";

type ShowcaseProps = {
  data: Record<string, Movie[]>;
};

const sortValue = {
  "popularity.desc": "Popularity Descending",
  "popularity.asc": "Popularity Ascending",
  "vote_average.desc": "Rating Descending",
  "vote_average.asc": "Rating Ascending",
  "release_date.desc": "Release Date Descending",
  "release_date.asc": "Release Date Ascending",
  "title.asc": "Title Ascending",
  "title.desc": "Title Descending",
  "primary_release_date.asc": "Release Date Ascending",
  "primary_release_date.desc": "Release Date Descending",
  "original_title.asc": "Original Title Ascending",
  "original_title.desc": "Original Title Descending",
};

const Showcase: React.FC<ShowcaseProps> = ({ data }) => {
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const [scrollTrigger, isInView] = useInView();

  const fetchMovies = moviesStore((state: any) => state.fetchMovies);
  const movies = moviesStore((state: any) => state.movies);
  const sort = moviesStore((state: any) => state.sort);
  const setSort = moviesStore((state: any) => state.setSort);
  const page = moviesStore((state: any) => state.page);
  const setPage = moviesStore((state: any) => state.setPage);

  useEffect(() => {
    setPage(page + 1);
    fetchMovies(sort, page, movies);
  }, [sort, isInView]);

  useEffect(() => {
    fetchMovies(sort, page, movies);
  }, []);

  const handleGrid = () => {
    setIsGrid(!isGrid);
  };

  const carouselByGenre = Object.entries(data).map(([genre, movies]) => (
    <div key={genre} className={styles.carousel_wrapper}>
      <Carousel elements={movies} title={genre} root="/movies" />
    </div>
  ));

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <div className={styles.containerSwitch}>
      <div className={styles.sort}>
        <select className={styles.select} name="sort" id="sort" onChange={handleSort}>
          {Object.entries(sortValue).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.switch}>
        <input type="checkbox" onChange={handleGrid} id="switch" />
        <label htmlFor="switch">
          <div
            className={`${!isGrid ? styles.active : styles.inactive} ${
              styles.left
            }`}
          >
            <FaList />
          </div>
          <div
            className={`${isGrid ? styles.active : styles.inactive} ${
              styles.right
            }`}
          >
            <FiGrid />
          </div>
        </label>
      </div>
      {isGrid && (
        <>
          <div className={styles.movies__grid}>
            {movies.map((movie: Movie) => (
              <Card element={movie} key={movie.id} clean root="/movies" />
            ))}
          </div>
          <div ref={scrollTrigger} />
        </>
      )}
      {!isGrid && <div className={styles.movies__list}>{carouselByGenre}</div>}
    </div>
  );
};

export default Showcase;
