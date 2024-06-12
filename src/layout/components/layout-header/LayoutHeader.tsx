import styles from './styles/layoutHeader.module.scss';
import logo from '@images/page_logo.png';
import Delivery from './components/delivery/Delivery';
import Navigation from './components/navigation/Navigation';
import { Element } from 'react-scroll/modules';
import { useEffect, useState } from 'react';

const LayoutHeader = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setScrollY(window.pageYOffset);
      }, 100);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [scrollY]);

  return (
    <header className={`${styles.header_wrap} ${isSticky ? styles.sticky : ''}`} id="header-wrap">
      <Element name="header-section" className={styles.content_wrap}>
        <div className={styles.container_top}>
          <img src={logo} alt="burger logo" className={styles.img_logo} />
          {!isSticky && <Delivery />}
        </div>
        <div className={styles.container_bottom}>
          <Navigation />
        </div>
      </Element>
    </header>
  );
};

export default LayoutHeader;
