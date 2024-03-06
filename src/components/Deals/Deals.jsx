import img1 from "../../assets/Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png"
import img3 from "../../assets/Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png"
import img2 from "../../assets/Resources/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png"

const Deals = () => {
    return (
        <div className="mt-10 lg:max-w-6xl lg:mx-auto p-2">
            <h2 className="text-3xl font-semibold mb-5">Deals and Offers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card card-side bg-base-100 drop-shadow-2xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-[#09182E] font-medium text-xs">With bkash payment only</h2>
                        <p className="text-[#006CE4] text-base font-semibold">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 drop-shadow-2xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-[#09182E] font-medium text-xs">With bkash payment only</h2>
                        <p className="text-[#006CE4] text-base font-semibold">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 drop-shadow-2xl">
                    <figure><img className="" src={img3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-[#09182E] font-medium text-xs">With bkash payment only</h2>
                        <p className="text-[#006CE4] text-base font-semibold">up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Deals;