import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero h-[521px]" style={{ backgroundImage: 'url(https://i.ibb.co/S31k4FS/Rectangle-2.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-neutral-content text-start">
                <div className=" pb-5">
                    <h2 className="text-4xl font-medium">Welcome to <span className="font-bold text-[#006CE4]">AirBook</span></h2>
                </div>
                <div className="lg:w-[1120px] bg-white p-5 rounded-xl">
                    <div className="grid-cols-1 space-y-4 lg:flex lg:items-center lg:justify-between mb-5">
                        <div className="flex gap-4">
                            <button className="btn font-medium bg-[#EBF0F5]"> <input type="radio" name="radio-1" className="radio" /> One way</button>
                            <button className="btn  font-medium bg-[#006CE4] text-white"> <input type="radio" name="radio-9" className="radio" disabled checked /> Round Trip</button>
                        </div>
                        <div className="flex gap-4">
                            <select className="select  text-[#006CE4] bg-[#EBF0F5] font-medium">
                                <option disabled selected>1 Traveller</option>
                            </select>
                            <select className="select  text-[#006CE4] bg-[#EBF0F5] font-medium">
                                <option disabled selected>Economy</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-[#09182E] flex gap-2 items-center border rounded-lg p-2">
                                <h3 className="font-semibold">DAC</h3>
                                |
                                <p className="font-semibold">Dhaka <br /> <span className="text-xs">Hazrat Shahjalal Internatio</span></p>
                            </div>
                            <div className="text-[#09182E] flex gap-2 items-center border rounded-lg p-2">
                                <h3 className="font-semibold">Cxb</h3>
                                |
                                <p className="font-semibold">Cox’s Bazar <br /> <span className="text-xs">Cox’s Bazar international</span></p>
                            </div>
                            <div className="text-[#09182E] flex gap-2 items-center border rounded-lg p-2">
                                <h3 className="font-semibold">03</h3>
                                |
                                <p className="font-semibold">October <br /> <span className="text-xs">tuesday, 2023</span></p>
                            </div>
                            <div className="text-[#09182E] flex gap-2 items-center border rounded-lg p-2">
                                <h3 className="font-semibold">05</h3>
                                |
                                <p className="font-semibold">October <br /> <span className="text-xs">tuesday, 2023</span></p>
                            </div>
                        </div>
                        <div>
                            <button className="flex justify-center items-center w-20 h-14 bg-[#FFB700] rounded-lg text-white text-lg ml-2"><FaSearch /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;