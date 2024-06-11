import React, { FC } from 'react';
import styles from './styles/singleBurger.module.scss';
import { ModelSingleBurger } from './types/modelSingleBurger';
import ButtonRed from '../../../../commons/button-red/ButtonRed';

const SingleBurger: FC<ModelSingleBurger> = ({ name, description, image }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image_box}>
        <img src={image} alt={name} className={styles.burger_img} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.burger_name}>{name}</p>
        <p className={styles.burger_description}>{description}</p>
        <ButtonRed text="ORDER NOW" type="button" />
      </div>
    </div>
  );
};

export default SingleBurger;
