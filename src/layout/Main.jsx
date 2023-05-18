import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Main;