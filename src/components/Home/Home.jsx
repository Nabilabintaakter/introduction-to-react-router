import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="container mx-auto">
            <Header></Header>
            {
                navigation.state === 'loading' ? <div className="flex justify-center items-center h-screen pb-24"><p className="text-3xl font-medium italic">Loading...</p></div> : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;