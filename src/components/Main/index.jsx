import styles from './Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { findAllProducts } from '@/app/actions/product';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllProducts({request: 1, io_mode: 'json', do_in: '{"method":"Catalogue.getList","params":{"type":"item","search":{"tags":"null"}}}'}))
  }, [])
  return (

    <div className={styles.main}>
      <h2 className={styles.main__title}>Stake your token to receive passive income</h2>
      hello
    </div>
  )
};

export default Main;