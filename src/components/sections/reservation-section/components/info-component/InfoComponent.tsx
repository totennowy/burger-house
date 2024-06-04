import React, { FC } from 'react';
import styles from './styles/infoComponent.module.scss';
import { ModelInfoComponent } from './types/modelInfoComponent';

const InfoComponent: FC<ModelInfoComponent> = ({ name, date, time, people }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.text_large}>Thank You for Your Reservation!</p>
      <p className={styles.text_medium}>Dear {name},</p>
      <p className={styles.text_small}>
        We are delighted to confirm your reservation at Burger House. Thank you for choosing us to
        dine with. We look forward to providing you with an exceptional dining experience.
      </p>
      <div>
        <p className={styles.text_medium}>Reservation Details:</p>
        <ul>
          <li className={styles.text_small}>Date: {date}</li>
          <li className={styles.text_small}>Time: {time}</li>
          <li className={styles.text_small}>Number of People: {people}</li>
        </ul>
      </div>
      <p className={styles.text_small}>
        If you have any questions or need to make changes to your reservation, please feel free to
        contact us. We are always here to assist you.
      </p>
    </div>
  );
};

export default InfoComponent;
