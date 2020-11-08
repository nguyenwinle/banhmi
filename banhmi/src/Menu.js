import React, { useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import "rc-tabs/assets/index.css";

const Menu = () => {
    return (
        <div className="menu">
            <Tabs >
                <TabPane tab="tab 1" key="1">
                    first
                </TabPane>
                <TabPane tab="tab 2" key="2">
                    second
                </TabPane>
                <TabPane tab="tab 3" key="3">
                    third
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Menu;