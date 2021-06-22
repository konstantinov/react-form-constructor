import React from 'react';

import * as styles from '~/styles/Sidebar.styles';


const Sidebar = ({ content, children }) => <div css={styles.container}>
    <div css={styles.menu}>{content}</div>
    <div css={styles.content}>{children}</div>
</div>;

export default Sidebar;