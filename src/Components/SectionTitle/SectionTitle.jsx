// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../variants'

const SectionTitle = ({heading, subHeading}) => {
    return (
        <motion.div
        variants={fadeIn("down", 0.3)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.5}}
         className="mx-auto text-center md:w-4/12 py-4">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </motion.div>
    );
};

export default SectionTitle;