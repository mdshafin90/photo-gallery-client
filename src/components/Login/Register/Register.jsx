import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import registrationAnimation from '../../../../public/registration-animation.json'
import Lottie from "lottie-react";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                if (result) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Registered',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(from, { replace: true });
                }
                // console.log(result)
            })
            .then(error => {
                console.error(error)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-3xl my-5">
            <Helmet>
                <title>Photo Gallery | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="w-[200px] md:w-[400px]">
                        <Lottie animationData={registrationAnimation} loop={true} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
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
                            <button className="bg-slate-800 px-3 py-2 rounded text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-slate-800 hover:-translate-y-1 transform duration-500">
                                Register
                            </button>
                        </div>
                        <p className="text-center text-lg mt-2">Already have account? please <Link className="font-semibold text-blue-600 underline" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;