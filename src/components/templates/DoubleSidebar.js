import React from 'react';
import { Sidebar, InnerSidebar } from '~/components/atoms/Sidebar';

const DoubleSidebar = ({ leftSidebar, rightSidebar }) => <Sidebar content={leftSidebar}>
    <InnerSidebar
        content={rightSidebar}
    ></InnerSidebar>
</Sidebar>;

export default DoubleSidebar;