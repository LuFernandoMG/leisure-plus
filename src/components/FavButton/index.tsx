"use client";
import { Movie, Show } from "@/utils/types";
import { favoriteStore } from "@/store/favoriteStore";
import { FaHeart } from "react-icons/fa";
import styles from "./FavButton.module.scss";

interface FavButtonProps {
    element: Movie | Show;
    sm?: boolean;
}

const FavButton: React.FC<FavButtonProps> = ({ element, sm }) => {
  const favorites = favoriteStore((state: any) => state.favorites);
  const addFavorite = favoriteStore((state: any) => state.addFavorite);
  const removeFavorite = favoriteStore((state: any) => state.removeFavorite);

  const isInFavorites = favorites.some(
    (fav: Movie | Show) => fav.id === element?.id
  );

  console.log('favorites ', favorites);

  const handleFavorite = () => {
    isInFavorites ? removeFavorite(element) : addFavorite(element);
  };

  return (
    <button
      onClick={handleFavorite}
      className={`${isInFavorites ? styles.fav : styles.icon } ${sm ? styles.sm : ""}`}
    >
      <FaHeart />
    </button>
  );
};

export default FavButton;
