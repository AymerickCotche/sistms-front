import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';


const Card = ({product}) => {

  const dispatch = useDispatch();


  return(
    <div className={styles.card}>
      <h3 className={styles.card__title}>{product.tradename}</h3>
      <div className={styles.card__img}>
        <div>Image</div>
      </div>
      <div className={styles.card__desc}>
        <p className={styles.card__desc__item}>Quantité disponible: {product.formatted_stockItemAvailableQt}</p>
        <p className={styles.card__desc__item}>Prix TTC : {product.prices['174972'].amount}</p>
      </div>
      
    </div>
  )
};

export default Card;