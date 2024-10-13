

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
   
               <div className="card  w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-96'
                            src={image}
                            alt="car!" />
                    </figure>
                    <p className="bg-slate-900 text-white absolute  right-0 mr-4 mt-4 px-4 rounded">${price}</p>
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl font-bold ">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-amber-500 border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                    </div>
                </div>
        
    );
};

export default FoodCard;