
import Controls from '../Controls';
import styles from './Header.module.scss';



const Header = () => {


  return (
    <div className={styles.header__container}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>SISTMS</h1>
        <Controls/>
      </header>
    </div>
    
  )
};

export default Header;