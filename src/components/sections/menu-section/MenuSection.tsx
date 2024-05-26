import React from 'react';
import styles from './styles/menuSection.module.scss';
import { menuData } from './data/menuData';
import SingleBurger from './components/single-burger/SingleBurger';

const MenuSection = () => {
  return (
    <section className={styles.wrap}>
      <p className={styles.text_first}>ALWAYS TASTY BURGER</p>
      <p className={styles.text_second}>CHOOSE & ENJOY</p>
      <p className={styles.text_third}>
        Now serving all your favourite burgers in soft-n-fresh potato bun. The buns are specially
        selected to enhance the flavour of each bite whether you are eating FireHouse or BigBang,
        Doppler or Quadra. Each bite into softness will make you love us even more!
      </p>
      <div className={styles.burger_menu}>
        {menuData.map((burger, index) => {
          return <SingleBurger key={index} {...burger} />;
        })}
      </div>
    </section>
  );
};

export default MenuSection;
