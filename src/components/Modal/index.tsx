import styles from "./Modal.module.scss";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import FavButton from "../FavButton";

type ModalProps = {
  type: string;
  id: string;
  root: string;
};

const Modal: React.FC<ModalProps> = async ({ type, id, root }) => {
  const element = await fetchData({ endpoint: `/${type}/${id}` });

  let genres = "";
  const genresList =
    element?.genres?.map(
      (genre: { id?: number; name?: string }) => genre.name || ""
    ) || [];
  genres = genresList.join(" • ");

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <Image
            src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
            width={750}
            height={420}
            alt={element.name || element.title || ""}
          />
          <div className={styles.img_gradient} />
          <div className={styles.header_info}>
            <>
              <h3 className={styles.modal_title}>{element.name || element.title}</h3>
              <span className={styles.genres}>{genres}</span>
            </>
          </div>
          <div className={styles.close}>
            <Link href={root} scroll={false}>
              <FaXmark />
            </Link>
          </div>
        </div>
        <div className={styles.modal_body}>
          <div className={styles.description_container}>
            <h4>Description</h4>
            <p className={styles.description}>{element.overview}</p>
          </div>
          <div className={styles.general_information}>
            <div className={styles.details}>
              <h4>
                {type === "movie" ? "Release date" : "First transmission"}
              </h4>
              <p>
                {type === "movie"
                  ? element.release_date
                  : element.first_air_date}
              </p>
            </div>
            <div className={styles.details}>
              <h4>Rating</h4>
              <p>{`${Number(element.vote_average).toFixed(1)}/10`}</p>
            </div>
            <div className={styles.details}>
              <h4>{type === "movie" ? "Runtime" : "Episodes"}</h4>
              <p>
                {type === "movie"
                  ? `${element.runtime} min`
                  : `${element.number_of_episodes}`}
              </p>
            </div>
            <div className={styles.icons}>
              <Link href={element.homepage} className={styles.icon}>
                <FaPlay />
              </Link>
              <FavButton element={element} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
