'use client';
import { Show, Movie } from "@/utils/types";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { favoriteStore } from "@/store/favoriteStore";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Page: React.FC<SearchParamProps> = ({ searchParams }) => {
  const show = searchParams?.show;
  const type = searchParams?.type;
  const id = searchParams?.id;

  const favorites = favoriteStore((state) => state.favorites);

  return (
    <div className={styles.container}>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <div className={styles.results__grid}>
          {favorites.map((element: Movie | Show) => (
            <Card element={element} clean root="/favorites" />
          ))}
        </div>
      ) : (
        <h2>It seems that there is nothing to show here...</h2>
      )}
      {show && type && id && <Modal type={type} id={id} root="/series" />}
    </div>
  );
};

export default Page;
