import { FC } from 'react';
import { ModelLayout } from './types/modelLayout';
import styles from './styles/layout.module.scss';
import LayoutHeader from './components/layout-header/LayoutHeader';
import LayoutFooter from './components/layout-footer/LayoutFooter';
import LayoutBody from './components/layout-body/LayoutBody';

const Layout: FC<ModelLayout> = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <LayoutHeader />

      <LayoutBody>{children}</LayoutBody>

      <LayoutFooter />
    </div>
  );
};

export default Layout;
