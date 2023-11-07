import { useLoaderData } from "react-router-dom";
import PhotoCard from "./PhotoCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const AllPhotos = () => {

    // get the loaded data by using useLoader data with loader
    const loadedFruits = useLoaderData();
    const [fruits, setFruits] = useState(loadedFruits);

    return (
        <div>
            <Helmet>
                <title>Fruit Gallery | All Photos</title>
            </Helmet>
            <div className="flex justify-center mt-5">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-rose-600 to-slate-800 inline-block text-transparent bg-clip-text" > Here is Our All Fruits: {fruits.length}</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {
                        fruits.map(fruit => <PhotoCard
                            key={fruit._id}
                            fruit={fruit}
                            fruits={fruits}
                            setFruits={setFruits}
                        ></PhotoCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllPhotos;