import { Link } from 'react-scroll';
import navigationData from './data/navigationData';
import styles from './styles/navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.menu}>
        {navigationData.map((item, index) => {
          return (
            <li key={index} className={styles.menu_item}>
              <Link to={item.id} spy={true} smooth={true} offset={-70} duration={500}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
