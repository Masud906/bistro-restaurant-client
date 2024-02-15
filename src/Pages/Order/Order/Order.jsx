import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//import FoodCard from '../../../Component/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const dessert = menu?.filter(item => item.category === 'dessert');
    const soup = menu?.filter(item => item.category === 'soup');
     const salad = menu?.filter(item => item.category === 'salad');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const drinks = menu?.filter(item => item.category === 'drinks');
    return (
        <div>
           <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={() => setTabIndex}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>przza</Tab>
                    <Tab>dessert</Tab>
                    <Tab>Drinks</Tab>
<Tab>Przza</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
               </TabPanel>
           <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};
export default Order;