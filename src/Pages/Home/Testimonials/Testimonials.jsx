import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../../../variants'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <motion.div
        variants={fadeIn("right", 0.2)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
         className="my-20">
            <SectionTitle
                subHeading='What Our Client Say'
                heading="Testimonials"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-24 flex flex-col items-center mx-16 my-20">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                               
                            />
                            <p className="py-10">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>

        </motion.div>
    );
};

export default Testimonials;