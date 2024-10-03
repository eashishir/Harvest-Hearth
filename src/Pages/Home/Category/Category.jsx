import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
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
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >dessert</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt='' />
                    <h3 className='text-3xl uppercase text-center -mt-24 text-white' >salad</h3>
                </SwiperSlide>

            </Swiper>
            
        </section>
    );
};

export default Category;