import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';


const Card = ({product}) => {

  const dispatch = useDispatch();


  return(
    <div className={styles.card}>
      <div className={styles.card__img}>
        {product.customfields[5].stringval ? 
          <Image
            src={product.customfields[5].stringval}
            alt={`image ${product.name}`}
            fill
          />
          :
          <p className={styles.card__img__error}>Image non disponible</p>
        }
      </div>
      <div className={styles.card__text}>
        <h3 className={styles.card__text__title}>{product.name}</h3>
        <h3 className={styles.card__text__title}>{product.tradename}</h3>
        <div className={styles.card__text__desc}>
          <p className={styles.card__text__desc__item}>Quantité disponible: {product.formatted_stockItemAvailableQt}</p>
          <p className={styles.card__text__desc__item}>Prix TTC : {product.prices['174972'].amount}</p>
          <p className={styles.card__text__desc__item}>Catégorie : {product.categoryName}</p>


        </div>
      </div>
      
    </div>
  )
};

export default Card;