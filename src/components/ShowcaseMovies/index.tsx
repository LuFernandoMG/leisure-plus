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
import SidebarFilter from "../SidebarFilter";

type ShowcaseProps = {
  data: Record<string, Movie[]>;
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
  const sortValues = moviesStore((state: any) => state.sortOptions);
  const getGenderList = moviesStore((state: any) => state.setGenderList);
  const genderList = moviesStore((state: any) => state.genderList);
  const setFilters = moviesStore((state: any) => state.setFilters);

  useEffect(() => {
    setPage(page + 1);
    fetchMovies(sort, page, movies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, isInView]);

  useEffect(() => {
    getGenderList();
    fetchMovies(sort, page, movies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleFilters = ({ selectedGenders, originCountry }: { selectedGenders: number[], originCountry: string }) => {
    let genderFilter = "";
    let countryFilter = "";

    if (selectedGenders.length) {
      genderFilter = selectedGenders.join(",");
    }

    if (originCountry) {
      countryFilter = originCountry;
    }

    setFilters({ with_genres: genderFilter, with_origin_country: countryFilter, sort });
  };

  return (
    <div className={styles.containerSwitch}>
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
        <div className={styles.grid__layout}>
          <div className={styles.movies__grid}>
            {movies.map((movie: Movie) => (
              <Card element={movie} key={movie.id} clean root="/movies" />
            ))}
          <div ref={scrollTrigger} />
          </div>
          <SidebarFilter genderList={genderList} handleSort={handleSort} sortValues={sortValues} applyFilters={handleFilters} />
        </div>
      )}
      {!isGrid && <div className={styles.movies__list}>{carouselByGenre}</div>}
    </div>
  );
};

export default Showcase;
