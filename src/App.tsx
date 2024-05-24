import './assets/styles/globals.scss';
import Layout from './layout/Layout';
import HeroSection from './components/sections/hero-section/HeroSection';
import PromoSection from './components/sections/promo-section/PromoSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <PromoSection />
    </Layout>
  );
}

export default App;
