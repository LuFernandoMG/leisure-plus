import Image from "next/image";
import styles from "./Card.module.scss";
import { Movie, Show } from "@/utils/types";
import { getGenres } from "@/utils/getGenres";
import { FaHeart, FaInfo } from "react-icons/fa6";

interface CardProps {
  element: Movie | Show;
  className?: string;
}

const Card: React.FC<CardProps> = async ({ element }) => {
  let genres = "";

  if ("genre_ids" in element) {
    genres = await getGenres(element.genre_ids || []);
  } else {
    const genresList = element.genres?.map((genre) => genre.name) || [];
    genres = genresList.join(" • ");
  }

  return (
      <div className={`${styles.card} keen-slider__slide`} style={{ overflow: 'visible' }}>
        <div className={styles.card__container}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={(element as Movie).title || (element as Show).name || ""}
          />
          <div className={styles.cardHovered__info}>
            <h3>{(element as Movie).title || (element as Show).name}</h3>
            <p className={styles.movie__genres}>{genres}</p>
            <p className={styles.score}>{`Score: ${element?.vote_average?.toFixed(
              1
            )}/10`}</p>
            <div className={styles.icons}>
              <button>
                <FaInfo />
              </button>
              <button>
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
