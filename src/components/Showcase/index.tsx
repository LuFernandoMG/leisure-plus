"use client";
import { useState, useEffect } from "react";
import styles from "./Showcase.module.scss";
import Carousel from "@/components/Carousel";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { Movie, Show } from "@/utils/types";
import { moviesStore } from "@/store/moviesStore";
import { tvStore } from "@/store/tvStore";
import { useInView } from "react-intersection-observer";
import Card from "../Card";
import SidebarFilter from "../SidebarFilter";

type ShowcaseProps = {
  data: Record<string, Movie[]>;
  type: "movies" | "tv";
};

const Showcase: React.FC<ShowcaseProps> = ({ data, type }) => {
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const [scrollTrigger, isInView] = useInView();

  const fetchElements = type === "movies" ? moviesStore((state: any) => state.fetchMovies) : tvStore((state: any) => state.fetchShows);
  const elements = type === "movies" ? moviesStore((state: any) => state.movies) : tvStore((state: any) => state.shows);
  const sort = type === "movies" ? moviesStore((state: any) => state.sort) : tvStore((state: any) => state.sort);
  const setSort = type === "movies" ? moviesStore((state: any) => state.setSort) : tvStore((state: any) => state.setSort);
  const page = type === "movies" ? moviesStore((state: any) => state.page) : tvStore((state: any) => state.page);
  const setPage = type === "movies" ? moviesStore((state: any) => state.setPage) : tvStore((state: any) => state.setPage);
  const sortValues = type === "movies" ? moviesStore((state: any) => state.sortOptions) : tvStore((state: any) => state.sortOptions);
  const getGenderList = type === "movies" ? moviesStore((state: any) => state.setGenderList) : tvStore((state: any) => state.setGenderList);
  const genderList = type === "movies" ? moviesStore((state: any) => state.genderList) : tvStore(( state: any) => state.genderList);
  const setFilters = type === "movies" ? moviesStore((state: any) => state.setFilters) : tvStore((state: any) => state.setFilters);
  const filters = type === "movies" ? moviesStore((state: any) => state.filters) : tvStore((state: any) => state.filters);

  useEffect(() => {
    setPage(page + 1);
    fetchElements(sort, page, elements, filters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, isInView]);

  useEffect(() => {
    getGenderList();
    fetchElements(sort, page, elements, filters);
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
      countryFilter = originCountry.toUpperCase();
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
            {elements.map((element: Movie | Show) => (
              <Card element={element} key={element.id} clean root={type === "movies" ? "/movies" : "/series"} />
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
