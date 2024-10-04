import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../../variants'


const PopularMenu = () => {
   const [menu, setMenu] = useState([]);
   useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems)})
   }, [])

    return (
        <section className="mx-auto">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <motion.div
            variants={fadeIn("right", 0.3)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.4}}
             className="grid md:grid-cols-2 gap-4 ">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </motion.div>
            <div className="text-center">
            <button className=" btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;