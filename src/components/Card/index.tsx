import Image from "next/image";
import styles from "./Card.module.scss";
import { Movie, Show } from "@/utils/types";
import { FaInfo } from "react-icons/fa6";
import Link from "next/link";
import FavButton from "../FavButton";

interface CardProps {
  element: Movie | Show;
  className?: string;
  clean?: boolean;
  root?: string;
}

const Card: React.FC<CardProps> = ({ element, clean, root }) => {
  const isMovie = (element as Movie).title ? true : false;

  return (
    <div
      className={`${clean ? styles.card : `${styles.card} keen-slider__slide`}`}
      style={{ overflow: "visible" }}
      id="card"
    >
      <div className={styles.card__container}>
        {element && element.backdrop_path && (
          <Image
            src={`${element.backdrop_path ? `https://image.tmdb.org/t/p/w500${element.backdrop_path}` : "@/public/assets/placeholder.png"}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={(element as Movie).title || (element as Show).name || ""}
          />
        )}
        <div className={styles.cardHovered__info}>
          <h3>{(element as Movie).title || (element as Show).name}</h3>
          <p className={styles.score}>
            {`Score: ${element?.vote_average?.toFixed(1)}/10`}
          </p>
          <div className={styles.icons}>
            <Link
              href={
                isMovie
                  ? `${root || '/'}?type=movie&show=true&id=${element.id}`
                  : `${root || '/'}?type=tv&show=true&id=${element.id}`
              }
              scroll={false}
            >
              <FaInfo />
            </Link>
            <FavButton sm element={element} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
