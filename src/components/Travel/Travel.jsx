import img1 from "../../assets/Resources/Thumbnail/Rectangle 18.png"
import img2 from "../../assets/Resources/Thumbnail/Rectangle 18-1.png"
import img3 from "../../assets/Resources/Thumbnail//Rectangle 18-2.png"

import person1 from "../../assets/Resources/testimonial/Rectangle 30.png"
import person2 from "../../assets/Resources/testimonial/Rectangle 32.png"
import person3 from "../../assets/Resources/testimonial/Rectangle 33.png"

const Travel = () => {
    return (
        <div className="mt-10 p-2 lg:max-w-6xl lg:mx-auto">
            <h2 className="text-3xl font-semibold mb-5">Popular Airlines</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* card1 */}
                <div className="card card-compact  bg-[#FFFFFF] drop-shadow-2xl">
                    <figure><img className="w-full" src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <p className="text-[#FFB700] text-sm font-medium">Work and Travel</p>
                            <p className="text-[#09182E] text-sm font-medium">16 septembar 23</p>
                        </div>
                        <h2 className="text-[#09182E] text-lg font-bold py-2">Embracing the Digital Nomad Lifestyle the Digital Nomad thr...</h2>
                        <hr />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img className="w-10 h-10 rounded-full" src={person1} alt="" />
                                <p className=" text-sm font-medium">Ys Stafen</p>
                            </div>
                            <div>
                                <p className="text-[#FFB700] text-sm font-medium">Read more &raquo; </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card2 */}
                <div className="card card-compact  bg-[#FFFFFF] drop-shadow-2xl">
                    <figure><img className="w-full" src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <p className="text-[#FFB700] text-sm font-medium">Historical</p>
                            <p className="text-[#09182E] text-sm font-medium">14 septembar 23</p>
                        </div>
                        <h2 className="text-[#09182E] text-lg font-bold py-2">Historical Journeys: Stepping Back in Time Through Travel</h2>
                        <hr />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img className="w-10 h-10 rounded-full" src={person2} alt="" />
                                <p className=" text-sm font-medium">Aria Montague</p>
                            </div>
                            <div>
                                <p className="text-[#FFB700] text-sm font-medium">Read more &raquo; </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="card card-compact  bg-[#FFFFFF] drop-shadow-2xl">
                    <figure><img className="w-full" src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <p className="text-[#FFB700] text-sm font-medium">Sustainable Tourism</p>
                            <p className="text-[#09182E] text-sm font-medium">10 septembar 23</p>
                        </div>
                        <h2 className="text-[#09182E] text-lg font-bold py-2">Sustainable Tourism: Preserving the Planet While Seeing It All</h2>
                        <hr />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img className="w-10 h-10 rounded-full" src={person3} alt="" />
                                <p className=" text-sm font-medium">Elara Thorne</p>
                            </div>
                            <div>
                                <p className="text-[#FFB700] text-sm font-medium">Read more &raquo; </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Travel;