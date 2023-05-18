import "./home.css"

import Header from "./header/Header";
import Cards from "../../components/cards/Cards";
import Gellary from "../../section/gellary/Gellary";
import ReactTab from "../../section/tabs/Tab";
const Home = () => {
    return (
        <>
            <Header />
            <Cards />
            <Gellary />
            <ReactTab />
        </>
    );
};

export default Home;