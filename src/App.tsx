import './assets/styles/globals.scss';
import Layout from './layout/Layout';
import HeroSection from './components/sections/hero-section/HeroSection';
import PromoSection from './components/sections/promo-section/PromoSection';
import MenuSection from './components/sections/menu-section/MenuSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <PromoSection />
      <MenuSection />
    </Layout>
  );
}

export default App;
