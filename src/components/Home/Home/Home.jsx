import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
// import navIcon from "../../../../public/nav-icon.png";
// import navToggleIcon from "../../../../public/nav-toggle-icon.png";
// import navCrossIcon from "../../../../public/nav-close-icon.png";
// import { useState } from "react";

const Home = () => {
    // const [toggle, setToggle] = useState(true);

    // const handleToggleClick = () => {
    //     setToggle(!toggle);
    // };

    return (
        <div>
            <Helmet>
                <title>Fruit Gallery | Home</title>
            </Helmet>
            <div className="flex justify-center">
                <h1 className="text-3xl md:text-5xl animate-pulse text-center font-bold my-5 bg-gradient-to-r from-violet-600 via-orange-600 to-violet-600 inline-block text-transparent bg-clip-text">Welcome to our Fruit Gallery</h1>
            </div>
            <Banner />
        </div>
    );
};

export default Home;
