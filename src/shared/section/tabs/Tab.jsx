import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../components/cards/card/Card';
import TabCard from './tabCards/TabCard';

const ReactTab = () => {
    return (
        <div className="container mx-auto">
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-3 gap-7">
                        <TabCard />
                        <TabCard />
                        <TabCard />
                        <TabCard />
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-7">
                        <TabCard />
                        <TabCard />
                        <TabCard />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;