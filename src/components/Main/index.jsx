import styles from './Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { findAllProducts } from '@/redux/actions/product';
import Cards from '../Cards';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllProducts({request: 1, io_mode: 'json', do_in: '{"method":"Catalogue.getList","params":{"type":"item","search":{"tags":"null"}}}'}))
  }, [])
  return (

    <div className={styles.main}>
      <h2 className={styles.main__title}>Tout les stocks null</h2>
      <Cards/>
    </div>
  )
};

export default Main;