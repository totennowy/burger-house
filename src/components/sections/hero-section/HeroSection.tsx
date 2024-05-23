import React from 'react';
import styles from './styles/heroSection.module.scss';
import BurgerImg from '@images/hero_burger.png';

const HeroSection = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.container_left}>
        <p className={styles.small_text}>It is a good time for the great taste of burgers</p>
        <p className={styles.big_text}>BURGER</p>
        <p className={styles.medium_text}>WEEK</p>
      </div>
      <div className={styles.container_right}>
        <img src={BurgerImg} alt="photo of burger fries cola set" className={styles.burger_img} />
      </div>
    </section>
  );
};

export default HeroSection;
