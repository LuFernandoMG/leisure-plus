"use client";
import { useState, useEffect } from "react";
import styles from "./Showcase.module.scss";
import Carousel from "@/components/Carousel";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { Show } from "@/utils/types";
import { tvStore } from "@/store/tvStore";
import { useInView } from "react-intersection-observer";
import Card from "../Card";

type ShowcaseProps = {
  data: Record<string, Show[]>;
};

const sortValue = {
  "popularity.desc": "Popularity Descending",
  "popularity.asc": "Popularity Ascending",
  "vote_average.desc": "Rating Descending",
  "vote_average.asc": "Rating Ascending",
  "first_air_date.desc": "First Air Date Descending",
  "first_air_date.asc": "First Air Date Ascending",
  "name.asc": "Name Ascending",
  "name.desc": "Name Descending",
  "original_name.asc": "Original Name Ascending",
  "original_name.desc": "Original Name Descending",
};

const Showcase: React.FC<ShowcaseProps> = ({ data }) => {
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const [scrollTrigger, isInView] = useInView();

  const fetchShows = tvStore((state: any) => state.fetchShows);
  const shows = tvStore((state: any) => state.shows);
  const sort = tvStore((state: any) => state.sort);
  const setSort = tvStore((state: any) => state.setSort);
  const page = tvStore((state: any) => state.page);
  const setPage = tvStore((state: any) => state.setPage);

  useEffect(() => {
    setPage(page + 1);
    fetchShows(sort, page, shows);
  }, [sort, isInView, page, setPage, fetchShows, shows]);

  useEffect(() => {
    fetchShows(sort, page, shows);
  });

  const handleGrid = () => {
    setIsGrid(!isGrid);
  };

  const carouselByGenre = Object.entries(data).map(([genre, movies]) => (
    <div key={genre} className={styles.carousel_wrapper}>
      <Carousel elements={movies} title={genre} root="/series" />
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
            {shows.map((show: Show) => (
              <Card element={show} key={show.id} clean root="/series" />
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
