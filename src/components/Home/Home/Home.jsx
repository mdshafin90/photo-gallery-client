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
        <div className="mt-40">
            <Helmet>
                <title>Fruit Gallery | Home</title>
            </Helmet>
            <h1>This is home component</h1>
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
