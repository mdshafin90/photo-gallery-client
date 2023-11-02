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
            {/* <div className="flex items-center justify-evenly w-full">
                <div>
                    <img className="w-[120px]" src={navIcon} alt="" />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row space-x-4">
                    {toggle && <p>Home</p>}
                    {toggle && <p>Home</p>}
                    {toggle && <p>Home</p>}
                </div>
                <div>
                    <img
                        className="w-[40px] sm:block md:hidden lg:hidden"
                        src={toggle ? navCrossIcon : navToggleIcon}
                        alt=""
                        onClick={handleToggleClick}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Home;
