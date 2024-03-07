import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";


const Airlines = () => {

    const [allAirlines, setAllAirlines] = useState([])


    useEffect(() => {
        fetch("./airlines.json")
        .then((res) => res.json())
        .then((data) => setAllAirlines(data))
    })


    return (
        <div className="mt-10 p-2 lg:max-w-6xl lg:mx-auto">
            <h2 className="text-3xl font-semibold mb-5">Popular Airlines</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    allAirlines.map((singleAirline) => (
                        <div key={singleAirline.id} className="card card-side ">
                        <figure><img src= {singleAirline.image} alt="Movie"/></figure>
                        <div className="ml-5">
                          <h2 className="text-[#006CE4] text-sm font-semibold">{singleAirline.title}</h2>
                          <p className="text-xs text-[#09182E] font-light"> <FaStar className="inline-block text-[#FFB700]" /> {singleAirline.rating}</p>
                        </div>
                      </div> 
                    ))
                }
            </div>
        </div>
    );
};

export default Airlines;