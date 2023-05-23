import "./home.css"

import Header from "./header/Header";
import Cards from "../../components/cards/Cards";
import Gellary from "../../section/gellary/Gellary";
import ReactTab from "../../section/tabs/Tab";
import StartedSection from "./startedSection/StartedSection";
const Home = () => {
    document.title = "Kiddos."
    return (
        <>
            <Header />
            <Cards />
            <Gellary />
            <StartedSection />
            <ReactTab />
        </>
    );
};

export default Home;