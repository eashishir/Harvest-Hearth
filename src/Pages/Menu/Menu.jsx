import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../../src/assets/home/ramadan-celebration-with-delicious-food (1)-min.jpg"
import chickenImg from "../../../src/assets/home/chicken.jpg"
import vortaImg from "../../../src/assets/home/vorta new.jpg"
import riceImg from "../../../src/assets/home/basmati-rice-recipe.jpg"
import fishImg from "../../../src/assets/home/shorshe-ilish.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const chicken = menu.filter(item => item.category === 'chicken')
    const rice = menu.filter(item => item.category === 'rice')
    const vorta = menu.filter(item => item.category === 'vorta')
    const fish = menu.filter(item => item.category === 'fish')
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
         items={fish}
         title="Fish"
         img={fishImg}
         ></MenuCategory>
         {/* pizza menu items */}

         <MenuCategory 
         items={chicken}
         title="Chicken"
         img={chickenImg}
         ></MenuCategory>
         {/* salad menu items */}

         <MenuCategory 
         items={vorta}
         title="Vorta"
         img={vortaImg}
         ></MenuCategory>
         {/* soup menu items */}

         <MenuCategory 
         items={rice}
         title="Rice"
         img={riceImg}
         ></MenuCategory>

           
        </div>
    );
};

export default Menu;