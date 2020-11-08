import React, { useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import "rc-tabs/assets/index.css";

const Menu = () => {
    return (
        <div className="menu">
            <Tabs >
                <TabPane tab="Speciality" key="1">
                    Specialties
                </TabPane>
                <TabPane tab="Sandwiches" key="2">
                    Sandwiches
                </TabPane>
                <TabPane tab="Combos" key="3">
                    Combos
                </TabPane>
                <TabPane tab="Drinks" key="4">
                    Drinks
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Menu;