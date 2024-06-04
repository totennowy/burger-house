import React, { FC } from 'react';
import styles from './styles/buttonRed.module.scss';
import { ModelButtonRed } from './types/modelButtonRed';

const ButtonRed: FC<ModelButtonRed> = ({ text, type, onClick, height }) => {
  return (
    <button
      type={type}
      className={styles.btn_red}
      onClick={onClick}
      style={{ height: height ? `${height}px` : '56px' }}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonRed;
