import styles from './Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { findAllProducts, setDisplayedProducts, setIsLoading } from '@/redux/actions/product';
import Cards from '../Cards';

const Main = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.product);

  useEffect(() => {

    dispatch(findAllProducts());


  }, []);

  useEffect(() => {

    const displayedProducts = Object.keys(products).map(key => products[key]);
    const formatedDisplayedProduct = displayedProducts.map((product) => ({ ...product, formatted_stockItemAvailableQt: parseFloat(product.formatted_stockItemAvailableQt.replace(',','.').replace(' ',''))}));
    dispatch(setDisplayedProducts(formatedDisplayedProduct));

  }, [products]);

  return (

    <div className={styles.main}>
      
      <h2 className={styles.main__title}>Produits stock null</h2>

      {isLoading &&
        <p>Chargement en cours veuillez patienter</p>
      }

      {!isLoading &&
         <Cards/>
      }
    </div>
  )
};

export default Main;