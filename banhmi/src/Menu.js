import React, { useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import "rc-tabs/assets/index.css";
import Product from './Product'

const Menu = () => {
    return (
        <div className="menu">
            <Tabs >
                <TabPane tab="Sandwiches" key="1">
                </TabPane>
                <TabPane tab="Appetizers" key="2">
                    Sandwiches
                </TabPane>
                <TabPane tab="Drinks" key="3">
                    Drinks
                </TabPane>

            </Tabs>
        </div>
    );
};

export default Menu;