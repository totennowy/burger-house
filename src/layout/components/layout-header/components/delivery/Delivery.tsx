import styles from './styles/delivery.module.scss';
import delivery from '@images/delivery_img.png';

const Delivery = () => {
  return (
    <div className={styles.wrap}>
      <img src={delivery} alt="scooter icon" />
      <p>Express Delivery +123456789</p>
    </div>
  );
};

export default Delivery;
