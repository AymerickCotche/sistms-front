import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import * as _ from 'lodash';

import styles from './Search.module.scss';
import { setDisplayedProducts, setSearchInput, setSortingDirection, setSortingSetting } from '@/redux/actions/product';


const Search = () => {

  const dispatch = useDispatch();

  const { displayedProducts } = useSelector((state) => state.product);
  
  const handleChangeSearchInput = (e) => {
    
    dispatch(setSearchInput(e.target.value));
  }

  return(
    <div className={styles.search}>
      <p>
        🔎
      </p>
      <input
        className={styles.search__input}
        type="text"
        onChange={handleChangeSearchInput}
        placeholder="Recherche"
      />

    </div>
  )
};

export default Search;