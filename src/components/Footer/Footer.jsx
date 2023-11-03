import { Link } from "react-router-dom";
import icon from "../../../public/nav-icon.png"
import moment from "moment/moment";
import facebookIcon from "../../../public/icons/fb.png"
import linkedInIcon from "../../../public/icons/linkedIn.png"

const Footer = () => {
    return (
        <footer className="footer footer-center rounded-3xl p-10 bg-slate-950 text-white">
            <aside>
                <Link to='/'>
                    <img className="w-[120px]" src={icon} alt="" />
                </Link>
                <p className="font-bold text-2xl">Fruit Gallery</p>
            </aside>
            <nav>
                <p className="text-xl font-medium">Follow Us On</p>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/slice.coders' target="blank"><img className="w-[40px]" src={facebookIcon} alt="" /></Link>
                    <Link to='https://www.linkedin.com/company/slice-coders/' target="blank"><img className="w-[40px]" src={linkedInIcon} alt="" /></Link>
                </div>
            </nav>
            <p className="text-lg font-medium">Copyright © {moment().format("YYYY")} - All right reserved</p>
        </footer>
    );
};

export default Footer;