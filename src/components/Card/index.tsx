import Image from "next/image";
import styles from "./Card.module.scss";
import { Movie, Show } from "@/utils/types";
import { getGenres } from "@/utils/getGenres";
import { FaInfo } from "react-icons/fa6";
import Link from "next/link";
import FavButton from "../FavButton";

interface CardProps {
  element: Movie | Show;
  className?: string;
}

const Card: React.FC<CardProps> = async ({ element }) => {
  let genres = "";
  const isMovie = (element as Movie).title ? true : false;

  if ("genre_ids" in element) {
    genres = await getGenres(element.genre_ids || []);
  } else {
    const genresList = element.genres?.map((genre) => genre.name) || [];
    genres = genresList.join(" • ");
  }

  return (
    <div
      className={`${styles.card} keen-slider__slide`}
      style={{ overflow: "visible", position: "relative", zIndex: 1 }}
    >
      <div className={styles.card__container}>
        {element && element.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={(element as Movie).title || (element as Show).name || ""}
          />
        )}
        <div className={styles.cardHovered__info}>
          <h3>{(element as Movie).title || (element as Show).name}</h3>
          <p className={styles.movie__genres}>{genres}</p>
          <p className={styles.score}>
            {`Score: ${element?.vote_average?.toFixed(1)}/10`}
          </p>
          <div className={styles.icons}>
            <Link
              href={
                isMovie
                  ? `/?type=movie&show=true&id=${element.id}`
                  : `/?type=tv&show=true&id=${element.id}`
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
