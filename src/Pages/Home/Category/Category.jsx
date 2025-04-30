import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/basmati-rice-recipe.jpg"
import slide2 from "../../../assets/home/vorta new.jpg"
import slide3 from "../../../assets/home/chicken.jpg"
import slide4 from "../../../assets/home/shorshe-ilish.jpg"
import slide5 from "../../../assets/home/beef new.jpg"
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../../variants'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <motion.div
        variants={fadeIn("left", 0.4)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.5}}
        
        >
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"} 
            heading={"Order Online"}
            ></SectionTitle>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <img src={slide1} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >Rice</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >Bharta</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >Chicken</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >Fish</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >Beef</h3>
                </SwiperSlide>

            </Swiper>
            
        </motion.div>
    );
};

export default Category;