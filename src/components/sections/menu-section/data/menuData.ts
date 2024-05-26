import VeggieBurgerHamburgerImage from '@images/veggie_burger_hamburger.png';
import BeefBurgerImage from '@images/beef_burger.png';
import ChickenSandwichHamburgerImage from '@images/chicken_sandwich_hamburger.png';

type ModelMenuData = {
  name: string;
  description: string;
  image: string;
};

export const menuData: ModelMenuData[] = [
  {
    name: 'Veggie burger Hamburger',
    description:
      ' The ultimate veggie burger you will love! Incredibly delicious crisp patties, finger-licking sauce with amazing toppings.',
    image: VeggieBurgerHamburgerImage
  },
  {
    name: 'Beef burger',
    description: 'The classic burger is an all-time BBQ favourite!',
    image: BeefBurgerImage
  },
  {
    name: 'Chicken sandwich Hamburger',
    description: ' Juicy and tender from the inside and served with delicious sauce.',
    image: ChickenSandwichHamburgerImage
  }
];
