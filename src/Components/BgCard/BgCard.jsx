

const BgCard = ({Title, Description}) => {
    return (
        <div className="text-center mx-auto bg-white">
            <h2 className="text-4xl text-black">{Title}</h2>
            <p className="text-justify text-black mx-40">{Description}</p>
        </div>
    );
};

export default BgCard;