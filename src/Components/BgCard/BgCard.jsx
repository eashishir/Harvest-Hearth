

const BgCard = ({Title, Description}) => {
    return (
        <div className="text-center  bg-white px-16 py-16">
            <h2 className="text-4xl text-black mb-10">{Title}</h2>
            <p className=" text-black ">{Description}</p>
        </div>
    );
};

export default BgCard;