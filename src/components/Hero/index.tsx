import { Movie } from "@/utils/types";
import styles from "./Hero.module.scss";
import { fetchData } from "@/utils/fetchData";
import { FaGlobe, FaHeart, FaInfo } from "react-icons/fa6";

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = async ({ movie }) => {
  const genresList = movie.genres?.map((genre) => genre.name) || [];
  const genres = genresList.join(" • ");

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={styles.hero_content}>
        <div>
          <img
            className={styles.hero_poster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={styles.information}>
          <span className={styles.hero_title}>
            <h1>{movie.title}</h1>
            <div className={styles.icons}>
              <button>
                <FaInfo />
              </button>
              <button>
                <FaHeart />
              </button>
              <button>
                <FaGlobe />
              </button>
            </div>
          </span>
          <p className={styles.hero_genres}>{genres}</p>
          <p className={styles.hero_description}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
