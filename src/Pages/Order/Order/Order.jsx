import { useState } from 'react';
import OrderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'dessert', 'soup', 'drinks'];
    const {category} = useParams();
    const initialIndex =  categories.indexOf(category);


    const [menu] = useMenu();



    const chicken = menu.filter(item => item.category === 'chicken')
    const rice = menu.filter(item => item.category === 'rice')
    const vorta = menu.filter(item => item.category === 'vorta')
    const fish = menu.filter(item => item.category === 'fish')
    const drinks = menu.filter(item => item.category === 'drinks')



    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
             <Helmet>
            <title>Harvest&Hearth| Order Food</title>
           </Helmet>
            <Cover img={OrderImg} title='Order Food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Chicken</Tab>
                    <Tab>Rice</Tab>
                    <Tab>vorta</Tab>
                    <Tab>Fish</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>
                <TabPanel>
                   <OrderTab items={chicken} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={rice}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={vorta}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={fish}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;