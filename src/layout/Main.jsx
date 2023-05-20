import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/navbar/Navbar";
import Footer from "../shared/components/footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;