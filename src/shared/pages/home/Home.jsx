import "./home.css"

import Header from "./header/Header";
// import Cards from "../../components/cards/Cards";
import Gellary from "../../section/gellary/Gellary";
import ReactTab from "../../section/tabs/Tab";
import StartedSection from "./startedSection/StartedSection";
import CategoryTab from "../../components/tabs/Tabs";
const Home = () => {

    return (
        <>
            <Header />
            <Gellary />
            <StartedSection />
            <CategoryTab />
        </>
    );
};

export default Home;