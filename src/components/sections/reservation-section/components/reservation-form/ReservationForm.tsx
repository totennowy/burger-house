import React, { FC } from 'react';
import styles from './styles/reservationForm.module.scss';
import { useForm } from 'react-hook-form';
import { ModelOnSubmit, ModelReservationForm } from '../../types/modelReservationForm';
import ButtonRed from '@commons/button-red/ButtonRed';

const ReservationForm: FC<ModelReservationForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ModelOnSubmit>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrap}>
      <div className={styles.input}>
        <input id="name" type="text" placeholder="NAME" {...register('name', { required: true })} />
        {errors.name && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.input}>
        <input
          id="email"
          type="email"
          placeholder="EMAIL"
          {...register('email', { required: true })}
        />
        {errors.email && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.input}>
        <input id="date" type="date" placeholder="DATE" {...register('date', { required: true })} />
        {errors.date && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.input}>
        <input id="time" type="time" placeholder="TIME" {...register('time', { required: true })} />
        {errors.time && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.input}>
        <input
          id="people"
          type="number"
          placeholder="NUMBER OF PEOPLE"
          {...register('people', { required: true })}
        />
        {errors.people && <span className={styles.error}>This field is required</span>}
      </div>
      <ButtonRed type="submit" text="FIND A TABLE" />
    </form>
  );
};

export default ReservationForm;
