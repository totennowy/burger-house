import React from 'react';
import styles from './styles/reservationSection.module.scss';
import ReservationForm from './components/reservation-form/ReservationForm';
import FoodOnPlateImage from '@images/plate_reservation.png';
import KetchupImage from '@images/ketchup_reservation.png';
import BurgerImage from '@images/Burger_reservation.png';
import InfoComponent from './components/info-component/InfoComponent';
import useReservationSection from './hooks/useReservationSection';

const ReservationSection = () => {
  const { isReservationSend, onSubmit, dataForm } = useReservationSection();

  return (
    <section className={styles.wrap}>
      <div className={styles.container_left}>
        <img src={BurgerImage} alt="burger" className={styles.burger_img} />
        <img src={KetchupImage} alt="ketchup" className={styles.ketchup_img} />
      </div>

      <div className={styles.container_center}>
        <p className={styles.text_small}>RESERVATION</p>
        <p className={styles.text_large}>BOOK YOUR TABLE</p>
        {isReservationSend && dataForm ? (
          <InfoComponent {...dataForm} />
        ) : (
          <ReservationForm onSubmit={onSubmit} />
        )}
      </div>

      <div className={styles.container_right}>
        <img src={FoodOnPlateImage} alt="burger with fries on plate" className={styles.plate_img} />
      </div>
    </section>
  );
};

export default ReservationSection;
