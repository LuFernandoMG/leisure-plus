import { Card } from './Card';
import { Movie } from "@/utils/types";
import styles from './Carousel.module.scss';

interface CarouselProps {
    movies: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_container}>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;