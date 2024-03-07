import Airlines from "../../components/Airlines/Airlines";
import Banner from "../../components/Banner/Banner";
import Deals from "../../components/Deals/Deals";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonial from "../../components/Testimonial/Testimonial";
import Travel from "../../components/Travel/Travel";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Deals></Deals>
            <Airlines></Airlines>
            <Testimonial></Testimonial>
            <Travel></Travel>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;