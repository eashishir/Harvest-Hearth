import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/home/bd food1.jpg"
import img2 from "../../../assets/home/02.jpg"
import img3 from "../../../assets/home/03.png"
import img4 from "../../../assets/home/04.jpg"
import img5 from "../../../assets/home/05.png"
import img6 from "../../../assets/home/06.png"
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../../variants'



const Banner = () => {
    
    return (
        <Carousel >
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                
                >
                    <img src={img1} />
                   
                </motion.div>
                <div>
                    <img src={img2} />
                  
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5} />
                  
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;