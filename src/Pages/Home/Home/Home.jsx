
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HarvestHearth from "../HarvestHearth/HarvestHearth";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import './Home.css'


const Home = () => {
    return (
       <div >
        <Helmet>
        <Helmet>
            <title>Harvest&Hearth| Menu</title>
           </Helmet>
        </Helmet>
         <Banner></Banner>
         <Category></Category>
         <HarvestHearth></HarvestHearth>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <Recommends></Recommends>
         <Featured></Featured>
         <Testimonials></Testimonials>
       </div>
        
    );
};

export default Home;