import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Liste.module.scss';
import Cardlist from '../Cardlist';
import { setDisplayedProducts } from '@/redux/actions/product';


const Liste = () => {

  const { displayedProducts } = useSelector((state) => state.product);
  const { allProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const cardsJsx = displayedProducts.map(product => <Cardlist key={product.id} product={product}/>)

  return(
    <div className={styles.cards}>
      {cardsJsx}
      
    </div>
  )
};

export default Liste;