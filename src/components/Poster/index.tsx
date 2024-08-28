import { Movie, Show } from "@/utils/types";
import styles from "./Poster.module.scss";

interface PosterButtonProps {
    element: Movie | Show;
}

const PosterButton: React.FC<PosterButtonProps> = ({ element }) => {
    return (
        <div className={styles.poster_wrapper}>
        <button className={styles.poster}>
            <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={(element as Movie).original_title || (element as Show).name} />
        </button>
        </div>
    );
};

export default PosterButton;