"use client";
import React, { useState } from "react";
import styles from "./SidebarFilter.module.scss";

interface SidebarFilterProps {
  applyFilters: (filters: any) => void;
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  genderList: { id: number; name: string }[];
  sortValues: Record<string, string>;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  handleSort,
  sortValues,
  applyFilters,
  genderList,
}) => {
  const [selectedGenders, setSelectedGenders] = useState<number[]>([]);
  const [originCountry, setOriginCountry] = useState<string>("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genderId = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedGenders((prevSelectedGenders) => [
        ...prevSelectedGenders,
        genderId,
      ]);
    } else {
      setSelectedGenders((prevSelectedGenders) =>
        prevSelectedGenders.filter((id) => id !== genderId)
      );
    }
  };

  const handleOriginCountryFilter = (origin: string) => {
    setOriginCountry(origin);
  };

  const handleApplyFilters = () => {
    applyFilters({ selectedGenders, originCountry });
  };

  return (
    <div className={styles.sidebar}>
      <h2>Filters and sorting</h2>
      <div className={styles.sort}>
        <label htmlFor="sort">Sort by:</label>
        <select
          className={styles.select}
          name="sort"
          id="sort"
          onChange={handleSort}
        >
          {Object.entries(sortValues).map(([key, value]) => (
            <option key={key} value={key}>
              {value as React.ReactNode}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.gender}>
        {genderList.map((gender) => (
          <label className={styles.genderLabel} key={gender.id}>
            <input
              type="checkbox"
              value={gender.id}
              checked={selectedGenders.includes(gender.id)}
              onChange={handleGenderChange}
            />
            {gender.name}
          </label>
        ))}
      </div>
      <div className={styles.filterOrigin}>
        <label htmlFor="originCountry">Origin Country:</label>
        <input
            className={styles.originCountry}
          type="text"
          id="originCountry"
          placeholder="ex. 'CO,MX' 'US|VE'"
          onChange={(event) => {
            const originCountry = event.target.value;
            handleOriginCountryFilter(originCountry);
          }}
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default SidebarFilter;
