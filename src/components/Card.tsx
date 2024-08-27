import Image from "next/image";
import styles from "./Card.module.scss";
import { Movie } from "@/utils/types";
import { getGenres } from "@/utils/getGenres";
import { FaHeart, FaInfo } from "react-icons/fa6";

interface CardProps {
  movie: Movie;
  className?: string;
}

export const Card: React.FC<CardProps> = async ({ movie }) => {
  const genresList = await getGenres(movie.genre_ids);

  return (
    <div className="keen-slider__slide" key={movie.id} style={{ overflow: "visible", position: 'relative' }}>
      <div className={styles.card} style={{ overflow: "visible" }}>
        <div className={styles.card__container} style={{ zIndex: 100 }}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={movie.title}
          />
          <div className={styles.cardHovered__info}>
            <h3>{movie.title}</h3>
            <p className={styles.movie__genres}>{genresList.join(" • ")}</p>
            <p className={styles.score}>{`Score: ${movie.vote_average.toFixed(
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
    </div>
  );
};
