import React from 'react';
import Search from '../Search';
import styles from './TrySearch.module.scss';
import Image from 'next/image';

const TrySearch: React.FC = () => {
    return (
        <div className={styles.try_search}>
            <Image src="/assets/cat_sleeping.png" width="640" height="425" alt="Search Image" />
            <Search light />
            <p>Didn't find what you were looking for? Try searching for something else!</p>
        </div>
    );
};

export default TrySearch;