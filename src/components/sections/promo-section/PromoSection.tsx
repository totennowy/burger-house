import React from 'react';
import styles from './styles/promoSection.module.scss';
import BurgerImageLeft from '@images/burger_try1.png';
import BurgerImageRight1 from '@images/burger_try2.png';
import BurgerImageRight2 from '@images/burger_try3.png';

const PromoSection = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.container_left}>
        <img src={BurgerImageLeft} alt="burger image" />
      </div>
      <div className={styles.container_right}>
        <img src={BurgerImageRight1} alt="two burgers image" />
        <img src={BurgerImageRight2} alt="small board with burger parts" />
      </div>
    </section>
  );
};

export default PromoSection;
