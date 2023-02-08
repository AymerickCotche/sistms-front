import _ from 'lodash';
import styles from './Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { findAllProducts, setAllProducts, setDisplayedProducts, setIsLoading } from '@/redux/actions/product';
import Cards from '../Cards';

const Main = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.product);
  const { allProducts } = useSelector((state) => state.product);
  const { searchInput } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.product);

  useEffect(() => {

    dispatch(findAllProducts());


  }, []);

  useEffect(() => {

    if(category.length > 0) {
      
      const result = allProducts.filter(product => product.categoryName === category);
      dispatch(setDisplayedProducts(result));

    } else {
      dispatch(setDisplayedProducts(allProducts));
    }

  }, [category]);

  useEffect(() => {

    if(searchInput.length > 0) {
      
      const result = allProducts.filter(product => product.tradename.toLowerCase().includes(searchInput.toLowerCase()) || product.name.toLowerCase().includes(searchInput.toLowerCase()));
      dispatch(setDisplayedProducts(result));

    } else {
      dispatch(setDisplayedProducts(allProducts));
    }

  }, [searchInput]);

  useEffect(() => {

      const displayedProducts = Object.keys(products).map(key => products[key]);
      const formatedDisplayedProduct = displayedProducts.map((product) => {
        return { ...product,
          formatted_stockItemAvailableQt: parseFloat(product.formatted_stockItemAvailableQt.replace(',','.').replace(' ','')),
          prices: {
            ...product.prices,
            174972: {
              ...product.prices['174972'],
              formatted_amount:  parseFloat(product.prices['174972'].formatted_amount.replace(',','.').replace(' ','')).toFixed(2)
            }
          }
        }
      });
      dispatch(setAllProducts(formatedDisplayedProduct));
      dispatch(setDisplayedProducts(formatedDisplayedProduct));
      // console.log(formatedDisplayedProduct.length)

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