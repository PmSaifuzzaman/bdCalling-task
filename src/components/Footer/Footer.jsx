import { CiLocationOn } from "react-icons/ci";
import logo from "../../assets/Resources/Logo/LOGO white.png"

import social1 from "../../assets/Resources/Social Icon/icon.png"
import social2 from "../../assets/Resources/Social Icon/Union.png"
import social3 from "../../assets/Resources/Social Icon/Vector.png"


const Footer = () => {
    return (
        <div className="bg-[#006CE4] lg:max-w-7xl lg:mx-auto">
            <footer className="footer p-20  text-white">
                <nav>
                    <h6 className="text-lg font-medium">Address</h6>
                    <p className="text-base font-normal">House- 75 Ka, Main Rd, <br /> Dhaka 1216</p>
                    <p className="text-base font-normal"><CiLocationOn className="inline-block mr-1"/> View on Maps</p>
                    
                </nav>
                <nav>
                    <h6 className="text-lg font-medium">About Us</h6>
                    <a className="text-base font-normal">Stories</a>
                    <a className="text-base font-normal">Blog</a>
                    <a className="text-base font-normal">Airlines</a>
                    <a className="text-base font-normal">Testimonials</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-medium">Join Us</h6>
                    <a className="text-base font-normal">Terms of Service</a>
                    <a className="text-base font-normal">Privacy Policy</a>
                    <a className="text-base font-normal">Support</a>
                </nav>
                
                <nav>
                    <h6 className="text-lg font-medium">Contact</h6>
                    <a className="text-base font-normal">+880 1234562890</a>
                    <a className="text-base font-normal">+880 1234562890</a>
                    <a className="text-base font-normal">+880 1234562890</a>
                    <a className="text-base font-normal">info@airbook.com</a>
                </nav>    
            </footer>
            <hr className="max-w-6xl mx-auto"/>
            <footer className="footer px-10 py-4  bg-[#006CE4] text-base-content border-base-300 lg:max-w-6xl lg:mx-auto">
                <aside className="items-center grid-flow-col">
                    <img src={logo} alt="" />
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-8 items-center">
                        <img src={social1} alt="" />
                        <img src={social2} alt="" />
                        <img src={social3} alt="" />
                    </div>
                </nav>
                
            </footer>
            <p className="text-center text-xs text-white font-semibold pb-10">© Copyright  AIRBOOK</p>
        </div>
    );
};

export default Footer;