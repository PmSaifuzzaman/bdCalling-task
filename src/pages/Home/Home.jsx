import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;