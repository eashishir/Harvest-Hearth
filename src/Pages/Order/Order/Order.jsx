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



    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
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
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>
                <TabPanel>
                   <OrderTab items={salads} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;