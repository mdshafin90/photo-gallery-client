import Lottie from 'lottie-react';
import pageErrorAnimation from '../../../public/page-error.json'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageError = () => {
    return (
        <div>
            <div className="w-[300px] md:w-[600px] rounded-lg flex justify-center mx-auto mt-10">
                <Lottie animationData={pageErrorAnimation} loop={true} />
            </div>
            <div className='flex justify-center mt-5 md:mt-10 w-[150px] md:w-[200px] mx-auto '>
                <Link to='/'>
                    <div className='text-white font-semibold px-3 md:px-6 py-1 md:py-3 flex justify-center items-center space-x-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <FaHome />
                        <p>Go to Home</p>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default PageError;