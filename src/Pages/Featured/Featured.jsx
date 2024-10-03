import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle 
            subHeading='check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 px-36 py-20">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">where i can get someone</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatum, 
                        maxime doloremque, suscipit nulla minima accusamus commodi error atque fugiat vitae! At, 
                        cumque facilis nisi minima voluptatibus ea quibusdam aspernatur!</p>
                        <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;