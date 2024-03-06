import img1 from "../../assets/Resources/Thumbnail/Rectangle 181.png"
import img2 from "../../assets/Resources/Thumbnail/Rectangle 18-11.png"
import img3 from "../../assets/Resources/Thumbnail/Rectangle 18-22.png"

const Featured = () => {
    return (
        <div className="mt-10 p-2 lg:max-w-6xl lg:mx-auto">
            <h2 className="text-3xl font-semibold mb-5">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {/* card 1 */}
                <div className="card bg-base-100 drop-shadow-2xl">
                    <figure className="p-3">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" p-3">                       
                        <p className="text-lg font-bold text-[#09182E]">Stopover opportunity in İstanbul with Turkish Airlines</p>
                        <div className="card-actions flex justify-center">
                            <button className="btn bg-[#FFB700] w-52 h-11 rounded-xl my-2 text-base text-[#09182E]">View More</button>
                        </div>
                    </div>
                </div>
                 {/* card 2 */}
                <div className="card bg-base-100 drop-shadow-2xl">
                    <figure className="p-3">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" p-3">                       
                        <p className="text-lg font-bold text-[#09182E]">Discover the timeless city with Touristanbul of Turkish Airlines</p>
                        <div className="card-actions flex justify-center">
                            <button className="btn bg-[#FFB700] w-52 h-11 rounded-xl my-2 text-base text-[#09182E]">View More</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 drop-shadow-2xl">
                    <figure className="p-3">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" p-3">                       
                        <p className="text-lg font-bold text-[#09182E]">the best of Abu Dhabi with exclusive Etihad Airways!</p>
                        <div className="card-actions flex justify-center">
                            <button className="btn bg-[#FFB700] w-52 h-11 rounded-xl my-2 text-base text-[#09182E]">View More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;