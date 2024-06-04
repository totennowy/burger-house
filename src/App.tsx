import './assets/styles/globals.scss';
import Layout from './layout/Layout';
import HeroSection from './components/sections/hero-section/HeroSection';
import PromoSection from './components/sections/promo-section/PromoSection';
import MenuSection from './components/sections/menu-section/MenuSection';
import EventSection from './components/sections/event-section/EventSection';
import ReservationSection from './components/sections/reservation-section/ReservationSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <PromoSection />
      <MenuSection />
      <EventSection />
      <ReservationSection />
    </Layout>
  );
}

export default App;
