import styles from './styles/layoutFooter.module.scss';
import logo from '@images/logo_white.png';
import LocationIcon from '@images/LocationIcon.svg';
import EmailIcon from '@images/EmailIcon.svg';
import InstagramIcon from '@images/InstagramIcon.svg';
import FacebookIcon from '@images/FacebookIcon.svg';
import TwitterIcon from '@images/TwitterIcon.svg';
import WhatsAppIcon from '@images/WhatsAppIcon.svg';
import { Element } from 'react-scroll/modules';

const LayoutFooter = () => {
  return (
    <footer className={styles.wrap}>
      <Element name="footer-section" className={styles.container}>
        <div className={styles.footer_top}>
          <img src={logo} alt="page logo white" />
        </div>
        <div className={styles.footer_middle}>
          <p className={styles.burger_info}>
            Tantalizing your taste buds with exotic twists and fusions, the legends of the food
            industry, bring to your plates delicacies made from their exclusive recipes that make
            you swoon with delight. From the delicately cut Roast beef to the egg and chicken duo,
            the homemade mustard sauce to the secret ketchup, the pioneers of fast food, mr burger
            speak for themselves.
          </p>
          <div className={styles.contact}>
            <div className={styles.info_box}>
              <img src={LocationIcon} alt="location icon" />
              <p>GRANTSVILLE 307 E Main St Grantsville, UT 84029</p>
            </div>
            <div className={styles.info_box}>
              <img src={EmailIcon} alt="email icon" />
              <p>
                <a href="mailto:burgerhouse11@gmail.com">burgerhouse11@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>© Burger House 2020. All rights reserved.</p>
          <div className={styles.icons_box}>
            <a href="#">
              <img src={InstagramIcon} alt="instagram icon" className={styles.icon} />
            </a>
            <a href="#">
              <img src={FacebookIcon} alt="facebook icon" className={styles.icon} />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="twitter icon" className={styles.icon} />
            </a>
            <a href="#">
              <img src={WhatsAppIcon} alt="whatsapp icon" className={styles.icon} />
            </a>
          </div>
        </div>
      </Element>
    </footer>
  );
};

export default LayoutFooter;
