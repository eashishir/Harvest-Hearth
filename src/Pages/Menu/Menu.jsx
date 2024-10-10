import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../../src/assets/menu/banner3.jpg"
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg"
import saladImg from "../../../src/assets/menu/salad-bg.jpg"
import soupImg from "../../../src/assets/menu/soup-bg.jpg"
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const offereds = menu.filter(item => item.category === 'offered')

    return (
        <div>
           <Helmet>
            <title>Harvest&Hearth| Menu</title>
           </Helmet>
           <Cover img={menuImg}title="our menu" ></Cover>
           {/* main cover */}
           <SectionTitle
           subHeading="Don't Miss"
           heading="Today's Offer"
           ></SectionTitle>
           {/* offered menu items */}
           <MenuCategory
           items={offereds}
           ></MenuCategory>

             {/* dessert menu items*/}

         <MenuCategory
         items={desserts}
         title="Dessert"
         img={dessertImg}
         ></MenuCategory>
         {/* pizza menu items */}

         <MenuCategory 
         items={pizzas}
         title="Pizza"
         img={pizzaImg}
         ></MenuCategory>
         {/* salad menu items */}

         <MenuCategory 
         items={salads}
         title="Salad"
         img={saladImg}
         ></MenuCategory>
         {/* soup menu items */}

         <MenuCategory 
         items={soups}
         title="Soup"
         img={soupImg}
         ></MenuCategory>

           
        </div>
    );
};

export default Menu;