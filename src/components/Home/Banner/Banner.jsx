import Lottie from 'lottie-react';
import fruitAnimation from '../../../../public/fruit-animation.json'

const Banner = () => {
    return (
        <div className='my-3 md:my-10'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-evenly items-center'>
                <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
                    <h1 className='text-2xl md:text-4xl text-center lg:text-start font-bold'>Discover the Freshness <br /> of Nature's Bounty 🔑</h1>
                    <p className='text-lg text-center lg:text-start my-5'>
                        At Our Fruit Gallery, we're passionate about bringing the beauty and flavors of the natural world to your screen. Our fruit gallery is a celebration of the vibrant, succulent, and diverse fruits that our planet has to offer. Whether you're a fruit enthusiast, a culinary explorer, or simply looking for a burst of freshness in your life, you've come to the right place.
                    </p>
                    <div className='flex justify-center lg:justify-start items-center'>
                        <p className='flex cursor-pointer text-black text-base md:text-[18px] shadow-2xl font-medium justify-center px-5 py-3 w-[150px] rounded-b-3xl rounded-l-full border-x-4 border-blue-600 bg-transparent hover:bg-gradient-to-r from-violet-500 hover:shadow-rose-600 to-sky-500 hover:text-white hover:-translate-y-1 transform duration-500'>Learn More</p>

                        <p className='flex cursor-pointer text-white border-x-4 border-indigo-600 text-base md:text-[18px] shadow-2xl font-medium justify-center ml-5 px-5 py-3 w-[150px] rounded-b-3xl rounded-r-full bg-gradient-to-r from-sky-500 to-violet-500 hover:shadow-rose-600 hover:-translate-y-1 transform duration-500'>Discover</p>
                    </div>
                </div>
                <div className='w-[280px] md:w-[400px] lg:w-[400px]'>
                    <Lottie animationData={fruitAnimation} loop={true} />
                </div>
            </div>
        </div >
    );
};

export default Banner;