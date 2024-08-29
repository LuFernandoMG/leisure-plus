"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Search.module.scss";
import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();


  const handleIconClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call your search function here with the searchTerm
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className={styles.Search}>
      {!isInputVisible ? (
        <button onClick={handleIconClick} className={styles.Search__button_inactive}>
          <FaSearch />
        </button>
      ) : (
        <form onSubmit={handleFormSubmit} className={styles.Search__form}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter search term"
          />
          <button type="submit" className={styles.Search__button}>
            <FaSearch />
          </button>
        </form>
      )}
    </div>
  );
};

export default Search;
