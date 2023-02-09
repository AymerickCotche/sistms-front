import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import _ from 'lodash';

import styles from './Category.module.scss';
import { setCategory, setDisplayedProducts, setSearchInput, setSortingDirection, setSortingSetting, setCategories } from '@/redux/actions/product';


const Category = () => {

  const dispatch = useDispatch();

  const { displayedProducts } = useSelector((state) => state.product);
  const { allProducts } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.product);
  
  const handleChangeSelect = (e) => {
    
    dispatch(setCategory(e.target.value));
  }

  useEffect(() => {
    const allCats = [];
    
    allProducts.forEach((product) => {
      if (!allCats.find((cat) => cat === product.categoryName)) {
        allCats.push(product.categoryName);
      }
    })

    dispatch(setCategories(_.sortBy(allCats)));

  }, [allProducts]);

  const categoriesToDisplay = categories.map((category, index) => <option value={category} className={styles.category__select__option} key={index}>{category}</option>)

  return(
    <div className={styles.category}>
      <select
        className={styles.category__select}
        value={category}
        onChange={handleChangeSelect}
      >
        <option value="" className={styles.category__select__option}>TOUTES LES CATEGORIES</option>
        {categoriesToDisplay}
      </select>

    </div>
  )
};

export default Category;