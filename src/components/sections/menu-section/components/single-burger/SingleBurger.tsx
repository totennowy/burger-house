import React, { FC } from 'react';
import styles from './styles/singleBurger.module.scss';
import { ModelSingleBurger } from './types/modelSingleBurger';
import ButtonRed from '../../../../commons/button-red/ButtonRed';

const SingleBurger: FC<ModelSingleBurger> = ({ name, description, image }) => {
  return (
    <div className={styles.wrap}>
      <img src={image} alt={name} className={styles.burger_img} />
      <p className={styles.burger_name}>{name}</p>
      <p className={styles.burger_description}>{description}</p>
      <ButtonRed text="ORDER NOW" type="button" />
    </div>
  );
};

export default SingleBurger;
