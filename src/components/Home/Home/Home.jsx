import { Helmet } from "react-helmet-async";
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
            <h1 className="text-5xl text-center font-bold my-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Welcome to our Fruit Gallery</h1>

        </div>
    );
};

export default Home;
