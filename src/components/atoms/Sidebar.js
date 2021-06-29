import React from 'react';

import * as styles from '~/styles/Sidebar.styles';


export const Sidebar = ({ content, children, style }) => <div css={styles.container}>
    <div css={[ styles.menu, style ]}>{content}</div>
    <div css={styles.content}>{children}</div>
</div>;

export const InnerSidebar = (props) => <Sidebar style={styles.innerStyle} {...props} />;