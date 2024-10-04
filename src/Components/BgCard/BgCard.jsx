// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../variants'

const BgCard = ({Title, Description}) => {
    return (
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
         className="text-center  bg-white px-16 py-16">
            <h2 className="text-4xl text-black mb-10">{Title}</h2>
            <p className=" text-black ">{Description}</p>
        </motion.div>
    );
};

export default BgCard;