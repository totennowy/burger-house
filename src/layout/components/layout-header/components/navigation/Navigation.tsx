import { Link } from 'react-scroll';
import navigationData from './data/navigationData';
import styles from './styles/navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.menu}>
        {navigationData.map((item) => {
          return (
            <Link
              key={item.label}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <li key={item.label} className={styles.menu_item}>
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
