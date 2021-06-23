import React from 'react';

import * as styles from '~/styles/Sidebar.styles';


const Sidebar = ({ content, children, theme = 'root' }) => <div css={styles.container}>
    <div css={styles.menu} theme={theme}>{content}</div>
    <div css={styles.content} theme={theme}>{children}</div>
</div>;

export default Sidebar;