import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../../src/assets/menu/banner3.jpg"
import PopularMenu from '../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
           <Helmet>
            <title>Harvest&Hearth| Menu</title>
           </Helmet>
           <Cover img={menuImg}title="our menu" ></Cover>
           
        </div>
    );
};

export default Menu;