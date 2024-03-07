import img1 from "../../assets/Resources/News letter/Isolation_Mode.png"

const Newsletter = () => {
    return (
        <div className="my-10 lg:max-w-6xl lg:mx-auto p-2">

            <div className="grid-cols-1 lg:flex lg:justify-around lg:items-center">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-[#09182E] text-4xl font-bold">
                        Subscribe to our <br />
                        Newsletter!
                    </h1>
                    <p className="text-[#006CE4] text-xl font-medium">Subscribe to our newsletter and stay <br /> updated.</p>
                    <label className="input input-bordered border-[#006CE4] text-[#006CE4] flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Your Email" />
                    </label>
                    <button className="btn bg-[#FFB700] w-full">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;