import styles from './styles/layoutHeader.module.scss';
import logo from '@images/page_logo.png';
import Delivery from './components/delivery/Delivery';
import Navigation from './components/navigation/Navigation';

const LayoutHeader = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.container_top}>
        <img src={logo} alt="burger logo" />
        <Delivery />
      </div>
      <div className={styles.container_bottom}>
        <Navigation />
      </div>
    </header>
  );
};

export default LayoutHeader;
