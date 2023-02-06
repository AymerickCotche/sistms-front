import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Cards.module.scss';
import Card from '../Card';


const Cards = () => {

  const { displayedProducts } = useSelector((state) => state.product)
  const dispatch = useDispatch();

  const cardsJsx = displayedProducts.map(product => <Card key={product.id} product={product}/>)

  return(
    <div className={styles.cards}>
      {cardsJsx}
      
    </div>
  )
};

export default Cards;