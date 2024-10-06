import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
           <Helmet>
            <title>Harvest&Hearth| Menu</title>
           </Helmet>
           <Cover></Cover>

            <h2>Men men menu</h2>
        </div>
    );
};

export default Menu;