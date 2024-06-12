import React from 'react';
import styles from './styles/eventSection.module.scss';
import BurgerImage from '@images/burger_event.png';
import { Element } from 'react-scroll/modules';

const EventSection = () => {
  return (
    <section className={styles.wrap}>
      <Element name="event-section" className={styles.container}>
        <div className={styles.box_left}>
          <p className={styles.text_medium}>DISCOVER</p>
          <p className={styles.text_large}>UPCOMING EVENT</p>
          <p className={styles.text_small}>
            Join us for a delicious celebration of May Beef Month and June Dairy Month! We're
            excited to show our appreciation for our local dairy and beef producers by grilling
            mouth-watering burgers and scooping up refreshing Sugar Bowl ice cream. Don't miss your
            chance to indulge in this awesome feast!
          </p>
        </div>
        <div className={styles.box_right}>
          <img src={BurgerImage} alt="burger with fries" className='box_right_img'/>
        </div>
      </Element>
    </section>
  );
};

export default EventSection;
