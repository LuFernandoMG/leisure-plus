'use client';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Card from "../Card";
import Poster from "../Poster";
import { Movie, Show } from "@/utils/types";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  elements: Movie[] | Show[];
  title: string;
  ranking?: boolean;
  root?: string;
}

const Carousel: React.FC<CarouselProps> = ({ elements, title, ranking, root }) => {
  const width = window.innerWidth;
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: width < 600 ?  1 : (width < 1200 ? 3 : 6),
      spacing: 15,
    },
  });

  const elementsToShow = ranking ? elements.slice(0, 9) : elements;

  return (
    <div className={styles.carousel_wrapper} id="slider" style={ranking ? { marginTop: '3rem' } : {}}>
      <h2>{title}</h2>
      {!ranking && (
        <div ref={ref} className="keen-slider" style={{ overflow: "visible" }}>
          {elementsToShow.map((element) => (
            <Card key={element.id} root={root} element={element} />
          ))}
        </div>
      )}
      {ranking && (
        <div className={styles.ranking}>
          {elementsToShow.map((element, index) => (
            <Poster key={element.id} element={element} position={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
