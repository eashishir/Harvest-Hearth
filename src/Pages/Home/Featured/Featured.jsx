import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/chicken-tomato-sauce-with-rice (1).jpg';
import './Featured.css'
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../../variants'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle 
            subHeading='check it out'
            heading={"Featured Item"}
            ></SectionTitle>
            <motion.div
            variants={fadeIn("up", 0.3)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.5}}
             className="md:flex text-white  justify-center items-center bg-slate-500 bg-opacity-60 pt-12 px-36 py-20">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Homestyle Chicken & Herb Rice</p>
                    <p>A heartwarming classic made with love — tender chicken thighs slow-cooked in a blend of farmhouse spices, nestled over a bed of fragrant herb-infused basmati rice. Simmered in rich homemade stock and finished with caramelized onions and garden-fresh parsley, this dish brings the essence of comfort and nourishment to your plate. Served with a side of seasonal vegetables or tangy house-made chutney.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </motion.div>
        </div>
    );
};

export default Featured;