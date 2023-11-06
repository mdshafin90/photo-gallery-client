import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from '../../../../public/login-animation.json'
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { logInUser, googleLogIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error)
            })

    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-3xl my-5">
            <Helmet>
                <title>Photo Gallery | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="w-[200px] md:w-[400px]">
                        <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative mb-4">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password" className="input w-full input-bordered" required />
                                <span className="cursor-pointer absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEye className="text-xl" /> : <FaRegEyeSlash className="text-xl" />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-slate-800 px-3 py-2 rounded text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-slate-800 hover:translate-y-1 transform duration-500">
                                Login
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="bg-slate-800 px-3 py-2 rounded text-[18px] font-bold text-white bg-gradient-to-r from-slate-800 to-orange-600 hover:-translate-y-1 transform duration-500 flex justify-center items-center">
                                <FcGoogle className="text-[18px] mr-2" /> Continue With Google
                            </button>
                        </div>
                        <p className="text-center text-lg mt-2">New to this site? please <Link className="font-semibold text-blue-600 underline" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;