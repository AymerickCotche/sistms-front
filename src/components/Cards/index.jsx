import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Cards.module.scss';
import Card from '../Card';


const Cards = () => {

  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch();
  console.log('""""""products""""""');

  console.log(typeof(products));
  console.log('""""""products""""""');

  const cardsJsx = Object.keys(products).map((id) => {
    return <Card key={id} product={products[id]}/>
  })

  return(
    <div className={styles.cards}>
      {cardsJsx}
      {cardsJsx}
      {cardsJsx}
      {cardsJsx}
      
    </div>
  )
};

export default Cards;