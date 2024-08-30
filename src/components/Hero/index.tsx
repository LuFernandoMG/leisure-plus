import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { FaGlobe, FaInfo } from "react-icons/fa6";
import FavButton from "../FavButton";

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
          <Image
            className={styles.hero_poster}
            width={500}
            height={720}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || ""}
          />
        </div>
        <div className={styles.information}>
          <span className={styles.hero_title}>
            <h1>{movie.title}</h1>
            <div className={styles.icons}>
              <Link
                href={`/?type=movie&show=true&id=${movie.id}`}
                scroll={false}
              >
                <FaInfo />
              </Link>
              <FavButton sm element={movie} />
              {movie.homepage && (
                <Link href={movie.homepage}>
                  <FaGlobe />
                </Link>
              )}
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
