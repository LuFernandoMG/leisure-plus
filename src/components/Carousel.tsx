"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card } from "./Card";
import { Movie } from "@/utils/types";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  movies: Movie[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ movies, title }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 5,
    },
  });

  return (
    <div className={styles.carousel_wrapper}>
      <h2>{title}</h2>
      <div ref={ref} className="keen-slider" style={{ overflow: 'visible' }}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
