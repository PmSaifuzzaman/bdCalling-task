import { BiSolidQuoteAltRight } from "react-icons/bi";

import img1 from "../../assets/Resources/testimonial/Rectangle 30.png"
import img2 from "../../assets/Resources/testimonial/Rectangle 32.png"
import img3 from "../../assets/Resources/testimonial/Rectangle 33.png"

const Testimonial = () => {
    return (
        <>
            <div className="mt-10 lg:max-w-6xl lg:mx-auto p-2">
                <h2 className="text-3xl font-semibold">Testimonials</h2>
            </div>
            <div className="mt-5 p-2 ">
                <div className=" py-14 bg-[#006CE4] flex gap-4">
                    <div className="lg:max-w-6xl lg:mx-auto  flex gap-4">
                        <div>
                            <img className="opacity-20" src={img1} alt="" />
                        </div>
                        <div className="card lg:card-side bg-base-100">
                            <figure><img className="h-full rounded-r-xl" src={img2} alt="Album" /></figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="text-sm font-normal pb-3 text-[#09182E]">&#34;Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Canot wait to explore with them again!&#34;</h2>
                                    <h3 className="text-lg font-medium">Emily</h3>
                                    <p className="text-xs ">Adventure Enthusiast</p>
                                </div>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div className="flex justify-end">
                                    <BiSolidQuoteAltRight className="text-5xl text-[#006CE4]" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <img className="opacity-20" src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Testimonial;