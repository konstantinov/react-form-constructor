import React from 'react';
import Sidebar from '~/components/blocks/Sidebar';

const DoubleSidebar = ({ leftSidebar, rightSidebar }) => <Sidebar content={leftSidebar}>
    <Sidebar
        theme="inner"
        content={rightSidebar}
    ></Sidebar>
</Sidebar>;

export default DoubleSidebar;