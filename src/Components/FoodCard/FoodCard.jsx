import React from 'react';

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
   
               <div className="card glass w-72">
                    <figure>
                        <img className='w-96'
                            src={''}
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
        
    );
};

export default FoodCard;