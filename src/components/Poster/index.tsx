import Image from "next/image";
import { Movie, Show } from "@/utils/types";
import styles from "./Poster.module.scss";
import Link from "next/link";

interface PosterButtonProps {
  element: Movie | Show;
  position?: number;
}

const PosterButton: React.FC<PosterButtonProps> = ({ element, position }) => {
  const isMovie = (element as Movie).title ? true : false
  return (
    <div className={styles.poster_wrapper}>
      {position && <span className={styles.position}>{position}</span>}
      <Link
        href={
          isMovie
            ? `/?type=movie&show=true&id=${element.id}`
            : `/?type=tv&show=true&id=${element.id}`
        }
        className={`${styles.poster}`}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          height={800}
          width={300}
          alt={
            (element as Movie).original_title || (element as Show).name || ""
          }
        />
      </Link>
    </div>
  );
};

export default PosterButton;
