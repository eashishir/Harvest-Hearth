import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import HarvestHearth from "../HarvestHearth/HarvestHearth";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
       <div>
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