

const MenuItem = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="  w-[100px] h-12" src={image} 
            alt="" />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
            <div>
            
            </div>
           
            
        </div>
        
    );
};

export default MenuItem;