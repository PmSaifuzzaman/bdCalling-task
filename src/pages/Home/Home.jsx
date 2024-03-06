import Airlines from "../../components/Airlines/Airlines";
import Banner from "../../components/Banner/Banner";
import Deals from "../../components/Deals/Deals";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Deals></Deals>
            <Airlines></Airlines>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;