import { useLoaderData } from "react-router-dom";


const PhotoDetails = () => {

    const singlePhoto = useLoaderData();
    // console.log(singlePhoto);
    const { fruitName, fruitTaste, fruitType, fruitRating, fruitPhoto, } = singlePhoto;

    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-7">Details about this fruit: {fruitName}</h1>
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-evenly md:border-y-4 md:border-blue-700 rounded-2xl md:rounded-full p-2 md:p-4 my-4 md:my-10 space-y-4 md:space-y-0">
                <div>
                    <img className="h-[220px] w-[220px] md:w-[400px] md:h-[400px] rounded-full" src={fruitPhoto} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl text-center md:text-start font-bold">Name: {fruitName}</h1>
                    <p className="text-xl text-center md:text-start font-semibold mt-1">Taste: {fruitTaste}</p>
                    <p className="text-xl text-center md:text-start font-semibold mt-1">Type: {fruitType}</p>
                    <p className="text-xl text-center md:text-start font-semibold mt-1">Rating: {fruitRating}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetails;