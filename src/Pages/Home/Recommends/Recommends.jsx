import crdImg from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../../variants'

const Recommends = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Should Try"
                heading="Chef Recommends"
            ></SectionTitle>


            <motion.div
            variants={fadeIn("right", 0.2)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
             className='flex justify-center gap-5'>
                <div className="card glass w-72">
                    <figure>
                        <img className='w-96'
                            src={crdImg}
                            alt="car!" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card glass w-72">
                    <figure>
                        <img className='w-96'
                            src={crdImg}
                            alt="car!" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn-active btn btn-outline text-amber-500 border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card glass w-72">
                    <figure>
                        <img className='w-96'
                            src={crdImg}
                            alt="car!" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-bold ">Caeser Salad</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Recommends;