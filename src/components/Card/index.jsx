import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';


const Card = ({product}) => {

  const dispatch = useDispatch();

  
  const findImageUrlField = () => {
    if( _.has(product, 'customfields')) {
      for(const field in product.customfields) {
        if(product.customfields[field].code === 'imageproduit') {
          return product.customfields[field].stringval;
        }
      }
    }
  }

  const getPromoPrice = (price) => {
    const promoPrice = price * 0.80;
    const twoDigitPrice = promoPrice.toFixed(2);
    return twoDigitPrice;
  }

  return(
    <div className={styles.card}>
      <div className={styles.card__img}>
        {findImageUrlField() ? 
          <Image
            src={findImageUrlField()}
            alt={`image ${product.name}`}
            fill
            sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
          />
          :
          <p className={styles.card__img__error}>Image non disponible</p>
        }
      </div>
      <div className={styles.card__text}>
        <h3 className={`${styles.card__text__title} ${styles.card__text__title__ref}`}>{product.name}</h3>
        <h3 className={styles.card__text__title}>{product.tradename}</h3>
        <div className={styles.card__text__desc}>
          <p className={styles.card__text__desc__item}>Prix Remise : {getPromoPrice(product.prices['174972'].amountTaxesFree)}</p>
          <p className={styles.card__text__desc__item}>Quantité disponible: {product.formatted_stockItemAvailableQt}</p>
          <p className={styles.card__text__desc__item}>Prix HT : {product.prices['174972'].formatted_amountTaxesFree}</p>
          <p className={styles.card__text__desc__item}>Catégorie : {product.categoryName}</p>


        </div>
      </div>
      
    </div>
  )
};

export default Card;