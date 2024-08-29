import Image from "next/image";
import { Movie, Show } from "@/utils/types";
import styles from "./Poster.module.scss";

interface PosterButtonProps {
  element: Movie | Show;
  position?: number;
}

const PosterButton: React.FC<PosterButtonProps> = ({ element, position }) => {
  return (
    <div className={styles.poster_wrapper}>
      {position && <span className={styles.position}>{position}</span>}
      <button className={`${styles.poster}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          height={800}
          width={300}
          alt={
            (element as Movie).original_title || (element as Show).name || ""
          }
        />
      </button>
    </div>
  );
};

export default PosterButton;
