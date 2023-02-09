import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import * as _ from 'lodash';

import styles from './Controls.module.scss';
import { setDisplayedProducts, setSortingDirection, setSortingSetting, setViewMode } from '@/redux/actions/product';


const Controls = ({product}) => {

  const dispatch = useDispatch();

  const { displayedProducts } = useSelector((state) => state.product);
  const { sortingSetting } = useSelector((state) => state.product);
  const { sortingDirection } = useSelector((state) => state.product);
  const { viewMode } = useSelector((state) => state.product);

  const sortByName = () => {
    if (sortingSetting !== 'name') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['tradename'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingSetting('name'));
      dispatch(setSortingDirection('asc'));
    } else if (sortingDirection === 'asc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['tradename'], ['desc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('desc'));
    } else if (sortingDirection === 'desc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['tradename'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('asc'));
    }
  }

  const sortByQuantity = () => {
    if (sortingSetting !== 'quantity') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['formatted_stockItemAvailableQt'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingSetting('quantity'));
      dispatch(setSortingDirection('asc'));
    } else if (sortingDirection === 'asc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['formatted_stockItemAvailableQt'], ['desc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('desc'));
    } else if (sortingDirection === 'desc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['formatted_stockItemAvailableQt'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('asc'));
    }
  }

  const sortByPrice = () => {
    if (sortingSetting !== 'price') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['prices.174972.amount'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingSetting('price'));
      dispatch(setSortingDirection('asc'));
    } else if (sortingDirection === 'asc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['prices.174972.amount'], ['desc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('desc'));
    } else if (sortingDirection === 'desc') {
      const newDisplayedProducts = _.orderBy(displayedProducts, ['prices.174972.amount'], ['asc']);
      dispatch(setDisplayedProducts(newDisplayedProducts));
      dispatch(setSortingDirection('asc'));
    }
  }
  const modeCard = () => {
    dispatch(setViewMode('cards'));
  }
  const modeList = () => {
    dispatch(setViewMode('list'));
  }

  return(
    <div className={styles.controls}>
      <div className={styles.controls__sorting}>
        <h3 className={styles.controls__title}>Trier par :</h3>
        <div className={styles.controls__btns}>
          <p
            className={sortingSetting !== 'name' ? styles.controls__btns__btn : sortingDirection !== 'asc' ? `${styles.controls__btns__btn} ${styles.controls__btns__btn__desc}` : `${styles.controls__btns__btn} ${styles.controls__btns__btn__asc}`}
            onClick={sortByName}
          >
            Nom
          </p>
          <p
            className={sortingSetting !== 'quantity' ? styles.controls__btns__btn : sortingDirection !== 'asc' ? `${styles.controls__btns__btn} ${styles.controls__btns__btn__desc}` : `${styles.controls__btns__btn} ${styles.controls__btns__btn__asc}`}
            onClick={sortByQuantity}
          >
            Quantité
          </p>
          <p
            className={sortingSetting !== 'price' ? styles.controls__btns__btn : sortingDirection !== 'asc' ? `${styles.controls__btns__btn} ${styles.controls__btns__btn__desc}` : `${styles.controls__btns__btn} ${styles.controls__btns__btn__asc}`}
            onClick={sortByPrice}
          >
            Prix
          </p>
        </div>
      </div>
      <div className={styles.controls__viewmode}>
      <h3 className={styles.controls__title}>Mode de vue :</h3>
        <div className={styles.controls__btns}>
          <p
            className={viewMode !== 'cards' ? styles.controls__btns__btn : `${styles.controls__btns__btn} ${styles.controls__btns__btn__asc}`}
            onClick={modeCard}
          >
            Carte
          </p>
          <p
            className={viewMode !== 'list' ? styles.controls__btns__btn : `${styles.controls__btns__btn} ${styles.controls__btns__btn__asc}`}
            onClick={modeList}
          >
            Liste
          </p>
        </div>

      </div>
      

      
    </div>
  )
};

export default Controls;